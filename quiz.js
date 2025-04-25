const quizData = [
    // Week 0
    {
        question: "Which of the following allows us to identify objects and extract information?",
        options: ["RFID", "Sensors", "Actuators", "IoT Nodes"],
        correct: "RFID"
    },
    {
        question: "How many layers does Zigbee consist of?",
        options: ["1", "2", "3", "4"],
        correct: "4"
    },
    {
        question: "Which of the following is not a component of cloud computing?",
        options: ["Clients", "Local Servers", "Services", "Applications"],
        correct: "Local Servers"
    },
    {
        question: "Which of the following is a distance measuring sensor module?",
        options: ["DHT22", "HC-SR04", "TSL2591", "HC-SR505"],
        correct: "HC-SR04"
    },
    {
        question: "Which of the following is a component in a typical sensor network?",
        options: ["Sink", "Gateway", "Router", "All of these"],
        correct: "All of these"
    },
    {
        question: "Which of the following sensors are responsible for measuring orientation and angular velocity?",
        options: ["Accelerometer", "GPS", "Temperature", "None of these"],
        correct: "None of these" // Gyroscope
    },
    {
        question: "“ISA 100.11A” is a wireless networking technology standard. ISA stands for _______.",
        options: ["International Society of Automation", "International Society of Advancement", "Industrial Society of Automation", "Industrial Society of Advancement"],
        correct: "International Society of Automation"
    },
    {
        question: "Which of the following is not a difference between traditional data center and cloud computing?",
        options: ["Scalability", "Flexibility", "Elasticity", "Storage"],
        correct: "Storage"
    },
    {
        question: "Smart grid is also known as the energy internet.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "Can a point of node failure result in the partition of the network in the stationary sensor network?",
        options: ["Yes", "No"],
        correct: "Yes"
    },
    // Week 1
    {
        question: "IoT stands for ____________.",
        options: ["Internet of Tasks", "Internet of Tuples", "Internet of Things", "None of these"],
        correct: "Internet of Things"
    },
    {
        question: "Which of the following technologies have unified and has resulted in the evolution of IoT?",
        options: ["High-power embedded systems", "Super Computing", "Engine Technology", "None of these"],
        correct: "None of these" // Low-power embedded systems, Cloud Computing, Big Data, ML, Networking
    },
    {
        question: "Which of the following are the enables of IoT?",
        options: ["RFID", "Nanotechnology", "Sensors", "All of these"],
        correct: "All of these"
    },
    {
        question: "Which of the following is NOT a function of an IoT LAN?",
        options: ["Long range communication, global", "World wide connections", "Both (a) and (b)", "Neither (a) Nor (b)"],
        correct: "Both (a) and (b)" // IoT LAN is local, short-range
    },
    {
        question: "Statement: The integration of existing devices, smart devices, and constrained nodes in a singular framework is one of the reasons for the address crunch in IoT.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "Statement: “In Multi-homing, a node/network is connected to a single network for improved reliability.",
        options: ["True", "False"],
        correct: "False" // Connected to multiple networks
    },
    {
        question: "Which of the following is/are the approach/approaches for multi-homing?",
        options: ["Proxy-based approach", "Gateway-based approach", "Both (a) and (b)", "None of these"],
        correct: "Both (a) and (b)"
    },
    {
        question: "IPv6 uses ____________ notation for its representation.",
        options: ["Hexadecimal", "Binary", "Decimal", "None of these"],
        correct: "Hexadecimal"
    },
    {
        question: "State True or False. The parameters sensed by a sensor may be sent to the cloud for further processing.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "The IPv6 notation uses ___________________ number of bits to represent an address.",
        options: ["64", "128", "Both (a) and (b)", "Neither (a) nor (b)"],
        correct: "128"
    },
    {
        question: "A sensor is -",
        options: ["Only sensitive to the measured property", "Insensitive to any other property that what the sensor is made to sense", "Both (a) and (b)", "None of these"],
        correct: "Both (a) and (b)"
    },
    {
        question: "We classify sensors based on -",
        options: ["Output", "Data type", "Both (a) and (b)", "None of these"],
        correct: "None of these" // Should be Both (a) and (b) based on lecture, but the provided answer key says None. Let's stick to the key for consistency.
    },
    {
        question: "Which of the following is correct statement",
        options: ["Controlling AC loads using low DC signals", "Relays are electromechanical", "Relays are actuators", "All of these"],
        correct: "All of these"
    },
    {
        question: "Based on the output, sensors are classified as _______________________.",
        options: ["Analog", "Digital", "Both (a) and (b)", "Neither (a) nor (b)"],
        correct: "Both (a) and (b)"
    },
    {
        question: "Soft actuators are -",
        options: ["Polymer-based", "Mechanical", "Electromechanical", "None of these"],
        correct: "Polymer-based"
    },
    // Week 2
    {
        question: "Based on functionality, MQTT is a _______ protocol.",
        options: ["Transport", "Data", "Semantic", "None of these"],
        correct: "Data"
    },
    {
        question: "MQTT is designed for -",
        options: ["Remote connections", "Limited bandwidth", "Both (a) and (b)", "Neither (a) nor (b)"],
        correct: "Both (a) and (b)"
    },
    {
        question: "MQTT protocol follows _____________ paradigm for exchanging messages.",
        options: ["Client-Server", "Publish-Subscribe", "Both (a) and (b)", "None of these"],
        correct: "Publish-Subscribe" // Note: Original options were numbers
    },
    {
        question: "Statement: “In MQTT, the Subscribers are Lightweight Sensors.”",
        options: ["True", "False"],
        correct: "False" // Publishers are lightweight sensors
    },
    {
        question: "Which of the following is MQTT component?",
        options: ["Middleman", "Mules", "Both (a) and (b)", "None of these"],
        correct: "None of these" // Publishers, Subscribers, Brokers
    },
    {
        question: "State True or False. A topic in MQTT can only be numbers.",
        options: ["True", "False"],
        correct: "False" // It's a string
    },
    {
        question: "State True or False. There are only two methods specified by the MQTT protocol.",
        options: ["True", "False"],
        correct: "False" // There are 5 methods
    },
    {
        question: "The Publish/Subscribe architecture in MQTT is _____________ driven.",
        options: ["Event", "Pulse", "Sound", "None of these"],
        correct: "Event"
    },
    {
        question: "State True or False. The topic is the routing information for the broker.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "CoAP is _____________ and ____________.",
        options: ["Based on HTTP", "Is designed for M2M applications", "None of these", "Both (a) and (b)"],
        correct: "Both (a) and (b)"
    },
    {
        question: "In CoAP, client-server interaction is asynchronous over a datagram transport protocol such as ____________.",
        options: ["UDP", "TCP", "IP", "XMP"],
        correct: "UDP"
    },
    {
        question: "What is the full form of AMQP?",
        options: ["Advanced Message Querying Protocol", "Advanced Message Quality Protocol", "Advanced Message Queuing Protocol", "None of these"],
        correct: "Advanced Message Queuing Protocol"
    },
    {
        question: "AMQP has _______ number of frame types.",
        options: ["6", "3", "5", "9"],
        correct: "9"
    },
    {
        question: "Statement: “The OSI model has 7 layers.”",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "The “Destination Address” in the IPv4 packet represents which of the following?",
        options: ["The source node address of the packet", "The intermediate hop in the network", "Both (a) and (b)", "Neither (a) nor (b)"],
        correct: "Neither (a) nor (b)" // Represents the destination node address
    },
    // Week 3
    {
        question: "Statement: “WirelessHART is the latest release of Highway Addressable Remote Transducer protocol.”",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "Statement: “Wired HART has a network layer.”",
        options: ["True", "False"],
        correct: "False"
    },
    {
        question: "Statement: “WirelessHART physical layer is derived from 802.15.2 protocol”",
        options: ["True", "False"],
        correct: "False" // Derived from 802.15.4
    },
    {
        question: "WirelessHART operates only in __________ GHz ISM band.",
        options: ["3.7", "4.8", "4.8", "2.4"], // Duplicate 4.8 kept for consistency
        correct: "2.4"
    },
    {
        question: "HART standard was developed from _____________ smart field devices.",
        options: ["amplified", "diminished", "isolated", "networked"],
        correct: "networked"
    },
    {
        question: "Main difference between wired and unwired versions is in the physical, data link, and ______ layers.",
        options: ["Data link", "Network", "Transport", "None of these"],
        correct: "Network"
    },
    {
        question: "Statement: “Collision free and deterministic communication is achieved in HART’s data link layer.”",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "Channel hopping is incorporated in which layer of HART?",
        options: ["Data link layer", "Physical layer", "Application layer", "Transport layer"],
        correct: "Data link layer"
    },
    {
        question: "Statement: “The HART application layer is responsible for extracting commands from a message, executing it and generating responses.”",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "NFC is designed for use by devices within ________________ to each other.",
        options: ["Anywhere on the globe", "A small building", "Both (a) and (b)", "None of these"],
        correct: "None of these" // Close proximity
    },
    {
        question: "Passive NFC devices ___________ information which is _____________ by other devices.",
        options: ["contain, read", "read, contain", "contain, contain", "None of these"],
        correct: "contain, read"
    },
    {
        question: "Statement: “NFC devices work on the principle of magnetic induction.”",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "Bluetooth technology is based on _________________.",
        options: ["HART", "ZigBee", "All of these", "None of these"],
        correct: "None of these" // Ad-hoc piconets
    },
    {
        question: "Statement: The Link Manager Protocol in Bluetooth manages the only establishment and authentication.",
        options: ["True", "False"],
        correct: "False" // Manages establishment, authentication, link configuration
    },
    {
        question: "Zigbee commonly uses __________data rate.",
        options: ["260 bps", "260 kbps", "260 Mbps", "None of these"],
        correct: "None of these" // 250 kbps
    },
    // Week 4
    {
        question: "Statement: In “AID”, a set of sensor nodes are deployed over an agricultural field.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "Statement: Ultrasonic sensor senses the distance at which an object is located.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "Statement: In case of static sensors, where to deploy and/or activate sensors in WSN is a coverage problem.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "Statement: Objective of coverage in WSN is to use maximum number of sensors and minimize network lifetime.",
        options: ["True", "False"],
        correct: "False" // Minimize sensors, maximize lifetime
    },
    {
        question: "Statement: “A crossing is covered if it is in the interior of at least one node’s coverage disk.”",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "Which of the following is/are correct for stationary wireless sensor networks.",
        options: ["Topology cannot be changed automatically.", "Node failure may result in partition of networks.", "Both (a) and (b)", "None of these"],
        correct: "Both (a) and (b)"
    },
    {
        question: "Most problems in static WSN can be classified as -",
        options: ["No coverage", "More coverage", "Both (a) and (b)", "None of these"],
        correct: "None of these" // Area, Point, Barrier coverage
    },
    {
        question: "Which of the following is/are correct with respect UAV networks?",
        options: ["Multi-tasking", "Large coverage area", "Both (a) and (b)", "None of these"],
        correct: "Both (a) and (b)"
    },
    {
        question: "Statement: UAV networks are scalable.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "In Mobile WSN, the Data Mules",
        options: ["Collect the data from sensor nodes", "Goes to the sink and delivers the collected data", "Both (a) and (b)", "Neither (a) nor (b)"],
        correct: "Both (a) and (b)"
    },
    {
        question: "The full form of AUV is -",
        options: ["Antenna Used Vehicle", "Autonomous Underwater Vehicle", "Both (a) and (b)", "Neither (a) nor (b)"],
        correct: "Autonomous Underwater Vehicle"
    },
    {
        question: "Humans carry their devices and move around. Sensors embedded within the devices record readings. Sensory readings are then transmitted for processing. This paradigm of sensing is known as –",
        options: ["Machine Centric Sensing", "Device Centric Sensing", "Human Centric Sensing", "None of these"],
        correct: "Human Centric Sensing"
    },
    {
        question: "State True or False. Energy of Devices and Participant selection are not two major problems in Human Centric Sensing.",
        options: ["True", "False"],
        correct: "False" // They ARE major problems
    },
    {
        question: "Which of the following network topologies is used in UAV networks?",
        options: ["Bus", "Star", "Both (a) and (b)", "Neither (a) nor (b)"],
        correct: "Star" // Also Mesh
    },
    {
        question: "State true of false. The M2M Application Platform provides integrated services based on device collected data-sets.",
        options: ["True", "False"],
        correct: "True"
    },
    // Week 5
    {
        question: "Which of the following is/are current challenges in IoT?",
        options: ["Large scale of co-operation", "Global heterogeneity", "Both (a) and (b)", "Neither (a) nor (b)"],
        correct: "Both (a) and (b)"
    },
    {
        question: "Statement: “Interoperability is not a characteristic of a product or system.”",
        options: ["True", "False"],
        correct: "False" // It IS a characteristic
    },
    {
        question: "Interoperability is required because",
        options: ["There are different programming languages", "There are different communication protocols", "Both (a) and (b)", "Neither (a) nor (b)"],
        correct: "Both (a) and (b)"
    },
    {
        question: "Statement: “Use of different programming languages such as JavaScript, Python, JAVA, and others is an example of heterogeneity in IoT. This brings in the need for interoperability.”",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "Statement: “The interoperability between devices and device users in terms of message formats is called Systematic Interoperability.”",
        options: ["True", "False"],
        correct: "False" // It's Syntactic Interoperability
    },
    {
        question: "What is the full form of UMB in IoT interoperability?",
        options: ["Universal Meta Bridge", "Universal Main Bridge", "Universal Main Bracket", "None of these"],
        correct: "None of these" // Universal Middleware Bridge
    },
    {
        question: "State true of false. Arduino is an open-source electronic programmable board.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "State true or false. Additional electronic circuits are essential to load a program into the Arduino controller board.",
        options: ["True", "False"],
        correct: "False"
    },
    {
        question: "Arduino UNO has _________ number of Digital I/O pins.",
        options: ["8", "13", "14", "None of these"],
        correct: "14"
    },
    {
        question: `What does the following code do?
int ledPin = 13;
void setup() {
pinMode(ledPin, OUTPUT);
for (int i = 0; i < 3; i++) {
digitalWrite(ledPin, HIGH);
delay(1000);
digitalWrite(ledPin, LOW);
delay(500);
}
}
void loop() {
// Do nothing
}`,
        options: ["Blink 3 times with 1000ms ON and 500ms OFF", "Blink 3 times with 500ms ON and 500ms OFF", "Blink 3 times with 1000ms ON and 1000ms OFF", "Stay ON continuously"],
        correct: "Blink 3 times with 1000ms ON and 500ms OFF"
    },
    {
        question: "How many types of loops will you find in Arduino Programming?",
        options: ["1", "2", "3", "4"],
        correct: "3" // for, while, do-while
    },
    {
        question: "Choose the right option for if/conditional operator.",
        options: ["Val = (condition)?(Statement 1):(Statement 2)", "Val = (condition)?(Statement 2):(Statement 1)", "Val = (condition):(Statement 1)?(Statement 2)", "Val = (condition):(Statement 2)?(Statement 1)"],
        correct: "Val = (condition)?(Statement 1):(Statement 2)"
    },
    {
        question: "What is the purpose of calling dht.begin(); in the setup() function?",
        options: ["To initialize the Serial Monitor", "To start communication with the DHT sensor", "To set the temperature and humidity values to zero", "To define the data pin for the sensor"],
        correct: "To start communication with the DHT sensor"
    },
    {
        question: "What function is used to read the humidity value from the DHT sensor?",
        options: ["dht.getHumidity();", "dht.readTemp();", "dht.readHumidity();", "dht.getTemperature();"],
        correct: "dht.readHumidity();"
    },
    {
        question: "What function is used to set the servo motor to a specific angle?",
        options: ["ServoDemo.move()", "ServoDemo.rotate()", "ServoDemo.write()", "ServoDemo.setAngle()"],
        correct: "ServoDemo.write()"
    },
     // Week 6
    {
        question: "Statement: “Python is popular for embedded application development as it is a very lightweight programming language.”",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "State True or False. Adafruit provides a library to work with DHT22 Sensor.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: `Consider the following piece of Python code. What is the output?
x = [4, 5, 6]
y = [str(x[0] + 1), str(len(x) * 2) + '&Code']
z = y[1].split('&')
print(z[1])`,
        options: ["5", "12", "Code", "&Code"],
        correct: "Code"
    },
    {
        question: "Statement: “To indicate different blocks of code, Python follows rigid indentation.”",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "What is the output of the following line of code in Python?\n>>> print “Hi, Welcome to python!”",
        options: ["Hi, Welcome to python!", "“Hi, Welcome to python!”", "Hi, Welcome to python", "None of these"],
        correct: "Hi, Welcome to python!" // Assumes Python 2 syntax based on quotes
    },
    {
        question: "During remote server access by a Raspberry Pi, where the Raspberry Pi acts as a client, the client needs the following?",
        options: ["Only IP address of server", "Only port number", "Both server IP address and port number", "Client’s IP address"],
        correct: "Both server IP address and port number"
    },
    {
        question: "State whether the following command to install the PIL library is correct or not.\nsudo pip install pillow",
        options: ["Correct", "Incorrect"],
        correct: "Correct"
    },
    {
        question: "What is the purpose of the \"w\" mode in the open() function in Python?",
        options: ["To read a file", "To write data to a file, overwriting existing content", "To append data to a file", "To open a file in read and write mode"],
        correct: "To write data to a file, overwriting existing content"
    },
    {
        question: `What will be the output of the given Python program when reading from the file?
with open("PythonProgram.txt", "w") as file:
file.write("Writing data")
with open("PythonProgram.txt", "r") as file:
f = file.read() print('Reading from the file\\n') print(f)`,
        options: ["Writing data", "Reading from the file\nWriting data", "Error: File not found", "None of the above"],
        correct: "Reading from the file\nWriting data"
    },
    {
        question: "Can we configure Raspberry Pi as a File Server?",
        options: ["Yes", "No"],
        correct: "Yes"
    },
    {
        question: "Which command is used to configure the Raspberry Pi for the camera module?",
        options: ["sudo camera-config", "sudo raspi-config", "sudo enable-camera", "sudo pi-setup"],
        correct: "sudo raspi-config"
    },
    {
        question: "What is the final step after enabling the camera in the Raspberry Pi configuration?",
        options: ["Restart the camera service", "Run a camera test command", "Reboot the Raspberry Pi", "Reinstall the Raspberry Pi OS"],
        correct: "Reboot the Raspberry Pi"
    },
    {
        question: "Which command Exits the nano editor?",
        options: ["Ctrl + X", "Ctrl + O", "Ctrl + K", "None of these"],
        correct: "Ctrl + X"
    },
    {
        question: "In a temperature-controlled fan system using a relay, when should the fan turn on?",
        options: ["When the relay is manually triggered", "When the surrounding temperature is lower than a predefined threshold", "When the surrounding temperature exceeds a predefined threshold", "When the battery voltage drops below a certain level"],
        correct: "When the surrounding temperature exceeds a predefined threshold"
    },
    {
        question: "What does the following line of code do?\nraspistillcapture -o image.jpg",
        options: ["Captures video feed", "Captures still image", "Both (a) and (b)", "None of these"],
        correct: "None of these" // Command is incorrect (should be raspistill)
    },
    // Week 7
    {
        question: "In Python socket programming, while defining a socket, SOCK_STREAM refers to a type of",
        options: ["SocketFamily", "SocketType", "SocketName", "SocketProtocol"],
        correct: "SocketType"
    },
    {
        question: "If you want to change the label of the Y-axis while plotting a graph using matplotlib in Python, what among the following functions do you use? Suppose you have imported matplotlib as plt",
        options: ["plt.show()", "plt.plot()", "plt.ylabel()", "plt.yaxis()"],
        correct: "plt.ylabel()"
    },
    {
        question: "In Socket programming, the parameter AF_INET stands for __________.",
        options: ["Unix protocols", "Internet Protocol (IP)", "File sharing", "Time slicing"],
        correct: "Internet Protocol (IP)"
    },
    {
        question: "Suppose a Python server is receiving data from a socket as follows,\ndata, addr = sock.recvfrom(1024)\nWhat kind of socket ‘sock’ is being considered here.",
        options: ["TCP socket", "UDP socket", "TAP socket", "None of the given"],
        correct: "UDP socket"
    },
    {
        question: "What is the use of the Mobi-Flow protocol?",
        options: ["Enabling static SDN", "Enabling SDN to incorporate mobility", "Enabling Odin Master", "Enabling traditional BGP"],
        correct: "Enabling SDN to incorporate mobility"
    },
    {
        question: "During remote server access using socket programming what is the utility of the <socket_name>.listen() function?",
        options: ["To create a new socket", "To bind the socket to connection", "To wait for clients to connect", "To close the connection"],
        correct: "To wait for clients to connect"
    },
    {
        question: "Which among the following is the correct direction for PACKET_OUT type messages in SDN?",
        options: ["From controller to switch", "From switch to controller", "Between two switches", "Between two controllers"],
        correct: "From controller to switch" // Note: Answer key says 'a', but description implies 'b'. Sticking to key 'a'. Re-check lecture 33 ppt 20 if needed. Let's assume the key is correct.
    },
    {
        question: "Which among the following is a limitation of the traditional non-SDN networks?",
        options: ["Switches do not possess routing table", "Switches are unable to forward traffic", "Switches do not have a global view of the network.", "All of the given"],
        correct: "Switches do not have a global view of the network."
    },
    {
        question: "During remote server access by a Raspberry Pi, where the Raspberry Pi acts as a client, the client needs the following?",
        options: ["Only IP address of server", "Only port number", "Both server IP address and port number", "Client’s IP address"],
        correct: "Both server IP address and port number" // Duplicate from Week 6, kept for consistency
    },
    {
        question: "With respect to the concept of soft time-out and hard time-out in SDN switches, which of the following relations hold?",
        options: ["Soft time-out > = hard time-out", "Hard time-out >= soft time-out", "Soft time-out = hard time-out always", "None of the given"],
        correct: "Hard time-out >= soft time-out"
    },
    {
        question: "Which of the following is true?",
        options: ["Traditional Network: Routing Table, Software Defined Network: Routing Table", "Traditional Network: Flow Table, Software Defined Network: Routing Table", "Traditional Network: Routing Table, Software Defined Network: Flow Table", "Traditional Network: Flow Table, Software Defined Network: Flow Table"],
        correct: "Traditional Network: Routing Table, Software Defined Network: Flow Table"
    },
    {
        question: "Consider the following figure below. To which issue of SDN does this particular figure can be related to? [Image Placeholder - Figure showing SDN flow table structure]",
        options: ["Controller placement issue", "Flow Rule placement issue", "Hardware placement issue", "Analysis placement issue"],
        correct: "Flow Rule placement issue" // Assuming the image shows flow table structure
    },
    {
        question: "With respect to the directional APIs in SDN, what is the functionality of East-Westbound APIs?",
        options: ["To communicate between the controller and switches", "To communicate among multiple controllers", "East-Westbound APIs do not exist", "To communicate between switches themselves."],
        correct: "To communicate among multiple controllers"
    },
    {
        question: "Hierarchical SDN architecture is also known as __________ architecture.",
        options: ["Tree", "Flat", "Mesh", "Line"],
        correct: "Tree"
    },
    {
        question: "Integrating SDN with IoT is not recommended and is not a suitable approach to follow",
        options: ["False", "True"],
        correct: "False"
    },
     // Week 8
    {
        question: "What is Sensor Openflow?",
        options: ["A traditional routing protocol", "A queue management protocol", "An SDN protocol tailored for IoT devices", "A physical connectivity protocol."],
        correct: "An SDN protocol tailored for IoT devices"
    },
    {
        question: "With respect to Mobi-Flow, how does Mobi-Flow fare in comparison to Conventional networking in terms of message overhead?",
        options: ["Mobi-Flow > Conventional", "Mobi-Flow < Conventional", "Mobi-Flow = Conventional", "None of the given"],
        correct: "Mobi-Flow < Conventional"
    },
    {
        question: "Virtual Machines came before Cloud Computing.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "Private cloud services cannot provide Software-as-a-Service (SaaS).",
        options: ["True", "False"],
        correct: "False" // Any deployment model can provide any service model
    },
    {
        question: "Which among the following is a solution for mobility-aware flow rule placement in SDIoT?",
        options: ["Mobility-Flow", "Mobile-Flow", "Mobi-Flow", "M-Flow"],
        correct: "Mobi-Flow"
    },
    {
        question: "An organization A wants to deploy a cloud infrastructure... [Scenario described: mix of public and private needs]",
        options: ["Private Cloud", "Public Cloud", "Hybrid Cloud", "Any of these"],
        correct: "Hybrid Cloud"
    },
    // Adding missing questions from the initial list provided in the first interaction
     {
        question: "Which of the following type of client requires constant communication/connection with the cloud server?",
        options: ["Thin client", "Thick client", "None of these", "Both thin and thick clients"],
        correct: "Thin client"
    },
    {
        question: "What does ‘CIA’ in cloud data security stand for?",
        options: ["Confidentiality, Inheritance, Automation", "Criticality, Integrity, Accountability", "Congestion, Integrity, Authentication", "Confidentiality, Integrity, Availability"],
        correct: "Confidentiality, Integrity, Availability"
    },
    {
        question: "Which among the following is the most on-premise cloud deployment model?",
        options: ["PaaS", "Public cloud", "IaaS", "Private Cloud"],
        correct: "Private Cloud"
    },
    // --- Questions added from pyq.txt ---
    {
        question: "Which of the following is/are the characteristics of IoT?",
        options: ["Efficient, scalable and associated architecture.", "Unambiguous naming and addressing.", "Abundance of sleeping nodes, mobile and non-IP device.", "All of the these"],
        correct: "All of the these"
    },
    {
        question: "A ___________ allows us to use our smartphones to lock and unlock our door remotely at\nour homes or our businesses.",
        options: ["Smart Meter", "ATM", "Digital Lock", "Web"],
        correct: "Digital Lock"
    },
    {
        question: "The function/functions of an IoT Gateway is/are to?",
        options: ["Forward packets between LAN and WAN and on the IP layer", "Connect IoT LAN to a WAN", "Both (a) and (b)", "None of these"],
        correct: "Both (a) and (b)"
    },
    {
        question: "Multi-homing is the concept where a node can be connected to multiple networks for _________.",
        options: ["Reduced Reliability", "Improved Reliability", "None of these", "Both (a) and (b)"],
        correct: "Improved Reliability"
    },
    {
        question: "A Passive Infrared Ray (PIR) sensor is used for ____________?",
        options: ["Humidity Detection", "Tilt Detection", "Obstacle Detection", "Smoke Detection"],
        correct: "Obstacle Detection"
    },
    {
        question: "For which of the following, Vector Sensors are required to measure or sense them?",
        options: ["Color, Pressure, Temperature", "Orientation, Image", "None of these", "Both (a) and (b)"],
        correct: "Orientation, Image"
    },
    {
        question: "The sensitivity of a sensor under real conditions may differ from the value specified. This is\ncalled _____________?",
        options: ["Maximal Error", "Minimal Error", "Median Error", "Sensitivity Error"],
        correct: "Sensitivity Error"
    },
    {
        question: "A random deviation of the signal that varies in time is called ____________.",
        options: ["Noise", "Sound", "Bias", "None of these"],
        correct: "Noise"
    },
    {
        question: "A Relay Switch is an example of _____________.",
        options: ["A Sensor", "An Actuator", "A Transducer", "None of These"],
        correct: "An Actuator"
    },
    {
        question: "What is a Pneumatic Actuator?",
        options: ["It is a type of actuator driven by compressed air or vacuum", "It is a type of actuator driven by fluid", "It is a type of actuator driven by solid", "None of these"],
        correct: "It is a type of actuator driven by compressed air or vacuum"
    },
    {
        question: "Which type of actuators tend to be compact, lightweight, economical, and with high power\ndensity?",
        options: ["Thermal or Magnetic Actuators", "Hydraulic Actuators", "Both (a) and (b)", "None of these"],
        correct: "Thermal or Magnetic Actuators"
    },
    {
        question: "Polymer based actuators designed to handle fragile objects like fruit harvesting in agriculture or\nmanipulating internal organs in biomedicine are called?",
        options: ["Pneumatic Actuators", "Soft Actuators", "Software Actuators", "Hardware Actuators"],
        correct: "Soft Actuators"
    },
    {
        question: "Full form of SMP is _______________________?",
        options: ["Soft Memory Polymer", "Shape Memory Polymer", "Software Memory Polymer", "None of these"],
        correct: "Shape Memory Polymer"
    },
    {
        question: "Duty Cycling of the sensors is managed by which component of IoT?",
        options: ["Application", "Real-Time Kernel", "Radios", "Power Management Unit"],
        correct: "Power Management Unit"
    },
    {
        question: "Which of the following are challenges of IoT",
        options: ["Security", "Complexity Management", "Modeling and Analysis", "All of these"],
        correct: "All of these"
    },
    {
        question: "Which of the following is based on the publish-subscribe model?",
        options: ["MQTT", "HTTP", "HTTPS", "All of these"],
        correct: "MQTT"
    },
    {
        question: "In MQTT, a topic to which a client is subscribed is updated in the form of messages and\ndistributed by the ____________________?",
        options: ["Publishers", "Message Broker", "Subscribers", "All of these"],
        correct: "Message Broker"
    },
    {
        question: "Which of the following is used when more than one level needs to be subscribed, such as\nthe entire sub-tree, i.e., a multilevel wildcard?",
        options: ["+", "#", "\\", "None of these"],
        correct: "#"
    },
    {
        question: "The CoAP protocol is designed for -.",
        options: ["Heavy Web Application", "Publish-Subscribe Applications", "Machine-to-Machine (M2M) applications", "Both (a) and (b)"],
        correct: "Machine-to-Machine (M2M) applications"
    },
    {
        question: "Statement I – The messaging sub-layer of CoAP, is responsible for reliability and\nduplication of messages.\nStatement II – The request/response sub-layer is responsible for communication.\nWhich of the above statement/statements is/are correct?",
        options: ["Only Statement I", "Only Statement II", "Both Statement I and II", "Statement I Correct but Statement II Incorrect"],
        correct: "Both Statement I and II"
    },
    {
        question: "Which of the following is a messaging mode in CoAP?",
        options: ["Append", "Substitute", "Attempt", "Separate"],
        correct: "Separate"
    },
    {
        question: "Which of the following provides for the discovery of services residing locally or across a\nnetwork?",
        options: ["Internet", "SMQTT", "XMPP", "CoAP"],
        correct: "XMPP"
    },
    {
        question: "AMQP is a protocol of which layer?",
        options: ["Transport Layer", "Application Layer", "Network Layer", "Session Layer"],
        correct: "Application Layer"
    },
    {
        question: "Which of the following is NOT a feature of the AMQP protocol?",
        options: ["Closed Standard", "Security", "Reliability", "Routing"],
        correct: "Closed Standard"
    },
    {
        question: "There are a total of _________ number of AMQP frame types are defined that are used to\ninitiate, control, and tear down the transfer of messages between two peers.",
        options: ["Seven", "Eight", "Nine", "None of these"],
        correct: "Nine"
    },
    {
        question: "The function/functions of the Queue component of the AMQP protocol is/are",
        options: ["Receive messages and route them to queues", "Separate queues for separate business process", "Consumer receive messages from queues", "Both (b) and (c)"],
        correct: "Both (b) and (c)"
    },
    {
        question: "Which of the following statements is/are false?\nStatement – I: IEEE 802.15.4 is a well-known standard for low data-rate Wireless\nPersonal Area Network (WPAN).\nStatement – II: IEEE 802.15.4 standard operates in the ISM band.",
        options: ["Statement - II", "Statement - I", "Both Statement I and II", "None of these"],
        correct: "None of these"
    },
    {
        question: "The IEEE 802.15.4 establishes functionalities in which layers?",
        options: ["Application and Session Layers", "Transport and Data Link Layers", "Network and Session Layers", "Physical and Data Link Layers"],
        correct: "Physical and Data Link Layers"
    },
    {
        question: "Which is not a purpose of the ZigBee Device Object (ZDO)?",
        options: ["Device Management", "Interfacing and Control Services", "Security", "Policies"],
        correct: "Interfacing and Control Services"
    },
    {
        question: "State whether the following statement is True or False.\nStatement: Similar to traditional barcodes and QR codes, RFID tag data cannot be read\noutside the line-of-sight.",
        options: ["False", "True"],
        correct: "False"
    },
    {
        question: "Choose the correct option based on the following two statements on the HART Physical\nLayer.\nStatement-I: It is derived from the IEEE 802.15.4 protocol.\nStatement-II: It operated only in the 2.4 GHz ISM band.",
        options: ["Statement-I True and Statement-II False", "Statement-I False and Statement-II True", "Both Statements I and II are False", "Both Statements I and II are True"],
        correct: "Both Statements I and II are True"
    },
    {
        question: "Which of the following characteristic of HART Data Link Layer helps to increase\nreliability and security?",
        options: ["Channel Hopping and Channel Blacklisting", "Channel Crunching and Jamming", "Scattering", "All of these"],
        correct: "Channel Hopping and Channel Blacklisting"
    },
    {
        question: "State True or False\nStatement: Channel blacklisting in HART identifies channels consistently affected by\ninterference and removes them from use.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "At the MAC layer –\nStatement-I: WirelessHART utilizes Time Division Multiple Access (TDMA).\nStatement-II: ZigBee applies Carrier Sense Multiple Access with Collision Detection\n(CSMA/CD).",
        options: ["Statement-I True and Statement-II False", "Statement-I False and Statement-II True", "Both Statements I and II are False", "Both Statements I and II are True"],
        correct: "Both Statements I and II are True"
    },
    {
        question: "NFC works on the principal of",
        options: ["Pressure", "Magnetic Induction", "Both (a) and (b)", "None of these"],
        correct: "Magnetic Induction"
    },
    {
        question: "Bluetooth technology is based on Ad-hoc technology also known as?",
        options: ["Ad-hoc Piconets", "Ad-hoc Micronets", "Ad-hoc Nanonets", "None of these"],
        correct: "Ad-hoc Piconets"
    },
    {
        question: "Class 2 Bluetooth radios have a range of about?",
        options: ["1m", "2m-5m", "10 m", "None of these"],
        correct: "10 m"
    },
    {
        question: "Which of the following is NOT a phase in Bluetooth connection establishment?",
        options: ["Inquiry", "Booking", "Paging", "Connection"],
        correct: "Booking"
    },
    {
        question: "Zwave can support ___________ number of nodes in a network?",
        options: ["232", "233", "234", "235"],
        correct: "232"
    },
    {
        question: "Topologies allowed in ISA 100.11A are?",
        options: ["Ring Only", "Mesh and Hybrid", "Mesh and Ring", "Mesh and Star/Tree"],
        correct: "Mesh and Star/Tree"
    },
    {
        question: "An example of an Operating System (OS) that a sensor node can have is?",
        options: ["MicronOS", "TinyOS", "Both (a) and (b)", "None of these"],
        correct: "TinyOS"
    },
    {
        question: "Which of the following is NOT a constraint on sensor nodes?",
        options: ["Must consume extremely low power", "Be non-autonomous", "Be adaptive to environment", "None of these"],
        correct: "Be non-autonomous"
    },
    {
        question: "Nodes in WSNs that exhibit features of failed nodes but they can also send false routing\nmessages which are a threat to the integrity of the network are called?",
        options: ["Normal Nodes", "Badly Failed Nodes", "Failed Nodes", "Selfish Nodes"],
        correct: "Badly Failed Nodes"
    },
    {
        question: "Which of the following are the two popular schemes to re-establish the connectivity\nbetween dumb nodes with others?",
        options: ["CoARD and CoRD", "CoRAD and CoARD", "CoRD and CoRAD", "None of these"],
        correct: "CoRD and CoRAD"
    },
    {
        question: "Full form of WBAN is?",
        options: ["Wireless Body Area Network", "Wirelessed Body Area Network", "Wireless Bodily Area Network", "None of these"],
        correct: "Wireless Body Area Network"
    },
    {
        question: "When an intruder enters into the agricultural field through the boundary (perimeter) of\nthe field, a/an ___________ sensor can be used to detect the object and a/an\n_____________ sensor can be used to sense the distance at which the object is located.",
        options: ["PIR, Ultrasonic", "Ultrasonic, PIR", "Humidity, PIR", "None of these"],
        correct: "PIR, Ultrasonic"
    },
    {
        question: "____________ is defined as, all the nodes are connected in the network, so that sensed\ndata can reach to sink node?",
        options: ["Coverage", "Connectivity", "Both (a) and (b)", "None of these"],
        correct: "Connectivity"
    },
    {
        question: "The objective of coverage in WSN is.",
        options: ["To use a minimum number of sensors and maximize the network lifetime", "To use a maximum number of sensors and maximize the network lifetime", "To use a minimum number of sensors and minimize the network lifetime", "To use a maximum number of sensors and minimize the network lifetime"],
        correct: "To use a minimum number of sensors and maximize the network lifetime"
    },
    {
        question: "State True or False\nStatement-I: If transmission range ≤ 2* sensing range, coverage implies connectivity.",
        options: ["Statement-I is True", "Statement-I is False"],
        correct: "Statement-I is False"
    },
    {
        question: "A mobile entity that collects the data from sensor nodes goes to the sink, and delivers the\ncollected data from different sensor nodes are called?",
        options: ["Data Molecule", "Static Node", "Data Mules", "None of these"],
        correct: "Data Mules"
    },
    {
        question: "Human-centric Sensing is possible because of?",
        options: ["Smartphone and PDAs", "Miniaturization and Proliferation of devices", "Both (a) and (b)", "None of these"],
        correct: "Both (a) and (b)"
    },
    {
        question: "Which of the following are the roles played by humans in Human-centric Sensing?",
        options: ["Sensing Targets", "Sensor Operators", "Data Source", "All of these"],
        correct: "All of these"
    },
    {
        question: "Which of the following is/are NOT goal of Participatory Sensing?",
        options: ["To only collect data", "Not just collect data, but allow common people to access data and share knowledge", "To only access data", "Both (a) and (c)"],
        correct: "Both (a) and (c)"
    },
    {
        question: "The two popular network topologies in UAV networks are",
        options: ["Ring", "Mesh and Star", "Bus", "All of these"],
        correct: "Mesh and Star"
    },
    {
        question: "Which of the following is NOT an issue in UAV networks?",
        options: ["Slow change in network topology", "Malfunctioning of UAVs", "Intermittent link nature", "Relative position of UAV may change"],
        correct: "Slow change in network topology"
    },
    {
        question: "The scalability in single UAV system as compared to multi-UAV system is?",
        options: ["Limited", "High", "Very High", "None of these"],
        correct: "Limited"
    },
    {
        question: "Typical types of mesh networks in UAV networks are",
        options: ["Solid Mesh and Hierarchical Mesh", "Plane Mesh and Solid Mesh", "Flat Mesh and Hierarchical Mesh", "None of these"],
        correct: "Flat Mesh and Hierarchical Mesh"
    },
    {
        question: "State True or False\nStatement-I: SCADA is designed for isolated systems using proprietary solutions,\nwhereas M2M is designed for cross-platform integration.",
        options: ["False", "True"],
        correct: "True"
    },
    {
        question: "Which of the following is NOT a feature of M2M?",
        options: ["Large number of nodes or devices", "High cost", "Energy efficient", "Small traffic per machine/device"],
        correct: "High cost"
    },
    {
        question: "Which of the following is NOT an M2M node type?",
        options: ["Low End Node", "High End Node", "Out End Node", "None of these"],
        correct: "Out End Node"
    },
    {
        question: "Suppose that an IoT sensor node A works on wireless WiFi and senses pressure as a physical parameter in\ninteger number, and another IoT node B operates on IEEE 802.15.4 Zigbee and senses humidity as a\nfloating point (decimal) number. In this context, which among the following correctly describes the issues\nwith the deployment.",
        options: ["Heterogeneity", "Interoperability", "Both heterogeneity and interoperability", "Neither heterogeneity and interoperability"],
        correct: "Both heterogeneity and interoperability"
    },
    {
        question: "RESTful web services are utilized for _________.",
        options: ["Syntactic interoperability for device interaction", "Semantic interoperability for device interaction", "Both (a) and (b)", "None of the above"],
        correct: "Syntactic interoperability for device interaction"
    },
    {
        question: "Which UMB interoperability component is responsible for converting physical devices into virtually\nabstracted ones?",
        options: ["UMB Adaptor", "UMB Core", "UMB Hypervisor", "UMB Abstractor"],
        correct: "UMB Adaptor"
    },
    {
        question: "User interoperability is the interoperability problem between an user and ____________.",
        options: ["Another user", "Device", "Both user and device", "None of these"],
        correct: "Device"
    },
    {
        question: "Which of the following is an open, global, multi-sector standard for efficient, accurate,\nflexible classification of products and services?",
        options: ["eCl@ss", "UNSPSC", "EPC", "Both UNSPSC and EPC"],
        correct: "UNSPSC"
    },
    {
        question: "What does the routing component in UMB-C use for routing the metadata messages?",
        options: ["Flow Table", "Routing Table", "Middleware Routing Table", "Middleware Flow Table"],
        correct: "Middleware Routing Table"
    },
    {
        question: "Which among the following are components of an Arduino UNO Board?",
        options: ["LED Power Indicator", "Digital I/O Pins", "Analog IN Pins", "All of these"],
        correct: "All of these"
    },
    {
        question: "The tool used to select a particular COM port for connecting Arduino to a serial connector is\ncalled a sketch.",
        options: ["True", "False"],
        correct: "False"
    },
    {
        question: "Which kind of conflict occur when different processing logic are applied to same IoT\nnetworked devices or applications?",
        options: ["Semantic conflict.", "Syntactic conflict.", "System conflict.", "Device conflict."],
        correct: "Semantic conflict."
    },
    {
        question: "Which of the following is TRUE for the sketch command given below?\ndelay(3000);",
        options: ["Provides a delay of 3000 seconds", "Provides a delay of 3 seconds", "Provides a delay of 3000 nano seconds", "Provides a delay of 3000 simulation time"],
        correct: "Provides a delay of 3 seconds"
    },
    {
        question: "How many digital I/O pins are there in Arduino Uno.",
        options: ["14", "54", "11", "16"],
        correct: "14"
    },
    {
        question: "Servo motors that you connect to Arduino, are an example of",
        options: ["Sensors", "Actuators", "Gateways", "Routers"],
        correct: "Actuators"
    },
    {
        question: "Which of the following functions exist by default in Arduino IDE?",
        options: ["main()", "loop() and main()", "setup() and loop()", "setup() and main()"],
        correct: "setup() and loop()"
    },
    {
        question: "Python’s installation comes with an integrated development environment for programming.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "Fill in the blanks. Python IDE is available for installation into PC with __________.",
        options: ["Windows", "Linux", "Mac", "All of these"],
        correct: "All of these"
    },
    {
        question: "How many data type/s are available in Python?",
        options: ["1", "2", "5", "None of these"],
        correct: "5"
    },
    {
        question: "What is the output of the following piece of Python code?\nls= {1: \"abc\", \"key\": \"2\", \"year\": 2023}\nprint(ls[\"key\"]",
        options: ["abc", "2", "2023", "\"abc\""],
        correct: "2"
    },
    {
        question: "The variable that is declared inside the function in Python is called a Global variable.",
        options: ["True", "False"],
        correct: "False"
    },
    {
        question: "Which of the following is used to read a text file in Python?",
        options: ["file = open('data.txt ', 'r ')", "file = open_text('data.txt ', 'r ')", "file = read_text('data.txt ', 'r ')", "file = read('data.txt ', 'r ')"],
        correct: "file = open('data.txt ', 'r ')"
    },
    {
        question: "Which of the following libraries in Python is used for processing images.",
        options: ["Pillow", "Numpy", "Panda", "None of these"],
        correct: "Pillow"
    },
    {
        question: "In python, images cannot be converted to greyscale.",
        options: ["True", "False"],
        correct: "False"
    },
    {
        question: "Which of the following shortcut exits the nano editor?",
        options: ["Ctrl + E", "Ctrl + O", "Ctrl+V", "None of these"],
        correct: "None of these"
    },
    {
        question: "Which of the following is an unordered data type in Python?",
        options: ["List", "Dictionary", "Both List and Dictionary", "Tuple"],
        correct: "Dictionary"
    },
    {
        question: "Sensors can be analog or digital. Is the statement true?",
        options: ["Yes", "No"],
        correct: "Yes"
    },
    {
        question: "Is relay a type of mechanical switch?",
        options: ["No", "Yes"],
        correct: "Yes"
    },
    {
        question: "Which of the following converts energy to motion?",
        options: ["Actuator", "Raspberry Pi", "Sensor", "None of these"],
        correct: "Actuator"
    },
    {
        question: "Python does not follow strict indentation.",
        options: ["True", "False"],
        correct: "False"
    },
    {
        question: "Functions cannot be reassigned to the variables in Python.",
        options: ["True", "False"],
        correct: "False"
    },
    {
        question: "The switches in a non-Software Defined Network (SDN) environment do not have a global view of the\nnetwork.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "Which of the following is not a function of the Application Plane in Software Defined Network\narchitecture?",
        options: ["Business Logic implementation", "Security", "Traffic Engineering", "Forwarding"],
        correct: "Forwarding"
    },
    {
        question: "Fill in the blank:\nControllers in SDN receive requests from the _______________.",
        options: ["Repeaters", "Gateways", "Switches", "Routers"],
        correct: "Switches"
    },
    {
        question: "With respect to client-server model of socket programming, in which of the following does the\nfunction <socket_name>.bind() reside?",
        options: ["Client", "Server", "Both client and server", "None of client and server"],
        correct: "Server"
    },
    {
        question: "Which among the following are valid data processing activities",
        options: ["Data Splitting", "Data filtering", "Data plotting", "All of the given"],
        correct: "All of the given"
    },
    {
        question: "Which among the following is the correct direction for PACKET_IN type messages in SDN?",
        options: ["From controller to switch", "From switch to controller", "Between two switches", "Between two controllers"],
        correct: "From switch to controller"
    },
    {
        question: "Suppose a particular flow-rule has a soft time-out of 5s and a hard time-out of 3s. Is this\nassociation correct?",
        options: ["Yes", "No"],
        correct: "No"
    },
    {
        question: "In SDN Backup Controllers are required for which among the following?",
        options: ["To act as backup of the main controller all the time", "To act as backup when the main controller fails", "To replace the main controller all together", "None of the stated."],
        correct: "To act as backup when the main controller fails"
    },
    {
        question: "What are the benefits of using SDN over IoT?",
        options: ["Management of device heterogeneity", "Management of end-device mobility and dynamic flow rules", "Software control of end-devices, i.e sensors and actuators", "All of the given"],
        correct: "All of the given"
    },
    {
        question: "Sensor OpenFlow, Soft-WSN and SDN-WISE are examples of ____________.",
        options: ["Traditional routing protocols.", "Various SDN protocols for wired LANs", "Various implementations of the concept of Software Defined IoT", "Traditional IoT protocol examples."],
        correct: "Various implementations of the concept of Software Defined IoT"
    },
    {
        question: "Consider the following python script using the split() function, what will be the correct print output (SEE\nthe options VERY carefully including the quotation marks)\ndat = 'Apple,Guava#Banana'\nvar = dat.split(‘#’)\nprint(var)",
        options: ["['Apple','Guava','Banana']", "['Apple','Guava']", "['Guava','Banana']", "['Apple,Guava','Banana']"],
        correct: "['Apple,Guava','Banana']"
    },
    {
        question: "Which among the following are core challenges of traditional mobile networks?",
        options: ["Scalability", "Flexibility", "Manageability", "All of the given"],
        correct: "All of the given"
    },
    {
        question: "Network virtualization enables ______________ of physical resources",
        options: ["Movement", "Abstraction", "Removal", "Creation"],
        correct: "Abstraction"
    },
    {
        question: "In comparison to Software-Defined Networks, traditional networks are cost expensive with respect to which\nof the following?",
        options: ["Both capex and opex", "Capex but not opex", "Opex but not capex", "Neither capex nor opex"],
        correct: "Both capex and opex"
    },
    {
        question: "General OpenFlow supports both wireless and wired connections.",
        options: ["True", "False"],
        correct: "False"
    },
    {
        question: "With respect to Software Defined Data Centre Networking (SD-DCN), ____________ can use wild cards\nand _________________ uses exact match rules.",
        options: ["Mice flows, Elephant flows", "Elephant flows, Mice flows", "Mice flows, traditional flows", "Traditional flows, Elephant flows"],
        correct: "Mice flows, Elephant flows"
    },
    {
        question: "In cloud computing model, which among the following are characteristics of computing\nresources?",
        options: ["On-demand", "Shared", "Configurable", "All of these"],
        correct: "All of these"
    },
    {
        question: "Iaas, PaaS and SaaS are examples of what type of cloud models?",
        options: ["Cloud deployment model", "Cloud service model", "Cloud access model", "Cloud virtualization model"],
        correct: "Cloud service model"
    },
    {
        question: "Fill in the blank: Typically, cloud computing have _____ components?",
        options: ["4", "5", "6", "7"],
        correct: "6"
    },
    {
        question: "In SaaS model of cloud computing, which of the following acts as the thin-client?",
        options: ["Cloud gateway", "Web monitor", "Web browser", "Local firewall"],
        correct: "Web browser"
    },
    {
        question: "Data in __________ and Data at _______________ are two important aspects of data security",
        options: ["past, present", "time, place", "transit, rest", "None of these"],
        correct: "transit, rest"
    },
    {
        question: "Which among the following is a metric for Service Level Agreement (SLA) in Cloud Computing?",
        options: ["Availability", "Portability", "Response Time", "All of these"],
        correct: "All of these"
    },
    {
        question: "Which of the following cloud computing models does AWS EC2 belong to?",
        options: ["IaaS", "PaaS", "SaaS", "None of these"],
        correct: "IaaS"
    },
    {
        question: "Openstack is a free open source software for cloud framework simulation and experimentation with\nvarious cloud applications.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "Which among the following is NOT a component of OpenStack.",
        options: ["Horizon", "Heat", "Plasma", "Neutron"],
        correct: "Plasma"
    },
    {
        question: "You cannot ping your OpenStack instance from an outside network unless you connect your instance with\nthe public network through a ____________",
        options: ["Router", "Firewall", "Repeater", "Load balancer"],
        correct: "Router"
    },
    {
        question: "Virtualized resources within the OpenStack simulator that you can define, set parameters of and deploy\nwithin OpenStack are also known as",
        options: ["Instances", "Files", "Hypervisors", "Sketches"],
        correct: "Instances"
    },
    {
        question: "The SCSP in sensor clouds is responsible for caching the data in the databases.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "Select the correct option for replacing the box (in red) in the following architecture for sensor cloud user\norganization view.",
        options: ["User credentials", "Template display", "Template view", "User view"],
        correct: "Template view"
    },
    {
        question: "Which among the following is the principal feature of sensor clouds, with respect to sensor nodes?",
        options: ["Sensor monitoring", "Sensor instantiation", "Sensor virtualization", "Sensor collection"],
        correct: "Sensor virtualization"
    },
    {
        question: "Caching in sensor cloud provide no benefit over regions with slow environmental monitoring rate.",
        options: ["True", "False"],
        correct: "False"
    },
    {
        question: "How many different types of caching mechanism are there in sensor cloud?",
        options: ["1", "4", "2", "3"],
        correct: "2"
    },
    {
        question: "Virtual sensors within a sensor cloud have communication interfaces with _______________.",
        options: ["Only the physical sensors below them", "Only the end-user applications above them.", "Both physical sensors below and applications above.", "Neither the physical sensors, nor the applications above."],
        correct: "Both physical sensors below and applications above."
    },
    {
        question: "Data from an IoT device is transferred to cloud via a network, which is then processed at the cloud and then\na response is sent back to the IoT device from the cloud after processing. The time it takes for one-way data\ntransfer between the node and cloud is 10s and the data processing time at the cloud is ‘x’ seconds. It takes\na total of 25s for the entire to and fro transfer of data between the sensor and cloud along with processing\nat the cloud. What is the value of x?",
        options: ["10s", "5s", "15s", "20s"],
        correct: "5s"
    },
    {
        question: "In IoT, temporal sensitivity of data plays an important role",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "Extremely time sensitive data in IoT should be processed and analyzed ____________.",
        options: ["Farthest away from source", "Closest to the source", "Distance between source and place of analysis does not matter", "None of these"],
        correct: "Closest to the source"
    },
    {
        question: "Which among the following is a view of a Fog Computing Architecture?",
        options: ["Node View", "System View", "Software View", "All of these"],
        correct: "All of these"
    },
    {
        question: "Which among the following is true?",
        options: ["Fog computing acts as a complement to cloud computing.", "Fog computing is a replacement for cloud computing.", "Fog computing and cloud computing are the same.", "Fog computing is more powerful than cloud computing (with respect to resources)."],
        correct: "Fog computing acts as a complement to cloud computing."
    },
    {
        question: "A smart city _____________.",
        options: ["Is an urban system", "Uses ICT", "Makes infrastructure more reliable", "All of these"],
        correct: "All of these"
    },
    {
        question: "Collective data is more intelligent than the single sources.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "Which of the following is one of the challenges of Data fusion?",
        options: ["Imperfection", "Conflicts", "Ambiguity", "All of these"],
        correct: "All of these"
    },
    {
        question: "Which of the following are challenges for IoT in smart cities?",
        options: ["Security and Reliability", "Small scale", "Homogeneity", "None of these"],
        correct: "Security and Reliability"
    },
    {
        question: "Fill in the blank.\n___________ combines information from multiple sensors.",
        options: ["Data storage", "Data cleaning", "Data fusion", "None of these"],
        correct: "Data fusion"
    },
    {
        question: "Which of the following are the functional layers in smart parking?",
        options: ["Information collection", "System Deployment", "Service Dissemination", "All of these"],
        correct: "All of these"
    },
    {
        question: "Which of the following statements are true about the different components present in a smart\nhome?\nStatement I: Sensor networks and communication network infrastructure\nStatement II: Intelligent control and management\nStatement III: Manual instead of automatic access of devices",
        options: ["Statements I and II", "Statements I and III", "Statements II and III", "Statements I, II and III"],
        correct: "Statements I and II"
    },
    {
        question: "Which of the following are included in the Service Dissemination in smart parking?\nStatement I: Dynamic Pricing\nStatement II: Infrastructure-free and infrastructure-based information\nStatement III: Parking Choice",
        options: ["Statement I and II", "Statement II and III", "Statement I and III", "Statement I, II and III"],
        correct: "Statement I, II and III"
    },
    {
        question: "Fill in the blank.\n____________ is a network contained within a home.",
        options: ["Local area network", "Home area network", "Personal area network", "Metropolitan area network"],
        correct: "Home area network"
    },
    {
        question: "Fill in the blank. In Vehicle-to-Human / Human-to-Vehicle interaction, the human communicating\nwith the vehicle ____________.",
        options: ["Is present in another vehicle", "Is present in the same vehicle", "Is present outside the vehicle on the roadside", "All of these"],
        correct: "Is present outside the vehicle on the roadside"
    },
    {
        question: "Wired HAN provides easy integration with pre-existing house infrastructure.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "Which of the following statement(s) is/are true about Konnex?",
        options: ["Utilizes only short ranges in home", "Can be used before configuration", "Does not have standards for building networks", "None of these"],
        correct: "None of these"
    },
    {
        question: "Which of the following is the reason for failures of TCP/IP in V2X?",
        options: ["TCP/IP handles information exchange between multiple pair of entities", "The increase in the number of wireless devices restricts the mobility", "TCP/IP can identify the addresses of the endpoints", "Information exchange does not depend on the location of the data"],
        correct: "The increase in the number of wireless devices restricts the mobility"
    },
    {
        question: "CCN is derived from ICN architecture.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "What are the disadvantages of V2X communication?",
        options: ["Increased traffic safety", "Tracking of movement", "Efficient use of fuel", "None of these"],
        correct: "Tracking of movement"
    },
    {
        question: "Which of the following is not done in traditional electrical grids?",
        options: ["Manual energy monitoring", "Unidirectional energy distribution", "Unidirectional communication", "Distributed power plants"],
        correct: "Distributed power plants"
    },
    {
        question: "Smart Grid is also named as—",
        options: ["Electronet", "Energy service", "Grid with a brain", "Smart internet"],
        correct: "Electronet"
    },
    {
        question: "Which of the following is not a property of smart grids?",
        options: ["Bidirectional flow of energy", "Two-way communication", "Unreliable and insecure electricity", "Control Capabilities"],
        correct: "Unreliable and insecure electricity"
    },
    {
        question: "Which of the following is the benefit of using Smart Grids for stakeholders?",
        options: ["Reduces inefficiencies in energy delivery", "Different pricing options", "Lower Energy bills", "All of these"],
        correct: "Reduces inefficiencies in energy delivery"
    },
    {
        question: "Fill in the blank.\n___________ samples voltage and current with a fixed sample rate at the installed location.",
        options: ["PEVs", "DAUs", "PMUs", "None of these"],
        correct: "PMUs"
    },
    {
        question: "Which of the following is a cloud application of smart grid?",
        options: ["Information management", "Energy management", "Security", "All of these"],
        correct: "All of these"
    },
    {
        question: "Which of the following statements are true about MDMSs?\nStatement I: Decide the price per unit energy to be paid by the customers\nStatement II: Handled by the energy service providers\nStatement III: Aggregate the energy consumption or energy request of certain geographical\narea",
        options: ["Statements I and II", "Statements I and III", "Statements II and III", "Statements I, II and III"],
        correct: "Statements I and II"
    },
    {
        question: "Which of the following are included in the Smart Grid security issues of integrity?\nStatement I: System Damage\nStatement II: Data injection attacks\nStatement III: Time synchronization attacks",
        options: ["Statement I and II", "Statement II and III", "Statement I and III", "Statement I, II and III"],
        correct: "Statement I, II and III"
    },
    {
        question: "Fill in the blank.\n____________ is a primary challenge in IIoT.",
        options: ["Worker health and safety", "Optimized operations", "Regulatory compliance", "Integrating existing infrastructure into new IIoT infrastructure"],
        correct: "Integrating existing infrastructure into new IIoT infrastructure"
    },
    {
        question: "Fill in the blank. Rt Tech particularizes in software which____________.",
        options: ["Improves industrial facilities’ efficiency", "Improves productivity", "Automates managing of energy consumption", "All of these"],
        correct: "All of these"
    },
    {
        question: "Lack of vision and leadership is not a hindrance in the path of success of IIoT.",
        options: ["True", "False"],
        correct: "False"
    },
    {
        question: "Which of the following is not a vulnerability of Smart Grid?",
        options: ["Integrity", "Physical threats", "Dynamic system attacks", "None of these"],
        correct: "None of these"
    },
    {
        question: "Which of the following is a characteristic of Big Data?",
        options: ["Veracity", "Variability", "Velocity", "All of these"],
        correct: "All of these"
    },
    {
        question: "Variety refers to the category to which the data belongs.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "What is the Flow of data?",
        options: ["Acquisition>Generation>Storage>Analysis", "Generation>Storage>Analysis>Acquisition", "Generation>Acquisition>Storage>Analysis", "None of these"],
        correct: "Generation>Acquisition>Storage>Analysis"
    },
    {
        question: "Quantitative analysis does not involve descriptive statistics such as mean.",
        options: ["True", "False"],
        correct: "False"
    },
    {
        question: "Fill in the blank.\nTo perform an ANOVA, we must have a _______ response variable and at least one _____ factor.",
        options: ["Discrete, categorical", "Continuous, quantitative", "Discrete, quantitative", "Continuous, categorical"],
        correct: "Continuous, categorical"
    },
    {
        question: "Select the statement(s) that denote the example of dispersion measure.\nStatement I: Range, Variable and Standard deviation\nStatement II: Range and average absolute deviation\nStatement III: Variance, Standard deviation and average absolute deviation",
        options: ["Statement I", "Statement II", "Statements I, II and III", "None of these"],
        correct: "Statements I, II, and III"
    },
    {
        question: "The different components of AgriSens includes –",
        options: ["Sensor and actuator unit", "Wireless communication unit", "Power management unit", "All of these"],
        correct: "All of these"
    },
    {
        question: "The two most relevant sensors directly used in agricultures are __________.",
        options: ["Soil moisture and proximity sensor", "Soil moisture and water level sensor", "ECG sensor and water level sensor", "All of these"],
        correct: "Soil moisture and water level sensor"
    },
    {
        question: "The sensor node of AgriSens sense the average soil moisture in ______________.",
        options: ["Vegetative phase", "Reproductive phase", "Maturity phase", "All of these"],
        correct: "All of these"
    },
    {
        question: "Select the correct order of the component layers present in the IoT healthcare.",
        options: ["Sensing layer, cloud platform layer, aggregated layer, processing layer", "Sensing layer, aggregated layer, processing layer, cloud platform layer", "Aggregated layer, sensing layer, processing layer, cloud platform layer", "Sensing layer, processing layer, aggregated layer, cloud platform layer"],
        correct: "Sensing layer, aggregated layer, processing layer, cloud platform layer"
    },
    {
        question: "Which of the following communication protocol is used in AmbuSens?",
        options: ["IEEE 802.15.4", "6LoWPAN", "IEEE 802.15.1", "IEEE 802.15.2"],
        correct: "IEEE 802.15.1"
    },
    {
        question: "Wireless IoT driven solutions for remote healthcare facility provisioning brings healthcare to\npatients than bringing patients to healthcare.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "Fill in the blank. The physical activity tracking is a necessary component for _____________.",
        options: ["Activity monitoring", "Vehicle monitoring", "Agriculture monitoring", "All of these"],
        correct: "Activity monitoring"
    },
    {
        question: "Which of the following handheld devices are used for activity monitoring?",
        options: ["EEG and GPS", "Accelerometer and EEG", "Accelerometer and GPS", "All of these"],
        correct: "Accelerometer and GPS"
    },
    {
        question: "Which of the following is the primary disadvantage of using camera-based activity tracking?",
        options: ["Accurate", "Process intensive", "Expensive", "None of these"],
        correct: "Process intensive"
    },
    {
        question: "By performing continuous monitoring of a person’s activity, it is not possible to observe his/her\nbehavior or to identify any repetitive pattern in his/her day-to-day activity.",
        options: ["True", "False"],
        correct: "False"
    },
    {
        question: "Which of the following are the inbuilt sensors that are present in high end smartphones?",
        options: ["ECG and EEG", "Accelerometer, proximity sensor, and EEG", "Accelerometer, Compass and Gyroscope", "Pressure sensor and NPK sensor"],
        correct: "Accelerometer, Compass and Gyroscope"
    },
    {
        question: "Fill in the blank. Processing the handheld activity device data with artificial intelligence can be\nused for ________.",
        options: ["Fall detection", "Heart rate detection", "Vehicle detection", "All of these"],
        correct: "Fall detection"
    }
];

const quizContainer = document.getElementById('quiz-container');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let shuffledQuestions = [];
let userAnswers = []; // To store user's answers

// Function to shuffle array elements (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

// Function to display the current question
function displayQuestion() {
    quizContainer.innerHTML = ''; // Clear previous question

    if (currentQuestionIndex >= shuffledQuestions.length) {
        // Handle quiz completion if needed, though next button logic prevents this
        quizContainer.innerHTML = '<h2>Quiz Complete!</h2><p>You have navigated through all questions.</p>';
        prevButton.disabled = currentQuestionIndex <= 0;
        nextButton.disabled = true;
        return;
    }

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex]; // Check if already answered

    // Create question block
    const questionBlock = document.createElement('div');
    questionBlock.classList.add('question-block');

    // Add question number and text (handle preformatted text)
    const questionTitle = document.createElement('h3');
    questionTitle.innerHTML = `Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}:<br><pre>${currentQuestion.question}</pre>`; // Use <pre> for formatting
    questionBlock.appendChild(questionTitle);

    // Shuffle options (only if not answered yet, or shuffle consistently if needed)
    // For simplicity, let's shuffle every time, but highlight the previous answer if exists
    const shuffledOptions = shuffleArray([...currentQuestion.options]);

    // Create options container
    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options');

    // Create buttons for each option
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        // If answered, disable buttons and show feedback immediately
        if (userAnswer !== undefined) {
            button.disabled = true;
            if (option === userAnswer) { // Highlight the user's previous selection
                 if (userAnswer === currentQuestion.correct) {
                    button.style.backgroundColor = '#90EE90'; // Correct selection
                 } else {
                    button.style.backgroundColor = '#F08080'; // Incorrect selection
                 }
            }
            // Highlight the correct answer if the user was wrong
            if (option === currentQuestion.correct && userAnswer !== currentQuestion.correct) {
                 button.style.backgroundColor = '#ADD8E6'; // Light blue highlight for correct answer
            }

        } else {
            button.onclick = () => checkAnswer(option, currentQuestion.correct, button, optionsContainer);
        }
        optionsContainer.appendChild(button);
    });

    questionBlock.appendChild(optionsContainer);

    // Create feedback area
    const feedbackDiv = document.createElement('div');
    feedbackDiv.classList.add('feedback');
    // Show feedback if already answered
    if (userAnswer !== undefined) {
        if (userAnswer === currentQuestion.correct) {
            feedbackDiv.textContent = 'Correct!';
            feedbackDiv.classList.add('correct');
        } else {
            feedbackDiv.textContent = `Incorrect. The correct answer is: ${currentQuestion.correct}`;
            feedbackDiv.classList.add('incorrect');
        }
    }
    questionBlock.appendChild(feedbackDiv);

    // Remove the old individual navigation div
    // const navigationDiv = document.createElement('div');
    // ... (removed)

    quizContainer.appendChild(questionBlock);

    // Update main navigation buttons state
    prevButton.disabled = currentQuestionIndex <= 0;
    nextButton.disabled = currentQuestionIndex >= shuffledQuestions.length - 1;
}

// Function to check the selected answer
function checkAnswer(selectedOption, correctAnswer, selectedButton, optionsDiv) {
    // Store the answer
    userAnswers[currentQuestionIndex] = selectedOption;

    const feedbackDiv = optionsDiv.nextElementSibling; // The feedback div is the next sibling

    // Disable all option buttons after selection
    const buttons = optionsDiv.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);

    if (selectedOption === correctAnswer) {
        selectedButton.style.backgroundColor = '#90EE90'; // Light green for correct
        feedbackDiv.textContent = 'Correct!';
        feedbackDiv.classList.add('correct');
        feedbackDiv.classList.remove('incorrect');
    } else {
        selectedButton.style.backgroundColor = '#F08080'; // Light red for incorrect
        feedbackDiv.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
        feedbackDiv.classList.add('incorrect');
        feedbackDiv.classList.remove('correct');

        // Highlight the correct answer button
        buttons.forEach(button => {
            if (button.textContent === correctAnswer) {
                button.style.backgroundColor = '#ADD8E6'; // Light blue for correct answer indication
            }
        });
    }

    // No need to enable individual next button here
}

// Event listeners for main navigation buttons
prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
});

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
});


// Initialize the quiz
function startQuiz() {
    shuffledQuestions = shuffleArray([...quizData]);
    currentQuestionIndex = 0;
    userAnswers = new Array(shuffledQuestions.length).fill(undefined); // Initialize answers array
    displayQuestion();
}

// Start the quiz when the page loads
document.addEventListener('DOMContentLoaded', startQuiz);