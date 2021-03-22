node-red-contrib-kakao-bizmessage-toast
================

Node-RED node for kakao-bizmessage-toast



## Install

To install the stable version use the `Menu - Manage palette - Install`
option and search for node-red-contrib-kakao-bizmessage-toast, or run the following
command in your Node-RED user directory, typically `~/.node-red`

    npm install node-red-contrib-kakao-bizmessage-toast

## Wrapper kakao-bizmessage-toast
- https://github.com/Nyuno/node-kakao-bizmessage-toast


## 기능
카카오톡 비즈메세지(알림톡/친구톡/상담톡) 전송

## 파라미터
- api : sendMessages, sendMessages, sendSameRawMessagesToMultipleUsers
- templateCode
- recipientList

# message sample
```javascript
msg = {};
msg.api = 'sendRawMessages';
msg.recipientList =  [{
  recipientNo: '01012345678',
  content: '누구누구님 안녕하세요?',
}];
return msg;
```
## Sample flow
```javascript
[{"id":"db8fe58d.b0d448","type":"kakao-bizmessage-toast","z":"b17d7b00.cf5848","name":"test","api":"sendRawMessages","templateCode":"213123","creds":"db7a1f23.b774c","x":490,"y":120,"wires":[["30b54949.46df56"]]},{"id":"8d014466.5537d8","type":"inject","z":"b17d7b00.cf5848","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":140,"y":120,"wires":[["198f8d3c.94b1e3"]]},{"id":"198f8d3c.94b1e3","type":"function","z":"b17d7b00.cf5848","name":"","func":"msg = {};\nmsg.recipientList =  [{\n  recipientNo: '01012345678',\n  content: '현호님 카플랫 이용은 어떠셨나요?',\n}];\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":300,"y":120,"wires":[["db8fe58d.b0d448"]]},{"id":"30b54949.46df56","type":"debug","z":"b17d7b00.cf5848","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":670,"y":120,"wires":[]},{"id":"db7a1f23.b774c","type":"toastkey","z":"","name":"test"}]
```
