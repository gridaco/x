import blue from "./blue";
import gray from "./gray";
import green from "./green";
import neutral from "./neutral";
import orange from "./orange";
import red from "./red";
import rose from "./rose";
import slate from "./slate";
import stone from "./stone";
import violet from "./violet";
import yellow from "./yellow";
import zinc from "./zinc";
import * as hc from "./v-highcontrast";
import * as designer_ryu from "./v-ryu";
import * as satu from "./v-saturation";

// NOTE: do not change the export name as this name is saved in the database
export const basic = {
  blue,
  gray,
  green,
  neutral,
  orange,
  red,
  rose,
  slate,
  stone,
  violet,
  yellow,
  zinc,
};

const highcontrast_blue = hc.blue;
const highcontrast_green = hc.green;
const highcontrast_orange = hc.orange;
const highcontrast_red = hc.red;
const highcontrast_violet = hc.violet;
const highcontrast_yellow = hc.yellow;

// NOTE: do not change the export name as this name is saved in the database
export const highcontrast = {
  highcontrast_blue,
  highcontrast_green,
  highcontrast_orange,
  highcontrast_red,
  highcontrast_violet,
  highcontrast_yellow,
};

const saturation_blue = satu.blue;
const saturation_green = satu.green;
const saturation_orange = satu.orange;
const saturation_red = satu.red;
const saturation_violet = satu.violet;
const saturation_yellow = satu.yellow;

// NOTE: do not change the export name as this name is saved in the database
export const saturation = {
  saturation_blue,
  saturation_green,
  saturation_orange,
  saturation_red,
  saturation_violet,
  saturation_yellow,
};

const ryu_001_monochrome = designer_ryu._001_monochrome;
const ryu_002_soft_nuetrals = designer_ryu._002_soft_nuetrals;
const ryu_003_lemon_blue = designer_ryu._003_lemon_blue;
const ryu_004_mint_chocolate = designer_ryu._004_mint_chocolate;
const ryu_005_dark_lavender = designer_ryu._005_dark_lavender;
const ryu_006_sage_blush = designer_ryu._006_sage_blush;
const ryu_007_midnight_blue = designer_ryu._007_midnight_blue;
const ryu_008_blue_steel = designer_ryu._008_blue_steel;
const ryu_009_neon_yellow = designer_ryu._009_neon_yellow;
const ryu_010_cherry_blossom = designer_ryu._010_cherry_blossom;
const ryu_011_peach_sorbet = designer_ryu._011_peach_sorbet;
const ryu_012_cotton_candy = designer_ryu._012_cotton_candy;
const ryu_013_soft_violet = designer_ryu._013_soft_violet;

// NOTE: do not change the export name as this name is saved in the database
export const ryu = {
  ryu_001_monochrome,
  ryu_002_soft_nuetrals,
  ryu_003_lemon_blue,
  ryu_004_mint_chocolate,
  ryu_005_dark_lavender,
  ryu_006_sage_blush,
  ryu_007_midnight_blue,
  ryu_008_blue_steel,
  ryu_009_neon_yellow,
  ryu_010_cherry_blossom,
  ryu_011_peach_sorbet,
  ryu_012_cotton_candy,
  ryu_013_soft_violet,
};

// NOTE: do not change the export name as this name is saved in the database
const palettes = {
  ...basic,
  ...highcontrast,
  ...saturation,
  ...ryu,
};

export default palettes;
