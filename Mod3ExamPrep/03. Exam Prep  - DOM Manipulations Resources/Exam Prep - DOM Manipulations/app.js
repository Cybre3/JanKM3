function encodeAndDecodeMessages() {
    const [messageToEncodeBox, receiveMessageBox] =
        document.querySelectorAll("textarea");
    const [buttonEncode, buttonDecode] = document.querySelectorAll("button");

    buttonEncode.addEventListener("click", encodeMessage);
    buttonDecode.addEventListener("click", decodeMessage);

    let encodedMesage = "";

    function encodeMessage() {
        let msgToEncode = messageToEncodeBox.value;
        let encodedMsg = msgToEncode
            .split("")
            .map((eachLetter) => eachLetter.charCodeAt() + 1)
            .map((eachNum) => String.fromCharCode(eachNum))
            .join("");
        receiveMessageBox.value = encodedMsg;

        encodedMesage = msgToEncode;

        messageToEncodeBox.value = "";
    }

    function decodeMessage() {
        // let msgToDecode = receiveMessageBox.value;
        // let decodedMsg = msgToDecode
        //     .split("")
        //     .map((eachLetter) => eachLetter.charCodeAt() - 1)
        //     .map((eachNum) => String.fromCharCode(eachNum))
        //     .join("");
        // receiveMessageBox.value = decodedMsg;

        // ----- OR -----

        receiveMessageBox.value = encodedMesage;
    }
}
