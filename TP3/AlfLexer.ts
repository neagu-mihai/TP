// Generated from ./Alf.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class AlfLexer extends Lexer {
	public static readonly NEWLINE = 1;
	public static readonly INT = 2;
	public static readonly WORD = 3;
	public static readonly PONCTUATION = 4;
	public static readonly WS = 5;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"NEWLINE", "INT", "WORD", "PONCTUATION", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "NEWLINE", "INT", "WORD", "PONCTUATION", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(AlfLexer._LITERAL_NAMES, AlfLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return AlfLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(AlfLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Alf.g4"; }

	// @Override
	public get ruleNames(): string[] { return AlfLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return AlfLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return AlfLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return AlfLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x07&\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03" +
		"\x02\x06\x02\x0F\n\x02\r\x02\x0E\x02\x10\x03\x03\x06\x03\x14\n\x03\r\x03" +
		"\x0E\x03\x15\x03\x04\x06\x04\x19\n\x04\r\x04\x0E\x04\x1A\x03\x05\x06\x05" +
		"\x1E\n\x05\r\x05\x0E\x05\x1F\x03\x06\x06\x06#\n\x06\r\x06\x0E\x06$\x02" +
		"\x02\x02\x07\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\x03" +
		"\x02\x07\x04\x02\f\f\x0F\x0F\x03\x022;\x04\x02C\\c|\b\x02##))..00<=AA" +
		"\x03\x02\"\"\x02*\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02" +
		"\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x03\x0E" +
		"\x03\x02\x02\x02\x05\x13\x03\x02\x02\x02\x07\x18\x03\x02\x02\x02\t\x1D" +
		"\x03\x02\x02\x02\v\"\x03\x02\x02\x02\r\x0F\t\x02\x02\x02\x0E\r\x03\x02" +
		"\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x0E\x03\x02\x02\x02\x10\x11\x03\x02" +
		"\x02\x02\x11\x04\x03\x02\x02\x02\x12\x14\t\x03\x02\x02\x13\x12\x03\x02" +
		"\x02\x02\x14\x15\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x15\x16\x03\x02" +
		"\x02\x02\x16\x06\x03\x02\x02\x02\x17\x19\t\x04\x02\x02\x18\x17\x03\x02" +
		"\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02\x1A\x1B\x03\x02" +
		"\x02\x02\x1B\b\x03\x02\x02\x02\x1C\x1E\t\x05\x02\x02\x1D\x1C\x03\x02\x02" +
		"\x02\x1E\x1F\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02" +
		"\x02 \n\x03\x02\x02\x02!#\t\x06\x02\x02\"!\x03\x02\x02\x02#$\x03\x02\x02" +
		"\x02$\"\x03\x02\x02\x02$%\x03\x02\x02\x02%\f\x03\x02\x02\x02\b\x02\x10" +
		"\x15\x1A\x1F$\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AlfLexer.__ATN) {
			AlfLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(AlfLexer._serializedATN));
		}

		return AlfLexer.__ATN;
	}

}

