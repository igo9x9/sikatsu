const datas = [{
    title: "隅の死活 第1型",
    setup: "*********| *********| *********| *********| *********| *******B*| ********B| *****BBBWW *****BWWW| -----BW--+",
    nextHands: {107: "a"},
    hands: {
        a: {
            removeWhiteStones: [],
            nextWhiteHand: 108,
            removeBlackStones: [],
            nextHands: {97: "b"},
            message: "",
            status: "continue"
        },
        b: {
            removeWhiteStones: [{108: "+"}],
            nextWhiteHand: null,
            removeBlackStones: [],
            nextHands: {},
            message: "コウ。",
            status: "correct"
        }
    }
},{
    title: "隅の死活 第2型",
    setup: "*********| *********| *********| *********| *********| *******W*| ********W| *****WWWBB *****WBBB| ------B-W+",
    nextHands: {108: "a"},
    hands: {
        a: {
            removeWhiteStones: [],
            nextWhiteHand: 97,
            removeBlackStones: [{108: "+"}],
            nextHands: {106: "b"},
            message: "",
            status: "continue"
        },
        b: {
            removeWhiteStones: [],
            nextWhiteHand: 104,
            removeBlackStones: [],
            nextHands: {108: "c"},
            message: "",
            status: "continue"
        },
        c: {
            removeWhiteStones: [{97: "|"}, {107: "-"}],
            nextWhiteHand: null,
            removeBlackStones: [],
            nextHands: {},
            message: "",
            status: "correct"
        }
    }
},{
    title: "隅の死活 第4型",
    setup: "*********| *********| *********| *********| *********| *******WW| *******WB| *****WWWB| *****WBBB| ---------+",
    nextHands: {108: "a"},
    hands: {
        a: {
            removeWhiteStones: [],
            nextWhiteHand: null,
            removeBlackStones: [],
            nextHands: {},
            message: "",
            status: "correct"
        }
    }
},{
    title: "隅の死活 第5型",
    setup: "*********| *********| *********| *********| *********| *******BB| *******BW| *****BBBW| *****BWWW| ------W--+",
    nextHands: {107: "a"},
    hands: {
        a: {
            removeWhiteStones: [],
            nextWhiteHand: 75,
            removeBlackStones: [],
            nextHands: {97: "b"},
            message: "",
            status: "continue"
        },
        b: {
            removeWhiteStones: [],
            nextWhiteHand: null,
            removeBlackStones: [],
            nextHands: {},
            message: "隅のマガリ四目で死。",
            status: "correct"
        }
    }
},{
    title: "隅の死活 第6型",
    setup: "*********| *********| *********| *********| *********| *******B*| ********B| ****BBBBWW ****BWWW*| ---------+",
    nextHands: {107: "a"},
    hands: {
        a: {
            removeWhiteStones: [],
            nextWhiteHand: 96,
            removeBlackStones: [],
            nextHands: {108: "b"},
            message: "",
            status: "continue"
        },
        b: {
            removeWhiteStones: [],
            nextWhiteHand: 104,
            removeBlackStones: [],
            nextHands: {106: "c"},
            message: "",
            status: "continue"
        },
        c: {
            removeWhiteStones: [],
            nextWhiteHand: null,
            removeBlackStones: [],
            nextHands: {},
            message: "隅のマガリ四目で死。",
            status: "correct"
        }
    }
},{
    title: "隅の死活 第7型",
    setup: "*********| *********| *********| ******W**| *********| ******W**| *******W*| *****WWBB| *****WB**| ---------+",
    nextHands: {106: "a"},
    hands: {
        a: {
            removeWhiteStones: [],
            nextWhiteHand: 97,
            removeBlackStones: [],
            nextHands: {96: "b"},
            message: "",
            status: "continue"
        },
        b: {
            removeWhiteStones: [],
            nextWhiteHand: 104,
            removeBlackStones: [],
            nextHands: {108: "c"},
            message: "",
            status: "continue"
        },
        c: {
            removeWhiteStones: [],
            nextWhiteHand: 107,
            removeBlackStones: [{108: "+"}],
            nextHands: {86: "d"},
            message: "",
            status: "continue"
        },
        d: {
            removeWhiteStones: [],
            nextWhiteHand: null,
            removeBlackStones: [],
            nextHands: {},
            message: "",
            status: "correct"
        }
    }
}];
