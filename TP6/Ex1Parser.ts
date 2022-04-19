// Generated from ./Ex1.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { Ex1Listener } from "./Ex1Listener";
import { Ex1Visitor } from "./Ex1Visitor";


export class Ex1Parser extends Parser {
	public static readonly WS = 1;
	public static readonly NEWLINE = 2;
	public static readonly FUNCTION = 3;
	public static readonly VARIABLE = 4;
	public static readonly ADD = 5;
	public static readonly SUB = 6;
	public static readonly MUL = 7;
	public static readonly DIV = 8;
	public static readonly REM = 9;
	public static readonly INT = 10;
	public static readonly FLOAT = 11;
	public static readonly STRING = 12;
	public static readonly BOOLEAN = 13;
	public static readonly LIST = 14;
	public static readonly LP = 15;
	public static readonly RP = 16;
	public static readonly EQ = 17;
	public static readonly SEMICOLON = 18;
	public static readonly AND = 19;
	public static readonly OR = 20;
	public static readonly NOT = 21;
	public static readonly LSP = 22;
	public static readonly RSP = 23;
	public static readonly COMMA = 24;
	public static readonly BOOL_VALUE = 25;
	public static readonly LB = 26;
	public static readonly RB = 27;
	public static readonly RETURN = 28;
	public static readonly INT_NUMBER = 29;
	public static readonly FLOAT_NUMBER = 30;
	public static readonly STRING_TEXT = 31;
	public static readonly RULE_start = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_type = 3;
	public static readonly RULE_value = 4;
	public static readonly RULE_expression = 5;
	public static readonly RULE_expression_boolean = 6;
	public static readonly RULE_attribution = 7;
	public static readonly RULE_list_declaration = 8;
	public static readonly RULE_values = 9;
	public static readonly RULE_function_declaration = 10;
	public static readonly RULE_parameter = 11;
	public static readonly RULE_return_function = 12;
	public static readonly RULE_function_call = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "statement", "declaration", "type", "value", "expression", "expression_boolean", 
		"attribution", "list_declaration", "values", "function_declaration", "parameter", 
		"return_function", "function_call",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'function'", undefined, "'+'", "'-'", 
		"'*'", "'/'", "'%'", "'int'", "'float'", "'string'", "'bool'", "'list'", 
		"'('", "')'", "'='", "';'", "'&&'", "'||'", "'!'", "'['", "']'", "','", 
		undefined, "'{'", "'}'", "'return'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "NEWLINE", "FUNCTION", "VARIABLE", "ADD", "SUB", "MUL", 
		"DIV", "REM", "INT", "FLOAT", "STRING", "BOOLEAN", "LIST", "LP", "RP", 
		"EQ", "SEMICOLON", "AND", "OR", "NOT", "LSP", "RSP", "COMMA", "BOOL_VALUE", 
		"LB", "RB", "RETURN", "INT_NUMBER", "FLOAT_NUMBER", "STRING_TEXT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Ex1Parser._LITERAL_NAMES, Ex1Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Ex1Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Ex1.g4"; }

	// @Override
	public get ruleNames(): string[] { return Ex1Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return Ex1Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Ex1Parser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Ex1Parser.RULE_start);
		let _la: number;
		try {
			this.state = 49;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				_localctx = new MultilineProgContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 38;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Ex1Parser.FUNCTION) | (1 << Ex1Parser.VARIABLE) | (1 << Ex1Parser.INT) | (1 << Ex1Parser.FLOAT) | (1 << Ex1Parser.STRING) | (1 << Ex1Parser.BOOLEAN) | (1 << Ex1Parser.LIST) | (1 << Ex1Parser.LP) | (1 << Ex1Parser.NOT) | (1 << Ex1Parser.BOOL_VALUE) | (1 << Ex1Parser.INT_NUMBER) | (1 << Ex1Parser.FLOAT_NUMBER) | (1 << Ex1Parser.STRING_TEXT))) !== 0)) {
					{
					{
					this.state = 28;
					this.statement();
					this.state = 29;
					this.match(Ex1Parser.SEMICOLON);
					this.state = 33;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === Ex1Parser.NEWLINE) {
						{
						{
						this.state = 30;
						this.match(Ex1Parser.NEWLINE);
						}
						}
						this.state = 35;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 40;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				_localctx = new SinglelineProgContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 41;
				this.statement();
				this.state = 42;
				this.match(Ex1Parser.SEMICOLON);
				this.state = 46;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Ex1Parser.NEWLINE) {
					{
					{
					this.state = 43;
					this.match(Ex1Parser.NEWLINE);
					}
					}
					this.state = 48;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Ex1Parser.RULE_statement);
		try {
			this.state = 56;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				_localctx = new DeclarationRuleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 51;
				this.declaration();
				}
				break;

			case 2:
				_localctx = new ExpressionRuleContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 52;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new ListRuleContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 53;
				this.list_declaration();
				}
				break;

			case 4:
				_localctx = new FunctionRuleContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 54;
				this.function_declaration();
				}
				break;

			case 5:
				_localctx = new AttributionRuleContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 55;
				this.attribution();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Ex1Parser.RULE_declaration);
		try {
			this.state = 68;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				_localctx = new VariableDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 58;
				this.type();
				this.state = 59;
				this.match(Ex1Parser.VARIABLE);
				this.state = 60;
				this.match(Ex1Parser.EQ);
				this.state = 61;
				this.expression(0);
				}
				break;

			case 2:
				_localctx = new VariableFunctionCallContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 63;
				this.type();
				this.state = 64;
				this.match(Ex1Parser.VARIABLE);
				this.state = 65;
				this.match(Ex1Parser.EQ);
				this.state = 66;
				this.function_call();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Ex1Parser.RULE_type);
		try {
			this.state = 74;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Ex1Parser.INT:
				_localctx = new TypeIntContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 70;
				this.match(Ex1Parser.INT);
				}
				break;
			case Ex1Parser.FLOAT:
				_localctx = new TypeFloatContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 71;
				this.match(Ex1Parser.FLOAT);
				}
				break;
			case Ex1Parser.STRING:
				_localctx = new TypeStringContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 72;
				this.match(Ex1Parser.STRING);
				}
				break;
			case Ex1Parser.BOOLEAN:
				_localctx = new TypeBooleanContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 73;
				this.match(Ex1Parser.BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Ex1Parser.RULE_value);
		try {
			this.state = 81;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Ex1Parser.INT_NUMBER:
				_localctx = new ValueIntContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 76;
				this.match(Ex1Parser.INT_NUMBER);
				}
				break;
			case Ex1Parser.FLOAT_NUMBER:
				_localctx = new ValueFloatContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 77;
				this.match(Ex1Parser.FLOAT_NUMBER);
				}
				break;
			case Ex1Parser.STRING_TEXT:
				_localctx = new ValueStringContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 78;
				this.match(Ex1Parser.STRING_TEXT);
				}
				break;
			case Ex1Parser.BOOL_VALUE:
				_localctx = new ValueBooleanContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 79;
				this.match(Ex1Parser.BOOL_VALUE);
				}
				break;
			case Ex1Parser.VARIABLE:
				_localctx = new ValueVariableContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 80;
				this.match(Ex1Parser.VARIABLE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, Ex1Parser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				_localctx = new ExpressionParanthesisContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 84;
				this.match(Ex1Parser.LP);
				this.state = 85;
				this.expression(0);
				this.state = 86;
				this.match(Ex1Parser.RP);
				}
				break;

			case 2:
				{
				_localctx = new ExpressionBooleanContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 88;
				this.expression_boolean(0);
				}
				break;

			case 3:
				{
				_localctx = new ExpressionValueContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 89;
				this.value();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 109;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 107;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionMultiplyContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionMultiplyContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, Ex1Parser.RULE_expression);
						this.state = 92;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 93;
						(_localctx as ExpressionMultiplyContext)._op = this.match(Ex1Parser.MUL);
						this.state = 94;
						(_localctx as ExpressionMultiplyContext)._right = this.expression(9);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionDivisionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionDivisionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, Ex1Parser.RULE_expression);
						this.state = 95;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 96;
						(_localctx as ExpressionDivisionContext)._op = this.match(Ex1Parser.DIV);
						this.state = 97;
						(_localctx as ExpressionDivisionContext)._right = this.expression(8);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionRemContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionRemContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, Ex1Parser.RULE_expression);
						this.state = 98;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 99;
						(_localctx as ExpressionRemContext)._op = this.match(Ex1Parser.REM);
						this.state = 100;
						(_localctx as ExpressionRemContext)._right = this.expression(7);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionAdditionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionAdditionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, Ex1Parser.RULE_expression);
						this.state = 101;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 102;
						(_localctx as ExpressionAdditionContext)._op = this.match(Ex1Parser.ADD);
						this.state = 103;
						(_localctx as ExpressionAdditionContext)._right = this.expression(6);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionSubtractionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionSubtractionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, Ex1Parser.RULE_expression);
						this.state = 104;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 105;
						(_localctx as ExpressionSubtractionContext)._op = this.match(Ex1Parser.SUB);
						this.state = 106;
						(_localctx as ExpressionSubtractionContext)._right = this.expression(5);
						}
						break;
					}
					}
				}
				this.state = 111;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public expression_boolean(): Expression_booleanContext;
	public expression_boolean(_p: number): Expression_booleanContext;
	// @RuleVersion(0)
	public expression_boolean(_p?: number): Expression_booleanContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Expression_booleanContext = new Expression_booleanContext(this._ctx, _parentState);
		let _prevctx: Expression_booleanContext = _localctx;
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, Ex1Parser.RULE_expression_boolean, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Ex1Parser.NOT:
				{
				_localctx = new ExpressionNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 113;
				(_localctx as ExpressionNotContext)._op = this.match(Ex1Parser.NOT);
				this.state = 114;
				(_localctx as ExpressionNotContext)._right = this.expression_boolean(3);
				}
				break;
			case Ex1Parser.LP:
				{
				_localctx = new ExpressionBoolParanthesisContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 115;
				this.match(Ex1Parser.LP);
				this.state = 116;
				this.expression_boolean(0);
				this.state = 117;
				this.match(Ex1Parser.RP);
				}
				break;
			case Ex1Parser.VARIABLE:
			case Ex1Parser.BOOL_VALUE:
			case Ex1Parser.INT_NUMBER:
			case Ex1Parser.FLOAT_NUMBER:
			case Ex1Parser.STRING_TEXT:
				{
				_localctx = new ExpressionBoolValueContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 119;
				this.value();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 130;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 128;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionOrContext(new Expression_booleanContext(_parentctx, _parentState));
						(_localctx as ExpressionOrContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, Ex1Parser.RULE_expression_boolean);
						this.state = 122;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 123;
						(_localctx as ExpressionOrContext)._op = this.match(Ex1Parser.OR);
						this.state = 124;
						(_localctx as ExpressionOrContext)._right = this.expression_boolean(6);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionAndContext(new Expression_booleanContext(_parentctx, _parentState));
						(_localctx as ExpressionAndContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, Ex1Parser.RULE_expression_boolean);
						this.state = 125;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 126;
						(_localctx as ExpressionAndContext)._op = this.match(Ex1Parser.AND);
						this.state = 127;
						(_localctx as ExpressionAndContext)._right = this.expression_boolean(5);
						}
						break;
					}
					}
				}
				this.state = 132;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribution(): AttributionContext {
		let _localctx: AttributionContext = new AttributionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Ex1Parser.RULE_attribution);
		try {
			_localctx = new VariableAttributionContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.match(Ex1Parser.VARIABLE);
			this.state = 134;
			this.match(Ex1Parser.EQ);
			this.state = 135;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list_declaration(): List_declarationContext {
		let _localctx: List_declarationContext = new List_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Ex1Parser.RULE_list_declaration);
		try {
			_localctx = new ListDeclarationContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this.match(Ex1Parser.LIST);
			this.state = 138;
			this.match(Ex1Parser.VARIABLE);
			this.state = 139;
			this.match(Ex1Parser.EQ);
			this.state = 140;
			this.match(Ex1Parser.LSP);
			this.state = 141;
			this.values();
			this.state = 142;
			this.match(Ex1Parser.RSP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public values(): ValuesContext {
		let _localctx: ValuesContext = new ValuesContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Ex1Parser.RULE_values);
		let _la: number;
		try {
			_localctx = new ListValuesContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Ex1Parser.VARIABLE) | (1 << Ex1Parser.BOOL_VALUE) | (1 << Ex1Parser.INT_NUMBER) | (1 << Ex1Parser.FLOAT_NUMBER) | (1 << Ex1Parser.STRING_TEXT))) !== 0)) {
				{
				{
				this.state = 144;
				this.value();
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Ex1Parser.COMMA) {
					{
					this.state = 145;
					this.match(Ex1Parser.COMMA);
					}
				}

				}
				}
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_declaration(): Function_declarationContext {
		let _localctx: Function_declarationContext = new Function_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, Ex1Parser.RULE_function_declaration);
		let _la: number;
		try {
			_localctx = new FunctionContentContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.match(Ex1Parser.FUNCTION);
			this.state = 154;
			this.match(Ex1Parser.VARIABLE);
			this.state = 155;
			this.match(Ex1Parser.LP);
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Ex1Parser.INT) | (1 << Ex1Parser.FLOAT) | (1 << Ex1Parser.STRING) | (1 << Ex1Parser.BOOLEAN))) !== 0)) {
				{
				{
				this.state = 156;
				this.parameter();
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Ex1Parser.COMMA) {
					{
					this.state = 157;
					this.match(Ex1Parser.COMMA);
					}
				}

				}
				}
				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 165;
			this.match(Ex1Parser.RP);
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Ex1Parser.NEWLINE) {
				{
				{
				this.state = 166;
				this.match(Ex1Parser.NEWLINE);
				}
				}
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 172;
			this.match(Ex1Parser.LB);
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Ex1Parser.NEWLINE) {
				{
				{
				this.state = 173;
				this.match(Ex1Parser.NEWLINE);
				}
				}
				this.state = 178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Ex1Parser.FUNCTION) | (1 << Ex1Parser.VARIABLE) | (1 << Ex1Parser.INT) | (1 << Ex1Parser.FLOAT) | (1 << Ex1Parser.STRING) | (1 << Ex1Parser.BOOLEAN) | (1 << Ex1Parser.LIST) | (1 << Ex1Parser.LP) | (1 << Ex1Parser.NOT) | (1 << Ex1Parser.BOOL_VALUE) | (1 << Ex1Parser.INT_NUMBER) | (1 << Ex1Parser.FLOAT_NUMBER) | (1 << Ex1Parser.STRING_TEXT))) !== 0)) {
				{
				{
				this.state = 179;
				this.statement();
				this.state = 180;
				this.match(Ex1Parser.SEMICOLON);
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Ex1Parser.NEWLINE) {
					{
					{
					this.state = 181;
					this.match(Ex1Parser.NEWLINE);
					}
					}
					this.state = 186;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 192;
			this.return_function();
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Ex1Parser.NEWLINE) {
				{
				{
				this.state = 193;
				this.match(Ex1Parser.NEWLINE);
				}
				}
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 199;
			this.match(Ex1Parser.RB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, Ex1Parser.RULE_parameter);
		try {
			_localctx = new FunctionParameterContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.declaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public return_function(): Return_functionContext {
		let _localctx: Return_functionContext = new Return_functionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, Ex1Parser.RULE_return_function);
		try {
			this.state = 209;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 203;
				this.match(Ex1Parser.RETURN);
				this.state = 204;
				this.statement();
				this.state = 205;
				this.match(Ex1Parser.SEMICOLON);
				}
				break;

			case 2:
				_localctx = new EmptyReturnContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 207;
				this.match(Ex1Parser.RETURN);
				this.state = 208;
				this.match(Ex1Parser.SEMICOLON);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_call(): Function_callContext {
		let _localctx: Function_callContext = new Function_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, Ex1Parser.RULE_function_call);
		let _la: number;
		try {
			_localctx = new FunctionCallContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.match(Ex1Parser.VARIABLE);
			this.state = 212;
			this.match(Ex1Parser.LP);
			this.state = 222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Ex1Parser.VARIABLE) | (1 << Ex1Parser.BOOL_VALUE) | (1 << Ex1Parser.INT_NUMBER) | (1 << Ex1Parser.FLOAT_NUMBER) | (1 << Ex1Parser.STRING_TEXT))) !== 0)) {
				{
				{
				this.state = 213;
				this.value();
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Ex1Parser.COMMA) {
					{
					{
					this.state = 214;
					this.match(Ex1Parser.COMMA);
					}
					}
					this.state = 219;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 225;
			this.match(Ex1Parser.RP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 6:
			return this.expression_boolean_sempred(_localctx as Expression_booleanContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);

		case 1:
			return this.precpred(this._ctx, 7);

		case 2:
			return this.precpred(this._ctx, 6);

		case 3:
			return this.precpred(this._ctx, 5);

		case 4:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private expression_boolean_sempred(_localctx: Expression_booleanContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 5);

		case 6:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03!\xE6\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x07\x02\"\n\x02\f\x02" +
		"\x0E\x02%\v\x02\x07\x02\'\n\x02\f\x02\x0E\x02*\v\x02\x03\x02\x03\x02\x03" +
		"\x02\x07\x02/\n\x02\f\x02\x0E\x022\v\x02\x05\x024\n\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03;\n\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04G\n\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x05\x05M\n\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x05\x06T\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07]\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x07\x07n\n\x07\f\x07\x0E\x07q\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x05\b{\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\x83" +
		"\n\b\f\b\x0E\b\x86\v\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\v\x03\v\x05\v\x95\n\v\x07\v\x97\n\v\f\v\x0E\v\x9A" +
		"\v\v\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xA1\n\f\x07\f\xA3\n\f\f\f\x0E" +
		"\f\xA6\v\f\x03\f\x03\f\x07\f\xAA\n\f\f\f\x0E\f\xAD\v\f\x03\f\x03\f\x07" +
		"\f\xB1\n\f\f\f\x0E\f\xB4\v\f\x03\f\x03\f\x03\f\x07\f\xB9\n\f\f\f\x0E\f" +
		"\xBC\v\f\x07\f\xBE\n\f\f\f\x0E\f\xC1\v\f\x03\f\x03\f\x07\f\xC5\n\f\f\f" +
		"\x0E\f\xC8\v\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\xD4\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07" +
		"\x0F\xDA\n\x0F\f\x0F\x0E\x0F\xDD\v\x0F\x07\x0F\xDF\n\x0F\f\x0F\x0E\x0F" +
		"\xE2\v\x0F\x03\x0F\x03\x0F\x03\x0F\x02\x02\x04\f\x0E\x10\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x02\x02\x02\xFE\x023\x03\x02\x02\x02\x04:\x03\x02" +
		"\x02\x02\x06F\x03\x02\x02\x02\bL\x03\x02\x02\x02\nS\x03\x02\x02\x02\f" +
		"\\\x03\x02\x02\x02\x0Ez\x03\x02\x02\x02\x10\x87\x03\x02\x02\x02\x12\x8B" +
		"\x03\x02\x02\x02\x14\x98\x03\x02\x02\x02\x16\x9B\x03\x02\x02\x02\x18\xCB" +
		"\x03\x02\x02\x02\x1A\xD3\x03\x02\x02\x02\x1C\xD5\x03\x02\x02\x02\x1E\x1F" +
		"\x05\x04\x03\x02\x1F#\x07\x14\x02\x02 \"\x07\x04\x02\x02! \x03\x02\x02" +
		"\x02\"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$\'\x03\x02" +
		"\x02\x02%#\x03\x02\x02\x02&\x1E\x03\x02\x02\x02\'*\x03\x02\x02\x02(&\x03" +
		"\x02\x02\x02()\x03\x02\x02\x02)4\x03\x02\x02\x02*(\x03\x02\x02\x02+,\x05" +
		"\x04\x03\x02,0\x07\x14\x02\x02-/\x07\x04\x02\x02.-\x03\x02\x02\x02/2\x03" +
		"\x02\x02\x020.\x03\x02\x02\x0201\x03\x02\x02\x0214\x03\x02\x02\x0220\x03" +
		"\x02\x02\x023(\x03\x02\x02\x023+\x03\x02\x02\x024\x03\x03\x02\x02\x02" +
		"5;\x05\x06\x04\x026;\x05\f\x07\x027;\x05\x12\n\x028;\x05\x16\f\x029;\x05" +
		"\x10\t\x02:5\x03\x02\x02\x02:6\x03\x02\x02\x02:7\x03\x02\x02\x02:8\x03" +
		"\x02\x02\x02:9\x03\x02\x02\x02;\x05\x03\x02\x02\x02<=\x05\b\x05\x02=>" +
		"\x07\x06\x02\x02>?\x07\x13\x02\x02?@\x05\f\x07\x02@G\x03\x02\x02\x02A" +
		"B\x05\b\x05\x02BC\x07\x06\x02\x02CD\x07\x13\x02\x02DE\x05\x1C\x0F\x02" +
		"EG\x03\x02\x02\x02F<\x03\x02\x02\x02FA\x03\x02\x02\x02G\x07\x03\x02\x02" +
		"\x02HM\x07\f\x02\x02IM\x07\r\x02\x02JM\x07\x0E\x02\x02KM\x07\x0F\x02\x02" +
		"LH\x03\x02\x02\x02LI\x03\x02\x02\x02LJ\x03\x02\x02\x02LK\x03\x02\x02\x02" +
		"M\t\x03\x02\x02\x02NT\x07\x1F\x02\x02OT\x07 \x02\x02PT\x07!\x02\x02QT" +
		"\x07\x1B\x02\x02RT\x07\x06\x02\x02SN\x03\x02\x02\x02SO\x03\x02\x02\x02" +
		"SP\x03\x02\x02\x02SQ\x03\x02\x02\x02SR\x03\x02\x02\x02T\v\x03\x02\x02" +
		"\x02UV\b\x07\x01\x02VW\x07\x11\x02\x02WX\x05\f\x07\x02XY\x07\x12\x02\x02" +
		"Y]\x03\x02\x02\x02Z]\x05\x0E\b\x02[]\x05\n\x06\x02\\U\x03\x02\x02\x02" +
		"\\Z\x03\x02\x02\x02\\[\x03\x02\x02\x02]o\x03\x02\x02\x02^_\f\n\x02\x02" +
		"_`\x07\t\x02\x02`n\x05\f\x07\vab\f\t\x02\x02bc\x07\n\x02\x02cn\x05\f\x07" +
		"\nde\f\b\x02\x02ef\x07\v\x02\x02fn\x05\f\x07\tgh\f\x07\x02\x02hi\x07\x07" +
		"\x02\x02in\x05\f\x07\bjk\f\x06\x02\x02kl\x07\b\x02\x02ln\x05\f\x07\x07" +
		"m^\x03\x02\x02\x02ma\x03\x02\x02\x02md\x03\x02\x02\x02mg\x03\x02\x02\x02" +
		"mj\x03\x02\x02\x02nq\x03\x02\x02\x02om\x03\x02\x02\x02op\x03\x02\x02\x02" +
		"p\r\x03\x02\x02\x02qo\x03\x02\x02\x02rs\b\b\x01\x02st\x07\x17\x02\x02" +
		"t{\x05\x0E\b\x05uv\x07\x11\x02\x02vw\x05\x0E\b\x02wx\x07\x12\x02\x02x" +
		"{\x03\x02\x02\x02y{\x05\n\x06\x02zr\x03\x02\x02\x02zu\x03\x02\x02\x02" +
		"zy\x03\x02\x02\x02{\x84\x03\x02\x02\x02|}\f\x07\x02\x02}~\x07\x16\x02" +
		"\x02~\x83\x05\x0E\b\b\x7F\x80\f\x06\x02\x02\x80\x81\x07\x15\x02\x02\x81" +
		"\x83\x05\x0E\b\x07\x82|\x03\x02\x02\x02\x82\x7F\x03\x02\x02\x02\x83\x86" +
		"\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x0F" +
		"\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x87\x88\x07\x06\x02\x02\x88\x89" +
		"\x07\x13\x02\x02\x89\x8A\x05\f\x07\x02\x8A\x11\x03\x02\x02\x02\x8B\x8C" +
		"\x07\x10\x02\x02\x8C\x8D\x07\x06\x02\x02\x8D\x8E\x07\x13\x02\x02\x8E\x8F" +
		"\x07\x18\x02\x02\x8F\x90\x05\x14\v\x02\x90\x91\x07\x19\x02\x02\x91\x13" +
		"\x03\x02\x02\x02\x92\x94\x05\n\x06\x02\x93\x95\x07\x1A\x02\x02\x94\x93" +
		"\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x97\x03\x02\x02\x02\x96\x92" +
		"\x03\x02\x02\x02\x97\x9A\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98\x99" +
		"\x03\x02\x02\x02\x99\x15\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9B\x9C" +
		"\x07\x05\x02\x02\x9C\x9D\x07\x06\x02\x02\x9D\xA4\x07\x11\x02\x02\x9E\xA0" +
		"\x05\x18\r\x02\x9F\xA1\x07\x1A\x02\x02\xA0\x9F\x03\x02\x02\x02\xA0\xA1" +
		"\x03\x02\x02\x02\xA1\xA3\x03\x02\x02\x02\xA2\x9E\x03\x02\x02\x02\xA3\xA6" +
		"\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA7" +
		"\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA7\xAB\x07\x12\x02\x02\xA8\xAA" +
		"\x07\x04\x02\x02\xA9\xA8\x03\x02\x02\x02\xAA\xAD\x03\x02\x02\x02\xAB\xA9" +
		"\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAE\x03\x02\x02\x02\xAD\xAB" +
		"\x03\x02\x02\x02\xAE\xB2\x07\x1C\x02\x02\xAF\xB1\x07\x04\x02\x02\xB0\xAF" +
		"\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB3" +
		"\x03\x02\x02\x02\xB3\xBF\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB6" +
		"\x05\x04\x03\x02\xB6\xBA\x07\x14\x02\x02\xB7\xB9\x07\x04\x02\x02\xB8\xB7" +
		"\x03\x02\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB" +
		"\x03\x02\x02\x02\xBB\xBE\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBD\xB5" +
		"\x03\x02\x02\x02\xBE\xC1\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xBF\xC0" +
		"\x03\x02\x02\x02\xC0\xC2\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC2\xC6" +
		"\x05\x1A\x0E\x02\xC3\xC5\x07\x04\x02\x02\xC4\xC3\x03\x02\x02\x02\xC5\xC8" +
		"\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC9" +
		"\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCA\x07\x1D\x02\x02\xCA\x17" +
		"\x03\x02\x02\x02\xCB\xCC\x05\x06\x04\x02\xCC\x19\x03\x02\x02\x02\xCD\xCE" +
		"\x07\x1E\x02\x02\xCE\xCF\x05\x04\x03\x02\xCF\xD0\x07\x14\x02\x02\xD0\xD4" +
		"\x03\x02\x02\x02\xD1\xD2\x07\x1E\x02\x02\xD2\xD4\x07\x14\x02\x02\xD3\xCD" +
		"\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\x1B\x03\x02\x02\x02\xD5\xD6" +
		"\x07\x06\x02\x02\xD6\xE0\x07\x11\x02\x02\xD7\xDB\x05\n\x06\x02\xD8\xDA" +
		"\x07\x1A\x02\x02\xD9\xD8\x03\x02\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB\xD9" +
		"\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDF\x03\x02\x02\x02\xDD\xDB" +
		"\x03\x02\x02\x02\xDE\xD7\x03\x02\x02\x02\xDF\xE2\x03\x02\x02\x02\xE0\xDE" +
		"\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE3\x03\x02\x02\x02\xE2\xE0" +
		"\x03\x02\x02\x02\xE3\xE4\x07\x12\x02\x02\xE4\x1D\x03\x02\x02\x02\x1C#" +
		"(03:FLS\\moz\x82\x84\x94\x98\xA0\xA4\xAB\xB2\xBA\xBF\xC6\xD3\xDB\xE0";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Ex1Parser.__ATN) {
			Ex1Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Ex1Parser._serializedATN));
		}

		return Ex1Parser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Ex1Parser.RULE_start; }
	public copyFrom(ctx: StartContext): void {
		super.copyFrom(ctx);
	}
}
export class MultilineProgContext extends StartContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Ex1Parser.SEMICOLON);
		} else {
			return this.getToken(Ex1Parser.SEMICOLON, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Ex1Parser.NEWLINE);
		} else {
			return this.getToken(Ex1Parser.NEWLINE, i);
		}
	}
	constructor(ctx: StartContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterMultilineProg) {
			listener.enterMultilineProg(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitMultilineProg) {
			listener.exitMultilineProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitMultilineProg) {
			return visitor.visitMultilineProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SinglelineProgContext extends StartContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(Ex1Parser.SEMICOLON, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Ex1Parser.NEWLINE);
		} else {
			return this.getToken(Ex1Parser.NEWLINE, i);
		}
	}
	constructor(ctx: StartContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterSinglelineProg) {
			listener.enterSinglelineProg(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitSinglelineProg) {
			listener.exitSinglelineProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitSinglelineProg) {
			return visitor.visitSinglelineProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Ex1Parser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class DeclarationRuleContext extends StatementContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterDeclarationRule) {
			listener.enterDeclarationRule(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitDeclarationRule) {
			listener.exitDeclarationRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitDeclarationRule) {
			return visitor.visitDeclarationRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionRuleContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionRule) {
			listener.enterExpressionRule(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionRule) {
			listener.exitExpressionRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionRule) {
			return visitor.visitExpressionRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListRuleContext extends StatementContext {
	public list_declaration(): List_declarationContext {
		return this.getRuleContext(0, List_declarationContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterListRule) {
			listener.enterListRule(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitListRule) {
			listener.exitListRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitListRule) {
			return visitor.visitListRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionRuleContext extends StatementContext {
	public function_declaration(): Function_declarationContext {
		return this.getRuleContext(0, Function_declarationContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterFunctionRule) {
			listener.enterFunctionRule(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitFunctionRule) {
			listener.exitFunctionRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitFunctionRule) {
			return visitor.visitFunctionRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AttributionRuleContext extends StatementContext {
	public attribution(): AttributionContext {
		return this.getRuleContext(0, AttributionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterAttributionRule) {
			listener.enterAttributionRule(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitAttributionRule) {
			listener.exitAttributionRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitAttributionRule) {
			return visitor.visitAttributionRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Ex1Parser.RULE_declaration; }
	public copyFrom(ctx: DeclarationContext): void {
		super.copyFrom(ctx);
	}
}
export class VariableDeclarationContext extends DeclarationContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public VARIABLE(): TerminalNode { return this.getToken(Ex1Parser.VARIABLE, 0); }
	public EQ(): TerminalNode { return this.getToken(Ex1Parser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VariableFunctionCallContext extends DeclarationContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public VARIABLE(): TerminalNode { return this.getToken(Ex1Parser.VARIABLE, 0); }
	public EQ(): TerminalNode { return this.getToken(Ex1Parser.EQ, 0); }
	public function_call(): Function_callContext {
		return this.getRuleContext(0, Function_callContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterVariableFunctionCall) {
			listener.enterVariableFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitVariableFunctionCall) {
			listener.exitVariableFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitVariableFunctionCall) {
			return visitor.visitVariableFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Ex1Parser.RULE_type; }
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class TypeIntContext extends TypeContext {
	public INT(): TerminalNode { return this.getToken(Ex1Parser.INT, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterTypeInt) {
			listener.enterTypeInt(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitTypeInt) {
			listener.exitTypeInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitTypeInt) {
			return visitor.visitTypeInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeFloatContext extends TypeContext {
	public FLOAT(): TerminalNode { return this.getToken(Ex1Parser.FLOAT, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterTypeFloat) {
			listener.enterTypeFloat(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitTypeFloat) {
			listener.exitTypeFloat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitTypeFloat) {
			return visitor.visitTypeFloat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeStringContext extends TypeContext {
	public STRING(): TerminalNode { return this.getToken(Ex1Parser.STRING, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterTypeString) {
			listener.enterTypeString(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitTypeString) {
			listener.exitTypeString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitTypeString) {
			return visitor.visitTypeString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeBooleanContext extends TypeContext {
	public BOOLEAN(): TerminalNode { return this.getToken(Ex1Parser.BOOLEAN, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterTypeBoolean) {
			listener.enterTypeBoolean(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitTypeBoolean) {
			listener.exitTypeBoolean(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitTypeBoolean) {
			return visitor.visitTypeBoolean(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Ex1Parser.RULE_value; }
	public copyFrom(ctx: ValueContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueIntContext extends ValueContext {
	public INT_NUMBER(): TerminalNode { return this.getToken(Ex1Parser.INT_NUMBER, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterValueInt) {
			listener.enterValueInt(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitValueInt) {
			listener.exitValueInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitValueInt) {
			return visitor.visitValueInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueFloatContext extends ValueContext {
	public FLOAT_NUMBER(): TerminalNode { return this.getToken(Ex1Parser.FLOAT_NUMBER, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterValueFloat) {
			listener.enterValueFloat(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitValueFloat) {
			listener.exitValueFloat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitValueFloat) {
			return visitor.visitValueFloat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueStringContext extends ValueContext {
	public STRING_TEXT(): TerminalNode { return this.getToken(Ex1Parser.STRING_TEXT, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterValueString) {
			listener.enterValueString(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitValueString) {
			listener.exitValueString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitValueString) {
			return visitor.visitValueString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueBooleanContext extends ValueContext {
	public BOOL_VALUE(): TerminalNode { return this.getToken(Ex1Parser.BOOL_VALUE, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterValueBoolean) {
			listener.enterValueBoolean(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitValueBoolean) {
			listener.exitValueBoolean(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitValueBoolean) {
			return visitor.visitValueBoolean(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueVariableContext extends ValueContext {
	public VARIABLE(): TerminalNode { return this.getToken(Ex1Parser.VARIABLE, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterValueVariable) {
			listener.enterValueVariable(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitValueVariable) {
			listener.exitValueVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitValueVariable) {
			return visitor.visitValueVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Ex1Parser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ExpressionMultiplyContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MUL(): TerminalNode { return this.getToken(Ex1Parser.MUL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionMultiply) {
			listener.enterExpressionMultiply(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionMultiply) {
			listener.exitExpressionMultiply(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionMultiply) {
			return visitor.visitExpressionMultiply(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionDivisionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DIV(): TerminalNode { return this.getToken(Ex1Parser.DIV, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionDivision) {
			listener.enterExpressionDivision(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionDivision) {
			listener.exitExpressionDivision(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionDivision) {
			return visitor.visitExpressionDivision(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionRemContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public REM(): TerminalNode { return this.getToken(Ex1Parser.REM, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionRem) {
			listener.enterExpressionRem(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionRem) {
			listener.exitExpressionRem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionRem) {
			return visitor.visitExpressionRem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionAdditionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ADD(): TerminalNode { return this.getToken(Ex1Parser.ADD, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionAddition) {
			listener.enterExpressionAddition(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionAddition) {
			listener.exitExpressionAddition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionAddition) {
			return visitor.visitExpressionAddition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionSubtractionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SUB(): TerminalNode { return this.getToken(Ex1Parser.SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionSubtraction) {
			listener.enterExpressionSubtraction(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionSubtraction) {
			listener.exitExpressionSubtraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionSubtraction) {
			return visitor.visitExpressionSubtraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionParanthesisContext extends ExpressionContext {
	public LP(): TerminalNode { return this.getToken(Ex1Parser.LP, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RP(): TerminalNode { return this.getToken(Ex1Parser.RP, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionParanthesis) {
			listener.enterExpressionParanthesis(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionParanthesis) {
			listener.exitExpressionParanthesis(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionParanthesis) {
			return visitor.visitExpressionParanthesis(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionBooleanContext extends ExpressionContext {
	public expression_boolean(): Expression_booleanContext {
		return this.getRuleContext(0, Expression_booleanContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionBoolean) {
			listener.enterExpressionBoolean(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionBoolean) {
			listener.exitExpressionBoolean(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionBoolean) {
			return visitor.visitExpressionBoolean(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionValueContext extends ExpressionContext {
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionValue) {
			listener.enterExpressionValue(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionValue) {
			listener.exitExpressionValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionValue) {
			return visitor.visitExpressionValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expression_booleanContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Ex1Parser.RULE_expression_boolean; }
	public copyFrom(ctx: Expression_booleanContext): void {
		super.copyFrom(ctx);
	}
}
export class ExpressionOrContext extends Expression_booleanContext {
	public _left!: Expression_booleanContext;
	public _op!: Token;
	public _right!: Expression_booleanContext;
	public expression_boolean(): Expression_booleanContext[];
	public expression_boolean(i: number): Expression_booleanContext;
	public expression_boolean(i?: number): Expression_booleanContext | Expression_booleanContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Expression_booleanContext);
		} else {
			return this.getRuleContext(i, Expression_booleanContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(Ex1Parser.OR, 0); }
	constructor(ctx: Expression_booleanContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionOr) {
			listener.enterExpressionOr(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionOr) {
			listener.exitExpressionOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionOr) {
			return visitor.visitExpressionOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionAndContext extends Expression_booleanContext {
	public _left!: Expression_booleanContext;
	public _op!: Token;
	public _right!: Expression_booleanContext;
	public expression_boolean(): Expression_booleanContext[];
	public expression_boolean(i: number): Expression_booleanContext;
	public expression_boolean(i?: number): Expression_booleanContext | Expression_booleanContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Expression_booleanContext);
		} else {
			return this.getRuleContext(i, Expression_booleanContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(Ex1Parser.AND, 0); }
	constructor(ctx: Expression_booleanContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionAnd) {
			listener.enterExpressionAnd(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionAnd) {
			listener.exitExpressionAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionAnd) {
			return visitor.visitExpressionAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionNotContext extends Expression_booleanContext {
	public _op!: Token;
	public _right!: Expression_booleanContext;
	public NOT(): TerminalNode { return this.getToken(Ex1Parser.NOT, 0); }
	public expression_boolean(): Expression_booleanContext {
		return this.getRuleContext(0, Expression_booleanContext);
	}
	constructor(ctx: Expression_booleanContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionNot) {
			listener.enterExpressionNot(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionNot) {
			listener.exitExpressionNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionNot) {
			return visitor.visitExpressionNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionBoolParanthesisContext extends Expression_booleanContext {
	public LP(): TerminalNode { return this.getToken(Ex1Parser.LP, 0); }
	public expression_boolean(): Expression_booleanContext {
		return this.getRuleContext(0, Expression_booleanContext);
	}
	public RP(): TerminalNode { return this.getToken(Ex1Parser.RP, 0); }
	constructor(ctx: Expression_booleanContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionBoolParanthesis) {
			listener.enterExpressionBoolParanthesis(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionBoolParanthesis) {
			listener.exitExpressionBoolParanthesis(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionBoolParanthesis) {
			return visitor.visitExpressionBoolParanthesis(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionBoolValueContext extends Expression_booleanContext {
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(ctx: Expression_booleanContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionBoolValue) {
			listener.enterExpressionBoolValue(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionBoolValue) {
			listener.exitExpressionBoolValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionBoolValue) {
			return visitor.visitExpressionBoolValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Ex1Parser.RULE_attribution; }
	public copyFrom(ctx: AttributionContext): void {
		super.copyFrom(ctx);
	}
}
export class VariableAttributionContext extends AttributionContext {
	public VARIABLE(): TerminalNode { return this.getToken(Ex1Parser.VARIABLE, 0); }
	public EQ(): TerminalNode { return this.getToken(Ex1Parser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: AttributionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterVariableAttribution) {
			listener.enterVariableAttribution(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitVariableAttribution) {
			listener.exitVariableAttribution(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitVariableAttribution) {
			return visitor.visitVariableAttribution(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class List_declarationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Ex1Parser.RULE_list_declaration; }
	public copyFrom(ctx: List_declarationContext): void {
		super.copyFrom(ctx);
	}
}
export class ListDeclarationContext extends List_declarationContext {
	public LIST(): TerminalNode { return this.getToken(Ex1Parser.LIST, 0); }
	public VARIABLE(): TerminalNode { return this.getToken(Ex1Parser.VARIABLE, 0); }
	public EQ(): TerminalNode { return this.getToken(Ex1Parser.EQ, 0); }
	public LSP(): TerminalNode { return this.getToken(Ex1Parser.LSP, 0); }
	public values(): ValuesContext {
		return this.getRuleContext(0, ValuesContext);
	}
	public RSP(): TerminalNode { return this.getToken(Ex1Parser.RSP, 0); }
	constructor(ctx: List_declarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterListDeclaration) {
			listener.enterListDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitListDeclaration) {
			listener.exitListDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitListDeclaration) {
			return visitor.visitListDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValuesContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Ex1Parser.RULE_values; }
	public copyFrom(ctx: ValuesContext): void {
		super.copyFrom(ctx);
	}
}
export class ListValuesContext extends ValuesContext {
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Ex1Parser.COMMA);
		} else {
			return this.getToken(Ex1Parser.COMMA, i);
		}
	}
	constructor(ctx: ValuesContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterListValues) {
			listener.enterListValues(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitListValues) {
			listener.exitListValues(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitListValues) {
			return visitor.visitListValues(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_declarationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Ex1Parser.RULE_function_declaration; }
	public copyFrom(ctx: Function_declarationContext): void {
		super.copyFrom(ctx);
	}
}
export class FunctionContentContext extends Function_declarationContext {
	public FUNCTION(): TerminalNode { return this.getToken(Ex1Parser.FUNCTION, 0); }
	public VARIABLE(): TerminalNode { return this.getToken(Ex1Parser.VARIABLE, 0); }
	public LP(): TerminalNode { return this.getToken(Ex1Parser.LP, 0); }
	public RP(): TerminalNode { return this.getToken(Ex1Parser.RP, 0); }
	public LB(): TerminalNode { return this.getToken(Ex1Parser.LB, 0); }
	public return_function(): Return_functionContext {
		return this.getRuleContext(0, Return_functionContext);
	}
	public RB(): TerminalNode { return this.getToken(Ex1Parser.RB, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Ex1Parser.NEWLINE);
		} else {
			return this.getToken(Ex1Parser.NEWLINE, i);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Ex1Parser.SEMICOLON);
		} else {
			return this.getToken(Ex1Parser.SEMICOLON, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Ex1Parser.COMMA);
		} else {
			return this.getToken(Ex1Parser.COMMA, i);
		}
	}
	constructor(ctx: Function_declarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterFunctionContent) {
			listener.enterFunctionContent(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitFunctionContent) {
			listener.exitFunctionContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitFunctionContent) {
			return visitor.visitFunctionContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Ex1Parser.RULE_parameter; }
	public copyFrom(ctx: ParameterContext): void {
		super.copyFrom(ctx);
	}
}
export class FunctionParameterContext extends ParameterContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(ctx: ParameterContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterFunctionParameter) {
			listener.enterFunctionParameter(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitFunctionParameter) {
			listener.exitFunctionParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitFunctionParameter) {
			return visitor.visitFunctionParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_functionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Ex1Parser.RULE_return_function; }
	public copyFrom(ctx: Return_functionContext): void {
		super.copyFrom(ctx);
	}
}
export class ReturnStatementContext extends Return_functionContext {
	public RETURN(): TerminalNode { return this.getToken(Ex1Parser.RETURN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(Ex1Parser.SEMICOLON, 0); }
	constructor(ctx: Return_functionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmptyReturnContext extends Return_functionContext {
	public RETURN(): TerminalNode { return this.getToken(Ex1Parser.RETURN, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(Ex1Parser.SEMICOLON, 0); }
	constructor(ctx: Return_functionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterEmptyReturn) {
			listener.enterEmptyReturn(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitEmptyReturn) {
			listener.exitEmptyReturn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitEmptyReturn) {
			return visitor.visitEmptyReturn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_callContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Ex1Parser.RULE_function_call; }
	public copyFrom(ctx: Function_callContext): void {
		super.copyFrom(ctx);
	}
}
export class FunctionCallContext extends Function_callContext {
	public VARIABLE(): TerminalNode { return this.getToken(Ex1Parser.VARIABLE, 0); }
	public LP(): TerminalNode { return this.getToken(Ex1Parser.LP, 0); }
	public RP(): TerminalNode { return this.getToken(Ex1Parser.RP, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Ex1Parser.COMMA);
		} else {
			return this.getToken(Ex1Parser.COMMA, i);
		}
	}
	constructor(ctx: Function_callContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


