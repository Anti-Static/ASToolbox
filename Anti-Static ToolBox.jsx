// Anti-Static ToolBox
// v 1.0
// by James Zelasko
// This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
// http://creativecommons.org/licenses/by-sa/4.0/

var panelGlobal = this;


// PALETTE
// =======
var palette = (panelGlobal instanceof Panel) ? panelGlobal : new Window("palette");
    if ( !(panelGlobal instanceof Panel) ) palette.text = "Anti-Static ToolBox";
    palette.orientation = "column";
    palette.alignChildren = ["left","top"];
    palette.spacing = 0;
    palette.margins = 5;

// TPANEL1
// =======
var tpanel1 = palette.add("tabbedpanel", undefined, undefined, {name: "tpanel1"});
    tpanel1.alignChildren = "fill";
    tpanel1.preferredSize.width = 316.047;
    tpanel1.margins = 0;

// TAB1
// ====
var tab1 = tpanel1.add("tab", undefined, undefined, {name: "tab1"});
    tab1.text = "Timeline";
    tab1.orientation = "column";
    tab1.alignChildren = ["left","top"];
    tab1.spacing = 3;
    tab1.margins = 10;

// BUTTONGROUP2
// ============
var ButtonGroup2 = tab1.add("group", undefined, {name: "ButtonGroup2"});
    ButtonGroup2.orientation = "column";
    ButtonGroup2.alignChildren = ["left","center"];
    ButtonGroup2.spacing = 0;
    ButtonGroup2.margins = [0,3,0,0];

// GROUP1
// ======
var group1 = ButtonGroup2.add("group", undefined, {name: "group1"});
    group1.orientation = "row";
    group1.alignChildren = ["left","center"];
    group1.spacing = 10;
    group1.margins = 0;

var image1_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%01%C3%A4IDATx%C3%9Abd%00%C2%82%C2%86%C2%86%06%05%20%C2%95%C3%800%C3%B0%60%01%C3%90-%0F%18%C2%A1%0E%3A%C3%BF%C3%A7%C3%8F%C2%9F%C3%AF%C3%9F%C2%BE%7D%3B%C3%BB%C3%B3%C3%A7%C3%8Fg%20Y%C3%9D%C3%B7%1F%C2%8D%C3%B9%7F%C3%BD%C2%96%3A%22.%C2%B2%C2%99%C3%96.agg%C2%97%C3%A2%C3%A2%C3%A22faa%C3%A1%04r%0DY%40!%04r%C3%90%C2%92%25K%C2%A2%1E%3Cx%C3%B0%19%C2%A6p%C2%BF%C2%B4b%C2%9A%043%0BC%C3%A4%C2%A3%C3%9B%C2%B3%C3%A8%11D%0A%0A%0A%C2%BC111%C3%8B%C2%80%0EK%60%02%09%C2%80B%08%C3%99A%03%01%40%C3%B6%C2%83%C3%9C%01b%C2%83%1D%05%C2%8B%C2%B2%C2%81%060w01%0CB%C3%80B%C2%AEFsss5MM%C2%ADbj'x%205%C2%8BlGqrr%C3%B2%C2%B2%C2%B1%C2%B1%19S%C3%93Q%C2%8C%C2%8C%C2%90%C2%88%1B%C2%94%C3%917%C2%BC%C3%92%C3%94%C2%81%03%07%C3%8E%02%C2%B1%095%1D%C2%93%C2%9D%C2%9D%C2%9D%C3%86%C3%8B%C3%8BC%C2%BC%C2%A3%1C%1C%1C%C2%8CEE%C3%85%C2%8Ci%19B%C2%AC%C2%AC%C2%AC%20%C3%B3%C2%B7%10%C3%AD(%C2%90%C2%83%04%05%05%C3%93h%C3%A9(ff%C2%B0s%C2%B6%C2%8C%26t%C2%AA'%C3%B4k%C3%97%C2%AEn%11%15%15%3DKK%C3%87%C3%A8%C3%A9%C3%A9%C3%B9%C2%92%C3%A4%C2%A8%C2%ABW%C2%AF%C2%82%C3%AA%25%C2%9A%C3%96%C2%91%C3%9A%C3%9A%C3%9A%C3%86%04%1D%C3%B5ND%C3%888%C3%8D%23%C3%BD%0C%C2%BD%C2%A2%C2%8D%C2%83%03%C3%94%C2%9Cbh%1CM%C3%A8TI%C3%A8%2C%C2%BF%C3%BF%7C%C3%BE%C3%B5%C3%AB%C3%97-z9%C3%A6%C3%BF%C3%BF%7FR%04%1D%C3%85%C3%B7%C3%B1%C3%93%C2%AD%05%0B%C3%A6%C2%A7%C3%93%C3%8BQ%C2%A0j%C2%86%C2%A2%C2%BA%C2%8F%C2%8C%C2%9C%25%C2%A5%C2%A5%C2%A5%C3%ADC%C3%95j%C2%86R%00%2C%C3%A3%24%09US%C2%A3%C3%95%0C%C3%9D%C3%9AS%C2%A4%C2%82%5B%40%00%C2%A4%C3%92%C2%A9Z%C3%8D%C3%A0%02RRR%C2%BCj%400%C2%A8BJ%0D%0C%C3%94gR%C2%A7%C2%91%C3%87%06%C2%A2%C3%8E%C2%8E%26t%C2%BAE%C3%9F%C3%AB%C3%97%C2%AF%C2%9F%03%C2%9B%C3%8AT%19%04%C3%A1%C3%A2%C3%A24%C2%A6%C2%8A%C2%A3%40%C3%AD%2C%20%C2%A6%C2%8A%C2%A3P%C2%AA%19hwy%C3%80%01%C3%94%1D%C3%9F%C2%98%20%C3%81%C3%86e%0C%1A%1F%1AH%07%C2%81%C3%AC%07%C2%B9%03%C3%9C%7D%1F%C2%8C%23y%C2%8C%20A%C2%A8%C3%83%C3%B2%C2%81%C3%98%60%C2%80%02%C3%AA%03%10_d%C2%80%C2%8Ey%02%04%18%00%19o%C2%A5k%C2%93%C3%B1%2Fm%00%00%00%00IEND%C2%AEB%60%C2%82";
var image1 = group1.add("image", undefined, File.decode(image1_imgString), {name: "image1"});

var RandomizeInPointsButton = group1.add("button", undefined, undefined, {name: "RandomizeInPointsButton"});
    RandomizeInPointsButton.text = "Randomize In Points";
    RandomizeInPointsButton.preferredSize.width = 210;

// GROUP2
// ======
var group2 = ButtonGroup2.add("group", undefined, {name: "group2"});
    group2.orientation = "row";
    group2.alignChildren = ["left","center"];
    group2.spacing = 10;
    group2.margins = [50,0,0,0];

var statictext1 = group2.add("statictext", undefined, undefined, {name: "statictext1"});
    statictext1.text = "Frames";

var RandomizeInPointsSlider = group2.add("slider", undefined, undefined, undefined, undefined, {name: "RandomizeInPointsSlider"});
    RandomizeInPointsSlider.minvalue = 0;
    RandomizeInPointsSlider.maxvalue = 100;
    RandomizeInPointsSlider.value = 50;
    RandomizeInPointsSlider.preferredSize.width = 113;

var RandomizeInPointsTextbox = group2.add('edittext {properties: {name: "RandomizeInPointsTextbox"}}');
    RandomizeInPointsTextbox.text = "20";
    RandomizeInPointsTextbox.preferredSize.width = 30;

// GROUP3
// ======
var group3 = ButtonGroup2.add("group", undefined, {name: "group3"});
    group3.orientation = "row";
    group3.alignChildren = ["left","center"];
    group3.spacing = 10;
    group3.margins = [50,0,0,0];

var RandomizeInPointsRelativeCheck = group3.add("checkbox", undefined, undefined, {name: "RandomizeInPointsRelativeCheck"});
    RandomizeInPointsRelativeCheck.text = "Relative";

// BUTTONGROUP2
// ============
var divider1 = ButtonGroup2.add("panel", undefined, undefined, {name: "divider1"});
    divider1.alignment = "fill";

// BUTTONGROUP3
// ============
var ButtonGroup3 = tab1.add("group", undefined, {name: "ButtonGroup3"});
    ButtonGroup3.orientation = "column";
    ButtonGroup3.alignChildren = ["left","center"];
    ButtonGroup3.spacing = 0;
    ButtonGroup3.margins = [0,3,0,0];

// GROUP4
// ======
var group4 = ButtonGroup3.add("group", undefined, {name: "group4"});
    group4.orientation = "row";
    group4.alignChildren = ["left","center"];
    group4.spacing = 10;
    group4.margins = 0;

var image2_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%01%C3%A2IDATx%C3%9Abd%00%C2%82%C2%86%C2%86%06%05%20%C2%95%C3%800%C3%B0%60%01%C3%90-%0F%18%C2%A1%0E%3A%C3%BF%C3%A7%C3%8F%C2%9F%C3%AF%C3%9F%C2%BE%7D%3B%C3%BB%C3%B3%C3%A7%C3%8Fg0%15%1EO_%C2%A6%5D%14%C3%A4%C3%9B%C3%B2%C2%9C%C2%8B%C3%B3%19-%5D%C3%82%C3%8E%C3%8E.%C3%85%C3%85%C3%85e%C3%8C%C3%82%C3%82%C3%82%09%C3%A4%1A%C2%B2%C2%80B%08%C3%A4%C2%A0%25K%C2%96D%3Dx%C3%B0%C3%A03%C2%B2%C3%A2*%05%C3%B5%C2%B4%3B_%3En%C2%9E%C3%BA%C3%A6%C3%85YZ%07%C2%91%C2%82%C2%82%02oLL%C3%8C2%C2%A0%C3%83%12%C2%98%40%02%C2%A0%10Bw%10%C2%BD%01%C3%88~%C2%90%3B%40l%C2%B0%C2%A3%C2%90%C2%A3l%20%01%C3%8C%1DL%0C%C2%83%10%C2%B0%10R%C3%B0%C3%83%C3%92%C2%A28AX%C2%90.Q%0BJ%C3%B0%40j%16AG%C3%BD%C3%A7%60Wccc%C2%A3K%0812B%22nPF%C3%9F%C3%90LS%C2%9C%C3%BB%0F%C2%A6%C3%8F%C2%A2C9%05%02%C3%99%C3%99%C3%99i%C2%BC%C2%BC%3C%C2%84%1D%C2%85%0E%1C%1C%1C%C2%8CEE%C3%85%C2%8Ci%C3%A1(VVV%C2%90%C2%B9%5BHv%14%C3%88A%C2%82%C2%82%C2%82i%C2%B4p%1433%C3%989%5BF%13%3A%C3%95%12%3A%3A%C2%B8v%C3%AD%C3%AA%16QQQ%C2%9A%24%7C%3D%3D%3D_%C2%B2%1Cu%C3%B5%C3%AAUP%C3%BDD%C2%93%C2%BAR%5B%5B%C3%9B%C2%98%2CGa%03%09%09%C2%893%C2%81%C2%A5%3E%C3%859%C2%92%C2%83%03%C3%94%C2%9Cbh%1CM%C3%A84K%C3%A8X%5B%12%3F~%C3%9C%C2%A2%C2%869%C3%BF%C3%BF%C3%BF%C2%93%C2%A2%C2%9A%C2%A3V%C2%ACX%C3%9EK%C2%ADj%C2%86j%C2%8E%C3%82%06BC%C3%83H.%C3%B5%C3%89%C2%AEf%C2%88%05%C3%A4TE%C2%A3%C3%95%C3%8C%C2%80%C3%A4%3El%C3%A0%C3%96%C2%AD%C2%9B%C3%A9t%C2%ABf%C2%88%05%07%0E%1C%40%C2%A9%1F%C2%A5%C2%A4%C2%A4x%C3%95%C2%80%60%40C%0A%1D%C2%A8%C2%81%C2%81%C3%BAL%C3%BC%C2%B9%0F%C3%9CA9%3B%C2%9A%C3%90%07%3C%C2%A1%C2%A3%C2%83%C3%97%C2%AF_%3F%076%C2%A5g%C3%A1S%C3%83%C3%85%C3%85iLWG%C2%81%C3%9Aa%40%3C%C2%8B%C3%A8j%06%C3%9A%5D%1Ep%00u%C3%877%26H%C2%B0q%19%C2%83%C3%86%C2%87%06%C3%92A%20%C3%BBA%C3%AE%00w%C3%9F%07%C3%A3H%1E%23H%10%C3%AA%C2%B0%7C%206%18%C2%A0%C2%80%C3%BA%00%C3%84%17%19%C2%A0c%C2%9E%00%01%06%00%C3%B7%C3%A7%C2%A6X%C2%8C%C2%8C%C2%8B%1D%00%00%00%00IEND%C2%AEB%60%C2%82";
var image2 = group4.add("image", undefined, File.decode(image2_imgString), {name: "image2"});

var StaggerInPointsButton = group4.add("button", undefined, undefined, {name: "StaggerInPointsButton"});
    StaggerInPointsButton.text = "Stagger In Points";
    StaggerInPointsButton.preferredSize.width = 210;

// GROUP5
// ======
var group5 = ButtonGroup3.add("group", undefined, {name: "group5"});
    group5.orientation = "row";
    group5.alignChildren = ["left","center"];
    group5.spacing = 10;
    group5.margins = [50,0,0,0];

var statictext2 = group5.add("statictext", undefined, undefined, {name: "statictext2"});
    statictext2.text = "Frames";

var StaggerInPointsSlider = group5.add("slider", undefined, undefined, undefined, undefined, {name: "StaggerInPointsSlider"});
    StaggerInPointsSlider.minvalue = 0;
    StaggerInPointsSlider.maxvalue = 100;
    StaggerInPointsSlider.value = 50;
    StaggerInPointsSlider.preferredSize.width = 113;

var StaggerInPointsTextbox = group5.add('edittext {properties: {name: "StaggerInPointsTextbox"}}');
    StaggerInPointsTextbox.text = "2";
    StaggerInPointsTextbox.preferredSize.width = 30;

// BUTTONGROUP3
// ============
var divider2 = ButtonGroup3.add("panel", undefined, undefined, {name: "divider2"});
    divider2.alignment = "fill";

// BUTTONGROUP4
// ============
var ButtonGroup4 = tab1.add("group", undefined, {name: "ButtonGroup4"});
    ButtonGroup4.orientation = "column";
    ButtonGroup4.alignChildren = ["left","center"];
    ButtonGroup4.spacing = 0;
    ButtonGroup4.margins = [0,3,0,0];

// GROUP6
// ======
var group6 = ButtonGroup4.add("group", undefined, {name: "group6"});
    group6.orientation = "row";
    group6.alignChildren = ["left","center"];
    group6.spacing = 10;
    group6.margins = 0;

var image3_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03gIDATx%C3%9A%C3%AC%C2%98%C3%8DO%13A%14%C3%80gv%C2%B7%5B%C3%A8%17%C3%92%1A%5BV%C2%81%12%13%3E%C3%94(D.%C2%92%C2%98p%11%C2%A3%06%C2%95%C2%9B1%24%C3%82%C3%89%04%0E%C3%86x%C3%A1H%C3%A2_%C3%81%0D%12%C3%A2%15%C2%84D%01%2F%C3%84%03%07%C3%93%C2%AA%C2%98H%C2%84%0A%05%C2%91%C3%B2a%3F%C2%80%C3%96%C2%A5%C3%9D%C3%AE%C2%87%C3%AF%C3%95%C2%A5%C3%92%C3%90%1EL%C3%90%C3%B6%C2%B0%2F%C2%99%C3%AC%C3%8C%C2%BE7%C3%B3~%C3%BB%C3%A6e%C3%B3f(%01%19%1C%1C%C3%B4%C3%82%C2%A3%C2%87%14_%C2%86%C2%81e%C2%95%C3%AA%40%1FdY%3E%10E%C3%91%C2%9FJ%C2%A5B%C3%BF%C2%9B%C3%84l6%0B%16%C2%8B%C3%A5*%C3%87q%C3%A50l%C3%A10B%084%3A%3A%C3%BApuu5%5E%C2%AC%10y%C2%BD%5E%7Bww%C3%B7%0B%00%C3%ABa%C3%B0%05F%C2%A8%C2%98%40(%C3%A8%1F9%C2%B0%C2%9F%C2%81*%C3%86%C2%96%C3%A5%C2%93C%0E%C2%AE%C2%90A9e%C2%98s%1Cg%3A%C3%83r%C2%BC%C2%8Be%C3%B9S%0C%C3%8B%3B%18%C2%86%C2%B7A%C2%B3P%C3%86%04z%C2%9E%C2%A3%C2%84-4_%C3%96%C2%88%22j%C2%AA%C2%84-%C2%A1%C2%AA%C3%A9%C2%B8%C2%AAJ%C2%BB%C2%AA%22E%14E%C3%9AQ%C3%A4%C3%B4%C2%86%2C%C2%A3N%C3%8D7%C2%B7%20T%15%00%C3%9D%C2%B0%C3%98%C3%9C%0D%C2%BC%C3%99%7D%C2%96%C3%A5%3C%C2%95%2C%C3%AB%C2%B6S%C3%96ma%C2%A8%C2%A7%C2%8C2n%C2%9ER7%10Y%0B%C3%8DW%08IH%C2%9A%C2%B6%C2%9D%C3%94%C3%94-QUw%C3%A2%C3%B0%C2%8C)%C3%8ANH%C2%91%C2%B7%C2%BEH%C2%A9%C3%ADi1%C2%B1%C2%BD%C2%9C%C2%96R%C3%B9%C3%A62%C2%A4%04%C3%85%C2%802%C2%A0%0C(%03%C2%AA%C3%94%C2%A1r%C3%BE%C3%A8%C2%82%20%C3%98%C3%ABAfgg%3B%C3%97%C3%92%C3%A9%C3%86%C2%BD%C3%9A%C2%9A%C2%91%C2%88%C3%95%C3%A6%C3%94T%C2%ADr_%C3%93%C2%9CVx2%C3%89%03%C3%87%C3%80%C3%A2%C2%82%C3%90b.%C3%A3%C2%9F%C3%967%C3%A5%5DTJI%C2%A4%3F%C2%B0%60%C2%AD%C3%A5L%C2%A7%C3%BB%C2%9A.%1D%C2%88%C2%94%C2%AA%09%C2%862qJ%C3%8B%C2%A3%0Cu%2Cm%7C%C3%B7%C2%AE%C3%ACE%C3%BBm6%C3%9BPkk%C3%AB%12J(%14%C2%8A%C3%A7%C2%85B%C2%A0Phs%C2%A8%C2%B9%C2%B993%C2%9EZ_%7F%C3%9E%C3%99y%C2%97l%C3%B1%C3%BCog%C2%92D%26''H%C3%B5%C3%85%0B%C3%A4%2B%C2%8C%7B%13%C2%BB%C2%A4%C2%BD%C2%BD%3D%17H%C2%B7%C2%B9~%C3%BB%16%C2%85%C2%8F%C2%ABX%C2%8E%C3%87*%C2%8E%C3%9AD%22%11%C3%B2%C3%96%C3%BF%C2%8E%C3%9C%C2%BB%7F%C2%9F%C2%80%C3%BE%C2%99%C3%AE%C3%B71%40%C3%B9%C3%B3B%C2%81%C2%91%C2%80%C3%8F%600%C2%98%19%C3%97%C3%95%C3%95%C2%91%C2%B9%C2%B9%C2%B9%C2%ACc%C3%AC%C3%A3%C2%A2%3E%C2%9F%2F%C2%AB%17%C2%84*X%C2%B4!%C2%BB%06%C3%9A%C3%98%C3%ADv266F%C2%86%C2%87%C2%87Iooo%C2%8E%C3%8D%C3%8C%C3%8C4%C3%AEH%C2%8E%1Ej%C2%A9%C3%82%C3%9B%07%C3%8E%01x%C2%93tuue%C3%86.%C2%97%C2%8B%C2%B4%C2%B5%C2%B5e%C3%B5%C3%98%C2%8FD%C3%82Y%3D%3A%3A%0Ath%C2%83%C2%91B%1B%C3%B8%C3%88c6%1D%1D7s%C3%B4%C2%87%1F%0C%C3%B5T~(%C3%9C%5B%0C%25%C3%A6%14Kh%C3%A3%C2%83%C3%8BWFj%16%03N'%C3%A4%C2%92C%C3%8F%C2%A9%3BU%C3%95%C3%8E%C2%81%C3%8F%0B%C3%A7%C3%B5%C2%9Cb%C2%88%C3%AF%C3%A3%C2%B1%C2%9Cz%C3%A4%C2%A9!%C3%BD%C2%AF%5Ek%C3%978%C3%93~%C2%9F%C2%BDr%5D%7C%C3%BF)%069%15%C2%85%C2%9C%C2%8AAN%C3%85%C3%B6%3C%C2%82%C3%B4r%7C%C2%BC%C3%9F%0A9%C2%A5%C2%BB%5D*%18)L6%7Do%C3%BD%C2%B5%26%C2%93%C2%B9b%C3%AD%C2%9B%C3%9B%C3%B5%C2%A7tIB%C3%A9%C2%A2%40%C3%A9%C3%82M%0B%C3%9EP%C2%A6t%C2%89%C3%AE%16%2C%5D%C2%A6%04%C3%AFO(%5D%C3%82%C3%89%1F%C3%A1%3D(%5D%C3%82%C2%87%C2%A5%0B%03%C2%A5K%3D%C2%94.A%13%3F%C2%B1%C2%9CH%C2%A40Z%C3%86%7F%C3%8A%C2%802%C2%A0%0C(%03%C3%AA%C2%A4K%C2%97%C2%A3%C2%B2)%C3%8B%C3%A97p%60%C2%9CO%25cpB%5E9%C3%A9%132%C2%AE%C3%BF%C3%97P%07p%C2%A4%0E%C3%80%096P%C3%A0%14%C3%BB%C3%8F%23%C2%85%C3%B7C%C2%A5%C2%B0m%3A%C2%87%C2%98%C3%89)%C2%BC%C2%B0%C3%82%C3%BB%C2%A1b%02%C2%A1%7F%C3%A4%C3%80~I%C3%9E%C3%A4Q%7C%C2%A9%C2%83%3D%C2%81%C3%96%5C%C2%A4%40%C3%ADB%C2%9B'%C3%BA%C2%9D%C3%A7%2F%01%06%00%C2%97%1B%C3%92%C3%B3%C2%B4%C3%A2%C2%8E%15%00%00%00%00IEND%C2%AEB%60%C2%82";
var image3 = group6.add("image", undefined, File.decode(image3_imgString), {name: "image3"});

var FadeInOutButton = group6.add("button", undefined, undefined, {name: "FadeInOutButton"});
    FadeInOutButton.text = "Fade In/Out";
    FadeInOutButton.preferredSize.width = 210;

// GROUP7
// ======
var group7 = ButtonGroup4.add("group", undefined, {name: "group7"});
    group7.orientation = "row";
    group7.alignChildren = ["left","center"];
    group7.spacing = 10;
    group7.margins = [50,0,0,0];

var statictext3 = group7.add("statictext", undefined, undefined, {name: "statictext3"});
    statictext3.text = "Frames";

var FadeInOutSlider = group7.add("slider", undefined, undefined, undefined, undefined, {name: "FadeInOutSlider"});
    FadeInOutSlider.minvalue = 0;
    FadeInOutSlider.maxvalue = 100;
    FadeInOutSlider.value = 50;
    FadeInOutSlider.preferredSize.width = 113;

var FadeInOutTextbox = group7.add('edittext {properties: {name: "FadeInOutTextbox"}}');
    FadeInOutTextbox.text = "10";
    FadeInOutTextbox.preferredSize.width = 30;

// BUTTONGROUP4
// ============
var divider3 = ButtonGroup4.add("panel", undefined, undefined, {name: "divider3"});
    divider3.alignment = "fill";

// BUTTONGROUP5
// ============
var ButtonGroup5 = tab1.add("group", undefined, {name: "ButtonGroup5"});
    ButtonGroup5.orientation = "column";
    ButtonGroup5.alignChildren = ["left","center"];
    ButtonGroup5.spacing = 0;
    ButtonGroup5.margins = [0,3,0,0];

// GROUP8
// ======
var group8 = ButtonGroup5.add("group", undefined, {name: "group8"});
    group8.orientation = "row";
    group8.alignChildren = ["left","center"];
    group8.spacing = 10;
    group8.margins = 0;

var image4_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03%C3%B1IDATx%C3%9A%C3%ACX%5DHSQ%1C%C3%BFo%C2%BBk%1F6%C2%B7r%C3%96%C2%9CI3m*X%19%C3%92C%C2%81%C2%B4%C2%9E%C2%82X_TD1RzX%C2%BDD%C3%90%C3%B2A%234%22%C3%B7%60%C3%AB%C2%A5%5E%C3%9CS%C3%81(%C2%A2D%C2%AA%11H%0F%C2%AD%C2%97Bb%C3%B4%C2%81%C2%90%C2%AE%C2%B4%C2%89%C2%B9e%C3%B91%5B%C3%AD%3A%C3%9BG%C3%B7%7F%C3%B3%C3%A26%C2%B7%C3%AE%C2%BDk8%C2%89%0E%1C%C3%8E%C2%B9%3B%3B%C3%BF%C3%BB%C2%BB%C2%BF%C3%BF%C3%A79%02%C2%A0Z%7B%7B%C2%BB%C2%8E%1A%C2%9A%20%C3%BF%C3%AD%26%C2%85%C3%85%2B%C2%98%07%C3%B4*%12%C2%89%C2%90%C2%A1P%C3%88%1D%0E%C2%87%7DK%C2%8DD%22%C2%91h%C3%A5ry%3DA%102%C3%AAq%2B%C2%81%0C!%20%C2%87%C3%83q%C3%9C%C3%AB%C3%B5%06%C3%B3E%C2%91N%C2%A7S%C2%98L%C2%A6%C3%9B%14%C2%B0%26!%C3%BE%C2%80%0C%C3%A5%12%C3%90%C3%9B%C2%B2%C3%8A%C2%AB%C2%8D%0A%C2%95%C2%96%C3%8F%1E%7C%3F%C3%A2%C3%809%0D*%C3%97*%2B%12%C2%89%0C%1DEk%1F%3E_%C2%B7%C3%81%C2%B2%5D*Wp%C3%9D%C3%87%C3%A0%20%C2%B8n%C3%80%2F%3F%C2%BAR%C2%B9S%26%14r~%C3%89zB%7C%C3%AC%C2%AEf%C2%9D%C2%B1%3F%1C%C2%B6%C3%AF%C3%B1%C2%8F%C3%9C%C3%A1%C2%BA%C2%8F%15%C3%94%C2%85U%C3%85z%C2%93Be)%14%0A%C3%AB%C2%B3aM%04%02%C3%85%16%C2%89%C3%94B%C2%A9%C2%B4~%C3%B3%C3%A8%C2%87%C3%B3%7F%0D%C3%AA%C2%BE%C2%A6l%2FE%7F%1B%C3%B3%3C%19%C2%8D%C2%BA%26cQ%0F%C2%9BP%C2%BDx%C2%85%C2%99%C2%99G!%1E%C3%8C%19S%C3%88%10%03%08%C3%81%C3%98%02%13%C3%97n%05%03%C2%9CloLWE%C2%83%C3%B2G%23%C3%8E3_%C3%BD%C2%B6%17%C2%B3!%5EN%C2%94%11%14%C2%AA%C2%8C%01%C3%84%C2%95%C3%B6DF%C3%AF~%C2%9F%C2%B1_%C2%99%C3%BE%C3%AA%C3%89F%C3%A5D%26%C2%A3fl%08%19%C3%A2%2B%C2%94%C3%AD%23%C2%9E%C2%96%C2%96%C2%9BQ%C3%85%C2%9E%C2%9Fs%C3%B6%5Dc%1F%C3%AD%C2%A9%C3%AB%C3%82t%C2%9B%C3%90%C3%8B%C2%98%2F%C3%A6%C2%AA%C2%B2%5C%C2%B6%C2%B4%C2%A0%18%C2%B7%C3%A7b%C3%94K%06*%C3%9F%C3%AD%C3%9F%01%C2%85%C2%A9%C2%83-%7D%60H%C3%89%16T%C2%92%C3%B7%19%0C%06%C3%9A%C3%A3%C3%88%C3%B1)-%C2%90a%20%0B%15Z%C3%83FCR%24W%C3%BF%08%C2%81%C3%B5%C3%8B4%1D.Z%C3%96%C2%AC%C2%B2M%14%C3%88%17%09%3D%3D%C3%A2%C3%937%C3%84%05%C2%96%C2%83%2B%0B%C2%9D%C3%A7%2B%C3%8A%1E%C2%A5%C2%AE%C2%A7%C3%8A'I2%C3%98%C3%97%C3%97%C3%A7I%0BJ%C2%AF%C2%AF%C3%AA%C3%821%20%C3%B2%02%0Cy!%C2%A0-1%C3%AA%2BtFf%5D%1A%C2%89%40%C3%A3%C3%8B%C3%97%C2%A0%3Er%C2%88~n%C3%A9%7D%C3%92ukS%05%C3%8C%12%0Bb%C3%AA%7C%C2%9F%C2%A1!%C3%AE%07%C3%A5%C3%85V%10w%C3%B7%18%C2%9B%03%C3%93%C3%86%07%C2%B5%C3%95I%C2%A0R%C3%A5%C3%8F%C3%8D%C3%8D%C2%B9)P%C2%A7%C2%B2R%C3%9F%C3%AE%C2%81%0FP%C2%AAT%C2%82%C2%AA%C3%93Jw%C2%9C%C3%A3oLS%C2%91%C2%B3%C2%B0%C2%BF%7F%00%C3%A4%C2%87%0FB%C3%81%C3%89%13%C2%B0%C2%BA%C3%AB%06%0D%12%7BN%22z%C2%BA%C3%96%5B%5D%09%1A%C2%8A)Is%C3%8B%C3%AFt23%03%C2%BD%C3%9B%C3%AA%16%18%C2%90I%01Y%C3%99%7F%C2%BF%07%C3%8455%10%C3%AA%C3%AE%C2%81%C3%97Z%0D%C3%9D%C2%B3%06%C3%A5%C3%B1%0C%C3%92%14%1E%18%C2%9F%C3%9AK%0DF%C2%95%C3%8F%C3%AF%C3%B4D%C3%83I6a%C2%95%C2%8A%C3%80z%C2%AF%C2%9B%C2%B6)%2B%C3%9A%C3%94%C3%B0P%C2%92%404%C2%8C%C3%95%C2%82%C2%B8%C2%BE%C3%A1r%C2%87%05s_'%C3%9A%C2%94g0%C3%A9%3F%C2%A9%C3%B2%C3%91%C2%A62%C2%82r%C2%B9%5Ct%C3%A5%C3%97VZ%5E%0F%C3%A2%15%20%C3%BB%16%C3%B4%C2%B9%C3%9E%C2%BDu%2FJ%C2%B8R9%0D%C3%BE%C3%85%C3%88%C3%BB%C2%B4%C2%89%C3%96%05%C3%A0%C2%A6%C2%BC%C3%8FM%C3%A7%C2%BE%C3%91%C2%A1E%C3%ABl%C3%B2%C2%89l%5C%C2%96K%C3%96%C3%8F6%19%C3%BF%C2%8F%C3%A8%C3%8B%1ET%C2%91PDG%7B2%16%0B.%0BPX%C2%AB%C3%A1i%07%C3%A7T!%C3%B8%C2%8Cs%C2%9C%C2%9A%2F%C2%BC%C3%ACl%C2%B9%C2%8D%C2%AA%C2%BB%C3%8C%7C%C2%ABR%C2%8BJ%7D%0E%C3%87o%C2%B1%C2%98%3BS%C2%AD%C3%86%C3%9B%C3%BB0%11_%2F.%C2%B1%C2%94%C2%88%08%23_%C2%86%10%10%C3%83%C2%92%23%18%C2%B0%C3%A5%24%C2%A2%3F.Y%7F%C2%ACV%221%C3%A3%C2%B1)%C2%B1%C2%B4%C3%A5bC%0C%C2%98%C3%B9%C2%90r%C3%A9O!%C2%833(%3C%C2%8A'%0ANw%C2%9Cbk%C2%A82d%C2%88-%C2%86q%06%C2%85%C2%B6%C2%93%C2%8E)%2C%C3%BE%C3%99O7%11%C3%BF%C2%A3%1FA7%C3%97z%C2%9F%C2%97%C3%BA%C3%B0%40I%C3%99%C2%94%C3%93%C2%A6%C3%96%C2%98%C3%B1H%C2%9E%C3%A0%14%C2%B9%C2%8FSx%3F%C3%84'%C3%85%C3%AC%C3%B84lk%C2%9D%1C%C3%9F%C2%87%C2%A7%C2%9D%5C%C3%9FSQ%C2%83%C2%92%06%C2%85%17Vx%3F%C3%84G%00%C2%AA%C2%82o8%60%C2%BB%C2%9FB%1C8_%C2%967y%C2%82%C2%84%3B%C3%8F%C2%B3X%C3%8D%C3%A6)%C3%9D%05%C2%A8%C3%BE%C2%86%C2%B9%C3%B3%C3%BC%25%C3%80%00o%0F%C3%96C%C2%91D%3E%C2%B8%00%00%00%00IEND%C2%AEB%60%C2%82";
var image4 = group8.add("image", undefined, File.decode(image4_imgString), {name: "image4"});

var LoopKeyframesButton = group8.add("button", undefined, undefined, {name: "LoopKeyframesButton"});
    LoopKeyframesButton.text = "Loop Keyframes";
    LoopKeyframesButton.preferredSize.width = 210;

// GROUP9
// ======
var group9 = ButtonGroup5.add("group", undefined, {name: "group9"});
    group9.orientation = "row";
    group9.alignChildren = ["left","center"];
    group9.spacing = 10;
    group9.margins = [44,0,0,5];

var LoopKeyframesDropdown_array = ["Pingpong","Cycle","Offset","Continue"];
var LoopKeyframesDropdown = group9.add("dropdownlist", undefined, undefined, {name: "LoopKeyframesDropdown", items: LoopKeyframesDropdown_array});
    LoopKeyframesDropdown.selection = 0;
    LoopKeyframesDropdown.preferredSize.width = 208;

// BUTTONGROUP5
// ============
var divider4 = ButtonGroup5.add("panel", undefined, undefined, {name: "divider4"});
    divider4.alignment = "fill";

// BUTTONGROUP6
// ============
var ButtonGroup6 = tab1.add("group", undefined, {name: "ButtonGroup6"});
    ButtonGroup6.orientation = "column";
    ButtonGroup6.alignChildren = ["left","center"];
    ButtonGroup6.spacing = 0;
    ButtonGroup6.margins = [0,3,0,0];

// GROUP10
// =======
var group10 = ButtonGroup6.add("group", undefined, {name: "group10"});
    group10.orientation = "row";
    group10.alignChildren = ["left","center"];
    group10.spacing = 10;
    group10.margins = 0;

var image5_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03%C3%87IDATx%C3%9A%C3%ACXML%13A%14%C2%9E%C3%BEYh%5C%C3%B9%17Z~Z%C3%84%60%C2%A4%C3%86%C2%9FTH%C3%AA%059%C3%A8%C3%81%14o%C3%84%60H%2C%C2%97r%20%C3%86%60MH%C3%94D4%C3%91%C2%93%C3%AB%C3%85%13%7B%C3%82%C2%A4%C3%91%C2%90%1A!B%C3%A4%08%C3%86D%22%C2%B41%12%C3%80%C3%98%18%C2%ADQ%C3%98(%22%C3%A8B%C2%B1%C3%9A%1F%C3%A7%C2%AD%C2%9D%C2%B2!mw%C2%B7V%C3%8A%C2%81%C2%97%C2%B43%3Bo%C3%9F%C3%9Bo%C3%9E%7B3%C3%B3%C3%9E(%10%C2%A6%C2%9E%C2%9E%1E%13n%C3%AC(%C3%BB%C3%94%C2%87%C2%B1%C3%B8%151%40%2FC%C2%A1%C3%90Z%20%10%C3%B0%06%C2%83%C3%81%C3%B9%C3%8DF%C2%A2%C3%95j%0D%3A%C2%9D%C3%8E%C2%A2V%C2%ABs%C3%B1%C3%A3%115X%08%00%C2%B9%5C%C2%AE%C2%B3~%C2%BF%C2%9F%C3%8B%C2%96%C2%89L%26%13%C3%95%C3%96%C3%96v%1F%03%C2%B3%2Ba%00%2C%C2%94I%40S%C2%95%7Bo%C2%9F%C2%A3%C3%B2%0Drd%C3%A0%C3%BB%C2%80%03%C3%BA%3C%C2%A8L%C2%BB%C2%ACH%C2%A5%3A~%C2%AB%C2%A8%C3%B4%C3%B1%C3%B3%C2%8A%3DNk%C2%8E%C2%8E%C2%92*Gp%C2%A8%C2%A5%0A%C3%80%C3%8C%C3%8F%C3%AC%C3%8Ck%C3%8CU*%25%7F%C3%84%C2%A8%C3%96%C2%B4%C3%B6%C2%97U%C3%98%C2%A6%C2%83A%C3%A6%14%C3%BB%C3%A1%C2%81T9QPW%0AJj%C3%9B%C2%A8%7C%C3%A7.%C2%A5%C3%92%C2%92%C2%8E%C3%95THA%1D%C3%92%C3%A68%C2%B1K-%07%3F%C2%BE%C2%BD%C3%B4%C3%8F%C2%A0%1E%C2%96U6c%C3%B3_%23%C3%8F%C2%8B%C3%A1%C3%B0%C3%98b%24%C3%AC%13SZ%C2%AB%C3%99%C3%A1%20%C3%BD0%C2%8Ar%19%C2%B3%14X%C2%88%00%020%C3%B4%C3%B2%C3%97%3B%C3%B7%C2%B8eI%C2%B17g%C3%9A%C3%87%C2%83b%C3%83%C2%A1%C3%A1%C3%B3%0B%2C%3D%C3%BE3%20k%11%25%05%05.%23%C2%80%C2%A4%C2%9A%5Dh%C3%91%C3%BE%C2%95%C3%AF%C3%8C%C3%8D%C2%A5%05_%3A.W'%0Bj%12C%60!%C2%B9J%C3%85%261Z%5E%C3%AD%00%17%C3%BB~%C3%BFb%C2%9A%C3%A6%C3%9E3%1B%C3%B9%C3%8ADB%C2%B0%C3%8A%C3%88%C2%8C%C2%A5%C2%BA%2C%C2%93%C2%94%10%14Y%C3%B6R%C2%82z%C3%93%40e%C2%9B%C2%B6A%C2%A5%C2%B5%C3%BA%C3%ACv%C3%BB%C3%9F%5D%7B%C3%AA%C2%B5%01%7D%5BF%C2%A8t%C2%B7%C3%81~%C2%A2%C3%91%C2%92%C3%A2%10e%C3%87%C3%86%C3%86%C3%A6%C3%BF%2B(%C2%AB%C3%95%C3%9A%1B%C3%9B%C2%86%11z6%C2%8E%C2%90y%C2%BF%0D%C2%8F%C3%99R%C2%A4%1B%C3%8C%C3%80%C3%80%00%0F%C2%BA%C2%A0%C2%A0%C2%A0%23%1A%C2%8Dzfgg%C3%B9%25%5EWW%C3%A7P(%14G%C2%97%C2%96%C2%96x%C2%9D%C2%83%C2%83%C2%83%0C%C2%9Et%2F%C3%B0%C2%BF%C2%9C%5CWId%C3%8Cf3%23%C3%B9%C3%AC%13%23%C2%86a%C3%A8x%C3%9A%C3%98%C3%97%C3%97199%C3%89B%C2%BF%C2%BE%C2%BE%C3%9E%2B%C3%A4%C2%8F%C2%8C%C2%8C%C3%808%C3%8FoA(%C2%8E%C3%8A%C3%A3%C3%B1%C3%90%C3%93%C3%93%C3%93%3EY%07%C2%B2%18uww%C3%87%15%C2%B6%C2%B7%C2%B7%7B%05%C2%AC%C3%B9%C2%8D%7C%C3%ACj%C2%9E%C3%9FR%5E%1D%7F%C2%A9%C2%B0%C2%B0%C3%90%C2%80-%C2%BE%C2%82%C2%BB%C3%9E%C2%8C%C2%81%1A%1D%1Dm%C2%86%C2%B6%C2%A9%C2%A9ihff%C3%86111%C3%81%2Bohh%C2%B0%C2%80K%08%C3%9F%C3%ADv%7B%3B%3B%3Bm%3C%C3%BF%C3%AA%C2%8D%C2%B8%3CEQz%C3%9C%24%C2%B7%14%C3%89%C3%BC%C3%90%C3%AA*d%C2%8Dz%C3%9C%C2%B2x%2Ci%20s%1C%C3%87VUU%C3%95%C2%92g%C2%83%C3%81%60%C3%81%C2%B3fI%1FZ%C3%827%1A%C2%8Do%C2%84%7CB%1A%C2%8D%C2%86J%19%C3%A8%5D%5D%5D%1D%C3%A4lB%C2%90~%C2%BC%C3%B0%0Cu%3Dr3%C2%A9%2CE%C3%93%C3%B1%C2%90%C3%A2%C2%83%5D%C3%80%1A%C2%82%C2%BF%C2%9A%C2%9A%1AZ%C3%A0%C3%AAu%C3%BD%C2%89e%C2%B67%C3%8F%C2%AD%0F%C2%AAH%C2%A9%C3%A2%C3%A3l-%12%C3%A1%C2%B6%04(%C3%88%C3%95%C2%A0%C3%9A%C2%81%3EN%04%C2%9FJN%C3%B2b%C2%89%17%23VP%C3%A0%C2%BC%C3%8B!7%2Bu%C3%A6%17_%C2%84%C3%B6G%24%C3%A2M%C2%96%C2%AB%C3%89%C3%9E%C2%A7%C2%A0%C2%8E%C2%BB%5B%C2%A2w%C3%AAUj%C2%9B%5C%0B%01%20b%25%17%C2%B7L%C2%A7%5Db%09%C3%A9%C2%89%C3%9E%C3%98z%40%C2%ABu%40%C3%99%24Lm%C2%A5%C3%84%10%01%03%C2%84%0B%C2%89%C3%AB%C2%A9%C3%B2w%C3%89%C2%A0%C2%A0%14%17*NTN%C2%89%11%C2%B8%0C%2C%24VPH%06%05%C2%B1%C2%93%C3%88R%C2%90%C3%BC%C2%8BW7!vh%C2%95%C3%B3J%C3%8D%C3%B7e%C2%B9%0F%0AJ%1CS%C3%83tq%C2%99%03Jr%C3%81%C2%A2%C3%88%C3%BC%3E%05%C3%B7CR%05%C2%A0%C2%B0%3C%C3%B6%C3%A9%1D%7Dy%C3%B1%C3%B3i%C2%A8v2%7DO%C2%85%C2%9B%3C%1E%14%5CX%C3%81%C3%BD%C2%90%1C%05%C3%A0%0A%C2%B9%C3%9B%C2%81%C3%98%C3%BD%14%C3%A0%C2%80%C3%BE%C2%96%C2%BC%C3%89S%C3%80%60%0C%C3%98%05%C3%BC%3B%C2%9C%C2%A5%C3%A3%0E%17%04%C3%A8%15%C2%8A%C3%9Dy%C3%BE%11%60%00%C3%BF%2C%C2%B3%0ANQ%C3%8E%04%00%00%00%00IEND%C2%AEB%60%C2%82";
var image5 = group10.add("image", undefined, File.decode(image5_imgString), {name: "image5"});

var LoopCompositionButton = group10.add("button", undefined, undefined, {name: "LoopCompositionButton"});
    LoopCompositionButton.text = "Loop Composition";
    LoopCompositionButton.preferredSize.width = 210;

// BUTTONGROUP6
// ============
var divider5 = ButtonGroup6.add("panel", undefined, undefined, {name: "divider5"});
    divider5.alignment = "fill";

// BUTTONGROUP7
// ============
var ButtonGroup7 = tab1.add("group", undefined, {name: "ButtonGroup7"});
    ButtonGroup7.orientation = "column";
    ButtonGroup7.alignChildren = ["left","center"];
    ButtonGroup7.spacing = 0;
    ButtonGroup7.margins = [0,3,0,0];

// GROUP11
// =======
var group11 = ButtonGroup7.add("group", undefined, {name: "group11"});
    group11.orientation = "row";
    group11.alignChildren = ["left","center"];
    group11.spacing = 10;
    group11.margins = 0;

var image6_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%02bIDATx%C3%9Abd%00%C2%82%C2%86%C2%86%06%05%20%C2%95%C3%800%C3%B0%60%01%C3%90-%0F%18%C2%A1%0E%3A%C3%BF%C3%A7%C3%8F%C2%9F%C3%AF%C3%9F%C2%BE%7D%3B%C3%BB%C3%B3%C3%A7%C3%8Fg%C3%B4v%09%3B%3B%C2%BB%14%17%17%C2%971%0B%0B%0B'%C2%90k%C3%88%02%0A!%C2%90%C2%83%C2%96%2CY%12%C3%B5%C3%A0%C3%81%C2%83%C3%8F%03%15D%0A%0A%0A%C2%BC111%C3%8B%C2%80%0EK%60%02%09%C2%80Bh%20%1D%04%02%20%C3%BBA%C3%AE%00%C2%B1A!%C3%85%C2%80%1Ce%09%09%09%C3%86%40W%1B%C3%93%C3%911g%17%2CXp%16%C3%99%1D%2CX%C2%82%C3%91XRR2%C2%8D%C2%8E%C2%814%0B%C2%88%C3%8F%22%0B01%0CB0(%1D%C2%85%11%7D%C3%80%22b%164HGCj%C3%94QTIS%7Bd%C2%94%C3%92%C3%94%C3%98%C3%98%C3%93%3Ehk%C3%AE%C2%A4%C2%87%03%5E%C2%9D%C2%BF%C3%B0%C3%90%C3%A5%C3%89%C2%BDYx%1Du%C3%8D%C3%92%C3%B44%C2%87%C2%AC%C3%9C%C2%9F%C3%AFR%C2%92%C3%AF%C3%A8%C3%A1%C2%A8%C3%AB%1C%C2%AC%0F%19V%C3%9F%C3%83%1F%7DZ%C3%87O%C2%9B%C2%8A%1F%3A%C3%AA%C3%BEYI%C3%A1%C2%9D%C3%B8%C3%81%23%C2%A6%C2%B4%C2%A4%15V%C2%AC%C2%89%04%C3%99G0M%C2%9DPU%3A%C3%BC%C3%B3%C3%8D%C2%9B%0F%2F_%C2%BE%C3%BC%C3%88t%C3%B9%C2%8A%08-i%C2%90%3D%20%C3%BB%C3%90%C3%9D%00j%C2%BA4%C2%BC~%C3%BDZr%C3%AA%C3%94%C2%A9%C2%B3%06%3A%C2%81ggg%C2%A7%C2%89%C2%8A%C2%8A%3E%1F-%12%C3%88.%12zE%C2%A5%C2%8C%C3%B5%C3%999%C2%8C_(%C3%88%C3%9D%C2%A5%C2%87%03%5E%C3%9E%C2%BC%C3%B5%C2%A1%C3%B8%C3%B5%C2%B3%C2%B3x%1D%C2%A5**%C2%AA(%C3%8F%C3%85%C3%AD%2C%C2%A0%C2%A8%C3%84K%0FG%C3%B1%C2%BD%7B%C3%BF%C2%90%C2%81%C2%90%C2%A3%3E%09%09%C2%BE%7Fif%C2%BA%C3%B3%C2%95%C2%8D%C3%A5%1DZ%3BH%C3%AC%C3%88q%15%C2%90%7D%04%C3%93%14%C3%90%C3%A5%C2%82r%1B%C2%B6d%C2%81%C3%98%26%25%C3%95%7D%C2%B4%C2%A4A%C3%B6%C2%80%C3%ACCw%03%C2%B3%03%10%00%C3%9B%C3%86%C2%BC%C2%A7O%C2%9F%06%07%C3%A1EQ%C3%A1%7B%C3%AC%C3%AF%3F%C2%9E%5C%C3%BB%C3%B2%C3%99%C2%8D%C3%AF%C3%B7%1F%1E%C2%A55%C3%9D%C3%8D%C3%8Dv%14X%24%C3%BD%01%C3%99mfff%C3%8C%C3%8D%C3%8D%C3%BDe%C2%B4%C2%9C%1A%5E%C3%A5%C3%94*)y_-6v%C2%9F7j%C2%AA%C2%A7%C3%A9%C3%92t%C2%B9r%C3%A5e%C3%98%C2%B3%C2%87%C2%9B%C3%B1%3A%C3%AA%C2%85%C2%B5%C3%85%13)Y%C2%B9%C2%93%C2%BF%C3%A9%C3%94ty%C3%81%C3%8F%C3%B3%C2%84a%C3%B5C%C3%BC%C3%91%C2%A7p%C3%B5%C2%862%C3%9F%C3%AD%C2%BB%C3%8A%C2%A0%C2%A6%05%C3%A7%C2%B3%C3%A7B%C2%B4%C2%A4AM%18%C2%90%7D%04%C3%93%C3%94%25q%C3%91%C2%AB%C2%B0%C2%A6%C2%85%C3%80%C2%BA%C2%8D%C3%A6%C2%B4%C2%A4A%C3%B6%C2%80%C3%AC%1Bm%C2%BAP%C2%94%C3%BB%40%C3%A3C%C2%83%C3%811Pw%7C%03%C2%87%14h%C3%80%0A4%3E4%C2%90%0E%02%C3%99%0Fr%07%2CM%0D%C2%BA%C2%91%3CF%C3%A8%C3%B8%01%C3%88a%C3%B9%40l0%40%01%C3%B5%01%C3%94%16%60%C2%80%C2%8Ey%02%04%18%00%C2%B4APO3%C2%90%04%C2%9A%00%00%00%00IEND%C2%AEB%60%C2%82";
var image6 = group11.add("image", undefined, File.decode(image6_imgString), {name: "image6"});

var DuplicateLayersButton = group11.add("button", undefined, undefined, {name: "DuplicateLayersButton"});
    DuplicateLayersButton.text = "Duplicate Layers";
    DuplicateLayersButton.preferredSize.width = 210;

// GROUP12
// =======
var group12 = ButtonGroup7.add("group", undefined, {name: "group12"});
    group12.orientation = "row";
    group12.alignChildren = ["left","center"];
    group12.spacing = 10;
    group12.margins = [50,0,0,0];

var statictext4 = group12.add("statictext", undefined, undefined, {name: "statictext4"});
    statictext4.text = "Num";
    statictext4.preferredSize.width = 30;

var DuplicateLayersSlider = group12.add("slider", undefined, undefined, undefined, undefined, {name: "DuplicateLayersSlider"});
    DuplicateLayersSlider.minvalue = 0;
    DuplicateLayersSlider.maxvalue = 100;
    DuplicateLayersSlider.value = 50;
    DuplicateLayersSlider.preferredSize.width = 130;

var DuplicateLayersTextbox = group12.add('edittext {properties: {name: "DuplicateLayersTextbox"}}');
    DuplicateLayersTextbox.text = "1";
    DuplicateLayersTextbox.preferredSize.width = 30;

// BUTTONGROUP7
// ============
var divider6 = ButtonGroup7.add("panel", undefined, undefined, {name: "divider6"});
    divider6.alignment = "fill";

// BUTTONGROUP1
// ============
var ButtonGroup1 = tab1.add("group", undefined, {name: "ButtonGroup1"});
    ButtonGroup1.orientation = "column";
    ButtonGroup1.alignChildren = ["left","center"];
    ButtonGroup1.spacing = 0;
    ButtonGroup1.margins = 0;

// GROUP13
// =======
var group13 = ButtonGroup1.add("group", undefined, {name: "group13"});
    group13.orientation = "row";
    group13.alignChildren = ["left","center"];
    group13.spacing = 10;
    group13.margins = 0;

var image7_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%05%20IDATx%C3%9A%C3%8CX%5DH%23W%14%C2%BEj4%C3%B5g%5C%C3%AD%C3%BA%13%C2%A3%C2%A5%C2%B6JH%C3%A3%C2%8B%25%C2%9A%C3%AE%C2%8B%10%C3%91%C3%AA%C2%83Q%C2%89%15A%11%C2%BB%C3%B4!%C2%8A.%C2%88%C3%86*.%C2%8A%09%2B%5D%C2%A4%1B%C2%A4%C3%90%0A%C3%89C%C2%B5%C2%8B%18%C2%90b%C3%91%C3%8D%C2%93k1%C3%A2K%C2%A9%09e%0Bn%C2%8BT%C2%88%C2%A0%C2%8D%C2%B8%C2%B6%C2%BA%3B%C3%86%C3%BFh%C3%8F%C2%99%C2%9DYR%3B%C2%89%C2%89%C2%8E%C3%9A%03%C3%83%C3%8C%C3%9C%3B3%C3%B9r%C3%AE%C3%BD%C2%BE%C3%B3%13F%C3%80%0C%06C%26%C2%9C%C3%AE%C2%92%C2%9B%C2%B7%11%C3%80%C3%A2%0Ac%01%C3%BDr%7C%7C%C2%BC%C2%B7%C2%BB%C2%BB%C3%AB%3C88%C3%B8%C3%B3%C2%BA%C2%91%C2%88%C3%85biLL%C2%8CR%24%12E%C3%83%C3%AD%C2%87%22%C3%B4%10%02%1A%1D%1D%C2%ADs%C2%B9%5C4%C3%9FK%C3%8D%C3%8D%C3%8D%C3%92%C2%96%C2%96%16%0D%C2%80%C2%A6%C2%87%C2%87%C2%87%C3%A7%C2%86%C2%86%C2%86%04%07%C2%9E%C2%99%C2%99I%C3%95%C3%97%C3%97%C2%8F%01%C2%B0%C2%BB%08%C2%8A%C2%A0%C2%87%C3%BC%01Z%5C%5C%C3%94)%14%0A%1Dw%C2%9F%C2%97%C2%97%C2%A7%07%C2%80%C2%96%C2%9C%C2%9C%1C%C2%8B%C2%90%C2%A0%C3%B0%C3%B7%11G%7C%7C%3Ca%40%C2%9D%5D%C2%B2%C2%AA%C2%AA*%19LR%25%25%25R%04t%C3%B4%C3%BCw%C3%A2%19%C3%BE%C2%8ED%7D%C2%A4%221%C3%95Z%C2%82cccc%C3%AE%C3%A9%C3%A9iA%3D%16%19%19%C3%89%C2%9CE%7C%C2%93%05%05%05z%5Cc%C2%99L%C3%86%C3%9C%C2%87%C3%87S%C3%8C%C3%99%C2%BB%C2%B6%C3%B6%C3%A6%19%C2%98%C3%AB%C2%A3iZ%C3%90%25%C3%9C%C3%99%C3%99!%C3%B0Mgx0%0FGd%C2%A43%C3%87u%19%C2%AF%C2%A7VWWm%14E9%01%C2%B5%14n5%7C%C3%8F%C3%80%C2%9C%C3%8D%C3%ADv%0B%C2%BD%C3%A1%C2%95~A%C2%99L%C2%A6'%C3%9C%C3%B5%C3%96%C3%96VZBB%C2%82R%0C%C3%BB%C2%89%C2%B3%C3%AD%C3%ADmgaa%C2%A1%C3%A1%C2%A2%C2%BF%3C00%20KII%C2%A1666%C3%A8%C2%AE%C2%AE%C2%AE%25n%1C%08%C2%A4KNN%C3%A6%07%C3%A5k%C2%89%C2%89%C2%89%C2%8D%C2%B3%C2%B3%C2%B3%C3%A5%C2%B9%C2%B9%C2%B9%C2%8C%C3%87~u8%C3%AC%C3%B9%C3%B9%C3%B9%C3%96%C2%8B%C2%80Q%C2%AB%C3%95%C2%94%C3%8Df3%C3%87%C3%86%C3%86%C3%8A%C2%B81%C2%9DN%C3%A7%C3%94j%C2%B5%1Dv%C2%BB%C2%9D%0E%C2%B8%7Cg%0D%C2%BC%C2%82%C2%9E%7Br%C3%99%C2%B5%19%1F%1F%C3%AFC%40%7F%C3%956%C2%BC%C3%BEq%C3%85%07%24%C2%A1%C2%B7%5B%09%1A%C2%A9%C3%8F%C3%88%C3%880%04%04588hF%C3%B6%09%C2%BD%C2%81qi%18%09%C3%BA%C3%A9g%C2%92d%7D%C3%8C%C2%80BKOO%C3%97%C2%98%C3%8Df%0D%C3%8B%3Ec8%C2%B9%01%C2%8B%C3%BD%C3%ACS%C2%B2%C3%B7%C3%B4G%C3%82y%2C(%C3%B6y%3C%C2%9E%C2%A5%C2%AB%00%C3%A3%C3%B5zea%C2%9E%5DF%C3%B4%C2%908%C3%BB%C3%933%C2%84%C2%8D(%C2%A8%C3%A6K%C2%87%C2%87%C2%87R%C2%BF%C2%A0zzzLW%01%0A%C3%88R%0E%C2%9B%C2%BD%2F%C3%BA%C3%A3%22%C2%82Q%02%C2%97%10mff%C3%86%C3%98%C3%96%C3%96f%C3%A7%C3%98w%C2%A9%C3%A5C6-%2F%2F%C3%ABOOO%1Dx%40%60%C2%9F%5DXX%C2%A8%0DD%C2%98%C2%A9%C2%A9%C2%A9%C2%8E%C2%97Y%C3%AF%C3%99%C2%8F%C2%AA*%C2%9C%7F%C2%8B%C2%A3%C3%AC%23%23%23%C2%8D%C2%95%C2%95%C2%95%C3%B6s%C2%97%2F%146%C3%81%3FS%C3%93_%7D%C3%8D%0DQy%C2%AD%C3%B7%C3%B4%20!%3B%2Cc%C3%BFc%2C%00%7B%C3%88%C2%8A%C3%9E%C3%9F%C3%9F%C2%AF%C3%B7%C3%95%12%3E%03AE6)%C2%B9%C3%BD%C3%B1%C3%B2%C3%81C%12%C2%A9%C2%903s*%C2%95%C2%AA%1D%18%C2%AC%09%C3%B5O%C3%AE%C3%AF%C3%AFK!9%C2%B0%C3%B0%C2%82B%40%C3%A7IBRR%C3%92%C2%BF%C3%AE%C2%8F%C2%9E%C3%BFFb%3E%C3%912%C3%97%C3%B0.u%11I999%C3%81%C2%8C%C3%A5%C3%A2%C3%AC%C3%9B%C3%9C%C3%9C%7C%13%C2%AB%C2%8EW%C3%97%C2%88%C3%A4%C3%99%02%C3%99((%02%C2%BA7%60hb%C3%98%14*(A%C3%98WVV%C3%B6%C3%A8%C2%B6%C3%B8-%C3%B5%C3%A9%2B%C2%9Al5%C2%B6%C2%90%C2%84%2F%1F2%C3%A3%C3%B3%C3%B3%C3%B3%0C%C2%9BB%05%15%12%C3%BB%26''%C3%95%C2%A0%C2%B6c%1C%C3%83%C2%90q%C3%88%C2%BC%C2%9A%C2%9A%1A%C2%A3k%C3%B3%C2%85%15%C2%BDs%1B%C3%A8%1DY%C2%A4%C2%A6%1D%0E%C2%87%C3%A9%2C%C2%9B%04I%5D%7C%0DrreEE%C3%85%C2%A3%13%C3%B0%C2%86%C3%A7%C3%9B%C3%87%C2%B8%C2%99%C2%A9%C3%B7%C3%AF%C2%A8j%C2%81yi%10%C3%A9%3B%C2%B2%C2%B2%C2%B2%C3%90%C2%AB%C2%82%C3%AA%C3%9A%C2%B9%C3%AC%2B..f%C3%96y%C3%AF%C3%BB%1FH%18d%C2%A0%5B%C2%9Fw%C2%93%C2%B7%C3%8D%C3%9F%C2%90d%C2%85%5Cm%C2%B5Z%C3%8D%C3%AB%C3%AB%C3%AB%C2%82%C2%81%09%C2%9A%7D%11%11%11l%C2%BCj%60T%C2%98%C3%8BD%C3%91%C3%A2%C3%A2%C3%A2%C2%94%C3%B0%C2%9C%60%C2%A0%02%C2%B2%C2%8F%C2%97%19%10%C3%99Q%24%C3%91K%5C%C3%8E%C2%8E%1F%C2%B8%C2%B6t%18%C2%98%C3%93%C3%88%5DK%24%125%C3%AE)%C2%8C%C3%AAh%C2%AF%1E%7CA%C3%A2%7B%C3%AF%C2%93%C3%83w%C3%9FY%C2%AA%C2%AE%C2%AE%C2%AE%13%12L%C3%90%C3%ACC%26!%C2%A3%C3%A2%C3%AEw%C3%92%C3%880%3C%3CR%C2%89S%C2%A3%C3%914%06z%0F%0BX%C3%88%C3%B5%0D%C2%A0Yf%3Cc%0A%2C%18%C3%BB%C3%90%C3%98%C3%B4%C3%97%C2%8AL%C2%84%C2%80%C3%AB%3E%C2%AFBF%00z%C2%BD%C3%9E%0C%C3%BB%C2%91%C3%B2%C2%82%C2%B0%C3%A2bwvvj%C3%A4ryG0r%C3%81%0B%0A%3EX%0E%C3%95L%C3%9A%C3%99%C3%B1%C2%95%C2%95%15%022%C2%80%0D%C2%91%C2%80%1Fmjj*%C3%A7%00%C2%BD(%C3%932%24%C2%A1Z%C3%AF%C2%91%C3%92%C3%92R%3D%C2%BC%2B%3B%C2%A7%C2%9A%C2%B1%C3%B1%C2%82%C2%82%7CYs%C2%99t%18Ko%C3%94%C2%B5m%C2%90%C2%8F%C2%A8%3B*%C3%9FFF%1A%14%C2%B1%3A%7FE%2C%C2%9B%0E%C3%9B%C2%AE%2C%1DF%C2%A6bL%C3%84%40%C2%BD%0B%1A%C3%87Y0%C2%8C%C3%A5%C3%B5%14%C3%84.%13%C3%B6%12.%0A%08%C3%98%C2%AA%C2%93%40%C2%95r%C2%AB%C2%B7%C2%9B%C3%B8%C3%A4ZL%C2%BD877%C3%A7%C2%B71%C2%92%C2%9A%C2%9AZ%1E%1D%1D%C3%BD%1A%14%C3%B6%C2%87%7C''%26%26.%C2%95%C2%A3%C2%BB%5C%C2%AE%0E%C2%AE%C2%BE%C3%83%C2%BD%C3%84z%C3%88m%C2%B1XL%C2%90i%C3%BA%C3%BDv%7B%7B%3B%C2%82%C2%BA%25b%C3%B3%1F%25%C3%B6%C2%87%C3%BC%C2%B5%C2%83B5%2C%2CA%C3%AD%C3%AB0%C2%90ggg%C3%8B%C2%A0%12v%1B%C2%8DF%C2%BBo%C3%81%C3%89%C3%97%C2%9Fb%C3%B7%C3%B1%1F%C3%BF%C3%8BN%5E%C2%98O%C3%8F%C2%B3%15%0B%C2%8E%1B%C3%AAun%C3%83%C3%B1%C2%8C%C3%ABy%C3%BE%23%C3%80%00%C2%A9%02c%C3%83%23%25G%1B%00%00%00%00IEND%C2%AEB%60%C2%82";
var image7 = group13.add("image", undefined, File.decode(image7_imgString), {name: "image7"});

var RandomizeLayerOrderButton = group13.add("button", undefined, undefined, {name: "RandomizeLayerOrderButton"});
    RandomizeLayerOrderButton.text = "Randomize Layer Order";
    RandomizeLayerOrderButton.preferredSize.width = 210;

// BUTTONGROUP1
// ============
var divider7 = ButtonGroup1.add("panel", undefined, undefined, {name: "divider7"});
    divider7.alignment = "fill";

// BUTTONGROUP2
// ============
var ButtonGroup2 = tab1.add("group", undefined, {name: "ButtonGroup2"});
    ButtonGroup2.orientation = "column";
    ButtonGroup2.alignChildren = ["left","center"];
    ButtonGroup2.spacing = 0;
    ButtonGroup2.margins = 0;

// GROUP14
// =======
var group14 = ButtonGroup2.add("group", undefined, {name: "group14"});
    group14.orientation = "row";
    group14.alignChildren = ["left","center"];
    group14.spacing = 10;
    group14.margins = 0;

var image8_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%04%C3%8BIDATx%C3%9A%C3%A4X_H%5BW%18%C2%BF%C3%B9g%C2%A2%C3%AE%3A%C2%9D%0AK%C3%98%40%7C%C2%B8%C2%B0%C3%84%07K%60%C3%A0S%C3%A2%5EZ%C2%A8A2*%C2%B6%C2%9D%C3%8C%C2%BE%C2%98%C2%82B%0B%C2%B6v%C3%82%1Er%C3%B3P%10%C2%AC%01%C2%8B%0A%C2%AD%0F.%C3%83%09%C2%99%03%C2%B1%C3%BA%5C%C2%B3'ap%C2%99%03%C3%93%C3%920%C3%84%C2%A7d%C2%A0c%C3%A2%C2%8D%C2%9A%18cv~w%C2%9E%C3%B4z%C2%BD%C2%A9%C3%B9g-%C3%AC%C2%83%C3%8B%C2%B9%C3%B7%3B%C3%9Fw%C2%BF%C3%9F%C3%BD%C3%8E%C3%B9%C3%BE%C2%9C%C2%ABa%08%C3%B1%3C%C3%9FD%C2%86%3B%C3%8C%C3%A5%C3%93%0F%04%C3%8B%C2%A6%C3%A6%04%C3%90%C3%AFGGG%07%C3%BB%C3%BB%C3%BBB2%C2%99%C2%8C%C2%BEo%24F%C2%A3%C3%91RUUe%C3%97%C3%AB%C3%B5%C2%95%C3%A4%C3%B1%C2%8A%1E%1E%02%C2%A0%C3%99%C3%99%C3%99%C3%9B%C2%9B%C2%9B%C2%9B%C3%A2e%C2%B9%C2%A8%C2%A9%C2%A9%C2%89%C3%AD%C3%A9%C3%A9%C2%99%23%C3%80%C3%AEh%C3%81%C2%80%C2%87J%05%C3%94%C3%9B%C3%9Bk%2FE%1F%C3%B6%C2%81%03%C3%B7%12(%C3%B9%C2%92%C3%99l6%C2%8B%C3%9B%C3%BD%C3%B5-%C2%A5%C2%92%C3%83%C3%A1%C2%B0LMM%C2%AD%C2%8C%C2%8F%C2%8F%C3%8F)%C3%A7FFF%C3%B8%C2%B6%C2%B6%C2%B6g%18%C2%95s%C2%90%C2%87%1E%C3%B4%C2%95sW%C2%AF%5Es%12%C3%8A~%0C%C3%85%C2%A1%C3%8F%C2%B5%C3%86%C2%B9%C2%BEH%C2%A7%C3%93%C2%B1*%C2%BC%C2%8F%C3%A4%C3%A3y%C3%B2%C2%94**%0C%C2%AAs%C3%98%C3%A8%C3%BC%C3%96%C3%96%C2%96yrr%C3%B2y%C2%B1%C2%AE%C3%A78%C2%8E%25%C2%9E%C3%A2VWW%23%C2%84%C2%8A%C3%9E%06%03%03%03%C2%9E%C3%86%C3%86%C3%86%C2%98%C2%BE%1C%C2%9B%14%40%C3%88%25%C2%94k%C3%93k%C2%99%0F%C2%90%C3%8A%06%C2%AA%C2%BF%C2%BF%C3%9Fra%C2%A0%10%25j%C2%91b%C2%B7%C3%9B%C3%99%C2%9F%C2%83A%C3%8F%C2%8F%C2%81%C3%80%C2%A9%C3%88%24%C3%91%C3%83%C3%86%C3%A3%C3%B19%C2%B2'_%60%C3%84%C2%B3%7C%1E%C3%B2%C3%90%C2%83~%C2%BE%C2%B6%C3%8E%C2%80%C3%AA%C3%AE%C3%AE%C3%BE%09%C2%97%C2%92%7F%C3%BF%C3%9E%C2%BD%C2%8E%C3%A6%C3%A6f%C2%8F%C3%95j%7D%C3%80%7B%C2%BD%C3%990%C3%B6z%C2%BD%C3%8E%C3%AA%C3%AAj%0E%C3%B7%18GGG%3B%C3%A8%1C%C3%A4%20%0F%3D%C3%A8%C3%A7k%C3%AB%0C%C2%A8T*%15%3B%3E%3E%C2%8E%2B%C3%B9%C3%9B%C3%9B%C3%9B1%C2%8C%C3%A9tZ%0C%C2%BFz%15%C2%93%25%C2%BDSei%7D%7D%3DB%C3%AF!%07y%C2%B9%C2%BE%C2%9C%60%07%C3%B6JJ%09%5D%5D%5D%C2%96%C2%8D%C2%8D%0D%C2%B1%22%C3%BC%C2%9A%C3%B9%C2%AA%C2%B2%C3%9A%C3%BC%C3%B8%C2%9F-%09%C3%80%C3%8A%C3%8A%C2%8A%C2%AB%C2%B5%C2%B5%C2%B5cmmm%C2%B9%C2%BD%C2%BD%7D%09%C2%BC%C3%AF%C3%AB%1A%C2%B9%C2%97%07%7B%C2%B1C%C3%9B%17%0C%C3%B1%14%3B%3F%3F%1F%C2%BD%C2%90%C2%94%40_%0C%C2%83%C3%BD%1F%7F2w%C3%85h%C3%B2%C3%A1%C2%B9%C3%BE%C3%9B%3E%C3%87_%1A%0DS%C2%9F%C3%898~%C3%B9%C3%B4sI%C2%B6%C3%8DT%C3%A5%25%C3%83%C3%AD%C3%87%C2%82%10%11%04%C2%A1%C2%A0%C3%9CUT%C2%9E%C2%82%C2%87%00%08%C2%86%C3%93LF%C3%BC-q%C3%A0%C2%AF%C3%97%C3%A9%C3%8D%7F%C2%A7%C2%8Fb_%C2%9A*%07u%C2%8C%C2%86%5DM%C3%AC%C3%BB%C2%A8'%2F%2C%25%20%C2%AA%C2%B0L%C2%8B%C2%8B%C2%8BN%C3%8A%03%20%00%00%10%C3%8EP%C3%A1%C2%A1%C2%80%C3%80%C2%A72%C2%90%C2%87%C2%9E2*%0B%C3%B2%14%C2%8A*j%C3%98%C3%B4%C3%B4%C2%B4O%5E2%16%16%16%C2%9E%C3%94%C3%96%C3%96JQ%17%0E%C2%87%C2%9F%C2%A7%C2%AFur%C3%B0%10%05%22%C3%95%C2%B9%13%40%C3%A0s%06%C2%A3%C2%83%C3%88%C2%99I%C3%B4y0%C2%87%3DWWWwW%5E%C2%9A%C3%BA%C3%BA%C3%BA%C2%BC%24%10%C3%A2%C3%83%C3%83%C3%83%7CNO%C2%A1%C3%BD%20%C2%86%3BX%C2%96u%C2%A2%C2%96%C3%89%C3%A7(%20%C2%90%C3%85b%C2%B1%1B4%1A%16KF%01e%0B0%C3%B3%1F%1F%C3%B3%C2%90S%C3%93%C2%97%C3%B6%1Cy%3F%C3%AC%C3%80%C2%9E%C2%B2%C3%AD9%05*%10%08%08%3B%3B%3B%C3%8B%C2%A2(%C2%86P%5C%C3%A5s%C2%84%C2%9F%C2%ADm%C3%91hTHe2%22%C3%B6%C2%90%7C%C2%A9%C3%A8%C2%92%C2%82%C2%8Fy%C3%88%C2%A9%C3%A9%C2%83%C3%B0~%C3%98%C2%81%3D%C3%98%7D%C3%A7%C3%B2)%5DI%C3%89%C3%ADv%3FD%C2%A2%C3%9C%C3%9D%C3%9D%15%3B%3B%3BC%24%C3%8A%5C%C3%B2%3D%24%1F%C3%81%C3%87%12%C3%9E%C2%B0%C3%99%C2%96%C3%88%C2%9E%C2%8A%C3%94%C3%94%C3%94%C2%B0%3E%C2%9F%2F%C2%A4%2C%C3%A2CCC%0FK%C2%8A%C2%BEP(%24%C2%92kI%C2%B9T%C2%B9%C2%A2%C2%8F%C3%8A%C3%A0%03%0A%C2%8D%C2%BE%C2%A2R%02%C3%B2%14%C3%92%01%C3%82%5E%C3%9A%C2%B4dSK%7BL%C2%AB%C2%93%00%C3%92%3CE%C3%A4%C3%9E%14%C2%93%16%0A%02E3%C3%BA%C3%8B%C3%B0%C3%AB%C2%98%C2%94%18%C3%9Fft%C3%A6%24%C2%A3%C3%BFz%C3%A3mF%7F%C2%83%C2%8C%C2%8EB%C2%9CoF%C3%8F%C2%99%C2%A7%C3%90SOLL%2C)%C3%B9%C3%BE%C2%B11%C3%A7w%C2%8F%1E%C2%BD%C2%98%22%C3%9D%C3%80g%C2%AE%C3%AB%2C%05433c'9%C3%88%C2%8B%C3%A8%C3%82%C2%88g%C2%9A%60!%07y%C3%A8A_%C3%B9N%C3%98Q%C3%AB%C3%B9%C3%8F%C2%802%18%0Cf%C2%ADV%7B%C2%A6%C3%97nhh0%C3%93%C2%9E%C3%9Bf%C2%B5%C2%9A)%C2%BF%C2%A5%C2%A5%C2%85S%1C%C2%95%C2%B2%C2%AD%08%C3%A4h%C2%8FN%C3%B5O%19'v%60%C3%AF%C3%9C%C3%A5%0B%06%C2%83%C3%9F%C2%A8%C2%B9t%C3%BC%C3%A9%C3%93e%C3%B2%C3%85l%22%C2%91%10y%C2%9F%2F%1B%C3%82%24%C2%82%C2%96%09%C2%B9%C3%90%C2%B6%C3%AC%C3%AD%C3%ADE%C3%A4Q%069%C2%B2tc%26%C2%93%C2%89%C2%85~%C2%BE%C2%B6%C3%8Arp%C2%A0%C2%9D'9J%C2%95t%C2%BA%C2%A6%5DB%C3%99%C3%9A%C3%A1R%01%C3%BD%3F%0E%0E(%C2%AE%C2%A8_%18%2F%04%14%C2%8E%C3%AD7o%C3%9Ez%C2%90%C3%AB%C3%98%C2%AE%C2%96.P%C3%ADql%C3%87%C2%A8%16%C3%B6%C2%B9%C2%8E%C3%AD.B8%C2%BA%C3%A7%C3%A5%C2%A9w%C3%BD%0E%C2%A2%3D%C2%B7%C2%82%17%C2%97%C2%8F%C3%A7%C3%89S%3A%3CL%C2%89%C3%89dBT%C2%8D%3ERd%C3%AD~%C2%BF%C2%9F%2F%C3%B5%C2%AF%C2%8B%C2%B2%C3%9A%17J%C2%83%C2%83%C2%83%3C)%C3%9E%7FJ%C2%9E%C3%82%0F%2B%C3%BC%1F*%C3%A5%C2%85%C2%A5%02%C2%82%7D%C3%A0%C2%A0%C2%9E%C3%BA%C3%A0%C3%BE%C3%A4id%C3%BF%3C%C3%AF%C2%A3k%C2%BD%C2%A4%2C%C2%B0C%C2%AE%3F%C3%A8%3F%C3%8F%7F%05%18%00k.%C2%A4V%7C%0E%C2%97)%00%00%00%00IEND%C2%AEB%60%C2%82";
var image8 = group14.add("image", undefined, File.decode(image8_imgString), {name: "image8"});

var ProximityReOrderButton = group14.add("button", undefined, undefined, {name: "ProximityReOrderButton"});
    ProximityReOrderButton.text = "Proximity Re-Order";
    ProximityReOrderButton.preferredSize.width = 210;

// GROUP15
// =======
var group15 = ButtonGroup2.add("group", undefined, {name: "group15"});
    group15.orientation = "row";
    group15.alignChildren = ["left","center"];
    group15.spacing = 10;
    group15.margins = [43,0,0,0];

var ProximityReOrderTargetButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%14%00%00%00%14%08%06%00%00%00%C2%8D%C2%89%1D%0D%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%01%C2%80IDATx%C3%9Ab%60%C2%A02%60%04%11%C3%B5%C3%B5%C3%B5%C3%BD%40%C2%AA%C2%80B%C2%B3%26466%162%02%0DK%00r%C3%A6%3F%7B%C3%B6%C2%AC%C3%B7%C3%95%C2%ABW%C2%B7%C3%881ILLLMJJ%C2%AA%18%C3%88Ld%01%12%0A%3F~%C3%BC8%3B%7B%C3%B6%C3%AC%C3%A5%C2%B84%C3%B4%C2%8BH%18%C2%83%C3%A8%C3%827%2F%C3%8E%C3%A2Pr%C2%B6%C2%BC%C2%BC%C3%9C%C2%81%C2%83%C2%83C%C2%81%C2%85%18%17%18%C2%B0s%1A%C3%834%12R%C3%8BD%C3%ADH!h%60%C2%B5%C2%A0%C2%A8%C2%9A%043%C2%8B1%08%C2%83%C3%98%14%19xFV%C2%B9!%C2%9D_p%26%0B%23%03%2F%08%C2%83%C3%98%201%C2%B2%0C%C3%9C%2F%C2%AD%C2%98%C3%86%C3%8F%C3%84%C2%A4%16%C3%BE%C3%A2%C2%89%C3%9F%C2%93%3F%7F%0E%C2%800%C2%88%0D%12%03%C3%89%C2%91l%C2%A0%02%0B%C2%AB%C3%AF%C2%96%C2%AF%C2%9F%7B%C2%8F%C3%BF%C3%B8%C3%B6%19%26%06b%C2%83%C3%84%40r%C2%B8%C3%B4%C2%A1%C3%84%C3%B2S%05%C3%B53%C3%88%C3%BC0%1E%C3%BE%C2%99%40%C2%8C%2C%C2%9F%C2%86M%C2%AD%C3%B4%C2%83%C2%9B%26X%0DD%C2%96%C2%B8%2F%C2%AF%C2%B6y%C3%83%C3%97O%0D%C2%A0%C2%B4%07%C3%B3%C2%A2%C3%A3%C3%93%C3%BB%C2%B3%40i2%C2%80%C2%9B%C2%AFA%C3%B1%C3%A1-_%C2%92%C2%BC%C3%BC%C3%A0%C3%8F%C3%AF%C3%8D%3E%C3%9C%C2%BC%C3%85%C2%96%1C%5C%C2%BC01%10%1B%24%06%C2%92%23%C3%8A%C3%8B%C3%88%00%C3%A4%1A%60%C2%8CJ%C2%AD%C2%94%C2%90%C3%99%C3%B4%C3%B3%C3%BF%C3%BF%C3%A7%201%20%3B%C3%B2%C3%95%C3%9F%C2%BF%07Ard%25%1B%C2%93%C3%87w%1Bf~%7C%C2%9F%C3%BE%C3%A7%3F%C3%83g%10%06%C2%B1Ab%C3%B8%C3%B4%10%C3%8Cz%C2%AD%C3%AF_%C3%9Fr%C3%A1%C3%A29%0Bc%C3%93%3D%C3%AB%11U8%5C%C3%B8%C3%B9%C3%BD%2C)%06%3E%00%16%3B%C3%86%C2%A9%C2%A9%C2%A9%C2%91%C2%B8%C3%8A%C3%83%03P%C3%9A%C2%9F%C2%81%C3%81%18Wy%082%03%C3%88%C2%9CB%C3%B5%12%1B%20%C3%80%00v%C3%AE%C2%A2%7BRe)%C3%A4%00%00%00%00IEND%C2%AEB%60%C2%82";
var ProximityReOrderTargetButton = group15.add("iconbutton", undefined, File.decode(ProximityReOrderTargetButton_imgString), {name: "ProximityReOrderTargetButton", style: "toolbutton"});
    ProximityReOrderTargetButton.text = "Create Target Point";

// BUTTONGROUP2
// ============
var divider8 = ButtonGroup2.add("panel", undefined, undefined, {name: "divider8"});
    divider8.alignment = "fill";

// BUTTONGROUP8
// ============
var ButtonGroup8 = tab1.add("group", undefined, {name: "ButtonGroup8"});
    ButtonGroup8.orientation = "column";
    ButtonGroup8.alignChildren = ["left","center"];
    ButtonGroup8.spacing = 0;
    ButtonGroup8.margins = [0,3,0,0];

// GROUP16
// =======
var group16 = ButtonGroup8.add("group", undefined, {name: "group16"});
    group16.orientation = "row";
    group16.alignChildren = ["left","center"];
    group16.spacing = 10;
    group16.margins = 0;

var image9_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%01%C3%94IDATx%C3%9A%C3%AC%C2%98%C2%BFj%C3%82P%14%C3%86%C2%AF1%C3%B4V%C3%BB%07%2C%C3%9C%C2%82%C2%81%C3%92L%1D%C3%AC%60%C3%9B%C2%BC%C2%80CG%3B%C3%AAP%1C%C2%9C%C3%AC%C3%98%C2%A1%2F%C3%A0%0B%C3%B4%05%5C*E%3At%C2%8D%0F%C3%A0%C2%9A%C3%A1R%3A%C3%94%C2%A1CI%C2%A5Dh%C2%86%C2%96%0A%C3%B9%C2%87C%C3%AF%C2%91%0C%C2%A2%10-%C2%94%C2%93%08%1E%08%C2%89%17%C3%A1%C3%BE%C3%B8%C2%BE%C3%A3w%C3%8DI%11Q%C3%8DfS%15%C2%B7%3A%C2%89%C2%BF%C3%9A%C2%82%C3%85L%C2%85%40O%C3%A3%C3%B1%C3%98u%1C%C2%87%C3%BB%C2%BEoa%C2%93PJ%C2%95l6%C2%AB%C3%89%C2%B2%C2%9C%11%1FOeP%08%C2%80%3A%C2%9D%C3%8E%C2%A5i%C2%9A%C2%A3%C2%B8%24RUu%C2%A7V%C2%AB%3D%08%C2%B0%C2%BA%04%0B%C2%A0P%C2%9C%40P%C2%B0%3Fp%C3%803(E%C2%A6-%C2%BBe%C2%8AV%C2%A4%C2%9B%1A%16%C3%8C%C2%B3%C3%AF%C3%B1%1B%C3%9B%C3%A2%C3%93%1C%C3%B2%C3%AC%C2%97%00%C3%A8h%C2%836%10Ej%C2%89%C2%8BO%2F%C3%8CA%C3%9D%C3%BF%7Cu%C2%8B4%C3%83%C3%B1%C2%94r%C2%87%C2%B3ksP%C3%BC%40!%03%C3%86%C3%90dr%5Dw%C2%9B%18F4T%C2%A1p%5C%C3%8E%C3%A5rh%C3%B6%05A%C3%80%0D%C3%83%C2%B8%C2%8A%C2%84%C2%B2%C3%ADO%1E%C3%BA%C2%8CR%C2%9E%C2%B7%C2%84%7D%C2%BD%5E%C2%8F%C3%8F6%1Ev%C3%8DAU*%C3%95%06%C2%B6%7D%C3%AD%C3%B6%5D%C2%B4%7D%20g%10lq%3C%C3%BB%C2%BC%C3%97%C2%85J%C3%A9%C2%A2%C3%A0%C2%96(%C3%BB%1E%C2%95%C3%83%C2%8B%C3%82%06-c%01%C3%B4%03%C2%BF%5B%C2%B5%C3%9E%C3%B5H%C2%A8%3D)%C2%9D%C3%9F%C2%95%C3%92h%C3%87%C2%8C%C3%98%C2%8F%2FT*%C2%91%C2%89%3E8%2B%C3%A6%5D%C2%B6%C2%AF%C3%A15%C2%BA%C2%80%C3%92u%2B%12%C2%8A%09%20%C3%9CH%C2%98%C3%BC%C3%92%C3%B5%C3%95Kt%C3%9B%C2%B6%C2%87%C2%98%C2%89.%0E%C3%A4%C3%91B%C2%A8D%1E%C3%88%C3%ABD_'%C3%BA%7F'%C3%BA%C3%B9%C3%87%5B%0B3%12%C2%96%C2%B2%C2%AFT*i%0C9%C3%91%C3%83%3E%5E%C2%B1D%C3%AF%C3%B7_%C2%BA%C2%8C%C2%B1X%C3%83S%22%09%C2%AC%C3%B5%2B%C3%96%C2%9F%0Ed%C2%98%0F%25%C3%A1%15%2B%C3%A4p%26%3D%05%03%2B%C2%98%0F%C3%85%C3%99G%C2%B0%3Fp%C3%80s%22'y)X%0C%C3%81%C2%AE%C3%85u%12%C2%93P%C3%9F%C3%B0w%C2%9D%C2%843%C3%8F_%01%06%00%C3%96%C3%B1%0Bz%C3%A2%2Bk%C2%B4%00%00%00%00IEND%C2%AEB%60%C2%82";
var image9 = group16.add("image", undefined, File.decode(image9_imgString), {name: "image9"});

var ZebraSelectButton = group16.add("button", undefined, undefined, {name: "ZebraSelectButton"});
    ZebraSelectButton.text = "Zebra Deselect";
    ZebraSelectButton.preferredSize.width = 210;

// GROUP17
// =======
var group17 = ButtonGroup8.add("group", undefined, {name: "group17"});
    group17.orientation = "row";
    group17.alignChildren = ["left","center"];
    group17.spacing = 10;
    group17.margins = [50,0,0,0];

var statictext5 = group17.add("statictext", undefined, undefined, {name: "statictext5"});
    statictext5.text = "Layers to skip";

var ZebraSelectTextbox = group17.add('edittext {properties: {name: "ZebraSelectTextbox"}}');
    ZebraSelectTextbox.text = "1";
    ZebraSelectTextbox.preferredSize.width = 30;

// BUTTONGROUP8
// ============
var divider9 = ButtonGroup8.add("panel", undefined, undefined, {name: "divider9"});
    divider9.alignment = "fill";

// TAB2
// ====
var tab2 = tpanel1.add("tab", undefined, undefined, {name: "tab2"});
    tab2.text = "Canvas";
    tab2.orientation = "column";
    tab2.alignChildren = ["left","top"];
    tab2.spacing = 7;
    tab2.margins = 10;

// BUTTONGROUP3
// ============
var ButtonGroup3 = tab2.add("group", undefined, {name: "ButtonGroup3"});
    ButtonGroup3.orientation = "column";
    ButtonGroup3.alignChildren = ["left","center"];
    ButtonGroup3.spacing = 0;
    ButtonGroup3.margins = 0;

// GROUP18
// =======
var group18 = ButtonGroup3.add("group", undefined, {name: "group18"});
    group18.orientation = "row";
    group18.alignChildren = ["left","center"];
    group18.spacing = 10;
    group18.margins = 0;

var image10_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03%C2%A0IDATx%C3%9A%C3%8CXOL%C3%93P%18%C3%AFJa%C2%B89%C2%8DA%22u%23L%C2%8D%08%C3%B1%C2%A0f%C2%BB%60%22F%C3%A5%C2%82%C2%81%C2%9B%C2%9AL8%2C1l%26%1C%C2%8CY%C3%A4D%C3%82H%08%07L%C2%8F%24%C2%AE%C3%84d%07p11%C2%BB%40%C3%B4b4b%02%07%C2%B6%18N%C3%82%C3%BC7dsD%20%C3%91%15%26%C3%93%C2%B2%C3%B9%C2%BEe%5DJi%07%5D%5B%C3%A0K%C2%9A%C3%B6%C2%BD%C3%BEy%C2%BF%C3%B7%7D%C2%BF%C3%B7%C3%BB%C2%BE%3E%1D%C2%86%C3%8C%C3%AB%C3%B5Z%C3%91%C3%89%C2%89%C3%AD%C2%BF%C3%B9%11%C2%96%C2%A8.%0F%C3%A8%03%C3%8B%C2%B2%7FR%C2%A9T8%C2%9DN%C3%BF(%C3%A5k%C2%8D%0D%0D%C2%AE%C2%8Fsst)%C3%AF%C3%AA%C3%B5%C3%BA%C2%93%06%C2%83%C3%81F%10%C3%84!%C3%94%C2%BCD%C2%80%C2%87%00%C3%90%C3%A8%C3%A8%C3%A8%C3%9Dh4%C3%8A(%C2%98%25%C2%AD%C3%84EV%C2%AB%C3%95%C3%94%C3%99%C3%99%C3%B9%0C%01s%C3%A2%C3%90%01%1ER%08%08%C2%BB%C3%AFv%C3%9B%C2%94%C2%BC%0F%C3%A3%03%0E%C2%B8%06Oa%C2%A5%C2%86%C2%8CoW%C2%9B%C2%9B%7DO%7C%3E%7B%C2%B1g%C2%9CN%C2%A7%0Dyd%1BxD!%C2%9A%C2%8F%C2%83%C3%98K%16%03%20%C2%92%24%5D%3B%C2%85%5E%12%C2%94%C3%87%C3%A3i7%C2%99L%C2%A4%C3%80%C3%85a%C2%BF%C3%9F%1F%16%7B%C3%9E%C3%91%C3%91aW%0B%C2%BC%24(%C2%8B%C3%85%C3%92%06%2BBdFa)N%C2%A1%C3%B0%C2%85%C3%95%00%C2%85%C2%AB5%3B%C3%A0%C2%94%C3%A6%C2%9ER%C3%9B%5E%C3%94%C3%94%C2%B6%C2%9F%7F%C3%B5%C3%9A%C3%B5%C2%BC%C2%B5%C2%85%C3%9E3P%C3%858%05%C2%80%C2%9A*%0D%7D%C2%B3%C3%9F%17)%C2%B4%C3%92%02%25%C2%87o%7D%7D%3D%02%C2%BA%C3%81%3FZ%C2%A7C%0E%18%00%C3%AE%C2%A3ALo%C3%8D%C2%A7%0A%2B%C3%A9%C3%B1%C3%90P%C3%A1z%C3%8Ar%C3%9A%23%044%C2%BD%C2%91%C3%AA%C2%BF%C2%99X%08(%0A_oo%2F%25%C3%AC%0B%C3%95%C2%9E%C3%B1%C3%82%00%2F%C3%89%C2%BA%C3%83g%2B*%C3%9A%C3%99%2CV%10%5C%C2%8B%C3%99%C3%AC%C3%A2%C2%96v%1DQ%C3%AE%40%C3%8F%C2%9A%C3%BEf%C2%B3%0C%5C%03%C2%A0%5BK%C2%8B%C3%A3%C2%9Ap%C3%8A%C2%BE%C3%B8%C3%85%C2%8B%06%C3%83.%C3%A8%2Bs%C2%9EHf3%C2%85%C3%95%C3%86%C2%A91gd%19%C3%91%06g%C2%B9%C2%80d%C2%AF%3E%08%C3%99Q%1C%C2%AF%17%C2%BBw%C2%AF%C2%AB%C3%8B-%C3%96_UF%C2%90%C2%9AJ%02u%C2%BC%C3%86%05!%C3%9B%C3%84%C2%B2%C3%9B%C3%B2%24%C2%9FS%7C%C2%AB%2F%C2%AFpq%3C%C3%94%24%7C%C2%97c_)I%C2%B1%C3%A5q%C3%8A%1C%C2%9D%C2%B7%1F%08%C3%B1%14rJ%C2%B1xB%C2%81%06%C2%B3%C2%84T%C3%81)3%C3%A8%C2%8E%C2%B0%0D!%02%C2%8F%00%00%C3%A0%C2%90%C2%B0%C3%BDtd%C3%84%07%C2%A9)%16%C2%8F%C3%93%C2%8Fzzha%3B06%16%C2%82o%C2%BD%C2%9B%C2%9CtCJ%12%C2%B6%01%C3%87%C3%8A%C3%AAj%3FT%C2%9E%C3%9E%C3%A5%C3%A5erxxXQ%C2%91%06%00%C2%A4%C3%88%C2%BE%5B%C3%AB%C3%AE%C3%AEvUWW'T%0B%C2%9FH%C3%B2%C3%9E%C2%9B%C3%9C%07J%7D%0C%2F%C2%AB%3F%C2%82%C3%A39%00%C3%89L%26%C3%9C%C3%B8%C3%BDS%C3%8E%3B%10%22%C3%AE%C2%B9%C2%B8%C3%B5%5C%C2%88%C3%BF%C2%9E%5C%C2%AD%C2%92%C3%A5)%C3%8F%C3%8A%12M%C3%A80%C2%93%C3%98%3D%C3%A0%C2%8CX%C3%BFlz%C2%83%C3%92T%3C%C3%91%C2%8C%C2%99%C3%9F%C2%99LD%C2%8AS%C2%A2%C2%AB2%C2%9BY%C3%934%7C%C2%90%C3%BB%20%7D%C3%80%C3%AC!%C3%B7%15%C3%A3Tb%C2%93%C2%9D%C3%B8%C3%89%C2%B2%C3%B3%C2%90%2B%07o%C3%9F%C3%81%22F%C3%83%C2%96%C3%BF%00%C2%A9%0AV%16(%C3%A0%13%00%C3%A2%C3%B8%C2%81%06%C2%9B%18%C2%AC%3A%C3%A1%C3%A0%C3%AE%C3%B39%C2%B5%C3%80%C3%BE%0BpB%C2%8B%00%C2%ADU%C2%B5%C3%9C%C3%A8k%12%C3%BEu%C3%BA%C3%BDvE%C3%A1%C2%834!%C3%8C%C3%B6%10%C3%8Ak%C3%B1o%C2%B4%18%C2%A7%C3%B8%C3%8A%2F%C3%B4%C2%90*%C2%9C%C3%A2%C3%97C%C3%85%08%C3%8B%09%C2%A1%C3%AA%C2%92000%C3%A01%1A%C2%8D%5B%C2%AA%C2%80%C3%9A7%C3%AFm%C3%9333%C2%B2%C3%8B%0F%C3%95%40%01%20!a%C2%A7%C2%AE_%09%3F%1C%0F%C3%AE%08%08R%C2%85X%7F2%C2%99d%C3%A4%C3%A6E%C3%95jt%C2%A9%C3%9F%C2%AB%600%18A%C2%87%5B3%C2%9D*fjr%0A%C3%87%0E%C2%A0%11%C3%9C%C3%BEPNkb%C2%B1%09%C3%B4%C2%AB%C2%BE%25%0C%0C%C3%83%24v%C3%B3!)N%C3%89%C3%9D%C2%A7%C2%82%24%40pj%0C%C3%BBC%14E%C2%8D%C2%AB%C3%8D)9%C3%BBS%C3%B9E%C3%B6%C3%B9%40%C3%AE%C3%A4%C3%A9%C3%B2%C3%BBC%00%C3%AC%01%3A.%C3%AE%13%C2%8D~AA%C2%81%C3%A5%C3%B7%3C%C3%BF%0B0%00%C2%9C%C2%9F%C3%9A%C3%BF%C3%A3%C3%B9%C2%BC%C3%8F%00%00%00%00IEND%C2%AEB%60%C2%82";
var image10 = group18.add("image", undefined, File.decode(image10_imgString), {name: "image10"});

var CenterPositionsButton = group18.add("button", undefined, undefined, {name: "CenterPositionsButton"});
    CenterPositionsButton.text = "Center Positions";
    CenterPositionsButton.preferredSize.width = 210;

// GROUP19
// =======
var group19 = ButtonGroup3.add("group", undefined, {name: "group19"});
    group19.orientation = "row";
    group19.alignChildren = ["left","center"];
    group19.spacing = 10;
    group19.margins = [50,0,0,3];

var CenterPositionsXCheck = group19.add("checkbox", undefined, undefined, {name: "CenterPositionsXCheck"});
    CenterPositionsXCheck.text = "X";
    CenterPositionsXCheck.value = true;

var CenterPositionsYCheck = group19.add("checkbox", undefined, undefined, {name: "CenterPositionsYCheck"});
    CenterPositionsYCheck.text = "Y";
    CenterPositionsYCheck.value = true;

var CenterPositionsZCheck = group19.add("checkbox", undefined, undefined, {name: "CenterPositionsZCheck"});
    CenterPositionsZCheck.text = "Z";
    CenterPositionsZCheck.value = true;

// BUTTONGROUP3
// ============
var divider10 = ButtonGroup3.add("panel", undefined, undefined, {name: "divider10"});
    divider10.alignment = "fill";

// BUTTONGROUP4
// ============
var ButtonGroup4 = tab2.add("group", undefined, {name: "ButtonGroup4"});
    ButtonGroup4.orientation = "column";
    ButtonGroup4.alignChildren = ["left","center"];
    ButtonGroup4.spacing = 0;
    ButtonGroup4.margins = [0,0,0,0];

// GROUP20
// =======
var group20 = ButtonGroup4.add("group", undefined, {name: "group20"});
    group20.orientation = "row";
    group20.alignChildren = ["left","center"];
    group20.spacing = 10;
    group20.margins = 0;

var image11_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%04!IDATx%C3%9A%C3%AC%C2%98oH%13a%1C%C3%87%C3%AFn%C2%B7%C2%BFyj%C2%99%C3%A6%C2%AD%C2%99Vx%11%11%15'%C3%81%C3%ACE%C3%ABM%C2%AF%C3%B2%5D%08%C2%86%C3%94z%C3%A3%20%C2%88%C2%A8%C2%BD%09%13ZD%C3%AFZB%C2%BEro20%25%09%11%C2%95z%13%C2%B47%C2%B5(%C2%8F%0A%C2%8ArV%C2%8A%C2%A6%C3%93l%C2%A5%C2%9B%C2%BB%C3%ADl%7Fz~k7%C3%8E9%C3%9D%C2%B4%C3%9D%0C%C3%AA%C2%81%C3%A3v%C2%BF%1Dw%C2%9F%C3%BB%C3%BE%C3%BE%3C%C2%BF%C3%A7%C3%8114l6%5B%15%3A%C2%99%C2%B1%C2%8D%1F%1D%C2%88e%0CO%00%C2%BD%0A%C2%87%C3%83A%C2%9E%C3%A79A%10%C2%A6%C3%B2M%C2%A2V%C2%AB%C3%B5%3A%C2%9D%C2%8E%25IR%C2%8B.%0F%C2%91%C2%A0%10%00uvv%C2%9E%1A%1B%1B%C3%B3o%C2%94DUUUTccc%17%023%13%60%00%C2%856%12%08%06%C2%BC%1F8%C3%A07(%C2%85I%5D%C3%860%0CU%5B%5B%C3%8B%2CsvG%07'7%C2%98%C3%88A%C2%A6%C3%BE%01%40F%C2%A3%C2%B1%3D%0DTM%C2%BET%23%C2%B0%C2%BFp%C3%BC%C2%87%C3%8Av%2C%C2%8B)%C2%9F%C3%8F%C2%97%C3%8C%02q%14%C3%8E%C3%BB%C2%A8'%C3%9Bw6Im%C2%AF%C2%85%20w%C3%B1%C3%9Bt%C3%96%C3%81o%C2%B5Z%C3%AB%0C%06%C3%83%09%C2%A9-%10%08%C2%B8%5BZZ%C3%AC%19%C2%A1z%7B%7B%C3%9D%C3%A8%C2%B0Hm%C2%AD%5B%C3%8BY%C2%A6%C2%A0(%19%C3%BC%7C%2C%C3%AAn%C3%B6%C3%BA%C2%BA%C3%97%C3%B2%C3%B5%14E%C3%91P%20eq_%04%C2%8B%C3%B9O%C3%8FLZ%5C!%C3%9E%C2%9F7%C3%B7%C2%AD6%40!%1DN0m%C2%A5%C2%B4%C2%B5f%C3%A2%C2%93m%C2%B5%7B%C2%87*v%C3%9B6%C3%A1%04%3D%1D%09s%C2%8F%C3%B9%05%C2%A7%2C%C2%81%0E%40%09%C2%85%C2%AE%C3%91%0A%C3%B2%04%C2%BCt%C2%B5%C3%BB%C3%9B%C3%A6%C2%BC%C2%8EB%C2%82%60%19%C2%A5%C2%AA%C3%A9%5C%C3%91%C2%96%C2%AE%C2%BAg%2F%C2%9Br%C2%AAT%C3%8F%C2%82%C3%8F%C2%8D%C2%8E%C2%B8%C3%8BNN%C3%B3%03%0F%C3%8A%2B0%C2%A3Fw%15%C2%81a%2B)vP%C2%AD%C2%A1%17c1%C2%8F%0A%C3%87i%C2%B8%1E%C3%BF%C3%AEu%C2%B8%5C..5%C2%A9%C3%96%0D%C2%95%1A%3F'%C2%A7'V%04C6%0A%C3%9C%0Bj%C3%BA%C2%A2%C3%918%04%C2%80%C3%B5%0D%7F%18%C2%BC%3B%C3%B4%7CJ%C3%96%3A%05%60%C2%A2%2B%C2%9F%19vY%C3%81%C3%B6%C2%90%C2%AEl%C2%B8_n%C3%A8%2F!%14%2C%C3%BC%C2%B7w%7C%C3%84%C3%82%09A%07(v%C3%97%3F7%25K%C2%A0%C2%A7%03%03%C3%85%5E%09%C2%A1a%C2%B8%C2%9E%C2%89%C2%84%3D%C3%9A%C2%9FDw%C2%B3w%C2%A6%5BTW%C2%BCG%C2%B6%C3%ACK%1D%C3%A0%C2%AA%C2%81%C2%80%C2%9F%13U8%C3%BBu%12%C2%B2%C3%8C%C2%99%0E%3E%2F%C3%93%C3%8C%C2%9D%C2%B2%C3%AD%C2%A6%C2%AEm%C2%86%C2%AE%C2%96-%C2%A57E%C3%9B%C2%95%C3%8D%C2%A5%0CR%C2%A5N%C3%B6%3A%05%C3%95%C2%BC%C2%82T%C3%AA%C3%85%C2%AF%3DC%15%C3%AB%2Fo.%C2%BD%0A%C3%A9%C3%AE%C2%89%C2%84%07%C3%8F%C3%8Fz%C3%AC%C3%AFwT%C2%B7%C2%BF%5B%0C%0D%C3%AAI%25SI*%1B%C3%80%5DkUgMJ%1DTk%C3%99%C3%83%1A%C3%AD%25p%15%C3%8C%7F%C3%97K%C3%8A%C3%AEip%5C%C3%9F%C2%B30o%11%C2%B3%0E%00%C3%BD%C3%91%C2%A8%C2%BF%C3%B6%C3%8Bg%3B%C2%80BV%C3%BE%C2%89b%19%C2%95*W%C2%90%C2%AC%02%C3%83)%C3%88*8%C2%BB%7F.%3A%C2%8EM%C2%8E%3A%C2%92%13mq%C2%89I%12O%C3%B1%C3%B2%C2%80%C2%80%C2%B8%04%C3%98%C2%BA%14%C3%8B%C2%A8%14%C2%A8%00g%00%C2%824%C2%97%02%C3%85%1B~%C2%A5%C2%8A%C3%B5F%22%C3%8Et%C3%A5%02%C3%80%C3%84%C3%AE%02%C2%94%067%C2%AFI)%C2%93%C3%89%C2%A4G%C3%87%C2%92%C3%96%C2%A2%C3%84%C3%BB%C2%9D%C3%A2%C3%BB%1F%C3%85%C3%A7%3B%C2%B8%3E%C2%A0%C3%964%C2%A0%C3%93%C2%92%2F%2FS(%C2%8E%C2%BE%15%04%C3%87J%C3%A5%22Q%60%C3%B5E%04%C3%81%C2%88%C3%8F%C3%89%1A%0A-qh4%C2%96%C3%8EO4%C2%8DU%C2%B7%C3%9D%C2%AE%C2%81%C2%AF%C2%AC%2F(d%20%C2%BE%20%C3%AB%C3%B6%C2%A8%C3%94%C3%AC%C3%B0%C2%A2%C3%80%C3%8DE%23~P%C3%B0i%C2%88%C3%A7V%C2%ABc%00%C2%96%C3%B3%3A%05%C2%85%C3%90%C3%B5%C3%BB%C3%85%C3%B1%C2%97%C2%A3%17Q%C3%87u%05%C3%89RpD%C2%A3cQ9%C3%80n%C3%BC%C2%98u%2F%5B%C3%8F!%C3%B7%C3%8A%C3%9A%C2%BAH%15%18%C2%ADd%C2%9A%C3%84%C3%89%16%C2%B9%C3%95Z%C2%ADR%01%C2%90M%0A%06%19%08%C3%AD%C2%8B8%07F%C2%B5Z%0A%C2%AD%C3%88%C2%97u%0B%C3%88%C3%A6%C3%88IE%C3%AF%0B%C3%B8l%C3%B5%C2%A8%1B%C2%85%C2%A6%C3%AFE(x%2B%5D%C2%96%25lI%C2%BB%C3%99lf%C2%8D4%C2%9D.%C3%98%C3%93C%C2%A1%15%C2%AA%07%C3%85%C2%95%23c1mmM%3E%C3%B4%C3%8D%C2%A7Ql%C2%BC%C3%82%C3%A0%19%C3%B9%3A%C2%83av%7B%C3%AE%3BO%C2%A7%C3%939%C2%85%C2%8E%C2%8CP%C3%92%3E%7Bb%C3%BF%3E%0CG%C2%8Bj*%C3%88%C3%93%C3%BF%C3%9E%12K%C3%A6M%C2%8C%C2%ACB%C2%84%14%C3%B7%C2%87%C3%B2%01%C2%95)D%12%1C%3C)%C3%86%09%C3%AC%0Fe%C2%B3%1D%C2%84%C3%BAlK%3A%05r%C2%B1%3F%C2%95%C2%88%C3%97%C2%8F%7F%C3%A5N%1E.%C3%99%C3%B3%C2%BC%00%C2%9D%C3%8A%06%C3%85%C3%B6%1CT%18q%C3%8F%C3%B3%C2%97%00%03%00%C2%BC%26%0A%C3%AE%C2%8E%C3%9F%0D%C3%89%00%00%00%00IEND%C2%AEB%60%C2%82";
var image11 = group20.add("image", undefined, File.decode(image11_imgString), {name: "image11"});

var RandomizePositionsButton = group20.add("button", undefined, undefined, {name: "RandomizePositionsButton"});
    RandomizePositionsButton.text = "Randomize Positions";
    RandomizePositionsButton.preferredSize.width = 210;

// GROUP21
// =======
var group21 = ButtonGroup4.add("group", undefined, {name: "group21"});
    group21.orientation = "row";
    group21.alignChildren = ["left","center"];
    group21.spacing = 0;
    group21.margins = [43,0,0,0];

var GetCompSizeButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%14%00%00%00%14%08%06%00%00%00%C2%8D%C2%89%1D%0D%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%01%10IDATx%C3%9Ab%60%C2%A02%60%04%11%C3%B5%C3%B5%C3%B5%C3%BD%40%C2%AA%C2%80B%C2%B3%26466%162%02%0DK%00r%C3%A6%3F%7B%C3%B6%C2%AC%C3%B7%C3%95%C2%ABW%C2%B7%C3%881ILLLMJJ%C2%AA%18%C3%88Ld%01%12%0A%3F~%C3%BC8%3B%7B%C3%B6%C3%AC%C3%A5%C3%98%14%3FUP%3F%C2%83%C3%8C%C2%97~p%C3%93%04%C2%8B%C2%B2%C2%B3%C3%A5%C3%A5%C3%A5%0E%1C%1C%1C%0A%2C%C2%84l%07%19%10%C3%8F%2B%20%05b%2F%C3%BC%C3%BC%C3%A1%19!%C3%B5L%C3%84x)%C2%81O%C3%90%07%C2%84%C2%89Q%C3%8BB%C2%8C%C2%A2%05%C2%9F%C3%9Eo!6%3Ci%C3%A7%C3%82~%11%09c%10%5D%C3%B8%C3%A6%C3%85YR%5C%08%C3%93%C3%B7%02%C3%9D%40%03vNcX%C2%8Cas!4Rf%C2%A1%C3%8B%C3%81%C3%B4%C3%AD%C3%80%16%C2%86%12%C3%8C%2C%C3%86%C3%BB%C2%A5%15%C3%93%40%C3%B4%C2%8B%C2%BF%7F%C3%8E%C3%82h%05%16V_%C2%90%3CP%C2%8E%01%5D%0EFc%C2%8D%14%C2%90%C2%84%C3%A3%C3%93%C3%BB%18%C2%AE%00%19%04%028%C3%A4%C3%92%C2%B0%C2%86%C3%A1%C2%85%C2%9F%C3%9F%C3%8F%C2%92%13%C3%8BH%C3%BA%C2%8CQ%0C%C3%84%16%19%C3%84%C2%84!L_%C3%B9%C3%90K%C2%87%C3%94r!A%03%C2%91K%C2%9B6aq%5C%C2%A5%0D%C2%A2%C2%80%C2%A5vyH%C3%B5%12%1B%20%C3%80%00%3D%C2%88%C2%8C%C3%96%C2%8D%C2%AE%C2%B0%C2%98%00%00%00%00IEND%C2%AEB%60%C2%82";
var GetCompSizeButton = group21.add("iconbutton", undefined, File.decode(GetCompSizeButton_imgString), {name: "GetCompSizeButton", style: "toolbutton"});
    GetCompSizeButton.text = "Get Comp Size";

// GROUP22
// =======
var group22 = ButtonGroup4.add("group", undefined, {name: "group22"});
    group22.orientation = "row";
    group22.alignChildren = ["left","center"];
    group22.spacing = 10;
    group22.margins = [50,0,0,0];

var statictext6 = group22.add("statictext", undefined, undefined, {name: "statictext6"});
    statictext6.text = "X";

var RandomizePositionsXTextbox = group22.add('edittext {properties: {name: "RandomizePositionsXTextbox"}}');
    RandomizePositionsXTextbox.text = "0";
    RandomizePositionsXTextbox.preferredSize.width = 40;

var statictext7 = group22.add("statictext", undefined, undefined, {name: "statictext7"});
    statictext7.text = "Y";

var RandomizePositionsYTextbox = group22.add('edittext {properties: {name: "RandomizePositionsYTextbox"}}');
    RandomizePositionsYTextbox.text = "0";
    RandomizePositionsYTextbox.preferredSize.width = 40;

var statictext8 = group22.add("statictext", undefined, undefined, {name: "statictext8"});
    statictext8.text = "Z";

var RandomizePositionsZTextbox = group22.add('edittext {properties: {name: "RandomizePositionsZTextbox"}}');
    RandomizePositionsZTextbox.text = "0";
    RandomizePositionsZTextbox.preferredSize.width = 40;

// BUTTONGROUP4
// ============
var divider11 = ButtonGroup4.add("panel", undefined, undefined, {name: "divider11"});
    divider11.alignment = "fill";

// BUTTONGROUP5
// ============
var ButtonGroup5 = tab2.add("group", undefined, {name: "ButtonGroup5"});
    ButtonGroup5.orientation = "column";
    ButtonGroup5.alignChildren = ["left","center"];
    ButtonGroup5.spacing = 0;
    ButtonGroup5.margins = 0;

// GROUP23
// =======
var group23 = ButtonGroup5.add("group", undefined, {name: "group23"});
    group23.orientation = "row";
    group23.alignChildren = ["left","center"];
    group23.spacing = 10;
    group23.margins = 0;

var image12_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%02%C3%81IDATx%C3%9Abd%00%C2%82%C2%86%C2%86%06%05%20%C2%95%C3%800%C3%B0%60%01%C3%90-%0F%18%C2%A1%0E%3A%C3%BF%C3%A7%C3%8F%C2%9F%C3%AF%C3%9F%C2%BE%7D%3B%C3%BB%C3%B3%C3%A7%C3%8Fg%C3%B4v%09%3B%3B%C2%BB%14%17%17%C2%971%0B%0B%0B'%C2%90k%C3%88%02%0A!%C2%90%C2%83%C2%96%2CY%12%C3%B5%C3%A0%C3%81%C2%83%C3%8F%03%15D%0A%0A%0A%C2%BC111%C3%8B%C2%80%0EK%60%02%09%C2%80Bh%20%1D%04%02%20%C3%BBA%C3%AE%00%C2%B1%C3%81%C2%8E%1A%C2%88(%C3%83%06%60%C3%AE%60b%18%C2%84%60P%3A%C2%8A%05%C2%99%23%25%25%C3%85%C2%AB%06%04%C3%A8%C2%8An%01%C3%81%C2%B3g%C3%8F%3E%C3%93Z%1E%C2%AB%C2%A3%C3%94%C3%80%40%7D%26%16%C3%87%C2%A7%035%C2%9D%C2%A5%C2%B5%C3%BC%C2%A0%C2%8E%C2%BEQG%0DiG%C2%81%C3%AA%C2%BE%C2%86%C3%97%C2%AF_KN%C2%9D%3Au%C3%96%40%3B%26%3B%3B%3BMTT%C3%B49FH%5D%C2%92U%C3%A9%C2%89%C3%A7%15%C2%90%1AT%C3%91'%C3%8C%C3%8C%C3%AC%C3%90%26%2C%C2%BE%C3%A9%C2%98%C2%8CR%C2%B1%25%07%17%C3%AF%C2%80%3B%0A9%C2%84%C3%A4YX%23WJ%C3%88l%C3%9A%26)%1F9%C2%A0%C2%8E%C2%92aa%C3%A5A%C3%A6330%C3%B2*%C2%B2%C2%B29%C3%90%3B%C3%84P%1C%C3%95%C3%BA%C3%BE%C3%B5-%18%C3%BB%C3%97%C3%BF%C3%BF%C3%8FW%7D%C3%B9%C2%98%C2%AE%C3%B9%C3%A8v%C3%BA%C3%B1%1F%C3%9F%3E%0Fh%C2%9A%C3%BA%C3%8B%C3%B0%C3%BF%C3%B3%C3%85%C2%9F%3Fz%15%1F%C3%9E%C3%B2-%7C%C3%B3%C3%A2%2C%C2%BA%C3%BC%7Dy%C2%B5%C3%8D%C3%BD%22%12%C3%86tu%C2%94%C3%9C%C2%83%5B%C2%8E%5E%C3%8F%1F.%C3%87%C2%A5%C2%81%C2%8D%C2%91Q2%C2%8C%C2%87%7F%C3%A6u9%C3%95%C2%99%C2%B4%C3%8A%C2%A5(%15r%C2%B5%C2%A0%C2%A8Z%0C%C2%AF%4011%1A%C3%B9%C2%98%C2%98%C2%8CA%C2%B94%C2%9D_hy%C3%B1%C2%9B%17%C2%B3%C2%A8%19%C3%85(%C2%8Ez%C3%B2%C3%A7%C3%B7%C2%97%17%7F%C3%BF%C2%9C%C3%85%C3%AF%186cZ%C2%A7)%14G-%C3%BC%C3%BC%C3%A1%19%10%C3%A3-%C3%99%C2%9F*%C2%A8%C2%A7%C2%81%C3%A8O%C3%BF%C3%BE%C2%9D%C3%ADx%C3%BF%C2%BA%11%C2%A4%07Y%1E%C2%94S)%0D5%16R5%C2%80r%C3%A5%C2%86%C2%AF%C2%9F%1A%C2%B0e%02%10%00%C2%95mw%7F%C3%BF%5E%C3%AE%C3%B8%C3%B4%C3%BE%2C%C2%AA%25tB%00W%C2%AED.%C3%9B%C3%94X%C3%99%C3%92(%C3%89%C2%A5d'tB%00%C2%96K%3D%C2%B8x%C3%8F%26%C2%BDzZBJ%C2%94%C2%92%C2%9C%C3%90%09%C3%A7JDF%00%C2%95y%C3%B7%7F%C3%BF%3A%40j%1A%239%C2%A1%13%02%C2%B0%C2%8C%C3%B0%C3%B0%C3%8Fo%C2%ACE%05%C2%A8lC%C3%8F%1C4o%C3%A4%C2%BD%C3%BD%C3%BB%C3%B7%40%C3%95%C3%9B%C2%97~VO%C3%AE%C3%B5b%0B!P%C3%99vFV%C2%B9%01_%7D%C3%8ABmG%C3%A9%3D%C2%BESBH%C2%8D%243%C2%8B%0F0%C2%97%C3%9A_%C3%B9%C3%B9s%16%C2%B6%C3%9A%03%C3%85Q%C2%A0%C3%9C%02J%C2%9C%C3%B4%C2%A8tA%C2%B9T%C2%9F%C2%9D%C2%A3%18%C2%98K%C2%A3%1A%C3%9E%C2%BDJG%C2%8ER%14G%C2%AD%C3%BA%C3%B2%09%C3%94JH%C2%A7%C2%A5c%C2%90%3D%0D%2B%C3%B3%C3%90%C3%93%18%0Bl%7C%08D%C2%83%C3%92%00%10%C2%9F%C2%A5%C2%B1%C2%A3%C3%80%C2%B9%12%5B%C3%94A%C3%9D%C3%B1%0D%C2%9C%C3%90A%03V%C2%A0%C3%B1!zD%1B(W%C2%86%C2%BFx%C3%A2%C2%87%C3%AE%20%C2%90%C3%BD%20w%C3%80z3%0A%0C%C2%83l%24%C2%8F%11%24%08uX%3E%10%1B%0CP%07%C3%A6%03%10_d%C2%80%C2%8Ey%02%04%18%00%C3%AC0%C2%83!%C3%B7%C2%B0%24w%00%00%00%00IEND%C2%AEB%60%C2%82";
var image12 = group23.add("image", undefined, File.decode(image12_imgString), {name: "image12"});

var StaggerPositionsButton = group23.add("button", undefined, undefined, {name: "StaggerPositionsButton"});
    StaggerPositionsButton.text = "Stagger Positions";
    StaggerPositionsButton.preferredSize.width = 210;

// GROUP24
// =======
var group24 = ButtonGroup5.add("group", undefined, {name: "group24"});
    group24.orientation = "row";
    group24.alignChildren = ["left","center"];
    group24.spacing = 10;
    group24.margins = [50,0,0,0];

var StaggerPositionsXCheck = group24.add("checkbox", undefined, undefined, {name: "StaggerPositionsXCheck"});
    StaggerPositionsXCheck.text = "X";
    StaggerPositionsXCheck.value = true;
    StaggerPositionsXCheck.preferredSize.width = 28;

var StaggerPositionsXSlider = group24.add("slider", undefined, undefined, undefined, undefined, {name: "StaggerPositionsXSlider"});
    StaggerPositionsXSlider.minvalue = 0;
    StaggerPositionsXSlider.maxvalue = 100;
    StaggerPositionsXSlider.value = 50;
    StaggerPositionsXSlider.preferredSize.width = 120;

var StaggerPositionsXTextbox = group24.add('edittext {properties: {name: "StaggerPositionsXTextbox"}}');
    StaggerPositionsXTextbox.text = "250";
    StaggerPositionsXTextbox.preferredSize.width = 40;

// GROUP25
// =======
var group25 = ButtonGroup5.add("group", undefined, {name: "group25"});
    group25.orientation = "row";
    group25.alignChildren = ["left","center"];
    group25.spacing = 9;
    group25.margins = [50,0,0,0];

var StaggerPositionsYCheck = group25.add("checkbox", undefined, undefined, {name: "StaggerPositionsYCheck"});
    StaggerPositionsYCheck.text = "Y";
    StaggerPositionsYCheck.value = true;
    StaggerPositionsYCheck.preferredSize.width = 28;

var StaggerPositionsYSlider = group25.add("slider", undefined, undefined, undefined, undefined, {name: "StaggerPositionsYSlider"});
    StaggerPositionsYSlider.minvalue = 0;
    StaggerPositionsYSlider.maxvalue = 100;
    StaggerPositionsYSlider.value = 50;
    StaggerPositionsYSlider.preferredSize.width = 120;

var StaggerPositionsYTextbox = group25.add('edittext {properties: {name: "StaggerPositionsYTextbox"}}');
    StaggerPositionsYTextbox.text = "250";
    StaggerPositionsYTextbox.preferredSize.width = 40;

// GROUP26
// =======
var group26 = ButtonGroup5.add("group", undefined, {name: "group26"});
    group26.orientation = "row";
    group26.alignChildren = ["left","center"];
    group26.spacing = 10;
    group26.margins = [50,0,0,0];

var StaggerPositionsZCheck = group26.add("checkbox", undefined, undefined, {name: "StaggerPositionsZCheck"});
    StaggerPositionsZCheck.text = "Z";
    StaggerPositionsZCheck.preferredSize.width = 28;

var StaggerPositionsZSlider = group26.add("slider", undefined, undefined, undefined, undefined, {name: "StaggerPositionsZSlider"});
    StaggerPositionsZSlider.enabled = false;
    StaggerPositionsZSlider.minvalue = 0;
    StaggerPositionsZSlider.maxvalue = 100;
    StaggerPositionsZSlider.value = 50;
    StaggerPositionsZSlider.preferredSize.width = 120;

var StaggerPositionsZTextbox = group26.add('edittext {properties: {name: "StaggerPositionsZTextbox"}}');
    StaggerPositionsZTextbox.enabled = false;
    StaggerPositionsZTextbox.text = "500";
    StaggerPositionsZTextbox.preferredSize.width = 40;

// BUTTONGROUP5
// ============
var divider12 = ButtonGroup5.add("panel", undefined, undefined, {name: "divider12"});
    divider12.alignment = "fill";

// BUTTONGROUP9
// ============
var ButtonGroup9 = tab2.add("group", undefined, {name: "ButtonGroup9"});
    ButtonGroup9.orientation = "column";
    ButtonGroup9.alignChildren = ["left","center"];
    ButtonGroup9.spacing = 0;
    ButtonGroup9.margins = [0,3,0,0];

// GROUP27
// =======
var group27 = ButtonGroup9.add("group", undefined, {name: "group27"});
    group27.orientation = "row";
    group27.alignChildren = ["left","center"];
    group27.spacing = 10;
    group27.margins = 0;

var image13_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03%C2%B4IDATx%C3%9A%C3%8CXML%13A%14%C3%9En%17K%17%C2%B6%C2%88%C2%A1BA%C2%A4j%C3%A8YSbR%13%23%26%1E%C3%A5%60bBD%C2%A2%C3%A8a%7B%C3%A8%C3%81T%C2%8E%1E%2C%07%C2%8F%C3%98%13%C2%87r%C3%80j%00C%C3%A2%C2%AD%1CM%C3%80%C2%8BM%0C%1B%C3%B5Z%C3%94%14%11%0A%C2%96D%C2%B4Xhl%C2%8B%C3%B3%25%C3%9Dd%C2%BB%C3%AE%7F%C2%A18%09%C2%99%C2%BC%C3%97%C3%99%C2%B7o%C3%9F%C2%9B%C3%B9%C2%BE%C2%8F%C2%B1QdD%22%11%2F%C2%99F%C2%A8%C2%A3%1Fq%C2%92K%C3%9AVI%C3%A8%7D%C2%B1X%C3%9C%C3%8D%C3%A7%C3%B3B%C2%A1PX%C2%AFw%26%0E%C2%87%C2%A3%C2%93eY%3F%C3%830Nb%5E%60P!%244%3D%3D%3D%C2%94N%C2%A7sGU%22%C2%AF%C3%97%C3%8B%0D%0F%0F%C3%8F%C2%92%C3%84F%C2%90%14%C2%85%0AYM%C3%A8UG%C3%B7%C3%80%C3%85F%C3%A7C%3Be%C3%A3J%C3%94~%C3%AE%C3%9D%C3%9E%C3%AE%C3%93%C2%9B%1B%C2%AB%09%C2%B3q%C3%B0~%C3%A4%C3%A1r%C2%B9(%1A%0E%C2%AB-%C2%BB%C3%8B%1D%C3%AF%0C4%C2%B2%C2%8F%C2%91%10l%C3%8C%C2%B0%C3%A1%C2%B7%12O%C3%8C%C2%83%C2%AE%C2%A5%C3%A4%03M%C2%9C_%C3%89%3F%C3%98%C3%9Cr%C2%A5%C2%96%C2%B8%C2%8C%C3%9E%C2%82G%C2%ADn_%C2%9B%C3%9D%C3%8Em%C2%95J%C2%B9'%3F%C2%B2)%C3%A9o%C2%B9rY%C2%B1%C3%A5%C2%9B%C2%A5b%C3%86L%1CSI-u%C2%9F%C2%8Bx%C3%AC%C3%8Cu%C3%91%C2%BE%C3%91%C3%AC%C2%9A%C3%AF%5B%C3%BD%1C%11%C3%AD%7B%C3%9F%C3%97%16%C2%97%7BzS%C2%AC%C2%8D%C3%B6%C2%89%C2%BE%C3%BC~9%05%C2%BF%C2%998%C3%B2AkUH%1A%08%036%C3%BCR%C3%9F%C2%9D%C3%8D%C2%B5%C3%A0J%C3%B1%C3%8F%C3%8B_%C3%A5%C2%B2%C2%80%19%C2%B6%C2%958%C2%86%C2%92B%C2%A9%C2%95%C3%BC%C3%97%C3%98%C3%A6~%C2%A9%C2%9D%C3%9C%C3%8B%C3%A7.%7D%C3%BB2%3Ew%C3%BF%C2%B6%C2%80%19%C2%B6%C3%96z%C2%BD%C3%B8%C2%9AI%C2%A1%C3%B7J%C3%BE%0F%C2%85%5DA%C3%89%C3%AF%C3%B1xx%25%C3%BF%C3%AB%C3%BC%C3%8E%C2%A2%C2%99%C3%B8%C2%9AIa3fJ%C3%85y%C2%A9%0FvxkC1%C2%A9d2%194%13Gk%C2%B3kntlF%C3%92%C3%BBY%C2%B4%00_%C2%ACwj%C2%B4%C3%A2D%C3%9B%3A%12%C3%A7%1DN%C2%BF%C2%918%C2%BA%C2%90%C2%80%00F%C2%92%09%04%02%C2%B1x%3C%C3%9E%C2%A7%C3%B6%7B%C2%A5%C3%82%C2%82%C2%91%C2%8F%C2%A8%09%3C%C2%ABZ%C2%92%C3%89L%1ET%2CF%C2%89%3A%C2%80%C3%88%00%409%C3%9Eh%0D%C2%A26L%25%C3%B5%C3%ACdW%3FG%C3%93%5C%C3%A2wNx%C2%9E%C3%9B%5EWM%0A%C3%A4%0A%C3%AE%12m%00%23pG~%C3%8C%C2%95F%2C%16%5B%0A%06%C2%83%7D%C2%BAmnd%C2%B9%17%C3%AD%5D1%11p%C2%89%0D%C2%BA%1A%C2%93%C2%92xU%C3%BB%C3%80%C3%B6R%1B%0F%C2%8E%C2%B7u%C3%B0F%C2%BE%1C%0Cod%1D%C3%A2I%19%40%C3%A9%C2%BDU%C2%95%12%C3%99%5E%3AZi%C2%BB%C2%8F%C2%B4%C2%86%07%0E%C2%89%C3%87%1E%C2%9B%1A%7B%08-C%C2%85%C2%90P8%1C%0EF%C2%A3%C3%91%18%C3%84%1A*%C2%A6%C3%B6L%C3%AB%C3%94%C3%8C%3FH.%7F%2F%C2%94g%24%C2%9B%C3%8Dz%26%26%26%26%C2%BFz%7D%0B%C3%B2%05%C2%A0%0E%20%C2%B5%5E%05%C2%90%10%12%C3%93%5B%C3%B7%C3%B6%C3%94%C3%99%C3%91%1E%C2%A6%C3%A1%C2%96%C3%94%07%1Dv%3A%C2%9D%C2%BA%1A%0A%C2%85x%C2%B7%C3%9B%C2%9D%C2%A9j%1F%04ZUK%08%C2%B9%C2%8Enm%18%C3%9A%C3%80%C2%A8%C2%90%C2%91u%C2%88%C2%87%C2%B8Z%C3%AF%C2%ADj%1F6%1B9%7D%02t%12d%C2%89%C2%99%C3%93gd%C2%93%C2%8B%5C%C3%99%C2%BB%C2%B2%3C%C2%84%C3%93%C3%97ng%3Cs%3B%3F%C3%9Fh%C2%9E%3E%0C%2C%C2%90%2F2%08%09%C2%BC%19X%C3%90%C3%BA%C3%A0%03%03O5B%C2%B62t%C2%93%C2%82%C3%AEY%C3%A8%3A%C3%83%13%C3%AE%C3%92%C3%9C3j%C2%84%2C%C2%8F%C2%A3%C2%A5%C2%A3L%2BO_%C3%831%C3%AA%C2%B2%C2%B3IS1%1A%C2%8A%C3%93r%C2%82%3Ft%C3%A5)%25dE%C2%A8%20%15%C2%AE%C2%BB%C3%B2%C3%94%23d%C3%88%C2%95CW%C2%9Er%25%09.%03%20%0EN%C3%8D%C3%B81%C3%83%C2%AE%C2%BB%C3%B2%C2%94k%2B%C2%90%2B%10%C3%9AE%C3%93~%C3%8C%C2%B0%C3%AB%C2%A2%3C%C3%95%C3%BE_%03%00%C3%8A%C3%89%156%C3%BCR%1C%C3%92%C2%8BcIy%C2%AA%C3%BD%06DV%C3%B2C'%C2%99%C2%89s%C2%A0%C3%A0%09%C2%8AP%C3%B2C%C2%B8%C3%95%0C%C2%9E%C2%B8%1F%C2%B2%C3%B20%C3%A8%C2%88p%C3%99%18X%5Ed%7B%C3%98VhJ%C2%92G%0B%232%3C%C3%AE%C2%87%C2%AC%5C%07U%14c%C2%82%C2%AAq%C3%A0%C3%BD%15%C2%A5%C3%B1%C3%A9%C2%BF%C2%BC%C3%89%C2%B3I%C3%AE%3C%1F%00%C3%AB%C2%8E%C3%A8%22o%C2%9B%C3%BC%7D%14%C3%AF%3C%C3%BF%0A0%00%C3%83%C2%83H%25%C3%9E%C3%82%13%C3%8B%00%00%00%00IEND%C2%AEB%60%C2%82";
var image13 = group27.add("image", undefined, File.decode(image13_imgString), {name: "image13"});

var RadialPositionButton = group27.add("button", undefined, undefined, {name: "RadialPositionButton"});
    RadialPositionButton.text = "Radial Position";
    RadialPositionButton.preferredSize.width = 210;

// GROUP28
// =======
var group28 = ButtonGroup9.add("group", undefined, {name: "group28"});
    group28.orientation = "row";
    group28.alignChildren = ["left","center"];
    group28.spacing = 10;
    group28.margins = [50,0,0,0];

var statictext9 = group28.add("statictext", undefined, undefined, {name: "statictext9"});
    statictext9.text = "Rad";
    statictext9.preferredSize.width = 30;

var RadialPositionSlider = group28.add("slider", undefined, undefined, undefined, undefined, {name: "RadialPositionSlider"});
    RadialPositionSlider.minvalue = 0;
    RadialPositionSlider.maxvalue = 100;
    RadialPositionSlider.value = 50;
    RadialPositionSlider.preferredSize.width = 116;

var RadialPositionRadiusTextbox = group28.add('edittext {properties: {name: "RadialPositionRadiusTextbox"}}');
    RadialPositionRadiusTextbox.text = "500";
    RadialPositionRadiusTextbox.preferredSize.width = 40;

// GROUP29
// =======
var group29 = ButtonGroup9.add("group", undefined, {name: "group29"});
    group29.orientation = "row";
    group29.alignChildren = ["left","center"];
    group29.spacing = 10;
    group29.margins = [50,0,0,6];

var RadialPositionDuplicateCheck = group29.add("checkbox", undefined, undefined, {name: "RadialPositionDuplicateCheck"});
    RadialPositionDuplicateCheck.text = "Duplicate ";

var statictext10 = group29.add("statictext", undefined, undefined, {name: "statictext10"});
    statictext10.text = "Num";

var RadialPositionDuplicateTextbox = group29.add('edittext {properties: {name: "RadialPositionDuplicateTextbox"}}');
    RadialPositionDuplicateTextbox.enabled = false;
    RadialPositionDuplicateTextbox.text = "20";

var RadialPositionRotateCheck = group29.add("checkbox", undefined, undefined, {name: "RadialPositionRotateCheck"});
    RadialPositionRotateCheck.text = "Rotate";

// BUTTONGROUP9
// ============
var divider13 = ButtonGroup9.add("panel", undefined, undefined, {name: "divider13"});
    divider13.alignment = "fill";

// BUTTONGROUP6
// ============
var ButtonGroup6 = tab2.add("group", undefined, {name: "ButtonGroup6"});
    ButtonGroup6.orientation = "column";
    ButtonGroup6.alignChildren = ["left","center"];
    ButtonGroup6.spacing = 0;
    ButtonGroup6.margins = 0;

// GROUP30
// =======
var group30 = ButtonGroup6.add("group", undefined, {name: "group30"});
    group30.orientation = "row";
    group30.alignChildren = ["left","center"];
    group30.spacing = 10;
    group30.margins = 0;

var image14_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%02%C3%95IDATx%C3%9A%C3%ACXA%C2%8F%C3%92%40%14.Xe%C2%97%40%C3%95%C3%A0%C2%81%C2%B2%C2%89%C2%A9%07k%5C.k%C3%AAE.%C3%84%C2%84c%C2%B9%10%C3%99%C2%83!%C2%91%13%C2%9C%C2%88%11%C3%BF%00%1E%3C%C2%82%07N%C3%B4%C2%A4%09%C3%B1%C2%B0%24%5C%C3%A0H%C3%A2%0D%2F6%C3%AA%01%C3%8C%C2%A2%C2%89D%C2%B3%C2%94%C2%84%25%C2%AE%40%10V%C3%988%0F%3BI%C2%83Lm%14%17b%C3%BA%C2%92f%C3%9A%C2%BE7%C2%9D%C2%AF%C3%9F%C2%BCy%C3%B3%C3%A6Y(%24%C2%A9T%C2%8ACM%C2%94Z%C2%BD%3CEX%C2%9A%16%15%C3%90%C3%AB%C3%89d%C3%B2m8%1C%C3%8A%C3%A3%C3%B1%C2%B8u%C3%9AHl6%C2%9B%C3%87n%C2%B7%0B4Mo%C2%A2%C3%87%1B40%04%C2%80%C3%B2%C3%B9%C3%BC%C3%9Df%C2%B3%C3%99_%15E%1C%C3%879%23%C2%91%C3%88s%04%2Cj%C2%85%17%C3%80%C3%90*%01%C2%81%C3%80%C3%B8%C2%80%03%C3%AE%C2%81)J%3BeO.%C2%B9%05R%C3%877%C3%A3%C2%91%C3%B2%C2%AC%7F4%C2%B3%C2%BD%C2%B5aw%C3%AE%3A%18%C2%9Ed%C2%BB7%C3%A85%5E%C2%8E%C2%86%C2%B3%1F%C2%BD%C3%A7%C2%BC%C3%A0%C3%99%C2%B1m%C2%B0%24%C3%9B%07%C2%87mY%C2%8B%C2%83%C2%9E7%C3%98u%C2%9C%C3%8F%C2%91%3A%C3%AF%C3%986%25%04J%C3%BAi%C3%87%C3%B0z%C2%B6H%C3%A2%08%C3%94l%C2%B0(sQ%C3%A4%C3%8F%C2%9E%C2%8B%C3%A9%C2%80%C2%BA%C2%A9%7D%C2%B6Rk(%26(%13%C3%94%C2%B2%C3%A5%C2%97%C3%95%C3%97%3B9%C2%91I%C3%86%C3%9D%C3%A9D%C3%81%C3%B7%C2%87%C3%93i_%C3%8F%16%C3%B4%C3%9A~%C2%BD3%C2%B4%C3%BC%C3%87%C2%A0%C2%AE%7Fz%1F7%C3%92%C3%B1%C3%B1%C2%97N%03%5D%C2%86l%C3%AF%C2%B4%3F%C2%97PS2%7D%C3%AA%C2%9F%C3%BB%C3%94%01w%C3%AD%15%C3%89%C2%B8%C3%B1%C3%BDX%C2%BA%7D%C3%B0Q%C3%82%C3%9B%C2%91%5ED%C3%9F%1B%7C%C2%8D%C3%A3%C3%AD%C3%A3%C3%85%C3%96%C2%95%C2%98%5ED%C3%9Fj%C3%AE%C2%9B%11%C3%9D%04e%C2%82Z%C3%8F%C2%900%C2%BF%3C%C3%B5%C2%B2%C3%85%C3%B9%C3%A4%C2%8C%24j%18%C2%91%C3%BE%2F%C2%A6%C2%8CJ8%1C%C3%B6%40%C3%ABv%C2%BB%1D%C3%95jU%09%06%C2%83%7C%C2%A9Tj%C3%B8%7C%3E%C2%B6%C3%9Dn%0F%40W(%14Z%C3%AA%C2%B9R%C2%A8%C3%95j%C2%8A%C3%97%C3%ABe%C2%A1%C2%85%3E%C3%98%06%C3%B7%C2%97e%C2%B9O%04%C3%B5%C3%AE%C3%B2Ub%C2%94%C2%AE%1D%C2%8F%C3%8A%C3%AA%C3%A6%0A%C2%A0D%C3%B5%C3%8C%C3%A6%C2%84%C3%8D%C3%96%C3%AF%C3%B7%C3%87%C2%BA%C3%9Dn%3A%10%08%04%C3%91%01%C2%A0%C2%AF%C2%82%C2%9AM%C2%99(%C2%8A9%C2%96e%1F%C3%B1%3C%2F%C2%A2%C2%B6%C2%8C%C2%80%C3%B0%08T%03t%C3%B0%C3%8E%C3%A5rI%08%C2%94L%04%C3%85X%C2%AD%C3%84%C3%93%C2%8CK%C2%93~%C2%A0%01%C3%8BZ6%C2%B2%C3%99l%5Cm%C3%93%C2%98E%2C%C3%A5r9%C2%8E%C3%98%C2%92%17e%0A%C2%89Db%1F%C2%98Z%C2%8AO%01S%C2%98%C2%AD%C3%9F%C3%A9%C2%80)%C3%92wB%C2%A1%C3%90C%C2%98%C3%BA%C2%A5%C3%B8%14f%C3%8A%C2%88%0E%C2%98%22%C3%99%16%C2%8B%C3%85%C3%B4%C3%92%C2%98B%C2%BE%23%C3%80eD%07%C3%BE%C2%A6%C3%B3%C2%9D%20%2C%C2%8E%C2%A50%C2%A5(J%C3%8B%C2%A8%C2%AE%C3%93%C3%A9%10Sapx%C2%BC%12%C3%BF%1A%14%C2%96%5C.%17%C2%ACT*2%C3%B8%10L%1B0%C2%B4%080%C2%84%C2%85%C3%AD%C3%ADm%C2%A1%5E%C2%AF%C3%8Bh%05z%C3%B4~%C2%8A%5E%C2%94%C2%9C%C3%A9%C3%95%12N%23xB%7D*%C3%95%C3%AB%C3%B5%C2%84L%26%C2%93Zu%24O%26%C2%93)%C2%86a%3E%C3%8C%1C%1D%0AVP%1FZ%25%20%18%1Fp%60%C2%A68j%C3%8D*y%16%C3%95%09%01%C3%98%7D%C2%A8%C3%B6%C2%AC%C2%88%C2%A8%23t%C2%BD%C2%A5%C3%94%C2%9A%C3%A7%0F%01%06%00%C3%A3%C2%A3i%C2%9C%11%C3%92%0C%C3%8F%00%00%00%00IEND%C2%AEB%60%C2%82";
var image14 = group30.add("image", undefined, File.decode(image14_imgString), {name: "image14"});

var GridPositionsButton = group30.add("button", undefined, undefined, {name: "GridPositionsButton"});
    GridPositionsButton.text = "Grid Positions";
    GridPositionsButton.preferredSize.width = 210;

// GROUP31
// =======
var group31 = ButtonGroup6.add("group", undefined, {name: "group31"});
    group31.orientation = "row";
    group31.alignChildren = ["left","center"];
    group31.spacing = 10;
    group31.margins = [50,0,0,10];

var GridPositionsDuplicateCheck = group31.add("checkbox", undefined, undefined, {name: "GridPositionsDuplicateCheck"});
    GridPositionsDuplicateCheck.text = "Duplicate (xx)";
    GridPositionsDuplicateCheck.preferredSize.width = 109;

var GridPositions3DCheck = group31.add("checkbox", undefined, undefined, {name: "GridPositions3DCheck"});
    GridPositions3DCheck.text = "3D Grid";

// GROUP32
// =======
var group32 = ButtonGroup6.add("group", undefined, {name: "group32"});
    group32.orientation = "column";
    group32.alignChildren = ["left","center"];
    group32.spacing = 0;
    group32.margins = [50,0,0,0];

// GROUP33
// =======
var group33 = group32.add("group", undefined, {name: "group33"});
    group33.orientation = "row";
    group33.alignChildren = ["left","center"];
    group33.spacing = 10;
    group33.margins = 0;

var UnifyGridCountCheck = group33.add("checkbox", undefined, undefined, {name: "UnifyGridCountCheck"});
    UnifyGridCountCheck.text = "Unify Grid Count";
    UnifyGridCountCheck.value = true;

// GROUP34
// =======
var group34 = group32.add("group", undefined, {name: "group34"});
    group34.orientation = "row";
    group34.alignChildren = ["left","center"];
    group34.spacing = 10;
    group34.margins = [0,0,0,0];

var statictext11 = group34.add("statictext", undefined, undefined, {name: "statictext11"});
    statictext11.text = "Col";

var GridCountColTextbox = group34.add('edittext {properties: {name: "GridCountColTextbox"}}');
    GridCountColTextbox.text = "2";
    GridCountColTextbox.preferredSize.width = 30;

// GRIDROWGROUP
// ============
var GridRowGroup = group34.add("group", undefined, {name: "GridRowGroup"});
    GridRowGroup.enabled = false;
    GridRowGroup.orientation = "row";
    GridRowGroup.alignChildren = ["left","center"];
    GridRowGroup.spacing = 5;
    GridRowGroup.margins = 0;

var statictext12 = GridRowGroup.add("statictext", undefined, undefined, {name: "statictext12"});
    statictext12.text = "Row";

var GridCountRowTextbox = GridRowGroup.add('edittext {properties: {name: "GridCountRowTextbox"}}');
    GridCountRowTextbox.text = "2";
    GridCountRowTextbox.preferredSize.width = 30;

// GRIDSTEPGROUP
// =============
var GridStepGroup = group34.add("group", undefined, {name: "GridStepGroup"});
    GridStepGroup.enabled = false;
    GridStepGroup.orientation = "row";
    GridStepGroup.alignChildren = ["left","center"];
    GridStepGroup.spacing = 5;
    GridStepGroup.margins = 0;

var statictext13 = GridStepGroup.add("statictext", undefined, undefined, {name: "statictext13"});
    statictext13.text = "Step";

var GridCountStepTextbox = GridStepGroup.add('edittext {properties: {name: "GridCountStepTextbox"}}');
    GridCountStepTextbox.text = "2";
    GridCountStepTextbox.preferredSize.width = 30;

// GROUP35
// =======
var group35 = ButtonGroup6.add("group", undefined, {name: "group35"});
    group35.orientation = "column";
    group35.alignChildren = ["left","center"];
    group35.spacing = 0;
    group35.margins = [50,10,0,0];

// GROUP36
// =======
var group36 = group35.add("group", undefined, {name: "group36"});
    group36.orientation = "row";
    group36.alignChildren = ["left","center"];
    group36.spacing = 10;
    group36.margins = 0;

var UnifyGapCheck = group36.add("checkbox", undefined, undefined, {name: "UnifyGapCheck"});
    UnifyGapCheck.text = "Unify Gap";
    UnifyGapCheck.value = true;

// GROUP37
// =======
var group37 = group35.add("group", undefined, {name: "group37"});
    group37.orientation = "row";
    group37.alignChildren = ["left","center"];
    group37.spacing = 10;
    group37.margins = [0,0,0,0];

var statictext14 = group37.add("statictext", undefined, undefined, {name: "statictext14"});
    statictext14.text = "Col";

var GapColTextbox = group37.add('edittext {properties: {name: "GapColTextbox"}}');
    GapColTextbox.text = "50";
    GapColTextbox.preferredSize.width = 30;

// GAPROWGROUP
// ===========
var GapRowGroup = group37.add("group", undefined, {name: "GapRowGroup"});
    GapRowGroup.enabled = false;
    GapRowGroup.orientation = "row";
    GapRowGroup.alignChildren = ["left","center"];
    GapRowGroup.spacing = 5;
    GapRowGroup.margins = 0;

var statictext15 = GapRowGroup.add("statictext", undefined, undefined, {name: "statictext15"});
    statictext15.text = "Row";

var GapRowTextbox = GapRowGroup.add('edittext {properties: {name: "GapRowTextbox"}}');
    GapRowTextbox.text = "50";
    GapRowTextbox.preferredSize.width = 30;

// GAPSTEPGROUP
// ============
var GapStepGroup = group37.add("group", undefined, {name: "GapStepGroup"});
    GapStepGroup.enabled = false;
    GapStepGroup.orientation = "row";
    GapStepGroup.alignChildren = ["left","center"];
    GapStepGroup.spacing = 5;
    GapStepGroup.margins = 0;

var statictext16 = GapStepGroup.add("statictext", undefined, undefined, {name: "statictext16"});
    statictext16.text = "Step";

var GapStepTextbox = GapStepGroup.add('edittext {properties: {name: "GapStepTextbox"}}');
    GapStepTextbox.text = "50";
    GapStepTextbox.preferredSize.width = 30;

// BUTTONGROUP6
// ============
var divider14 = ButtonGroup6.add("panel", undefined, undefined, {name: "divider14"});
    divider14.alignment = "fill";

// BUTTONGROUP10
// =============
var ButtonGroup10 = tab2.add("group", undefined, {name: "ButtonGroup10"});
    ButtonGroup10.orientation = "column";
    ButtonGroup10.alignChildren = ["left","center"];
    ButtonGroup10.spacing = 0;
    ButtonGroup10.margins = [0,3,0,0];

// GROUP38
// =======
var group38 = ButtonGroup10.add("group", undefined, {name: "group38"});
    group38.orientation = "row";
    group38.alignChildren = ["left","center"];
    group38.spacing = 10;
    group38.margins = 0;

var image15_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%04XIDATx%C3%9A%C3%8CX_LSW%18%3F%C2%94%22X%C2%B8M%C2%A0%C2%84%40%C3%B7'%C2%8D%C2%84%0B%2C%C3%8D%C2%A2%5C%25%C3%AA%C3%83%06%7BX%C3%B60L%40LS%25%C2%A3%C3%9DC!%C3%91%04%C2%B2%C2%92%C3%B0%08%C3%84h%24%C2%A1%C3%8A2c%C2%80%2C%40%16%C3%A6Bt%C3%B8P%C2%9F%17x%C3%99L%C3%A5%22F%C2%96i%0D%1B%19Z%C2%88%03JzI'%06%C2%8B%C3%A7w%C3%A5%C3%94%2B%5E%C3%A4%C2%A2%C3%BD%C3%83IN%C3%8Fw%C3%8E%3D%7F~%C3%B7%C3%BB%C2%BE%C3%9F%C3%B7%C3%9D%C2%9E%14BK%7B%7B%C2%BB%C2%856%0E%C2%92%C3%BC2H%C2%B1%C3%8C%C2%A4l%00%C2%BA%C2%B3%C2%B6%C2%B6%C3%B6%7F8%1C%16WWW%03%C2%89F%C2%92%C2%9E%C2%9En6%18%0C%C2%82%5E%C2%AF%C3%9FK%C2%BB%07%C3%B4%C3%90%10%00%0D%0D%0D%C2%9D%C2%9C%C2%99%C2%99%C2%910izz%C3%9A%C2%9D%C2%93%C2%93%C3%83C%C3%AE%C3%AB%C3%AB%C3%B3%C2%B4%C2%B6%C2%B6%C3%BA%C3%A3%0D%C3%8Cb%C2%B1puuuW)0%07%40%11h%C2%88%01B%01%C2%A0%C3%8C%C3%80%C2%BC%10%3A%7B%C2%9E%C3%94%C3%BEu%C2%BF%C3%BD%C3%98%C3%87E%C2%92r%C2%83!i%C3%99s.%C3%B8_L%C2%81%C3%A2%7C%C3%A00%1A%C2%8DD%06%C2%A5f%C2%B2%C3%94%0F%3F%20%5C%C3%93%19r%C2%AF%7F%C3%90%3By%C3%A3F%14%C3%80%C3%97%C2%99%C2%9C%3B75%C2%95%C2%8B%C2%87%C2%B6%18%0E%C2%BD%C3%9A%C3%83%C3%89%C3%89%C3%89%C2%9Byyy%221f%C2%91ki)cW%16%C3%A6%C2%A3%C2%A0%C2%BF2p%C3%92%C3%BB%1C%C3%9C%C3%99%C3%99%C3%89%C2%BB%5C.7%C3%A4%C2%A5%C2%A5%25%7Faa%C2%A1g%C3%B3%1CUP%C2%95%C2%95%C2%95%C3%9Ex%C3%B9%0E%7DY.%C3%83'%0A%C2%B0%041%C3%A7%C2%AB%C3%8E%C3%91%25%C2%9Ai%C3%A6%C3%8B%C2%BD%C3%BCR%C3%83i%C3%B2%C3%BC%C3%91%C3%A3-%C3%A7%C3%A8%13%09%C3%A8z%C3%BEGU%C3%96%C3%85%C2%A0%7B%C3%8A%C2%94%C3%AD%09%04f%C3%BDO%C3%BAD)%C2%A9%C2%A0%00%C3%A8H%C2%86%C2%A1%C3%AD%C2%8F%C2%A7%C3%A1%C2%8EZ%C3%B1%C2%81%C2%978o%C2%BD%C2%BF%C2%A6x%C2%9E%C3%A7%C2%ACVk%01%19%C2%BFG%0C%C3%BB%C3%B6%C2%99%2B%C2%AC%25s%C2%A3%C2%A3%C2%A3%C2%81%C2%8A%C2%8A%0A3%0D!Y%C2%94%C3%8A%5C(%14%C2%92%C2%A8%C3%B3%C2%AE%C2%B0%C3%B1%C2%8D%C3%B0%C2%92u%C3%B2%C3%B7%C3%9B%C3%85Q%40%C3%B3%C2%B3%C3%9B%C3%BA%C2%ABfP%00TVVV%05P%C2%99%C3%85%C2%BC%20%C3%A4%C2%99%08%0E%17h%C3%A9%C3%AA%C3%AAjc%C3%B3ZZZ%3A%C3%98%C2%B8L%C2%9A%60%C3%88u%20%C3%83P%C2%A0%15%C3%90%3B9z0%C3%B2%C3%9C%1FN%C3%93k%0E%0B%C2%9F%C3%BE6%C2%96u%C3%A7%C2%8B%C3%8F%C3%A6%C2%AE%1E%3D%C3%B4%40%C3%AB%1A%C3%8D%C2%9A%C2%82Y%C2%82%C3%81%C2%A0%C3%BFW%5B5Y%5C%5C%0C%C3%90%1Fy%5C%C2%96%15%C2%85%C3%B5Y%C3%BB%C3%BD%C3%B1%C2%AA%C2%8B%C3%B2%C3%BA%C2%BF%1F%C2%AE%C3%84%1C%C3%94%C3%9B%C3%8A%C3%B0%C3%B0%C2%B0G%C2%A7%C3%93q%C2%91HD%C2%8A%C3%85~%C2%9AA%C3%81OP%C3%9F%C3%B8%C3%96%18%1C%14Q%C3%95%C3%867D1n%C2%A0%C3%80%26%C3%A6%C2%BC%C3%8C48%C3%98%C3%A1p%08%26%C2%93%C3%89%C3%8Cq%5C%C2%81%24Isx%C3%86%C3%861%07%C3%8Fdd%C2%B4%C2%A8%C2%BD%C2%94fG%C2%A7%C2%BE%C3%93%C2%BB%C2%BE%C2%BE%3E%C2%8E%3A00%200jggg%C3%B3%C3%AC%20v%18Z%C2%B0%C2%8F%16%17Z%C3%A58%C2%93%C2%B1%0E%C3%AB!c%3F%C2%B67%C3%8E%C3%99%C2%91%C2%A6%C2%9E%C3%9D%C3%B2%C2%91%05%C3%BB7%C3%A4KBz%1F%5B%C2%8A%09%C2%99%C3%B8S%C2%AE%C2%A1HD%1C%C3%BE%C3%B6T%C3%94%24%C3%90%C2%90r%1D%C3%AB%C2%B3%C3%96%C3%96%C3%BF%C2%B3%60%C3%94%C3%A9%04'!%C3%B6%1F%C2%B0O%C3%87%05%12%C2%A05%C3%B7%C2%97%C2%9F%08)%C3%A1wf%C2%BE%3D%C2%87%C3%8B%C2%89%C3%B9%C2%9F%C3%BB0Q%C2%83%C3%93%C3%A9%14kjjx%C3%84)0%C2%90H%C2%AF%C3%BC%19%26S%C2%AEc%7D%C3%96%C3%BEx%C3%A2%C3%98M%C2%AA)%C3%BF%C3%84%C3%84%C2%84wdd%C3%84%0FMQ%C3%93%C3%8A%1A%0A%2F%2Fk%07E7i%C3%98*%24l%0E%03%C2%90%110%C2%95%3E%C2%A5%C2%9C%03%13b%1D%C3%96%C2%A3%C2%8F%17%C2%A4%C3%B5%60%C3%9C%C3%99%C2%A7%C3%86%C2%B0%C2%84%C2%B1%C2%AF%C2%B1%C2%B1%C3%B1s%C3%884%1E%C2%AD%C3%B8%7C%C2%BE%40ww%C3%B7%C2%96%C3%ACknn%16%C3%8A%C3%8B%C3%8B%C3%8D4~%C3%89%0E%C3%9E%C3%93%C3%933%C2%A6%C2%95%7D%C2%9AA%C2%81%3D6%C2%9B%C3%8D%1D%C2%A5%C2%ADN%C2%87%2FF%C2%91%01%C3%9A%C3%A4%C3%B4%22%00%C3%99%C3%AD%C3%B6hN%04(%C2%ADgi%C3%8E%7D%C3%B8%0Axm!%C2%8D%C3%A0%C2%9BY%C2%A6%C3%AC3%0D)_*%C3%A6%C2%A0%C3%B0Y%C2%A2%C3%AC%C2%B3%C2%94%C3%82X%06%C3%9A%C2%AB%C2%B11%C2%AEi%06%C3%AC%01%C3%8B%C3%94%C3%98%C2%A7%0C%07%C2%AC%0Fs%C2%A12%0DMMM%C3%8D%C3%85%1C%C3%94v%C3%AC%C3%BB%C3%8ER%C3%9C%C3%A6%C3%B1x%C2%BC%C3%8A%C3%B9q%C3%97%C3%94N%0Be%2BW__%1F%0D%C3%99%C2%88OI%01u)7_%60%C3%B2%C3%BE%C2%A2R%C3%BEh%C3%89'n%C3%BC%C2%95B%C3%9D.%60%C3%86%05%14r%22%C3%BD%C2%A3%C3%AA%C2%8A%C2%A6)%C3%9F8'I%2Bd%C3%AF%C3%B1jb%C2%A8%C2%ADN%C2%8E%C3%B9J%C3%BF%7D%C3%B8Zj%C3%AA%3C%C3%BD%C3%B2%C2%9F%C3%B03%24%C3%B7-r%5C%C3%82%7D%0A75%C2%B46%C2%BC%C2%B3%C2%A3%C3%A3~h%17%5C%C2%981%1Ca9x%C3%A2%C3%82%0A%C3%B7C%C3%89%04%C2%84%C3%B3%C2%81%03%C3%B2%C2%AE%C2%BC%C3%89KQ%C3%9Cy6%C2%81%C3%89IR%14%C2%98p%C2%97%C3%9Dy%C2%BE%10%60%00F%C3%86UfC%C3%A5%C3%8D%C2%95%00%00%00%00IEND%C2%AEB%60%C2%82";
var image15 = group38.add("image", undefined, File.decode(image15_imgString), {name: "image15"});

var GridMoveButton = group38.add("button", undefined, undefined, {name: "GridMoveButton"});
    GridMoveButton.text = "Grid Move";
    GridMoveButton.preferredSize.width = 210;

// GROUP39
// =======
var group39 = ButtonGroup10.add("group", undefined, {name: "group39"});
    group39.orientation = "row";
    group39.alignChildren = ["left","center"];
    group39.spacing = 10;
    group39.margins = [50,0,0,6];

var GridMoveDirection2V = group39.add("radiobutton", undefined, undefined, {name: "GridMoveDirection2V"});
    GridMoveDirection2V.text = "2V";
    GridMoveDirection2V.value = true;
    GridMoveDirection2V.preferredSize.width = 45;

var GridMoveDirection2H = group39.add("radiobutton", undefined, undefined, {name: "GridMoveDirection2H"});
    GridMoveDirection2H.text = "2H";
    GridMoveDirection2H.preferredSize.width = 45;

var GridMoveDirection4 = group39.add("radiobutton", undefined, undefined, {name: "GridMoveDirection4"});
    GridMoveDirection4.text = "4";
    GridMoveDirection4.preferredSize.width = 45;

var GridMoveDirection8 = group39.add("radiobutton", undefined, undefined, {name: "GridMoveDirection8"});
    GridMoveDirection8.text = "8";
    GridMoveDirection8.preferredSize.width = 45;

// GROUP40
// =======
var group40 = ButtonGroup10.add("group", undefined, {name: "group40"});
    group40.orientation = "row";
    group40.alignChildren = ["left","center"];
    group40.spacing = 10;
    group40.margins = [50,0,0,0];

var statictext17 = group40.add("statictext", undefined, undefined, {name: "statictext17"});
    statictext17.text = "Distance";

var GridMoveDistanceTextbox = group40.add('edittext {properties: {name: "GridMoveDistanceTextbox"}}');
    GridMoveDistanceTextbox.text = "100";
    GridMoveDistanceTextbox.preferredSize.width = 40;

var statictext18 = group40.add("statictext", undefined, undefined, {name: "statictext18"});
    statictext18.text = "Mult";

var GridMoveMultiplierTextbox = group40.add('edittext {properties: {name: "GridMoveMultiplierTextbox"}}');
    GridMoveMultiplierTextbox.text = "1";
    GridMoveMultiplierTextbox.preferredSize.width = 30;

// GROUP41
// =======
var group41 = ButtonGroup10.add("group", undefined, {name: "group41"});
    group41.orientation = "row";
    group41.alignChildren = ["left","center"];
    group41.spacing = 10;
    group41.margins = [50,0,0,0];

var GridMoveAllowStatisCheck = group41.add("checkbox", undefined, undefined, {name: "GridMoveAllowStatisCheck"});
    GridMoveAllowStatisCheck.text = "Allow Stasis";

// BUTTONGROUP10
// =============
var divider15 = ButtonGroup10.add("panel", undefined, undefined, {name: "divider15"});
    divider15.alignment = "fill";

// BUTTONGROUP11
// =============
var ButtonGroup11 = tab2.add("group", undefined, {name: "ButtonGroup11"});
    ButtonGroup11.orientation = "column";
    ButtonGroup11.alignChildren = ["left","center"];
    ButtonGroup11.spacing = 0;
    ButtonGroup11.margins = [0,3,0,0];

// GROUP42
// =======
var group42 = ButtonGroup11.add("group", undefined, {name: "group42"});
    group42.orientation = "row";
    group42.alignChildren = ["left","center"];
    group42.spacing = 10;
    group42.margins = 0;

var image16_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03vIDATx%C3%9A%C3%8C%C2%98OL%C3%93p%14%C3%87%C3%97%C2%AD%5D%C3%B7%C2%87m%C2%B2%01c%0B%C3%81%5D%C3%80%C2%93%063%C2%BD%C2%91%18%03%C3%A1%20J%22%24%C3%86%2C%18%C2%89%09F%0E%C3%82Y%C3%B1%C3%80%05%C3%B5F%C2%A2%C2%89%1EP%C2%94H%16c%C2%8CF%03%17%02%C3%AA%C2%81D%13%C2%B2%C3%B8%C2%87%C2%93x%C2%B0%02%0E7%C3%98%C3%86%C3%9A%C3%BD%C3%AB%C2%9Fm%C3%BE%1E%19fY%3A%C3%96%02%C2%B3%7BI%C3%93%C3%B6%C3%B5%C3%8F%C3%AF%C3%93%C3%B7%5E%C2%BF%C2%BF%C2%97%1F%C2%A6B622%C3%A2B%C2%BB%3E%C2%95%C3%B2%C3%B6%14%C2%B1PX%0E%C3%A8%C2%B3%20%08%C3%89D%22%C3%A1cY%C3%96%C3%BF%C2%BFIH%C2%92t%1A%0C%067%C2%8E%C3%A3ztz%1C%C2%87%08%01%C3%90%C3%94%C3%94%C2%94%C2%87%C2%A2(F%C2%A9%10%C2%B9%5C.Soo%C2%AF%17%C2%81%C3%B5%C2%A9%C3%81%01%11R%12%08%0C%C3%86%07%0E8%C3%9E%C2%86R%22eb%C2%B6%C3%83%C2%81%C2%8B%5D%1C%C2%AB%C2%A9w%C2%B7%C2%90zw%C3%91j%C2%A4%23%C3%93%C2%93%C3%8CV%C3%99%3ED%14%0A%C2%80%C2%9A%09%C3%AD%C3%95b%0F%C2%B5%C2%90%3A%C3%9F%24%C2%A3*%1B%C2%94%C2%BA%5C%2F%1E%C2%ABq%C2%B8_%C3%967%C2%9Es%11ZmE%40u%19%C3%8D6%14M%C2%B7M%C2%A3q%C2%8C%C3%97%3A%3D%C2%83%C2%87l.E%C2%A1%202%C3%97%2C%C3%96%C2%8E%7F%C3%B5%C2%81a%C3%9A%C3%B3Fs%C3%87pum%C2%B3bP%5DF%C2%93S%C2%8Fa%C2%A6%7C%1F%C2%9D%C3%89%C2%84F%23%1B%C3%8B%C2%8AA%C3%9D%C3%9B%0AQ%C2%AF%C3%A3%C3%B4%C2%AC%C2%90%C3%8Drp%0E%C3%BB%C3%87t%C3%A4%C2%83%C3%A25%05%60%C3%BD%1B~%C3%AF%C2%BA%20P%C2%8Bl%C3%92%C3%B76N%C2%87%C3%B6-%09%C2%A0C%C3%B0%C3%9B%17%7B%C3%A8E%C2%8C.%C2%99%0A%C2%8A%C3%A78O%60u%C3%B6%C3%80t%0A%C2%84%C2%B1%C2%9C%3A%C2%A4%C2%98N%C3%A5%C3%9Bi%C2%BD%C3%91RQP7%C2%90%14%C3%9C%C2%B5%C3%99%07%C3%86%C3%AB%C2%9C%C2%AD%15%01%05%11%3Ak%C2%A8%C3%AA%C2%84%C3%A3cZ%5D%C3%AB%1BGcO%13%C2%A1%C3%95)%06%05%C2%83%23%C3%81%C3%ACA%C3%A2I%C3%AE%C3%B8%C3%AA5x%C3%93C%C2%A4%C3%B0%17%C2%AB%2C%C3%B6%7DA9q%C2%828c4Y%2F%C2%9B%C2%AB%C2%9Dr%C2%A0Fm%C3%B66%C2%93Z%5DW%C3%A8%07%C3%9Fu%C2%8B%C3%95s%C3%9Bf%3F*%C3%AB%C3%AF%03%10%24%09%C2%A6%23%04i1%C2%AB%C3%95%C2%BA%3C%C3%BF%C2%86_%C3%A0%C3%B9R%400%C3%A0a%C2%9C(%3E(%C2%8A%5E%C2%9B%C3%9E%C3%98%C3%B9%C3%8C%C3%9E%60%C2%BF%14X%C2%9B%C2%93%14)%C3%B4B%C3%9DIRo%C3%8F%07%C3%8A%C2%B5%2C%C2%A6R%40%C2%90%1A%18PJ4Q%7Btb%C3%8E%C3%A9%C2%BARXg%C2%A2P%1FS%09%C2%86%C3%8Ff%C3%93%C2%85~%C2%88%5C%C2%A9%3A%C2%82%C3%94%C3%88I3%C2%9A'-%C2%92k%C3%AAwZ%C2%88%15%C3%BA%20r%C2%90%C3%9A%C2%A2%C3%93K%C2%8D%C2%A3%3B%C2%BF%C2%B0%C2%A5%C3%98%C3%BDh%C3%98%C3%BB%C2%83%C3%A7R%C2%92%C2%A0%C2%969%C2%96)%C3%92u%C2%8A%C2%A6%10%C3%95G%C2%BBU%C2%A3i%C2%94%03%C3%B4)%C2%95%C2%9C%7F%1E%C2%8B%06%24GJN%0AA%20%C2%A1%3E%C3%A4%00%C3%BD%12%C3%B8%C2%A5%C2%A1%C3%8D%C3%B5E%C3%99%C2%92%205%C2%85%C3%A87%C2%97%C2%952%26%C2%93%09%0E%C2%87%02%C3%B3%7B%C3%92)%C2%A9)%C2%BC%19%0A%2C%C2%A1I%C3%9C%C2%8Bz'%C2%B6%14%10%C3%9C%C3%B3%C2%88%C2%8E%C3%8C%14%C3%96%C2%91d(9)%7C%10%0D%C2%AF%C3%9C%0A%07'%20%0A%C2%BB%C2%BDs%3A%11%C2%9B%11%C2%AB%23Y%C2%8A%5E%C2%98B%C3%94%C3%9A%C2%A6%C2%BE%C3%B3lT%C3%AC%C3%9E%C3%B7%C3%89x%C2%B4%C3%9DOM%40%C2%BD%C2%88%5D%C3%BF%C3%86%C2%A5%16%C3%AEHh%C2%8B%C3%B1R7%C2%AC%C3%B2%5C%C2%BC%0AS%13%3F%05%C2%8E%C3%B9%C3%82%C2%A6%18)%C2%8A~%C3%A1%C3%8F%C3%AA%0CR%C3%B5%C2%95S%3AC%C3%BB%C2%8ED%C2%84%C3%93%C3%A9%C2%95%C3%BE%C2%A0%7Fa%C3%8FM%5E%C2%BE%C2%BDC_%0F%C2%9B%C3%9C%09%19%C3%AA%0C%C2%A9%7Bp%C3%80b%C3%AD%C2%86%C3%B3%C3%81%C3%8D%C3%B5W%C3%BB%C3%AA%3C%0F%C3%8A%C2%A0v%7Cl%C3%B2I%03N%C2%90%C2%BB%15%C2%B6(%14%C2%AC%0F%C2%95%0B%0C%60%C2%A4%02%C3%A58%12%C3%9B%C2%85%0E%0BV%C2%B0%3E%C2%A4%C3%A4%C2%8A%0B%C2%8C%0F%1Cp%5C%C2%91%2By%188s%60C%C2%A0%C2%8B%0A%05j%0Bm_U%C2%B95%C3%8F%C2%BF%02%0C%00%C3%81i%C2%86%C3%83%C2%BF%3C%C2%96%7F%00%00%00%00IEND%C2%AEB%60%C2%82";
var image16 = group42.add("image", undefined, File.decode(image16_imgString), {name: "image16"});

var RandomizerButton = group42.add("button", undefined, undefined, {name: "RandomizerButton"});
    RandomizerButton.text = "Randomizer";
    RandomizerButton.preferredSize.width = 210;

// GROUP43
// =======
var group43 = ButtonGroup11.add("group", undefined, {name: "group43"});
    group43.orientation = "row";
    group43.alignChildren = ["left","center"];
    group43.spacing = 10;
    group43.margins = [50,0,0,0];

var RandomizerScaleCheck = group43.add("checkbox", undefined, undefined, {name: "RandomizerScaleCheck"});
    RandomizerScaleCheck.text = "Sca";
    RandomizerScaleCheck.value = true;
    RandomizerScaleCheck.preferredSize.width = 44;

// RANDOMSCALEGROUP
// ================
var RandomScaleGroup = group43.add("group", undefined, {name: "RandomScaleGroup"});
    RandomScaleGroup.orientation = "row";
    RandomScaleGroup.alignChildren = ["left","center"];
    RandomScaleGroup.spacing = 5;
    RandomScaleGroup.margins = 0;

var statictext19 = RandomScaleGroup.add("statictext", undefined, undefined, {name: "statictext19"});
    statictext19.text = "Min";

var RandomizerScaleMinTextbox = RandomScaleGroup.add('edittext {properties: {name: "RandomizerScaleMinTextbox"}}');
    RandomizerScaleMinTextbox.text = "1";
    RandomizerScaleMinTextbox.preferredSize.width = 30;

var statictext20 = RandomScaleGroup.add("statictext", undefined, undefined, {name: "statictext20"});
    statictext20.text = "Max";

var RandomizerScaleMaxTextbox = RandomScaleGroup.add('edittext {properties: {name: "RandomizerScaleMaxTextbox"}}');
    RandomizerScaleMaxTextbox.text = "100";
    RandomizerScaleMaxTextbox.preferredSize.width = 30;

var RandomizerScaleLinkCheck = RandomScaleGroup.add("checkbox", undefined, undefined, {name: "RandomizerScaleLinkCheck"});
    RandomizerScaleLinkCheck.value = true;

// GROUP44
// =======
var group44 = ButtonGroup11.add("group", undefined, {name: "group44"});
    group44.orientation = "row";
    group44.alignChildren = ["left","center"];
    group44.spacing = 10;
    group44.margins = [50,0,0,0];

var RandomizerRotationCheck = group44.add("checkbox", undefined, undefined, {name: "RandomizerRotationCheck"});
    RandomizerRotationCheck.text = "Rot";
    RandomizerRotationCheck.preferredSize.width = 44;

// RANDOMROTATIONGROUP
// ===================
var RandomRotationGroup = group44.add("group", undefined, {name: "RandomRotationGroup"});
    RandomRotationGroup.enabled = false;
    RandomRotationGroup.orientation = "row";
    RandomRotationGroup.alignChildren = ["left","center"];
    RandomRotationGroup.spacing = 5;
    RandomRotationGroup.margins = 0;

var statictext21 = RandomRotationGroup.add("statictext", undefined, undefined, {name: "statictext21"});
    statictext21.text = "Min";

var RandomizerRotationMinTextbox = RandomRotationGroup.add('edittext {properties: {name: "RandomizerRotationMinTextbox"}}');
    RandomizerRotationMinTextbox.text = "1";
    RandomizerRotationMinTextbox.preferredSize.width = 30;

var statictext22 = RandomRotationGroup.add("statictext", undefined, undefined, {name: "statictext22"});
    statictext22.text = "Max";

var RandomizerRotationMaxTextbox = RandomRotationGroup.add('edittext {properties: {name: "RandomizerRotationMaxTextbox"}}');
    RandomizerRotationMaxTextbox.text = "360";
    RandomizerRotationMaxTextbox.preferredSize.width = 30;

// GROUP45
// =======
var group45 = ButtonGroup11.add("group", undefined, {name: "group45"});
    group45.orientation = "row";
    group45.alignChildren = ["left","center"];
    group45.spacing = 10;
    group45.margins = [50,0,0,0];

var RandomizerOpacityCheck = group45.add("checkbox", undefined, undefined, {name: "RandomizerOpacityCheck"});
    RandomizerOpacityCheck.text = "Opa";
    RandomizerOpacityCheck.preferredSize.width = 44;

// RANDOMOPACITYGROUP
// ==================
var RandomOpacityGroup = group45.add("group", undefined, {name: "RandomOpacityGroup"});
    RandomOpacityGroup.enabled = false;
    RandomOpacityGroup.orientation = "row";
    RandomOpacityGroup.alignChildren = ["left","center"];
    RandomOpacityGroup.spacing = 5;
    RandomOpacityGroup.margins = 0;

var statictext23 = RandomOpacityGroup.add("statictext", undefined, undefined, {name: "statictext23"});
    statictext23.text = "Min";

var RandomizerOpacityMinTextbox = RandomOpacityGroup.add('edittext {properties: {name: "RandomizerOpacityMinTextbox"}}');
    RandomizerOpacityMinTextbox.text = "1";
    RandomizerOpacityMinTextbox.preferredSize.width = 30;

var statictext24 = RandomOpacityGroup.add("statictext", undefined, undefined, {name: "statictext24"});
    statictext24.text = "Max";

var RandomizerOpacityMaxTextbox = RandomOpacityGroup.add('edittext {properties: {name: "RandomizerOpacityMaxTextbox"}}');
    RandomizerOpacityMaxTextbox.text = "100";
    RandomizerOpacityMaxTextbox.preferredSize.width = 30;

// BUTTONGROUP11
// =============
var divider16 = ButtonGroup11.add("panel", undefined, undefined, {name: "divider16"});
    divider16.alignment = "fill";

// TAB3
// ====
var tab3 = tpanel1.add("tab", undefined, undefined, {name: "tab3"});
    tab3.text = "Utils";
    tab3.orientation = "column";
    tab3.alignChildren = ["left","top"];
    tab3.spacing = 10;
    tab3.margins = 10;

// BUTTONGROUP12
// =============
var ButtonGroup12 = tab3.add("group", undefined, {name: "ButtonGroup12"});
    ButtonGroup12.orientation = "column";
    ButtonGroup12.alignChildren = ["left","center"];
    ButtonGroup12.spacing = 0;
    ButtonGroup12.margins = [0,3,0,0];

// GROUP46
// =======
var group46 = ButtonGroup12.add("group", undefined, {name: "group46"});
    group46.orientation = "row";
    group46.alignChildren = ["left","center"];
    group46.spacing = 10;
    group46.margins = 0;

var image17_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%05%C3%BBIDATx%C3%9A%C3%8CX%5Dh%14W%14%C2%BE%C3%B7%C3%8E%C3%AC%C3%8C%C3%AC_v7%26jB%C2%A4%11lL%C2%89%C2%90%C2%9A%C3%A8C%C2%90%C2%80-E%C2%B0(%C2%85%3C%C2%8A%C3%90%3C%C2%99%07%1F%C3%84%C2%84%C2%82T%1F%C3%B2%C3%A0%C2%8B%C2%85%C3%84%C2%87%22t%C3%85%C2%87HE%10!%C2%A5%C3%AAC%C2%A9%C2%B4%C2%88%C2%B6RZ%C2%B3%C2%A9%C2%AD%C3%95tkqm%C3%93D%C3%9C%C3%BC%C3%AE%C3%AE%C3%8C%C3%AE%C3%AC%C3%AC%C3%8C%C3%B4~%C3%AB%C2%8E%C3%9D%26%C2%BB%C2%9B4J%C3%97%0B%C3%83%C3%8E%5E%C3%AE%3D%C3%A7%C2%9Bs%C3%8E%C3%B7%C2%9D%C2%B9C%09%1F%C2%83%C2%83%C2%83%C3%8D%C3%BC%C2%A7%C2%97T%7F%C2%8Cp%2C1Z%004%C2%9E%C3%8B%C3%A5%C3%92%C2%9A%C2%A6%C2%8D%C3%A9%C2%BA%3E%C3%B5%7F%23%C2%91e%C2%B9%C3%91%C3%A3%C3%B1t%C2%8A%C2%A2%C3%A8%C3%A6%7F%C2%B7%C2%8B%C2%88%10%00%5D%C2%B8p%C3%A1%40%2C%16KV%2BD%C3%8D%C3%8D%C3%8D%C3%BE%C2%83%07%0F%5E%C3%A4%C3%80z%19%26%10%C2%A1j%02%C3%82%C2%80%7F%C3%A0%C3%80%7D%1ETq%C3%8AN%C2%9E%3C9%C2%80%C2%ABx%C3%83%C3%80%C3%80%C3%80%C3%BE%C3%93%C2%A7O%C2%87%7BzzZ%C2%8A%C3%A71%C2%B7t-%C3%BEc%C2%BEx%0E%C3%BB0%07%3BK%C3%97%16%C3%AFwp0%C3%B2%0A%0E%14%C3%BA%60%3C%1Eo8s%C3%A6%C3%8C%C3%99j%C2%839%7C%C3%B8%C3%B0%C2%A1%C3%BA%C3%BA%C3%BAiq%C2%AD%06%C2%90%0A%C2%BF%C3%9F%C3%9F%C2%80%C3%BB%1B7n%5C%C3%A3%C3%97%C3%94%C3%AE%C3%9D%C2%BB%1B%C3%B9%C2%B5%0Fs%C3%89drzhh%C3%A8%C3%AAZl%C2%AF%19TSS%C3%93%3E%C3%90%C2%B8%C3%80%1C%14%C3%A8%14%C3%BFm%C3%A0%C3%A3%10%C3%A6%02%C2%81%00%C3%A6%5E%0E(%C2%A7%18%C2%8B%C2%9F2%1C%0E%C3%9FqXz%C3%B4%C3%A8%C3%91%C2%BE%C3%A7%C2%B9%C2%B7%2C%C3%82r%26Y%C2%AF%C2%A6%7D%C3%AFz%C3%BC%C2%B5%1BT%C3%8D%2F%C3%AAYb%C2%89%22%C2%A1K%08%C3%A1%3C%40__%C3%9F%C2%8EJ%C2%BEJ%C2%82B%04%0A%C2%B7e%C2%9F%C2%B2V%10%C3%84%C3%8C%C3%84%C2%AF7%C3%BD%C2%8CM*%19%5D~%23%C3%BA0%C2%B8%C3%95W%C2%B3M%C2%8C%C3%BE%1E%14%3D%C2%BE%2FuY%C3%92%0D%C3%8B%7C%C3%94%2C%C2%BA%C2%A4X%C3%8E%C3%88V%C2%8Av)_%C3%8B%40%C3%9D%C2%BAukh%C3%A9%1C%C2%A7j%C2%94%C2%ABn%C2%8B%C2%A2(-%1F%C2%9F%3A%15N%7Dq%C3%BDRh%C3%B4%C3%8A%C2%A3%C2%90%20%24%7D%C2%8C%05%24%C3%8A6%0A.%C2%A9%C3%89%C2%9A%C2%99%C2%B3%C2%8C%C3%AB_G5%C3%9BJ%10%C3%93%C2%9C%3D%C2%B2%C2%AB%C3%BBmy%C3%8F%3B%3DTQ%5Ew%C3%AC%C2%AC%C3%A4%C2%AB%24%C2%A8%C3%91%C3%91%C3%91%C3%A8%C3%92%C2%B9H%242%C3%94%C3%95%C3%95%15v%C2%99%C2%A6%3F%C2%A8%1B%C2%9D%1BL%C3%AB%C3%87%C2%90K%C3%92x%C2%A46(%C2%94%C3%96%C2%BA(%C3%B5%C3%B2t%C2%896!V%C3%8E%26%C2%9An%5B%0B5%C2%8C%C3%85%17LK12z%C2%87%C3%8AS%C2%9Au%2By%3B%2B%C3%B9%C3%BAO%C2%85%C2%8E%C3%BAq%2F%26%C2%88on%C2%9Ex%C2%B5tCP%10%C2%A8%C2%87%C2%B2F%C2%89%C3%92%3A%C2%91R%7F%01%C2%94i%C3%9A%C2%B6f%C3%98tN%C2%B6Y%40%C3%902V%C2%8A%C2%AF%C2%B7%05FLq%C3%9D%C3%8Ba%1F%0A%11y%17%04%C3%81%2F%24%C2%93qy%C3%AAI%C3%82%1D%C2%9F%C3%B1%04%C2%B4t%C2%AD%C2%8F%C2%B2%C2%A0%C3%82X%C2%93%40%C2%88%17%C2%98%C2%9D%3D%02%07%C3%88A%06%05%C3%9Bv%C2%93tz%C3%9E%C2%9A%C2%9A~%C2%9A5%0C-%23%C2%8A%C2%BE%C3%8E%C2%8E%C2%8E%C2%81%C3%B6%C3%B6%C3%B6%C3%A4%C3%A4%C3%A4%C3%A4%C2%B5Jr%C2%B1%0C%C2%94%C3%93%22%C3%802%C3%A8%10X%C2%83(%C3%99%0F%26%3E%C2%A7%C2%9F%5D%C2%BD%C3%AB%13%5D%C2%AD%5E%26l-%00%C3%B2%C2%952%C3%8A%C3%90%C3%B8)m%C2%B4T-%C2%9B%C2%BB%13%C3%B9%5E%C3%8D%C3%A5%26%C3%A8%C3%9E%3Dm%C3%AE%C2%8E%C3%B6%C2%BD%C2%A6%2C%13nwl%C2%A9%C2%AF%C2%8A%C2%A0TU%5D%C2%96g%C3%90%1E%2CCQ%C2%A3%C2%86%C2%90%C2%B2B%C2%84%C3%8A%C2%A7%C2%9B%10%C2%89%C2%AF%C2%AB%C2%97%09%C2%9D%C3%B12%16Tu%5D%C2%B6%C2%B2%061%5D%C2%AE%C2%8A%C2%BEJ%C2%82%3Aq%C3%A2%C3%84%C3%B3b%C2%84RC%18%C2%A1C%C2%A0%3DX%C2%86%C2%A2F%0D%15%C2%A7%C2%AC%C3%9C%60%C2%94zD%C2%9B%C3%BA88%C2%8F%C3%BD%C3%93%C2%BD%C3%88d*%C3%B9%C3%95%C3%83P%60%C2%86%C2%BF%11L%2F%C3%B5%C2%B5%C3%AA%C2%9AB%C3%AB%C2%80RC%18%C2%A1C%C2%A0%3D%0A%C2%9A%C2%AE%C2%92%20%7C%C2%9D%C3%80(q1%C2%AC%C2%8F%C3%87%17'%C3%BF%C2%88%C3%9D%3F%C2%BF8%C3%B7%C2%A7%C3%BD%22%C2%85%C2%8E%5E%C2%86%C3%96%C2%91Wj.%C2%8C%C3%90!%C3%90%1E%2C%5B%25%C2%91%2C%C3%9B%26%26%C3%B6%C3%90%C3%BA%C2%BA%C3%90%C2%A6%C3%8D%C2%9Dm%C3%AF%C3%97%06%C3%97%23R%C2%85%07%5E%1D(%C3%A7%C3%BD%06%C2%A1EsE%2FC%C3%AB%C2%80RC%18%C2%A1C%C2%A0%C2%BD%C3%B0%2C%C2%85%C2%95%11q%C2%BD4%09%24%C3%82N%C2%B3mm%C3%9B%C2%9Bvt%C2%BCU%C3%A7%C3%B3%C2%A2W%C2%9E%C3%A5%C2%A0%C3%8E%16%C3%BB%C2%AA%08%C3%8A%C3%AB%C3%B5%C2%B6%2C3%C3%8E%7B%19Z%07%C2%94%1A%C3%82%08%1D%02%C3%AD%C3%81%C2%B2r%C2%80%10M%0EfV%C2%B7%C3%ADy%C2%BEo%C2%91%C3%AF%C3%8F%C3%A6%24%C3%97%C2%8A%C2%BEJ%C2%82*%C2%A6'%5E%3F%C3%90%C3%AD%C2%A1S%C3%BE%C3%8D%C3%8D%5D%C3%A6%7B%C3%BB%C2%B7%C2%A9%5C%C2%A7%C2%A4%C3%BB%13%7F%09Zz%1A%C2%B4%07%C3%8B%C3%8A%00%C2%8AknEM%C2%B5l%C3%A90%C3%AA%C3%96%C2%B5Z%C2%AFm%C3%B2i%C2%96%15%C3%8DiZ%12vKI%C3%81%C2%AAj%C2%AA%20pW%7B%7B%7B%3Bw%C3%AD%C3%9C%19%C3%8E6l%C2%AC%C3%93x%C3%94%C2%84%C3%98%C3%A3%C2%9FYJMX%C2%94fA%7B%C2%B0%0CE%C2%8D%C2%A0%22e%C2%88P%C3%86%C2%B6%C2%A6%C2%93n%C3%85P%1B6%C2%B6e%C3%AA%C3%AB%C2%88%11%0A%C2%92%C2%B1H%C3%A4%C3%83%C2%91%C2%91%C2%91%C2%B1%C2%97%C3%B6%3E%C2%85%14j%C3%81%1A%C2%AEY9b(%C3%8A%13%C3%8B2u%C3%9E%C3%BBR%C3%90!%C3%90%1E%2CCQ%C2%A3%C2%86%C2%902%C3%95%C2%B2%C2%9E.*%C2%8A%C2%94%C2%A9%0D%C3%B1%7D%01b%C3%88%C3%B2%C3%9A%C3%9B%C2%8Cs8(n%C2%96%1D%C2%BC%3D%C3%A4%C2%BB%C2%BC%24%25uE%C3%BA-%2B%C3%90h2g%C3%A8%C2%B5L%C2%98%C2%870B%C2%87X%C2%A1!%C2%A3%C2%A8QC%C2%BC%19%C3%8F.0*1Y%1A%C2%B7%3C%C3%AE-%3C%C2%92~%C3%98%C3%A1%C2%91%3AP%C3%89WIP%C3%9D%C3%9D%C3%9D%03%C2%85%C2%85%7DE%C2%87%C3%85%C3%BC%C3%A6L%26%13%C3%AD%3F~%C2%BC%C2%AFU%C2%92%C2%95%0F%C2%8E%1D%3B%C2%97H%C2%A9%C2%AELF%17H%C3%AC%C3%B1x.2%1E%01%C3%AD%C3%812%14%C3%B5%C2%BCi%3E%C2%BAx%C3%B9%C3%B2%C2%A5%1Fn%C3%9F%C2%BC%C3%B2%C3%91%C3%B0%C3%B0'hW%C2%8E%C2%9DJ%C2%BEJ%C2%82B%C2%B3%C2%AC%14Z%08%C3%9F%C2%83%C2%AC%C2%9E1%1A%1BZ-%C2%9EJ%C2%9D%C2%B7%C2%8E%C2%A4%C3%80%C2%BE%C3%BB%C3%A5%C3%9Bo%C3%AEA%C2%87%40%7B%C2%B0%C3%8C4%C2%8C%C2%B1%C3%9B%C2%9F%C2%9E%3FW%C3%89V9_b%C2%99%C3%A2%C3%BE%C3%97(~%C2%85%C3%BDG%C2%AEi%C2%BE%C2%8F%C3%A1%C2%9A%5D%17J%C2%84%C2%B9RC%18%C2%A1C%C3%B9%1A%C3%A4%C2%80K1z%25_%2FtppN%C2%B3%C2%8Et%C3%98%C3%8FN%C2%B9%C3%93%10Fgn%C2%AD%C2%B6%C3%97%0C%C2%AA%C3%94%C3%93%C2%A3u%40%C2%A9_%C3%B4%C3%BC%C3%87J%C2%B5%C2%99j%1D%C3%9B%C3%8B%C2%82ze%C2%8E%C3%AD%C2%89D%C2%A2sxxx%C2%B0%C3%9A%60%C3%BA%C3%BB%C3%BB%07kjj%1E%C3%A6%23%05%0D%C3%81%C3%B7%C2%A1j%02%C2%82%7F%C3%A7%C3%80%C3%BAJ~%C3%89%C2%A3E%C3%9F%3C%C2%8F%C3%B0%C3%AB%C3%8D*%05j%C2%81_w%C2%9Do%C2%9E%7F%0B0%00%C2%9B%C2%BD%3A%0D%C3%A5v%2BI%00%00%00%00IEND%C2%AEB%60%C2%82";
var image17 = group46.add("image", undefined, File.decode(image17_imgString), {name: "image17"});

var EffectorButton = group46.add("button", undefined, undefined, {name: "EffectorButton"});
    EffectorButton.text = "Effector";
    EffectorButton.preferredSize.width = 210;

// GROUP47
// =======
var group47 = ButtonGroup12.add("group", undefined, {name: "group47"});
    group47.orientation = "row";
    group47.alignChildren = ["left","center"];
    group47.spacing = 10;
    group47.margins = [50,0,0,0];

var EffectorPositionCheck = group47.add("checkbox", undefined, undefined, {name: "EffectorPositionCheck"});
    EffectorPositionCheck.text = "Pos";
    EffectorPositionCheck.value = true;

var EffectorScaleCheck = group47.add("checkbox", undefined, undefined, {name: "EffectorScaleCheck"});
    EffectorScaleCheck.text = "Sca";
    EffectorScaleCheck.preferredSize.width = 50;

var EffectorRotationCheck = group47.add("checkbox", undefined, undefined, {name: "EffectorRotationCheck"});
    EffectorRotationCheck.text = "Rot";
    EffectorRotationCheck.preferredSize.width = 50;

var EffectorOpacityCheck = group47.add("checkbox", undefined, undefined, {name: "EffectorOpacityCheck"});
    EffectorOpacityCheck.text = "Opa";
    EffectorOpacityCheck.preferredSize.width = 50;

// BUTTONGROUP12
// =============
var divider17 = ButtonGroup12.add("panel", undefined, undefined, {name: "divider17"});
    divider17.alignment = "fill";

// BUTTONGROUP13
// =============
var ButtonGroup13 = tab3.add("group", undefined, {name: "ButtonGroup13"});
    ButtonGroup13.orientation = "column";
    ButtonGroup13.alignChildren = ["left","center"];
    ButtonGroup13.spacing = 0;
    ButtonGroup13.margins = [0,3,0,0];

// GROUP48
// =======
var group48 = ButtonGroup13.add("group", undefined, {name: "group48"});
    group48.orientation = "row";
    group48.alignChildren = ["left","center"];
    group48.spacing = 10;
    group48.margins = 0;

var image18_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03%C3%85IDATx%C3%9A%C3%8C%C2%98oHSQ%14%C3%80%C3%9F%C2%9E%C3%8F9%C2%B7%C3%9D%C2%B9%C2%A9%C2%A9%C2%9B%C2%A5%C3%93%C3%B0E%04%C3%BD%7B%C3%82%C2%B0%C2%A2eT%04%19%04%19%C2%A4%09%C3%ADK%5B~)dB%7D(Z%60%C3%9F%26%7Dn%C2%A8X%C2%8C%C2%A4(%C3%82%C3%96%C3%87%C3%88%C2%85%C2%94%C2%91N%C3%BB%C2%87%C3%A6%1B%C3%A5%C3%B2%C3%BF%C2%BF%C2%95%C3%B9%C3%A6t%C3%9B%C3%93u%C2%AF%C3%B8d%C2%85Nk%C3%8F%C3%9E%0E%5C%C3%9E%C3%9D%C3%9D%C3%A3%C2%BC%1F%C3%A7%C2%9C%7B%C3%8E%C2%B9W%C2%84A%C2%B1X%2CZ%C3%B80%60%C3%82K%23d%C3%B1%C2%88%C2%96%C2%80%C2%BAX%C2%96%C2%9D%C3%B5%C3%BB%C3%BD%C2%AE%40%200%C3%BC%C2%BFI%C2%92%C2%92%C2%924R%C2%A9%C2%94%22%08%22%19%C3%BE%C3%9CC%20%0B!%20%C2%BB%C3%9D%5E%C3%AE%C3%B1x%18%C2%A1L%C2%A4%C3%95jAEE%C3%85%7D%08f%C3%80%C3%91%02%C2%B2%C2%90%C2%90%40H%C3%90%C3%B7%11%07%C2%9A%2FB%09%C3%A1%C2%B2%C2%95%C2%84%C3%A3%C3%80%C3%B9V%C3%9C%C2%92%C2%9Dg%C3%AC%C3%8B%25%1D%C3%A7%C2%81R%C3%B3%C2%AF%3A%08%5E%C2%81%C3%B6%C3%AA%2CirP2%C2%9E%C2%A2%C3%80%C2%AE%7D%C3%B8h5(TN%C3%AE%C2%BF%C3%A2%C2%A1%3E%1BoP%1D%5B%C2%B6ZZgg%1CU%C2%93%C2%A3%C2%AE%C3%88u%C2%83%C3%81%40%C2%A5%C2%A5%C2%A5iT*%15)%C2%93%C3%89H%C2%89DB%C3%928%0E%14c%13Xb%20%C2%80e%7C%C3%B8%04%C2%B8w%C3%89D%C2%B1%11%3Eb%C2%87B%C3%A6%C2%BF%C2%AA%C3%9At%23Q%C2%A5%C2%A4%C3%B4%C3%8A%3C%C2%BD%C2%A5%C3%B8b%C2%93%5C.'%C3%85b%C2%B1%06na%12%C3%BA%C2%9F%0E%06%C2%83%C3%83%3E%C2%9F%C2%8Fv%C2%BB%C3%9DM%C3%9D%C3%9D%C3%9D%C2%B4%C3%93%C3%A9%1Cn%3E%5Eb%C2%99%C3%91%15%C3%AA%C3%AB%C2%A6%7F%C2%98o%C3%BD%C2%98%C2%A0%C2%91%C2%AE!%C3%AD6%23%2F%C3%AE%3B)%03%C2%94%02%C3%87%C2%A9%C2%97%C2%A7N0%C2%A2%04%02l%C3%B7z%0FI%7Bh%26s%7C%12%C3%8C%C3%90n%C3%9Bj%C3%AEx%C2%92%C2%95%C3%AE%C3%98%C2%A5LQs%40%C2%BC%C3%86T%C3%A9%C3%A8%C2%80%03%06%C2%ADZ%C3%8C%C3%8E%1B%C3%95%C2%ADmt%C3%B5%C3%ABVS%C3%9B%C2%9C%C2%9FA%C2%81%C2%BC%C3%91%C2%BB0jL!k%C3%9CNO%C2%A5%C2%9E%C3%A5%C2%A8mm%2F%C3%BC%C3%AB%C3%8Ec%5B%26%C2%BFS%C3%90e%1Dq%C2%B1%C3%BB8%19HOu%C2%95zzM%1B%0Au%C2%A1%7F%C3%84%7C%25%C2%A7%60%C3%91R%12%C2%91H%C3%A3aC%0E%C3%81%C3%9C%C3%87I%C2%97B%C3%AE%08%C3%B9%C2%99%C3%A5%C3%80%7D%17%C2%98%1B%11%1C%C2%AAC%09%C3%A8%C3%86%3F%C3%B2T%C2%94%1A6%C2%A2%C3%93%C3%A9%C3%88X%C2%A0x%2F3%C2%817o%19%1C%26%C3%91%C2%B8%C2%81*%C2%92H%C3%81%C2%83%C2%AC%C3%8DO%C3%91%C3%9C%C2%9D%5Bp%3F.v_CF%C2%B6u%3E%C2%8C%C3%B9%C3%A0%14%C2%B0Y%C2%99%C3%A4%C2%90%08_N%0B%0F%7D%3FMU%C3%AB%0C%01%5E-%C2%B5%C2%BD%C3%9Fmb%C2%B10%C2%B3%C3%A3%C2%B9%13%7Bu%C3%B64S%2C%0E%17g%7Bz%0B%C2%A7%17%16%5C%C2%82%C3%86T%C3%817wy%5E%7B'%C3%A6%0D%06_VVVZ%C3%A3%22%C3%909%C2%A9%C2%AF%C2%AF%C2%AFMHH%00555%C3%A6%C2%B8%C2%81j%C2%9E%0B%5B%0F6%C3%981%0DP%C2%94y%C3%B7%C3%AC%24%05%0B%C3%B4%C3%88%C2%A0%5E%C2%9C%C3%80r%C3%89%C2%BA%3AI%C3%BA%C2%B0%C3%9E%C3%BCe!%C2%84a%C2%8E%C2%A7%C3%82A%C3%BD%C2%B6%C3%8B%C3%AE5%C2%BA%2C%C3%B9Z%40%1E%3Db%26%7B%3F%C2%9Bh%C2%9Af%04s_%C2%A4%C3%80%C2%B3%C2%A5%0D5%C2%84F%C2%A3%C3%B1FON%C3%81%C2%9D%C2%98%C2%A0%5Eo%C3%8E7%C2%A36%C3%A4R%C3%9F%C2%A0%15%25%C3%86X%C3%80l6%C3%9B%C3%8DM!%C2%96%1A%C3%95%C3%AF%C2%A7Pb%C2%8D%C2%A6%C2%8F%C2%88v*%C3%89%25%12%C3%8Bz%C2%93%25%23%C3%AD%C3%A5g%C3%94%C2%86%C3%B23-%C2%B1%C2%9E%C3%AB%C3%A7%C3%A0%C2%A0%0F%14a%C2%B0%C2%8F'%1F%C2%89%C3%B0%16n%C2%9D%0E%05%7F%C3%ABd%C2%89h%0D%1E%C2%B4%148Vw%C2%AFl%1E%26%C3%84%C3%AB%C3%9E%C3%B1sw%C2%99%C2%A9a%C2%AE%C3%B3%C3%BC%C2%9B%C3%93%09'%C3%88u%C2%A8%C3%85%C3%B6%C2%87%17%C3%A8%C3%92%C2%B1%C2%A1U%3B%C3%99%C2%A8%C3%AE%C3%9B7%C3%B8%C2%B5%16e%C3%A3%C3%87%C2%BE%C3%A9j%04%C3%84G%C3%86%C3%A7%12%2C%02%124%C3%907%C2%A4%20%C2%97%C3%88%C2%80%C3%B9%C2%B8%14%C3%B0%C3%96yF%C3%AE%C3%80%C2%95%C3%B4%C2%AD%09eg%C2%A6j%C3%93a%C2%B9%C2%88%5C%C2%8B%C2%A5%C3%B3%5CN%C2%ACQ%C3%B4%11%C3%9C%C3%BD%C3%90jJb9%C2%BF%C2%AD%C2%99XW%C2%B8%C2%A7Bu%601%C2%A6%C3%90%C2%85%15%C2%BA%1F%122%C2%8E%C3%90%C3%B7%11%07%C2%9A%C3%87%C3%A5M%C2%9Eh%C2%A9%0C%20%C2%B0%C3%8Bp%C3%AC%16%C3%88PSp%C2%BC%C3%87%C2%96%C3%AE%3C%7F%090%00%C2%92%C3%B8%C2%B8%C3%83%10%C2%9F%C2%A0%C3%99%00%00%00%00IEND%C2%AEB%60%C2%82";
var image18 = group48.add("image", undefined, File.decode(image18_imgString), {name: "image18"});

var StringerButton = group48.add("button", undefined, undefined, {name: "StringerButton"});
    StringerButton.text = "Stringer";
    StringerButton.preferredSize.width = 210;

// GROUP49
// =======
var group49 = ButtonGroup13.add("group", undefined, {name: "group49"});
    group49.orientation = "row";
    group49.alignChildren = ["left","center"];
    group49.spacing = 10;
    group49.margins = [50,0,0,0];

var StringExistingPointsCheckbox = group49.add("checkbox", undefined, undefined, {name: "StringExistingPointsCheckbox"});
    StringExistingPointsCheckbox.text = "Existing Points";

var StringerBezierCheck = group49.add("checkbox", undefined, undefined, {name: "StringerBezierCheck"});
    StringerBezierCheck.text = "Bezier";

var StringerClosedCheck = group49.add("checkbox", undefined, undefined, {name: "StringerClosedCheck"});
    StringerClosedCheck.text = "Closed";

// GROUP50
// =======
var group50 = ButtonGroup13.add("group", undefined, {name: "group50"});
    group50.orientation = "row";
    group50.alignChildren = ["left","center"];
    group50.spacing = 10;
    group50.margins = [50,0,0,0];

// STRINGERPOINTSGROUP
// ===================
var StringerPointsGroup = group50.add("group", undefined, {name: "StringerPointsGroup"});
    StringerPointsGroup.orientation = "row";
    StringerPointsGroup.alignChildren = ["left","center"];
    StringerPointsGroup.spacing = 10;
    StringerPointsGroup.margins = 0;

var statictext25 = StringerPointsGroup.add("statictext", undefined, undefined, {name: "statictext25"});
    statictext25.text = "Points";

var StringerNumberTextbox = StringerPointsGroup.add('edittext {properties: {name: "StringerNumberTextbox"}}');
    StringerNumberTextbox.text = "4";
    StringerNumberTextbox.preferredSize.width = 30;

// BUTTONGROUP13
// =============
var divider18 = ButtonGroup13.add("panel", undefined, undefined, {name: "divider18"});
    divider18.alignment = "fill";

// BUTTONGROUP14
// =============
var ButtonGroup14 = tab3.add("group", undefined, {name: "ButtonGroup14"});
    ButtonGroup14.orientation = "column";
    ButtonGroup14.alignChildren = ["left","center"];
    ButtonGroup14.spacing = 0;
    ButtonGroup14.margins = [0,3,0,0];

// GROUP51
// =======
var group51 = ButtonGroup14.add("group", undefined, {name: "group51"});
    group51.orientation = "row";
    group51.alignChildren = ["left","center"];
    group51.spacing = 10;
    group51.margins = 0;

var image19_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%02%C2%99IDATx%C3%9A%C3%AC%C2%98%3D%C2%88%1AA%14%C3%87W%C3%9D%C2%8B%1F%20~%04%25%C2%A7%C2%91H%22ZhaP%C2%8B%14%C2%82%C2%BD%5E%C2%97%C3%86%20xir%C2%A0E%20w%7D%C3%B6%C3%BA%C3%83N%C3%A1%C2%AE%C3%91BrM*%13%C2%9B4Z%25%C2%A0'!%01%C3%AD%22%C3%82%19%13l%14%3C6%C2%9A(f%C3%BF%C2%8B%1B6%C2%87w%C3%AEr%26k%C2%B1%0F%C2%96%C2%9D7%C3%A3%C2%9B%C3%B9%C3%B9%C3%A6%C3%8D%C3%9B%C3%87(%08F(%C2%8Ar2%C2%AF%5DBz)0%2C%1D%C3%85%02%C3%A8%C3%A3t%3A%C3%BDA%C3%93tc2%C2%99%C3%B4%C3%BE7%C2%89Z%C2%AD%C2%B6%C3%A9t%C2%BA%00I%C2%92ZF%7DH%C3%82C%00*%16%C2%8BO%3A%C2%9D%C3%8EH*%179%C2%9DN%7D%22%C2%91x%C3%85%C2%80%C3%AD*%C3%91%01%0FI%09%04%C3%81%C3%BA%C3%A0%40%C2%9B%C2%85%C2%92b%C3%8B%C2%96%09%C3%87%C2%A1%246Pd(%19J%C2%86%12%23%C2%A9T%C3%8A%C3%96%C3%ADv%C2%A9%C3%81%60p%C3%9C%C3%AF%C3%B7%C2%8F%C2%A0%C3%BFs%C2%A8%C3%B7w%C3%AF%C3%AF%7Fv%C2%B8%C2%8E8%C2%BD%C3%99l%3E%C2%9B%C3%8F%C3%A7g%C3%B9%7C%3E%00%3D%C2%93%C3%89%1C%C3%9B%C3%AD%C3%B6%C2%98V%C2%AB%C2%B5Y%2C%C2%96%08%C3%B4H%24%C2%A2%C3%87%18%C3%AC%60%C2%BFV%C2%A83%C3%87%03%C3%AA%1E%C2%B9%15%C2%BF%C2%ADRE%C2%96%C2%8D%03%C2%8C%C3%B9~m%C2%B7%C3%9B%C3%ADS%C2%8DF%C2%B3%C3%93j%C2%B5N%C2%A0'%C2%93I7%C3%86a%07%7B%C3%8C%C2%B3%16(L%C2%B4%C2%AD%22ch%7F%18%C3%93%C2%87%C3%9CV%19%0C%06v%7B%7C%3E%C2%9F%C3%9Bl6%C2%B3%1E%19%C2%8F%C3%87%C3%AC%C2%A7*%C2%9B%C3%8D%C2%BE%05X%C2%BD%5E%C3%BF%C3%86%C2%B7%C3%83%3CB%C3%80%C2%94b%C2%80%1E%7F%3F%7F%C2%83v%3A%C2%9D%C2%8Ea%C2%AB%C3%90%0E%06%C2%83%C3%BB.%C2%97%C3%8B%C3%8D%C2%B7%C3%8B%C3%A5r%3D%C2%AF%C3%97%7B%C2%827t%C3%98%C2%89%01S%C2%8A%05%C2%82%60Ax%C2%82-%C2%80%0A%C2%85%C2%BDZ%C2%AD%C3%96%C3%A0%C3%86*%C2%95%C3%8A%0E%C3%A2%0D%0F%3F%C3%98%C3%85%C2%80%C2%91b%C2%81V%C2%89%C3%9F%C3%AF%C2%8F%19%C2%8DF6%C3%B8C%C2%A1%10%60%7B%7C%C2%B0%C3%97w%1C%C3%84%23%C2%8D%C3%AE%C3%A5%02%C2%8C%08%C2%9E%7F%C2%A1%04y%C2%AA%C3%B3%C3%AB%C3%A7%C2%9F%7F%C3%AE%C3%9C%C2%BA%15%10s%C2%9CM%26%C3%93%1E%C2%BCwe%C3%9D%C3%84%C2%9B%C2%8F%C2%BF%C3%8EJ(%C2%B11%20T%C2%84%C3%AE%C3%80%C2%951u%130%C2%A6%C2%8A%C2%B4%C3%9D%24%24%C2%AE%3D%7DB%C3%80%C2%A2%C3%91h%C2%9C%C3%89%C3%A0%C2%A3%C3%99l6%C3%B2x%3Cqd%C3%B5p8%C3%BC%02c%5CJ%10%1B%C2%A3%2B%C3%B3%C3%94e0%C2%AE%C2%9FI%0B%C2%A7%C3%83%C3%A1%C2%B0%C2%81%C3%ACm%C2%B5Z%C3%B5%C3%A5r%C3%B9%C2%90%C2%A9%C3%B5%2F%C2%B8TQ*%C2%95%0E%C2%B8%C2%94%20%C3%B6%C3%90%C2%90B%C2%B6%03%13%C3%A5%C2%AD%C3%B6%C2%BFj%C3%B8j%C2%B5%3ABP_%C3%BAiu%C2%99%C3%BD%3B%C3%BA%C3%A2%00%C3%AF%C2%A7%C3%BD%C2%AFU!%C3%AB%C2%91B%C3%A3D%C3%A8%C2%84%C3%AB%C2%B0%C2%95%C3%AB)%19J%C2%86%C2%92%C2%A16%1D%C2%8A%C3%A4%C3%AE%C2%876%01f%C3%81A%C2%B3%C2%9E%C3%82%C2%85%15%C3%AE%C2%87%C2%A4%04%C3%82%C3%BA%C3%A0%40%7B%23o%C3%B2%14%C3%A8%5C%C2%80%3DG5%2B%C2%91%C2%A3%C2%86%C3%8C%C3%B3%C2%89X%C3%9Cy%C3%BE%16%60%00'%C3%99l%C3%BA%17%C2%A1%20%10%00%00%00%00IEND%C2%AEB%60%C2%82";
var image19 = group51.add("image", undefined, File.decode(image19_imgString), {name: "image19"});

var TextGreeblerButton = group51.add("button", undefined, undefined, {name: "TextGreeblerButton"});
    TextGreeblerButton.text = "Text Greebler";
    TextGreeblerButton.preferredSize.width = 210;

// GROUP52
// =======
var group52 = ButtonGroup14.add("group", undefined, {name: "group52"});
    group52.orientation = "row";
    group52.alignChildren = ["left","center"];
    group52.spacing = 10;
    group52.margins = [50,0,0,0];

var statictext26 = group52.add("statictext", undefined, undefined, {name: "statictext26"});
    statictext26.text = "Num";

var TextGreeblerInstancesTextbox = group52.add('edittext {properties: {name: "TextGreeblerInstancesTextbox"}}');
    TextGreeblerInstancesTextbox.text = "1";
    TextGreeblerInstancesTextbox.preferredSize.width = 30;

var TextGreeblerUpperButton = group52.add("button", undefined, undefined, {name: "TextGreeblerUpperButton"});
    TextGreeblerUpperButton.text = "AZ";
    TextGreeblerUpperButton.preferredSize.width = 35;

var TextGreeblerLowerButton = group52.add("button", undefined, undefined, {name: "TextGreeblerLowerButton"});
    TextGreeblerLowerButton.text = "az";
    TextGreeblerLowerButton.preferredSize.width = 35;

var TextGreeblerNumberButton = group52.add("button", undefined, undefined, {name: "TextGreeblerNumberButton"});
    TextGreeblerNumberButton.text = "09";
    TextGreeblerNumberButton.preferredSize.width = 35;

// GROUP53
// =======
var group53 = ButtonGroup14.add("group", undefined, {name: "group53"});
    group53.orientation = "row";
    group53.alignChildren = ["left","center"];
    group53.spacing = 10;
    group53.margins = [50,8,0,6];

var TextGreeblerInputTextbox = group53.add('edittext {properties: {name: "TextGreeblerInputTextbox", multiline: true}}');
    TextGreeblerInputTextbox.preferredSize.width = 205;
    TextGreeblerInputTextbox.preferredSize.height = 35;

// BUTTONGROUP14
// =============
var divider19 = ButtonGroup14.add("panel", undefined, undefined, {name: "divider19"});
    divider19.alignment = "fill";

// BUTTONGROUP7
// ============
var ButtonGroup7 = tab3.add("group", undefined, {name: "ButtonGroup7"});
    ButtonGroup7.orientation = "column";
    ButtonGroup7.alignChildren = ["left","center"];
    ButtonGroup7.spacing = 0;
    ButtonGroup7.margins = 0;

// GROUP54
// =======
var group54 = ButtonGroup7.add("group", undefined, {name: "group54"});
    group54.orientation = "row";
    group54.alignChildren = ["left","center"];
    group54.spacing = 10;
    group54.margins = 0;

var image20_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03%C2%B6IDATx%C3%9A%C3%8C%C2%98_HSQ%1C%C3%87%C2%8F%C3%A3%C3%AA%C3%94t%C2%94%14%C2%B6%C2%B9%C2%87Q2%C2%B2%3FT%5B%C2%A2%2F%C3%81%60%C2%95%10-h!%C2%91%C3%B8%20%11%5B02a%12DB%06R%11-%C3%BA%C3%B3%C3%92%C3%AEKE%C3%A2%C2%8B%C2%B1%C2%97%C3%ADE%C3%8BZ%C3%90%C2%83%C2%B3%C2%B6%C2%A8%C3%80l%C3%BD%1Bf%1B%C3%A8j%C3%92%C3%A6%C3%A6%C2%B5Q%C2%9D%C3%9Fm%C3%B7v%C3%9B%C3%A6%C3%BE%C3%9Eu%C3%BD%C3%81%C3%A1%C2%9Es%C3%AEv%C3%AE%C3%A7%C3%BE%C2%BE%C2%BF%C3%B3%3B%C3%B7%C2%9C2%C2%84%C2%AD%C2%BF%C2%BF_%C2%81%2F%5DHx%C2%BB%C2%83Y%7Ce%09%C2%A0%17%C3%B1x%3C%16%C2%8DF%C3%9D%14E%C3%B9%C3%BF7%C2%89X%2C%C2%96UWW%C2%AB%09%C2%82%C2%A8%C3%82%C3%8D%C2%9D%04x%08%C2%80%06%07%07%3B%7C%3E_X(%17)%14%C2%8A%C3%9A%C3%8E%C3%8E%C3%8E!%0C%C3%96%25%C2%82%0E%C3%B0%C2%90%C2%90%40%60%C3%B0%7C%C3%A0%C2%80%3Ax%0Aq%25%C2%B3Z%C2%AD%C3%8F%0B%1D%C3%98h4%C3%AE*%06%C2%8C%C3%A1%20%C3%92%C3%9D4%18%0Cy%0FH%C2%92d%C3%86%C3%BB8v%0DR%C2%A9%C3%B4%C2%9F%C2%81%03%C2%81%00%C2%89%C3%BBS%C3%BEH%14%C3%B2F%3F%C2%BF%C2%87%C3%91%C3%BC%C3%80E%C2%BA%C2%BE%C2%BA%C3%AF%0C%12Ij%C2%B3%C3%BE%07%C2%80FFF%3Al6%C2%9B%17%C3%9Az%C2%BD%5E%C3%99%C3%96%C3%966%04%C3%AF%C2%93%17%C2%94k%7C%1C%17WJ%C2%BFf%C3%82%C2%8D%C3%96%C2%B8%C3%BE%C2%AA%5Cw%C3%B9BN%2F%C3%83%001u%0C%C2%95%C3%B6w%22%C2%B4%02-%C2%A3%C2%A7ZZ%5B%C3%A9B%C2%B9%C2%9E%C2%A1%C3%B2%C2%A6M%C2%ACL%C3%89%C3%B2%C3%A5j%20%19W%C2%BE%C2%82%C2%A0%C3%80%C2%82'N%C2%A2%C3%98%C2%831%1A%C2%A8%C3%9EnC%C2%84%C2%BC%C2%81%C2%AE%C3%A7*%197%C2%A8!%C2%86%C2%B8%C2%92A_%C3%9EP7%C2%AE%5DG%C2%870%10%C3%A3%C2%9D%C2%BE%C3%9D%1At%C3%BFW%C2%9C%C2%BD%C3%9F%C3%9D%C3%93%C2%83%C3%8B%C2%A9%C2%9C%C2%A0%12%C2%B3%C2%8C%2CZ%3Ex%60p%C3%AA%3D%C3%AB%C2%A9%01%C3%AC%C2%A9K%C3%98S%C2%82%C3%86%14%C3%98%C3%9A%5B7%C3%91%C2%8F7Shir%0A%7D%3B%7D%16U%C2%B66%23I%C2%B7I8(nJ8%7Cw%C2%88%C2%96%C2%90rM%20%C3%A7%C3%A7i%C3%A4k%C2%90%C3%A1I%C3%90BO%C2%84t%C2%81%5CRO%C3%A5cZ%C2%AD%C3%96%C2%82%0B%0A%C2%85BN%C2%8F%C3%87cg%00%1F%C3%8A7%18%C2%94%15%C3%A2%C2%B4%C3%8B%C2%84w%C2%89%22%C3%B7%C3%8C%7C%24%C3%B3N%09%60%C2%B1-%5BQ%C3%B8%C3%B6%3DZ%C2%BE%C2%83%C3%8B%C3%88g2%C2%99t%C3%A0-%C2%95J%C2%A5%C3%A3%02.%C2%8D%3E%C2%AEE3~%C3%BE%3DU%C2%B5WK%C2%97%5C%C2%B26.%16%5C%C2%B50%C2%80%C2%9F%C2%8E%C3%A8%C3%95%C3%81%C2%85(%C2%AA%7F%C3%B7%015%C2%BC%C2%9ED%C2%92%C3%99%C2%B9%C3%BC%C2%A1%C2%B2-%C2%AE%C3%8B%C2%99%C3%99l%C3%96Y%2C%16%7B2%20%C2%96%2F%C2%BC%5E.7%7C%C3%99%C2%B6%19y%C3%B4%3A%C2%A4%C2%B2%C3%993%C2%82%11%C2%99%3E%3F%60e%C3%A7%C3%A4%C2%98%C2%AC%40J%C2%A5%C3%B2%1C%C2%BE%22.%18c%00!%19%7B%C2%82%C2%9Ap%C3%89f%C2%BC%C2%AD%7D%00%C3%A2%C3%B5z%C3%8F'%C3%80t%C3%85%C2%8C%C3%85%C3%AB%C2%82%C3%8C%17%18%C3%81w%C3%A2%030%C2%90%C2%90%2Beb%C3%8A%C2%93%C2%82x%C2%8A%2F%C2%8F%C2%95%C3%AC%7B%C2%AA%18%C2%B0%14%C3%B9%2C%C3%ABd%C3%AA%C3%AD%C3%A2J5%C3%94gg%C2%83j%26%23%C3%83%C3%B5%25%C2%B5%C3%A86%C3%8F%C3%B9%C3%9D%C2%85Hi%3Dv%5C%C2%B9q%C3%B4Q%C3%8A%C2%8E)%C3%9D%C2%98)P%00%C3%84%2C%09%C2%A2%C3%88%02%C3%9D%C3%97X!V3)%0C%17v%00%C2%8DF%23koo%C2%B7%C3%A2%C2%BD%C2%9A%C2%94%C3%A9%C3%83%7B%C3%88%C3%80%C3%B0%C3%B0%C2%B0%C3%91%C3%A9t%C3%BA%190%00B-%C3%8DGW%7D%0D%C3%91%C3%8939-r%C3%87%2C%3A%C3%901%C3%94%C2%81X%2C%C3%B6%C2%B6%C2%B7%C2%B7%C2%97%C2%95%C3%A7%0A6%C3%A8%C3%87Pl%60%C2%83%C2%87%00%C3%A8%C3%95%C3%BE%7Dt%3B%0D%18%C2%BF%C2%B3%2F%12%C2%89x3%C2%B5%19c%40%00%C2%8CX%C2%A4%C3%A8%25%C2%A7%20%C2%A8%C3%86%C2%A7%C3%A3%C2%BC%06%3F%C2%80%01P%C3%9D%C3%B4Lig_MM%C2%8D2S%3B%C3%99%C3%80C%C3%A5%14U%3A%C3%B9p%C3%9C8%20%C3%90%C2%B9%5B%7D%08t%C2%87%C3%83q%C2%95%C3%97%C2%8F%3C%C2%98%C2%A2%C3%8Be%C3%9F%C3%84%3D.%C2%94%1F%C2%97%C2%AC9(%C2%9F1Y(8%1FbW%C3%BB%3F9%C3%83%C3%8Dg%2C%C3%A5%3Af%C2%82%23J%C3%87%14%1CX%C3%81%C3%B9%C2%90%C2%90%C2%BBbx%3Ep%40%7DE%C2%9E%C3%A4%C2%95q%C3%8E%3CaW%C2%B9C%20G%C3%8DCx1g%C2%9E%C2%BF%05%18%00a%0D%C3%AD%C3%B2%24%15%C3%A2%22%00%00%00%00IEND%C2%AEB%60%C2%82";
var image20 = group54.add("image", undefined, File.decode(image20_imgString), {name: "image20"});

var ManagerButton = group54.add("button", undefined, undefined, {name: "ManagerButton"});
    ManagerButton.text = "Manager";
    ManagerButton.preferredSize.width = 210;

// BUTTONGROUP7
// ============
var divider20 = ButtonGroup7.add("panel", undefined, undefined, {name: "divider20"});
    divider20.alignment = "fill";

// BUTTONGROUP8
// ============
var ButtonGroup8 = tab3.add("group", undefined, {name: "ButtonGroup8"});
    ButtonGroup8.orientation = "column";
    ButtonGroup8.alignChildren = ["left","center"];
    ButtonGroup8.spacing = 0;
    ButtonGroup8.margins = 0;

// GROUP55
// =======
var group55 = ButtonGroup8.add("group", undefined, {name: "group55"});
    group55.orientation = "row";
    group55.alignChildren = ["left","center"];
    group55.spacing = 10;
    group55.margins = 0;

var image21_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%06.IDATx%C3%9A%C3%8C%C2%98%7BLSW%1C%C3%87OoK%C2%81%C2%96%C2%96JAz%5B%15%C3%8A%C2%B0RP%C3%86%C2%ACH%14%0D%5D%C3%B6%07n%C2%83%C3%A1%C2%92e%0B%C3%8Cll1%25s.%1B%C2%94dK%C2%B6%C3%84%C2%92%C2%98e%26TL6L%C2%B8%C2%99%0B%23D%C3%A2%C2%B2%C3%A9%C2%B2%C3%96%C3%8C%C3%84%C2%99%5D%C2%82%C2%8Fi%C2%BC%C3%B8%C2%8A%C2%B1%C3%AB%C2%8A%C3%A0x%C2%B4%C3%88%C2%A3%C2%A5%C2%97B%1F%C2%94%C3%AE%C2%9C%3B%C3%8BJ)%C3%98%02%C2%86%C3%BD%C2%92%C2%9B%7B%C3%AE%C2%A3%C3%A7%7Cz%C3%8E%C3%AF%C3%B7%C3%BB%C3%BE%C3%AEa%01h%3A%C2%9D.%13%C2%9E%C2%AA%C3%81%C3%9A%5B%2Bd%C3%A9c%3D%01%C2%BA5333%3D55Ey%3C%C2%9E!%C3%B4499Y%C3%8D%C3%A5r%15%5E%C2%AF%C3%97%3C11A%3EK%C2%92%C3%B8%C3%B8x)%C2%8F%C3%87Sq8%C2%9CDx%C3%B9%02%07%C3%8D%10%02joo%C2%AF%C3%AA%C3%AB%C3%AB%C2%A3C%C3%9E%25%0E%1D%3A%C2%A4%11%C2%8B%C3%85%C2%95%C3%8D%C3%8D%C3%8D%C3%84%C2%B3%C2%9E%C2%A2%C3%8C%C3%8CL%C3%81%C2%81%03%07NC%C2%B0j%0C%C3%9D%403%14%06%C3%84%C3%98%C3%A0%C3%A0%20%C2%85a%C2%98%20%C3%9A%C2%8E%C3%97I%C3%B2%04%C3%9B_n(_%0E%14%1A%1Fq%C2%A06%C2%9A)%10%5C%C2%B2%C2%A6T%C2%89*%C3%B8%C3%92m%C2%8F%C3%9B%C3%AA%C2%88%C2%A1%C3%93%C3%82%C3%B2c%C2%95Ib%C2%B9%C2%86%C3%85%C3%82%04%C3%AAw%3A4%C3%83%C2%BDWt%0F%C2%BA%C2%BE%C2%A1b%01%0BrpBo%C2%BE%C2%99%C2%94%C3%9C%12l%17%C3%84'%12'%00xj%C2%A7%C3%8A%C2%BD%C2%87U%C3%A9%C3%B2b%1D%C3%86%C2%8E%C3%83%C2%83%C3%B7P%1B%C3%8FV%C2%B7%C2%A4m*%C2%A4%1ER%1D%0D%03%C2%A6%0BC%C2%B1%C3%80a%2B%C3%B5%058%C2%B0%26%14(%C3%948%5C%C2%BEJ%C2%A6%2C-%C2%8B%C2%B5Ol5%C2%9DU%C2%96%C3%A2%05%0A%C3%9C%C2%BD%C3%A2~%C3%A6-%C3%9F%0F%C2%93%135%C2%A1%3E%05O%C3%B8R%3FV%C2%AB%C3%95%C3%92%C3%8DR%C2%9F%00%17%C3%93%60%C2%BD%C3%90%07%5C%1E6%18%1C%C3%A7%C2%AE.T%C3%AD%C2%A8m%C2%9E%0FUD%C2%80%C2%AA%C2%AE%C2%AEVegg%C2%AB%C2%85B%C2%A1%0A%C3%A6%17%C2%85%C3%95%0Eh%C2%9B3%0E%C3%9C%C3%AA%C3%A3C%C2%A8%C3%95%C2%99xN%C2%B8%C3%93%06%C3%9B%C3%B4%C2%88%C3%85%C3%8A%C2%AC%2F%C2%86%01%C2%ADV%5B%C2%8E%C3%A3x%09%C2%9F%C3%8FW%C3%8D%C3%8E%C3%8EN%C3%9A%C3%ADv%C3%92d2%11'O%C2%9E%24%C2%8B%C3%9F%22t%C3%B1%C2%BC%C2%84E%C3%BD%C3%86%C3%A7vZW%04%C2%85%22%06%C2%9DE%C3%BC%19%C2%90%C2%95%C2%A2%C2%A46%C2%A5%C3%BA%05p6%00%C2%84)%19%1F%1F%C2%A7%C2%8CF%C3%A3q%C2%92%24%C3%A7E%C3%92%C2%953%1A%5D%C3%BEK%C2%9F%C2%92)%C2%B2%02m%C2%A8%C3%83%C3%8Fx%5D%C3%94%C3%A0%C2%9F%17%C3%B5%3D7%C3%9B%C3%8D%2B%C2%82B%C2%B6%C3%B3%C2%B9I%C3%86%3F%26%5D~%C2%94%3CI%C2%98%C3%BE%15G%C2%8E%1C%C2%A9_%C2%AA%C2%93%C2%BB%C2%97%C2%8E%C2%910qR%C2%8A%5D%07%2B%13%C2%92%C3%92%C3%94%C3%B6%C2%A1%7B%04%C2%BA%17%7C%C2%8E%C3%B2%C3%9F~%C2%BEP%C3%A7%0E%04%C2%86.L%C3%91D%C2%B8%C2%9B%3C%15%C3%AAFO%12sv9%26)%C3%89%C2%AC%C2%89*((%C2%88%C3%AA%C3%9F%C3%99m%C3%B7%C3%A9%C3%AB%C3%A7j%C2%91%1C%C3%8DI%C3%92%C2%BB%02%C2%91T%2BJ%C2%AD%13%C2%B3%C3%99jt%C3%8De%C2%B1p%C2%94%0B%C3%B7%26%C3%B2%C2%8D%1F%C2%8DX%C3%B5%C3%97%C3%9CS%C3%B4S%C2%A1%C2%AC%16%C2%B2%26%C3%94%C2%A7%24%5B%C3%A2%C3%B1%C3%A58%C3%AA%C2%AE%04%C2%9E%C3%A0Kqz%C2%A5%22%C2%8E%C2%AB%C2%89%C3%B4%1Cgs%C3%8A%C3%8EH6%C2%94%C3%B4%C3%B8%7C%1D%2F%0E%C3%B6%12KB%C2%85%C3%8B%C2%82jK%C3%85%C2%B2%C2%A0%C2%BE%5B%2Fk%14b%C2%98j%C2%A9w%C3%98%C2%80%25%40%C3%90%C2%BF%C3%8B%C3%A4%20%1Cl%1E%C2%94%C3%A2%C2%B3%2F%C3%BE%C2%8B%3E%C3%93%03%2B%08%C3%8C%C2%ACIQ5%0F*%7D%C3%9F%C2%ABs%C3%9A'%C3%88%C3%89%25%C3%80%C2%B93%C3%94%C2%9AC!%C3%9Bm%C3%AB%07q~%3F%C2%B8%C3%A1%C2%9EZq%C3%A7%C3%8E%C3%B440%C2%B6i%23%3C6%00%C2%9B%22%1B%C2%9465%C2%838%C2%B7'v%C2%A8%C2%9B%C3%AB%C2%A5%20%7Ft%18%C2%BC%1EpT%C3%9A%C2%8B%C2%8A%14%C2%B0%C2%9C%C2%88%1A%02%C3%89%C2%8E%0A%C3%9A%3D%C2%80I'!%0C2%C3%89_%16%201%C3%B7%C2%80%C2%BC%C3%9F%C3%88%C2%A8%C2%80%16%40%0D_8%C3%8FD_%3F%3CF%C3%9D.Aa%C2%96%5C%23%12%C2%89%18iimm%C2%8D%C2%B8%C2%94%C2%B0%3AUK%C2%A5RUPvh%C2%9A%26E%C3%9Dw%C3%80%C2%B6%C3%8B%C3%97%C2%80pxd%C3%A5%C3%8Bg%C3%BE%C3%AA%C3%A8%C3%9C%C3%80(%0D%3B%2B*%C3%A8%C3%A2%C3%A2%C3%A2%C2%96%C2%A2%C2%A2%C2%A2F%C2%A5R%C3%99y%C3%AA%C3%94)%C3%BD%C3%96%C2%AD%5B%C3%B1%C2%9C%C2%9C%1CUZZ%C2%9A%1A%C3%95%C3%95p%26%C3%8DN%C2%A7%C2%93%C3%AA%C3%AE%C3%AE%C3%96%07%C3%81%C3%AFn%C3%8Cn%14%C2%B2%C3%99QE%C3%AE%C3%B4%C3%AC%2C%C2%BD%24T%C2%A4%C3%8A%C3%93%C3%ADv%03%C2%87%C3%83Addd%40%09%C3%942%1A%07%C2%AF%C2%8D%03%03%03F%C2%83%C3%81Po6%C2%9B%17t%C2%9A%C3%9Fo%C2%A9%C3%BFQ%C2%B2%C2%B1%7CgBb%1D%0A%C3%BDH0%C3%9E%40%C3%80JN%C2%BB%C3%B4%C3%AF%3D%1E%24%C2%97%C2%84B%C3%99%C3%96%C2%97%10%C3%8F8%C2%A7T%C2%A90%C2%8F*%C2%B2%05H%C2%90%5D.%C2%97%C3%AA%C3%91%C2%A3Gz%08c%C3%8D%C3%8B%C3%8B%C3%93%26%26%26*%C3%86%C3%86%C3%86%0C%C2%91%C2%80%C2%82%C3%B6%C2%86%C2%AD%C3%9F%00%C2%93(%19%C2%9ED%C3%BD%20%40%2F%C2%964%17ut%C3%B3%C2%9E%5D%0C%14%C2%B0%C3%99h%C2%8B%C3%85b%C2%80%C2%BE%C2%A2mhh%08%C3%95%3E%12~%C2%96i%C3%90%C2%92%C3%82%12%C3%86%C3%98%C3%96%C3%96F%2C%06%C2%87d%04%0D%0E%C3%A5%C3%86%C2%88%C3%A4%C3%86%0B%02%C2%93_%3B%C3%86%C2%88%C3%AFi%C3%87PL%C3%91%C2%87%C2%A2%C2%84%C2%81%C3%B3y%C2%A9%C2%87%3B%C3%B2%C3%8D%C2%91%C2%B4%0FB%110%C3%92%C2%8Ceeeu%C2%B5%C2%B5%C2%B5%C2%BF%40%C3%B8%C3%A3z%C2%BD%C3%9E%C2%B0%C3%98%20%08%02%1E%C3%B5%C3%8F%C2%BC%C3%B2D%25%0C%3C%C3%AAQd%16%16%16%C3%AA%C2%9A%C2%9A%C2%9A%C3%8A%C2%BA%C2%BA%C2%BA%C3%B4g%C3%8F%C2%9EeJ%C2%95%C3%BC%13%C3%8D%C3%A5I9%C3%8AJ%C2%8F%C3%8DFR%C3%95U%C3%84%C2%B2%C2%A3%2F%C2%9A%C3%8As%C3%81w6%C2%8C%C2%B8%C2%ABW%C2%AFVA%C2%AB%2C--%3D%C2%9D%C2%BF%C2%BB%C3%98Hn%C3%8E%C3%85%C3%BD%C3%89%22%26hx%C2%99rE%C3%B1%C3%85%C3%8E%C3%B2%C2%91K%17u%C2%A1%C3%91%1D5%C2%94%C2%AE%C3%A8%C3%A0%5C%C3%B4%C3%9D%1F%C3%AF%C2%B5z%C2%A3%C3%BCg%C3%88%C2%A7%C2%82K%C2%BA%C2%AF%C3%AA%C3%AD%C2%96%C3%97%C3%86l%C3%B8M6%06%C3%BA%C2%93%C2%84%C3%BF~%C2%9D%C3%84qq%C3%B1%C2%9E%12%C3%A8%C3%ACGkb%C2%86*%C2%97%C3%AF%C2%99%C3%93%C2%BE%C2%BC%149%C3%91%0En%C3%84%C2%A4%7DhI%3D%C3%B5%C2%9F%0F%C3%89%C3%81%2C%C2%BE%C3%A3%C3%B1%10%C3%88%C2%B1%C2%8F%C2%82NY%06%C3%B0b%C3%AC%C2%95i%C3%9Fj%18%C2%9A%C2%A1a%1E%1FdM%C3%98%01%17%C3%AA%C3%A8%C2%9AC%05f%7CLz%40%20%C2%A6u%C2%A9%0B%C3%AE%C3%87%0Ce%C3%A8%C2%BD%5C%13%C3%AAS%207)%C3%A6%22%C3%AF%C2%8F%C3%BD%C2%AF%C3%94%C2%A3%C3%88%13n%7B%C2%BE%C2%8E%C3%85f%0B%02~%3F%3D%C3%9D%C3%BFw%C2%87%C3%A5DcGLPh%7F%C2%88q%C3%B4%C3%AB%C3%9F%C3%8E%C2%8F%C2%BE%C3%9C%C3%A5U%C2%9Ew%3F%C3%B9%C3%90%C2%90%5C%C2%B0%C2%9D%C3%8C%C3%BA%C3%A0p%C2%99%C3%AD%C3%97%C3%B3%C2%9D%C3%96%C2%9F%7F%C2%8Aj%2F%C3%A1%09%C3%87%14%03%C2%85%C2%84%15%C3%AD%0F%C2%85o%07%C3%89d2%C3%B4%C2%9DG%2F%07l%C3%A2v7%7D%C2%AB%C3%A6%C3%BD%C2%A8g%07%C2%8D%C2%8F8%60%C3%93%C3%B2%C2%BF%C3%9C%C3%89c%C2%85%C3%ACy~%C2%8Cv%C2%80%C3%96h%C2%AF%13%15%24w%C2%82%7B%C2%9E%C3%BF%080%00%C3%9F%5D%C3%90%26%C2%AF%C2%98S%C3%A0%00%00%00%00IEND%C2%AEB%60%C2%82";
var image21 = group55.add("image", undefined, File.decode(image21_imgString), {name: "image21"});

var ColorPaletteButton = group55.add("button", undefined, undefined, {name: "ColorPaletteButton"});
    ColorPaletteButton.text = "Color Palette";
    ColorPaletteButton.preferredSize.width = 210;

// BUTTONGROUP8
// ============
var divider21 = ButtonGroup8.add("panel", undefined, undefined, {name: "divider21"});
    divider21.alignment = "fill";

// BUTTONGROUP9
// ============
var ButtonGroup9 = tab3.add("group", undefined, {name: "ButtonGroup9"});
    ButtonGroup9.orientation = "column";
    ButtonGroup9.alignChildren = ["left","center"];
    ButtonGroup9.spacing = 0;
    ButtonGroup9.margins = 0;

// GROUP56
// =======
var group56 = ButtonGroup9.add("group", undefined, {name: "group56"});
    group56.orientation = "row";
    group56.alignChildren = ["left","center"];
    group56.spacing = 10;
    group56.margins = 0;

var image22_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%02%C3%B3IDATx%C3%9Abd%00%C2%82%C2%86%C2%86%06%05%20%C2%95%C3%800%C3%B0%60%01%C3%90-%0F%18%C2%A1%0E%3A%C3%BF%C3%A7%C3%8F%C2%9F%C3%AF%C3%9F%C2%BE%7D%3B%C3%BB%C3%B3%C3%A7%C3%8Fg%C3%B4v%09%3B%3B%C2%BB%14%17%17%C2%971%0B%0B%0B'%C2%90k%C3%88%02%0A!%C2%90%C2%83%C2%96%2CY%12%C3%B5%C3%A0%C3%81%C2%83%C3%8F%03%15D%0A%0A%0A%C2%BC111%C3%8B%C2%80%0EK%60%02%09%C2%80Bh%20%1D%04%02%20%C3%BBA%C3%AE%00%C2%B1%C3%81%C2%8E%1A%C2%88(%C3%83%06%60%C3%AE%60%C2%A2%C2%97%C2%85%C3%BB%C3%B7%C3%AF%C3%B7upp%C3%A0%25F-%C3%9D%1Cekk%5B%C2%B4g%C3%8F%C2%9EM%20%C3%87Q%C3%95Qk%24d%7D%C2%AF%C3%8B%C2%A9%C3%8E%24%C3%87Q...~7o%C3%9E%5C%0E%0C%C2%AD%C3%BA%C2%BBw%C3%AF%16S%C3%8DQ%C3%82%C3%8C%2C%C2%92%7CLL%C3%86%C2%A4%C3%A89%7D%C3%BAt%240w%C3%AF%C3%AF%C3%AE%C3%AE%C3%B6%C3%91%C3%96%C3%96%C2%9Eu%C3%A0%C3%80%C2%81F%25%25%C2%A5%C3%88%C2%8D%1B7%3AP%C3%AC%C2%A8%C3%B9b%C3%92%0E%0A%2C%C2%AC%C3%A0%C2%A0%3F%23%C2%AB%C3%9C%60%C3%89%C3%81ET%C3%BA(--%C3%9D%02%0A!%13%13%C2%93%C3%A2'O%C2%9E48%3A%3An~%C3%BD%C3%BA%C3%B5%01ww%C3%B7b%C2%8A%1C%05r%C2%90%1B%17O%0F%1B%23%C2%A3%24%C2%88%2F%C3%89%C3%8C%C3%A2%C2%B3H%5C%C2%9A%C2%A8h%04%C2%86%C3%8CgX%08IKK%C3%BB%C3%8C%C2%9F%3F%C3%9F%18X%60%C3%B7%01%0BL%C3%89%C2%AC%C2%AC%2C)lzX%C3%B0%19%C3%98%2F%22al%C3%80%C3%8Ei%0C%0B%C2%A1o%C3%BF%C3%BF%C3%9D%C3%A2bdR%C2%83%C3%91%C2%A0%10%C3%BB%C3%BC%C3%AF%1F%C3%81%C3%A2%C3%A4%C3%82%C3%8F%C3%AFgA!%C3%B4%C3%BE%C3%BD%7B%1F333%C3%A3%C3%84%C3%84%C3%84Y%C3%93%C2%A6M3%C3%81%C2%A5%1E%C2%AF%C2%A3%40%0ERceK%C2%83%C3%B1A%0EA%C2%A6A!%26%C3%89LT%C3%AC%C3%8F%02%C3%A2%C2%B3%C2%82%C2%82%C2%82%C3%A9%C3%84(%C3%86%C3%AB(%C3%87%C2%A7%C3%B7A%C2%86%C3%8D%02%C2%85%08%C3%88%01%C3%A8!U%C3%B5%C3%B6%C2%A5%C3%9F%C3%82%C3%8F%1F%C3%B0%C2%86%C3%94S%05%C3%B53%C2%A4%C3%A6T%C2%A2%C3%92T%C3%AE%C3%AB%C3%A7%C2%BD0%C2%87%C3%80B%C3%AA%C3%B8%C2%8Fo%C2%8D%C2%84%1CD.%20%C3%8AQ%40%07%7CV%7Dx%3B%C3%AA%C3%B9%C3%9F%3F%5B%40%7CP%08%C2%85%C2%BCx%C2%BC%C2%99V%05-I%C3%A5%14%2CQ%C3%93*%C2%84%C3%A8%5E%C3%8D%C2%8C%3Aj%C3%94Q%C2%A3%C2%8E%1A%0A%C2%8Eb!%C2%A4%C2%A0%C2%B3%C2%B3Sm%C3%BB%C3%B6%C3%AD%C3%8FA%C2%B5%3D%25U%07U%1D%C2%95%C2%96%C2%96V%1C%1D%1D%C3%BD%5CFF%C2%A6%01T%C3%9BC%2BW%C2%92%00T%1Fe%C2%8E%02%C2%B5sZ%5B%5B%C3%AB%03%03%03K%0E%1D%3A%C2%B4%C3%9C%C3%8F%C3%8F%C2%AF%07%C3%98%C2%B6%067%3F%40%C2%B5%C3%BD%C2%80%C2%A4)%60%5B%C3%A7%19%2F%2F%C2%AF%C3%9A%C3%9C%C2%B9s%C3%93%C3%BC%C3%BD%C3%BD%0F%3C%7D%C3%BAt%0B%C2%A8m%0Dj9%12%C3%9B%23%C2%A1IB%C3%9F%C2%BAu%2B%C2%B8-%0D%C3%AA%7D%C2%80%C2%A2%0E%C3%94r%C3%A4%C3%A6%C3%A6%C2%96%C3%B4%C3%B4%C3%B4%C2%94%1C%C2%B0%C2%84%0E%0A!%60%C2%AF%03%C3%96%C3%BBPKNN%065i7%0Fx%C2%91%C2%A0%C2%AC%C2%AC%C3%9C%C2%BBi%C3%93%C2%A6%12yyy%1F%60%C2%88%C3%AD%07%C3%A5%C3%84AQN%C2%81B%0C%C3%94g%03E%1F%C2%A8h%18%14%C3%A5%14%C2%ACGB%C2%AF%C2%A8%C2%83%3B%0A4%3E4%18Jr%C2%A8%3B%C2%BE%C2%81%C2%A3%0F4%60%05%1A%1F%1AH%07%C2%81%C3%AC%07%C2%B9%03%C3%84%1E%C2%94%23y%C2%8C%20A%C2%A8%C3%83%C3%B2A%5D%C2%BD%01%0A%C2%A8%0F%40%7C%C2%91%01%3A%C3%A6%09%10%60%00X%1AU%C2%B0%5E%C3%BEF%23%00%00%00%00IEND%C2%AEB%60%C2%82";
var image22 = group56.add("image", undefined, File.decode(image22_imgString), {name: "image22"});

var ShakeNullButton = group56.add("button", undefined, undefined, {name: "ShakeNullButton"});
    ShakeNullButton.text = "Shake Null";
    ShakeNullButton.preferredSize.width = 210;

// BUTTONGROUP9
// ============
var divider22 = ButtonGroup9.add("panel", undefined, undefined, {name: "divider22"});
    divider22.alignment = "fill";

// BUTTONGROUP10
// =============
var ButtonGroup10 = tab3.add("group", undefined, {name: "ButtonGroup10"});
    ButtonGroup10.orientation = "column";
    ButtonGroup10.alignChildren = ["left","center"];
    ButtonGroup10.spacing = 0;
    ButtonGroup10.margins = 0;

// GROUP57
// =======
var group57 = ButtonGroup10.add("group", undefined, {name: "group57"});
    group57.orientation = "row";
    group57.alignChildren = ["left","center"];
    group57.spacing = 10;
    group57.margins = 0;

var image23_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03%03IDATx%C3%9A%C3%AC%C2%98%3Fh%1AQ%1C%C3%87O%C3%AFJ4x%C2%A5b%05cI%C2%B0C%1C%C3%A2R9p%0D%05%C2%A7P%C2%B7%C3%86%C2%A18d%C2%8AS%C3%A8%C3%90%C2%B1%C2%8B-t%C3%AC%24%08%C3%89%C3%94!dH%20%C3%8B%05%5D%02m%17%C2%A1%C2%81%C3%83v0%C2%A57X%C2%A14%11T%2CUl%C2%8C%C2%9A%C3%B4%7D%C2%8F%7B%C3%85%C3%A8%C3%B9'%C2%8D%C3%A7e%C3%B0%07%C2%8F%C3%B7%7CO%7C%C2%9F%C3%B7%C3%BB%C3%B3%7D%C3%A7%C2%99%18b%C2%B1X%C3%8CC%C2%BA5%C3%86x%7BGX%C3%B2%26%15(%C3%93j%C2%B5%C3%BE%C3%94%C3%ABu%C2%A9%C3%91h%C2%9CL%C2%9Adff%C3%86%3D%3B%3B%2Bp%1Cg%25%1F%C3%BD%1C%3C%04%C2%A0%C3%AD%C3%AD%C3%ADg%C3%B9%7C%C2%BEj%C2%94%C2%8B%3C%1E%0F%1F%C2%89Dv%08%C3%98%C2%9A%19%13%C3%B0%C2%90%C2%91%400%C3%AC%0F%0E%C2%8C%15(%23B%C2%A6e%C2%94%C3%83%C3%8C%C3%9CB%C2%9BB%C2%8Dj%5C%C3%B7%C3%84K%C2%BB%C3%93%1B%C3%A1%C3%AF%C2%BD%C2%98%14%40%C3%B6%C3%BC%C3%AC%C3%A0i%C3%A1%C2%878%10%C3%AA%3E%C3%8B%C3%B2w%C3%8DfAn%C2%9Eo%C3%A9.%03%C3%9C%C2%9D%C2%90%C2%83%C3%A5%C3%A6%C2%86z%C2%8A%C3%9A%C3%A3%C2%9F%C3%9Fu%C2%87%C3%BA%C2%BA%C2%B0(%C2%8C%14%C2%BEN%C3%9B%C3%9C%C3%9C%0C%C3%99%C3%AD%C3%B6%C2%9E%C2%93%C2%84%C3%83%C3%A1%C2%AD%C2%89%C3%A6T%C2%A7%C3%8D%C3%8F%C3%8F%0B%C2%B5Z%C3%AD%C2%8A%C2%869%C2%9DN%C3%8D%C3%93%C2%91%C3%ABJXZZ%12%C3%86%01%3D%10jee%25F%C3%87%C2%AB%C2%AB%C2%ABn%C3%92%C2%9E%24%12%C2%89WZ%C3%9F%C2%A5%40%C2%80%C3%9E%C3%9D%C3%9D%5D'%1E%C3%B6%12%C2%85%3E%25%C2%82X%25w%1B%7Fxx(%C3%86%C3%A3qy%C2%AC%C2%92%C3%A0%C3%B3%C3%B9%C3%A6%C2%B0!z%C2%AD%C3%B5%C3%A3%C3%A3c%C3%A5%C2%8A(%16%C2%8BJ_%C2%A9Td%00%C2%A9J%5D-%14%0A%C2%B5%C2%B1x%C2%AA%2B%3C%C3%98%2C%3Ad%5D%C3%AA%17Rx%C2%99%C2%B4%7Fk%7B%7B%7B%07%C3%8C%C2%A7%C3%8F%C3%BA%C2%88'%C2%8A%01%0Dc%C2%84%0D%20Z!%C2%85'%C2%91kh%18%C3%B7%C3%B3%C3%B8%C2%B5%3C%05%C3%9B%C3%98%C3%98%C3%B0%3A%1C%0E%C2%BE%C2%BB%18%C2%9A%C3%8D%C2%A6%12%26%C2%9B%C3%8D%C3%A6%26%20%0C%C3%B5%186%07%18B%C2%8A%C2%9E%40%0BW%3C5%0E%C2%A8%600%18%C3%8Ad2%1F%02%C2%81%40%C2%A8T*%7D%C2%A3%C3%B3Hb%C3%B4GGGb6%C2%9B%3D%1D%14%C3%92N%7B%C2%BD%C2%B0xs(%C2%92%C2%AC2Nl%C2%B5Z%C3%A7%2C%16%C3%8B%09NK%C3%B2%C2%84%C2%A7U%C2%A5B%C3%A8%C2%ABS%C3%9D%16%C2%8DF%C3%85NQE%C3%B2v%C2%AE%C2%A7%C3%93i%C2%91eY%5B%C2%B9%5C%C3%BE%08%7DC.!t%C3%97%C3%95-%C3%AE%7FNB%C3%A1%C2%B4%1E%C3%92%C3%B0%C2%BC%C2%8D%C3%90%C3%A6r9yyyY%C2%A0R%C2%A1%3BT%3F%C3%9B%C3%9F%C3%9F%7F%C3%9BY%08%10Z%C2%97%C3%8BeC%C2%81%C2%8C*%C2%9C%03%C2%A1P%C3%9AHh%1A%06%3AO%C3%85%C2%91%1A*%C2%8E*%C2%BF%C3%96%C3%86%C3%89d%C2%92%C2%AE%C3%85%C3%86%C3%A2)%1A%06%02%C3%A7%06%1C%00%C2%BA%C3%83%C3%A1%C3%B7%C3%BB%C3%B9A%C2%BF%C2%91J%C2%A5v%C3%86%16%3EQ%14%C3%A5PH%C3%91D%C2%A5%C3%94%C3%95%C3%A9%C2%9E%C3%BC%C2%A0r%C3%90%C3%8F%C2%AE%13%C2%B6%C2%A1P%C2%92%24UI%C2%93%18%03%C2%AC%2F%C3%94%C3%BB%07%0F%C3%97%C3%B5%C3%9E%C3%9Cb2%C2%B9%C2%B5%C2%BC%C3%9F%03Uj%C2%B7%C2%AB%C2%BF%2F.%24%17%C3%8B%09zC%C2%9D%5D%5E%C2%9E%C2%94%C3%9B%C2%AD%C3%93%C2%A1Po*E%C2%99%C2%B4%C3%A8%C3%B4%2F%C3%96%14%C3%AA%26%C3%95%C2%87%C3%BB%C3%AA6%C3%80%C2%A8%1Cu%C3%85Sxa%C2%85%C3%B7CF%02a%7Fp%60%7C%2B%C3%9F%C3%A4%C2%99%C3%94%C3%8B%17%60%C3%8FI%7Bd%C2%90%C2%A3~%C2%91%C3%B6%C2%85Q%C3%9Fy%C3%BE%15%60%00i7x%C3%81%C2%82%C2%9Az%03%00%00%00%00IEND%C2%AEB%60%C2%82";
var image23 = group57.add("image", undefined, File.decode(image23_imgString), {name: "image23"});

var GlitchMatteButton = group57.add("button", undefined, undefined, {name: "GlitchMatteButton"});
    GlitchMatteButton.text = "Glitch Matte";
    GlitchMatteButton.preferredSize.width = 210;

// BUTTONGROUP10
// =============
var divider23 = ButtonGroup10.add("panel", undefined, undefined, {name: "divider23"});
    divider23.alignment = "fill";

// BUTTONGROUP11
// =============
var ButtonGroup11 = tab3.add("group", undefined, {name: "ButtonGroup11"});
    ButtonGroup11.orientation = "column";
    ButtonGroup11.alignChildren = ["left","center"];
    ButtonGroup11.spacing = 0;
    ButtonGroup11.margins = 0;

// GROUP58
// =======
var group58 = ButtonGroup11.add("group", undefined, {name: "group58"});
    group58.orientation = "row";
    group58.alignChildren = ["left","center"];
    group58.spacing = 10;
    group58.margins = 0;

var image24_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%08~IDATx%C3%9A%C3%84%C2%98%C3%9B%C2%92%1CG%11%C2%86%C3%AB%C3%94%C3%9D%C3%93%3D%C2%B3%2B%C3%B9%20%C2%850%5C%C2%88C8%7C%09o%C3%81%15%17%3C%C2%81%C3%9F%C2%80W%C3%90%C2%A3%C3%B0%04%5Cp%C3%85%5B%10D%40%10%C3%81%05(%0C%C2%B6%15%C2%B6%0C%C2%B6vN%7D%C2%A8*%C2%BE%C2%BF%C2%BAgvV%06G%C3%88%2C%C3%A1%09%C2%95%C2%AA%C2%B7%C2%A7'%C3%B3%C3%AB%C2%AC%C2%AC%C2%AC%C3%8C%C2%B4%C2%86%C3%8F%C2%B3g%C3%8F%C2%9E2%7Dh%C2%BE%C3%BB%C3%8F%C2%AFayn%17%C2%A0%C3%9F_mw%0F%C2%BF%C3%B7%C3%A23%C3%83%5C%C2%BE%C3%8D%C3%BC%C3%8B%C3%96%C2%A4d%C3%AC%C3%84%1C%C3%B9%3Bfkc2%26q%C3%8Dm%C2%AB9%C3%AB%C3%91%7C!%C3%95.%C2%93%C3%95e%C3%8E%C2%8E%C3%999%C2%86%C3%8D%C3%99s%C3%ADm6%C3%9E%C2%99%1C%C2%98%C2%9D%5D%1E%C2%BF%C3%99%C2%AC%C3%8D%C2%A7O%1Ek%C3%BE%C2%92%3F%7F%16d!%01%C3%BD%C3%B2%C2%B7%C2%BF3%C3%B50%C2%9C%C2%80%26%C2%94%1FS%C3%8E%7D%C3%96l%C3%8C%C3%80%C3%B5Pf%C2%BE%C3%8Bed%C3%8D%C3%9C%06p%06%3D%019%C2%88%0A%C2%8C560%077%C2%8F%C2%9A%2Fj%C3%8D%C3%9C%5Bq%C3%9Dp%C2%BD%C3%92%C3%B7%C3%BA%C3%91P%C3%97%C3%A67%C2%BF%C3%B8%C3%B9C%C3%80%3E%2C7d!%01%15k%00%11s%16%C3%88!%C2%99%C3%8C%C2%B5%C3%A9%C2%B9f%C3%A4%1E%C3%8Dc4y%C3%A4%C2%991%C2%99%C3%85z%C3%99%C2%9C%2Cv%C2%B2%C2%94%C2%9D%C2%81%C2%8AEd%C2%9D%C3%8A%1B%5Bq%C2%A3r%C3%99%08%C2%A4%C3%A1f%C3%83%C3%B5%C2%8A%C3%AB%C3%96%5B%2B%C2%B0%15%C3%BA%C2%BD8n~%C3%B2%C3%83%C2%99r%C3%83%C2%92!u%40%C3%83%5E0(%C3%9E%C2%A3%C2%B1%C2%80M%050%C3%B7%110%C3%AE%0D%C2%82J%C2%82%C3%8AyZ%C3%80%C2%BE%0E%C2%95%C3%8B%C2%92y%C2%AC!%0B%01UF%C3%ADM%06%C3%8A6%C3%81X%C2%802%40%C2%A6%C3%A7%C2%A5%3A%C2%9E%19%C2%81%C3%AB%C3%A0%C2%A8%25%C2%A3%40%25%C2%8B%05r%C2%BEA%C3%B1%0E%C2%88%7D%5C%C3%80%C2%B8f6G%C2%81%C2%B1V%C2%80%C3%A5ab%C3%84%C3%99b%134%C2%8B%C2%8F%C3%A5t%0Be%C2%8B%0Fa%19%C3%AF%C2%B3%0D(%C2%AE%C2%80%C2%A8%C2%B9%C2%AEY%C3%8B%C2%86%C2%B1B%C3%97*X%C2%8B%C3%A5m%C3%87%0B%C2%8F%5C%C2%8F%C3%B8_%C2%84%C3%A3%C3%BA%0C%15y%60%C3%82%C3%9FP%C2%BE%3B%C2%81%C2%A1%7C%3F%02%25%C2%B0%110%C2%AE%7B%0D%C3%AEk%06%C3%8AL%C2%93%04%C2%99%02%C2%96gW%C2%84h%1E%1EE%1E%C3%AB%C2%84%C3%8AZA5%C3%8CM%C2%A5y%06j%C3%A5%C2%9F(%1F%C3%99%3C%C2%88%C3%8B%C3%9AD%09%C2%8E%C3%A6%12j%40%C3%81%0D%0A%05%C2%B4%03b%C3%87%C2%93%C3%BBa%1E%C2%87e%1C%C2%B1u%C2%8F%C3%A7%C3%B5%7DN%C2%A3%C3%80p%C2%AE%C2%89%C3%9F%C3%84%C2%A8%1D%C3%88%C3%87%C3%B2%01%C3%84%02%C3%A1%2B%3B%035%C3%96U50%0D%0Ak%C3%BC%C2%87%C3%91%C3%96%C3%B3%C2%86%19%C2%B1%C3%8Ct%02%C3%A2%C2%95%04u%7D%C2%B1%7CV%C3%8B%C2%B2%1D%05%C2%94%C3%8Dv%C3%88i%C2%87%C3%B2%1D%10%C3%BB%C2%A3F%C3%8A%C2%87CN%1A%C3%87%3D%60%C2%87%C2%94%C2%86%03P%C3%87%C2%9C%26%C2%9E%11T%C3%82%C3%87%C3%98%C3%BF%05%C3%8A%01%C3%A0W%C3%96%C2%85%16%C2%A8%C3%96%C2%B9%C2%BA%03%C2%A8%C2%B5n%C3%85h%C3%99v%C3%B8%C2%A5%1D%15jX%3E%C2%80%C2%9C%C2%96%3F%2B%C2%80%C2%88%C3%A3%C3%92R%C3%A3%09%08%2B0%C2%B2%C3%86%0E%C2%88%1D%10%C2%BB%5DJ%C2%87mJ%C3%BBW9%1E%C2%BFJ%C3%A9%C3%B8U%C2%8C%03%C3%B3%C3%80%C3%9F%13%C3%B7%05%C2%96%C3%A4T%2C%C2%9B%01%C3%88m%C2%9C%0B%C3%97%C3%96%C2%87%07%00%3D%C3%B0%C2%BEf%5E%C3%B1%C3%B7j%C3%A3%C3%B2%C2%B06n%40%C3%9F%C2%94%C2%AC%C2%93%0F%C2%A5y%C3%B3%C2%BA%C2%B2%C3%BA%C3%A2%C2%B8%03%C2%85O%C3%AD%C2%8B%C2%85%00%C3%82%3A%5B%C2%80%C2%B6(%C3%9C%C3%9E%00%C3%B3e%C2%8A%C2%BB%7F%C2%A6%C2%B8%C3%BF%3C%C3%86%C3%83%C2%8B8%1E%3F%C2%9E%C2%A6%C3%BE%C2%B38%C2%8D%7C%17%C3%A5%10%C2%AF%07O%C2%96%C3%8D%5E9%C3%A7%1F%C3%BBP%7D%3F%C2%84%C3%A6%C2%89%C2%AFV%C2%8F%7Cj%C3%9F%C3%8E%C2%9E%C2%97%C3%B7St.f'%1A%C2%97m%C3%B9%0D6b%7F%7C%0D%C2%AA%C3%B8%10%60Z2YH%40Xc%0B%C3%8C%0E%C2%80%C3%9D%3F%C2%A6q%C3%B7%C3%97q%C3%98%3F%C2%9F%C3%86%1E%C3%8B%C2%A5%C3%BFvN%08%C2%90%17%C3%8B_%C3%848i%7C%C3%84%C3%B3O%C3%83%C3%94%C3%BF%C2%A8%C2%AA%C3%87%1F%C2%84*NZjc%C3%A6%C3%9F%3Bm%0AWV%C3%9D%11%C3%B1%C3%AF%40%C3%819%C2%8D%C3%85%C2%99%C3%93A%3E%C3%84%C2%92%C3%ADe%C2%A1%7F%01%C3%B4b%C2%9A%C2%B6%C3%8F%C2%A7a%C3%BB%C2%A7%C2%A1%C3%9F%7D2%C2%8DCz%C3%83%C3%83L%2F%C3%B0%C3%A7%C2%A1%3F%C3%B0%C2%82q%C3%902%C3%A3%40%C3%AC%043%C2%87%0D%C3%AD%C3%90%0CP%0A%C3%9E%C2%B8%20%C2%8E%0BK%19A%C3%B5%03%01%C3%B3(g%C3%86%C2%87%5E%C3%A5%C2%B4%7F%19%C2%A7%C3%BD%C3%9F%C2%B1%C3%90%1F%C2%87~%0B%C3%90%C2%98%C2%BF%C3%A5)%C2%AB%17%C3%B9%C2%98%17R%C2%90%25%C2%BA%5Bv%C2%A6c%C2%89%7D%C2%95l%C2%A8%1Cq%2C%C3%BB%3A%C2%98%5C%C2%8B%C3%A3%C3%92R2k%C2%89C%2C%1F%3B%0CgN%C3%B1(%1F%C3%BA%C3%9B4%C3%AC%3F%C3%BD%1F%C2%80.%C2%97Ur%C2%AE%C2%9D%C3%9B%C3%A3o%C2%A1s%C2%AEbw%C3%96%2B%C2%82j%C2%93s3)%C2%98%C3%82a%C2%96%0D%C2%A3%1F%C2%A4Iq%C2%87h%0D%C2%94%C2%B6%C3%BB%C3%B0*%259s%C3%BF%C3%91%C3%B8%C3%A6K%C3%B6M%16%C2%93%3C%C3%89%C2%95%7C%C3%A9%C2%91%3E%C3%A9%C2%95%C3%BE%C2%BC%C3%B8%C2%9A%5B%2C%C2%95tl%C3%B0%C3%85D%7C%C2%9A%C2%88C%23%C2%8E%3Eb%C2%A9a%C2%9FS%C2%BA%C3%8F%C2%84I%C3%B2%24W%C3%B2%C2%A5gX%C3%B4%C2%96cKA%C3%B4%04e%C2%96%1D%11%C2%8B%C3%85L%C3%A4%C3%81%C3%88%0E%C2%8C%2Ca%C3%8C%C3%B7%C2%9C%C3%85I%C2%9E%C3%A4J%C2%BE%C3%B4H_%C2%BC%C3%9D%C2%91%C3%A9r%C3%B9%C2%8CY%0EV9%C2%A3.%14%7F%C2%86%C2%BB!%C3%A8%C3%9E%3E%C2%92%2B%C3%B9s(%C3%97%C3%88%C3%A7%C2%9C%C3%AC%C3%92R%17I%C3%A3%3C%13B%C2%8C%C2%B7%C3%BF%C2%9F%C2%9CWr%C3%9D%C2%AC%C3%86%C2%BE%C2%AE%C3%B7%0CuJ%C3%8CxP'%3B%5B%C3%96%C3%AA%C3%BCrm%C3%89B%C3%AE%C3%BF%23%C2%B9%C2%92_-%07%C2%B8%C3%B4.%C2%89%C2%A1%C2%BD%C2%84r%C3%84%0FO%7C%C3%A0t%C2%B7%C2%81%1F%C2%845%5B%C3%B6%1D%C3%A7%2B%C3%92%C2%8C%7B%C2%B5%C2%97%C3%A4I%C2%AE%C3%A4K%C2%8F%C3%B4I%C2%AF_%C3%80n%C2%A18%C3%A0%C2%B9%13%C3%B8AU%C3%ABd'~%10K%C2%AA%C3%87!%C3%94%08%08%C3%B7%09%25y%C2%92%7B%C2%B5%C3%84)%C3%A9%C2%93%5E%C3%A9%17%C3%87%19%C2%8A%7C%C3%99)%3B%C3%A4%C2%81Zy%0F%C2%81%C2%AD%C3%91%C3%89%C3%BE%C3%88%C2%85%15g%C3%96%C3%AA%C2%BE%C2%96Qr%24Or%25_z%C2%96%3C%C2%AB%C2%96~q%C2%9C%23%C2%BAJ%C2%9E%C2%92%19f%C3%9B%C2%ACH%C3%84%3A%C3%AB%C2%86k%C3%A7%C3%87G!O%C3%87%5CE%C2%8E%1E%C2%9D_%C3%8A%C2%AD%C2%BE%C3%B5nD%C2%AE%C3%BD%C2%A0%C2%AE%C3%9B%C2%A7%C2%A1%C3%AA%1E%05%C3%9F!%C2%BFE%C3%8FJ%C3%BA%C2%AA%253%15%C3%87%19%C3%8A%C3%A7%C2%ACum!%26%C3%8D%C2%B5%13!%C2%9F%C3%A1bt%3E%C3%850%C3%87%0E9%C3%A5_%C2%86%C3%A1%40%1A%13%C3%9F%14%C3%A8%C2%A1%C3%B3%C3%BE%7D%C2%80~%1C%C3%AA%C3%B5%7B%C2%A1Z%C2%B3%C2%84%C3%AB%2B%C3%AB%3A%C2%92%C2%BFn%C2%A5L%C2%94!%C3%BD%C3%A2%C2%B8%C2%B5T.%C2%96R%C3%9EL%C2%85B%C3%B2%C3%A5%C3%A6*e%0EaZl%C3%A3%C3%88%18%3D%C3%82%C2%AB%C3%A7%C3%A3x%C3%B8%24%C2%8E%C2%83N%C3%BFo2%C2%9Bv%07%C3%8E%C3%AC%C3%9E%C3%B3U%C3%BD%C2%B4%C2%AAZ%C3%B2%C2%AA%C2%96%C3%BC%C2%AA%7B%C3%9B%C2%85%C3%B5C%C3%A7%C3%96%C3%B8%C3%94%C2%9A%C3%A5%C3%ABH%C2%97%3B%C2%A0%3A%C3%A9w%C3%B9%C2%AE%C2%A5*nv%C3%B9%5C2%C3%8D%C2%AB%C2%AB-%C3%AA%C3%8A%C2%89%1E%C2%94%C3%9EVW%C3%96%C3%97%C2%8F%7Ch%C2%BE%C2%88U%C3%BF%C2%92%C2%A3%C3%A2%259%1E%C3%87E*%C2%81P%C3%A5p%C3%89%00%C2%AC%25%C3%B3%C3%B4%C3%AF%C3%A2%C3%90%C3%AF%C2%92u%C2%BE%C3%83%C3%B3Xf%C3%B5%C2%96%C3%B7-~%C3%94%02%C3%93ml%01Z%23s%C2%83O%C2%AD%17%C2%A8N%1C%17P%C2%A5%0CZ%2B%05%3C%05x%15%C2%B9%C2%B8%C2%B7%C2%A34%C3%B2%C2%ACy%C2%85%C2%99k%C2%845oe%C3%9F%3F%C3%B1%C2%BE%C3%9F%12%C2%94Iq%C3%B09%C3%8EKb%C2%B3*%1A%C2%BDG%C3%8Dk%C3%B0%C2%AC%C2%B2%C2%80%C2%B0%C2%81q%C3%A3%7C%C2%A3%C3%9F%C2%AD%5D%C3%B1%C3%95%C2%96%C3%BB-%C2%BBN%16Z%0Bh%C2%81ZK%C2%BF8n%C2%A1R%C2%AE!%5D%C3%8FER%C2%B1%C3%BC%5CL%C2%B2)I%C3%82*%C3%8A%5B%C3%92%0BG%C3%B2%C2%9F%C2%8EW%C3%99%0DG%C3%A7%07U4%C3%83%7C%C2%80%C3%87%25%C3%91%C2%9E%7F%C3%88%C3%9BP%C2%BD%C3%B8%C2%BA%C3%84%3BW%5E%C2%A6Q%C2%8A%C2%B28u3%C3%BB%10P%C2%B3u%16%C2%A0%C2%8D%C3%B4%C2%8B%C3%A3%16%C2%8A%04%C2%8B%C2%8B%C2%8DQ%C2%8D%C2%94%C3%B5%C2%BF%C2%80T%C3%9D%C2%B2%01%2CP%C3%A4%3B5yVk%2C%C2%89%20%C2%A9F%19%C2%8E%C3%B2%C3%8ALq.%1An%C2%A1%14%C2%88%C2%89%C3%96a%C2%AE%C3%B94J%C2%A8%C3%91%0ES%C2%89U%C3%8D%C2%BB%C2%AD%C2%AD%0A%C2%94%C3%A9%00%C3%AAB%013kq%C3%9C%C2%B1%14_%5C%C2%99R%C3%BB%C2%93%2F%C3%8F%0D%09%05%C2%B4%3AP%C3%BFc%C3%93c%C2%A5%C2%82U%C3%85%C2%A8%C2%9D%2B%C3%A4%C3%A9%5C!%C2%97%C2%82%C2%B4%1C%C2%AC%C3%B6%5C%C2%8C%22%C2%83%17C%C3%A1%C2%B9B%0E%C2%A5%18U%C2%85lK1%C3%8A%C2%BD%C2%96%0D%C3%94%12%C3%89%3B%C2%9E%C2%91%C2%B5%C2%BA%3B%C2%96%C3%82%C3%AB%1B%C3%9E%C3%AE%C2%BA%C2%B4id%25%C3%96%C2%96Y%C3%81%C2%AC%C3%B6%C2%A5%C3%94%C2%B6%3D%C3%96%C3%AA%C3%A3%0C6%C2%962_%3BU%C2%85%C3%A4%C3%92K8A%C2%9D%C3%8F%C3%91%C2%A5B%C3%96%C3%8B%C2%95%C2%88%5D%1A%1B%C2%B6)%C2%B3%C2%99%C3%81%C3%BC%C3%9C%C3%A0%C3%90%C3%9C%C3%B1%C3%BCZ%1Cg%C2%A8%C3%9Df%C3%8D%C3%99g%C3%96%C2%AC%C2%9BB%C2%BD6P%C3%8D%C3%92%C3%95jFP4%1EcipX2%C3%90%3C%C2%90%C2%88%C2%8D%C3%AA%C2%BE%14%0B%C2%91%C2%BE%C3%A6%C2%8B%3C%C3%A8t%C3%88%C3%9B%C2%B3O%16%C2%8BU%02s%C3%AA'X59%C3%A6%16%10%C3%97%2B%C3%AE%150%C2%80%C3%94%C3%A4h%C3%A0%C2%90%07%3C(PjX%0D%C2%AC%7C%3D%0C%C2%AB%02fL%C2%9D%C3%94%C2%B6%C2%B1%C2%A6t%5C%C3%98%C2%81%C3%A4%C3%8F*%C2%B5%0B%C2%98%C2%BA-%C2%A4%C2%AE%02%C3%8A%C3%A7x%C2%96%C3%AF6%C3%8C%C3%94%C2%9B*M%C2%B2%19%C3%8A%C3%8E%C3%BD%C2%A9%C3%92%C2%A32%C2%A5%C3%B3%C3%A2%C3%A6%1E%C3%95%C3%AA%C3%94%C2%A3R%7FJ%1CE%C3%80%7F%C3%AA%C3%A4-%5D%C2%BCx%C3%AA%C3%A2-sJK7o%C3%BE%C3%9E%C2%9E%60%C2%B2%C2%B9h%05%C2%9D%C2%BBx%C2%A5%25T%3Ay%C2%9A%C3%A5%C2%A7~n%11%C2%95.%C3%9E%C2%A9%C2%9B'p%C3%BBz'%C3%8F%5E%C3%B4%3C%7F%C3%85%C3%B8%C3%A9w%C3%94%C3%AB%14%C3%8C%1FN%3D%C3%8F%7F%0B0%00%00%C2%91%C2%A2%01%C2%BE%C3%9C%C2%969%00%00%00%00IEND%C2%AEB%60%C2%82";
var image24 = group58.add("image", undefined, File.decode(image24_imgString), {name: "image24"});

var VignetteButton = group58.add("button", undefined, undefined, {name: "VignetteButton"});
    VignetteButton.text = "Vignette";
    VignetteButton.preferredSize.width = 210;

// BUTTONGROUP11
// =============
var divider24 = ButtonGroup11.add("panel", undefined, undefined, {name: "divider24"});
    divider24.alignment = "fill";

// TAB4
// ====
var tab4 = tpanel1.add("tab", undefined, undefined, {name: "tab4"});
    tab4.text = "About";
    tab4.orientation = "column";
    tab4.alignChildren = ["left","top"];
    tab4.spacing = 10;
    tab4.margins = 10;

// TPANEL1
// =======
tpanel1.selection = tab1;

var image25_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%01%14%00%00%00r%08%06%00%00%00%C2%92%C2%AA.%C2%8A%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%0A%C2%AEIDATx%C3%9A%C3%AC%C2%9D%3Dl%1C%C3%87%19%C2%86%C3%A7%14%26%15%0FHi%02%16%10%04%C3%A15)%121E%3A%C3%92%C2%85%0D%24d%10%C2%84%15%C3%99%C2%84%C2%8D%C3%A9%C2%86D%02%C2%BA%C2%91%00%C2%83L%11%0A%08%C3%A4%C3%86J!6%C2%96%1B%C2%A6!%1B%0B%08%40!H%13%C3%9C5R%0A%C2%9F%C2%90%C2%964%10W%C2%A1z%C2%AA0%12%25%C2%97%7DW%1Czonvo%7Fn%C3%B7~%C3%B6y%C2%80%C2%83%C2%A4%C3%93%C3%B2noy%C3%B3%C3%AC7%C3%9F%7C3%C3%93x%C3%BB%C3%B6%C3%AD%1F%1Bc%C2%BEk%00%00%0A2%17%3C%3E%09%1E%C3%AFp)%00%C2%A0(%C2%B7%C2%B8%04%00%C2%80P%00%00%C2%A1%00%00B%01%00%40(%00%C2%80P%00%00%C2%A1%00%00B%01%00%40(%00%C2%80P%00%00%C2%A1%00%00%20%14%00%40(%00%C2%80P%00%00%C2%A1%00%00%20%14%00%40(%00%C2%80P%00%00%10%0A%00%20%14%00%40(%00%C2%80P%00%00%10%0A%00%C2%8C%C2%9F%C2%B9%C2%B2%C3%9F%60mm%C3%8D%2C%2C%2C%C3%94%C3%BEB%C2%9F%C2%9D%C2%9D%C2%99%C3%8B%C3%8BK%C2%BEq%C2%80P%0A%09eu%C3%95%2C--%C3%95%C3%BEBw%C2%BB%5D%C2%84%02ty%00%00%26%26B%C2%89%C3%B2%C3%AA%C3%95%2Bs~~%5E%C2%8B%0B%C3%9Bl6%C3%8D%C3%A2%C3%A2%22%C3%9F0%40(e!%C2%99%C3%AC%C3%AC%C3%AE%C3%96%C3%A2%C3%82%C2%AA%C2%9Bw%C3%B4%C3%A8%11%C3%9F0%C2%A0%C3%8B%03%000%C3%B1%11J%16Z%C2%81%C3%AB%C3%A6S%1C%C3%975%C3%BF%C2%8B%C2%8D%10%7C(1%C3%AAK%C2%8Ej%24*n4J%09U%C3%AF%7Bx%7C%1Cw%3E%00%08eL%C2%AC%C2%99o%C2%99%C3%9F5%C2%BE%3D%C3%B4%C2%B83%C3%B3_%C3%93%C3%AD%0D6%C3%A0%C2%83%C3%BD%C3%BDp%C2%B8%C3%9AE9%C2%9C%C2%9D%C2%9D%1D%C3%A3%C3%AA%C2%A4%C2%B5%C2%B8h%C2%8E%C2%8E%C2%8E%C3%8C%C3%BC%C3%BC%C2%A0%C3%824%C3%9C%C3%AB%13%C2%8A%C3%8EO%C3%A7%C3%A9%C3%B2%C3%93%C3%9E%C3%97%7C%C2%AB%C2%80.%C3%8F4%C3%8A%C3%A4%C3%B7%C2%BD%C3%BFd%C2%96%C3%89%C3%B9%C3%85E%26%C2%99%1C%C3%9E%C2%BF%C2%9FZ%26%00%08%05%C2%99%20%13%C2%80Y%13%0A2%01%40(%C3%88%04%00%26G(%C3%88%04%00%C2%A1T*%13%C3%B1E%C2%8E%C3%91%1Cd%02P-c%1B6%5E%C3%89%20%13%C3%9B%C2%B0M%C3%AFM%C2%A4RW%C2%99%C2%A8%C3%B2%C3%96%C2%AD%C2%AF%C3%91%C3%A7%5D__7W%C3%81%C2%9F%3E%C2%9E%3F%7B6%C3%B0%C3%9C%C2%BD%7B%C3%B7L%C2%BB%C3%93%C3%A9%7Bn%7B%7B%C3%9Bl%C2%BF%C3%BF~%C3%9Fs%1A.We%C2%B3%C3%AF5%C3%92%C2%90%C3%B4%C3%B3z%3E%C2%AE%C2%BE%07%C2%88P2%C3%93j42%C3%BF%C2%8Cm%C3%A0u%C2%94%C2%89%C2%8A%C3%AE%7C%C3%85z%C3%BAL%C3%8B%2B%2B%C2%99%5E%C3%AB%C3%A0%C3%A0%20%C2%BC%26%003%C2%97C%C3%89%C3%8A%C3%81A%3D%C2%BB9%C2%9B%1B%1B%C2%B9%C3%BE%C3%8F%C2%87%C2%AE%C3%85%C2%83%07%0FLs~%C2%9E%16%00%C3%B5%15Jo%C3%BF%C2%9E1%C2%AB%3F%C2%AB%C2%9DL%C3%94%C3%B0%7D%12%C2%B5hVs%C3%965g%14%C3%B1H*%003%C2%91CIBy%12%C2%B7QO%C2%8AL%C2%AE%C3%8C%C2%9B%C3%B9%3A%2B%15%C2%BAX%5D%C2%9A%C3%B9!%C3%91%C2%84%16%C2%B2%C3%8A%C2%9A%C2%93%C2%90%C2%84%3E%C3%9C%C3%9B3%C2%9F%3C%7C%C2%98x%C3%9C%C3%A3%C3%8F%3E%C3%AB%C2%97%C3%91%5Boy%05%C3%A7%1E%C3%87%C2%82R%08e%22%08%C2%87%C2%87%1B%C3%A6%C2%A6q%C3%87%C3%89%24%C2%B0%C2%899%C3%99%C3%BDM%C2%A52%C3%99%C3%A9%C3%BD%C3%9B%C2%AC4nU*%147Y%C3%AA%15J%C3%90%C3%80%C3%95%C2%A0%C2%B36%C3%A2%C2%8D%C2%A0%C2%BB%C3%A4%5E%C2%BF%01Q%3C~%3C%20%22%C2%AFP%C2%9C%C3%A3%00%C2%A1L%C2%9CTV%C3%B7%3F%C2%8A%C2%95Ic%C3%B7C%C3%B3%C3%81%C3%85W%C3%A62%10%C2%81%1D%C3%BD)%5B%26%C3%A7%15G'j%C2%BC%C3%AE%2Ch%3Bc%C3%9A%C3%AD%C3%A6%C2%84R%C3%89%C3%91%C2%A8%15%C2%A5%C2%8Cc%C3%84E%C2%9F%2B%C2%A9%2B%C2%A7%C3%8F%C2%A8%C3%9F%19%20%C2%94%C2%91Ie5A%26%C3%A6%C3%A2%C3%8B%1B!hH%C3%B9b%C3%B1%C3%BB%C2%A5%C3%8B%C2%A4j%7C%09%C3%97N%C2%A7%13F%15%C2%AEPtl%1E%C2%A1%C2%84%23E%C3%8B%C3%8Bc%11JR%C3%B4%25%C3%89!%C2%94%C3%A9b%C3%BA%16Xrd%12%15%C3%83%C3%91%C3%9A%2FgJ%26jp%C2%BE%C2%86~rzj%3A%C3%ADv%C2%98%3Fr%C3%85%C2%90t%C3%87%C3%BF%C3%A6%12%C2%BE%C3%A2%C2%9B%0F%08%25N%26%C2%96%C3%A6%1F%1F%19%C3%B3%C3%B4%2F3!%C2%93%C2%B8%C3%A8D%C3%9D%00%C2%89f%C2%B1%C3%95%C3%B2%C2%AE%C3%8F%C2%9Bf%08%C3%B9%C3%B0%C3%B0%C2%90%C2%84)%C3%94%C2%AF%C3%8B%C3%A3%C3%9EU%C2%BB%C2%BB%C2%BF5%2B%17%C3%BFL%3C%C2%AEq%C3%BF%C2%81z%3Fa%C3%9Ee%C2%9Ae%127T%2C%C2%99%24%C2%ADUk%C2%87%C2%90%C2%93r%22%C2%AA%C2%AAU%C2%B5l%5C%C3%B7%C2%B0%C2%B2%C3%9F%C3%A9%C3%95U%C3%A2y%5E%0CI%16%03B%C3%89-%13%3B4%C2%9CF%06%C2%92%C3%8A%17%C3%9D%17%C3%A6%C3%B0%C3%AC%C3%8FS)%13%C2%91f%C2%A88%C2%8E4C%C3%88%C2%BA%C2%96%1A.V%C3%95%C3%B1%C2%B8%C3%909%C3%94e%C3%91r%C2%BA%3C%13(%13%C2%A1D%C2%AD%1D%C3%91I%C3%A2'O%C3%BF%3A%20%C2%8Ei%C2%91%C2%89H3T%1C%2B%C2%94%C2%94%C2%BB5*%C2%82%3B%3D%3D%C2%A5%15%40%7D%22%C2%94_om%0D%C3%B4%C3%B7O~%C3%B0%3D%C2%B3%C3%96%C3%BA%C3%A1%40%C2%BE%C3%84%17%C2%8D%C3%98%09%C2%85Ed%C3%92%C2%BA%C3%AEF%C2%9CT%C3%94%C3%B8%7CC%C3%85V%00%C2%97%2F_%C2%A6%C2%92O%C3%9A!dE)y*m%01%C2%A6R(%C2%AELl%C2%9DI%2F%C3%A8%0E%C2%84%C3%93%0BSH%C3%A5%17%C2%81H%C2%96%C2%86%04cI2%C3%91%C3%BB%C2%9DTx'W%C2%97%C3%85%17%C2%A9%C3%B9%C3%B2Abeyy%60S1%C2%BDF%C3%9A!d%C2%9BOac2%C2%A8E%0E%C3%85m%C3%9C6%C2%B7%C2%A0%0A%C3%9A4R)*%C2%93*%13%C2%97J%C3%86*%3Aqs%20%1Dg%C2%B9%C2%81(%12%C3%87%C2%86gt'.9%C2%ABdh%C3%9F%C3%A7%C2%97%C2%AC%0E%0F%C3%8D%C3%9E%C3%9E%5E%C3%9F%C3%B3qI%C3%91a%C3%89T%C2%974%C3%A7%00%08e%C2%AC2%C2%B1H*%2F5%C2%94%C3%BA%C3%A2%1F%C2%B9%5Ew%C2%92db%1Bw%C3%96D%C2%A5%C3%966i%C3%87%08g'e%C3%83%C3%8F%C2%92%20%C3%8D%C2%9AL%25%C3%B1Z%1FnM%C2%B3Ll%5E%C3%A1W%C3%9D%C2%BF%C2%A7J%C3%94N%C2%BAL%00%10%C3%8A%C2%98eb%C3%B3%0AiG%7F%C2%90%09%40%C2%8D%C2%85%C2%92en%C2%8E%C2%A4r%C3%B9%C2%A6%C2%ACm(%C2%A7%C3%A6u%26%C2%99%C3%90%C3%A7%07%C2%98%01%C2%A1d%C2%9D%C2%9B%C2%B3%60%C3%92--%C2%B9m%C3%A6%C3%BA%C2%86%C2%91%C2%87EB'%C3%94k%00%0Cen%C3%9ANx%C2%94%2B%C2%AD%15%C2%99%C2%A5%0C%00S.%C2%942%C2%96m%C3%94%C3%8F%5Ee%C2%9C%C2%A5%0C%00S.%C2%942%C3%97%C2%80%C3%95%2C%C3%A5%5Es%C2%BEo!%C2%A7I%C2%91%C2%89%C2%BAb%C2%AAzUM%C2%89-%3CS%C2%91%C2%9Bf%1A%C2%ABND5%1Ev%C3%88X%C3%87%C2%BA%C2%B5%24%C2%A9%C2%AF%C3%AF%C3%93%C2%A7%7Dk%C2%8F%C2%A8%16%C3%867%C3%8FG%C2%A5%C3%BA%C3%AE%10u%C3%92d%C3%85%24.%C2%AE%C3%A7%13%C3%B9~%C3%BEa%C3%B0%C2%BCo%25%C2%B9p%C2%B5%C2%B8%C3%95U%C3%93j%C2%B5n%C2%AE%C2%87%C2%8A%1F%C3%83%C2%B5S%C2%82%C3%8F%C3%80%C3%96%1C%08%C2%A5T%C2%99%C2%A4%5D%036%C3%8D%2C%C3%A5%C2%AA%C3%91Jj%C2%BE%C2%825ESjXz%C3%A8%C3%BF%C3%95%C2%A0%C3%94%00U%C3%83%C2%92%C2%B7%C2%84%C2%BE%C3%BB%C3%A2E%C3%9F%C2%BF%C2%B5%0C%C2%82%C3%AF%C2%B5%C2%9A%C3%8D%C3%A6%C2%80P%C2%8A%C2%96%C3%AD%7B%C2%B7%07%09%C3%9E'%C2%8A%15%C2%9C%C3%AFX%C2%BB%C3%B2%C2%9B%1E%12%C2%8A*%7F%C2%AFX%C3%B3e%2CL%7CRVw%C3%84%C2%A2K%10%C3%9C%0D%1Ei%C2%86%C2%94%25%C2%95%C3%AE%C3%BD%3Fx%C3%9F%C2%AF%C3%AA%7Dl%C3%A2d%C3%A2%23ll%07%07%C2%A9%26%04%C2%A6%25n%C2%A1%26E%05U_%0B%C2%BD%C3%9F%C2%9F%C2%8E%C2%8FS%C2%89K%C3%87%3Cy%C3%B2%C2%84-B%10%C2%8A%1F%C3%9F%C2%8A%C3%ACy%26%C3%BA%15%C2%99%C2%A5%C2%AC%3Bc%C3%96%C3%8D%C2%B4%C2%8A%201ld%C3%9CkG%C3%97iT%C2%8B%26I%26Iu8Y%C3%8F%C2%ADPw48%C2%8F%C2%ACuAv%C3%9F!%C2%A0%C3%8B3%C2%94%22%C2%B3%C2%86%C3%B3%C3%8CR%C2%B6%C2%BB%14%C2%BA%5BD%C2%94I%C3%9C%C2%9D%C3%98%C2%86%C3%B2%C3%A1.%C2%82w%C3%AE%C3%9CD%11%C3%AA%C2%A2%C3%A9%C2%A1%3B%C2%B9%C2%9BC%C3%90%C2%B1n%C3%A4bs0Q%C2%A22%1A%C2%B6%C3%AA%C2%9B%C3%9E%C3%97v%C2%B1%C3%82%C3%AE%C2%92%C3%B3%C2%9E%C3%AA%16%C3%B9%26%1A%C2%BA%C3%87%C2%A5Y%40I%5B%C2%A4%C3%86%C3%89%C3%84%C2%BE%C2%9Eo%7BVu%C3%A1%24%23%C2%BA%3E%08%C2%A5%14%C2%99%C3%A4%C2%99%C2%A5%C2%BC%C2%B6%C3%BF%C2%91Y%C3%B2%C3%8C%C3%BC%C2%AD%22B%C3%B1v7Z%C2%AD%C2%9B%C2%85%C2%9B%C3%B5P%C2%A3V%C2%83%C2%B3%C2%B3%C2%8A%7Dsl%7C%7B%16K%26q%C3%B3k%C2%A2%C3%89%C3%9F%24667o%C3%9E%C3%97%7D-%C2%BD%C2%86%2F%C3%91%C2%9AuN%C2%8F%C2%84%C3%A0%C2%8B%C2%86%C3%9C5r%C2%A25D%C2%BA.y%C2%B6%13%C2%81%C2%9A%09e%142%C3%892KY%C3%87%2C%C3%B9V%C3%9C%C2%AF%C2%80%C3%B0%C3%8E%C3%ABY%C3%A3%24%14%C3%83%C3%B5%C3%B3v%C2%84G%0Dh%C2%94wa%C3%9F%C3%92%09z%C2%AF%22%C3%8B%23%C3%A4E%02%C3%B5%C2%A1%C2%99%C3%91%C3%91%11%C2%A0P%C2%A4%C2%81%60%C2%94%C3%88e%C2%94%C2%87%1CJ%C2%A52%C2%89%0A%C3%A3%C3%B2%C3%8E%C2%8Fbeb%C3%86%24%13%2B%C2%94a%C3%9D%015p%C3%9D%C2%BD%C2%8F%C2%8F%C2%8F%C3%83h%60%14I%C3%88%C2%B8%7Dr%C3%AE%06%5D-w%C2%A5%C3%BCa%7B%C3%AA%C2%94%C3%99%C3%B5%C3%B3%C3%8D%C2%AC%3E%C2%BF%16%2C%20%C2%94%C3%8Aeb%C3%B3%0E%C2%BEY%C3%8Aq2iV%C3%BC%C2%B9u%C3%87M%C3%9B%40%C3%94%C3%B0%24%C2%96%C2%A2R%C3%B1%09B%C3%A7%C2%A0%C3%AEC%C2%BB%C3%9DN%15%C3%8D%00B%C2%A9%C2%A5L%7C%C2%B3%C2%94%C2%93%C2%B6%3C%C3%9D%C3%AC%3C%C2%AFt%13u%C2%BB.%C2%8A%1E%3A%C3%9Fa%7B%C3%A9%C2%8C%22b%C3%B0%25cU%2C%26%7Ck%C3%8FJde%0E!_x%C2%B6%09%C2%B1%C2%BF%5B%C3%9F%C3%A7%1F%C3%A5%C2%B09%C3%8C%C2%98P%C2%AA%C2%90%C2%89ER%C3%B9%C3%97%C3%BE%C3%9D%C3%84-O%C2%B5%17%C3%90(%C2%AAr%C2%B3%C2%A0%C2%84%C2%AAf9%C3%AB%7C%C3%9F%7D%C3%AF%3D%C2%B3%C2%B5%C2%B5%15%C3%BE%3Dn7%C2%BD%22%C2%BB%C3%BF%C3%85%0D%15k%C2%94%C3%AB%C3%B9%C2%B3ga%04%C3%A4%C2%A3%C3%8C!%C3%A4%C2%B8%3D%C2%97%C3%9Dj%60Ef%3A%C3%8F'%C2%9F%7F%1E%5E%C2%B3h%C2%A4f%0B%00%C2%A3%0FjT%C3%8Ac%C2%AE%C3%AE2%C2%B1%C2%8Dfa%C3%B5%C3%A7%C2%892%C2%89%C2%9E%C3%9By%C3%8A%25%12%C2%8A%60%C2%87%C2%AB%C2%95%C2%88%C3%95%C3%B2%C2%8F%3Aw5%C2%B0%C2%9B!%C3%A2H%C3%A9%C3%B97%C2%A7%C2%9B%3F9%C2%BB%C2%99S%0C%C3%AE%10%C3%B2(%C2%B1%25%C3%B5n.%25%2C%5E%0B%C3%A4a%C2%A3'u%C2%BDlt%C2%A2%C3%AB%C2%A5%C3%8F%C2%A2%C3%99%C3%A1J%1A%C3%87%C2%8D6%C2%91o%C2%A9%C2%91P%C2%AA%C2%96%C2%89%C2%B7%C2%AB%C2%90%C2%B0Ka%2B%C3%A5%12%09E%C2%A2%C2%85%C3%A89)%C3%B2H%13%7D%C3%A4m%24i%C2%87%C2%8A%C3%A3%C2%88%0E!%C2%8F%1A%C3%89%C3%8A%17%1D%25%C3%AD%C2%8B%C2%AC%C3%9F%C2%BF%C2%A4rzrB%0B%C2%A7%C3%8Bc%26Z%26e%137)o%18%C2%8AN%C3%B2n%2C%1E%C2%B7%C3%8A%C2%BE%04%C3%A5%3E%7C%C3%B5%1De%26g%15%C2%95e%C2%9DWe%C3%ABT(j%23B%19%C2%BBL%C3%AC%C2%97q%C3%B3%C3%8B%C2%AF*%C3%8D%C2%97D%C3%83%7C%C3%A5J%C2%94'H%3B%C3%A9%C2%AEH%03%C2%8A%C3%9B%C3%B2T%C3%97%C3%8D7%C3%ADA%C3%87%C2%BA%C3%82%C2%93%04%C2%B5%C2%95G%3Bae%C3%BE%22XQj~%C3%93%C2%B0%12%7C%C2%B7%C3%A8%0D%C2%88P%C3%86.%13%7D%19%C2%B3%C2%AEQ%1B%C3%9EMG%C2%94%5B%C2%B1%15%C2%AFv%C2%84'%C2%AE%C3%AAS%C3%8F%C2%AB*t%7D%7D%3Dw%03Rw%C3%85G%C3%9C%0Au%C2%9Dv%C3%9B%C2%9B%C2%AB)%7B~%C2%8F%C2%AE%C2%836%7D%C2%8B%C2%BB%1E%C2%A3%C2%B8%16P%C2%9C%C3%86%C3%9B%C2%B7o%C3%BF-%C3%B8%C3%B3%C2%9D%C2%B2%C3%9E%40I1%7B%C2%A7U%C3%88l%C3%8B%C2%AF%3Fh%C3%8C%C2%85%C3%8B0N%C2%A2L%C2%A2%7C%C3%9C%C3%B8%C3%8E%C3%90%C2%A5%0F%C2%ACLt%C2%8EW%C3%97Rq%C3%8B%C3%8FG%C2%91%08%C2%8CF%2C%1AR%C2%ADsH%1F%1D%26%C2%AE%C3%BB%C2%B5%C2%A0%C3%8B3%C3%81%C2%91I%C3%9F%7B%04%22Y%C3%8A!%C2%93%C2%B2%60d%C2%A2%3F%22a%C2%BE%0E%5D%C2%9E%C2%A9%C2%92%C3%89Q%10%C2%9D4'D%26%00%08%05%C2%99%00%20%14d%C2%82L%00fB(%C3%88%04%00%C2%A1%20%13%00%18%C3%9F(%C3%8F%C2%A7%C2%BD%C3%97%C3%A6S%C3%B3%3A%C3%95%C2%B1j%C3%BC%C2%9A%1C%C2%97%05I%26K%C2%85%C2%A5%24%C3%B6n%C3%AFk%C2%BE%11%00%C2%B3%C3%94%C3%A5%01%00%C2%84%02%00Pm%C2%97G%C2%95%C2%9EZ%5B%03%00%C2%88P%00%00%10%0A%00%C3%8CH%C2%97G%0B%C3%A4%C2%B8%C3%BB%C3%94%C3%96%C2%91%C2%B8%C3%B5Q%01%10J%06%C2%98J%0E%40%C2%97%07%00%00%C2%A1%00%00B%01%00%C2%84%02%00%C2%80P%00%00%C2%A1%00%00B%01%00%C2%84%02%00%C2%80P%00%00%C2%A1%00%00B%01%00%40(%00%C2%80P%00%00%C2%A1%00%00B%01%00%40(%00%C2%80P%00%00%C2%A1%00%00%20%14%00%40(%00%C2%80P%00%60%C2%86%C3%B9%C2%BF%00%03%00%1D%26S%C2%87%C2%A7Z%C3%94%C2%9B%00%00%00%00IEND%C2%AEB%60%C2%82";
var image25 = tab4.add("image", undefined, File.decode(image25_imgString), {name: "image25"});

var YouTubeButton = tab4.add("button", undefined, undefined, {name: "YouTubeButton"});
    YouTubeButton.text = "www.youtube.com/@Anti-StaticTV";

var statictext27 = tab4.add("statictext", undefined, undefined, {name: "statictext27", multiline: true});
    statictext27.text = "This work is provided \u0022as is,\u0022 without warranty of any kind, expressed or implied. In no event shall the author be held liable for any damages arising in any way from the use of this script.";
    statictext27.preferredSize.width = 280;

var image26_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00X%00%00%00%1F%08%06%00%00%00c%C3%88%0A%C3%A0%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%0C%0CIDATx%C3%9A%C3%ACZ%09TTW%12%C2%ADn%1A1%C2%82%C3%8A%C3%A6%C2%92%C3%91%11%1DQAQP%C2%8C%C3%8Ab%04%C2%97%C2%A8%C3%A7hD%C3%B1DQ%C2%A3%C2%A2%C2%93%C3%91%0C%C2%A0f%C3%82%C2%B8%C2%84%18%C3%B4%C2%A8%07%C3%97%C2%A8q%143%C3%AE%11u%C3%86%13%12%0C%C2%9C%00%11D%05%11%C3%B7%26%C3%AEk%C3%9CW%24%C3%8E%00n%C3%90%C3%BD%C2%A7%C2%AA%C3%BE%C3%82%C3%AFf%C3%ADFs%C3%8E8S%C3%A6%C3%B1%C3%9F%C3%BF%C3%AF%C2%BD%C3%BA%C3%BD%C3%AF%C2%ABw%C2%AB%C3%AA%C2%BDh%00E%10%04%7B%C2%8DF%C2%93%02%C3%BF%C2%97W.%3A%C3%BAS%C2%AF%5E%C2%BD4%C2%BC%04.Y%1E%07%C2%A0%C3%91%C2%82%C2%8DV%C2%83%17-h56%5C%07-%3D%C3%93%02N%02%C2%B7k%C3%B1J%C2%8F%C3%B1FR%23%C2%80Q%C2%A0%C2%8B%11%C2%AF%02M%18%18%C2%8DF%C2%BC5%C2%82%C3%81Hm%06%C2%AC%0BX7%C2%8A%7D%C3%B8%C2%99%C2%91%C3%BB%C3%91%3Fq0%5E%C3%A8Nxs%C3%80%C2%9D%173%C2%AF%1C!%02%C2%B7%C2%8B%C2%8F7%02i%03Z%1B-_ml%C3%8A%C2%8B%C2%96%40%C3%86%C2%ABF%02X%23%15i%05(%C2%85%C2%803%18%08D%03%5E%C2%A5%22%C3%95%C2%8D%06%23%C3%97E%C3%A0%C2%8D%12%C3%88%12%C3%90%0C%C2%BA%C2%A0%C3%A8%7B%13%C3%A4%C3%AC%C2%99s%C3%A5%00%C2%A7f%C3%BC%C2%A8%C2%80%C2%AA%C3%85%C2%A2%C2%93%C2%80%C3%95%C3%99%C3%A8%40%C2%A7%C3%931%C3%A8%C2%87s%C3%B2%40%C2%9F%C2%AF%C2%87%C2%8B%17.BIq%C2%89%C3%9A%C2%80%C3%81%C3%9E%C3%81%1E%3Axt%00%1F%1F%1F%C3%B0%0B%C3%B0C0%0DPf(c%60K%C2%B1%08eex_%0E%C2%B8%08%C2%B2A%C2%B4j%C2%B2%5C%C2%83h%C3%8D%C3%B2%0A%C2%A8L._%C2%B8%0C9%07s%C3%A0%C3%86%C2%8D%C2%9B%26%C3%8F%C3%9D%C3%9CZA%C3%A0%C2%BB%C2%81%C3%90%C3%8E%C2%A3%5D%C2%9D%00y%1D%C3%BA%15%C2%88%C3%92%C3%B7%C2%A51%C2%982%C2%B8%04%C2%AA-%16%1B%C2%9D-%C3%BC%C2%AC%C3%8F%C2%87%5D%3B%C3%BF%C3%81%C3%80%3Ey%C3%B2%04%C2%8A%C2%8A%C2%8A%C2%A0%0C%013%C3%A1%1A%C3%AC%C3%9B%C2%B0aCptr%C2%84%0E%1D%3A%40%C3%98%C3%980%C3%A8%C3%A2%C3%9D%05%0C%0Cl%19%C3%B77H%20%C3%93%3DQ%08%5B%C2%B5%C3%9A%C2%92%C2%AB%C2%B0%C3%A2%C3%82%C3%87%C2%BFBRb%12Z%C3%84Y(xT%C3%80%C3%BA%C3%9B%C2%BA%C2%BBs%C3%9B%C3%95%2BW%C3%A0%C3%A2%C3%85%C2%8B%C3%A0%C3%9A%C3%84%15%3Ayu%C2%82%C2%90%C3%90%10pvq%C2%B2%08%C2%84%C3%97%C2%A9_'W%C2%88c%C3%89J%C3%8B%C3%81%C2%B5%05%C2%9D%C2%AD-l%C3%9D%C2%B2%0DR~H%C2%86%5B7o%C3%81%C2%8B%17%2F%18%C3%84%C3%BE%C3%BD%C3%BBC%C3%B3%C3%A6%C3%8D%C3%81%C3%87%C3%9B%C2%9B%C3%87%C3%AA%C3%B3%C3%B3%C3%A1%C3%BE%C3%BD%C3%BBp%C3%A8%C3%90!%C3%B8%C3%A5%C3%9A%2Fp%C3%B7%C3%8E%5D%C2%B8%C2%82%3Fl%C3%88%C3%BBC%C3%A1%C2%83%0FF%C2%82%C2%9D%5D%3D%C3%99%C3%90A%C2%8B%7Fm%04%C2%9Br%10%C2%99%C2%875%C3%8A%5C%13%C2%B7%1BU%C3%A0%3E%2By%06%C3%B1k%C3%96%C3%83%25%C3%BCH%C3%9Fn%C3%9D%60%C3%A9%C2%92%25%C3%A0%C3%A1%C3%A1%C2%89%2B%C3%86%C2%81%C3%9BK%C2%8A%C2%8B%C3%A1%C3%82%C2%85%C3%B3%C2%B0%C3%B6ok%C3%A1%40%C3%96%01%C2%B8w%C3%B7%3E%7C%1C5%C2%B5%C3%96%20%C2%BCn%C3%BD%C2%8A%05%C3%AF%C3%8B%C3%8ET%C3%A8%C2%A0%C2%9E-%C2%81%5B%C2%8F%C3%81M%C3%B8f%3B%C3%8F*%01%1B%1A%1A%0A%C2%A3G%C2%8F%C3%86%25%C3%A3%06%C3%B5%C3%AB%C3%97%07GGG%1ELV%C3%BD%C3%BC%C3%B9sx%C3%BC%C3%B81%24''%C3%83%C2%BAu%C3%AB%C3%98%C3%8Ai%C3%96%03%02%03%60%C3%B6%C2%9C%C2%99%60%C2%8B%C3%BAJ%C3%8BJ%C2%B9%C2%B05%1Bd%5E60g%1B%C3%88%11%C2%AA%C2%ACX%C2%B6%C3%A0%0D%C3%AB6%C3%82%C2%BE%C3%8C%7D%3C%C2%A9%C3%8B%C2%97-c%C3%8B%C2%A2w%07%07%07s%7BVV%16%C2%BF%C2%9B%2Cm%7BB%02%C2%ACX%C2%B1%02%C3%BA%04%C3%B7%C2%81%C2%A9%C2%91Sj%05%40e%C3%BA%C3%A9%C2%B7%17%3Cz%C3%84%C3%AD%C2%AEM%C2%9A%C3%B0%C2%B7%5B%C2%AB_e%C3%81%C3%A5%C2%9CK%C2%B4%C2%A0%06%C3%97%C3%9D%C2%BD-%2C%5E%C2%BC%04%7C%7D%7D%C2%A1e%C3%8B%C2%96%3C%09j%C2%91%C2%81%26i%C3%9B%C2%B6-%7F%7Cdd%04Z%C3%B1U%C3%98%C2%9B%C2%BE%17Z%C2%B5r%C2%83I%7F%0Cg*%C3%A0%C3%A8B%2B9E%C2%A2%07v%C2%968%C3%93%02%C3%BE%C3%81%C3%82Q%05%C3%8D%3C%3E%C2%BCt%C3%BE%12%C3%A4d%C3%A7%C2%80_%C2%AF%5E%C3%B0%C3%89'3p%C2%89z)%C3%AF%C3%99%C2%BF%7F%C2%BFR'%C3%80%C2%A9m%C3%86%C2%8C%19%C2%90%C2%8B%C2%AB%C3%A8%C3%B0%C2%A1%C3%83%C3%90%C2%AF%7F%C3%9F%1A9%C2%939%C3%97L%C3%BF%C3%9E%C3%B4tX%C2%BF~%3D%C2%BC%C3%84%C3%95%C3%8A%11%C2%96%C2%9D%1D%C3%8C%C2%89%C2%89%C2%81%C3%AE%C3%9D%C2%BB%5B%C2%AC%C2%9Fq%C2%95%23%C2%8A%C3%89%1FM%12%C2%A9%01%C2%AD%C3%B7t%C3%BEiX%C2%BEt%C2%99%02%C3%AE%C3%86%0D%1B!%C2%B8o_puu%C3%A5h%C2%A2%3Aq%C3%80%C2%A5%C3%95%C2%BAuk%C3%A8%C2%8A%C3%8E.%C3%A7P%0E%3Cx%C3%B0%10%C2%AE%5D%C2%BB%C3%8A%C3%8E%C3%AF%C3%AD%C3%A6o%C2%B3%C2%95%C2%82%14%C2%9E)%C3%91%07%C2%91%04%C2%81%C2%AB12%C2%8F%C3%88%20'l%C3%9B%C2%81%C2%96s%156o%C3%9E%04%01%01%C2%81%C3%BC%C3%9Bd%09%0A%0A%C2%82%C2%89%13'%C3%B2%C2%BB%C3%94%C3%AFn%C2%85%0Ei%C3%93%C2%A6%C3%8D%C3%B0%C3%B2e)%C3%B4%C3%B4%C3%AFY%C3%ADo%C3%9D%C2%B1m%C2%A7%C2%89%C3%BE%2B%C2%97%2F%C3%83gs%C3%A6%40%C3%A1%C3%83%02prv%01%17gg%C3%88%C3%8B%C3%8B%C2%83%C2%9F%C2%91%02%1B%C2%BC%C3%B5%16%C2%BC%C3%93%C2%A3%C2%87E%C3%BA%C2%99%C3%B2%C2%94%0A%C2%87b%C2%A2%15%C3%87%C2%AF%C2%8DWha%C3%81%C2%82%C2%85%C2%B8%C3%8C%03%C3%99JjM%C3%AC8Q4%C2%86%26%C2%86t%C2%90.%C3%92%C2%A9%C2%84%7CT4Z1%C3%A4%23%C3%AE%076a%C2%91%C2%B1%C2%B4%C3%80a%20%C3%89%C2%89%C3%A3'%C2%A0k%C3%97%C2%AE%C3%BC%C3%B1%0D%1A4P%C3%B4%2FA%C2%9E%C2%9C%3F%7F%3E%17%C2%AA%C2%AB%C2%85%C3%BA%C3%92%18%1A%5B%C2%93%C2%A8%C3%B5%C2%93%C2%9C%3E%C2%A1%C2%87%C3%AB%C3%97%C2%AFC%C2%BF%C2%BE%C3%BDa%C3%91%C3%A28%C2%88%C3%B9b.%C2%8C%1B%3F%C2%9E%C3%B9y%C3%A3%C2%86%0D%16%C3%AB7%01%C3%98F%C2%8Ass%C3%91%C3%BCO%C2%9D%3A%C3%85%C3%8FF%C2%8D%1A%05C%C2%86%0C%C2%A9%40%09%C2%96%C2%80%3Cm%C3%BAt%C2%BE%3Fu%C3%B2%14%C3%A4%C3%A6%C3%A6%C2%8Aq%C2%B6V%02%C2%96%13%16-%C3%B1%01%C3%88%C3%BF%C3%94%C3%B2%C3%B4%C3%A9S%C3%B0%C3%85%C2%A5i%3E%C2%B9%C2%ABV%C2%ADb%C2%8A%C2%A0Bu%C2%B5P_%1ACck%12%C2%B5~%C3%B2%07%7F%C3%9F%C2%B2%C2%89%C2%9F%1F%3Eq%C2%84C%C3%8E%3F%20%C3%9D%C2%8D%1C9R%C2%8C%26%C2%AE%5E%C2%85'%C2%BF%16Z%C2%A4%C3%9F%C2%84%C2%839C%C3%83%C2%8F%C3%8F%C3%8C%C3%88T%C2%A2%C2%85%19%08%C2%8E%C2%83%C3%A4M%C3%B3%C3%B5zHLL%C2%84%C3%A2%C2%92%12%C2%BE%C3%B7%C3%86%08b%C3%82%C2%84%09%C2%95%C2%B6%C3%B9%C3%BB%C3%BB%C3%B3%0F%23%C2%90%23%23%22%C3%A0%C2%AB%C3%95%C2%AB%C3%99qd%C3%AE%C3%8D%04%3F%7F%3F%C3%90%C2%96I%C2%89%0A%C2%87%0CR%C3%82%C3%82%05%C3%BF3%C2%96%C3%B3%C2%B0%C2%BC%C3%AC%C3%8D%C2%85%22%C2%96%C3%8A%C3%AA%C3%95%C2%8D%C2%A9%C2%8E%C3%92Hh%C2%85%C2%BC%1F%12%02_%7F%C2%BD%1EF%C2%87%C2%85)%C3%ADNH%13%24%C3%A4%C2%98%C2%8B%C2%8AJ0%0Cu%C2%B6H%C2%BF%020%5B%13~0q%0EI%C2%9F%3E%7Dp%16%3D%14%00'%C2%86%C2%87%C3%83%C3%AD%C3%9B%C2%B7%C2%95%C3%B8%C2%97%1C%5B%3Er%C3%93%C2%88%11%C2%A1%10%15%15i%C3%92F%C2%91%04%C3%8D%C3%B8%C2%ACY%C2%B38%C2%9C%23%5D)))%C2%AC%C2%9B%C3%ADTJ%C2%BB%C3%A5LP%23%C2%81%C2%AB%C2%AC)C%C3%B9%0F%24%C3%AFm.%C2%83%06%0D%C2%82%C2%B4%C2%B44%C2%A5n.%C2%95%C2%8D%C2%A9J%C3%A4%C2%BE%C2%B4z%3D%C3%90j%C3%87!%C2%B8%C2%9D%3BwV%C3%9A%2F%C2%9C%3F%C2%AF%C3%94%C2%9B4mb%C2%B1~%15E%C2%88K%C3%B4%C3%BE%3D%C3%91%22z%C3%B6%C3%AC%C2%A9P%C3%83%C3%82E%0BA%C2%8F%20%C3%ABt6%C3%A8a%C3%A3a%5El%2C%C2%86F%C3%8F%C2%A0i%C2%B3f%18%C2%B6%2C%C3%A36G%C3%87%C3%86%C3%9C%C3%B6%C3%A9%C2%A7%C3%91P%5C%5C%C2%84%C2%B1%C2%AF%C2%9D%C3%B2%C2%92~%C3%BD%C3%BA%C2%89%C3%96%C2%86%C2%BA5L%0B%22%C2%B8%C3%84%C2%BD%12%C3%86%5C%C3%97%C2%82%C3%96%2C%C2%83r%C2%83%C3%AC%C3%AClt%C2%94%C2%A6V%C2%BAr%C3%A5%C3%8AJ%C3%AB%24%C3%94%C2%97%C3%86%C3%90%C3%98%C2%9A%C3%84%5C%C3%BF%23%0C%C3%8D222%60%C3%91%C2%82%05%18A%7D%C3%83e%C3%95%C2%97_r%C3%9B%C3%A8%C2%B01L%0F%C2%96%C3%A87%01X%C2%B6%24%C3%99%0A)%0A%C2%90%25--%C2%9D%C2%AF!!%C3%83a%C3%98%C2%B0%10%C2%98%C2%80%C3%9E%C3%BB%C3%BB%C3%AF%C2%93%60%22RD%06R%C2%8AhI%C2%83%C2%B9m%C3%AA%C3%94)%C3%9CF%C3%B1%C2%B2%2C%C2%9E%C3%92J%20%C3%9D%C2%A2%C3%95jT!x%C3%95%C3%B2%C3%9E%C2%A0%C3%B78%C3%86%5E%C2%B1%7C%C2%85%C3%89s%0FI%C2%9Fy%C2%9D%C2%84%C3%BA%C3%92%18%1Ak%C2%A9%C3%BE~%18)u%C3%AC%C3%98%11%C3%8E%C2%9D%3B%07%C3%AB%C3%A3%C3%A3%C2%B9P%16%C3%A7%1F%10%00%C3%A1%C2%93'Y%C2%AC%C3%9F%C2%94%C2%83%C2%AB%C3%A1%C2%B1b%C3%8CfHh%C2%B9%C3%93%2CR%C3%A9%C2%85%C2%B1%C2%A3%C2%BA%C2%8DB8%C2%B9%C2%8D%C3%AA%C3%A6%C2%8E%C3%87%1A%C3%B1%C3%AF%C3%AD%07%C3%A98%C2%B9%5B%C2%B6n%05%17%C3%94I%C2%94S%C2%9D%C2%AC%C3%85%04%C2%87%C3%BAR(Ec%C2%AD%C3%91%1F%C2%8D%C2%85%C3%82%C2%B1%07%0F%1F*V%C3%9E%0D%C3%A3%C3%BF6m%C3%9AX%C2%AC%C2%BF%C2%82%05%C2%AB%C3%B3%C3%BF%C3%8B*%C2%9E%C2%A1XX%C2%B4%C3%A4TN%1D)%0D%0E%0B%1B%0D%C3%9B%C2%B6mS%C3%9Arr%C2%B2%2B%C2%B4%C3%89rO%C3%A5%C2%88%C3%84w%C3%88%C2%A5%06%07%C3%94%C3%90%01%26%7F4%19%C2%9E%3D%7B%C3%8E%C3%91%C3%82%17s%C3%A7*%C3%8B%C2%9928*2-P%C3%9B%C3%A2%C2%B88%C3%AE%3B%C3%A6%C3%831%3C%C3%96%1A%C3%BD%C3%B5%C3%AB%C3%9B%C3%81p%C3%8CX%C3%83%C3%91%C3%A7P%192t(%3A%7C%07%C2%98%3Fo%C2%9E%C3%85%C3%BAM%2CX%0E%C3%B8iW%C2%8Cv%C3%8A%C3%88%C2%81%C3%89%12%11%11%C3%85%C2%99%C2%8E%5E%C2%9F%0F%C2%83%06%0F%C3%A6%C3%94%C3%B4%C3%8C%C2%993%C3%88%C2%BBNJ%5B%5E%C3%9E%C2%91%0Amr%C2%94q%16%C2%97%1C%09%C3%A96O0%C3%A49%C2%95%C3%AE*%C3%BC%C3%80%0E%C2%9E%C3%ADa%C3%86_%C2%A6%C3%83v%C3%8C*%C3%A31%C3%83%C3%9A%C2%8B%1C%C3%A9%C3%A5%C3%95%09'%C2%B6%1D~dC%C3%98%C2%B1%23%01%C3%9Fw%C2%96'%C2%B6%C2%81%7D%03%C2%98%12%C3%B1'%C3%A8%C3%AC%C3%ADU%C3%ABUR%C2%93~%C3%BD%C2%A9%C2%93u%C3%92%C2%AF%00L%1B%C3%A3%3A%C3%BCZZ%1E%C3%BB%C3%B7eAzz%C2%BA%C3%92i%C3%9C%C2%B8%C2%B1%40%C3%81%C2%93%3A%14%23%C2%8E%C2%9D%C2%8Ea%1C%C3%91%01%C3%91%C3%84w%C3%9F%25B%C2%89Y%C2%9B%C3%82%C3%A1%C2%A9%C2%A9%7C%C3%B5%C3%82T%C2%94%C2%80%C2%A5w%C2%89%7B%C3%87%C3%92f%C2%8F%20%02-%C2%88i%C2%9Ci%C2%AA%C2%89%C2%8E%C2%B5%C2%B3%C2%8F%17D%3AGB%C3%BE%C3%89%7C%C3%9EN%C2%A4%09%24%0A%23'L%7C%C3%A8%C3%A2%C3%A2%02%03%07%0F%04%C3%AFn%C3%9E%C3%90%C2%A2%C3%A5%C3%AF%C3%A8%00%C2%A1%C3%96%00%C2%BCn%C3%BD%C3%8AfO%C3%9E%C3%B1%3C%1Ch%07%C3%89%7B~%C2%80%C3%98%C2%B9%C2%B1%C2%AC%7C%C3%97%C2%AE%5DJ%C2%A0M%2F%C2%BAC%C2%A1%C2%98A%C2%8C%C2%A1%1A7n%C2%AC%C2%A4%C2%A9%05%05%05p%C3%A7%C3%8E%1DE%C2%A9%C2%BA-%15%C3%83%C2%A9%11%C3%83%C2%87%C2%B3eG%C3%8F%C2%8C%C2%86%C2%B1%1F%C2%8E%C3%A58%C2%BB%C2%B4%C3%B4%C2%A5%C2%B8%C3%B1S*ng%C3%B2%C3%BE%C2%B1%C2%B1%C3%B2%0D%1F%C3%85%17%14%15sVXb%16%C3%A4%C3%9Bc%0CK%1BK%C2%B5%5D%C2%B6U%C3%89%C3%AB%C3%90%C2%AF%00%C2%9C%7B%C3%B4%10%C3%8FLI%C3%89S%08%1D%16%C3%8A%C2%A0QJ%C2%98%C2%9A%C3%BA%234k%C3%96%C3%9C%C2%AA%1FL%C2%9C%1C%C2%84%C2%9E%C3%B9%C3%B8%C2%B1cl%C3%A9%C2%BB%13wC%C2%A3%C3%86%C2%8DDpKK%C2%B9%18%C3%A4%C2%BDbi%C3%B3%C2%BD%3A%C2%80%C3%BF%1BEqr%C3%A2%06%C2%B8%11%1A7j%04%1FGL%15s%C3%B3%C3%93%C2%A7!%3A%3A%C2%9A%C2%81%C2%B2%06%C3%9CHL%40%C3%B4R%C3%9A%3D!%7C%028%3B%3B%C2%89GIF%C2%A3%C2%B4%C3%91%C2%AE%02%C2%92v%C3%93%24%C2%8A%10%C3%9E%C2%A0%C2%839%C2%85%C2%83%C2%A3%C3%BE%3C%0D%C3%A3%C3%9B%C3%B1%10%C3%98%3B%10%06%0E%1A%08G%C3%B2%C2%8E%C3%82O%C3%A9%3FAR%C3%92%1E%C2%A6%C2%8B%C2%98%C2%98%C3%8F%C2%91%C3%B8%C3%9Dk%C2%A5%C2%94%C2%BC%C3%BA%C3%AC%C3%99%C2%B3%C3%A1%C3%9Bo%13%C3%99%3A%03%C3%9F%C3%AD%0DC%C2%87%0D%C3%A5%C3%BA%C2%B1%23%C3%87%60%C3%A3%C2%86M%26%C3%A7x2%C2%A0%22%07%C2%AB%5C%C3%9D%1Bt%00%C3%8Aq%C2%93%5Bk7!nI%C2%9Cp2%C3%BF%C2%B8%C2%90%C2%9C%C2%9A%22%200%C3%BC%1C%09_%08%0E%0E%16%C2%B6n%C3%9D*%14%17%15%09U%09%C2%B5Q%C2%9F%01%03%06%C3%B0%18%1A%C3%AB%C3%A1%C3%A9!%C3%ACI%C3%99%C3%83%3AW%C2%AFY%25%60%3C%C2%A9%C2%8E%C3%93%C3%9E%C3%B8%C2%A21%C2%B7%C2%95%C2%96%C2%BFo%093g%C3%BE%C2%95%0F%C3%B9n%C3%9E%C2%BA%0D%C3%AB%C3%96%C2%ACeK%26%2B%C2%A6%C3%8DvOOO%C3%9E%5B%C2%A8%C3%AC%C3%88%C3%A8%C3%80%C2%81%03p%1Eswy_%C2%82%2Cw%C3%9A%C3%B4(h%C3%97%C3%8E%C2%9D%C3%8F%C2%BBb%3E%C3%BB%1Cn%5C%C2%BFa%C2%95%05%C3%881%2F%C2%89%C3%BA4C%C2%AEWv%C3%BF%C2%AA%C3%9E%C2%A1%C2%BE%C2%AF%C2%93%05%C3%8B%C2%A55Z%C3%B2WkV%C2%A3%C3%95%C2%9D%40KN%16f%C3%8D%C2%9E)%C2%A0%C2%93%C3%A26%04Z%40p%C2%B1Ok%C3%81%C3%87%C3%87%C2%87%0B%C3%95%C3%A9%19%C2%B5Q%1F%C3%AA%1B5-JHJIb%1D%09%3B%13%C2%84%C3%B6%C3%AD%C3%9B%C3%97%C3%89%12H%C2%82%C2%82%C2%82%C2%B8%C3%A0G%C3%B33u%C2%9D%C2%AEto%C2%AD~y%C2%BC%5C%C3%8C%C2%9F%C3%89%C3%AF%C2%B1%C2%A2T%04X%069ni%C2%9Cp%5C%7F%5C%C3%88%C3%8E%3D(l%C3%9F%C2%B9%C2%9DA%C3%B3%C3%AD%C3%AE%2B%60%C3%82P%C2%A1%3F%3D%C2%A3%C2%B6%C2%A8%C3%A9Q%C3%9Cw%C3%BF%C3%81%2C%1EK%C2%B4PWpe%C2%80%C3%A9%23%C3%8D%C2%81%C2%94%3F%C2%BE.%C3%A0%C2%AA%C3%B5%C2%A8%C2%81T%C2%BFS0MA%C2%AD%C2%A7%08%C2%B5%10%5D%04%C3%B6%0E%C3%80%08%20%1C%C2%9A6u%C2%85%7F%C3%BF%C2%AB%08%1E%17%16r%C2%84%60(3%C2%98%C3%BC%7F%11%14%C2%B0Sp%C3%AE%C3%A2%C3%A2%0C%0D1%12y%C2%84%C2%B9%C3%BC%C3%AE%7F%C3%AE%C2%86%C3%8C%C2%8C%7DV%C3%93%C2%82y%1A%2F%2F%C3%93%C3%98%C3%98X%C2%93%25Km%C3%B2%C3%96g%5D%C2%84%C2%8E%C2%A1%C3%94%C3%BA%C3%95%C3%AF%24%C2%AA%C2%B0%C3%A6%1D%C2%9A%C2%9A%C3%BC5%C3%A5%C3%A1n%C2%984%C3%B4%C3%A8%C3%B9%0E%C3%B4%C3%B2%C3%B3%C3%A3%C2%9D~%07%7B%7Bi%3FW%C3%BE%40%C3%B1%23)%C3%8B%C2%A3%C3%A3%C2%95%C3%83%C2%B9%C2%87%C3%A1(F%0B%C2%B7%C2%91%C3%83)Ay%25%5E%18%C3%B5%C3%8B%07%C2%9DtT%C2%A4%3E%C3%B4%7C%15%00%C2%AB%C3%B9W%C3%96%C2%AF%C3%96k%C3%AD%3Bj%3C%0B*%C3%82%C3%AC%C3%A6%C3%8C%C3%A93%0C%C3%96%C3%BE%C2%AC%03%7C%C3%92Q%C3%95%11%C2%92%C2%B8%C3%AB_%04%C2%85%C2%8F%0B_%19%C2%B0%C3%A6N%C3%87%C3%BCD%C3%B9U8%20%19Ts%C3%BDj%C2%BDuzG%C2%8B%16-%06%C3%BE%2F%C2%85N%C2%BFe%C3%B9%C2%8F%00%03%00%C2%86%C2%8Et%C2%88%15ai%C2%A4%00%00%00%00IEND%C2%AEB%60%C2%82";
var image26 = tab4.add("image", undefined, File.decode(image26_imgString), {name: "image26"});

var statictext28 = tab4.add("statictext", undefined, undefined, {name: "statictext28", multiline: true});
    statictext28.text = "This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.";
    statictext28.preferredSize.width = 280;

var statictext29 = tab4.add("statictext", undefined, undefined, {name: "statictext29", multiline: true});
    statictext29.text = "Anti-Static name and logo ©2023 James Zelasko. All rights reserved.";
    statictext29.preferredSize.width = 280;

palette.layout.layout(true);
palette.layout.resize();
palette.onResizing = palette.onResize = function () { this.layout.resize(); }














































/// --------------------------------------------------------------------------------------------------------------------
/// CONNECTIONS
/// --------------------------------------------------------------------------------------------------------------------




// RandomizeInPoints --------------------------------------------------------------------
RandomizeInPointsSlider.value = 10;
RandomizeInPointsTextbox.text = RandomizeInPointsSlider.value;
RandomizeInPointsSlider.onChanging = function() {
  RandomizeInPointsTextbox.text = Math.round(RandomizeInPointsSlider.value);
}
RandomizeInPointsTextbox.onChange = function() {
  RandomizeInPointsSlider.value = Number(Math.round(RandomizeInPointsTextbox.text));
}
RandomizeInPointsButton.onClick = function() {
  RandomizeInPoints(Number(Math.round(RandomizeInPointsTextbox.text)), RandomizeInPointsRelativeCheck.value);
}

// StaggerInPoints --------------------------------------------------------------------
StaggerInPointsSlider.value = 2;
StaggerInPointsTextbox.text = StaggerInPointsSlider.value;
StaggerInPointsSlider.onChanging = function() {
  StaggerInPointsTextbox.text = Math.round(StaggerInPointsSlider.value);
}
StaggerInPointsTextbox.onChange = function() {
  StaggerInPointsSlider.value = Number(Math.round(StaggerInPointsTextbox.text));
}
StaggerInPointsButton.onClick = function() {
  StaggerInPoints(Number(StaggerInPointsTextbox.text));
}

// FadeInOut --------------------------------------------------------------------
FadeInOutSlider.value = 10;
FadeInOutTextbox.text = FadeInOutSlider.value;
FadeInOutSlider.onChanging = function() {
  FadeInOutTextbox.text = Math.round(FadeInOutSlider.value);
}
FadeInOutTextbox.onChange = function() {
  FadeInOutSlider.value = Number(Math.round(FadeInOutTextbox.text));
}
FadeInOutButton.onClick = function() {
  FadeInOut(Number(Math.round(FadeInOutTextbox.text)));
}

// DuplicateLayer --------------------------------------------------------------------
DuplicateLayersSlider.value = 9;
DuplicateLayersTextbox.text = DuplicateLayersSlider.value;
DuplicateLayersSlider.onChanging = function() {
  DuplicateLayersTextbox.text = Math.round(DuplicateLayersSlider.value);
}
DuplicateLayersTextbox.onChange = function() {
  DuplicateLayersSlider.value = Number(Math.round(DuplicateLayersTextbox.text));
}
DuplicateLayersButton.onClick = function() {
  DuplicateLayer(Number(Math.round(DuplicateLayersTextbox.text)));
}

// RandomizeLayerOrder --------------------------------------------------------------------
RandomizeLayerOrderButton.onClick = function() {
  RandomizeLayerOrder();
}

// ProximityReOrder --------------------------------------------------------------------
ProximityReOrderTargetButton.onClick = function() {
  ProximityCreateTargetPoint();
}
ProximityReOrderButton.onClick = function() {
  ProximityReOrder();
}

// ZebraSelect --------------------------------------------------------------------
ZebraSelectButton.onClick = function() {
  ZebraSelect(ZebraSelectTextbox.text);
}

// LoopKeyframes --------------------------------------------------------------------
LoopKeyframesButton.onClick = function() {
  LoopKeyframes(LoopKeyframesDropdown.selection.text);
}

// LoopCompositions --------------------------------------------------------------------
LoopCompositionButton.onClick = function() {
  LoopCompositions();
}


//RandomizePositions --------------------------------------------------------------------
GetCompSizeButton.onClick = function() {
  RandomizePositionsXTextbox.text = app.project.activeItem.width;
  RandomizePositionsYTextbox.text = app.project.activeItem.height;
}
RandomizePositionsButton.onClick = function() {
  RandomizePositions(RandomizePositionsXTextbox.text, RandomizePositionsYTextbox.text, RandomizePositionsZTextbox.text);
}

// CenterPositions --------------------------------------------------------------------
CenterPositionsButton.onClick = function() {
  var x = CenterPositionsXCheck.value;
  var y = CenterPositionsYCheck.value;
  var z = CenterPositionsZCheck.value;
  CenterPositions(x, y, z);
}


// StaggerPositions --------------------------------------------------------------------
StaggerPositionsXCheck.onClick = function() {
  if (!StaggerPositionsXCheck.value) {
    StaggerPositionsXSlider.enabled = false;
    StaggerPositionsXTextbox.enabled = false;
  } else {
    StaggerPositionsXSlider.enabled = true;
    StaggerPositionsXTextbox.enabled = true;
  }
}
StaggerPositionsYCheck.onClick = function() {
  if (!StaggerPositionsYCheck.value) {
    StaggerPositionsYSlider.enabled = false;
    StaggerPositionsYTextbox.enabled = false;
  } else {
    StaggerPositionsYSlider.enabled = true;
    StaggerPositionsYTextbox.enabled = true;
  }
}
StaggerPositionsZCheck.onClick = function() {
  if (!StaggerPositionsZCheck.value) {
    StaggerPositionsZSlider.enabled = false;
    StaggerPositionsZTextbox.enabled = false;
  } else {
    StaggerPositionsZSlider.enabled = true;
    StaggerPositionsZTextbox.enabled = true;
  }
}
StaggerPositionsXSlider.maxvalue = 500;
StaggerPositionsXSlider.value = 100;
StaggerPositionsXTextbox.text = StaggerPositionsXSlider.value;
StaggerPositionsXSlider.onChanging = function() {
  StaggerPositionsXTextbox.text = Math.round(StaggerPositionsXSlider.value);
}
StaggerPositionsXTextbox.onChange = function() {
  StaggerPositionsXSlider.value = Number(Math.round(StaggerPositionsXTextbox.text));
}
StaggerPositionsYSlider.maxvalue = 500;
StaggerPositionsYSlider.value = 100;
StaggerPositionsYTextbox.text = StaggerPositionsYSlider.value;
StaggerPositionsYSlider.onChanging = function() {
  StaggerPositionsYTextbox.text = Math.round(StaggerPositionsYSlider.value);
}
StaggerPositionsYTextbox.onChange = function() {
  StaggerPositionsYSlider.value = Number(Math.round(StaggerPositionsYTextbox.text));
}
StaggerPositionsZSlider.maxvalue = 500;
StaggerPositionsZSlider.value = 100;
StaggerPositionsZTextbox.text = StaggerPositionsZSlider.value;
StaggerPositionsZSlider.onChanging = function() {
  StaggerPositionsZTextbox.text = Math.round(StaggerPositionsZSlider.value);
}
StaggerPositionsZTextbox.onChange = function() {
  StaggerPositionsZSlider.value = Number(Math.round(StaggerPositionsZTextbox.text));
}
StaggerPositionsButton.onClick = function() {
  var xp, yp, zp = null;
  if (StaggerPositionsXTextbox.enabled) {
    xp = Number(StaggerPositionsXTextbox.text);
  }
  if (StaggerPositionsYTextbox.enabled) {
    yp = Number(StaggerPositionsYTextbox.text);
  }
  if (StaggerPositionsZTextbox.enabled) {
    zp = Number(StaggerPositionsZTextbox.text);
  }
  StaggerPositions(xp, yp, zp);
}


//RadialPosition --------------------------------------------------------------------
RadialPositionSlider.maxvalue = 1000;
RadialPositionSlider.value = 500;
RadialPositionRadiusTextbox.text = RadialPositionSlider.value;
RadialPositionSlider.onChanging = function() {
  RadialPositionRadiusTextbox.text = Math.round(RadialPositionSlider.value);
}
RadialPositionRadiusTextbox.onChange = function() {
  RadialPositionSlider.value = Number(Math.round(RadialPositionRadiusTextbox.text));
}
RadialPositionDuplicateCheck.onClick = function() {
  if (!RadialPositionDuplicateCheck.value) {
    RadialPositionDuplicateTextbox.enabled = false;
  } else {
    RadialPositionDuplicateTextbox.enabled = true;
  }
}
RadialPositionButton.onClick = function() {
  RadialPosition(Number(RadialPositionRadiusTextbox.text), Number(RadialPositionDuplicateTextbox.text), RadialPositionDuplicateCheck.value, RadialPositionRotateCheck.value);
}


//GridPositions --------------------------------------------------------------------
GridPositionsDuplicateCheck.onClick = function() {
  if (GridPositionsDuplicateCheck.value) {
    calculateGridDuplicates();
  } else {
    GridPositionsDuplicateCheck.text = "Duplicate (x)";
  }
}
GridPositions3DCheck.onClick = function() {
  if (GridPositions3DCheck.value) {
    if (UnifyGridCountCheck.value) {
      GridStepGroup.enabled = false;
    } else {
      GridStepGroup.enabled = true;
    }
    if (UnifyGapCheck.value) {
      GapStepGroup.enabled = false;
    } else {
      GapStepGroup.enabled = true;
    }
  } else {
    GridStepGroup.enabled = false;
    GapStepGroup.enabled = false;
  }
  calculateGridDuplicates();
}
UnifyGridCountCheck.onClick = function() {
  if (!UnifyGridCountCheck.value) {
    GridRowGroup.enabled = true;
    if (GridPositions3DCheck.value) {
      GridStepGroup.enabled = true;
    }
  } else {
    GridCountRowTextbox.text = GridCountColTextbox.text;
    GridCountStepTextbox.text = GridCountColTextbox.text;
    GridRowGroup.enabled = false;
    GridStepGroup.enabled = false;
  }
  calculateGridDuplicates();
}
UnifyGapCheck.onClick = function() {
  if (!UnifyGapCheck.value) {
    GapRowGroup.enabled = true;
    if (GridPositions3DCheck.value) {
      GapStepGroup.enabled = true;
    }
  } else {
    GapRowTextbox.text = GapColTextbox.text;
    GapStepTextbox.text = GapColTextbox.text;
    GapRowGroup.enabled = false;
    GapStepGroup.enabled = false;
  }
}
GridCountColTextbox.onChange = function() {
  if (UnifyGridCountCheck.value) {
    GridCountRowTextbox.text = GridCountColTextbox.text;
    GridCountStepTextbox.text = GridCountColTextbox.text;
  }
  calculateGridDuplicates();
}
GridCountRowTextbox.onChange = function() {
  calculateGridDuplicates();
}
GridCountStepTextbox.onChange = function() {
  calculateGridDuplicates();
}
GapColTextbox.onChange = function() {
  if (UnifyGapCheck.value) {
    GapRowTextbox.text = GapColTextbox.text;
    GapStepTextbox.text = GapColTextbox.text;
  }
}
GridPositionsButton.onClick = function() {
  GridPositions(GridCountRowTextbox.text, GridCountColTextbox.text, GridCountStepTextbox.text, UnifyGridCountCheck.value, GapRowTextbox.text, GapColTextbox.text, GapStepTextbox.text, UnifyGapCheck.value, GridPositionsDuplicateCheck.value, GridPositions3DCheck.value);
}


//Randomizer --------------------------------------------------------------------
RandomizerScaleCheck.onClick = function() {
  if (!RandomizerScaleCheck.value) {
    RandomScaleGroup.enabled = false;
  } else {
    RandomScaleGroup.enabled = true;
  }
}
RandomizerRotationCheck.onClick = function() {
  if (!RandomizerRotationCheck.value) {
    RandomRotationGroup.enabled = false;
  } else {
    RandomRotationGroup.enabled = true;
  }
}
RandomizerOpacityCheck.onClick = function() {
  if (!RandomizerOpacityCheck.value) {
    RandomOpacityGroup.enabled = false;
  } else {
    RandomOpacityGroup.enabled = true;
  }
}
RandomizerButton.onClick = function() {
  Randomizer();
}


// ShakeNull --------------------------------------------------------------------
ShakeNullButton.onClick = function() {
  ShakeNull();
}

// Manager --------------------------------------------------------------------
ManagerButton.onClick = function(){
  Manager();
}

// ColorPalette --------------------------------------------------------------------
ColorPaletteButton.onClick = function() {
  ColorPalette();
}

// Vignette --------------------------------------------------------------------
VignetteButton.onClick = function() {
  Vignette();
}

// GlitchMatte --------------------------------------------------------------------
GlitchMatteButton.onClick = function() {
  GlitchMatte();
}

// Stringer --------------------------------------------------------------------
StringExistingPointsCheckbox.onClick = function(){
  if (!StringExistingPointsCheckbox.value) {
    StringerPointsGroup.enabled = true;
  }else{
    StringerPointsGroup.enabled = false;
  }
}
StringerButton.onClick = function() {
  Stringer(StringerNumberTextbox.text, StringerBezierCheck.value, StringerClosedCheck.value, StringExistingPointsCheckbox.value);
}


// GridMove --------------------------------------------------------------------
GridMoveButton.onClick = function() {
  GridMove(GridMoveDirection2V.value, GridMoveDirection2H.value, GridMoveDirection4.value, GridMoveDirection8.value, GridMoveDistanceTextbox.text, GridMoveMultiplierTextbox.text, GridMoveAllowStatisCheck.value);
}

// TextGreebler --------------------------------------------------------------------
TextGreeblerUpperButton.onClick = function() {
  TextGreeblerInputTextbox.text += "<<UC>>";
}
TextGreeblerLowerButton.onClick = function() {
  TextGreeblerInputTextbox.text += "<<LC>>";
}
TextGreeblerNumberButton.onClick = function() {
  TextGreeblerInputTextbox.text += "<<N>>";
}
TextGreeblerButton.onClick = function() {
  TextGreebler(TextGreeblerInputTextbox.text, Number(TextGreeblerInstancesTextbox.text));
}


// Effector --------------------------------------------------------------------
EffectorButton.onClick = function() {
  Effector(EffectorPositionCheck.value, EffectorScaleCheck.value, EffectorRotationCheck.value, EffectorOpacityCheck.value);
}



YouTubeButton.onClick = function(){
  openURL('https://www.youtube.com/@Anti-StaticTV');
}
//channel/UChNVUAJiUNNHDhrnN_jJSbA














// ------------------------------------------------------------------------------------
// FUNCTIONS
// ------------------------------------------------------------------------------------



function RandomizeInPoints(num, rel) {
  app.beginUndoGroup("AS : Randomize In-Points");
  var myComp = app.project.activeItem;
  var frames = num;
  var selectedLayers = myComp.selectedLayers;
  var t = myComp.time;
  for (var k = 0; k < selectedLayers.length; k++) {
    var r = Math.round(Math.random() * frames);
    var layer = selectedLayers[k];
    if(rel){
      t = layer.inPoint;
    }
    var f = (myComp.frameDuration) * r;
    var cst = layer.startTime;
    var diff = cst - layer.inPoint;
    layer.startTime = ((t + f) + diff);
  }
  app.endUndoGroup();
}


function StaggerInPoints(num) {
  app.beginUndoGroup("AS : Stagger In-Points");
  var frames = num;
  var selectedLayers = app.project.activeItem.selectedLayers;
  var t = app.project.activeItem.time;
  for (var k = 0; k < selectedLayers.length; k++) {
    var layer = selectedLayers[k];
    var f = (num * k) * app.project.activeItem.frameDuration;
    var cst = layer.startTime;
    var diff = cst - layer.inPoint;
    layer.startTime = (t + f) + diff;
  }
  app.endUndoGroup();
}


function FadeInOut(num) {
  app.beginUndoGroup("AS : Fade in/Fade out");
  var selectedArray = app.project.activeItem.selectedLayers;
  var totalItems = selectedArray.length;
  if (totalItems == 0) {
    alert("Select some layers.");
  } else {
    var fadeTime = num;
    var fr = app.project.activeItem.frameRate;
    var f = fadeTime / fr;
    var errorArray = "";
    var sNum = 0;
    for (var x = 0; x < totalItems; x++) {
      var item = selectedArray[x];
      var d = item.outPoint - item.inPoint;
      if (d > f * 2) {
        var myProperty = item.property("Transform").property("Opacity");
        if (myProperty.numKeys > 0) {
          sNum++;
          errorArray += "Layer " + item.index + " already has opacity keyframes.\n";
        } else {
          myProperty.setValueAtTime(item.startTime, 0);
          myProperty.setValueAtTime(item.startTime + f, 100);
          var endTime = item.outPoint;
          myProperty.setValueAtTime(endTime, 0);
          myProperty.setValueAtTime(endTime - f, 100);
        }
      } else {
        sNum++;
        errorArray += "Layer " + item.index + " is not long enough.\n";
      }
    }
  }
  if (sNum > 0) {
    var s = totalItems - sNum;
    var eStr = s + "/" + totalItems + " successful:\n" + errorArray;
    alert(eStr);
  }
  app.endUndoGroup();
}


function LoopKeyframes(w) {
  app.beginUndoGroup("AS : Loop Keyframes");
  var loopType = w;
  var selectedArray = app.project.activeItem.selectedLayers;
  var myProps = app.project.activeItem.selectedProperties;
  if (myProps.length > 0) {
    for (var i = 0; i < myProps.length; i++) {
      if (myProps[i].canVaryOverTime) {
        var k = myProps[i];
        k.expression = 'loopOut("' + loopType + '");';
      }
    }
  } else {
    alert("Select some keyframes");
  }
  app.endUndoGroup();
}


function LoopCompositions() {
  app.beginUndoGroup("AS : Loop Compositions");
  var selectedArray = app.project.activeItem.selectedLayers;
  var totalItems = selectedArray.length;
  if (totalItems == 0) {
    alert("Select some precomps in your timeline.");
  } else {
    for (var x = 0; x < totalItems; x++) {
      var item = selectedArray[x];
      if (item.source instanceof CompItem) {
        if (item.timeRemapEnabled) {
          alert("One or more compositions already has time-remapping enabled.");
        } else {
          var t = item.source.duration;
          var fr = app.project.activeItem.frameRate;
          var f = Math.round(t * fr) - 1;
          var nt = Number(f / fr);
          item.timeRemapEnabled = true;
          var myProperty = item.property("Time Remap");
          myProperty.setValueAtTime(nt, nt);
          myProperty.removeKey(3);
          myProperty.expression = ("loopOut();");
        }
      } else {
        alert("Select some precomps in your timeline.");
      }
    }
  }
  app.endUndoGroup();
}


function DuplicateLayer(num) {
  app.beginUndoGroup("AS : Duplicate Layer");
  var selectedLayers = app.project.activeItem.selectedLayers;
  if (selectedLayers.length == 0) {
    alert("Select layers to duplicate.");
  } else {
    var prevLayer = selectedLayers[selectedLayers.length-1];
    for (var j = 0; j < num; j++) {
      for (var k = 0; k < selectedLayers.length; k++) {
        var l = selectedLayers[k].duplicate();
        l.moveAfter(prevLayer);
        prevLayer = l;
      }
    }
  }
  app.endUndoGroup();
}


function RandomizeLayerOrder() {
  app.beginUndoGroup("AS : Randomize Layer Order");
  var myComp = app.project.activeItem;
  var selectedLayers = myComp.selectedLayers;
  if (selectedLayers.length == 0) {
    alert("Select some layers.");
    return false;
  }
  var prevLayer = selectedLayers[0];
  var newLayers = shuffle(selectedLayers);

  for (var k = 0; k < newLayers.length; k++) {
    var l = newLayers[k];
    if(l!=prevLayer){
      l.moveAfter(prevLayer);
    }
    l.selected=false;
    prevLayer=l;
  }
  app.endUndoGroup();
}

function ProximityCreateTargetPoint(){
  var found = false;
  for (var e = 1; e < app.project.activeItem.layers.length; e++) {
    if (app.project.activeItem.layers[e].name == "KT : Target Null") {
      found = true;
      alert("Re-order Target already exists!");
      break;
    }
  }
  if (!found) {
    var targetNull = app.project.activeItem.layers.addNull();
    targetNull.name = "AS : Proximity Re-order Target";
  }
}
function ProximityReOrder() {
  app.beginUndoGroup("AS : Reorder Based On Proximity");
  var myComp = app.project.activeItem;
  var selectedLayers = myComp.selectedLayers;
  if (selectedLayers.length == 0) {
    alert("Select some layers.");
    return false;
  }
  var layersMoved = 1;
  //selectedLayers[0].moveToBeginning();

  var centerPos = [myComp.width / 2, myComp.height / 2];
  for (var e = 1; e < myComp.layers.length; e++) {
    if (myComp.layers[e].name == "AS : Proximity Re-order Target") {
      centerPos = myComp.layers[e].property("Position").value;
      break;
    }
  }
  for (var k = 1; k <= selectedLayers.length; k++) {
    var layer = selectedLayers[k-1];
    layer.selected=false;
    for (var g = 1; g <= layersMoved; g++) {
      var layerToCheck = myComp.layers[g];
      var lx = myComp.layers[layersMoved];
      var isCloser = getDistance(centerPos, layer.property("Position").value) < getDistance(centerPos, layerToCheck.property("Position").value);

      if (isCloser) {
        if(layer!=layerToCheck){
          layer.moveBefore(layerToCheck);
        }
        layersMoved++;
        break;
      } else {
        if (g == layersMoved) {
          if(layer!=lx){
            layer.moveAfter[lx];
          }
          layersMoved++;
          break;
        }
      }
    }
  }
  //alert("moved : "+layersMoved);
  app.endUndoGroup();
}

function ZebraSelect(num) {
  num++;
  app.beginUndoGroup("AS : Zebra Deselect");
  var selectedLayers = app.project.activeItem.selectedLayers;
  var count = 1;
  if (selectedLayers.length == 0) {
    selectAllLayers();
  }
  selectedLayers = app.project.activeItem.selectedLayers;
  for (var k = 0; k < selectedLayers.length; k++) {
    var l = selectedLayers[k];
    if (count == 1) {
      l.selected = true;
    } else {
      l.selected = false;
    }

    if (count == num) {
      count = 1;
    } else {
      count++;
    }
  }
  app.endUndoGroup();
}


function RandomizePositions(x, y, z) {
  app.beginUndoGroup("AS : Randomize Positions");
  var comp = app.project.activeItem;
  var selectedLayers = comp.selectedLayers;

  for (var k = 0; k < selectedLayers.length; k++) {
    //alert(k);
    var currentPos = selectedLayers[k].property("Position").value;
    nX = currentPos[0];
    nY = currentPos[1];
    nZ = currentPos[2];

    if (x != null) {
      var xt = x / 2;
      nX += (Math.random() * (xt * 2)) - xt;
    }
    if (y != null) {
      var yt = y / 2;
      nY += (Math.random() * (yt * 2)) - yt;
    }
    if (z != null) {
      var zt = z / 2;
      nZ += (Math.random() * (zt * 2)) - zt;
    }
    if (selectedLayers[k].property("Position").numKeys == 0) {
      selectedLayers[k].property("Position").setValue([nX, nY, nZ]);
    } else {
      selectedLayers[k].property("Position").setValueAtTime(comp.time, [nX, nY, nZ]);
    }
  }
  app.endUndoGroup();
}


function StaggerPositions(x, y, z) {
  app.beginUndoGroup("AS : Stagger Positions");
  var beginPos = [0, 0, 0];
  var selectedLayers = app.project.activeItem.selectedLayers;
  for (var k = 0; k < selectedLayers.length; k++) {
    var currentPos = selectedLayers[k].property("Position").value;
    var nX = currentPos[0];
    var nY = currentPos[1];
    var nZ = currentPos[2];
    if (k == 0) {
      beginPos = currentPos;
    } else {
      var layer = selectedLayers[k];
      if (x != null) {
        var xt = x * k;
        nX = beginPos[0] + xt;
      }
      if (y != null) {
        var yt = y * k;
        nY = beginPos[1] + yt;
      }
      if (z != null) {
        var zt = z * k;
        nZ = beginPos[2] + zt;
      }
    }
    if (selectedLayers[k].property("Position").numKeys == 0) {
      selectedLayers[k].property("Position").setValue([nX, nY, nZ]);
    } else {
      selectedLayers[k].property("Position").setValueAtTime(app.project.activeItem.time, [nX, nY, nZ]);
    }

  }
  app.endUndoGroup();
}


function CenterPositions(x, y, z) {
  app.beginUndoGroup("AS : Center Positions");
  var selectedLayers = app.project.activeItem.selectedLayers;
  for (var k = 0; k < selectedLayers.length; k++) {
    var currentPos = selectedLayers[k].property("Position").value;
    var nX = currentPos[0];
    var nY = currentPos[1];
    var nZ = currentPos[2];
    if (x) {
      nX = app.project.activeItem.width / 2;
    }
    if (y) {
      nY = app.project.activeItem.height / 2;
    }
    if (z) {
      nZ = 0;
    }
    if (selectedLayers[k].property("Position").numKeys == 0) {
      selectedLayers[k].property("Position").setValue([nX, nY, nZ]);
    } else {
      selectedLayers[k].property("Position").setValueAtTime(app.project.activeItem.time, [nX, nY, nZ]);
    }
  }
  app.endUndoGroup();
}


function RadialPosition(rad, num, duplicate, rotate) {
  app.beginUndoGroup("AS :  Radial Position");
  var selectedLayers = app.project.activeItem.selectedLayers;
  if (selectedLayers.length == 0) {
    if (duplicate) {
      alert("Select one layer to duplicate.");
    } else {
      alert("Select some layers to position.");
    }
    return false;
  }
  var prevLayer;
  var totalSlices = 0;

  if (duplicate) {
    totalSlices = num;
    prevLayer = selectedLayers[0];
  } else {
    totalSlices = selectedLayers.length;
  }
  var sliceAngle = 360 / totalSlices;

  for (var k = 0; k < totalSlices; k++) {
    var a = (degreesToRadians((sliceAngle * k) - 90));
    var x_offset = Math.cos(a);
    var y_offset = Math.sin(a);
    var cen = [app.project.activeItem.width / 2, app.project.activeItem.height / 2];
    var pos = (cen + [x_offset, y_offset] * rad);
    var l = null;
    if (duplicate) {
      if(k==0){
        l = selectedLayers[0];
      }else{
        l = selectedLayers[0].duplicate();
        l.moveAfter(prevLayer);
        prevLayer = l;
      }
    } else {
      l = selectedLayers[k];
    }
    if (l.property("Position").numKeys == 0) {
      l.property("Position").setValue(pos);
    } else {
      l.property("Position").setValueAtTime(app.project.activeItem.time, pos);
    }
    if (rotate) {
      if (l.property("Rotation").numKeys == 0) {
        l.property("Rotation").setValue(sliceAngle * k);
      } else {
        l.property("Rotation").setValueAtTime(app.project.activeItem.time, sliceAngle * k);
      }
    }
  }
  app.endUndoGroup();
}


function GridPositions(r, c, s, check1, rg, cg, sg, check2, duplicate, grid3D) {
  app.beginUndoGroup("AS : Grid Positions");
  var selectedLayers = app.project.activeItem.selectedLayers;
  if (selectedLayers.length == 0) {
    if (duplicate) {
      alert("Select one layer to duplicate.");
    } else {
      alert("Select some layers to position.");
    }
    return false;
  }
  var rows = c;
  var cols = r;
  var steps = s;
  if (check1) {
    cols = rows;
  }
  if (!grid3D) {
    steps = 1;
  }
  var rowGap = cg;
  var colGap = rg;
  var stepGap = sg;
  if (check2) {
    colGap = rowGap;
  }
  var selectedLayers = app.project.activeItem.selectedLayers;
  var currentLayerNum = 0;
  var prevLayer;
  if (duplicate) {
    if (selectedLayers.length != 1) {
      alert("Select one layer to duplicate.");
      return false;
    } else {
      prevLayer = selectedLayers[0];
    }
  }
  for (var z = 1; z <= steps; z++) {
    for (var y = 1; y <= cols; y++) {
      for (var x = 1; x <= rows; x++) {
        var currentLayer = null;
        if (duplicate) {
          if (selectedLayers.length == 1) {
            if (z == 1 && y == 1 && x == 1) {
              currentLayer = selectedLayers[0];
            } else {
              currentLayer = selectedLayers[0].duplicate();
              currentLayer.moveAfter(prevLayer);
              prevLayer = currentLayer;
            }
          }
        } else {
          currentLayer = selectedLayers[currentLayerNum];
        }
        if (currentLayer != null) {
          var curPosition = [((x - 1) * rowGap), ((y - 1) * colGap), ((z - 1) * stepGap)];
          var centerX = app.project.activeItem.width / 2;
          var centerY = app.project.activeItem.height / 2;
          var centerPosition = [centerX, centerY];
          var offsetPosition = [(rowGap * (rows - 1)) / 2, (colGap * (cols - 1)) / 2];
          if (currentLayer.property("Position").numKeys == 0) {
            currentLayer.property("Position").setValue(curPosition + centerPosition - offsetPosition);
          } else {
            currentLayer.property("Position").setValueAtTime(app.project.activeItem.time, curPosition + centerPosition - offsetPosition);
          }
          currentLayerNum++;
        } else {
          break;
        }
      }
    }
  }
  app.endUndoGroup();
}

function calculateGridDuplicates() {
  var total = Number(GridCountColTextbox.text) * Number(GridCountRowTextbox.text)
  if (GridPositions3DCheck.value) {
    total *= Number(GridCountStepTextbox.text);
  }
  GridPositionsDuplicateCheck.text = "Duplicate (" + total + ")";
}

function Randomizer() {
  app.beginUndoGroup("AS : Randomizer");
  var selectedLayers = app.project.activeItem.selectedLayers;
  if (selectedLayers.length == 0) {
    alert("Select at least one layer.");
    return false;
  } else {
    for (var k = 0; k < selectedLayers.length; k++) {
      if (RandomizerScaleCheck.value) {
        var r1 = (Math.random() * (RandomizerScaleMaxTextbox.text - RandomizerScaleMinTextbox.text)) + RandomizerScaleMinTextbox.text;
        var r2 = (Math.random() * (RandomizerScaleMaxTextbox.text - RandomizerScaleMinTextbox.text)) + RandomizerScaleMinTextbox.text;
        var nX = r1;
        var nY = nX;
        if (!RandomizerScaleLinkCheck.value) {
          nY = r2;
        }
        if (selectedLayers[k].property("Scale").numKeys == 0) {
          selectedLayers[k].property("Scale").setValue([nX, nY]);
        } else {
          selectedLayers[k].property("Scale").setValueAtTime(app.project.activeItem.time, [nX, nY]);
        }
      }

      if (RandomizerRotationCheck.value) {
        var r1 = (Math.random() * (RandomizerRotationMaxTextbox.text - RandomizerRotationMinTextbox.text)) + RandomizerRotationMinTextbox.text;
        if (selectedLayers[k].property("Rotation").numKeys == 0) {
          selectedLayers[k].property("Rotation").setValue(r1);
        } else {
          selectedLayers[k].property("Rotation").setValueAtTime(app.project.activeItem.time, r1);
        }
      }

      if (RandomizerOpacityCheck.value) {
        var r1 = (Math.random() * (RandomizerOpacityMaxTextbox.text - RandomizerOpacityMinTextbox.text)) + RandomizerOpacityMinTextbox.text;
        if (selectedLayers[k].property("Opacity").numKeys == 0) {
          selectedLayers[k].property("Opacity").setValue(r1);
        } else {
          selectedLayers[k].property("Opacity").setValueAtTime(app.project.activeItem.time, r1);
        }
      }
    }
  }
  app.endUndoGroup();
}

function ShakeNull() {
  app.beginUndoGroup("AS : Shake Null");
  var n = app.project.activeItem.layers.addNull();
  n.name = "AS : Shake Null";
  var slide1 = n.effect.addProperty("ADBE Slider Control");
  slide1.name = "Shakes Per Second";
  var slide2 = n.effect.addProperty("ADBE Slider Control");
  slide2.name = "Shake Amount";
  n.position.expression = 'wiggle(effect("Shakes Per Second")("Slider"),effect("Shake Amount")("Slider"));';
  app.endUndoGroup();
}

function ColorPalette() {
  app.beginUndoGroup("AS : Color Palette");
  var myProps = app.project.activeItem.selectedProperties;

  if (myProps.length == 0) {
    alert("Select a color property");
    return false;
  } else {

    var controlNull = app.project.activeItem.layers.addNull();
    var controllerNum = checkName("AS : Color Palette_")
    controlNull.name = "AS : Color Palette_" + controllerNum;

    var countSlider = controlNull.Effects.addProperty("ADBE Slider Control");
    countSlider.name = "Color Count";
    countSlider.property(1).max = 10;
    countSlider.property(1).setValue(3);

    var randomCheck = controlNull.Effects.addProperty("ADBE Checkbox Control");
    randomCheck.name = "Randomize";
    randomCheck.property(1).setValue(true);

    var seedSlider = controlNull.Effects.addProperty("ADBE Slider Control");
    seedSlider.name = "Random Seed";
    seedSlider.property(1).setValue(1);

    var countSlider = app.project.activeItem.layers.add

    var str = '//AS : Color Palette\nvar con = thisComp.layer("'+controlNull.name+'");\nseedRandom(con.effect("Random Seed")("Slider"), true);\n';
    var str2 = "var options = [";

    for (var x = 0; x < 10; x++) {
      var colorControl = controlNull.Effects.addProperty("ADBE Color Control");
      var num = x + 1;
      colorControl.name = "Color " + num;
      colorControl.property(1).setValue([10, 10, 10, 255] / 255);
      str += 'var c' + num + ' = con.effect("Color ' + num + '")("Color").value;\r';
      str2 += 'c' + num;
      if (x < 9) {
        str2 += ",";
      }
    }
    var string = str + str2 + '];\nvar n = con.effect("Color Count")("Slider");';
    string+= '\nvar rc = con.effect("Randomize")("Checkbox");';
    string+='\nvar r = Math.floor(random(n));';
    string+='\nif(!rc.value){';
    string+='\n\tr=index%n;';
    string+='\n}\noptions[r];';

    for (var i = 0; i < myProps.length; i++) {
      if (myProps[i].canVaryOverTime) {
        myProps[i].expression = string;
      }
    }
  }
  app.endUndoGroup();
}


function Vignette() {
  app.beginUndoGroup("AS : Vignette");
  var activeComp = app.project.activeItem;
  var new_solid = activeComp.layers.addSolid([0, 0, 0], "VIGNETTE", activeComp.width, activeComp.height, activeComp.pixelAspect, activeComp.duration);
  new_solid.label = 5;
  new_solid.moveToBeginning(); //adjLayer.locked=true;

  ratio = .5523;
  h = new_solid.width / 2;
  v = new_solid.height / 2;
  th = h * ratio;
  tv = v * ratio;
  newMask = new_solid.Masks.addProperty("ADBE Mask Atom");
  newMask.maskMode = MaskMode.SUBTRACT;
  newMask.property("maskFeather").setValue([475, 475]);
  newMask.property("maskExpansion").setValue(50);
  myProperty = newMask.property("ADBE Mask Shape");
  myShape = myProperty.value;
  myShape.vertices = [
    [h, 0],
    [0, v],
    [h, 2 * v],
    [2 * h, v]
  ];
  myShape.inTangents = [
    [th, 0],
    [0, -tv],
    [-th, 0],
    [0, tv]
  ];
  myShape.outTangents = [
    [-th, 0],
    [0, tv],
    [th, 0],
    [0, -tv]
  ];
  myShape.closed = true;
  myProperty.setValue(myShape);
  app.endUndoGroup();
}

function GlitchMatte() {
  app.beginUndoGroup("AS : Glitch Matte");
  var comp = app.project.activeItem;
  var adjust = comp.layers.addSolid([0, 0, 0], "GLITCH", comp.width, comp.height, comp.pixelAspect, 1);
  adjust.startTime = comp.time;
  adjust.adjustmentLayer = true;
  adjust.label = 16; // dark green
  var trans = adjust.effect.addProperty("Transform");
  trans.property("Uniform Scale").setValue(0);
  //trans.property("ADBE Geometry2-0004").setValue(120);
  trans.property("Scale Width").setValue(120);
  //alert(trans.property("ADBE Geometry2-0004"));

  var n = comp.layers.addSolid([0, 0, 0], "GLITCH MATTE", comp.width, comp.height, comp.pixelAspect, 1);
  n.startTime = comp.time;
  n.label = 16; // dark green
  var slide1 = n.effect.addProperty("ADBE Slider Control");
  slide1.name = "Fractal Height";
  slide1.property("Slider").setValue(50);
  var slide2 = n.effect.addProperty("ADBE Slider Control");
  slide2.name = "Fractal Width";
  slide2.property("Slider").setValue(400);
  var noise = n.effect.addProperty("Fractal Noise");
  noise.property("Fractal Type").setValue(17);
  noise.property("Noise Type").setValue(1);
  noise.property("Uniform Scaling").setValue(0);
  noise.property("Contrast").setValue(1200);
  noise.property("Brightness").setValue(-400);
  noise.property("Evolution").expression = 'time*1800';
  noise.property("Scale Height").expression = 'effect("Fractal Height")("Slider")';
  noise.property("Scale Width").expression = 'effect("Fractal Width")("Slider")';
  adjust.trackMatteType = TrackMatteType.LUMA;
  app.endUndoGroup();
}

function Stringer(am, tanCheck, closedCheck, existingCheck) {
  app.beginUndoGroup("AS : Stringer");
  var myComp = app.project.activeItem;
  var selectedLayers = myComp.selectedLayers;
  var nameArray = [];
  for(var l=0; l<selectedLayers.length; l++){
      nameArray.push(selectedLayers[l].name);
  }
  if(hasDuplicates(nameArray)){
    alert("Make sure all layers have unique names.");
    return false;
  }

  numberOfPoints = am;
  if(existingCheck){
    if(selectedLayers.length==0){
      alert("Select some layers");
    }else{
      numberOfPoints = selectedLayers.length;
    }
  }
  if (myComp) {
    var stringShape = myComp.layers.addShape();
    var controllerNum = checkName("Stringer_")
    stringShape.name = "Stringer_" + controllerNum;
    stringShape.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var shapeGroup = stringShape.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group");
    shapeGroup.addProperty("ADBE Vector Shape - Group");
    var cpg1f = shapeGroup.addProperty("ADBE Vector Graphic - Stroke");
    cpg1f.property("ADBE Vector Stroke Color").setValue([1, 1, 1, 1]);
    stringShape.property("ADBE Root Vectors Group").property(1).property("ADBE Vector Materials Group").remove();
    stringShape.property("ADBE Root Vectors Group").property(1).property("ADBE Vector Transform Group").property("ADBE Vector Position").setValue([(myComp.width / -2), (myComp.height / -2)]);
    var closedControl = stringShape.Effects.addProperty("ADBE Checkbox Control");
    closedControl.name = "Closed";
    if (closedCheck) {
      closedControl.property(1).setValue(true);
    } else {
      closedControl.property(1).setValue(false);
    }

    var express = "";
    var pointsString = "";
    var inTanString = "";
    var outTanString = "";

    for (x = 0; x < numberOfPoints; x++) {
      var nullPoint = null;
      if(existingCheck){
        nullPoint = selectedLayers[x];
      }else{
        nullPoint = app.project.activeItem.layers.addNull();
        nullPoint.name = "String Point " + controllerNum + "-" + x;
      }
      express += "nullPoint" + x + " = thisComp.layer('" + nullPoint.name + "');\n"
      pointsString += "nullPoint" + x + ".toWorld([0,0])";

      if (tanCheck) {
        var inTan = app.project.activeItem.layers.addNull();
        inTan.name = "in tangent " + controllerNum + "-" + x;
        //alert(nullPoint.transform.position);
        inTan.property("Position").setValue(nullPoint.property("Position").value);
        inTan.parent = nullPoint;
        inTan.label = 1;
        inTan.scale.setValue([40, 40]);
        var lockControl = inTan.Effects.addProperty("ADBE Checkbox Control");
        lockControl.name = "Lock tangents";
        lockControl.property(1).setValue(true);
        express += "inTan" + x + " = thisComp.layer('in tangent " + controllerNum + "-" + x + "');\n"
        inTanString += "inTan" + x + ".toWorld([0,0])-nullPoint" + x + ".toWorld([0,0])"


        var outTan = app.project.activeItem.layers.addNull();
        outTan.name = "out tangent " + controllerNum + "-" + x;
        outTan.property("Position").setValue(nullPoint.property("Position").value);
        outTan.property("Position").expression = "var i = thisComp.layer('in tangent "+ controllerNum + "-" + x+"');\nif(i.effect('Lock tangents')('Checkbox').value){\n\t-i.transform.position;\n}else{\n\tvalue;\n}";
        outTan.parent = nullPoint;
        outTan.label = 1;
        outTan.scale.setValue([40, 40]);
        outTan.enabled=false;
        express += "outTan" + x + " = thisComp.layer('out tangent " + controllerNum + "-" + x + "');\n"
        outTanString += "outTan" + x + ".toWorld([0,0])-nullPoint" + x + ".toWorld([0,0])"

      }
      if (x != (numberOfPoints - 1)) {
        pointsString += ","
        if (tanCheck) {
          inTanString += ","
          outTanString += ","
        }
      }
    }
    express += "createPath(points=[" + pointsString + "], inTangents=[" + inTanString + "], outTangents=[" + outTanString + "], is_closed=effect('Closed')('Checkbox'));"
    stringShape.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").property("ADBE Vector Shape - Group").path.expression = express;
  }
  app.endUndoGroup();
}

function GridMove(r1, r2, r3, r4, am, mult, check) {
  app.beginUndoGroup("AS : Grid Move");
  var slices = 2;
  if (r3) {
    slices = 4;
  }
  if (r4) {
    slices = 8;
  }
  var selectedLayers = app.project.activeItem.selectedLayers;
  var initAm = am;
  for (var k = 0; k < selectedLayers.length; k++) {
    var ran = Math.floor(Math.random() * slices);
    var ran2 = Math.round(Math.random() * mult);

    if (r1) {
      ran = Math.floor(Math.random() * 2); //0,1
    } else if (r2) {
      ran = (Math.floor(Math.random() * 2) + 2); //2,3
    }

    if (!check) {
      while (ran2 <= 0) {
        ran2 = Math.round(Math.random() * mult);
      }
    }
    var addAmount = [0, 0, 0];
    var am2 = am * ran2;

    if (ran == 0) {
      addAmount = [0, am2, 0];
    } else if (ran == 1) {
      addAmount = [0, am2 * -1, 0];
    } else if (ran == 2) {
      addAmount = [am2 * -1, 0, 0];
    } else if (ran == 3) {
      addAmount = [am2, 0, 0];
    } else if (ran == 4) {
      addAmount = [am2, am2, 0];
    } else if (ran == 5) {
      addAmount = [am2, am2 * -1, 0];
    } else if (ran == 6) {
      addAmount = [am2 * -1, am2, 0];
    } else if (ran == 7) {
      addAmount = [am2 * -1, am2 * -1, 0];
    }
    var pos = selectedLayers[k].property("Position").value + addAmount;
    if (selectedLayers[k].property("Position").numKeys == 0) {
      selectedLayers[k].property("Position").setValue(pos);
    } else {
      selectedLayers[k].property("Position").setValueAtTime(app.project.activeItem.time, pos);
    }
  }
  app.endUndoGroup();
}


function TextGreebler(t, num) {
  app.beginUndoGroup("AS : Text Greebler");
  var controlNull = app.project.activeItem.layers.addNull();
  var controllerNum = checkName("AS : Text Greebler_")
  controlNull.name = "AS : Text Greebler_" + controllerNum;
  var posterizeSlider = controlNull.Effects.addProperty("ADBE Slider Control");
  posterizeSlider.name = "Posterize Time (times per second)";
  posterizeSlider.property(1).setValue(5);
/*
  var randomizeCheckbox = controlNull.Effects.addProperty("ADBE Checkbox Control");
  randomizeCheckbox.name = "Static Text";
  randomizeCheckbox.value = true;
*/
  var seedSlider = controlNull.Effects.addProperty("ADBE Slider Control");
  seedSlider.name = "Random Seed";
  seedSlider.property(1).setValue(1);

  var output = "'" + t + "'";

  var output2 = output.replace(/<<UC>>/g, "'+ucLetterArray[Math.floor(random(ucLetterArray.length))]+'");
  var output3 = output2.replace(/<<LC>>/g, "'+lcLetterArray[Math.floor(random(lcLetterArray.length))]+'");
  var output4 = output3.replace(/<<N>>/g, "'+Math.floor(random(10))+'");

  var ucLetterArrayString = 'var ucLetterArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];\r';
  var lcLetterArrayString = 'var lcLetterArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];\r';

  //'var r = Math.floor(random()*letterArray.length);\rvar r2= Math.floor(random()*letterArray.length);\rvar str = letterArray[r]+letterArray[r2]+Math.floor(random(100));\rstr'

  for (var x = 0; x < num; x++) {
    var myTextLayer = app.project.activeItem.layers.addText("AS : Greeble " + (x + 1));
    myTextLayer.text.sourceText.expression = ucLetterArrayString + lcLetterArrayString + 'posterizeTime(thisComp.layer("AS : Text Greebler_' + controllerNum + '").effect("Posterize Time (times per second)")("Slider"));\rseedRandom(thisComp.layer("AS : Text Greebler_' + controllerNum + '").effect("Random Seed")("Slider"), false);\r' + output4;
  }
  app.endUndoGroup();
}



function Effector(pCheck, sCheck, rCheck, oCheck) {
  app.beginUndoGroup("AS : Effector");
  var activeComp = app.project.activeItem;
  var selectedLayers = app.project.activeItem.selectedLayers;

  var controllerNum = checkName("AS : Effector_");
  var controller = app.project.activeItem.layers.addNull();
  controller.name = "AS : Effector_" + controllerNum;
  controller.transform.scale.expression = "[100,100]";
  controller.label = 1;
  var controllerPreview = activeComp.layers.addSolid([1, 0, 0], "AS : Effector_" + controllerNum + " preview", 1000, 1000, activeComp.pixelAspect, activeComp.duration);
  controllerPreview.label = 1;
  controllerPreview.parent = controller;
  controllerPreview.moveToBeginning();
  controllerPreview.blendingMode = BlendingMode.SCREEN;
  controllerPreview.guideLayer = true;

  controller.moveToBeginning();

  var sizeSlide = controller.effect.addProperty("ADBE Slider Control");
  sizeSlide.name = "Effector Size";
  sizeSlide.property(1).setValue(500);

  var falloffSlide = controller.effect.addProperty("ADBE Slider Control");
  falloffSlide.name = "Effector Falloff";
  falloffSlide.property(1).max = 100;
  falloffSlide.property(1).min = 0;
  falloffSlide.property(1).setValue(50);

  if (pCheck) {
    var posSlider = controller.effect.addProperty("ADBE Slider Control");
    posSlider.name = "Effected Position %";
    posSlider.property("Slider").setValue(100);
  }

  if (sCheck) {
    var scaSlider = controller.effect.addProperty("ADBE Slider Control");
    scaSlider.name = "Effected Scale";
    scaSlider.property("Slider").setValue(200);
  }

  if (rCheck) {
    var rotSlider = controller.effect.addProperty("ADBE Slider Control");
    rotSlider.name = "Effected Rotation";
    rotSlider.property("Slider").setValue(360);
  }

  if (oCheck) {
    var opaSlider = controller.effect.addProperty("ADBE Slider Control");
    opaSlider.name = "Effected Opacity";
    opaSlider.property("Slider").setValue(0);
  }

  var mainRandomSlider = controller.effect.addProperty("ADBE Slider Control");
  mainRandomSlider.name = "Main Effector Random";
  mainRandomSlider.property("Slider").setValue(0);

  var mainRandomSeedSlider = controller.effect.addProperty("ADBE Slider Control");
  mainRandomSeedSlider.name = "Main Random Seed";
  mainRandomSeedSlider.property("Slider").setValue(1);

  var auxMultSlider = controller.effect.addProperty("ADBE Slider Control");
  auxMultSlider.name = "Aux Multiplier";
  auxMultSlider.property("Slider").setValue(1);

  var auxRandomSlider = controller.effect.addProperty("ADBE Slider Control");
  auxRandomSlider.name = "Aux Random";
  auxRandomSlider.property("Slider").setValue(0);

  var auxRandomSeedSlider = controller.effect.addProperty("ADBE Slider Control");
  auxRandomSeedSlider.name = "Aux Random Seed";
  auxRandomSeedSlider.property("Slider").setValue(1);

  controllerPreview.transform.scale.expression = "var EF = thisComp.layer('" + controller.name + "');\nvar s = EF.effect('Effector Size')('Slider')/10;\n[s, s]";
  var ramp = controllerPreview.effect.addProperty("Gradient Ramp");
  ramp.property("Start of Ramp").expression = ("var EF = thisComp.layer('" + controller.name + "');\nvar v = EF.effect('Effector Falloff')('Slider');\n[500, linear(v, 0,100,999,0)]");
  ramp.property("Start Color").setValue([1, 0, 0]);
  ramp.property("End Color").setValue([0, 0, 0]);
  var polar = controllerPreview.effect.addProperty("Polar Coordinates");
  polar.property("Type of Conversion").setValue(1);
  polar.property(1).setValue(1);

  var baseStr = "var r = EF.effect('Effector Size')('Slider')/2;";
  baseStr += "\n";
  baseStr += "var p1 = thisLayer.toWorld(thisLayer.anchorPoint)";
  baseStr += "\n";
  baseStr += "var p2 = EF.toWorld(EF.anchorPoint)";
  baseStr += "\n";
  baseStr += "var delta = length(p1, p2);";
  baseStr += "\n";
  baseStr += "if (delta < r) {";
  baseStr += "\n\t";


  if (pCheck) {
    var posStr = "// AS : Effector position";
    posStr += "\n";
    posStr += "var EF = thisComp.layer('" + controller.name + "');";
    posStr += "\n";
    posStr += baseStr;
    posStr += "seedRandom(EF.effect('Main Random Seed')('Slider'), true);"
    posStr += "\n\t";
    posStr += "var ran = (Math.random()-.5)*(EF.effect('Main Effector Random')('Slider')/100);";
    posStr += "\n\t";
    posStr += "var a = Math.atan2((p1[1] - p2[1]),(p1[0] - p2[0]));";
    posStr += "\n\t";
    posStr += "var xa = Math.cos(a);";
    posStr += "\n\t";
    posStr += "var ya = Math.sin(a);";
    posStr += "\n\t";
    posStr += "var f = EF.effect('Effector Falloff')('Slider');";
    posStr += "\n\t";
    posStr += "var c = r*((-f+100)/100);";
    posStr += "\n\t";
    posStr += "var ep = EF.effect('Effected Position %')('Slider')/100;";
    posStr += "\n\t";
    posStr += "var p = 1-(f/100);";
    posStr += "\n\t";
    posStr += "var v2 = ((r-delta)*(p*ep))+((r-delta)*ran);";
    posStr += "\n\t";
    posStr += "value + [xa*v2,ya*v2];";
    posStr += "\n";
    posStr += "} else {";
    posStr += "\n\t";
    posStr += "value;";
    posStr += "\n";
    posStr += "}";
  }

  if (sCheck) {
    var scaStr = "// AS : Effector scale";
    scaStr += "\n";
    scaStr += "var EF = thisComp.layer('" + controller.name + "');";
    scaStr += "\n";
    scaStr += baseStr;
    scaStr += "seedRandom(EF.effect('Main Random Seed')('Slider'), true);"
    scaStr += "\n\t";
    scaStr += "var ran = (Math.random()-.5)*(EF.effect('Main Effector Random')('Slider')/10);";
    scaStr += "\n\t";
    scaStr += "var f = EF.effect('Effector Falloff')('Slider');";
    scaStr += "\n\t";
    scaStr += "var c = r*((-f+100)/100);";
    scaStr += "\n\t";
    scaStr += "var v = linear(delta, r, c, EF.effect('Effected Scale')('Slider'), value[0]);";
    scaStr += "\n\t";
    scaStr += "var sr = linear(r-delta, 0, r, 0, 100);";
    scaStr += "\n\t";
    scaStr += "[v+(ran*sr),v+(ran*sr)];";
    scaStr += "\n";
    scaStr += "} else {";
    scaStr += "\n\t";
    scaStr += "value;";
    scaStr += "\n";
    scaStr += "}";
  }

  if (rCheck) {
    var rotStr = "// AS : Effector rotation";
    rotStr += "\n";
    rotStr += "var EF = thisComp.layer('" + controller.name + "');";
    rotStr += "\n";
    rotStr += baseStr;
    rotStr += "seedRandom(EF.effect('Main Random Seed')('Slider'), true);"
    rotStr += "\n\t";
    rotStr += "var ran = (Math.random()-.5)*(EF.effect('Main Effector Random')('Slider')/10);";
    rotStr += "\n\t";
    rotStr += "var f = EF.effect('Effector Falloff')('Slider');";
    rotStr += "\n\t";
    rotStr += "var c = r*((-f+100)/100);";
    rotStr += "\n\t";
    rotStr += "var v = linear(delta, r, c, value + EF.effect('Effected Rotation')('Slider'), value);";
    rotStr += "\n\t";
    rotStr += "var rr = linear(r-delta, 0, r, 0, 100);";
    rotStr += "\n\t";
    rotStr += "v+(ran*rr);";
    rotStr += "\n";
    rotStr += "} else {";
    rotStr += "\n\t";
    rotStr += "value;";
    rotStr += "\n";
    rotStr += "}";
  }

  if (oCheck) {
    var opaStr = "// AS : Effector opacity";
    opaStr += "\n";
    opaStr += "var EF = thisComp.layer('" + controller.name + "');";
    opaStr += "\n";
    opaStr += baseStr;
    opaStr += "seedRandom(EF.effect('Main Random Seed')('Slider'), true);"
    opaStr += "\n\t";
    opaStr += "var ran = (Math.random()-.5)*(EF.effect('Main Effector Random')('Slider')/10);";
    opaStr += "\n\t";
    opaStr += "var f = EF.effect('Effector Falloff')('Slider');";
    opaStr += "\n\t";
    opaStr += "var c = r*((-f+100)/100);";
    opaStr += "\n\t";
    opaStr += "var v = linear(delta, r, c, EF.effect('Effected Opacity')('Slider'), value);";
    opaStr += "\n\t";
    opaStr += "var or = linear(r-delta, 0, r, 0, 100);";
    opaStr += "\n\t";
    opaStr += "v+(ran*or);";
    opaStr += "\n";
    opaStr += "} else {";
    opaStr += "\n\t";
    opaStr += "value;";
    opaStr += "\n";
    opaStr += "}";
  }

  var auxStr = "// AS : Effector Aux";
  auxStr += "\n";
  auxStr += "var EF = thisComp.layer('" + controller.name + "');";
  auxStr += "\n";
  auxStr += baseStr;
  auxStr += "seedRandom(EF.effect('Aux Random Seed')('Slider'), true)"
  auxStr += "\n\t";
  auxStr += "var ran = (Math.random()-.5)*(EF.effect('Aux Random')('Slider')/100);";
  auxStr += "\n\t";
  auxStr += "var f = EF.effect('Effector Falloff')('Slider');";
  auxStr += "\n\t";
  auxStr += "var c = r*((-f+100)/100);";
  auxStr += "\n\t";
  auxStr += "var v = linear(delta, r, c, 100, 0);";
  auxStr += "\n\t";
  auxStr += "var ar = (r-delta)*ran;";
  auxStr += "\n\t";
  auxStr += "(v*EF.effect('Aux Multiplier')('Slider'))+ar;";
  auxStr += "\n";
  auxStr += "} else {";
  auxStr += "\n\t";
  auxStr += "value;";
  auxStr += "\n";
  auxStr += "}";

  for (var k = 0; k < selectedLayers.length; k++) {
    var l = selectedLayers[k];
    if (pCheck) {
      l.transform.position.expression = posStr;
    }
    if (sCheck) {
      l.transform.scale.expression = scaStr;
    }
    if (rCheck) {
      l.transform.rotation.expression = rotStr;
    }
    if (oCheck) {
      l.transform.opacity.expression = opaStr;
    }
    var auxSlide = l.effect.addProperty("ADBE Slider Control");
    auxSlide.name = "Aux Slider " + controllerNum;
    auxSlide.property(1).max = 100;
    auxSlide.property(1).expression = auxStr;
  }
  controllerPreview.locked = true;
  app.endUndoGroup();
}

function Manager() {
  app.beginUndoGroup("AS : Manager");
  var activeComp = app.project.activeItem;
  var selectedLayers = activeComp.selectedLayers;
  var selectedProps = activeComp.selectedProperties;
  var propPaths = [];

  if (selectedLayers.length == 0) {
    alert("Select some layers.");
    return false;
  }
  if (selectedProps.length == 0) {
    alert("Select some properties.");
    return false;
  }

  for (var i = 0; i < selectedProps.length; i++) {
    var p = selectedProps[i];
    var supported=false;
    if (p.propertyType == PropertyType.PROPERTY) {
        if (p.propertyValueType == PropertyValueType.OneD || p.propertyValueType == PropertyValueType.TwoD || p.propertyValueType == PropertyValueType.TwoD_SPATIAL || p.propertyValueType == PropertyValueType.ThreeD || p.propertyValueType == PropertyValueType.ThreeD_SPATIAL || p.propertyValueType == PropertyValueType.COLOR) {
        supported=true;
      }
      var levelArray = [];
      levelArray.push(p);
      var t = p;
      while (t.parentProperty) {
        t = t.parentProperty;
        if (t.parentProperty != null) {
          levelArray.push(t);
        }
      }
      propPaths.push(levelArray);
    }
  }
  if(!supported){
    alert("Only one, two, or three dimenstional numbers and colors are supported.");
    return false;
  }

  for (var l = 0; l < selectedLayers.length; l++) {
    var layer = selectedLayers[l];
    if (l == 0) {
      var controller = activeComp.layers.addNull();
      var controllerNum = checkName("AS : Manager_")
      controller.name = "AS : Manager_" + controllerNum;
    }
    for (var i = 0; i < propPaths.length; i++) {
      var currentProp = propPaths[i][0];
      if (currentProp.propertyType == PropertyType.PROPERTY) {
        var expStr = "";
        if (currentProp.propertyValueType == PropertyValueType.OneD) {
          if (l == 0) {
            var pslide1 = controller.effect.addProperty("ADBE Slider Control");
            pslide1.name = currentProp.name;
            pslide1.property(1).setValue(currentProp.value);
          }
          expStr += "var c = thisComp.layer('" + controller.name + "');\n"
          expStr += "var v = c.effect('" + currentProp.name + "')('Slider');\nv";
        } else if (currentProp.propertyValueType == PropertyValueType.TwoD || currentProp.propertyValueType == PropertyValueType.TwoD_SPATIAL || currentProp.propertyValueType == PropertyValueType.ThreeD || currentProp.propertyValueType == PropertyValueType.ThreeD_SPATIAL) {
          if (l == 0) {
            var pslide1 = controller.effect.addProperty("ADBE Slider Control");
            pslide1.name = currentProp.name + " X";
            pslide1.property(1).setValue(currentProp.value[0]);
            var pslide2 = controller.effect.addProperty("ADBE Slider Control");
            pslide2.name = currentProp.name + " Y";
            pslide2.property(1).setValue(currentProp.value[1]);
            var pcheck1 = controller.effect.addProperty("ADBE Checkbox Control");
            pcheck1.name = "Link "+currentProp.name;
            pcheck1.property(1).setValue(true);
          }
          expStr += "var c = thisComp.layer('" + controller.name + "');\n"
          expStr += "var v1 = c.effect('" + currentProp.name + " X')('Slider');\n";
          expStr += "var v2 = c.effect('" + currentProp.name + " Y')('Slider');\n";
          expStr += "if(c.effect('Link " + currentProp.name + "')('Checkbox').value){\n"
          expStr += "\t[v1,v1];\n";
          expStr += "}else{\n";
          expStr += "\t[v1, v2];\n";
          expStr += "}";
        } else if(p.propertyValueType == PropertyValueType.COLOR){
          if (l == 0) {
            var pccon = controller.effect.addProperty("ADBE Color Control");
            pccon.name = currentProp.name;
            pccon.property(1).setValue(currentProp.value);
          }
          expStr += "var c = thisComp.layer('" + controller.name + "');\n"
          expStr += "var v = c.effect('" + currentProp.name + "')('Color');\nv";
        }
      }

      // I can't figure out a better way to do this
      var len = propPaths[i].length;
      if (len == 1) {
        layer.property(currentProp.name).expression = expStr;
      } else if (len == 2) {
        layer.property(propPaths[i][1].name).property(currentProp.name).expression = expStr;
      } else if (len == 3) {
        layer.property(propPaths[i][2].name).property(propPaths[i][1].name).property(currentProp.name).expression = expStr;
      } else if (len == 4) {
        layer.property(propPaths[i][3].name).property(propPaths[i][2].name).property(propPaths[i][1].name).property(currentProp.name).expression = expStr;
      } else if (len == 5) {
        layer.property(propPaths[i][4].name).property(propPaths[i][3].name).property(propPaths[i][2].name).property(propPaths[i][1].name).property(currentProp.name).expression = expStr;
      } else if (len == 6) {
        layer.property(propPaths[i][5].name).property(propPaths[i][4].name).property(propPaths[i][3].name).property(propPaths[i][2].name).property(propPaths[i][1].name).property(currentProp.name).expression = expStr;
      } else if (len == 7) {
        layer.property(propPaths[i][6].name).property(propPaths[i][5].name).property(propPaths[i][4].name).property(propPaths[i][3].name).property(propPaths[i][2].name).property(propPaths[i][1].name).property(currentProp.name).expression = expStr;
      } else if (len == 8) {
        layer.property(propPaths[i][7].name).property(propPaths[i][6].name).property(propPaths[i][5].name).property(propPaths[i][4].name).property(propPaths[i][3].name).property(propPaths[i][2].name).property(propPaths[i][1].name).property(currentProp.name).expression = expStr;
      }
    }
  }
  app.endUndoGroup();
}






















function getBaseProperty(prop){
  var t = prop;
  var c=0;
  while (t.parentProperty) {
    t = t.parentProperty;
    c++;
  }

  var base=null;
  var baseCount=0;
  var depth=0;
  alert(c);
  for (var i = 0; i < c; i++) {
    var p = prop;
    if (p.propertyDepth >= depth) {
      if (p.propertyDepth > depth){
        baseCount = 0;
      }
      base = p;
      baseCount++;
      depth = p.propertyDepth;
    }else{
      continue;
    }
  }
  alert(base.name);
}


// ------------------------------------------------------------------------------------
// UTILITY FUNCTIONS
// ------------------------------------------------------------------------------------


function getDistance(p1, p2) {
  var a = p1[0] - p2[0];
  var b = p1[1] - p2[1];
  var c = Math.sqrt(a * a + b * b);
  return c;
}

function degreesToRadians(angle) {
  return angle * (Math.PI / 180);
}

function shuffle(a) {
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  return a;
}

function deselectAllLayers() {
  var layersArray = app.project.activeItem.layers;
  for (var k = 1; k <= layersArray.length; k++) {
    var layer = layersArray[k];
    layer.selected = false;
  }
}

function selectAllLayers() {
  var layersArray = app.project.activeItem.layers;
  for (var k = 1; k <= layersArray.length; k++) {
    var layer = layersArray[k];
    layer.selected = true;
  }
}

function checkName(myStr) {
  var myComp = app.project.activeItem;
  var maxNum = 0;
  for (var i = 1; i <= myComp.numLayers; i++) {
    if (myComp.layer(i).name.indexOf(myStr) == 0) {
      maxNum = Math.max(maxNum, parseInt(myComp.layer(i).name.split("_")[1], 10));
    }
  }
  return (maxNum + 1);
}

function openURL(str){
  var os = $.os;
  if(os.indexOf("Windows") != (-1)){
    system.callSystem("Start " + str);
  }else{
    system.callSystem("Open " + str);
  }
}

function checkForUniqueNames(arr) {
  var valuesSoFar = [];
  for (var i = 0; i < arr.length; ++i) {
    var value = arr[i];
    if (value in valuesSoFar) {
      return true;
    }
    valuesSoFar[value] = true;
  }
  return false;
}
