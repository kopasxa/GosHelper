$(document).ready(function () {

    $(" header.lk .dropdown-toggle2").click(function () {
        $(" header.lk .dropdown2-menu").css("display", "block");
    });

    $(" .main").click(function () {
        $(" header.lk .dropdown2-menu").css("display", "none");
    });
    

    $(" header.lk .leftBlock .soc").click(function () {
        $(" header.lk .middleBlock .nesoc").css("display", "none");
        $(" header.lk .middleBlock .soc").css("display", "flex");

        $(" header.lk .leftBlock .nesoc").removeClass("addHover");
        $(this).addClass("addHover");
    });
    $(" header.lk .leftBlock .nesoc").click(function () {
        $(" header.lk .middleBlock .soc").css("display", "none");
        $(" header.lk .middleBlock .nesoc").css("display", "flex");
        $(" header.lk .leftBlock .soc").removeClass("addHover");

        $(this).addClass("addHover");
    });

    function all () {
        $(" header.lk .rightBlock .nesoc .mill").css("display", "none");
        $(" header.lk .rightBlock .nesoc .ip").css("display", "none");
        $(" header.lk .rightBlock .nesoc .urface").css("display", "none");
        $(" header.lk .rightBlock .nesoc .phis").css("display", "none");

        $(" header.lk .rightBlock .soc .pens").css("display", "none");
        $(" header.lk .rightBlock .soc .family").css("display", "none");
        $(" header.lk .rightBlock .soc .inv").css("display", "none");
        $(" header.lk .rightBlock .soc .other").css("display", "none");
        $(" header.lk .rightBlock .soc .mill").css("display", "none");

        $(" header.lk .middleBlock .nesoc .mill").removeClass("addHover");
        $(" header.lk .middleBlock .nesoc .ip").removeClass("addHover");
        $(" header.lk .middleBlock .nesoc .urface").removeClass("addHover");
        $(" header.lk .middleBlock .nesoc .phis").removeClass("addHover");

        $(" header.lk .middleBlock .soc .pens").removeClass("addHover");
        $(" header.lk .middleBlock .soc .family").removeClass("addHover");
        $(" header.lk .middleBlock .soc .inv").removeClass("addHover");
        $(" header.lk .middleBlock .soc .other").removeClass("addHover");
        $(" header.lk .middleBlock .soc .mill").removeClass("addHover");
    }

    function allinall (thi) {
        all();

        newthis = thi.classList;
        path = " header.lk .rightBlock .soc ." + newthis;
        path2 = " header.lk .rightBlock .nesoc ." + newthis;
        $(path).css("display", "flex");
        $(path2).css("display", "flex");
        $(thi).addClass("addHover");
    }

    $(" header.lk .middleBlock .soc .mill").click(function () {
        allinall(this);
    });

    $(" header.lk .middleBlock .soc .pens").click(function () {
        allinall(this);
    });

    $(" header.lk .middleBlock .soc .family").click(function () {
        allinall(this);
    });

    $(" header.lk .middleBlock .soc .inv").click(function () {
        allinall(this);
    });

    $(" header.lk .middleBlock .soc .other").click(function () {
        allinall(this);
    });




    $(" header.lk .middleBlock .nesoc .phis").click(function () {
        allinall(this);
    });

    $(" header.lk .middleBlock .nesoc .mill").click(function () {
        allinall(this);
    });

    $(" header.lk .middleBlock .nesoc .ip").click(function () {
        allinall(this);
    });

    $(" header.lk .middleBlock .nesoc .urface").click(function () {
        allinall(this);
    });
});