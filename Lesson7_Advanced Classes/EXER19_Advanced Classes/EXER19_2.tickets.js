class Ticket {
    constructor(destName, price, status) {
        this.destination = destName;
        this.price = price;
        this.status = status;
    }

    static sortCrit(arr, criteria) {
        switch (criteria) {
            case 'destination':
                return arr.sort((a, b) => a.destination.localeCompare(b.destination));
            case "status":
                return arr.sort((a, b) => a.status.localeCompare(b.status));
            case "price":
                return arr.sort((a, b) => a.price - b.price);
        }
    }
}

function main(ticketDiscribeArr, sortCriteria) {
    let formattedTickArr = [];

    for (let eachTicket of ticketDiscribeArr) {
        const [destName, price, status] = eachTicket.split("|");
        formattedTickArr.push(new Ticket(destName, price, status));
    }

    console.log(Ticket.sortCrit(formattedTickArr, sortCriteria));
}

main(
    [
        "Philadelphia|94.20|available",
        "New York City|95.99|available",
        "New York City|95.99|sold",
        "Boston|126.20|departed",
    ],
    "destination"
);

main(
    [
        "Philadelphia|94.20|available",
        "New York City|95.99|available",
        "New York City|95.99|sold",
        "Boston|126.20|departed",
    ],
    "status"
);
