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