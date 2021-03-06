/**
 * Author : Nidin Vinayakan <01@01alchemist.com>
 */
export const Color = {
    DEFAULT_TEXT: 12,
    DEFAULT_BG: 8,
    BLACK: 0,
    WHITE: 255,
    BOLD: 1,
    RED: 1,
    GREEN: 2,
    YELLOW: 3,
    BLUE: 4,
    AQUA: 14,
    PURPLE: 104,
    MAGENTA: 5,
    ORANGE: 208,
};

const hexColor = {};
hexColor[Color.DEFAULT_TEXT] = '#000000';
hexColor[Color.DEFAULT_BG] = '#FFFFFF';
hexColor[Color.BLACK] = '#000000';
hexColor[Color.WHITE] = '#FFFFFF';
hexColor[Color.BOLD] = '';
hexColor[Color.RED] = '#FF0000';
hexColor[Color.GREEN] = '#83b029';
hexColor[Color.BLUE] = '#4badff';
hexColor[Color.AQUA] = '#29b8db';
hexColor[Color.PURPLE] = '#8600c8';
hexColor[Color.YELLOW] = '#FFF600';
hexColor[Color.MAGENTA] = '#FF00FF';
hexColor[Color.ORANGE] = '#FF8C00';
export const HexColor = hexColor;
