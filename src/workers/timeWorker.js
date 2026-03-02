self.onmessage = function(event) {
    console.log("Worker recebeu:", event.data);

    self.postMessage("Destruição da Raça Humana");
}