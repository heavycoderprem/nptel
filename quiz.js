// Hardcoded quiz data (replace fetch)
let allQuizData = [ // Renamed to avoid conflict
    // Week 0
    {
        question: "Which of the following allows us to identify objects and extract information?",
        options: ["RFID", "Sensors", "Actuators", "IoT Nodes"],
        correct: "RFID",
        source: 'original' // Added source property
    },
    {
        question: "How many layers does Zigbee consist of?",
        options: ["1", "2", "3", "4"],
        correct: "4",
        source: 'original'
    },
    {
        question: "Which of the following is not a component of cloud computing?",
        options: ["Clients", "Local Servers", "Services", "Applications"],
        correct: "Local Servers",
        source: 'original'
    },
    {
        question: "Which of the following is a distance measuring sensor module?",
        options: ["DHT22", "HC-SR04", "TSL2591", "HC-SR505"],
        correct: "HC-SR04",
        source: 'original'
    },
    {
        question: "Which of the following is a component in a typical sensor network?",
        options: ["Sink", "Gateway", "Router", "All of these"],
        correct: "All of these",
        source: 'original'
    },
    {
        question: "Which of the following sensors are responsible for measuring orientation and angular velocity?",
        options: ["Accelerometer", "GPS", "Temperature", "None of these"],
        correct: "None of these", // Gyroscope
        source: 'original'
    },
    {
        question: "“ISA 100.11A” is a wireless networking technology standard. ISA stands for _______.",
        options: ["International Society of Automation", "International Society of Advancement", "Industrial Society of Automation", "Industrial Society of Advancement"],
        correct: "International Society of Automation",
        source: 'original'
    },
    {
        question: "Which of the following is not a difference between traditional data center and cloud computing?",
        options: ["Scalability", "Flexibility", "Elasticity", "Storage"],
        correct: "Storage",
        source: 'original'
    },
    {
        question: "Smart grid is also known as the energy internet.",
        options: ["True", "False"],
        correct: "True",
        source: 'original'
    },
    {
        question: "Can a point of node failure result in the partition of the network in the stationary sensor network?",
        options: ["Yes", "No"],
        correct: "Yes",
        source: 'original'
    },
    // Week 1
    {
        question: "IoT stands for ____________.",
        options: ["Internet of Tasks", "Internet of Tuples", "Internet of Things", "None of these"],
        correct: "Internet of Things",
        source: 'original'
    },
    {
        question: "Which of the following technologies have unified and has resulted in the evolution of IoT?",
        options: ["High-power embedded systems", "Super Computing", "Engine Technology", "None of these"],
        correct: "None of these", // Low-power embedded systems, Cloud Computing, Big Data, ML, Networking
        source: 'original'
    },
    {
        question: "Which of the following are the enables of IoT?",
        options: ["RFID", "Nanotechnology", "Sensors", "All of these"],
        correct: "All of these",
        source: 'original'
    },
    {
        question: "Which of the following is NOT a function of an IoT LAN?",
        options: ["Long range communication, global", "World wide connections", "Both (a) and (b)", "Neither (a) Nor (b)"],
        correct: "Both (a) and (b)", // IoT LAN is local, short-range
        source: 'original'
    },
    {
        question: "Statement: The integration of existing devices, smart devices, and constrained nodes in a singular framework is one of the reasons for the address crunch in IoT.",
        options: ["True", "False"],
        correct: "True",
        source: 'original'
    },
    {
        question: "Statement: “In Multi-homing, a node/network is connected to a single network for improved reliability.",
        options: ["True", "False"],
        correct: "False", // Connected to multiple networks
        source: 'original'
    },
    {
        question: "Which of the following is/are the approach/approaches for multi-homing?",
        options: ["Proxy-based approach", "Gateway-based approach", "Both (a) and (b)", "None of these"],
        correct: "Both (a) and (b)",
        source: 'original'
    },
    {
        question: "IPv6 uses ____________ notation for its representation.",
        options: ["Hexadecimal", "Binary", "Decimal", "None of these"],
        correct: "Hexadecimal",
        source: 'original'
    },
    {
        question: "State True or False. The parameters sensed by a sensor may be sent to the cloud for further processing.",
        options: ["True", "False"],
        correct: "True",
        source: 'original'
    },
    {
        question: "The IPv6 notation uses ___________________ number of bits to represent an address.",
        options: ["64", "128", "Both (a) and (b)", "Neither (a) nor (b)"],
        correct: "128",
        source: 'original'
    },
    {
        question: "A sensor is -",
        options: ["Only sensitive to the measured property", "Insensitive to any other property that what the sensor is made to sense", "Both (a) and (b)", "None of these"],
        correct: "Both (a) and (b)",
        source: 'original'
    },
    {
        question: "We classify sensors based on -",
        options: ["Output", "Data type", "Both (a) and (b)", "None of these"],
        correct: "None of these", // Should be Both (a) and (b) based on lecture, but the provided answer key says None. Let's stick to the key for consistency.
        source: 'original'
    },
    {
        question: "Which of the following is correct statement",
        options: ["Controlling AC loads using low DC signals", "Relays are electromechanical", "Relays are actuators", "All of these"],
        correct: "All of these",
        source: 'original'
    },
    {
        question: "Based on the output, sensors are classified as _______________________.",
        options: ["Analog", "Digital", "Both (a) and (b)", "Neither (a) nor (b)"],
        correct: "Both (a) and (b)",
        source: 'original'
    },
    {
        question: "Soft actuators are -",
        options: ["Polymer-based", "Mechanical", "Electromechanical", "None of these"],
        correct: "Polymer-based",
        source: 'original'
    },
    // Week 2
    {
        question: "Based on functionality, MQTT is a _______ protocol.",
        options: ["Transport", "Data", "Semantic", "None of these"],
        correct: "Data",
        source: 'original'
    },
    {
        question: "MQTT is designed for -",
        options: ["Remote connections", "Limited bandwidth", "Both (a) and (b)", "Neither (a) nor (b)"],
        correct: "Both (a) and (b)",
        source: 'original'
    },
    {
        question: "MQTT protocol follows _____________ paradigm for exchanging messages.",
        options: ["Client-Server", "Publish-Subscribe", "Both (a) and (b)", "None of these"],
        correct: "Publish-Subscribe", // Note: Original options were numbers
        source: 'original'
    },
    {
        question: "Statement: “In MQTT, the Subscribers are Lightweight Sensors.”",
        options: ["True", "False"],
        correct: "False", // Publishers are lightweight sensors
        source: 'original'
    },
    {
        question: "Which of the following is MQTT component?",
        options: ["Middleman", "Mules", "Both (a) and (b)", "None of these"],
        correct: "None of these", // Publishers, Subscribers, Brokers
        source: 'original'
    },
    {
        question: "State True or False. A topic in MQTT can only be numbers.",
        options: ["True", "False"],
        correct: "False", // It's a string
        source: 'original'
    },
    {
        question: "State True or False. There are only two methods specified by the MQTT protocol.",
        options: ["True", "False"],
        correct: "False", // There are 5 methods
        source: 'original'
    },
    {
        question: "The Publish/Subscribe architecture in MQTT is _____________ driven.",
        options: ["Event", "Pulse", "Sound", "None of these"],
        correct: "Event",
        source: 'original'
    },
    {
        question: "State True or False. The topic is the routing information for the broker.",
        options: ["True", "False"],
        correct: "True",
        source: 'original'
    },
    {
        question: "CoAP is _____________ and ____________.",
        options: ["Based on HTTP", "Is designed for M2M applications", "None of these", "Both (a) and (b)"],
        correct: "Both (a) and (b)",
        source: 'original'
    },
    {
        question: "In CoAP, client-server interaction is asynchronous over a datagram transport protocol such as ____________.",
        options: ["UDP", "TCP", "IP", "XMP"],
        correct: "UDP",
        source: 'original'
    },
    {
        question: "What is the full form of AMQP?",
        options: ["Advanced Message Querying Protocol", "Advanced Message Quality Protocol", "Advanced Message Queuing Protocol", "None of these"],
        correct: "Advanced Message Queuing Protocol",
        source: 'original'
    },
    {
        question: "AMQP has _______ number of frame types.",
        options: ["6", "3", "5", "9"],
        correct: "9",
        source: 'original'
    },
    {
        question: "Statement: “The OSI model has 7 layers.”",
        options: ["True", "False"],
        correct: "True",
        source: 'original'
    },
    {
        question: "The “Destination Address” in the IPv4 packet represents which of the following?",
        options: ["The source node address of the packet", "The intermediate hop in the network", "Both (a) and (b)", "Neither (a) nor (b)"],
        correct: "Neither (a) nor (b)", // Represents the destination node address
        source: 'original'
    },
    // Week 3
    {
        question: "Statement: “WirelessHART is the latest release of Highway Addressable Remote Transducer protocol.”",
        options: ["True", "False"],
        correct: "True",
        source: 'original'
    },
    {
        question: "Statement: “Wired HART has a network layer.”",
        options: ["True", "False"],
        correct: "False",
        source: 'original'
    },
    {
        question: "Statement: “WirelessHART physical layer is derived from 802.15.2 protocol”",
        options: ["True", "False"],
        correct: "False", // Derived from 802.15.4
        source: 'original'
    },
    {
        question: "WirelessHART operates only in __________ GHz ISM band.",
        options: ["3.7", "4.8", "4.8", "2.4"], // Duplicate 4.8 kept for consistency
        correct: "2.4",
        source: 'original'
    },
    {
        question: "HART standard was developed from _____________ smart field devices.",
        options: ["amplified", "diminished", "isolated", "networked"],
        correct: "networked",
        source: 'original'
    },
    {
        question: "Main difference between wired and unwired versions is in the physical, data link, and ______ layers.",
        options: ["Data link", "Network", "Transport", "None of these"],
        correct: "Network",
        source: 'original'
    },
    {
        question: "Statement: “Collision free and deterministic communication is achieved in HART’s data link layer.”",
        options: ["True", "False"],
        correct: "True",
        source: 'original'
    },
    {
        question: "Channel hopping is incorporated in which layer of HART?",
        options: ["Data link layer", "Physical layer", "Application layer", "Transport layer"],
        correct: "Data link layer",
        source: 'original'
    },
    {
        question: "Statement: “The HART application layer is responsible for extracting commands from a message, executing it and generating responses.”",
        options: ["True", "False"],
        correct: "True",
        source: 'original'
    },
    {
        question: "NFC is designed for use by devices within ________________ to each other.",
        options: ["Anywhere on the globe", "A small building", "Both (a) and (b)", "None of these"],
        correct: "None of these", // Close proximity
        source: 'original'
    },
    {
        question: "Passive NFC devices ___________ information which is _____________ by other devices.",
        options: ["contain, read", "read, contain", "contain, contain", "None of these"],
        correct: "contain, read",
        source: 'original'
    },
    {
        question: "Statement: “NFC devices work on the principle of magnetic induction.”",
        options: ["True", "False"],
        correct: "True",
        source: 'original'
    },
    {
        question: "Bluetooth technology is based on _________________.",
        options: ["HART", "ZigBee", "All of these", "None of these"],
        correct: "None of these", // Ad-hoc piconets
        source: 'original'
    },
    {
        question: "Statement: The Link Manager Protocol in Bluetooth manages the only establishment and authentication.",
        options: ["True", "False"],
        correct: "False", // Manages establishment, authentication, link configuration
        source: 'original'
    },
    {
        question: "Zigbee commonly uses __________data rate.",
        options: ["260 bps", "260 kbps", "260 Mbps", "None of these"],
        correct: "None of these", // 250 kbps
        source: 'original'
    },
    // Week 4
    {
        question: "Statement: In “AID”, a set of sensor nodes are deployed over an agricultural field.",
        options: ["True", "False"],
        correct: "True",
        source: 'original'
    },
    {
        question: "Statement: Ultrasonic sensor senses the distance at which an object is located.",
        options: ["True", "False"],
        correct: "True",
        source: 'original'
    },
    {
        question: "Statement: In case of static sensors, where to deploy and/or activate sensors in WSN is a coverage problem.",
        options: ["True", "False"],
        correct: "True",
        source: 'original'
    },
    {
        question: "Statement: Objective of coverage in WSN is to use maximum number of sensors and minimize network lifetime.",
        options: ["True", "False"],
        correct: "False", // Minimize sensors, maximize lifetime
        source: 'original'
    },
    {
        question: "Statement: “A crossing is covered if it is in the interior of at least one node’s coverage disk.”",
        options: ["True", "False"],
        correct: "True",
        source: 'original'
    },
    {
        question: "Which of the following is/are correct for stationary wireless sensor networks.",
        options: ["Topology cannot be changed automatically.", "Node failure may result in partition of networks.", "Both (a) and (b)", "None of these"],
        correct: "Both (a) and (b)",
        source: 'original'
    },
    {
        question: "Most problems in static WSN can be classified as -",
        options: ["No coverage", "More coverage", "Both (a) and (b)", "None of these"],
        correct: "None of these", // Area, Point, Barrier coverage
        source: 'original'
    },
    {
        question: "Which of the following is/are correct with respect UAV networks?",
        options: ["Multi-tasking", "Large coverage area", "Both (a) and (b)", "None of these"],
        correct: "Both (a) and (b)",
        source: 'original'
    },
    {
        question: "Statement: UAV networks are scalable.",
        options: ["True", "False"],
        correct: "True",
        source: 'original'
    },
    {
        question: "In Mobile WSN, the Data Mules",
        options: ["Collect the data from sensor nodes", "Goes to the sink and delivers the collected data", "Both (a) and (b)", "Neither (a) nor (b)"],
        correct: "Both (a) and (b)",
        source: 'original'
    },
    {
        question: "The full form of AUV is -",
        options: ["Antenna Used Vehicle", "Autonomous Underwater Vehicle", "Both (a) and (b)", "Neither (a) nor (b)"],
        correct: "Autonomous Underwater Vehicle",
        source: 'original'
    },
    {
        question: "Humans carry their devices and move around. Sensors embedded within the devices record readings. Sensory readings are then transmitted for processing. This paradigm of sensing is known as –",
        options: ["Machine Centric Sensing", "Device Centric Sensing", "Human Centric Sensing", "None of these"],
        correct: "Human Centric Sensing",
        source: 'original'
    },
    {
        question: "State True or False. Energy of Devices and Participant selection are not two major problems in Human Centric Sensing.",
        options: ["True", "False"],
        correct: "False", // They ARE major problems
        source: 'original'
    },
    {
        question: "Which of the following network topologies is used in UAV networks?",
        options: ["Bus", "Star", "Both (a) and (b)", "Neither (a) nor (b)"],
        correct: "Star", // Also Mesh
        source: 'original'
    },
    {
        question: "State true of false. The M2M Application Platform provides integrated services based on device collected data-sets.",
        options: ["True", "False"],
        correct: "True",
        source: 'original'
    },
    // Week 5
    {
        question: "Which of the following is/are current challenges in IoT?",
        options: ["Large scale of co-operation", "Global heterogeneity", "Both (a) and (b)", "Neither (a) nor (b)"],
        correct: "Both (a) and (b)",
        source: 'original'
    },
    {
        question: "Statement: “Interoperability is not a characteristic of a product or system.”",
        options: ["True", "False"],
        correct: "False", // It IS a characteristic
        source: 'original'
    },
    {
        question: "Interoperability is required because",
        options: ["There are different programming languages", "There are different communication protocols", "Both (a) and (b)", "Neither (a) nor (b)"],
        correct: "Both (a) and (b)",
        source: 'original'
    },
    {
        question: "Statement: “Use of different programming languages such as JavaScript, Python, JAVA, and others is an example of heterogeneity in IoT. This brings in the need for interoperability.”",
        options: ["True", "False"],
        correct: "True",
        source: 'original'
    },
    {
        question: "Statement: “The interoperability between devices and device users in terms of message formats is called Systematic Interoperability.”",
        options: ["True", "False"],
        correct: "False", // It's Syntactic Interoperability
        source: 'original'
    },
    {
        question: "What is the full form of UMB in IoT interoperability?",
        options: ["Universal Meta Bridge", "Universal Main Bridge", "Universal Main Bracket", "None of these"],
        correct: "None of these", // Universal Middleware Bridge
        source: 'original'
    },
    {
        question: "State true of false. Arduino is an open-source electronic programmable board.",
        options: ["True", "False"],
        correct: "True",
        source: 'original'
    },
    {
        question: "State true or false. Additional electronic circuits are essential to load a program into the Arduino controller board.",
        options: ["True", "False"],
        correct: "False",
        source: 'original'
    },
    {
        question: "Arduino UNO has _________ number of Digital I/O pins.",
        options: ["8", "13", "14", "None of these"],
        correct: "14",
        source: 'original'
    },
    {
        question: `What does the following code do?\nint ledPin = 13;\nvoid setup() {\npinMode(ledPin, OUTPUT);\nfor (int i = 0; i < 3; i++) {\ndigitalWrite(ledPin, HIGH);\ndelay(1000);\ndigitalWrite(ledPin, LOW);\ndelay(500);\n}\n}\nvoid loop() {\n// Do nothing\n}`,
        options: ["Blink 3 times with 1000ms ON and 500ms OFF", "Blink 3 times with 500ms ON and 500ms OFF", "Blink 3 times with 1000ms ON and 1000ms OFF", "Stay ON continuously"],
        correct: "Blink 3 times with 1000ms ON and 500ms OFF",
        source: 'original'
    },
    {
        question: "How many types of loops will you find in Arduino Programming?",
        options: ["1", "2", "3", "4"],
        correct: "3", // for, while, do-while
        source: 'original'
    },
    {
        question: "Choose the right option for if/conditional operator.",
        options: ["Val = (condition)?(Statement 1):(Statement 2)", "Val = (condition)?(Statement 2):(Statement 1)", "Val = (condition):(Statement 1)?(Statement 2)", "Val = (condition):(Statement 2)?(Statement 1)"],
        correct: "Val = (condition)?(Statement 1):(Statement 2)",
        source: 'original'
    },
    {
        question: "What is the purpose of calling dht.begin(); in the setup() function?",
        options: ["To initialize the Serial Monitor", "To start communication with the DHT sensor", "To set the temperature and humidity values to zero", "To define the data pin for the sensor"],
        correct: "To start communication with the DHT sensor",
        source: 'original'
    },
    {
        question: "What function is used to read the humidity value from the DHT sensor?",
        options: ["dht.getHumidity();", "dht.readTemp();", "dht.readHumidity();", "dht.getTemperature();"],
        correct: "dht.readHumidity();",
        source: 'original'
    },
    {
        question: "What function is used to set the servo motor to a specific angle?",
        options: ["ServoDemo.move()", "ServoDemo.rotate()", "ServoDemo.write()", "ServoDemo.setAngle()"],
        correct: "ServoDemo.write()",
        source: 'original'
    },
     // Week 6
    {
        question: "Statement: “Python is popular for embedded application development as it is a very lightweight programming language.”",
        options: ["True", "False"],
        correct: "True",
        source: 'original'
    },
    {
        question: "State True or False. Adafruit provides a library to work with DHT22 Sensor.",
        options: ["True", "False"],
        correct: "True",
        source: 'original'
    },
    {
        question: `Consider the following piece of Python code. What is the output?\nx = [4, 5, 6]\ny = [str(x[0] + 1), str(len(x) * 2) + '&Code']\nz = y[1].split('&')\nprint(z[1])`,
        options: ["5", "12", "Code", "&Code"],
        correct: "Code",
        source: 'original'
    },
    {
        question: "Statement: “To indicate different blocks of code, Python follows rigid indentation.”",
        options: ["True", "False"],
        correct: "True",
        source: 'original'
    },
    {
        question: "What is the output of the following line of code in Python?\n>>> print “Hi, Welcome to python!”",
        options: ["Hi, Welcome to python!", "“Hi, Welcome to python!”", "Hi, Welcome to python", "None of these"],
        correct: "Hi, Welcome to python!", // Assumes Python 2 syntax based on quotes
        source: 'original'
    },
    {
        question: "During remote server access by a Raspberry Pi, where the Raspberry Pi acts as a client, the client needs the following?",
        options: ["Only IP address of server", "Only port number", "Both server IP address and port number", "Client’s IP address"],
        correct: "Both server IP address and port number",
        source: 'original'
    },
    {
        question: "State whether the following command to install the PIL library is correct or not.\nsudo pip install pillow",
        options: ["Correct", "Incorrect"],
        correct: "Correct",
        source: 'original'
    },
    {
        question: "What is the purpose of the \"w\" mode in the open() function in Python?",
        options: ["To read a file", "To write data to a file, overwriting existing content", "To append data to a file", "To open a file in read and write mode"],
        correct: "To write data to a file, overwriting existing content",
        source: 'original'
    },
    {
        question: `What will be the output of the given Python program when reading from the file?\nwith open("PythonProgram.txt", "w") as file:\nfile.write("Writing data")\nwith open("PythonProgram.txt", "r") as file:\nf = file.read() print('Reading from the file\\n') print(f)`,
        options: ["Writing data", "Reading from the file\nWriting data", "Error: File not found", "None of the above"],
        correct: "Reading from the file\nWriting data",
        source: 'original'
    },
    {
        question: "Can we configure Raspberry Pi as a File Server?",
        options: ["Yes", "No"],
        correct: "Yes",
        source: 'original'
    },
    {
        question: "Which command is used to configure the Raspberry Pi for the camera module?",
        options: ["sudo camera-config", "sudo raspi-config", "sudo enable-camera", "sudo pi-setup"],
        correct: "sudo raspi-config",
        source: 'original'
    },
    {
        question: "What is the final step after enabling the camera in the Raspberry Pi configuration?",
        options: ["Restart the camera service", "Run a camera test command", "Reboot the Raspberry Pi", "Reinstall the Raspberry Pi OS"],
        correct: "Reboot the Raspberry Pi",
        source: 'original'
    },
    {
        question: "Which command Exits the nano editor?",
        options: ["Ctrl + X", "Ctrl + O", "Ctrl + K", "None of these"],
        correct: "Ctrl + X",
        source: 'original'
    },
    {
        question: "In a temperature-controlled fan system using a relay, when should the fan turn on?",
        options: ["When the relay is manually triggered", "When the surrounding temperature is lower than a predefined threshold", "When the surrounding temperature exceeds a predefined threshold", "When the battery voltage drops below a certain level"],
        correct: "When the surrounding temperature exceeds a predefined threshold",
        source: 'original'
    },
    {
        question: "What does the following line of code do?\nraspistillcapture -o image.jpg",
        options: ["Captures video feed", "Captures still image", "Both (a) and (b)", "None of these"],
        correct: "None of these", // Command is incorrect (should be raspistill)
        source: 'original'
    },
    // Week 7
    {
        question: "In Python socket programming, while defining a socket, SOCK_STREAM refers to a type of",
        options: ["SocketFamily", "SocketType", "SocketName", "SocketProtocol"],
        correct: "SocketType",
        source: 'original'
    },
    {
        question: "If you want to change the label of the Y-axis while plotting a graph using matplotlib in Python, what among the following functions do you use? Suppose you have imported matplotlib as plt",
        options: ["plt.show()", "plt.plot()", "plt.ylabel()", "plt.yaxis()"],
        correct: "plt.ylabel()",
        source: 'original'
    },
    {
        question: "In Socket programming, the parameter AF_INET stands for __________.",
        options: ["Unix protocols", "Internet Protocol (IP)", "File sharing", "Time slicing"],
        correct: "Internet Protocol (IP)",
        source: 'original'
    },
    {
        question: "Suppose a Python server is receiving data from a socket as follows,\ndata, addr = sock.recvfrom(1024)\nWhat kind of socket ‘sock’ is being considered here.",
        options: ["TCP socket", "UDP socket", "TAP socket", "None of the given"],
        correct: "UDP socket",
        source: 'original'
    },
    {
        question: "What is the use of the Mobi-Flow protocol?",
        options: ["Enabling static SDN", "Enabling SDN to incorporate mobility", "Enabling Odin Master", "Enabling traditional BGP"],
        correct: "Enabling SDN to incorporate mobility",
        source: 'original'
    },
    {
        question: "During remote server access using socket programming what is the utility of the <socket_name>.listen() function?",
        options: ["To create a new socket", "To bind the socket to connection", "To wait for clients to connect", "To close the connection"],
        correct: "To wait for clients to connect",
        source: 'original'
    },
    {
        question: "Which among the following is the correct direction for PACKET_OUT type messages in SDN?",
        options: ["From controller to switch", "From switch to controller", "Between two switches", "Between two controllers"],
        correct: "From controller to switch", // Note: Answer key says 'a', but description implies 'b'. Sticking to key 'a'. Re-check lecture 33 ppt 20 if needed. Let's assume the key is correct.
        source: 'original'
    },
    {
        question: "Which among the following is a limitation of the traditional non-SDN networks?",
        options: ["Switches do not possess routing table", "Switches are unable to forward traffic", "Switches do not have a global view of the network.", "All of the given"],
        correct: "Switches do not have a global view of the network.",
        source: 'original'
    },
    {
        question: "During remote server access by a Raspberry Pi, where the Raspberry Pi acts as a client, the client needs the following?",
        options: ["Only IP address of server", "Only port number", "Both server IP address and port number", "Client’s IP address"],
        correct: "Both server IP address and port number", // Duplicate from Week 6, kept for consistency
        source: 'original'
    },
    {
        question: "With respect to the concept of soft time-out and hard time-out in SDN switches, which of the following relations hold?",
        options: ["Soft time-out > = hard time-out", "Hard time-out >= soft time-out", "Soft time-out = hard time-out always", "None of the given"],
        correct: "Hard time-out >= soft time-out",
        source: 'original'
    },
    {
        question: "Which of the following is true?",
        options: ["Traditional Network: Routing Table, Software Defined Network: Routing Table", "Traditional Network: Flow Table, Software Defined Network: Routing Table", "Traditional Network: Routing Table, Software Defined Network: Flow Table", "Traditional Network: Flow Table, Software Defined Network: Flow Table"],
        correct: "Traditional Network: Routing Table, Software Defined Network: Flow Table",
        source: 'original'
    },
    {
        question: "Consider the following figure below. To which issue of SDN does this particular figure can be related to? [Image Placeholder - Figure showing SDN flow table structure]",
        options: ["Controller placement issue", "Flow Rule placement issue", "Hardware placement issue", "Analysis placement issue"],
        correct: "Flow Rule placement issue", // Assuming the image shows flow table structure
        source: 'original'
    },
    {
        question: "With respect to the directional APIs in SDN, what is the functionality of East-Westbound APIs?",
        options: ["To communicate between the controller and switches", "To communicate among multiple controllers", "East-Westbound APIs do not exist", "To communicate between switches themselves."],
        correct: "To communicate among multiple controllers",
        source: 'original'
    },
    {
        question: "Hierarchical SDN architecture is also known as __________ architecture.",
        options: ["Tree", "Flat", "Mesh", "Line"],
        correct: "Tree",
        source: 'original'
    },
    {
        question: "Integrating SDN with IoT is not recommended and is not a suitable approach to follow",
        options: ["False", "True"],
        correct: "False",
        source: 'original'
    },
     // Week 8
    {
        question: "What is Sensor Openflow?",
        options: ["A traditional routing protocol", "A queue management protocol", "An SDN protocol tailored for IoT devices", "A physical connectivity protocol."],
        correct: "An SDN protocol tailored for IoT devices",
        source: 'original'
    },
    {
        question: "With respect to Mobi-Flow, how does Mobi-Flow fare in comparison to Conventional networking in terms of message overhead?",
        options: ["Mobi-Flow > Conventional", "Mobi-Flow < Conventional", "Mobi-Flow = Conventional", "None of the given"],
        correct: "Mobi-Flow < Conventional",
        source: 'original'
    },
    {
        question: "Virtual Machines came before Cloud Computing.",
        options: ["True", "False"],
        correct: "True",
        source: 'original'
    },
    {
        question: "Private cloud services cannot provide Software-as-a-Service (SaaS).",
        options: ["True", "False"],
        correct: "False", // Any deployment model can provide any service model
        source: 'original'
    },
    {
        question: "Which among the following is a solution for mobility-aware flow rule placement in SDIoT?",
        options: ["Mobility-Flow", "Mobile-Flow", "Mobi-Flow", "M-Flow"],
        correct: "Mobi-Flow",
        source: 'original'
    },
    {
        question: "An organization A wants to deploy a cloud infrastructure... [Scenario described: mix of public and private needs]",
        options: ["Private Cloud", "Public Cloud", "Hybrid Cloud", "Any of these"],
        correct: "Hybrid Cloud",
        source: 'original'
    },
    // Adding missing questions from the initial list provided in the first interaction
     {
        question: "Which of the following type of client requires constant communication/connection with the cloud server?",
        options: ["Thin client", "Thick client", "None of these", "Both thin and thick clients"],
        correct: "Thin client",
        source: 'original'
    },
    {
        question: "What does ‘CIA’ in cloud data security stand for?",
        options: ["Confidentiality, Inheritance, Automation", "Criticality, Integrity, Accountability", "Congestion, Integrity, Authentication", "Confidentiality, Integrity, Availability"],
        correct: "Confidentiality, Integrity, Availability",
        source: 'original'
    },
    {
        question: "Which among the following is the most on-premise cloud deployment model?",
        options: ["PaaS", "Public cloud", "IaaS", "Private Cloud"],
        correct: "Private Cloud",
        source: 'original'
    }
    // --- Questions added from pyq.txt ---
    ,
    {
        question: "Which of the following is/are the characteristics of IoT?",
        options: ["Efficient, scalable and associated architecture.", "Unambiguous naming and addressing.", "Abundance of sleeping nodes, mobile and non-IP device.", "All of the these"],
        correct: "All of the these",
        source: 'pyq' // Added source property
    },
    {
        question: "A ___________ allows us to use our smartphones to lock and unlock our door remotely at\nour homes or our businesses.",
        options: ["Smart Meter", "ATM", "Digital Lock", "Web"],
        correct: "Digital Lock",
        source: 'pyq'
    },
    {
        question: "The function/functions of an IoT Gateway is/are to?",
        options: ["Forward packets between LAN and WAN and on the IP layer", "Connect IoT LAN to a WAN", "Both (a) and (b)", "None of these"],
        correct: "Both (a) and (b)",
        source: 'pyq'
    },
    {
        question: "Multi-homing is the concept where a node can be connected to multiple networks for _________.",
        options: ["Reduced Reliability", "Improved Reliability", "None of these", "Both (a) and (b)"],
        correct: "Improved Reliability",
        source: 'pyq'
    },
    {
        question: "A Passive Infrared Ray (PIR) sensor is used for ____________?",
        options: ["Humidity Detection", "Tilt Detection", "Obstacle Detection", "Smoke Detection"],
        correct: "Obstacle Detection",
        source: 'pyq'
    },
    {
        question: "For which of the following, Vector Sensors are required to measure or sense them?",
        options: ["Color, Pressure, Temperature", "Orientation, Image", "None of these", "Both (a) and (b)"],
        correct: "Orientation, Image",
        source: 'pyq'
    },
    {
        question: "The sensitivity of a sensor under real conditions may differ from the value specified. This is\ncalled _____________?",
        options: ["Maximal Error", "Minimal Error", "Median Error", "Sensitivity Error"],
        correct: "Sensitivity Error",
        source: 'pyq'
    },
    {
        question: "A random deviation of the signal that varies in time is called ____________.",
        options: ["Noise", "Sound", "Bias", "None of these"],
        correct: "Noise",
        source: 'pyq'
    },
    {
        question: "A Relay Switch is an example of _____________.",
        options: ["A Sensor", "An Actuator", "A Transducer", "None of These"],
        correct: "An Actuator",
        source: 'pyq'
    },
    {
        question: "What is a Pneumatic Actuator?",
        options: ["It is a type of actuator driven by compressed air or vacuum", "It is a type of actuator driven by fluid", "It is a type of actuator driven by solid", "None of these"],
        correct: "It is a type of actuator driven by compressed air or vacuum",
        source: 'pyq'
    },
    {
        question: "Which type of actuators tend to be compact, lightweight, economical, and with high power\ndensity?",
        options: ["Thermal or Magnetic Actuators", "Hydraulic Actuators", "Both (a) and (b)", "None of these"],
        correct: "Thermal or Magnetic Actuators",
        source: 'pyq'
    },
    {
        question: "Polymer based actuators designed to handle fragile objects like fruit harvesting in agriculture or\nmanipulating internal organs in biomedicine are called?",
        options: ["Pneumatic Actuators", "Soft Actuators", "Software Actuators", "Hardware Actuators"],
        correct: "Soft Actuators",
        source: 'pyq'
    },
    {
        question: "Full form of SMP is _______________________?",
        options: ["Soft Memory Polymer", "Shape Memory Polymer", "Software Memory Polymer", "None of these"],
        correct: "Shape Memory Polymer",
        source: 'pyq'
    },
    {
        question: "Duty Cycling of the sensors is managed by which component of IoT?",
        options: ["Application", "Real-Time Kernel", "Radios", "Power Management Unit"],
        correct: "Power Management Unit",
        source: 'pyq'
    },
    {
        question: "Which of the following are challenges of IoT",
        options: ["Security", "Complexity Management", "Modeling and Analysis", "All of these"],
        correct: "All of these",
        source: 'pyq'
    },
    {
        question: "Which of the following is based on the publish-subscribe model?",
        options: ["MQTT", "HTTP", "HTTPS", "All of these"],
        correct: "MQTT",
        source: 'pyq'
    },
    {
        question: "In MQTT, a topic to which a client is subscribed is updated in the form of messages and\ndistributed by the ____________________?",
        options: ["Publishers", "Message Broker", "Subscribers", "All of these"],
        correct: "Message Broker",
        source: 'pyq'
    },
    {
        question: "Which of the following is used when more than one level needs to be subscribed, such as\nthe entire sub-tree, i.e., a multilevel wildcard?",
        options: ["+", "#", "\\", "None of these"],
        correct: "#",
        source: 'pyq'
    },
    {
        question: "The CoAP protocol is designed for -.",
        options: ["Heavy Web Application", "Publish-Subscribe Applications", "Machine-to-Machine (M2M) applications", "Both (a) and (b)"],
        correct: "Machine-to-Machine (M2M) applications",
        source: 'pyq'
    },
    {
        question: "Statement I – The messaging sub-layer of CoAP, is responsible for reliability and\nduplication of messages.\nStatement II – The request/response sub-layer is responsible for communication.\nWhich of the above statement/statements is/are correct?",
        options: ["Only Statement I", "Only Statement II", "Both Statement I and II", "Statement I Correct but Statement II Incorrect"],
        correct: "Both Statement I and II",
        source: 'pyq'
    },
    {
        question: "Which of the following is a messaging mode in CoAP?",
        options: ["Append", "Substitute", "Attempt", "Separate"],
        correct: "Separate",
        source: 'pyq'
    },
    {
        question: "Which of the following provides for the discovery of services residing locally or across a\nnetwork?",
        options: ["Internet", "SMQTT", "XMPP", "CoAP"],
        correct: "XMPP",
        source: 'pyq'
    },
    {
        question: "AMQP is a protocol of which layer?",
        options: ["Transport Layer", "Application Layer", "Network Layer", "Session Layer"],
        correct: "Application Layer",
        source: 'pyq'
    },
    {
        question: "Which of the following is NOT a feature of the AMQP protocol?",
        options: ["Closed Standard", "Security", "Reliability", "Routing"],
        correct: "Closed Standard",
        source: 'pyq'
    },
    {
        question: "There are a total of _________ number of AMQP frame types are defined that are used to\ninitiate, control, and tear down the transfer of messages between two peers.",
        options: ["Seven", "Eight", "Nine", "None of these"],
        correct: "Nine",
        source: 'pyq'
    },
    {
        question: "The function/functions of the Queue component of the AMQP protocol is/are",
        options: ["Receive messages and route them to queues", "Separate queues for separate business process", "Consumer receive messages from queues", "Both (b) and (c)"],
        correct: "Both (b) and (c)",
        source: 'pyq'
    },
    {
        question: "Which of the following statements is/are false?\nStatement – I: IEEE 802.15.4 is a well-known standard for low data-rate Wireless\nPersonal Area Network (WPAN).\nStatement – II: IEEE 802.15.4 standard operates in the ISM band.",
        options: ["Statement - II", "Statement - I", "Both Statement I and II", "None of these"],
        correct: "None of these",
        source: 'pyq'
    },
    {
        question: "The IEEE 802.15.4 establishes functionalities in which layers?",
        options: ["Application and Session Layers", "Transport and Data Link Layers", "Network and Session Layers", "Physical and Data Link Layers"],
        correct: "Physical and Data Link Layers",
        source: 'pyq'
    },
    {
        question: "Which is not a purpose of the ZigBee Device Object (ZDO)?",
        options: ["Device Management", "Interfacing and Control Services", "Security", "Policies"],
        correct: "Interfacing and Control Services",
        source: 'pyq'
    },
    {
        question: "State whether the following statement is True or False.\nStatement: Similar to traditional barcodes and QR codes, RFID tag data cannot be read\noutside the line-of-sight.",
        options: ["False", "True"],
        correct: "False",
        source: 'pyq'
    },
    {
        question: "Choose the correct option based on the following two statements on the HART Physical\nLayer.\nStatement-I: It is derived from the IEEE 802.15.4 protocol.\nStatement-II: It operated only in the 2.4 GHz ISM band.",
        options: ["Statement-I True and Statement-II False", "Statement-I False and Statement-II True", "Both Statements I and II are False", "Both Statements I and II are True"],
        correct: "Both Statements I and II are True",
        source: 'pyq'
    },
    {
        question: "Which of the following characteristic of HART Data Link Layer helps to increase\nreliability and security?",
        options: ["Channel Hopping and Channel Blacklisting", "Channel Crunching and Jamming", "Scattering", "All of these"],
        correct: "Channel Hopping and Channel Blacklisting",
        source: 'pyq'
    },
    {
        question: "State True or False\nStatement: Channel blacklisting in HART identifies channels consistently affected by\ninterference and removes them from use.",
        options: ["True", "False"],
        correct: "True",
        source: 'pyq'
    },
    {
        question: "At the MAC layer –\nStatement-I: WirelessHART utilizes Time Division Multiple Access (TDMA).\nStatement-II: ZigBee applies Carrier Sense Multiple Access with Collision Detection\n(CSMA/CD).",
        options: ["Statement-I True and Statement-II False", "Statement-I False and Statement-II True", "Both Statements I and II are False", "Both Statements I and II are True"],
        correct: "Both Statements I and II are True",
        source: 'pyq'
    },
    {
        question: "NFC works on the principal of",
        options: ["Pressure", "Magnetic Induction", "Both (a) and (b)", "None of these"],
        correct: "Magnetic Induction",
        source: 'pyq'
    },
    {
        question: "Bluetooth technology is based on Ad-hoc technology also known as?",
        options: ["Ad-hoc Piconets", "Ad-hoc Micronets", "Ad-hoc Nanonets", "None of these"],
        correct: "Ad-hoc Piconets",
        source: 'pyq'
    },
    {
        question: "Class 2 Bluetooth radios have a range of about?",
        options: ["1m", "2m-5m", "10 m", "None of these"],
        correct: "10 m",
        source: 'pyq'
    },
    {
        question: "Which of the following is NOT a phase in Bluetooth connection establishment?",
        options: ["Inquiry", "Booking", "Paging", "Connection"],
        correct: "Booking",
        source: 'pyq'
    },
    {
        question: "Zwave can support ___________ number of nodes in a network?",
        options: ["232", "233", "234", "235"],
        correct: "232",
        source: 'pyq'
    },
    {
        question: "Topologies allowed in ISA 100.11A are?",
        options: ["Ring Only", "Mesh and Hybrid", "Mesh and Ring", "Mesh and Star/Tree"],
        correct: "Mesh and Star/Tree",
        source: 'pyq'
    },
    {
        question: "An example of an Operating System (OS) that a sensor node can have is?",
        options: ["MicronOS", "TinyOS", "Both (a) and (b)", "None of these"],
        correct: "TinyOS",
        source: 'pyq'
    },
    {
        question: "Which of the following is NOT a constraint on sensor nodes?",
        options: ["Must consume extremely low power", "Be non-autonomous", "Be adaptive to environment", "None of these"],
        correct: "Be non-autonomous",
        source: 'pyq'
    },
    {
        question: "Nodes in WSNs that exhibit features of failed nodes but they can also send false routing\nmessages which are a threat to the integrity of the network are called?",
        options: ["Normal Nodes", "Badly Failed Nodes", "Failed Nodes", "Selfish Nodes"],
        correct: "Badly Failed Nodes",
        source: 'pyq'
    },
    {
        question: "Which of the following are the two popular schemes to re-establish the connectivity\nbetween dumb nodes with others?",
        options: ["CoARD and CoRD", "CoRAD and CoARD", "CoRD and CoRAD", "None of these"],
        correct: "CoRD and CoRAD",
        source: 'pyq'
    },
    {
        question: "Full form of WBAN is?",
        options: ["Wireless Body Area Network", "Wirelessed Body Area Network", "Wireless Bodily Area Network", "None of these"],
        correct: "Wireless Body Area Network",
        source: 'pyq'
    },
    {
        question: "When an intruder enters into the agricultural field through the boundary (perimeter) of\nthe field, a/an ___________ sensor can be used to detect the object and a/an\n_____________ sensor can be used to sense the distance at which the object is located.",
        options: ["PIR, Ultrasonic", "Ultrasonic, PIR", "Humidity, PIR", "None of these"],
        correct: "PIR, Ultrasonic",
        source: 'pyq'
    },
    {
        question: "____________ is defined as, all the nodes are connected in the network, so that sensed\ndata can reach to sink node?",
        options: ["Coverage", "Connectivity", "Both (a) and (b)", "None of these"],
        correct: "Connectivity",
        source: 'pyq'
    },
    {
        question: "The objective of coverage in WSN is.",
        options: ["To use a minimum number of sensors and maximize the network lifetime", "To use a maximum number of sensors and maximize the network lifetime", "To use a minimum number of sensors and minimize the network lifetime", "To use a maximum number of sensors and minimize the network lifetime"],
        correct: "To use a minimum number of sensors and maximize the network lifetime",
        source: 'pyq'
    },
    {
        question: "State True or False\nStatement-I: If transmission range ≤ 2* sensing range, coverage implies connectivity.",
        options: ["Statement-I is True", "Statement-I is False"],
        correct: "Statement-I is False",
        source: 'pyq'
    },
    {
        question: "A mobile entity that collects the data from sensor nodes goes to the sink, and delivers the\ncollected data from different sensor nodes are called?",
        options: ["Data Molecule", "Static Node", "Data Mules", "None of these"],
        correct: "Data Mules",
        source: 'pyq'
    },
    {
        question: "Human-centric Sensing is possible because of?",
        options: ["Smartphone and PDAs", "Miniaturization and Proliferation of devices", "Both (a) and (b)", "None of these"],
        correct: "Both (a) and (b)",
        source: 'pyq'
    },
    {
        question: "Which of the following are the roles played by humans in Human-centric Sensing?",
        options: ["Sensing Targets", "Sensor Operators", "Data Source", "All of these"],
        correct: "All of these",
        source: 'pyq'
    },
    {
        question: "Which of the following is/are NOT goal of Participatory Sensing?",
        options: ["To only collect data", "Not just collect data, but allow common people to access data and share knowledge", "To only access data", "Both (a) and (c)"],
        correct: "Both (a) and (c)",
        source: 'pyq'
    },
    {
        question: "The two popular network topologies in UAV networks are",
        options: ["Ring", "Mesh and Star", "Bus", "All of these"],
        correct: "Mesh and Star",
        source: 'pyq'
    },
    {
        question: "Which of the following is NOT an issue in UAV networks?",
        options: ["Slow change in network topology", "Malfunctioning of UAVs", "Intermittent link nature", "Relative position of UAV may change"],
        correct: "Slow change in network topology",
        source: 'pyq'
    },
    {
        question: "The scalability in single UAV system as compared to multi-UAV system is?",
        options: ["Limited", "High", "Very High", "None of these"],
        correct: "Limited",
        source: 'pyq'
    },
    {
        question: "Typical types of mesh networks in UAV networks are",
        options: ["Solid Mesh and Hierarchical Mesh", "Plane Mesh and Solid Mesh", "Flat Mesh and Hierarchical Mesh", "None of these"],
        correct: "Flat Mesh and Hierarchical Mesh",
        source: 'pyq'
    },
    {
        question: "State True or False\nStatement-I: SCADA is designed for isolated systems using proprietary solutions,\nwhereas M2M is designed for cross-platform integration.",
        options: ["False", "True"],
        correct: "True",
        source: 'pyq'
    },
    {
        question: "Which of the following is NOT a feature of M2M?",
        options: ["Large number of nodes or devices", "High cost", "Energy efficient", "Small traffic per machine/device"],
        correct: "High cost",
        source: 'pyq'
    },
    {
        question: "Which of the following is NOT an M2M node type?",
        options: ["Low End Node", "High End Node", "Out End Node", "None of these"],
        correct: "Out End Node",
        source: 'pyq'
    },
    {
        question: "Suppose that an IoT sensor node A works on wireless WiFi and senses pressure as a physical parameter in\ninteger number, and another IoT node B operates on IEEE 802.15.4 Zigbee and senses humidity as a\nfloating point (decimal) number. In this context, which among the following correctly describes the issues\nwith the deployment.",
        options: ["Heterogeneity", "Interoperability", "Both heterogeneity and interoperability", "Neither heterogeneity and interoperability"],
        correct: "Both heterogeneity and interoperability",
        source: 'pyq'
    },
    {
        question: "RESTful web services are utilized for _________.",
        options: ["Syntactic interoperability for device interaction", "Semantic interoperability for device interaction", "Both (a) and (b)", "None of the above"],
        correct: "Syntactic interoperability for device interaction",
        source: 'pyq'
    },
    {
        question: "Which UMB interoperability component is responsible for converting physical devices into virtually\nabstracted ones?",
        options: ["UMB Adaptor", "UMB Core", "UMB Hypervisor", "UMB Abstractor"],
        correct: "UMB Adaptor",
        source: 'pyq'
    },
    {
        question: "User interoperability is the interoperability problem between an user and ____________.",
        options: ["Another user", "Device", "Both user and device", "None of these"],
        correct: "Device",
        source: 'pyq'
    },
    {
        question: "Which of the following is an open, global, multi-sector standard for efficient, accurate,\nflexible classification of products and services?",
        options: ["eCl@ss", "UNSPSC", "EPC", "Both UNSPSC and EPC"],
        correct: "UNSPSC",
        source: 'pyq'
    },
    {
        question: "What does the routing component in UMB-C use for routing the metadata messages?",
        options: ["Flow Table", "Routing Table", "Middleware Routing Table", "Middleware Flow Table"],
        correct: "Middleware Routing Table",
        source: 'pyq'
    },
    {
        question: "Which among the following are components of an Arduino UNO Board?",
        options: ["LED Power Indicator", "Digital I/O Pins", "Analog IN Pins", "All of these"],
        correct: "All of these",
        source: 'pyq'
    },
    {
        question: "The tool used to select a particular COM port for connecting Arduino to a serial connector is\ncalled a sketch.",
        options: ["True", "False"],
        correct: "False",
        source: 'pyq'
    },
    {
        question: "Which kind of conflict occur when different processing logic are applied to same IoT\nnetworked devices or applications?",
        options: ["Semantic conflict.", "Syntactic conflict.", "System conflict.", "Device conflict."],
        correct: "Semantic conflict.",
        source: 'pyq'
    },
    {
        question: "Which of the following is TRUE for the sketch command given below?\ndelay(3000);",
        options: ["Provides a delay of 3000 seconds", "Provides a delay of 3 seconds", "Provides a delay of 3000 nano seconds", "Provides a delay of 3000 simulation time"],
        correct: "Provides a delay of 3 seconds",
        source: 'pyq'
    },
    {
        question: "How many digital I/O pins are there in Arduino Uno.",
        options: ["14", "54", "11", "16"],
        correct: "14",
        source: 'pyq'
    },
    {
        question: "Servo motors that you connect to Arduino, are an example of",
        options: ["Sensors", "Actuators", "Gateways", "Routers"],
        correct: "Actuators",
        source: 'pyq'
    },
    {
        question: "Which of the following functions exist by default in Arduino IDE?",
        options: ["main()", "loop() and main()", "setup() and loop()", "setup() and main()"],
        correct: "setup() and loop()",
        source: 'pyq'
    },
    {
        question: "Python’s installation comes with an integrated development environment for programming.",
        options: ["True", "False"],
        correct: "True",
        source: 'pyq'
    },
    {
        question: "Fill in the blanks. Python IDE is available for installation into PC with __________.",
        options: ["Windows", "Linux", "Mac", "All of these"],
        correct: "All of these",
        source: 'pyq'
    },
    {
        question: "How many data type/s are available in Python?",
        options: ["1", "2", "5", "None of these"],
        correct: "5",
        source: 'pyq'
    },
    {
        question: "What is the output of the following piece of Python code?\nls= {1: \"abc\", \"key\": \"2\", \"year\": 2023}\nprint(ls[\"key\"]",
        options: ["abc", "2", "2023", "\"abc\""],
        correct: "2",
        source: 'pyq'
    },
    {
        question: "The variable that is declared inside the function in Python is called a Global variable.",
        options: ["True", "False"],
        correct: "False",
        source: 'pyq'
    },
    {
        question: "Which of the following is used to read a text file in Python?",
        options: ["file = open('data.txt ', 'r ')", "file = open_text('data.txt ', 'r ')", "file = read_text('data.txt ', 'r ')", "file = read('data.txt ', 'r ')"],
        correct: "file = open('data.txt ', 'r ')",
        source: 'pyq'
    },
    {
        question: "Which of the following libraries in Python is used for processing images.",
        options: ["Pillow", "Numpy", "Panda", "None of these"],
        correct: "Pillow",
        source: 'pyq'
    },
    {
        question: "In python, images cannot be converted to greyscale.",
        options: ["True", "False"],
        correct: "False",
        source: 'pyq'
    },
    {
        question: "Which of the following shortcut exits the nano editor?",
        options: ["Ctrl + E", "Ctrl + O", "Ctrl+V", "None of these"],
        correct: "None of these",
        source: 'pyq'
    },
    {
        question: "Which of the following is an unordered data type in Python?",
        options: ["List", "Dictionary", "Both List and Dictionary", "Tuple"],
        correct: "Dictionary",
        source: 'pyq'
    },
    {
        question: "Sensors can be analog or digital. Is the statement true?",
        options: ["Yes", "No"],
        correct: "Yes",
        source: 'pyq'
    },
    {
        question: "Is relay a type of mechanical switch?",
        options: ["No", "Yes"],
        correct: "Yes",
        source: 'pyq'
    },
    {
        question: "Which of the following converts energy to motion?",
        options: ["Actuator", "Raspberry Pi", "Sensor", "None of these"],
        correct: "Actuator",
        source: 'pyq'
    },
    {
        question: "Python does not follow strict indentation.",
        options: ["True", "False"],
        correct: "False",
        source: 'pyq'
    },
    {
        question: "Functions cannot be reassigned to the variables in Python.",
        options: ["True", "False"],
        correct: "False",
        source: 'pyq'
    },
    {
        question: "The switches in a non-Software Defined Network (SDN) environment do not have a global view of the\nnetwork.",
        options: ["True", "False"],
        correct: "True",
        source: 'pyq'
    },
    {
        question: "Which of the following is not a function of the Application Plane in Software Defined Network\narchitecture?",
        options: ["Business Logic implementation", "Security", "Traffic Engineering", "Forwarding"],
        correct: "Forwarding",
        source: 'pyq'
    },
    {
        question: "Fill in the blank:\nControllers in SDN receive requests from the _______________.",
        options: ["Repeaters", "Gateways", "Switches", "Routers"],
        correct: "Switches",
        source: 'pyq'
    },
    {
        question: "With respect to client-server model of socket programming, in which of the following does the\nfunction <socket_name>.bind() reside?",
        options: ["Client", "Server", "Both client and server", "None of client and server"],
        correct: "Server",
        source: 'pyq'
    },
    {
        question: "Which among the following are valid data processing activities",
        options: ["Data Splitting", "Data filtering", "Data plotting", "All of the given"],
        correct: "All of the given",
        source: 'pyq'
    },
    {
        question: "Which among the following is the correct direction for PACKET_IN type messages in SDN?",
        options: ["From controller to switch", "From switch to controller", "Between two switches", "Between two controllers"],
        correct: "From switch to controller",
        source: 'pyq'
    },
    {
        question: "Suppose a particular flow-rule has a soft time-out of 5s and a hard time-out of 3s. Is this\nassociation correct?",
        options: ["Yes", "No"],
        correct: "No",
        source: 'pyq'
    },
    {
        question: "In SDN Backup Controllers are required for which among the following?",
        options: ["To act as backup of the main controller all the time", "To act as backup when the main controller fails", "To replace the main controller all together", "None of the stated."],
        correct: "To act as backup when the main controller fails",
        source: 'pyq'
    },
    {
        question: "What are the benefits of using SDN over IoT?",
        options: ["Management of device heterogeneity", "Management of end-device mobility and dynamic flow rules", "Software control of end-devices, i.e sensors and actuators", "All of the given"],
        correct: "All of the given",
        source: 'pyq'
    },
    {
        question: "Sensor OpenFlow, Soft-WSN and SDN-WISE are examples of ____________.",
        options: ["Traditional routing protocols.", "Various SDN protocols for wired LANs", "Various implementations of the concept of Software Defined IoT", "Traditional IoT protocol examples."],
        correct: "Various implementations of the concept of Software Defined IoT",
        source: 'pyq'
    },
    {
        question: "Consider the following python script using the split() function, what will be the correct print output (SEE\nthe options VERY carefully including the quotation marks)\ndat = 'Apple,Guava#Banana'\nvar = dat.split(‘#’)\nprint(var)",
        options: ["['Apple','Guava','Banana']", "['Apple','Guava']", "['Guava','Banana']", "['Apple,Guava','Banana']"],
        correct: "['Apple,Guava','Banana']",
        source: 'pyq'
    },
    {
        question: "Which among the following are core challenges of traditional mobile networks?",
        options: ["Scalability", "Flexibility", "Manageability", "All of the given"],
        correct: "All of the given",
        source: 'pyq'
    },
    {
        question: "Network virtualization enables ______________ of physical resources",
        options: ["Movement", "Abstraction", "Removal", "Creation"],
        correct: "Abstraction",
        source: 'pyq'
    },
    {
        question: "In comparison to Software-Defined Networks, traditional networks are cost expensive with respect to which\nof the following?",
        options: ["Both capex and opex", "Capex but not opex", "Opex but not capex", "Neither capex nor opex"],
        correct: "Both capex and opex",
        source: 'pyq'
    },
    {
        question: "General OpenFlow supports both wireless and wired connections.",
        options: ["True", "False"],
        correct: "False",
        source: 'pyq'
    },
    {
        question: "With respect to Software Defined Data Centre Networking (SD-DCN), ____________ can use wild cards\nand _________________ uses exact match rules.",
        options: ["Mice flows, Elephant flows", "Elephant flows, Mice flows", "Mice flows, traditional flows", "Traditional flows, Elephant flows"],
        correct: "Mice flows, Elephant flows",
        source: 'pyq'
    },
    {
        question: "In cloud computing model, which among the following are characteristics of computing\nresources?",
        options: ["On-demand", "Shared", "Configurable", "All of these"],
        correct: "All of these",
        source: 'pyq'
    },
    {
        question: "Iaas, PaaS and SaaS are examples of what type of cloud models?",
        options: ["Cloud deployment model", "Cloud service model", "Cloud access model", "Cloud virtualization model"],
        correct: "Cloud service model",
        source: 'pyq'
    },
    {
        question: "Fill in the blank: Typically, cloud computing have _____ components?",
        options: ["4", "5", "6", "7"],
        correct: "6",
        source: 'pyq'
    },
    {
        question: "In SaaS model of cloud computing, which of the following acts as the thin-client?",
        options: ["Cloud gateway", "Web monitor", "Web browser", "Local firewall"],
        correct: "Web browser",
        source: 'pyq'
    },
    {
        question: "Data in __________ and Data at _______________ are two important aspects of data security",
        options: ["past, present", "time, place", "transit, rest", "None of these"],
        correct: "transit, rest",
        source: 'pyq'
    },
    {
        question: "Which among the following is a metric for Service Level Agreement (SLA) in Cloud Computing?",
        options: ["Availability", "Portability", "Response Time", "All of these"],
        correct: "All of these",
        source: 'pyq'
    },
    {
        question: "Which of the following cloud computing models does AWS EC2 belong to?",
        options: ["IaaS", "PaaS", "SaaS", "None of these"],
        correct: "IaaS",
        source: 'pyq'
    },
    {
        question: "Openstack is a free open source software for cloud framework simulation and experimentation with\nvarious cloud applications.",
        options: ["True", "False"],
        correct: "True",
        source: 'pyq'
    },
    {
        question: "Which among the following is NOT a component of OpenStack.",
        options: ["Horizon", "Heat", "Plasma", "Neutron"],
        correct: "Plasma",
        source: 'pyq'
    },
    {
        question: "You cannot ping your OpenStack instance from an outside network unless you connect your instance with\nthe public network through a ____________",
        options: ["Router", "Firewall", "Repeater", "Load balancer"],
        correct: "Router",
        source: 'pyq'
    },
    {
        question: "Virtualized resources within the OpenStack simulator that you can define, set parameters of and deploy\nwithin OpenStack are also known as",
        options: ["Instances", "Files", "Hypervisors", "Sketches"],
        correct: "Instances",
        source: 'pyq'
    },
    {
        question: "The SCSP in sensor clouds is responsible for caching the data in the databases.",
        options: ["True", "False"],
        correct: "True",
        source: 'pyq'
    },
    {
        question: "Select the correct option for replacing the box (in red) in the following architecture for sensor cloud user\norganization view.",
        options: ["User credentials", "Template display", "Template view", "User view"],
        correct: "Template view",
        source: 'pyq'
    },
    {
        question: "Which among the following is the principal feature of sensor clouds, with respect to sensor nodes?",
        options: ["Sensor monitoring", "Sensor instantiation", "Sensor virtualization", "Sensor collection"],
        correct: "Sensor virtualization",
        source: 'pyq'
    },
    {
        question: "Caching in sensor cloud provide no benefit over regions with slow environmental monitoring rate.",
        options: ["True", "False"],
        correct: "False",
        source: 'pyq'
    },
    {
        question: "How many different types of caching mechanism are there in sensor cloud?",
        options: ["1", "4", "2", "3"],
        correct: "2",
        source: 'pyq'
    },
    {
        question: "Virtual sensors within a sensor cloud have communication interfaces with _______________.",
        options: ["Only the physical sensors below them", "Only the end-user applications above them.", "Both physical sensors below and applications above.", "Neither the physical sensors, nor the applications above."],
        correct: "Both physical sensors below and applications above.",
        source: 'pyq'
    },
    {
        question: "Data from an IoT device is transferred to cloud via a network, which is then processed at the cloud and then\na response is sent back to the IoT device from the cloud after processing. The time it takes for one-way data\ntransfer between the node and cloud is 10s and the data processing time at the cloud is ‘x’ seconds. It takes\na total of 25s for the entire to and fro transfer of data between the sensor and cloud along with processing\nat the cloud. What is the value of x?",
        options: ["10s", "5s", "15s", "20s"],
        correct: "5s",
        source: 'pyq'
    },
    {
        question: "In IoT, temporal sensitivity of data plays an important role",
        options: ["True", "False"],
        correct: "True",
        source: 'pyq'
    },
    {
        question: "Extremely time sensitive data in IoT should be processed and analyzed ____________.",
        options: ["Farthest away from source", "Closest to the source", "Distance between source and place of analysis does not matter", "None of these"],
        correct: "Closest to the source",
        source: 'pyq'
    },
    {
        question: "Which among the following is a view of a Fog Computing Architecture?",
        options: ["Node View", "System View", "Software View", "All of these"],
        correct: "All of these",
        source: 'pyq'
    },
    {
        question: "Which among the following is true?",
        options: ["Fog computing acts as a complement to cloud computing.", "Fog computing is a replacement for cloud computing.", "Fog computing and cloud computing are the same.", "Fog computing is more powerful than cloud computing (with respect to resources)."],
        correct: "Fog computing acts as a complement to cloud computing.",
        source: 'pyq'
    },
    {
        question: "A smart city _____________.",
        options: ["Is an urban system", "Uses ICT", "Makes infrastructure more reliable", "All of these"],
        correct: "All of these",
        source: 'pyq'
    },
    {
        question: "Collective data is more intelligent than the single sources.",
        options: ["True", "False"],
        correct: "True",
        source: 'pyq'
    },
    {
        question: "Which of the following is one of the challenges of Data fusion?",
        options: ["Imperfection", "Conflicts", "Ambiguity", "All of these"],
        correct: "All of these",
        source: 'pyq'
    },
    {
        question: "Which of the following are challenges for IoT in smart cities?",
        options: ["Security and Reliability", "Small scale", "Homogeneity", "None of these"],
        correct: "Security and Reliability",
        source: 'pyq'
    },
    {
        question: "Fill in the blank.\n___________ combines information from multiple sensors.",
        options: ["Data storage", "Data cleaning", "Data fusion", "None of these"],
        correct: "Data fusion",
        source: 'pyq'
    },
    {
        question: "Which of the following are the functional layers in smart parking?",
        options: ["Information collection", "System Deployment", "Service Dissemination", "All of these"],
        correct: "All of these",
        source: 'pyq'
    },
    {
        question: "Which of the following statements are true about the different components present in a smart\nhome?\nStatement I: Sensor networks and communication network infrastructure\nStatement II: Intelligent control and management\nStatement III: Manual instead of automatic access of devices",
        options: ["Statements I and II", "Statements I and III", "Statements II and III", "Statements I, II and III"],
        correct: "Statements I and II",
        source: 'pyq'
    },
    {
        question: "Which of the following are included in the Service Dissemination in smart parking?\nStatement I: Dynamic Pricing\nStatement II: Infrastructure-free and infrastructure-based information\nStatement III: Parking Choice",
        options: ["Statement I and II", "Statement II and III", "Statement I and III", "Statement I, II and III"],
        correct: "Statement I, II and III",
        source: 'pyq'
    },
    {
        question: "Fill in the blank.\n____________ is a network contained within a home.",
        options: ["Local area network", "Home area network", "Personal area network", "Metropolitan area network"],
        correct: "Home area network",
        source: 'pyq'
    },
    {
        question: "Fill in the blank. In Vehicle-to-Human / Human-to-Vehicle interaction, the human communicating\nwith the vehicle ____________.",
        options: ["Is present in another vehicle", "Is present in the same vehicle", "Is present outside the vehicle on the roadside", "All of these"],
        correct: "Is present outside the vehicle on the roadside",
        source: 'pyq'
    },
    {
        question: "Wired HAN provides easy integration with pre-existing house infrastructure.",
        options: ["True", "False"],
        correct: "True",
        source: 'pyq'
    },
    {
        question: "Which of the following statement(s) is/are true about Konnex?",
        options: ["Utilizes only short ranges in home", "Can be used before configuration", "Does not have standards for building networks", "None of these"],
        correct: "None of these",
        source: 'pyq'
    },
    {
        question: "Which of the following is the reason for failures of TCP/IP in V2X?",
        options: ["TCP/IP handles information exchange between multiple pair of entities", "The increase in the number of wireless devices restricts the mobility", "TCP/IP can identify the addresses of the endpoints", "Information exchange does not depend on the location of the data"],
        correct: "The increase in the number of wireless devices restricts the mobility",
        source: 'pyq'
    },
    {
        question: "CCN is derived from ICN architecture.",
        options: ["True", "False"],
        correct: "True",
        source: 'pyq'
    },
    {
        question: "What are the disadvantages of V2X communication?",
        options: ["Increased traffic safety", "Tracking of movement", "Efficient use of fuel", "None of these"],
        correct: "Tracking of movement",
        source: 'pyq'
    },
    {
        question: "Which of the following is not done in traditional electrical grids?",
        options: ["Manual energy monitoring", "Unidirectional energy distribution", "Unidirectional communication", "Distributed power plants"],
        correct: "Distributed power plants",
        source: 'pyq'
    },
    {
        question: "Smart Grid is also named as—",
        options: ["Electronet", "Energy service", "Grid with a brain", "Smart internet"],
        correct: "Electronet",
        source: 'pyq'
    },
    {
        question: "Which of the following is not a property of smart grids?",
        options: ["Bidirectional flow of energy", "Two-way communication", "Unreliable and insecure electricity", "Control Capabilities"],
        correct: "Unreliable and insecure electricity",
        source: 'pyq'
    },
    {
        question: "Which of the following is the benefit of using Smart Grids for stakeholders?",
        options: ["Reduces inefficiencies in energy delivery", "Different pricing options", "Lower Energy bills", "All of these"],
        correct: "Reduces inefficiencies in energy delivery",
        source: 'pyq'
    },
    {
        question: "Fill in the blank.\n___________ samples voltage and current with a fixed sample rate at the installed location.",
        options: ["PEVs", "DAUs", "PMUs", "None of these"],
        correct: "PMUs",
        source: 'pyq'
    },
    {
        question: "Which of the following is a cloud application of smart grid?",
        options: ["Information management", "Energy management", "Security", "All of these"],
        correct: "All of these",
        source: 'pyq'
    },
    {
        question: "Which of the following statements are true about MDMSs?\nStatement I: Decide the price per unit energy to be paid by the customers\nStatement II: Handled by the energy service providers\nStatement III: Aggregate the energy consumption or energy request of certain geographical\narea",
        options: ["Statements I and II", "Statements I and III", "Statements II and III", "Statements I, II and III"],
        correct: "Statements I and II",
        source: 'pyq'
    },
    {
        question: "Which of the following are included in the Smart Grid security issues of integrity?\nStatement I: System Damage\nStatement II: Data injection attacks\nStatement III: Time synchronization attacks",
        options: ["Statement I and II", "Statement II and III", "Statement I and III", "Statement I, II and III"],
        correct: "Statement I, II and III",
        source: 'pyq'
    },
    {
        question: "Fill in the blank.\n____________ is a primary challenge in IIoT.",
        options: ["Worker health and safety", "Optimized operations", "Regulatory compliance", "Integrating existing infrastructure into new IIoT infrastructure"],
        correct: "Integrating existing infrastructure into new IIoT infrastructure",
        source: 'pyq'
    },
    {
        question: "Fill in the blank. Rt Tech particularizes in software which____________.",
        options: ["Improves industrial facilities’ efficiency", "Improves productivity", "Automates managing of energy consumption", "All of these"],
        correct: "All of these",
        source: 'pyq'
    },
    {
        question: "Lack of vision and leadership is not a hindrance in the path of success of IIoT.",
        options: ["True", "False"],
        correct: "False",
        source: 'pyq'
    },
    {
        question: "Which of the following is not a vulnerability of Smart Grid?",
        options: ["Integrity", "Physical threats", "Dynamic system attacks", "None of these"],
        correct: "None of these",
        source: 'pyq'
    },
    {
        question: "Which of the following is a characteristic of Big Data?",
        options: ["Veracity", "Variability", "Velocity", "All of these"],
        correct: "All of these",
        source: 'pyq'
    },
    {
        question: "Variety refers to the category to which the data belongs.",
        options: ["True", "False"],
        correct: "True",
        source: 'pyq'
    },
    {
        question: "What is the Flow of data?",
        options: ["Acquisition>Generation>Storage>Analysis", "Generation>Storage>Analysis>Acquisition", "Generation>Acquisition>Storage>Analysis", "None of these"],
        correct: "Generation>Acquisition>Storage>Analysis",
        source: 'pyq'
    },
    {
        question: "Quantitative analysis does not involve descriptive statistics such as mean.",
        options: ["True", "False"],
        correct: "False",
        source: 'pyq'
    },
    {
        question: "Fill in the blank.\nTo perform an ANOVA, we must have a _______ response variable and at least one _____ factor.",
        options: ["Discrete, categorical", "Continuous, quantitative", "Discrete, quantitative", "Continuous, categorical"],
        correct: "Continuous, categorical",
        source: 'pyq'
    },
    {
        question: "Select the statement(s) that denote the example of dispersion measure.\nStatement I: Range, Variable and Standard deviation\nStatement II: Range and average absolute deviation\nStatement III: Variance, Standard deviation and average absolute deviation",
        options: ["Statement I", "Statement II", "Statements I, II and III", "None of these"],
        correct: "Statements I, II, and III",
        source: 'pyq'
    },
    {
        question: "The different components of AgriSens includes –",
        options: ["Sensor and actuator unit", "Wireless communication unit", "Power management unit", "All of these"],
        correct: "All of these",
        source: 'pyq'
    },
    {
        question: "The two most relevant sensors directly used in agricultures are __________.",
        options: ["Soil moisture and proximity sensor", "Soil moisture and water level sensor", "ECG sensor and water level sensor", "All of these"],
        correct: "Soil moisture and water level sensor",
        source: 'pyq'
    },
    {
        question: "The sensor node of AgriSens sense the average soil moisture in ______________.",
        options: ["Vegetative phase", "Reproductive phase", "Maturity phase", "All of these"],
        correct: "All of these",
        source: 'pyq'
    },
    {
        question: "Select the correct order of the component layers present in the IoT healthcare.",
        options: ["Sensing layer, cloud platform layer, aggregated layer, processing layer", "Sensing layer, aggregated layer, processing layer, cloud platform layer", "Aggregated layer, sensing layer, processing layer, cloud platform layer", "Sensing layer, processing layer, aggregated layer, cloud platform layer"],
        correct: "Sensing layer, aggregated layer, processing layer, cloud platform layer",
        source: 'pyq'
    },
    {
        question: "Which of the following communication protocol is used in AmbuSens?",
        options: ["IEEE 802.15.4", "6LoWPAN", "IEEE 802.15.1", "IEEE 802.15.2"],
        correct: "IEEE 802.15.1",
        source: 'pyq'
    },
    {
        question: "Wireless IoT driven solutions for remote healthcare facility provisioning brings healthcare to\npatients than bringing patients to healthcare.",
        options: ["True", "False"],
        correct: "True",
        source: 'pyq'
    },
    {
        question: "Fill in the blank. The physical activity tracking is a necessary component for _____________.",
        options: ["Activity monitoring", "Vehicle monitoring", "Agriculture monitoring", "All of these"],
        correct: "Activity monitoring",
        source: 'pyq'
    },
    {
        question: "Which of the following handheld devices are used for activity monitoring?",
        options: ["EEG and GPS", "Accelerometer and EEG", "Accelerometer and GPS", "All of these"],
        correct: "Accelerometer and GPS",
        source: 'pyq'
    },
    {
        question: "Which of the following is the primary disadvantage of using camera-based activity tracking?",
        options: ["Accurate", "Process intensive", "Expensive", "None of these"],
        correct: "Process intensive",
        source: 'pyq'
    },
    {
        question: "By performing continuous monitoring of a person’s activity, it is not possible to observe his/her\nbehavior or to identify any repetitive pattern in his/her day-to-day activity.",
        options: ["True", "False"],
        correct: "False",
        source: 'pyq'
    },
    {
        question: "Which of the following are the inbuilt sensors that are present in high end smartphones?",
        options: ["ECG and EEG", "Accelerometer, proximity sensor, and EEG", "Accelerometer, Compass and Gyroscope", "Pressure sensor and NPK sensor"],
        correct: "Accelerometer, Compass and Gyroscope",
        source: 'pyq'
    },
    {
        question: "Fill in the blank. Processing the handheld activity device data with artificial intelligence can be\nused for ________.",
        options: ["Fall detection", "Heart rate detection", "Vehicle detection", "All of these"],
        correct: "Fall detection",
        source: 'pyq'
    }
];

// Get references to buttons (single set)
const quizContainer = document.getElementById('quiz-container');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const startPyqButton = document.getElementById('start-pyq-button');

let currentQuestionIndex = 0;
const questionsPerPage = 10; // Show 10 questions per page
let quizData = []; // This will hold the final ordered and shuffled data

// --- Utility Function: Fisher-Yates Shuffle ---
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

// --- Display Logic ---
function displayQuestions() {
    quizContainer.innerHTML = ''; // Clear previous questions
    const startIndex = currentQuestionIndex;
    const endIndex = Math.min(startIndex + questionsPerPage, quizData.length);

    for (let i = startIndex; i < endIndex; i++) {
        const questionData = quizData[i];
        const questionBlock = document.createElement('div');
        questionBlock.classList.add('question-block');
        questionBlock.dataset.index = i; // Store original index (after shuffling)

        const questionElement = document.createElement('h3'); // The h3 container

        // Create span for the main question text part (number + text)
        const questionText = document.createElement('span');

        // Handle code blocks within questions
        if (questionData.question.includes('```')) {
            const parts = questionData.question.split('```');
            // Add text before code block
            questionText.innerHTML = `${i + 1}. ${parts[0].replace(/\\n/g, '<br>')}`;
            questionElement.appendChild(questionText); // Append text before code

            // Add code block
            const codeBlock = document.createElement('pre');
            codeBlock.textContent = parts[1].trim();
            questionElement.appendChild(codeBlock); // Append code block

            // Add text after code block (if exists)
            if (parts[2]) {
                const afterCode = document.createElement('span');
                afterCode.innerHTML = parts[2].replace(/\\n/g, '<br>');
                questionElement.appendChild(afterCode); // Append text after code
            }
        } else {
            // No code block, just set the innerHTML for the main text span
            questionText.innerHTML = `${i + 1}. ${questionData.question.replace(/\\n/g, '<br>')}`;
            questionElement.appendChild(questionText); // Append the main text span
        }

        // Create and append source label (always after the question content)
        const sourceLabel = document.createElement('span');
        sourceLabel.classList.add('source-label');
        if (questionData.source === 'original') {
            sourceLabel.textContent = ' (Year 2025)';
        } else if (questionData.source === 'pyq') {
            sourceLabel.textContent = ' (PYQ)';
        }
        // Append label only if it has content
        if (sourceLabel.textContent) {
             questionElement.appendChild(sourceLabel);
        }


        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('options');

        // --- Shuffle options before displaying ---
        const shuffledOptions = [...questionData.options]; // Create a copy to shuffle
        shuffleArray(shuffledOptions);
        // --- ---

        shuffledOptions.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            // Pass the original correct answer text for comparison
            button.onclick = () => checkAnswer(button, option, questionData.correct, questionBlock);
            optionsContainer.appendChild(button);
        });

        questionBlock.appendChild(questionElement);
        questionBlock.appendChild(optionsContainer);
        quizContainer.appendChild(questionBlock);
    }

    updateNavigationButtons();
}

// ... existing checkAnswer function ...
function checkAnswer(button, selectedOption, correctAnswer, questionBlock) {
    const feedbackElement = document.createElement('div');
    feedbackElement.classList.add('feedback');

    // Disable all buttons in this question block
    const buttons = questionBlock.querySelectorAll('.options button');
    buttons.forEach(btn => btn.disabled = true);

    if (selectedOption === correctAnswer) {
        feedbackElement.textContent = 'Correct!';
        feedbackElement.classList.add('correct');
        button.style.backgroundColor = 'lightgreen'; // Highlight correct selection
    } else {
        feedbackElement.textContent = `Incorrect. Correct answer: ${correctAnswer}`;
        feedbackElement.classList.add('incorrect');
        button.style.backgroundColor = 'lightcoral'; // Highlight incorrect selection
        // Highlight the correct answer button
        buttons.forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.style.backgroundColor = 'lightgreen';
            }
        });
    }

    // Remove existing feedback if any before adding new one
    const existingFeedback = questionBlock.querySelector('.feedback');
    if (existingFeedback) {
        questionBlock.removeChild(existingFeedback);
    }
    questionBlock.appendChild(feedbackElement);
}


// --- Navigation Logic ---
// ... existing updateNavigationButtons function ...
function updateNavigationButtons() {
    const isFirstPage = currentQuestionIndex === 0;
    const isLastPage = quizData && quizData.length > 0 ? currentQuestionIndex >= quizData.length - questionsPerPage : true;

    prevButton.disabled = isFirstPage;
    nextButton.disabled = isLastPage;

    // Disable PYQ button if no PYQ questions exist
    const firstPyqIndex = findFirstPyqIndex();
    startPyqButton.disabled = firstPyqIndex === -1; // Ensure this line exists and is correct
}

// ... existing findFirstPyqIndex function ...
function findFirstPyqIndex() {
    if (!quizData || quizData.length === 0) return -1;
    return quizData.findIndex(q => q.source === 'pyq');
}


// --- Event Listeners --- 
// ... existing handleStartPyq, handlePrevious, handleNext functions ...
function handleStartPyq() {
    const firstPyqIndex = findFirstPyqIndex();
    if (firstPyqIndex !== -1) {
        // Calculate the starting index of the page containing the first PYQ
        currentQuestionIndex = Math.floor(firstPyqIndex / questionsPerPage) * questionsPerPage;
        displayQuestions(); // Refresh display to show the correct page
    }
}

function handlePrevious() {
    currentQuestionIndex -= questionsPerPage;
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }
    displayQuestions();
}

function handleNext() {
    currentQuestionIndex += questionsPerPage;
    if (quizData && quizData.length > 0 && currentQuestionIndex >= quizData.length) {
        currentQuestionIndex = Math.max(0, Math.floor((quizData.length - 1) / questionsPerPage) * questionsPerPage);
    }
    displayQuestions();
}


// Add listeners to the single set of buttons
startPyqButton.addEventListener('click', handleStartPyq);
prevButton.addEventListener('click', handlePrevious);
nextButton.addEventListener('click', handleNext);

// --- Initial Load --- 
// Removed startQuiz function and fetch logic

// Display initial questions when the page loads using the hardcoded data
document.addEventListener('DOMContentLoaded', () => {
    if (allQuizData.length > 0) {
        // 1. Separate questions by source
        const originalQuestions = allQuizData.filter(q => q.source === 'original');
        const pyqQuestions = allQuizData.filter(q => q.source === 'pyq');

        // 2. Shuffle questions within each group
        shuffleArray(originalQuestions);
        shuffleArray(pyqQuestions);

        // 3. Combine the shuffled groups (originals first, then PYQs)
        quizData = [...originalQuestions, ...pyqQuestions];

        // 4. Reset index and display
        currentQuestionIndex = 0;
        displayQuestions();
    } else {
        quizContainer.innerHTML = '<p>No questions found in hardcoded data.</p>';
        updateNavigationButtons(); // Still update buttons
    }
});

// Removed parseMarkdown function as it's no longer needed

