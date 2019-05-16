/* This factory is used to simulate the getClassesFactory factory, by sending fake classes (so I can test for situations that
 * my classes cannot provide.) */

/**
 * Factory fakeClassesFactory - contains a number of arrays of objects representing a students' class schedule.
 * Are used to test different possibilities of classes.
 * They are equivalent in structure to the JSON that is returned with the '... (database call) ...' call

    //01 has:
    //  - Saturday class
    //  - 07:45AM - 02:50PM

    //02 has:
    //  - Sunday class
    //  - 07:45AM - 07:50PM

    //03 has:
    //  - 07:45AM - 02:50PM

    //04 has:
    //  - 07:45AM - 07:50PM

    //05 has:
    //  - 11:45AM - 02:50PM

    //06 has:
    //  - 1:00PM - 8:15PM

    //07 has:
    //  - 1:00PM -2:50PM

    //08 has:
    //  - 12:15AM - 5:00PM

    //08 has:
    //  - 12:15AM - 1:30AM

 */

app.factory('fakeClassesFactory', function() {
    var theFactory = {};

    theFactory.myFallClasses = [
        {
            catalogNumber: 247,
            classNumber: 2041,
            context: "http://schema.org/",
            description: "This is an introductory course on computer networks.  Students will become comfortable with the concepts and vocabulary of computer networking and will gain hands-on experience in basic networking technology. Topics include: Network hardware, communication protocols, design and configuration of computer networks.  The course also includes a lab component on installation, setup and administration of network operating systems and network equipments.    Prerequisite: CSIS161 (F; Sp)",
            enrollMax: 20,
            enrollTotal: 23,
            eventsSchedule: [
                {
                    byDay: ["http://schema.org/Monday"],
                    endDate: "2018-12-14 00:00:00.0",
                    endTime: "10:15 AM",
                    instructor: "Varghese,Anthony",
                    location: "South Hall 16",
                    startDate: "2018-09-05 00:00:00.0",
                    startTime: "09:00 AM",
                    type: "Schedule"
                },
                {
                    byDay: ["http://schema.org/Wednesday"],
                    endDate: "2018-12-14 00:00:00.0",
                    endTime: "10:15 AM",
                    instructor: "Varghese,Anthony",
                    location: "South Hall 317",
                    startDate: "2018-09-05 00:00:00.0",
                    startTime: "09:00 AM",
                    type: "Schedule"
                }
            ],
            eventsStatus: "Active",
            identifier: "42958856",
            name: "Introduction to Computer Networks",
            section: "01",
            session: "1",
            subject: "Computer Science & Info Syst",
            subjectId: "CSIS",
            termId: "Fall 2018-2019",
            topic: " ",
            type: "Event",
            unitsMax: "3",
            unitsMin: "3",
            unitsTaken: 3
        },

        {
            catalogNumber: 343,
            classNumber: 2044,
            context: "http://schema.org/",
            description: "This course provides an overview of the process involved in software projects: requirements analysis, design methods, coding practices, software testing, documentation, and maintenance. Students will work on a team software project. Prerequisites: CSIS 235 (F)",
            enrollMax: 30,
            enrollTotal: 38,
            eventsSchedule: [
                {
                    byDay: ["http://schema.org/Tuesday", "http://schema.org/Thursday"],
                    endDate: "2018-12-14 00:00:00.0",
                    endTime: "04:45 PM",
                    instructor: "Hendricks,Jacob",
                    location: "Davee Library 103",
                    startDate: "2018-09-05 00:00:00.0",
                    startTime: "03:30 PM",
                    type: "Schedule"
                }
            ],
            eventsStatus: "Active",
            identifier: "42958720",
            name: "Software Engineering",
            section: "01",
            session: "1",
            subject: "Computer Science & Info Syst",
            subjectId: "CSIS",
            termId: "Fall 2018-2019",
            topic: " ",
            type: "Event",
            unitsMax: "3",
            unitsMin: "3",
            unitsTaken: 3
        },

        {
            catalogNumber: 429,
            classNumber: 2047,
            context: "http://schema.org/",
            description: "This course is an introduction to the principles of designing Operating Systems. Students will gain an understanding of CPU and Memory virtualization, concurrency, and persistence.↵Prerequisites: CSIS 248, CSIS 355. Terms offered: Fall",
            enrollMax: 40,
            enrollTotal: 33,
            eventsSchedule: [
                {
                    byDay: ["http://schema.org/Monday", "http://schema.org/Wednesday", "http://schema.org/Friday"],
                    endDate: "2018-12-14 00:00:00.0",
                    endTime: "01:50 PM",
                    instructor: "Varghese,Anthony",
                    location: "South Hall 221",
                    startDate: "2018-09-05 00:00:00.0",
                    startTime: "01:00 PM",
                    type: "Schedule"
                }
            ],
            eventsStatus: "Active",
            identifier: "42958722",
            name: "Operating Systems",
            section: "01",
            session: "1",
            subject: "Computer Science & Info Syst",
            subjectId: "CSIS",
            termId: "Fall 2018-2019",
            topic: " ",
            type: "Event",
            unitsMax: "3",
            unitsMin: "3",
            unitsTaken: 3
        }
    ];

    theFactory.uniqueClasses01 = [
        {
            subjectId: "event",
            catalogNumber: 1,
            description: "Introduction to Computer Networks",
            instructor: "Varghese,Anthony",
            location: "South Hall 317",
            timeStart: "09:00 AM",
            timeEnd: "10:15 AM",
            dateEnd: "2018-12-14 00:00:00.0",
            dateStart: "2018-09-05 00:00:00.0",
            sunday: "N",
            monday: "Y",
            tuesday: "Y",
            wednesday: "Y",
            thursday: "Y",
            friday: "Y",
            saturday: "N",
            courseDescription: "This is an introductory course on computer networks.  Students will become comfortable with the " +
            "concepts and vocabulary of computer networking and will gain hands-on experience in basic networking technology. " +
            "Topics include: Network hardware, communication protocols, design and configuration of computer networks.  " +
            "The course also includes a lab component on installation, setup and administration of network operating systems and network equipments.    " +
            "Prerequisite: CSIS161 (F; Sp)",
            unitsTaken: 3,
            classNumber: 2041,
            section: "01"
        },
        {
            subjectId: "event",
            catalogNumber: 2,
            description: "event02",
            instructor: "Varghese,Anthony",
            location: "South Hall 16",
            timeStart: "12:00 PM",
            timeEnd: "5:00 PM",
            dateEnd: "2018-12-14 00:00:00.0",
            dateStart: "2018-09-05 00:00:00.0",
            sunday: "N",
            monday: "Y",
            tuesday: "Y",
            wednesday: "Y",
            thursday: "Y",
            friday: "Y",
            saturday: "N",
            courseDescription: "This is an introductory course on computer networks.  Students will become comfortable with the " +
            "concepts and vocabulary of computer networking and will gain hands-on experience in basic networking technology. " +
            "Topics include: Network hardware, communication protocols, design and configuration of computer networks.  " +
            "The course also includes a lab component on installation, setup and administration of network operating systems and network equipments.    " +
            "Prerequisite: CSIS161 (F; Sp)",
            unitsTaken: 3,
            classNumber: 2041,
            section: "01"
        },
        {
            subjectId: "event",
            catalogNumber: 3,
            description: "evengt03",
            instructor: "Hendricks,Jacob",
            location: "Davee Library 103",
            timeStart: "12:15 PM",
            timeEnd: "12:50 PM",
            dateEnd: "2018-12-14 00:00:00.0",
            dateStart: "2018-09-05 00:00:00.0",
            sunday: "N",
            monday: "Y",
            tuesday: "Y",
            wednesday: "Y",
            thursday: "Y",
            friday: "Y",
            saturday: "N",
            courseDescription: "This course is an introduction to the principles of designing Operating Systems. " +
            "Students will gain an understanding of CPU and Memory virtualization, concurrency, and persistence." +
            "\nPrerequisites: CSIS 248, CSIS 355. Terms offered: Fall",
            unitsTaken: 3,
            classNumber: 2044,
            section: "01"
        },
        {
            subjectId: "event",
            catalogNumber: 4,
            description: "event04",
            instructor: "Varghese,Anthony",
            location: "Davee Library 103",
            timeStart: "02:00 PM",
            timeEnd: "05:00 PM",
            dateEnd: "2018-12-14 00:00:00.0",
            dateStart: "2018-09-05 00:00:00.0",
            sunday: "N",
            monday: "Y",
            tuesday: "Y",
            wednesday: "Y",
            thursday: "Y",
            friday: "Y",
            saturday: "N",
            courseDescription: "This course is an introduction to the principles of designing Operating Systems. " +
            "Students will gain an understanding of CPU and Memory virtualization, concurrency, and persistence." +
            "\nPrerequisites: CSIS 248, CSIS 355. Terms offered: Fall",
            unitsTaken: 3,
            classNumber: 2047,
            section: "01"
        },
        {
            subjectId: "CSIS",
            catalogNumber: 429,
            description: "Operating Systems",
            instructor: "Varghese,Anthony",
            location: "Davee Library 103",
            timeStart: "02:30 PM",
            timeEnd: "05:30 PM",
            dateEnd: "2018-12-14 00:00:00.0",
            dateStart: "2018-09-05 00:00:00.0",
            sunday: "N",
            monday: "Y",
            tuesday: "Y",
            wednesday: "Y",
            thursday: "Y",
            friday: "Y",
            saturday: "N",
            courseDescription: "This course is an introduction to the principles of designing Operating Systems. " +
            "Students will gain an understanding of CPU and Memory virtualization, concurrency, and persistence." +
            "\nPrerequisites: CSIS 248, CSIS 355. Terms offered: Fall",
            unitsTaken: 3,
            classNumber: 2047,
            section: "01"
        },
        {
            subjectId: "asdf",
            catalogNumber: 211,
            description: "A Class Numbered 211",
            instructor: "Varghese,Anthony",
            location: "Davee Library 103",
            timeStart: "02:30 PM",
            timeEnd: "05:30 PM",
            dateEnd: "2018-12-14 00:00:00.0",
            dateStart: "2018-09-05 00:00:00.0",
            sunday: "N",
            monday: "Y",
            tuesday: "Y",
            wednesday: "Y",
            thursday: "Y",
            friday: "Y",
            saturday: "N",
            courseDescription: "Something something test classn umber 211",
            unitsTaken: 3,
            classNumber: 2047,
            section: "01"
        },
        {
            subjectId: "CSIS",
            catalogNumber: 1154,
            description: "This is class number 1154: Advanced Javsacript",
            instructor: "Varghese,Anthony",
            location: "Davee Library 103",
            timeStart: "02:30 PM",
            timeEnd: "05:30 PM",
            dateEnd: "2018-12-14 00:00:00.0",
            dateStart: "2018-09-05 00:00:00.0",
            sunday: "N",
            monday: "Y",
            tuesday: "Y",
            wednesday: "Y",
            thursday: "Y",
            friday: "Y",
            saturday: "N",
            courseDescription: "YOu're going to learn all about advanced javascript." +
            "\nPrerequisites: CSIS 248, CSIS 355. Terms offered: Fall",
            unitsTaken: 3,
            classNumber: 2047,
            section: "01"
        }


    ];

    theFactory.myClasses01 = [
        {
            subjectId: "CSIS",
            catalogNumber: 247,
            description: "Introduction to Computer Networks",
            instructor: "Varghese,Anthony",
            location: "South Hall 317",
            timeStart: "09:00 AM",
            timeEnd: "10:15 AM",
            dateEnd: "2018-12-14 00:00:00.0",
            dateStart: "2018-09-05 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "N",
            wednesday: "Y",
            thursday: "N",
            friday: "N",
            saturday: "N",
            courseDescription: "This is an introductory course on computer networks.  Students will become comfortable with the " +
            "concepts and vocabulary of computer networking and will gain hands-on experience in basic networking technology. " +
            "Topics include: Network hardware, communication protocols, design and configuration of computer networks.  " +
            "The course also includes a lab component on installation, setup and administration of network operating systems and network equipments.    " +
            "Prerequisite: CSIS161 (F; Sp)",
            unitsTaken: 3,
            classNumber: 2041,
            section: "01"
        },
        {
            subjectId: "CSIS",
            catalogNumber: 247,
            description: "Introduction to Computer Networks",
            instructor: "Varghese,Anthony",
            location: "South Hall 16",
            timeStart: "09:00 AM",
            timeEnd: "10:15 AM",
            dateEnd: "2018-12-14 00:00:00.0",
            dateStart: "2018-09-05 00:00:00.0",
            sunday: "Y",
            monday: "N",
            tuesday: "N",
            wednesday: "N",
            thursday: "N",
            friday: "N",
            saturday: "N",
            courseDescription: "This is an introductory course on computer networks.  Students will become comfortable with the " +
            "concepts and vocabulary of computer networking and will gain hands-on experience in basic networking technology. " +
            "Topics include: Network hardware, communication protocols, design and configuration of computer networks.  " +
            "The course also includes a lab component on installation, setup and administration of network operating systems and network equipments.    " +
            "Prerequisite: CSIS161 (F; Sp)",
            unitsTaken: 3,
            classNumber: 2041,
            section: "01"
        },
        {
            subjectId: "CSIS",
            catalogNumber: 343,
            description: "Software Engineering",
            instructor: "Hendricks,Jacob",
            location: "Davee Library 103",
            timeStart: "03:30 PM",
            timeEnd: "04:45 PM",
            dateEnd: "2018-12-14 00:00:00.0",
            dateStart: "2018-09-05 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "Y",
            wednesday: "N",
            thursday: "Y",
            friday: "N",
            saturday: "N",
            courseDescription: "This course provides an overview of the process involved in software projects: requirements analysis, " +
            "design methods, coding practices, software testing, documentation, and maintenance. " +
            "Students will work on a team software project." +
            "\nPrerequisites: CSIS 248, CSIS 355. Terms offered: Fall",
            unitsTaken: 3,
            classNumber: 2044,
            section: "01"
        },
        {
            subjectId: "CSIS",
            catalogNumber: 429,
            description: "Operating Systems",
            instructor: "Varghese,Anthony",
            location: "Davee Library 103",
            timeStart: "01:00 PM",
            timeEnd: "01:50 PM",
            dateEnd: "2018-12-14 00:00:00.0",
            dateStart: "2018-09-05 00:00:00.0",
            sunday: "Y",
            monday: "N",
            tuesday: "Y",
            wednesday: "N",
            thursday: "Y",
            friday: "Y",
            saturday: "N",
            courseDescription: "This course is an introduction to the principles of designing Operating Systems. " +
            "Students will gain an understanding of CPU and Memory virtualization, concurrency, and persistence." +
            "\nPrerequisites: CSIS 248, CSIS 355. Terms offered: Fall",
            unitsTaken: 3,
            classNumber: 2047,
            section: "01"
        }

        ];

    //my classes this semester, but dateStart/dateEnds all differ
    //247 Wednesday: only during September
    //247 Sunday: only during October
    //343: normal Sept 5 - Dec 14
    //429: August 15 - January 15
    //"TEST" class: overlaps 429

    theFactory.myClasses02 = [
        {
            subjectId: "CSIS",
            catalogNumber: 247,
            description: "Introduction to Computer Networks",
            instructor: "Varghese,Anthony",
            location: "South Hall 317",
            timeStart: "09:00 AM",
            timeEnd: "10:15 AM",
            dateEnd: "2018-09-30 00:00:00.0",
            dateStart: "2018-09-01 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "N",
            wednesday: "Y",
            thursday: "N",
            friday: "N",
            saturday: "N",
            courseDescription: "This is an introductory course on computer networks.  Students will become comfortable with the " +
            "concepts and vocabulary of computer networking and will gain hands-on experience in basic networking technology. " +
            "Topics include: Network hardware, communication protocols, design and configuration of computer networks.  " +
            "The course also includes a lab component on installation, setup and administration of network operating systems and network equipments.    " +
            "Prerequisite: CSIS161 (F; Sp)",
            unitsTaken: 3,
            classNumber: 2041,
            section: "01"
        },
        {
            subjectId: "CSIS",
            catalogNumber: 247,
            description: "Introduction to Computer Networks",
            instructor: "Varghese,Anthony",
            location: "South Hall 16",
            timeStart: "09:00 AM",
            timeEnd: "10:15 AM",
            dateEnd: "2018-10-31 00:00:00.0",
            dateStart: "2018-10-01 00:00:00.0",
            sunday: "Y",
            monday: "N",
            tuesday: "N",
            wednesday: "N",
            thursday: "N",
            friday: "N",
            saturday: "N",
            courseDescription: "This is an introductory course on computer networks.  Students will become comfortable with the " +
            "concepts and vocabulary of computer networking and will gain hands-on experience in basic networking technology. " +
            "Topics include: Network hardware, communication protocols, design and configuration of computer networks.  " +
            "The course also includes a lab component on installation, setup and administration of network operating systems and network equipments.    " +
            "Prerequisite: CSIS161 (F; Sp)",
            unitsTaken: 3,
            classNumber: 2041,
            section: "01"
        },
        {
            subjectId: "CSIS",
            catalogNumber: 343,
            description: "Software Engineering",
            instructor: "Hendricks,Jacob",
            location: "Davee Library 103",
            timeStart: "03:30 PM",
            timeEnd: "04:45 PM",
            dateEnd: "2018-12-14 00:00:00.0",
            dateStart: "2018-09-05 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "Y",
            wednesday: "N",
            thursday: "Y",
            friday: "N",
            saturday: "N",
            courseDescription: "This course provides an overview of the process involved in software projects: requirements analysis, " +
            "design methods, coding practices, software testing, documentation, and maintenance. " +
            "Students will work on a team software project." +
            "\nPrerequisites: CSIS 248, CSIS 355. Terms offered: Fall",
            unitsTaken: 3,
            classNumber: 2044,
            section: "01"
        },
        {
            subjectId: "CSIS",
            catalogNumber: 429,
            description: "Operating Systems",
            instructor: "Varghese,Anthony",
            location: "Davee Library 103",
            timeStart: "01:00 PM",
            timeEnd: "01:50 PM",
            dateEnd: "2019-01-15 00:00:00.0",
            dateStart: "2018-08-15 00:00:00.0",
            sunday: "Y",
            monday: "N",
            tuesday: "Y",
            wednesday: "N",
            thursday: "Y",
            friday: "Y",
            saturday: "N",
            courseDescription: "This course is an introduction to the principles of designing Operating Systems. " +
            "Students will gain an understanding of CPU and Memory virtualization, concurrency, and persistence." +
            "\nPrerequisites: CSIS 248, CSIS 355. Terms offered: Fall",
            unitsTaken: 3,
            classNumber: 2047,
            section: "01"
        },
        {
            subjectId: "TEST",
            catalogNumber: 123,
            description: "aDescription",
            instructor: "person,aGuy",
            location: "Over Here 445",
            timeStart: "01:00 PM",
            timeEnd: "01:50 PM",
            dateEnd: "2019-01-15 00:00:00.0",
            dateStart: "2018-08-15 00:00:00.0",
            sunday: "Y",
            monday: "N",
            tuesday: "Y",
            wednesday: "N",
            thursday: "Y",
            friday: "Y",
            saturday: "N",
            courseDescription: "This course is an introduction to the principles of designing Operating Systems. " +
            "Students will gain an understanding of CPU and Memory virtualization, concurrency, and persistence." +
            "\nPrerequisites: CSIS 248, CSIS 355. Terms offered: Fall",
            unitsTaken: 3,
            classNumber: 2047,
            section: "01"
        }

    ];

    theFactory.myClasses03 = [
        {
            subjectId: "CSIS",
            catalogNumber: 214,
            description: "Introduction to Computer Networks",
            instructor: "Varghese,Anthony",
            location: "South Hall 317",
            timeStart: "09:00 AM",
            timeEnd: "11:15 AM",
            dateEnd: "2018-12-14 00:00:00.0",
            dateStart: "2018-09-02 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "N",
            wednesday: "N",
            thursday: "Y",
            friday: "N",
            saturday: "N",
            courseDescription: "This is an introductory course on computer networks.  Students will become comfortable with the " +
                "concepts and vocabulary of computer networking and will gain hands-on experience in basic networking technology. " +
                "Topics include: Network hardware, communication protocols, design and configuration of computer networks.  " +
                "The course also includes a lab component on installation, setup and administration of network operating systems and network equipments.    " +
                "Prerequisite: CSIS161 (F; Sp)",
            unitsTaken: 3,
            classNumber: 2555,
            section: "01"
        },
        {
            subjectId: "CSIS",
            catalogNumber: 247,
            description: "Introduction to Computer Networks",
            instructor: "Varghese,Anthony",
            location: "South Hall 317",
            timeStart: "09:00 AM",
            timeEnd: "11:15 AM",
            dateEnd: "2018-12-14 00:00:00.0",
            dateStart: "2018-09-02 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "N",
            wednesday: "N",
            thursday: "Y",
            friday: "N",
            saturday: "N",
            courseDescription: "This is an introductory course on computer networks.  Students will become comfortable with the " +
                "concepts and vocabulary of computer networking and will gain hands-on experience in basic networking technology. " +
                "Topics include: Network hardware, communication protocols, design and configuration of computer networks.  " +
                "The course also includes a lab component on installation, setup and administration of network operating systems and network equipments.    " +
                "Prerequisite: CSIS161 (F; Sp)",
            unitsTaken: 3,
            classNumber: 2041,
            section: "01"
        },
        {
            subjectId: "CSIS",
            catalogNumber: 247,
            description: "Introduction to Computer Networks",
            instructor: "Varghese,Anthony",
            location: "South Hall 317",
            timeStart: "09:00 AM",
            timeEnd: "10:15 AM",
            dateEnd: "2018-12-14 00:00:00.0",
            dateStart: "2018-09-02 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "N",
            wednesday: "Y",
            thursday: "N",
            friday: "N",
            saturday: "N",
            courseDescription: "This is an introductory course on computer networks.  Students will become comfortable with the " +
            "concepts and vocabulary of computer networking and will gain hands-on experience in basic networking technology. " +
            "Topics include: Network hardware, communication protocols, design and configuration of computer networks.  " +
            "The course also includes a lab component on installation, setup and administration of network operating systems and network equipments.    " +
            "Prerequisite: CSIS161 (F; Sp)",
            unitsTaken: 3,
            classNumber: 2041,
            section: "01"
        },
        {
            subjectId: "CSIS",
            catalogNumber: 247,
            description: "Introduction to Computer Networks",
            instructor: "Varghese,Anthony",
            location: "South Hall 16",
            timeStart: "09:00 AM",
            timeEnd: "10:15 AM",
            dateEnd: "2018-12-14 00:00:00.0",
            dateStart: "2018-09-02 00:00:00.0",
            sunday: "Y",
            monday: "N",
            tuesday: "N",
            wednesday: "N",
            thursday: "N",
            friday: "N",
            saturday: "N",
            courseDescription: "This is an introductory course on computer networks.  Students will become comfortable with the " +
            "concepts and vocabulary of computer networking and will gain hands-on experience in basic networking technology. " +
            "Topics include: Network hardware, communication protocols, design and configuration of computer networks.  " +
            "The course also includes a lab component on installation, setup and administration of network operating systems and network equipments.    " +
            "Prerequisite: CSIS161 (F; Sp)",
            unitsTaken: 3,
            classNumber: 2041,
            section: "01"
        },
        {
            subjectId: "CSIS",
            catalogNumber: 343,
            description: "Software Engineering",
            instructor: "Hendricks,Jacob",
            location: "Davee Library 103",
            timeStart: "03:30 PM",
            timeEnd: "04:45 PM",
            dateEnd: "2018-12-14 00:00:00.0",
            dateStart: "2018-09-02 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "Y",
            wednesday: "N",
            thursday: "Y",
            friday: "N",
            saturday: "N",
            courseDescription: "This course provides an overview of the process involved in software projects: requirements analysis, " +
            "design methods, coding practices, software testing, documentation, and maintenance. " +
            "Students will work on a team software project." +
            "\nPrerequisites: CSIS 248, CSIS 355. Terms offered: Fall",
            unitsTaken: 3,
            classNumber: 2044,
            section: "01"
        },
        {
            subjectId: "CSIS",
            catalogNumber: 429,
            description: "Operating Systems",
            instructor: "Varghese,Anthony",
            location: "Davee Library 103",
            timeStart: "01:00 PM",
            timeEnd: "01:50 PM",
            dateEnd: "2018-12-14 00:00:00.0",
            dateStart: "2018-09-02 00:00:00.0",
            sunday: "Y",
            monday: "N",
            tuesday: "Y",
            wednesday: "N",
            thursday: "Y",
            friday: "Y",
            saturday: "N",
            courseDescription: "This course is an introduction to the principles of designing Operating Systems. " +
            "Students will gain an understanding of CPU and Memory virtualization, concurrency, and persistence." +
            "\nPrerequisites: CSIS 248, CSIS 355. Terms offered: Fall",
            unitsTaken: 3,
            classNumber: 2047,
            section: "01"
        },
        {
            subjectId: "TEST",
            catalogNumber: 123,
            description: "aDescription",
            instructor: "person,aGuy",
            location: "Over Here 445",
            timeStart: "01:00 PM",
            timeEnd: "01:50 PM",
            dateEnd: "2018-12-14 00:00:00.0",
            dateStart: "2018-09-02 00:00:00.0",
            sunday: "Y",
            monday: "N",
            tuesday: "Y",
            wednesday: "N",
            thursday: "Y",
            friday: "Y",
            saturday: "N",
            courseDescription: "This course is an introduction to the principles of designing Operating Systems. " +
            "Students will gain an understanding of CPU and Memory virtualization, concurrency, and persistence." +
            "\nPrerequisites: CSIS 248, CSIS 355. Terms offered: Fall",
            unitsTaken: 3,
            classNumber: 2047,
            section: "01"
        },
        {
            subjectId: "TEST",
            catalogNumber: 456,
            description: "Introduction to Computer Networks",
            instructor: "boi,yaa",
            location: "Tiny Desk Studio",
            timeStart: "08:50 AM",
            timeEnd: "10:30 AM",
            dateEnd: "2018-12-14 00:00:00.0",
            dateStart: "2018-09-02 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "N",
            wednesday: "Y",
            thursday: "N",
            friday: "N",
            saturday: "N",
            courseDescription: "This is an introductory course on computer networks.  Students will become comfortable with the " +
            "concepts and vocabulary of computer networking and will gain hands-on experience in basic networking technology. " +
            "Topics include: Network hardware, communication protocols, design and configuration of computer networks.  " +
            "The course also includes a lab component on installation, setup and administration of network operating systems and network equipments.    " +
            "Prerequisite: CSIS161 (F; Sp)",
            unitsTaken: 3,
            classNumber: 2041,
            section: "01"
        }

    ];

    //01 has:
    //  - Saturday class
    //  - 07:45AM - 02:50PM
    theFactory.classes01 = [
                {
                    subjectId: "CSIS",
                    catalogNumber: 237,
                    description: "Data Structures and Algorithms",
                    instructor: "Dai,Ruxin",
                    location: "South Hall 218",
                    timeStart: "11:45 AM",
                    timeEnd: "1:00 PM",
                    dateEnd: "2018-08-16 00:00:00.0",
                    dateStart: "2018-06-06 00:00:00.0",
                    sunday: "N",
                    monday: "N",
                    tuesday: "Y",
                    wednesday: "N",
                    thursday: "Y",
                    friday: "N",
                    saturday: "N",
                    courseDescription: "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                    "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                    "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                    "This is the course description of Data Structures and Algorithms. It's a very long course description ... ",
                    unitsTaken: 3,
                    classNumber: 2001,
                    section: 1
                },
            {
                subjectId: "P E",
                catalogNumber: 108,
                description: "Health & Fitness for Life",
                instructor: "Ritzer, Robert",
                location: "On-Line",
                timeStart: null,
                timeEnd: null,
                dateEnd: "2018-08-16 00:00:00.0",
                dateStart: "2018-06-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "N",
                wednesday: "N",
                thursday: "N",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... ",
                unitsTaken: 1,
                classNumber: 2685,
                section: "90"
            },
                {
                    subjectId: "CSIS",
                    catalogNumber: 239,
                    description: "Introduction to Data Science",
                    instructor: "Livingstone,Steven",
                    location: "Davee Library 164",
                    timeStart: "02:00 PM",
                    timeEnd: "02:50 PM",
                    dateEnd: "2018-08-16 00:00:00.0",
                    dateStart: "2018-06-06 00:00:00.0",
                    sunday: "N",
                    monday: "N",
                    tuesday: "Y",
                    wednesday: "N",
                    thursday: "Y",
                    friday: "N",
                    saturday: "N",
                    courseDescription: "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                                        "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                                        "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                                        "This is the course description of Introduction to Data Science. It's a very long course description ... ",
                    unitsTaken: 3,
                    classNumber: 2002,
                    section: 2
                },
                {
                    subjectId: "CSIS",
                    catalogNumber: 333,
                    description: "Database Management Systems",
                    instructor: "Abuhejleh,Ahmad J",
                    location: "South Hall 12A",
                    timeStart: "07:45 AM",
                    timeEnd: "09:00 AM",
                    dateEnd: "2018-08-16 00:00:00.0",
                    dateStart: "2018-06-06 00:00:00.0",
                    sunday: "N",
                    monday: "Y",
                    tuesday: "N",
                    wednesday: "Y",
                    thursday: "N",
                    friday: "Y",
                    saturday: "N",
                    courseDescription: "This is the course description of Database Management Systems. It's a very long course description ... " +
                    "This is the course description of Database Management Systems. It's a very long course description ... " +
                    "This is the course description of Database Management Systems. It's a very long course description ... " +
                    "This is the course description of Database Management Systems. It's a very long course description ... ",
                    unitsTaken: 3,
                    classNumber: 2003,
                    section: 4
                },
                {
                    subjectId: "MATH",
                    catalogNumber: 167,
                    description: "Calculus II",
                    instructor: "Nabb,Keith",
                    location: "North Hall 16",
                    timeStart: "12:00 PM",
                    timeEnd: "12:50 PM",
                    dateEnd: "2018-08-16 00:00:00.0",
                    dateStart: "2018-06-06 00:00:00.0",
                    sunday: "Y",
                    monday: "Y",
                    tuesday: "N",
                    wednesday: "Y",
                    thursday: "N",
                    friday: "Y",
                    saturday: "N",
                    courseDescription: "This is the course description of Calculus II. It's a very long course description ... " +
                    "This is the course description of Calculus II. It's a very long course description ... " +
                    "This is the course description of Calculus II. It's a very long course description ... " +
                    "This is the course description of Calculus II. It's a very long course description ... ",
                    unitsTaken: 4,
                    classNumber: 2004,
                    section: 4

                },
                {
                    subjectId: "MATH",
                    catalogNumber: 167,
                    description: "Calculus II",
                    instructor: "Tenner,Thomas",
                    location: "North Hall 18",
                    timeStart: "01:00 PM",
                    timeEnd: "01:50 PM",
                    dateEnd: "2018-08-16 00:00:00.0",
                    dateStart: "2018-06-06 00:00:00.0",
                    sunday: "N",
                    monday: "N",
                    tuesday: "Y",
                    wednesday: "N",
                    thursday: "N",
                    friday: "N",
                    saturday: "N",
                    courseDescription: "This is the course description of Calculus II. It's a very long course description ... " +
                    "This is the course description of Calculus II. It's a very long course description ... " +
                    "This is the course description of Calculus II. It's a very long course description ... " +
                    "This is the course description of Calculus II. It's a very long course description ... ",
                    unitsTaken: 4,
                    classNumber: 2004,
                    section: 4
                }
            ]; //end of fakeClasses array

    //02 has:
    //  - Sunday class
    //  - 07:45AM - 07:50PM
    theFactory.classes02 =  [
            {
                subjectId: "CSIS",
                catalogNumber: 237,
                description: "Data Structures and Algorithms",
                instructor: "Dai,Ruxin",
                location: "South Hall 218",
                timeStart: "11:45 AM",
                timeEnd: "1:00 PM",
                dateEnd: "2018-08-16 00:00:00.0",
                dateStart: "2018-06-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "Y",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... ",
                unitsTaken: 3,
                classNumber: 2001,
                section: 1
            },
            {
                subjectId: "P E",
                catalogNumber: 108,
                description: "Health & Fitness for Life",
                instructor: "Ritzer, Robert",
                location: "On-Line",
                timeStart: null,
                timeEnd: null,
                dateEnd: "2018-08-16 00:00:00.0",
                dateStart: "2018-06-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "N",
                wednesday: "N",
                thursday: "N",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... ",
                unitsTaken: 1,
                classNumber: 2685,
                section: "90"
            },
            {
                subjectId: "CSIS",
                catalogNumber: 239,
                description: "Introduction to Data Science",
                instructor: "Livingstone,Steven",
                location: "Davee Library 164",
                timeStart: "02:00 PM",
                timeEnd: "02:50 PM",
                dateEnd: "2018-08-16 00:00:00.0",
                dateStart: "2018-06-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "Y",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                "This is the course description of Introduction to Data Science. It's a very long course description ... ",
                unitsTaken: 3,
                classNumber: 2002,
                section: 2
            },
            {
                subjectId: "CSIS",
                catalogNumber: 333,
                description: "Database Management Systems",
                instructor: "Abuhejleh,Ahmad J",
                location: "South Hall 12A",
                timeStart: "07:45 AM",
                timeEnd: "09:00 AM",
                dateEnd: "2018-08-16 00:00:00.0",
                dateStart: "2018-06-06 00:00:00.0",
                sunday: "N",
                monday: "Y",
                tuesday: "N",
                wednesday: "Y",
                thursday: "N",
                friday: "Y",
                saturday: "N",
                courseDescription: "This is the course description of Database Management Systems. It's a very long course description ... " +
                "This is the course description of Database Management Systems. It's a very long course description ... " +
                "This is the course description of Database Management Systems. It's a very long course description ... " +
                "This is the course description of Database Management Systems. It's a very long course description ... ",
                unitsTaken: 3,
                classNumber: 2003,
                section: 4
            },
            {
                subjectId: "MATH",
                catalogNumber: 167,
                description: "Calculus II",
                instructor: "Nabb,Keith",
                location: "North Hall 16",
                timeStart: "12:00 PM",
                timeEnd: "12:50 PM",
                dateEnd: "2018-08-16 00:00:00.0",
                dateStart: "2018-06-06 00:00:00.0",
                sunday: "Y",
                monday: "Y",
                tuesday: "N",
                wednesday: "Y",
                thursday: "N",
                friday: "Y",
                saturday: "N",
                courseDescription: "This is the course description of Calculus II. It's a very long course description ... " +
                "This is the course description of Calculus II. It's a very long course description ... " +
                "This is the course description of Calculus II. It's a very long course description ... " +
                "This is the course description of Calculus II. It's a very long course description ... ",
                unitsTaken: 4,
                classNumber: 2004,
                section: 4

            },
            {
                subjectId: "MATH",
                catalogNumber: 167,
                description: "Calculus II",
                instructor: "Tenner,Thomas",
                location: "North Hall 18",
                timeStart: "01:00 PM",
                timeEnd: "01:50 PM",
                dateEnd: "2018-08-16 00:00:00.0",
                dateStart: "2018-06-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "N",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Calculus II. It's a very long course description ... " +
                "This is the course description of Calculus II. It's a very long course description ... " +
                "This is the course description of Calculus II. It's a very long course description ... " +
                "This is the course description of Calculus II. It's a very long course description ... ",
                unitsTaken: 4,
                classNumber: 2004,
                section: 4
            },
            {
            subjectId: "LATE",
            catalogNumber: 994,
            description: "Evening Class",
            instructor: "Professor,Tired",
            location: "South Hall 77",
            timeStart: "06:00 PM",
            timeEnd: "07:50 PM",
                dateEnd: "2018-08-16 00:00:00.0",
                dateStart: "2018-06-06 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "Y",
            wednesday: "N",
            thursday: "N",
            friday: "N",
            saturday: "N",
            courseDescription: "This is the course description of Calculus II. It's a very long course description ... " +
            "This is the course description of Calculus II. It's a very long course description ... " +
            "This is the course description of Calculus II. It's a very long course description ... " +
            "This is the course description of Calculus II. It's a very long course description ... ",
            unitsTaken: 2,
            classNumber: 4465,
            section: 1
            }
        ]; //end of classes02 array

    //03 has:
    //  - 07:45AM - 02:50PM
    theFactory.classes03 = [
            {
                subjectId: "CSIS",
                catalogNumber: 237,
                description: "Data Structures and Algorithms",
                instructor: "Dai,Ruxin",
                location: "South Hall 218",
                timeStart: "11:45 AM",
                timeEnd: "1:00 PM",
                dateEnd: "2018-08-16 00:00:00.0",
                dateStart: "2018-06-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "Y",
                friday: "Y",
                saturday: "N",
                courseDescription: "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... ",
                unitsTaken: 3,
                classNumber: 2001,
                section: 1
            },
            {
                subjectId: "P E",
                catalogNumber: 108,
                description: "Health & Fitness for Life",
                instructor: "Ritzer, Robert",
                location: "On-Line",
                timeStart: null,
                timeEnd: null,
                dateEnd: "2018-08-16 00:00:00.0",
                dateStart: "2018-06-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "N",
                wednesday: "N",
                thursday: "N",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... ",
                unitsTaken: 1,
                classNumber: 2685,
                section: "90"
            },
            {
                subjectId: "CSIS",
                catalogNumber: 239,
                description: "Introduction to Data Science",
                instructor: "Livingstone,Steven",
                location: "Davee Library 164",
                timeStart: "02:00 PM",
                timeEnd: "02:50 PM",
                dateEnd: "2018-08-16 00:00:00.0",
                dateStart: "2018-06-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "Y",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                "This is the course description of Introduction to Data Science. It's a very long course description ... ",
                unitsTaken: 3,
                classNumber: 2002,
                section: 2
            },
            {
                subjectId: "CSIS",
                catalogNumber: 333,
                description: "Database Management Systems",
                instructor: "Abuhejleh,Ahmad J",
                location: "South Hall 12A",
                timeStart: "07:45 AM",
                timeEnd: "09:00 AM",
                dateEnd: "2018-08-16 00:00:00.0",
                dateStart: "2018-06-06 00:00:00.0",
                sunday: "N",
                monday: "Y",
                tuesday: "N",
                wednesday: "Y",
                thursday: "N",
                friday: "Y",
                saturday: "N",
                courseDescription: "This is the course description of Database Management Systems. It's a very long course description ... " +
                "This is the course description of Database Management Systems. It's a very long course description ... " +
                "This is the course description of Database Management Systems. It's a very long course description ... " +
                "This is the course description of Database Management Systems. It's a very long course description ... ",
                unitsTaken: 3,
                classNumber: 2003,
                section: 4
            },
            {
                subjectId: "MATH",
                catalogNumber: 167,
                description: "Calculus II",
                instructor: "Tenner,Thomas",
                location: "North Hall 18",
                timeStart: "01:00 PM",
                timeEnd: "01:50 PM",
                dateEnd: "2018-08-16 00:00:00.0",
                dateStart: "2018-06-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "N",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Calculus II. It's a very long course description ... " +
                "This is the course description of Calculus II. It's a very long course description ... " +
                "This is the course description of Calculus II. It's a very long course description ... " +
                "This is the course description of Calculus II. It's a very long course description ... ",
                unitsTaken: 4,
                classNumber: 2004,
                section: 4
            }
        ]; //end of classes03 array

    //04 has:
    //  - 07:45AM - 07:50PM
    theFactory.classes04 = [
            {
                subjectId: "CSIS",
                catalogNumber: 237,
                description: "Data Structures and Algorithms",
                instructor: "Dai,Ruxin",
                location: "South Hall 218",
                timeStart: "11:45 AM",
                timeEnd: "1:00 PM",
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "Y",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... ",
                unitsTaken: 3,
                classNumber: 2001,
                section: 1
            },
            {
                subjectId: "P E",
                catalogNumber: 108,
                description: "Health & Fitness for Life",
                instructor: "Ritzer, Robert",
                location: "On-Line",
                timeStart: null,
                timeEnd: null,
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "N",
                wednesday: "N",
                thursday: "N",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... ",
                unitsTaken: 1,
                classNumber: 2685,
                section: "90"
            },
            {
                subjectId: "CSIS",
                catalogNumber: 239,
                description: "Introduction to Data Science",
                instructor: "Livingstone,Steven",
                location: "Davee Library 164",
                timeStart: "02:00 PM",
                timeEnd: "02:50 PM",
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "Y",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                "This is the course description of Introduction to Data Science. It's a very long course description ... ",
                unitsTaken: 3,
                classNumber: 2002,
                section: 2
            },
            {
                subjectId: "MATH",
                catalogNumber: 167,
                description: "Calculus II",
                instructor: "Tenner,Thomas",
                location: "North Hall 18",
                timeStart: "01:00 PM",
                timeEnd: "01:50 PM",
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "N",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Calculus II. It's a very long course description ... " +
                "This is the course description of Calculus II. It's a very long course description ... " +
                "This is the course description of Calculus II. It's a very long course description ... " +
                "This is the course description of Calculus II. It's a very long course description ... ",
                unitsTaken: 4,
                classNumber: 2004,
                section: 4
            },

            {
                subjectId: "CSIS",
                catalogNumber: 333,
                description: "Database Management Systems",
                instructor: "Abuhejleh,Ahmad J",
                location: "South Hall 12A",
                timeStart: "07:45 AM",
                timeEnd: "09:00 AM",
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "Y",
                tuesday: "N",
                wednesday: "Y",
                thursday: "N",
                friday: "Y",
                saturday: "N",
                courseDescription: "This is the course description of Database Management Systems. It's a very long course description ... " +
                "This is the course description of Database Management Systems. It's a very long course description ... " +
                "This is the course description of Database Management Systems. It's a very long course description ... " +
                "This is the course description of Database Management Systems. It's a very long course description ... ",
                unitsTaken: 3,
                classNumber: 2003,
                section: 4
            },
            {
                subjectId: "LATE",
                catalogNumber: 994,
                description: "Evening Class",
                instructor: "Professor,Tired",
                location: "South Hall 77",
                timeStart: "06:00 PM",
                timeEnd: "07:50 PM",
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "N",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Calculus II. It's a very long course description ... " +
                "This is the course description of Calculus II. It's a very long course description ... " +
                "This is the course description of Calculus II. It's a very long course description ... " +
                "This is the course description of Calculus II. It's a very long course description ... ",
                unitsTaken: 2,
                classNumber: 4465,
                section: 1
            }
        ]; //end of classes04 array

    //05 has:
    //  - 11:45AM - 02:50PM
    theFactory.classes05 = [
            {
                subjectId: "CSIS",
                catalogNumber: 237,
                description: "Data Structures and Algorithms",
                instructor: "Dai,Ruxin",
                location: "South Hall 218",
                timeStart: "11:45 AM",
                timeEnd: "1:00 PM",
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "Y",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... ",
                unitsTaken: 3,
                classNumber: 2001,
                section: 1
            },
            {
                subjectId: "P E",
                catalogNumber: 108,
                description: "Health & Fitness for Life",
                instructor: "Ritzer, Robert",
                location: "On-Line",
                timeStart: null,
                timeEnd: null,
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "N",
                wednesday: "N",
                thursday: "N",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... ",
                unitsTaken: 1,
                classNumber: 2685,
                section: "90"
            },
            {
                subjectId: "CSIS",
                catalogNumber: 239,
                description: "Introduction to Data Science",
                instructor: "Livingstone,Steven",
                location: "Davee Library 164",
                timeStart: "02:00 PM",
                timeEnd: "02:50 PM",
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "Y",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                "This is the course description of Introduction to Data Science. It's a very long course description ... ",
                unitsTaken: 3,
                classNumber: 2002,
                section: 2
            },
            {
                subjectId: "MATH",
                catalogNumber: 167,
                description: "Calculus II",
                instructor: "Tenner,Thomas",
                location: "North Hall 18",
                timeStart: "01:00 PM",
                timeEnd: "01:50 PM",
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "N",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Calculus II. It's a very long course description ... " +
                "This is the course description of Calculus II. It's a very long course description ... " +
                "This is the course description of Calculus II. It's a very long course description ... " +
                "This is the course description of Calculus II. It's a very long course description ... ",
                unitsTaken: 4,
                classNumber: 2004,
                section: 4
            }
        ]; //end of fakeClasses array

    //06 has:
    //  - 1:00PM - 8:15PM
    theFactory.classes06 = [
            {
                subjectId: "CSIS",
                catalogNumber: 237,
                description: "Data Structures and Algorithms",
                instructor: "Dai,Ruxin",
                location: "South Hall 218",
                timeStart: "1:00 PM",
                timeEnd: "1:50 PM",
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "Y",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... ",
                unitsTaken: 3,
                classNumber: 2001,
                section: 1
            },
            {
                subjectId: "P E",
                catalogNumber: 108,
                description: "Health & Fitness for Life",
                instructor: "Ritzer, Robert",
                location: "On-Line",
                timeStart: null,
                timeEnd: null,
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "N",
                wednesday: "N",
                thursday: "N",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... ",
                unitsTaken: 1,
                classNumber: 2685,
                section: "90"
            },
            {
                subjectId: "CSIS",
                catalogNumber: 239,
                description: "Introduction to Data Science",
                instructor: "Livingstone,Steven",
                location: "Davee Library 164",
                timeStart: "02:00 PM",
                timeEnd: "02:50 PM",
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "Y",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                "This is the course description of Introduction to Data Science. It's a very long course description ... ",
                unitsTaken: 3,
                classNumber: 2002,
                section: 2
            },
            {
                subjectId: "MATH",
                catalogNumber: 167,
                description: "Calculus II",
                instructor: "Tenner,Thomas",
                location: "North Hall 18",
                timeStart: "7:00 PM",
                timeEnd: "8:15 PM",
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "N",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Calculus II. It's a very long course description ... " +
                "This is the course description of Calculus II. It's a very long course description ... " +
                "This is the course description of Calculus II. It's a very long course description ... " +
                "This is the course description of Calculus II. It's a very long course description ... ",
                unitsTaken: 4,
                classNumber: 2004,
                section: 4
            }
        ]; //end of fakeClasses array

    //07 has:
    //  - 1:00PM -2:50PM
    theFactory.classes07 = [
            {
                subjectId: "CSIS",
                catalogNumber: 237,
                description: "Data Structures and Algorithms",
                instructor: "Dai,Ruxin",
                location: "South Hall 218",
                timeStart: "1:00 PM",
                timeEnd: "1:50 PM",
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "Y",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... ",
                unitsTaken: 3,
                classNumber: 2001,
                section: 1
            },
            {
                subjectId: "P E",
                catalogNumber: 108,
                description: "Health & Fitness for Life",
                instructor: "Ritzer, Robert",
                location: "On-Line",
                timeStart: null,
                timeEnd: null,
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "N",
                wednesday: "N",
                thursday: "N",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... ",
                unitsTaken: 1,
                classNumber: 2685,
                section: "90"
            },
            {
                subjectId: "CSIS",
                catalogNumber: 239,
                description: "Introduction to Data Science",
                instructor: "Livingstone,Steven",
                location: "Davee Library 164",
                timeStart: "02:00 PM",
                timeEnd: "02:50 PM",
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "Y",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                "This is the course description of Introduction to Data Science. It's a very long course description ... ",
                unitsTaken: 3,
                classNumber: 2002,
                section: 2
            }
        ]; //end of fakeClasses array

    //08 has:
    //  - 12:15AM - 5:00PM
    theFactory.classes08 = [
            {
                subjectId: "CSIS",
                catalogNumber: 237,
                description: "Data Structures and Algorithms",
                instructor: "Dai,Ruxin",
                location: "South Hall 218",
                timeStart: "12:15 AM",
                timeEnd: "1:30 AM",
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "Y",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... ",
                unitsTaken: 3,
                classNumber: 2001,
                section: 1
            },
            {
                subjectId: "P E",
                catalogNumber: 108,
                description: "Health & Fitness for Life",
                instructor: "Ritzer, Robert",
                location: "On-Line",
                timeStart: null,
                timeEnd: null,
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "N",
                wednesday: "N",
                thursday: "N",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... ",
                unitsTaken: 1,
                classNumber: 2685,
                section: "90"
            },
            {
                subjectId: "CSIS",
                catalogNumber: 239,
                description: "Introduction to Data Science",
                instructor: "Livingstone,Steven",
                location: "Davee Library 164",
                timeStart: "02:00 PM",
                timeEnd: "02:50 PM",
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "Y",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                "This is the course description of Introduction to Data Science. It's a very long course description ... " +
                "This is the course description of Introduction to Data Science. It's a very long course description ... ",
                unitsTaken: 3,
                classNumber: 2002,
                section: 2
            }
        ]; //end of fakeClasses array

    //09 has:
    //  - 12:15AM - 1:30AM
    theFactory.classes09 = [
            {
                subjectId: "CSIS",
                catalogNumber: 237,
                description: "Data Structures and Algorithms",
                instructor: "Dai,Ruxin",
                location: "South Hall 218",
                timeStart: "12:15 PM",
                timeEnd: "1:30 PM",
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "Y",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
                "This is the course description of Data Structures and Algorithms. It's a very long course description ... ",
                unitsTaken: 3,
                classNumber: 2001,
                section: 1
            },
        {
            subjectId: "CSIS",
            catalogNumber: 237,
            description: "Data Structures and Algorithms",
            instructor: "Dai,Ruxin",
            location: "South Hall 218",
            timeStart: "2:00 PM",
            timeEnd: "2:50 PM",
            dateEnd: "2017-12-15 00:00:00.0",
            dateStart: "2017-09-06 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "Y",
            wednesday: "N",
            thursday: "Y",
            friday: "N",
            saturday: "N",
            courseDescription: "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
            "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
            "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
            "This is the course description of Data Structures and Algorithms. It's a very long course description ... ",
            unitsTaken: 3,
            classNumber: 2001,
            section: 1
        },
        {
            subjectId: "CSIS",
            catalogNumber: 237,
            description: "Data Structures and Algorithms",
            instructor: "Dai,Ruxin",
            location: "South Hall 218",
            timeStart: "4:00 PM",
            timeEnd: "4:15 PM",
            dateEnd: "2017-12-15 00:00:00.0",
            dateStart: "2017-09-06 00:00:00.0",
            sunday: "Y",
            monday: "Y",
            tuesday: "N",
            wednesday: "Y",
            thursday: "N",
            friday: "Y",
            saturday: "Y",
            courseDescription: "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
            "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
            "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
            "This is the course description of Data Structures and Algorithms. It's a very long course description ... ",
            unitsTaken: 3,
            classNumber: 2001,
            section: 1
        },
        {
            subjectId: "CSIS",
            catalogNumber: 237,
            description: "Data Structures and Algorithms",
            instructor: "Dai,Ruxin",
            location: "South Hall 218",
            timeStart: "10:00 AM",
            timeEnd: "11:30 AM",
            dateEnd: "2017-12-15 00:00:00.0",
            dateStart: "2017-09-06 00:00:00.0",
            sunday: "N",
            monday: "Y",
            tuesday: "N",
            wednesday: "Y",
            thursday: "N",
            friday: "Y",
            saturday: "N",
            courseDescription: "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
            "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
            "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
            "This is the course description of Data Structures and Algorithms. It's a very long course description ... ",
            unitsTaken: 3,
            classNumber: 2001,
            section: 1
        },
        {
            subjectId: "CSIS",
            catalogNumber: 237,
            description: "Data Structures and Algorithms",
            instructor: "Dai,Ruxin",
            location: "South Hall 218",
            timeStart: "9:00 AM",
            timeEnd: "10:00 AM",
            dateEnd: "2017-12-15 00:00:00.0",
            dateStart: "2017-09-06 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "Y",
            wednesday: "N",
            thursday: "Y",
            friday: "N",
            saturday: "Y",
            courseDescription: "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
            "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
            "This is the course description of Data Structures and Algorithms. It's a very long course description ... " +
            "This is the course description of Data Structures and Algorithms. It's a very long course description ... ",
            unitsTaken: 3,
            classNumber: 2001,
            section: 1
        },
            {
                subjectId: "P E",
                catalogNumber: 108,
                description: "Health & Fitness for Life",
                instructor: "Ritzer, Robert",
                location: "On-Line",
                timeStart: null,
                timeEnd: null,
                dateEnd: "2017-12-15 00:00:00.0",
                dateStart: "2017-09-06 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "N",
                wednesday: "N",
                thursday: "N",
                friday: "N",
                saturday: "N",
                courseDescription: "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... " +
                "This is the course description of Health & Fitness for Life. It's a very long course description ... ",
                unitsTaken: 1,
                classNumber: 2685,
                section: "90"
            }
        ]; //end of fakeClasses09 array

    /**
     * **********HOW BREAKS CAN BE STRUCTURED**********
     * - Breaks can only be full day. TODO: Implement partial-day breaks
     *
     * SINGLE DAY
     * - DateEnd and dateStart will be the same; will be "YYYY-MM-DD 00:00:00.0"
     * - Will still have the day of the week set as "Y"
     *
     * EXTENDED PERIOD (One block of days)
     * - DateStart and dateEnd will still have "00:00:00.0" ending times. Start/end dates inclusive.
     * - Unsure what I want to do for these. Days of week will still say "Y" or "N" if any of those days are breaks,
     *   regardless of the week, or beginning or end of break, etc.
     *
     * REPEATING DAYS
     * - Will look the same as extended period, but probably only have certain days as "Y"'s.
     *
     */

    //EMPTY BREAKS
    theFactory.fakeBreaks00 = [];

    //contains an array of break objects. Has one per week for testing purposes as time goes on.
    //break01: TestTest 9-19 (going to update this each week for testing purposes)
    //break02: Sep. 3 Labor Day
    //break03: October 9 "LEIF ERIKSON DAY!"
    //break04: November 21-23 ("Thanksgiving break")
    //break05: every friday
    theFactory.fakeBreaks01 = [
        { //Every Wednesday
            subjectId: null,
            catalogNumber: null,
            description: "TestTest 2-14",
            instructor: null,
            location: null,
            timeStart: null,
            timeEnd: null,
            dateEnd: "2019-08-14 00:00:00.0",
            dateStart: "2018-02-14 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "N",
            wednesday: "N",
            thursday: "Y",
            friday: "N",
            saturday: "N",
            courseDescription: "Testing this",
            unitsTaken: null,
            classNumber: null,
            section: null
        },
        { //Single day
            subjectId: null,
            catalogNumber: null,
            description: "TestTest 2-14",
            instructor: null,
            location: null,
            timeStart: null,
            timeEnd: null,
            dateEnd: "2019-02-14 00:00:00.0",
            dateStart: "2019-02-14 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "N",
            wednesday: "N",
            thursday: "Y",
            friday: "N",
            saturday: "N",
            courseDescription: "Testing this",
            unitsTaken: null,
            classNumber: null,
            section: null
        },
        { //Single day
            subjectId: null,
            catalogNumber: null,
            description: "Labor Day",
            instructor: null,
            location: null,
            timeStart: null,
            timeEnd: null,
            dateEnd: "2018-09-03 00:00:00.0",
            dateStart: "2018-09-03 00:00:00.0",
            sunday: "N",
            monday: "Y",
            tuesday: "N",
            wednesday: "N",
            thursday: "N",
            friday: "N",
            saturday: "N",
            courseDescription: "Go spend this holiday out on the water while it's still nice",
            unitsTaken: null,
            classNumber: null,
            section: null
        },
            { //Single day
                subjectId: null,
                catalogNumber: null,
                description: "Leif Erikson Day",
                instructor: null,
                location: null,
                timeStart: null,
                timeEnd: null,
                dateEnd: "2018-10-09 00:00:00.0",
                dateStart: "2018-10-09 00:00:00.0",
                sunday: "N",
                monday: "N",
                tuesday: "Y",
                wednesday: "N",
                thursday: "N",
                friday: "N",
                saturday: "N",
                courseDescription: "Today, Vikings are Celebrated",
                unitsTaken: null,
                classNumber: null,
                section: null
            },
        { //Extended period
            subjectId: null,
            catalogNumber: null,
            description: "Thanksgiving Break",
            instructor: null,
            location: null,
            timeStart: null,
            timeEnd: null,
            dateEnd: "2018-11-23 00:00:00.0",
            dateStart: "2018-11-21 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "N",
            wednesday: "Y",
            thursday: "Y",
            friday: "Y",
            saturday: "N",
            courseDescription: "This is the description of Thanksgiving break...",
            unitsTaken: null,
            classNumber: null,
            section: null
        },
        { //Repeating
            subjectId: null,
            catalogNumber: null,
            description: "Friday Break",
            instructor: null,
            location: null,
            timeStart: null,
            timeEnd: null,
            dateEnd: "2019-06-06 00:00:00.0",
            dateStart: "2018-06-06 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "N",
            wednesday: "N",
            thursday: "N",
            friday: "Y",
            saturday: "N",
            courseDescription: "This is the description of Thanksgiving break...",
            unitsTaken: null,
            classNumber: null,
            section: null
        }
    ];

    //EMPTY EVENTS
    theFactory.fakeEvents00 = [];

    //6:30-11:15 9-5-18 (morning school starts)
    //(weekly, Tuesday) "Taco Tuesday"
    //18:00-23:30 (last day of school)
    //0:00 - 24:00 (July 4 1776)
    theFactory.fakeEvents01 = [
        //MULTI-DAY EVENT
        {
            subjectId: null,
            catalogNumber: null,
            description: "TestingTesting",
            instructor: null,
            location: "Cafeteria - University Center",
            timeStart: "6:30 AM",
            timeEnd: "10:30 AM",
            dateEnd: "2019-09-19 00:00:00.0",
            dateStart: "2018-09-19 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "N",
            wednesday: "Y",
            thursday: "Y",
            friday: "N",
            saturday: "N",
            courseDescription: "Get a good breakfast on the first day of school, free with student ID.",
            unitsTaken: null,
            classNumber: null,
            section: null
        },

        {
            subjectId: null,
            catalogNumber: null,
            description: "Third Week FREE Breakfast Buffet",
            instructor: null,
            location: "Cafeteria - University Center",
            timeStart: "6:30 AM",
            timeEnd: "11:15 AM",
            dateEnd: "2018-09-19 00:00:00.0",
            dateStart: "2018-09-19 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "N",
            wednesday: "Y",
            thursday: "Y",
            friday: "N",
            saturday: "N",
            courseDescription: "Get a good breakfast on the first day of school, free with student ID.",
            unitsTaken: null,
            classNumber: null,
            section: null
        },

        //Below: Taco Day, every day first week
        {
            subjectId: null,
            catalogNumber: null,
            description: "Taco Tuesdays",
            instructor: null,
            location: "Cafeteria - University Center",
            timeStart: "11:00 AM",
            timeEnd: "2:00 PM",
            dateEnd: "2019-09-07 00:00:00.0",
            dateStart: "2018-09-03 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "Y",
            wednesday: "N",
            thursday: "N",
            friday: "N",
            saturday: "N",
            courseDescription: "There are tacos on Tuesday!",
            unitsTaken: null,
            classNumber: null,
            section: null
        },
        {
            subjectId: null,
            catalogNumber: null,
            description: "Pizza Thursday",
            instructor: null,
            location: "Cafeteria - University Center",
            timeStart: "11:00 AM",
            timeEnd: "2:00 PM",
            dateEnd: "2019-09-07 00:00:00.0",
            dateStart: "2018-09-03 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "N",
            wednesday: "N",
            thursday: "Y",
            friday: "N",
            saturday: "N",
            courseDescription: "There is pizza on Thursdays!",
            unitsTaken: null,
            classNumber: null,
            section: null
        },
        {
            subjectId: null,
            catalogNumber: null,
            description: "Last Day of School Party",
            instructor: null,
            location: "Falcon's Nest - University Center",
            timeStart: "6:00 PM",
            timeEnd: "11:30 PM",
            dateEnd: "2018-12-14 00:00:00.0",
            dateStart: "2018-12-14 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "N",
            wednesday: "N",
            thursday: "N",
            friday: "Y",
            saturday: "N",
            courseDescription: "Celebrate the last day of school before the finals weekend with too much junk food and not enough good music.",
            unitsTaken: null,
            classNumber: null,
            section: null
        },
        {
            subjectId: null,
            catalogNumber: null,
            description: "Four score and seven years ago...",
            instructor: null,
            location: "Philadelphia",
            timeStart: "12:00 AM",
            timeEnd: "12:00 PM",
            dateEnd: "1776-07-04 00:00:00.0",
            dateStart: "1776-07-04 00:00:00.0",
            sunday: "N",
            monday: "N",
            tuesday: "N",
            wednesday: "N",
            thursday: "Y",
            friday: "N",
            saturday: "N",
            courseDescription: "This is the description of Thanksgiving break...",
            unitsTaken: null,
            classNumber: null,
            section: null
        }
    ];

    return theFactory;

});