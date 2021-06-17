class Computer {
    constructor(ramMem, cpuGHz, hddMem) {
        this.ramMemory = ramMem;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMem;
        this.taskManager = [];
        this.installedPrograms = [];
        this.totalRamPrct = 0;
        this.totalCpuPrct = 0;
    }

    installAProgram(name, requiredSpace) {
        let programObj = { name, requiredSpace };

        if (requiredSpace > this.hddMemory) {
            throw new Error("​There is not enough space on the hard drive​");
        } else {
            this.installedPrograms.push(programObj);
            this.hddMemory -= requiredSpace;
        }

        return programObj;
    }

    uninstallAProgram(name) {
        const programInstalled = this.installedPrograms.some(
            (program) => program.name === name
        );

        if (programInstalled) {
            for (let program of this.installedPrograms) {
                if (program.name === name) {
                    this.hddMemory += program.requiredSpace;
                    this.installedPrograms.splice(program, 1);
                    return;
                }
            }
        } else {
            throw new Error("Control panel is not responding");
        }

        return this.installedPrograms;
    }
    
    openAProgram(name) {
        const openProgram = this.taskManager.some(
            (program) => program.name === name
        );

        if (openProgram) {
            throw new Error(`The ${name} is already open`);
        } else {
            const programInstalled = this.installedPrograms.some(
                (program) => program.name === name
            );

            if (programInstalled) {
                for (let program of this.installedPrograms) {
                    const programRamUsagePrct =
                        (program.requiredSpace / this.ramMemory) * 1.5;
                    const programCpuUsagePrct =
                        (program.requiredSpace / this.cpuGHz / 500) * 1.5;

                    if (program.name === name) {
                        let usageObj = {
                            name,
                            ramUsage: programRamUsagePrct,
                            cpuUsage: programCpuUsagePrct,
                        };

                        this.totalRamPrct += Number((usageObj.ramUsage).toFixed(0));
                        this.totalCpuPrct += Number((usageObj.cpuUsage).toFixed(0));

                        this.taskManager.push(usageObj);

                        if (
                            (this.totalRamPrct >= 100 && this.totalCpuPrct >= 100) ||
                            this.totalRamPrct >= 100
                        ) {
                            throw new Error(
                                `${usageObj.name} caused out of memory exception`
                            );
                        }

                        if (this.totalCpuPrct >= 100) {
                            throw new Error(
                                `${usageObj.name} caused out of cpu exception`
                            );
                        }

                        return;
                    }
                }
            } else {
                throw new Error(`This ${name} is not recognized`);
            }
        }
        return usageObj;
    }

    taskManagerView() {
        let tmViewArr = [];

        if (this.taskManager.length === 0) {
            return "All runnning smooth so far";
        } else {
            for (let program of this.taskManager) {
                tmViewArr.push(
                    `Name - ${
                        program.name
                    } | Usage - CPU: ${program.cpuUsage.toFixed(
                        0
                    )}%, RAM: ${program.ramUsage.toFixed(0)}%`
                );
            }
        }

        return tmViewArr.join("\n");
    }
}

let computer = new Computer(4096, 7.5, 250000);
computer.installAProgram("Word", 7300);
computer.installAProgram("Excel", 10240);
computer.installAProgram("PowerPoint", 12288);
computer.uninstallAProgram("Word");
computer.installAProgram("Solitare", 1500);
computer.openAProgram("Excel");
computer.openAProgram("Solitare");
console.log(computer)
console.log(computer.installedPrograms);
console.log("-".repeat(50));
console.log(computer.taskManager);

let computer2 = new Computer(4096, 7.5, 250000);
computer2.installAProgram("Word", 7300);
computer2.installAProgram("Excel", 10240);
computer2.installAProgram("PowerPoint", 12288);
computer2.installAProgram("Solitare", 1500);
computer2.openAProgram("Word");
computer2.openAProgram("Excel");
computer2.openAProgram("PowerPoint");
computer2.openAProgram("Solitare");
console.log(computer2);
console.log(computer2.taskManagerView());
