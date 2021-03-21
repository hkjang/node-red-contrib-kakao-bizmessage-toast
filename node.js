const ToastKakaoBizmessage = require("kakao-bizmessage-toast");
module.exports = function (RED) {
    function FunctionNode(n) {
        RED.nodes.createNode(this, n);
        if (RED.nodes.getNode(n.creds)){
            this.appKey = RED.nodes.getNode(n.creds).credentials.appKey;
            this.secretKey = RED.nodes.getNode(n.creds).credentials.secretKey;
        } else {
            this.appKey = "";
            this.secretKey = "";
        }
        var node = this;
        this.name = n.name;
        const client = new ToastKakaoBizmessage({
            appKey: this.appKey,
            secretKey: this.secretKey,
        });
        for (var key in n) {
            node[key] = n[key] || "";
        }
        this.on('input', function (msg) {
            for (var i in msg) {
                if (i !== 'req' | i !== 'res' | i !== 'payload' | i !== 'send' | i !== '_msgid') {
                    node[i] = node[i] || msg[i];
                }
            }
            client[node.api](node.templateCode, node.recipientList, node.content)
                .catch(function (err){
                    node.error(err);
                }).finally(function (res){
                    msg.payload = 'done';
                    node.send(msg);
                })

        });
    }

    RED.nodes.registerType("kakao-bizmessage-toast", FunctionNode, {
        credentials: {
            appKey: {type:"text"},
            secretKey: {type:"text"}
        }
    });

    function toastkey(n){
        RED.nodes.createNode(this, n);
        this.appKey = n.appKey;
        this.secretKey = n.secretKey;
    }

    RED.nodes.registerType("toastkey", toastkey,{
        credentials: {
            appKey: {type:"text"},
            secretKey: {type:"text"}
        }
    });

};

