const firebaseConfig = {
    apiKey: "AIzaSyAfzl1U5HB47BXc20gAQZ3MhZvjN6fHCx8",
    authDomain: "chatbot-ac7f1.firebaseapp.com",
    projectId: "chatbot-ac7f1",
    storageBucket: "chatbot-ac7f1.appspot.com",
    messagingSenderId: "109416988938",
    appId: "1:109416988938:web:cb1c1d19d0a0aa7e333af3",
    measurementId: "G-Y33ZB834CX"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const auth = firebase.auth()
const db = firebase.firestore()



const sendbtn = document.querySelector('#sendbtn')
let errortype="";
let check="";

//enter button function
document.getElementById("messtype")
    .addEventListener("keyup", function(e) {
        if (e.keyCode === 13) {
            document.getElementById("sendbtn").click();
        }
    });
 //mic input
document.getElementById("mic").onclick = function() {   
    
    var recognition = new webkitSpeechRecognition();
            recognition.lang = "en-GB";

            recognition.onresult = function(event) {
                
                
                document.getElementById('messtype').value = event.results[0][0].transcript;

                document.getElementById('sendbtn').click();
            }
            recognition.start();

           
 

}
//functions
function scroll() {
    var scrollMsg = document.getElementById('chatinterface')
    scrollMsg.scrollTop = scrollMsg.scrollHeight ;
}

function defaultmessage() {
    const schat ="copy & paste the errortype, that you will recived in python programing"
            var server = document.createElement("h4");
            var servertype = document.createTextNode(schat);
            var brea = document.createElement("br");
            server.appendChild(servertype);
            server.appendChild(brea);
            chatinterface.appendChild(server);
            scroll();
             let speech = new SpeechSynthesisUtterance();
             speech.lang = "en-US";
             speech.text = schat;
             speech.volume =1;
             speech.rate = 1;
             speech.pitch = 1;

             window.speechSynthesis.speak(speech);

}

function defaultt()
{
    var server = document.createElement("h4");
    var servertype = document.createTextNode("sorry type any thing else");
       
    server.appendChild(servertype);

    chatinterface.appendChild(server);
    scroll()

    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = "sorry type any thing else";
    speech.volume =1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

function getLevenshteinDistance(a, b) {
        
    let distance = [];
    for(let i = 0; i <= a.length; i++) {
        distance[i] = [];
        for(let j = 0; j <= b.length; j++) {
            distance[i][j] = 0;
        }
    }
    for(let i = 0; i <= a.length; i++) {
        distance[i][0] = i;
    }
    for(let j = 0; j <= b.length; j++) {
        distance[0][j] = j;
    }
    for(let i = 1; i <= a.length; i++) {
        for(let j = 1; j <= b.length; j++) {
            if(a[i-1] === b[j-1]) {
                distance[i][j] = distance[i-1][j-1];
            }
            else {
                distance[i][j] = Math.min(distance[i-1][j] + 1, distance[i][j-1] + 1, distance[i-1][j-1] + 1);
            }
        }
    }
    

    
    return distance[a.length][b.length];
   
}

function givesolution(message)
{


    const myArray = message.split(/[ :(.]+/);
    const fword = myArray[0].toLowerCase();
    

    if(errortype == "")
    {
        errortype =fword;
        console.log(errortype)
    }
   
    if(errortype == "assertionerror"||errortype == "attributeerror"||errortype == "eoferror"||errortype == "floatingpointerror"||errortype == "generatorexit"||errortype == "importerror"||errortype == "indexerror"||errortype == "keyerror"||errortype == "keyboardinterrupt"||errortype == "memoryerror"||errortype == "nameerror"||errortype == "notimplementederror"||errortype == "oserror"||errortype == "overflowerror"||errortype == "referenceerror"||errortype == "runtimeerror"||errortype == "stopiterationerror"||errortype == "syntaxerror"||errortype == "indentationerror"||errortype == "taberror"||errortype == "syntaxerror"||errortype == "systemexit"||errortype == "unboundlocalerror"||errortype == "unicodeerror"||errortype == "unicodeencodeerror"||errortype == "unicodedecodeerror"||errortype == "unicodetranslateerror"||errortype == "valueerror"||errortype == "zerodivisionerror")
    {
        check = (message.includes(":")||message.includes("=")||message.includes("for")||message.includes("[")||message.includes("]")||message.includes('"')||message.includes("'")||message.includes("(")||message.includes(")"))
        console.log(check)
    }

    

    // ERROR FINDING WHETHER THE USER INPUT DOES HAVE THE ERROR WORD OR NOT
    if(fword == "assertionerror"||fword == "attributeerror"||fword == "eoferror"||fword == "floatingpointerror"||fword == "generatorexit"||fword == "importerror"||fword == "indexerror"||fword == "keyerror"||fword == "keyboardinterrupt"||fword == "memoryerror"||fword == "nameerror"||fword == "notimplementederror"||fword == "oserror"||fword == "overflowerror"||fword == "referenceerror"||fword == "runtimeerror"||fword == "stopiterationerror"||fword == "syntaxerror"||fword == "indentationerror"||fword == "taberror"||fword == "syntaxerror"||fword == "systemexit"||fword == "unboundlocalerror"||fword == "unicodeerror"||fword == "unicodeencodeerror"||fword == "unicodedecodeerror"||fword == "unicodetranslateerror"||fword == "valueerror"||fword == "zerodivisionerror")
    {
        window.localStorage.removeItem('correctsy')
        const reply="paste the error line in your program";
        var server = document.createElement("h4");
            var servertype = document.createTextNode(reply);
            var brea = document.createElement("br");
            server.appendChild(servertype);
            server.appendChild(brea);
            chatinterface.appendChild(server);
            scroll()

             let speech = new SpeechSynthesisUtterance();
             speech.lang = "en-US";
             speech.text = reply;
             speech.volume =1;
             speech.rate = 1;
             speech.pitch = 1;

             window.speechSynthesis.speak(speech);

    }
    else if(check == true)
    {
        if(errortype == "syntaxerror"||errortype=="nameerror")
        {
            const keycheck = message.split(/[ :  (   .]+/);
            const key = keycheck[0].toLowerCase();
           
            const dbRef = firebase.database().ref();
            dbRef.child("error").child(errortype).child(key).child("len").get().then((snapshot) => {   
            if (snapshot.exists()) {
                let len=""
                let sydata=""
                let sy;
                let dis=100
                sydata = snapshot.val();
                len =sydata.v;
                

                for(var l=1;l<=len;l++)
                {

                    dbRef.child("error").child(errortype).child(key).child(l).get().then((snapshot) => { 
                        if (snapshot.exists()) {
                            sydata = snapshot.val();
                            strings=sydata.v;
                            
                            let b = message;
                            let distance = getLevenshteinDistance(strings,b);
                            console.log(strings)
                            console.log(distance)
                                
                            if(dis>=distance)
                            {
                                window.localStorage.removeItem('correctsy')
                                dis=distance;
                                sy=strings;
                              localStorage.setItem("correctsy", JSON.stringify(sy));
                                
                            }
                        }
                        else{
                            console.log("No data available");
                        }
                        
                    })
                }
                       
            } else {
            console.log("No data available");
            }
            }).catch((error) => {
                console.error(error);
            }).then(()=>{
                setTimeout(() => {
                let retrievedData = JSON.parse(localStorage.getItem("correctsy"));
                       
                        const reply = retrievedData;
                       
                        var server = document.createElement("h4");
                        var servertype = document.createTextNode(reply);
                        var brea = document.createElement("br");
                        server.appendChild(servertype);
                        server.appendChild(brea);
                        chatinterface.appendChild(server);
                        scroll()
                        errortype = ""
                        check = false;  
            
                         let speech = new SpeechSynthesisUtterance();
                         speech.lang = "en-US";
                         speech.text = reply;
                         speech.volume =1;
                         speech.rate = 1;
                         speech.pitch = 1;
            
                         window.speechSynthesis.speak(speech);

                         
                        }, 2000);
            })

        }
        else if(errortype=="indexerror")
        {
            const indexcheck = (message.includes("[")||message.includes("]"))
            if(indexcheck==true)
            {
                const reply = "You try to call the undefined index, so try to define the index or call the define index"
           
            var server = document.createElement("h4");
            var servertype = document.createTextNode(reply);
            var brea = document.createElement("br");
            server.appendChild(servertype);
            server.appendChild(brea);
            chatinterface.appendChild(server);
            scroll()
            errortype = ""
            check = false;  

             let speech = new SpeechSynthesisUtterance();
             speech.lang = "en-US";
             speech.text = reply;
             speech.volume =1;
             speech.rate = 1;
             speech.pitch = 1;

             window.speechSynthesis.speak(speech);
            }
            else
            {
                const reply = "The given program line is irrelevant to the mentioned error type, So Do the process again"
           
            var server = document.createElement("h4");
            var servertype = document.createTextNode(reply);
            var brea = document.createElement("br");
            server.appendChild(servertype);
            server.appendChild(brea);
            chatinterface.appendChild(server);
            scroll()
            errortype = ""

             let speech = new SpeechSynthesisUtterance();
             speech.lang = "en-US";
             speech.text = reply;
             speech.volume =1;
             speech.rate = 1;
             speech.pitch = 1;

             window.speechSynthesis.speak(speech);
            }
            
        } 
    }
   
    else
    {
        // CHECK THE MESSAGE THAT AVAILABLE IN DATA SET OR FIREBASE OR DATA STORE
    const docRef = db.collection('reply').doc(message)
    docRef.get().then(doc => {
        const reply = `${doc.data().message}`
           
            var server = document.createElement("h4");
            var servertype = document.createTextNode(reply);
            var brea = document.createElement("br");
            server.appendChild(servertype);
            server.appendChild(brea);
            chatinterface.appendChild(server);
            scroll()
            errortype = ""

             let speech = new SpeechSynthesisUtterance();
             speech.lang = "en-US";
             speech.text = reply;
             speech.volume =1;
             speech.rate = 1;
             speech.pitch = 1;

             window.speechSynthesis.speak(speech);


    }).catch(err => {
        defaultt()
    })
    }
    

}

function serverreply()
{
    
}
window.localStorage.removeItem('correctsy')
//user message send
document.getElementById("sendbtn").onclick = function() {

    const message = document.querySelector('#messtype').value
    document.getElementById('messtype').value = ''
    
    var user = document.createElement("p");
    var usertype = document.createTextNode(message);
    var brea = document.createElement("br");
    
    

// USER AND CHAT BOT MESSAGE INSERTION INTO DESIRED FORMAT
    user.appendChild(usertype);
    user.appendChild(brea);
    chatinterface.appendChild(user);
    scroll()
    
    givesolution(message)
    
   
    

}


const bot = document.querySelector('#bot')
const complier = document.querySelector('#complier')
const logout = document.querySelector('#logout')

const chatbotpage = document.querySelector('.chatbot')
const pycompiler = document.querySelector('.coimpler')

complier.addEventListener('click' , event => {

    chatbotpage.style.display='none'
    pycompiler.style.display='block'

})

bot.addEventListener('click' , event => {
    pycompiler.style.display='none'
    chatbotpage.style.display='block'

})

logout.addEventListener('click' , event => {
    auth.signOut().then(() => {
        window.localStorage.removeItem('currently_loggedIn')
        window.location.href = 'index.html'

    }).catch(() => {
        console.log('Error Occurred While Sign Out')
    })

})
