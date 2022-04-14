// Generated from c:\Users\Chrys\Documents\GitHub\TP\TP6\Ex1.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class Ex1Parser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WS=1, NEWLINE=2, VARIABLE=3, ADD=4, SUB=5, MUL=6, DIV=7, REM=8, INT=9, 
		FLOAT=10, STRING=11, BOOLEAN=12, LP=13, RP=14, EQ=15, SEMICOLON=16, INT_NUMBER=17, 
		FLOAT_NUMBER=18, STRING_TEXT=19, TRUE=20, FALSE=21, OR=22, AND=23, NOT=24, 
		LIST=25, LA=26, RA=27, COMMA=28;
	public static final int
		RULE_start = 0, RULE_statement = 1, RULE_declaration = 2, RULE_type = 3, 
		RULE_value = 4, RULE_expression = 5, RULE_attribution = 6;
	private static String[] makeRuleNames() {
		return new String[] {
			"start", "statement", "declaration", "type", "value", "expression", "attribution"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'+'", "'-'", "'*'", "'/'", "'%'", "'int'", "'float'", 
			"'string'", "'bool'", "'('", "')'", "'='", "';'", null, null, null, "'true'", 
			"'false'", "'||'", "'&&'", "'!'", "'list'", "'['", "']'", "','"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WS", "NEWLINE", "VARIABLE", "ADD", "SUB", "MUL", "DIV", "REM", 
			"INT", "FLOAT", "STRING", "BOOLEAN", "LP", "RP", "EQ", "SEMICOLON", "INT_NUMBER", 
			"FLOAT_NUMBER", "STRING_TEXT", "TRUE", "FALSE", "OR", "AND", "NOT", "LIST", 
			"LA", "RA", "COMMA"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Ex1.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public Ex1Parser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class StartContext extends ParserRuleContext {
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
	 
		public StartContext() { }
		public void copyFrom(StartContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class MultilineProgContext extends StartContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<TerminalNode> SEMICOLON() { return getTokens(Ex1Parser.SEMICOLON); }
		public TerminalNode SEMICOLON(int i) {
			return getToken(Ex1Parser.SEMICOLON, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(Ex1Parser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(Ex1Parser.NEWLINE, i);
		}
		public MultilineProgContext(StartContext ctx) { copyFrom(ctx); }
	}
	public static class SinglelineProgContext extends StartContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(Ex1Parser.SEMICOLON, 0); }
		public List<TerminalNode> NEWLINE() { return getTokens(Ex1Parser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(Ex1Parser.NEWLINE, i);
		}
		public SinglelineProgContext(StartContext ctx) { copyFrom(ctx); }
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_start);
		int _la;
		try {
			setState(35);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				_localctx = new MultilineProgContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(24);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << VARIABLE) | (1L << INT) | (1L << FLOAT) | (1L << STRING) | (1L << BOOLEAN) | (1L << LP) | (1L << INT_NUMBER) | (1L << FLOAT_NUMBER) | (1L << STRING_TEXT) | (1L << TRUE) | (1L << FALSE) | (1L << NOT) | (1L << LIST) | (1L << LA))) != 0)) {
					{
					{
					setState(14);
					statement();
					setState(15);
					match(SEMICOLON);
					setState(19);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==NEWLINE) {
						{
						{
						setState(16);
						match(NEWLINE);
						}
						}
						setState(21);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
					}
					setState(26);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				_localctx = new SinglelineProgContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(27);
				statement();
				setState(28);
				match(SEMICOLON);
				setState(32);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==NEWLINE) {
					{
					{
					setState(29);
					match(NEWLINE);
					}
					}
					setState(34);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	 
		public StatementContext() { }
		public void copyFrom(StatementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ExpressionRuleContext extends StatementContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpressionRuleContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class DeclarationRuleContext extends StatementContext {
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public DeclarationRuleContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class AttributionRuleContext extends StatementContext {
		public AttributionContext attribution() {
			return getRuleContext(AttributionContext.class,0);
		}
		public AttributionRuleContext(StatementContext ctx) { copyFrom(ctx); }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(40);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				_localctx = new DeclarationRuleContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(37);
				declaration();
				}
				break;
			case 2:
				_localctx = new ExpressionRuleContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(38);
				expression(0);
				}
				break;
			case 3:
				_localctx = new AttributionRuleContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(39);
				attribution();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclarationContext extends ParserRuleContext {
		public DeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaration; }
	 
		public DeclarationContext() { }
		public void copyFrom(DeclarationContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class VariableDeclarationContext extends DeclarationContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode VARIABLE() { return getToken(Ex1Parser.VARIABLE, 0); }
		public TerminalNode EQ() { return getToken(Ex1Parser.EQ, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public VariableDeclarationContext(DeclarationContext ctx) { copyFrom(ctx); }
	}

	public final DeclarationContext declaration() throws RecognitionException {
		DeclarationContext _localctx = new DeclarationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_declaration);
		try {
			_localctx = new VariableDeclarationContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(42);
			type();
			setState(43);
			match(VARIABLE);
			setState(44);
			match(EQ);
			setState(45);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeContext extends ParserRuleContext {
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	 
		public TypeContext() { }
		public void copyFrom(TypeContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class TypeIntContext extends TypeContext {
		public TerminalNode INT() { return getToken(Ex1Parser.INT, 0); }
		public TypeIntContext(TypeContext ctx) { copyFrom(ctx); }
	}
	public static class TypeFloatContext extends TypeContext {
		public TerminalNode FLOAT() { return getToken(Ex1Parser.FLOAT, 0); }
		public TypeFloatContext(TypeContext ctx) { copyFrom(ctx); }
	}
	public static class TypeListContext extends TypeContext {
		public TerminalNode LIST() { return getToken(Ex1Parser.LIST, 0); }
		public TypeListContext(TypeContext ctx) { copyFrom(ctx); }
	}
	public static class TypeStringContext extends TypeContext {
		public TerminalNode STRING() { return getToken(Ex1Parser.STRING, 0); }
		public TypeStringContext(TypeContext ctx) { copyFrom(ctx); }
	}
	public static class TypeBoolContext extends TypeContext {
		public TerminalNode BOOLEAN() { return getToken(Ex1Parser.BOOLEAN, 0); }
		public TypeBoolContext(TypeContext ctx) { copyFrom(ctx); }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_type);
		try {
			setState(52);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INT:
				_localctx = new TypeIntContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(47);
				match(INT);
				}
				break;
			case FLOAT:
				_localctx = new TypeFloatContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(48);
				match(FLOAT);
				}
				break;
			case STRING:
				_localctx = new TypeStringContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(49);
				match(STRING);
				}
				break;
			case BOOLEAN:
				_localctx = new TypeBoolContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(50);
				match(BOOLEAN);
				}
				break;
			case LIST:
				_localctx = new TypeListContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(51);
				match(LIST);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValueContext extends ParserRuleContext {
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
	 
		public ValueContext() { }
		public void copyFrom(ValueContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ValueVariableContext extends ValueContext {
		public TerminalNode VARIABLE() { return getToken(Ex1Parser.VARIABLE, 0); }
		public ValueVariableContext(ValueContext ctx) { copyFrom(ctx); }
	}
	public static class ValueTrueContext extends ValueContext {
		public TerminalNode TRUE() { return getToken(Ex1Parser.TRUE, 0); }
		public ValueTrueContext(ValueContext ctx) { copyFrom(ctx); }
	}
	public static class ValueStringContext extends ValueContext {
		public TerminalNode STRING_TEXT() { return getToken(Ex1Parser.STRING_TEXT, 0); }
		public ValueStringContext(ValueContext ctx) { copyFrom(ctx); }
	}
	public static class ValueFlaseContext extends ValueContext {
		public TerminalNode FALSE() { return getToken(Ex1Parser.FALSE, 0); }
		public ValueFlaseContext(ValueContext ctx) { copyFrom(ctx); }
	}
	public static class ValueIntContext extends ValueContext {
		public TerminalNode INT_NUMBER() { return getToken(Ex1Parser.INT_NUMBER, 0); }
		public ValueIntContext(ValueContext ctx) { copyFrom(ctx); }
	}
	public static class ValueFloatContext extends ValueContext {
		public TerminalNode FLOAT_NUMBER() { return getToken(Ex1Parser.FLOAT_NUMBER, 0); }
		public ValueFloatContext(ValueContext ctx) { copyFrom(ctx); }
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_value);
		try {
			setState(60);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INT_NUMBER:
				_localctx = new ValueIntContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(54);
				match(INT_NUMBER);
				}
				break;
			case FLOAT_NUMBER:
				_localctx = new ValueFloatContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(55);
				match(FLOAT_NUMBER);
				}
				break;
			case STRING_TEXT:
				_localctx = new ValueStringContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(56);
				match(STRING_TEXT);
				}
				break;
			case VARIABLE:
				_localctx = new ValueVariableContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(57);
				match(VARIABLE);
				}
				break;
			case TRUE:
				_localctx = new ValueTrueContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(58);
				match(TRUE);
				}
				break;
			case FALSE:
				_localctx = new ValueFlaseContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(59);
				match(FALSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	 
		public ExpressionContext() { }
		public void copyFrom(ExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ExpressionValueContext extends ExpressionContext {
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public ExpressionValueContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpressionNotContext extends ExpressionContext {
		public TerminalNode NOT() { return getToken(Ex1Parser.NOT, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpressionNotContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpressionMultiplyContext extends ExpressionContext {
		public ExpressionContext left;
		public Token op;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode MUL() { return getToken(Ex1Parser.MUL, 0); }
		public ExpressionMultiplyContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpressionDivisionContext extends ExpressionContext {
		public ExpressionContext left;
		public Token op;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode DIV() { return getToken(Ex1Parser.DIV, 0); }
		public ExpressionDivisionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpressionAndContext extends ExpressionContext {
		public ExpressionContext left;
		public Token op;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode AND() { return getToken(Ex1Parser.AND, 0); }
		public ExpressionAndContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpressionArrayContext extends ExpressionContext {
		public TerminalNode LA() { return getToken(Ex1Parser.LA, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RA() { return getToken(Ex1Parser.RA, 0); }
		public ExpressionArrayContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpressionSubtractionContext extends ExpressionContext {
		public ExpressionContext left;
		public Token op;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode SUB() { return getToken(Ex1Parser.SUB, 0); }
		public ExpressionSubtractionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpressionOrContext extends ExpressionContext {
		public ExpressionContext left;
		public Token op;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode OR() { return getToken(Ex1Parser.OR, 0); }
		public ExpressionOrContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpressionRemContext extends ExpressionContext {
		public ExpressionContext left;
		public Token op;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode REM() { return getToken(Ex1Parser.REM, 0); }
		public ExpressionRemContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpressionArrElemContext extends ExpressionContext {
		public ExpressionContext left;
		public Token op;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode COMMA() { return getToken(Ex1Parser.COMMA, 0); }
		public ExpressionArrElemContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpressionParanthesisContext extends ExpressionContext {
		public TerminalNode LP() { return getToken(Ex1Parser.LP, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RP() { return getToken(Ex1Parser.RP, 0); }
		public ExpressionParanthesisContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpressionAdditionContext extends ExpressionContext {
		public ExpressionContext left;
		public Token op;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode ADD() { return getToken(Ex1Parser.ADD, 0); }
		public ExpressionAdditionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 10;
		enterRecursionRule(_localctx, 10, RULE_expression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(74);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LP:
				{
				_localctx = new ExpressionParanthesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(63);
				match(LP);
				setState(64);
				expression(0);
				setState(65);
				match(RP);
				}
				break;
			case NOT:
				{
				_localctx = new ExpressionNotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(67);
				match(NOT);
				setState(68);
				expression(4);
				}
				break;
			case LA:
				{
				_localctx = new ExpressionArrayContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(69);
				match(LA);
				setState(70);
				expression(0);
				setState(71);
				match(RA);
				}
				break;
			case VARIABLE:
			case INT_NUMBER:
			case FLOAT_NUMBER:
			case STRING_TEXT:
			case TRUE:
			case FALSE:
				{
				_localctx = new ExpressionValueContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(73);
				value();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(102);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(100);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionMultiplyContext(new ExpressionContext(_parentctx, _parentState));
						((ExpressionMultiplyContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(76);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(77);
						((ExpressionMultiplyContext)_localctx).op = match(MUL);
						setState(78);
						((ExpressionMultiplyContext)_localctx).right = expression(13);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionDivisionContext(new ExpressionContext(_parentctx, _parentState));
						((ExpressionDivisionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(79);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(80);
						((ExpressionDivisionContext)_localctx).op = match(DIV);
						setState(81);
						((ExpressionDivisionContext)_localctx).right = expression(12);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionRemContext(new ExpressionContext(_parentctx, _parentState));
						((ExpressionRemContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(82);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(83);
						((ExpressionRemContext)_localctx).op = match(REM);
						setState(84);
						((ExpressionRemContext)_localctx).right = expression(11);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionAdditionContext(new ExpressionContext(_parentctx, _parentState));
						((ExpressionAdditionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(85);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(86);
						((ExpressionAdditionContext)_localctx).op = match(ADD);
						setState(87);
						((ExpressionAdditionContext)_localctx).right = expression(10);
						}
						break;
					case 5:
						{
						_localctx = new ExpressionSubtractionContext(new ExpressionContext(_parentctx, _parentState));
						((ExpressionSubtractionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(88);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(89);
						((ExpressionSubtractionContext)_localctx).op = match(SUB);
						setState(90);
						((ExpressionSubtractionContext)_localctx).right = expression(9);
						}
						break;
					case 6:
						{
						_localctx = new ExpressionAndContext(new ExpressionContext(_parentctx, _parentState));
						((ExpressionAndContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(91);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(92);
						((ExpressionAndContext)_localctx).op = match(AND);
						setState(93);
						((ExpressionAndContext)_localctx).right = expression(7);
						}
						break;
					case 7:
						{
						_localctx = new ExpressionOrContext(new ExpressionContext(_parentctx, _parentState));
						((ExpressionOrContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(94);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(95);
						((ExpressionOrContext)_localctx).op = match(OR);
						setState(96);
						((ExpressionOrContext)_localctx).right = expression(6);
						}
						break;
					case 8:
						{
						_localctx = new ExpressionArrElemContext(new ExpressionContext(_parentctx, _parentState));
						((ExpressionArrElemContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(97);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(98);
						((ExpressionArrElemContext)_localctx).op = match(COMMA);
						setState(99);
						((ExpressionArrElemContext)_localctx).right = expression(3);
						}
						break;
					}
					} 
				}
				setState(104);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class AttributionContext extends ParserRuleContext {
		public AttributionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attribution; }
	 
		public AttributionContext() { }
		public void copyFrom(AttributionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class VariableAttributionContext extends AttributionContext {
		public TerminalNode VARIABLE() { return getToken(Ex1Parser.VARIABLE, 0); }
		public TerminalNode EQ() { return getToken(Ex1Parser.EQ, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public VariableAttributionContext(AttributionContext ctx) { copyFrom(ctx); }
	}

	public final AttributionContext attribution() throws RecognitionException {
		AttributionContext _localctx = new AttributionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_attribution);
		try {
			_localctx = new VariableAttributionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(105);
			match(VARIABLE);
			setState(106);
			match(EQ);
			setState(107);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 5:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 12);
		case 1:
			return precpred(_ctx, 11);
		case 2:
			return precpred(_ctx, 10);
		case 3:
			return precpred(_ctx, 9);
		case 4:
			return precpred(_ctx, 8);
		case 5:
			return precpred(_ctx, 6);
		case 6:
			return precpred(_ctx, 5);
		case 7:
			return precpred(_ctx, 2);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\36p\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\3\2\3\2\3\2\7\2\24\n\2\f\2"+
		"\16\2\27\13\2\7\2\31\n\2\f\2\16\2\34\13\2\3\2\3\2\3\2\7\2!\n\2\f\2\16"+
		"\2$\13\2\5\2&\n\2\3\3\3\3\3\3\5\3+\n\3\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5"+
		"\3\5\3\5\5\5\67\n\5\3\6\3\6\3\6\3\6\3\6\3\6\5\6?\n\6\3\7\3\7\3\7\3\7\3"+
		"\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7M\n\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3"+
		"\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\7\7"+
		"g\n\7\f\7\16\7j\13\7\3\b\3\b\3\b\3\b\3\b\2\3\f\t\2\4\6\b\n\f\16\2\2\2"+
		"\u0082\2%\3\2\2\2\4*\3\2\2\2\6,\3\2\2\2\b\66\3\2\2\2\n>\3\2\2\2\fL\3\2"+
		"\2\2\16k\3\2\2\2\20\21\5\4\3\2\21\25\7\22\2\2\22\24\7\4\2\2\23\22\3\2"+
		"\2\2\24\27\3\2\2\2\25\23\3\2\2\2\25\26\3\2\2\2\26\31\3\2\2\2\27\25\3\2"+
		"\2\2\30\20\3\2\2\2\31\34\3\2\2\2\32\30\3\2\2\2\32\33\3\2\2\2\33&\3\2\2"+
		"\2\34\32\3\2\2\2\35\36\5\4\3\2\36\"\7\22\2\2\37!\7\4\2\2 \37\3\2\2\2!"+
		"$\3\2\2\2\" \3\2\2\2\"#\3\2\2\2#&\3\2\2\2$\"\3\2\2\2%\32\3\2\2\2%\35\3"+
		"\2\2\2&\3\3\2\2\2\'+\5\6\4\2(+\5\f\7\2)+\5\16\b\2*\'\3\2\2\2*(\3\2\2\2"+
		"*)\3\2\2\2+\5\3\2\2\2,-\5\b\5\2-.\7\5\2\2./\7\21\2\2/\60\5\f\7\2\60\7"+
		"\3\2\2\2\61\67\7\13\2\2\62\67\7\f\2\2\63\67\7\r\2\2\64\67\7\16\2\2\65"+
		"\67\7\33\2\2\66\61\3\2\2\2\66\62\3\2\2\2\66\63\3\2\2\2\66\64\3\2\2\2\66"+
		"\65\3\2\2\2\67\t\3\2\2\28?\7\23\2\29?\7\24\2\2:?\7\25\2\2;?\7\5\2\2<?"+
		"\7\26\2\2=?\7\27\2\2>8\3\2\2\2>9\3\2\2\2>:\3\2\2\2>;\3\2\2\2><\3\2\2\2"+
		">=\3\2\2\2?\13\3\2\2\2@A\b\7\1\2AB\7\17\2\2BC\5\f\7\2CD\7\20\2\2DM\3\2"+
		"\2\2EF\7\32\2\2FM\5\f\7\6GH\7\34\2\2HI\5\f\7\2IJ\7\35\2\2JM\3\2\2\2KM"+
		"\5\n\6\2L@\3\2\2\2LE\3\2\2\2LG\3\2\2\2LK\3\2\2\2Mh\3\2\2\2NO\f\16\2\2"+
		"OP\7\b\2\2Pg\5\f\7\17QR\f\r\2\2RS\7\t\2\2Sg\5\f\7\16TU\f\f\2\2UV\7\n\2"+
		"\2Vg\5\f\7\rWX\f\13\2\2XY\7\6\2\2Yg\5\f\7\fZ[\f\n\2\2[\\\7\7\2\2\\g\5"+
		"\f\7\13]^\f\b\2\2^_\7\31\2\2_g\5\f\7\t`a\f\7\2\2ab\7\30\2\2bg\5\f\7\b"+
		"cd\f\4\2\2de\7\36\2\2eg\5\f\7\5fN\3\2\2\2fQ\3\2\2\2fT\3\2\2\2fW\3\2\2"+
		"\2fZ\3\2\2\2f]\3\2\2\2f`\3\2\2\2fc\3\2\2\2gj\3\2\2\2hf\3\2\2\2hi\3\2\2"+
		"\2i\r\3\2\2\2jh\3\2\2\2kl\7\5\2\2lm\7\21\2\2mn\5\f\7\2n\17\3\2\2\2\f\25"+
		"\32\"%*\66>Lfh";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}