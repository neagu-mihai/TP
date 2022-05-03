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
		WS=1, NEWLINE=2, FUNCTION=3, VARIABLE=4, ADD=5, SUB=6, MUL=7, DIV=8, REM=9, 
		INT=10, FLOAT=11, STRING=12, BOOLEAN=13, LIST=14, LP=15, RP=16, EQ=17, 
		SEMICOLON=18, AND=19, OR=20, NOT=21, LSP=22, RSP=23, COMMA=24, BOOL_VALUE=25, 
		LB=26, RB=27, RETURN=28, INT_NUMBER=29, FLOAT_NUMBER=30, STRING_TEXT=31;
	public static final int
		RULE_start = 0, RULE_statement = 1, RULE_declaration = 2, RULE_type = 3, 
		RULE_value = 4, RULE_expression = 5, RULE_expression_boolean = 6, RULE_attribution = 7, 
		RULE_list_declaration = 8, RULE_values = 9, RULE_function_declaration = 10, 
		RULE_parameter = 11, RULE_return_function = 12, RULE_function_call = 13;
	private static String[] makeRuleNames() {
		return new String[] {
			"start", "statement", "declaration", "type", "value", "expression", "expression_boolean", 
			"attribution", "list_declaration", "values", "function_declaration", 
			"parameter", "return_function", "function_call"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'function'", null, "'+'", "'-'", "'*'", "'/'", "'%'", 
			"'int'", "'float'", "'string'", "'bool'", "'list'", "'('", "')'", "'='", 
			"';'", "'&&'", "'||'", "'!'", "'['", "']'", "','", null, "'{'", "'}'", 
			"'return'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WS", "NEWLINE", "FUNCTION", "VARIABLE", "ADD", "SUB", "MUL", "DIV", 
			"REM", "INT", "FLOAT", "STRING", "BOOLEAN", "LIST", "LP", "RP", "EQ", 
			"SEMICOLON", "AND", "OR", "NOT", "LSP", "RSP", "COMMA", "BOOL_VALUE", 
			"LB", "RB", "RETURN", "INT_NUMBER", "FLOAT_NUMBER", "STRING_TEXT"
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
			setState(49);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				_localctx = new MultilineProgContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(38);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FUNCTION) | (1L << VARIABLE) | (1L << INT) | (1L << FLOAT) | (1L << STRING) | (1L << BOOLEAN) | (1L << LIST) | (1L << LP) | (1L << NOT) | (1L << BOOL_VALUE) | (1L << INT_NUMBER) | (1L << FLOAT_NUMBER) | (1L << STRING_TEXT))) != 0)) {
					{
					{
					setState(28);
					statement();
					setState(29);
					match(SEMICOLON);
					setState(33);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==NEWLINE) {
						{
						{
						setState(30);
						match(NEWLINE);
						}
						}
						setState(35);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
					}
					setState(40);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				_localctx = new SinglelineProgContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(41);
				statement();
				setState(42);
				match(SEMICOLON);
				setState(46);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==NEWLINE) {
					{
					{
					setState(43);
					match(NEWLINE);
					}
					}
					setState(48);
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
	public static class FunctionRuleContext extends StatementContext {
		public Function_declarationContext function_declaration() {
			return getRuleContext(Function_declarationContext.class,0);
		}
		public FunctionRuleContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class ListRuleContext extends StatementContext {
		public List_declarationContext list_declaration() {
			return getRuleContext(List_declarationContext.class,0);
		}
		public ListRuleContext(StatementContext ctx) { copyFrom(ctx); }
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
			setState(56);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				_localctx = new DeclarationRuleContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(51);
				declaration();
				}
				break;
			case 2:
				_localctx = new ExpressionRuleContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(52);
				expression(0);
				}
				break;
			case 3:
				_localctx = new ListRuleContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(53);
				list_declaration();
				}
				break;
			case 4:
				_localctx = new FunctionRuleContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(54);
				function_declaration();
				}
				break;
			case 5:
				_localctx = new AttributionRuleContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(55);
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
	public static class VariableFunctionCallContext extends DeclarationContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode VARIABLE() { return getToken(Ex1Parser.VARIABLE, 0); }
		public TerminalNode EQ() { return getToken(Ex1Parser.EQ, 0); }
		public Function_callContext function_call() {
			return getRuleContext(Function_callContext.class,0);
		}
		public VariableFunctionCallContext(DeclarationContext ctx) { copyFrom(ctx); }
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
			setState(68);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				_localctx = new VariableDeclarationContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(58);
				type();
				setState(59);
				match(VARIABLE);
				setState(60);
				match(EQ);
				setState(61);
				expression(0);
				}
				break;
			case 2:
				_localctx = new VariableFunctionCallContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(63);
				type();
				setState(64);
				match(VARIABLE);
				setState(65);
				match(EQ);
				setState(66);
				function_call();
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
	public static class TypeStringContext extends TypeContext {
		public TerminalNode STRING() { return getToken(Ex1Parser.STRING, 0); }
		public TypeStringContext(TypeContext ctx) { copyFrom(ctx); }
	}
	public static class TypeBooleanContext extends TypeContext {
		public TerminalNode BOOLEAN() { return getToken(Ex1Parser.BOOLEAN, 0); }
		public TypeBooleanContext(TypeContext ctx) { copyFrom(ctx); }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_type);
		try {
			setState(74);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INT:
				_localctx = new TypeIntContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(70);
				match(INT);
				}
				break;
			case FLOAT:
				_localctx = new TypeFloatContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(71);
				match(FLOAT);
				}
				break;
			case STRING:
				_localctx = new TypeStringContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(72);
				match(STRING);
				}
				break;
			case BOOLEAN:
				_localctx = new TypeBooleanContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(73);
				match(BOOLEAN);
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
	public static class ValueBooleanContext extends ValueContext {
		public TerminalNode BOOL_VALUE() { return getToken(Ex1Parser.BOOL_VALUE, 0); }
		public ValueBooleanContext(ValueContext ctx) { copyFrom(ctx); }
	}
	public static class ValueVariableContext extends ValueContext {
		public TerminalNode VARIABLE() { return getToken(Ex1Parser.VARIABLE, 0); }
		public ValueVariableContext(ValueContext ctx) { copyFrom(ctx); }
	}
	public static class ValueStringContext extends ValueContext {
		public TerminalNode STRING_TEXT() { return getToken(Ex1Parser.STRING_TEXT, 0); }
		public ValueStringContext(ValueContext ctx) { copyFrom(ctx); }
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
			setState(81);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INT_NUMBER:
				_localctx = new ValueIntContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(76);
				match(INT_NUMBER);
				}
				break;
			case FLOAT_NUMBER:
				_localctx = new ValueFloatContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(77);
				match(FLOAT_NUMBER);
				}
				break;
			case STRING_TEXT:
				_localctx = new ValueStringContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(78);
				match(STRING_TEXT);
				}
				break;
			case BOOL_VALUE:
				_localctx = new ValueBooleanContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(79);
				match(BOOL_VALUE);
				}
				break;
			case VARIABLE:
				_localctx = new ValueVariableContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(80);
				match(VARIABLE);
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
	public static class ExpressionBooleanContext extends ExpressionContext {
		public Expression_booleanContext expression_boolean() {
			return getRuleContext(Expression_booleanContext.class,0);
		}
		public ExpressionBooleanContext(ExpressionContext ctx) { copyFrom(ctx); }
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
			setState(90);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				_localctx = new ExpressionParanthesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(84);
				match(LP);
				setState(85);
				expression(0);
				setState(86);
				match(RP);
				}
				break;
			case 2:
				{
				_localctx = new ExpressionBooleanContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(88);
				expression_boolean(0);
				}
				break;
			case 3:
				{
				_localctx = new ExpressionValueContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(89);
				value();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(109);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(107);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionMultiplyContext(new ExpressionContext(_parentctx, _parentState));
						((ExpressionMultiplyContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(92);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(93);
						((ExpressionMultiplyContext)_localctx).op = match(MUL);
						setState(94);
						((ExpressionMultiplyContext)_localctx).right = expression(9);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionDivisionContext(new ExpressionContext(_parentctx, _parentState));
						((ExpressionDivisionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(95);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(96);
						((ExpressionDivisionContext)_localctx).op = match(DIV);
						setState(97);
						((ExpressionDivisionContext)_localctx).right = expression(8);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionRemContext(new ExpressionContext(_parentctx, _parentState));
						((ExpressionRemContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(98);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(99);
						((ExpressionRemContext)_localctx).op = match(REM);
						setState(100);
						((ExpressionRemContext)_localctx).right = expression(7);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionAdditionContext(new ExpressionContext(_parentctx, _parentState));
						((ExpressionAdditionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(101);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(102);
						((ExpressionAdditionContext)_localctx).op = match(ADD);
						setState(103);
						((ExpressionAdditionContext)_localctx).right = expression(6);
						}
						break;
					case 5:
						{
						_localctx = new ExpressionSubtractionContext(new ExpressionContext(_parentctx, _parentState));
						((ExpressionSubtractionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(104);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(105);
						((ExpressionSubtractionContext)_localctx).op = match(SUB);
						setState(106);
						((ExpressionSubtractionContext)_localctx).right = expression(5);
						}
						break;
					}
					} 
				}
				setState(111);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
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

	public static class Expression_booleanContext extends ParserRuleContext {
		public Expression_booleanContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression_boolean; }
	 
		public Expression_booleanContext() { }
		public void copyFrom(Expression_booleanContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ExpressionNotContext extends Expression_booleanContext {
		public Token op;
		public Expression_booleanContext right;
		public TerminalNode NOT() { return getToken(Ex1Parser.NOT, 0); }
		public Expression_booleanContext expression_boolean() {
			return getRuleContext(Expression_booleanContext.class,0);
		}
		public ExpressionNotContext(Expression_booleanContext ctx) { copyFrom(ctx); }
	}
	public static class ExpressionAndContext extends Expression_booleanContext {
		public Expression_booleanContext left;
		public Token op;
		public Expression_booleanContext right;
		public List<Expression_booleanContext> expression_boolean() {
			return getRuleContexts(Expression_booleanContext.class);
		}
		public Expression_booleanContext expression_boolean(int i) {
			return getRuleContext(Expression_booleanContext.class,i);
		}
		public TerminalNode AND() { return getToken(Ex1Parser.AND, 0); }
		public ExpressionAndContext(Expression_booleanContext ctx) { copyFrom(ctx); }
	}
	public static class ExpressionOrContext extends Expression_booleanContext {
		public Expression_booleanContext left;
		public Token op;
		public Expression_booleanContext right;
		public List<Expression_booleanContext> expression_boolean() {
			return getRuleContexts(Expression_booleanContext.class);
		}
		public Expression_booleanContext expression_boolean(int i) {
			return getRuleContext(Expression_booleanContext.class,i);
		}
		public TerminalNode OR() { return getToken(Ex1Parser.OR, 0); }
		public ExpressionOrContext(Expression_booleanContext ctx) { copyFrom(ctx); }
	}
	public static class ExpressionBoolValueContext extends Expression_booleanContext {
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public ExpressionBoolValueContext(Expression_booleanContext ctx) { copyFrom(ctx); }
	}
	public static class ExpressionBoolParanthesisContext extends Expression_booleanContext {
		public TerminalNode LP() { return getToken(Ex1Parser.LP, 0); }
		public Expression_booleanContext expression_boolean() {
			return getRuleContext(Expression_booleanContext.class,0);
		}
		public TerminalNode RP() { return getToken(Ex1Parser.RP, 0); }
		public ExpressionBoolParanthesisContext(Expression_booleanContext ctx) { copyFrom(ctx); }
	}

	public final Expression_booleanContext expression_boolean() throws RecognitionException {
		return expression_boolean(0);
	}

	private Expression_booleanContext expression_boolean(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		Expression_booleanContext _localctx = new Expression_booleanContext(_ctx, _parentState);
		Expression_booleanContext _prevctx = _localctx;
		int _startState = 12;
		enterRecursionRule(_localctx, 12, RULE_expression_boolean, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NOT:
				{
				_localctx = new ExpressionNotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(113);
				((ExpressionNotContext)_localctx).op = match(NOT);
				setState(114);
				((ExpressionNotContext)_localctx).right = expression_boolean(3);
				}
				break;
			case LP:
				{
				_localctx = new ExpressionBoolParanthesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(115);
				match(LP);
				setState(116);
				expression_boolean(0);
				setState(117);
				match(RP);
				}
				break;
			case VARIABLE:
			case BOOL_VALUE:
			case INT_NUMBER:
			case FLOAT_NUMBER:
			case STRING_TEXT:
				{
				_localctx = new ExpressionBoolValueContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(119);
				value();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(130);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(128);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionOrContext(new Expression_booleanContext(_parentctx, _parentState));
						((ExpressionOrContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression_boolean);
						setState(122);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(123);
						((ExpressionOrContext)_localctx).op = match(OR);
						setState(124);
						((ExpressionOrContext)_localctx).right = expression_boolean(6);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionAndContext(new Expression_booleanContext(_parentctx, _parentState));
						((ExpressionAndContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression_boolean);
						setState(125);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(126);
						((ExpressionAndContext)_localctx).op = match(AND);
						setState(127);
						((ExpressionAndContext)_localctx).right = expression_boolean(5);
						}
						break;
					}
					} 
				}
				setState(132);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
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
		enterRule(_localctx, 14, RULE_attribution);
		try {
			_localctx = new VariableAttributionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
			match(VARIABLE);
			setState(134);
			match(EQ);
			setState(135);
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

	public static class List_declarationContext extends ParserRuleContext {
		public List_declarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_list_declaration; }
	 
		public List_declarationContext() { }
		public void copyFrom(List_declarationContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ListDeclarationContext extends List_declarationContext {
		public TerminalNode LIST() { return getToken(Ex1Parser.LIST, 0); }
		public TerminalNode VARIABLE() { return getToken(Ex1Parser.VARIABLE, 0); }
		public TerminalNode EQ() { return getToken(Ex1Parser.EQ, 0); }
		public TerminalNode LSP() { return getToken(Ex1Parser.LSP, 0); }
		public ValuesContext values() {
			return getRuleContext(ValuesContext.class,0);
		}
		public TerminalNode RSP() { return getToken(Ex1Parser.RSP, 0); }
		public ListDeclarationContext(List_declarationContext ctx) { copyFrom(ctx); }
	}

	public final List_declarationContext list_declaration() throws RecognitionException {
		List_declarationContext _localctx = new List_declarationContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_list_declaration);
		try {
			_localctx = new ListDeclarationContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(137);
			match(LIST);
			setState(138);
			match(VARIABLE);
			setState(139);
			match(EQ);
			setState(140);
			match(LSP);
			setState(141);
			values();
			setState(142);
			match(RSP);
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

	public static class ValuesContext extends ParserRuleContext {
		public ValuesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_values; }
	 
		public ValuesContext() { }
		public void copyFrom(ValuesContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ListValuesContext extends ValuesContext {
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(Ex1Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(Ex1Parser.COMMA, i);
		}
		public ListValuesContext(ValuesContext ctx) { copyFrom(ctx); }
	}

	public final ValuesContext values() throws RecognitionException {
		ValuesContext _localctx = new ValuesContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_values);
		int _la;
		try {
			_localctx = new ListValuesContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(150);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << VARIABLE) | (1L << BOOL_VALUE) | (1L << INT_NUMBER) | (1L << FLOAT_NUMBER) | (1L << STRING_TEXT))) != 0)) {
				{
				{
				setState(144);
				value();
				setState(146);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(145);
					match(COMMA);
					}
				}

				}
				}
				setState(152);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
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

	public static class Function_declarationContext extends ParserRuleContext {
		public Function_declarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_declaration; }
	 
		public Function_declarationContext() { }
		public void copyFrom(Function_declarationContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class FunctionContentContext extends Function_declarationContext {
		public TerminalNode FUNCTION() { return getToken(Ex1Parser.FUNCTION, 0); }
		public TerminalNode VARIABLE() { return getToken(Ex1Parser.VARIABLE, 0); }
		public TerminalNode LP() { return getToken(Ex1Parser.LP, 0); }
		public TerminalNode RP() { return getToken(Ex1Parser.RP, 0); }
		public TerminalNode LB() { return getToken(Ex1Parser.LB, 0); }
		public Return_functionContext return_function() {
			return getRuleContext(Return_functionContext.class,0);
		}
		public TerminalNode RB() { return getToken(Ex1Parser.RB, 0); }
		public List<ParameterContext> parameter() {
			return getRuleContexts(ParameterContext.class);
		}
		public ParameterContext parameter(int i) {
			return getRuleContext(ParameterContext.class,i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(Ex1Parser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(Ex1Parser.NEWLINE, i);
		}
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
		public List<TerminalNode> COMMA() { return getTokens(Ex1Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(Ex1Parser.COMMA, i);
		}
		public FunctionContentContext(Function_declarationContext ctx) { copyFrom(ctx); }
	}

	public final Function_declarationContext function_declaration() throws RecognitionException {
		Function_declarationContext _localctx = new Function_declarationContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_function_declaration);
		int _la;
		try {
			_localctx = new FunctionContentContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(153);
			match(FUNCTION);
			setState(154);
			match(VARIABLE);
			setState(155);
			match(LP);
			setState(162);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << INT) | (1L << FLOAT) | (1L << STRING) | (1L << BOOLEAN))) != 0)) {
				{
				{
				setState(156);
				parameter();
				setState(158);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(157);
					match(COMMA);
					}
				}

				}
				}
				setState(164);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(165);
			match(RP);
			setState(169);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE) {
				{
				{
				setState(166);
				match(NEWLINE);
				}
				}
				setState(171);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(172);
			match(LB);
			setState(176);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE) {
				{
				{
				setState(173);
				match(NEWLINE);
				}
				}
				setState(178);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(189);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FUNCTION) | (1L << VARIABLE) | (1L << INT) | (1L << FLOAT) | (1L << STRING) | (1L << BOOLEAN) | (1L << LIST) | (1L << LP) | (1L << NOT) | (1L << BOOL_VALUE) | (1L << INT_NUMBER) | (1L << FLOAT_NUMBER) | (1L << STRING_TEXT))) != 0)) {
				{
				{
				setState(179);
				statement();
				setState(180);
				match(SEMICOLON);
				setState(184);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==NEWLINE) {
					{
					{
					setState(181);
					match(NEWLINE);
					}
					}
					setState(186);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				}
				setState(191);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(192);
			return_function();
			setState(196);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE) {
				{
				{
				setState(193);
				match(NEWLINE);
				}
				}
				setState(198);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(199);
			match(RB);
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

	public static class ParameterContext extends ParserRuleContext {
		public ParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameter; }
	 
		public ParameterContext() { }
		public void copyFrom(ParameterContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class FunctionParameterContext extends ParameterContext {
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public FunctionParameterContext(ParameterContext ctx) { copyFrom(ctx); }
	}

	public final ParameterContext parameter() throws RecognitionException {
		ParameterContext _localctx = new ParameterContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_parameter);
		try {
			_localctx = new FunctionParameterContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
			declaration();
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

	public static class Return_functionContext extends ParserRuleContext {
		public Return_functionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_return_function; }
	 
		public Return_functionContext() { }
		public void copyFrom(Return_functionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class EmptyReturnContext extends Return_functionContext {
		public TerminalNode RETURN() { return getToken(Ex1Parser.RETURN, 0); }
		public TerminalNode SEMICOLON() { return getToken(Ex1Parser.SEMICOLON, 0); }
		public EmptyReturnContext(Return_functionContext ctx) { copyFrom(ctx); }
	}
	public static class ReturnStatementContext extends Return_functionContext {
		public TerminalNode RETURN() { return getToken(Ex1Parser.RETURN, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(Ex1Parser.SEMICOLON, 0); }
		public ReturnStatementContext(Return_functionContext ctx) { copyFrom(ctx); }
	}

	public final Return_functionContext return_function() throws RecognitionException {
		Return_functionContext _localctx = new Return_functionContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_return_function);
		try {
			setState(209);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				_localctx = new ReturnStatementContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(203);
				match(RETURN);
				setState(204);
				statement();
				setState(205);
				match(SEMICOLON);
				}
				break;
			case 2:
				_localctx = new EmptyReturnContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(207);
				match(RETURN);
				setState(208);
				match(SEMICOLON);
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

	public static class Function_callContext extends ParserRuleContext {
		public Function_callContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_call; }
	 
		public Function_callContext() { }
		public void copyFrom(Function_callContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class FunctionCallContext extends Function_callContext {
		public TerminalNode VARIABLE() { return getToken(Ex1Parser.VARIABLE, 0); }
		public TerminalNode LP() { return getToken(Ex1Parser.LP, 0); }
		public TerminalNode RP() { return getToken(Ex1Parser.RP, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(Ex1Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(Ex1Parser.COMMA, i);
		}
		public FunctionCallContext(Function_callContext ctx) { copyFrom(ctx); }
	}

	public final Function_callContext function_call() throws RecognitionException {
		Function_callContext _localctx = new Function_callContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_function_call);
		int _la;
		try {
			_localctx = new FunctionCallContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(211);
			match(VARIABLE);
			setState(212);
			match(LP);
			setState(222);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << VARIABLE) | (1L << BOOL_VALUE) | (1L << INT_NUMBER) | (1L << FLOAT_NUMBER) | (1L << STRING_TEXT))) != 0)) {
				{
				{
				setState(213);
				value();
				setState(217);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(214);
					match(COMMA);
					}
					}
					setState(219);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				}
				setState(224);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(225);
			match(RP);
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
		case 6:
			return expression_boolean_sempred((Expression_booleanContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 8);
		case 1:
			return precpred(_ctx, 7);
		case 2:
			return precpred(_ctx, 6);
		case 3:
			return precpred(_ctx, 5);
		case 4:
			return precpred(_ctx, 4);
		}
		return true;
	}
	private boolean expression_boolean_sempred(Expression_booleanContext _localctx, int predIndex) {
		switch (predIndex) {
		case 5:
			return precpred(_ctx, 5);
		case 6:
			return precpred(_ctx, 4);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3!\u00e6\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\3\2\3\2\3\2\7\2\"\n\2\f\2\16\2"+
		"%\13\2\7\2\'\n\2\f\2\16\2*\13\2\3\2\3\2\3\2\7\2/\n\2\f\2\16\2\62\13\2"+
		"\5\2\64\n\2\3\3\3\3\3\3\3\3\3\3\5\3;\n\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\3\4\3\4\5\4G\n\4\3\5\3\5\3\5\3\5\5\5M\n\5\3\6\3\6\3\6\3\6\3\6\5\6T"+
		"\n\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7]\n\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7"+
		"\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\7\7n\n\7\f\7\16\7q\13\7\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\5\b{\n\b\3\b\3\b\3\b\3\b\3\b\3\b\7\b\u0083\n\b\f\b"+
		"\16\b\u0086\13\b\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13"+
		"\5\13\u0095\n\13\7\13\u0097\n\13\f\13\16\13\u009a\13\13\3\f\3\f\3\f\3"+
		"\f\3\f\5\f\u00a1\n\f\7\f\u00a3\n\f\f\f\16\f\u00a6\13\f\3\f\3\f\7\f\u00aa"+
		"\n\f\f\f\16\f\u00ad\13\f\3\f\3\f\7\f\u00b1\n\f\f\f\16\f\u00b4\13\f\3\f"+
		"\3\f\3\f\7\f\u00b9\n\f\f\f\16\f\u00bc\13\f\7\f\u00be\n\f\f\f\16\f\u00c1"+
		"\13\f\3\f\3\f\7\f\u00c5\n\f\f\f\16\f\u00c8\13\f\3\f\3\f\3\r\3\r\3\16\3"+
		"\16\3\16\3\16\3\16\3\16\5\16\u00d4\n\16\3\17\3\17\3\17\3\17\7\17\u00da"+
		"\n\17\f\17\16\17\u00dd\13\17\7\17\u00df\n\17\f\17\16\17\u00e2\13\17\3"+
		"\17\3\17\3\17\2\4\f\16\20\2\4\6\b\n\f\16\20\22\24\26\30\32\34\2\2\2\u00fe"+
		"\2\63\3\2\2\2\4:\3\2\2\2\6F\3\2\2\2\bL\3\2\2\2\nS\3\2\2\2\f\\\3\2\2\2"+
		"\16z\3\2\2\2\20\u0087\3\2\2\2\22\u008b\3\2\2\2\24\u0098\3\2\2\2\26\u009b"+
		"\3\2\2\2\30\u00cb\3\2\2\2\32\u00d3\3\2\2\2\34\u00d5\3\2\2\2\36\37\5\4"+
		"\3\2\37#\7\24\2\2 \"\7\4\2\2! \3\2\2\2\"%\3\2\2\2#!\3\2\2\2#$\3\2\2\2"+
		"$\'\3\2\2\2%#\3\2\2\2&\36\3\2\2\2\'*\3\2\2\2(&\3\2\2\2()\3\2\2\2)\64\3"+
		"\2\2\2*(\3\2\2\2+,\5\4\3\2,\60\7\24\2\2-/\7\4\2\2.-\3\2\2\2/\62\3\2\2"+
		"\2\60.\3\2\2\2\60\61\3\2\2\2\61\64\3\2\2\2\62\60\3\2\2\2\63(\3\2\2\2\63"+
		"+\3\2\2\2\64\3\3\2\2\2\65;\5\6\4\2\66;\5\f\7\2\67;\5\22\n\28;\5\26\f\2"+
		"9;\5\20\t\2:\65\3\2\2\2:\66\3\2\2\2:\67\3\2\2\2:8\3\2\2\2:9\3\2\2\2;\5"+
		"\3\2\2\2<=\5\b\5\2=>\7\6\2\2>?\7\23\2\2?@\5\f\7\2@G\3\2\2\2AB\5\b\5\2"+
		"BC\7\6\2\2CD\7\23\2\2DE\5\34\17\2EG\3\2\2\2F<\3\2\2\2FA\3\2\2\2G\7\3\2"+
		"\2\2HM\7\f\2\2IM\7\r\2\2JM\7\16\2\2KM\7\17\2\2LH\3\2\2\2LI\3\2\2\2LJ\3"+
		"\2\2\2LK\3\2\2\2M\t\3\2\2\2NT\7\37\2\2OT\7 \2\2PT\7!\2\2QT\7\33\2\2RT"+
		"\7\6\2\2SN\3\2\2\2SO\3\2\2\2SP\3\2\2\2SQ\3\2\2\2SR\3\2\2\2T\13\3\2\2\2"+
		"UV\b\7\1\2VW\7\21\2\2WX\5\f\7\2XY\7\22\2\2Y]\3\2\2\2Z]\5\16\b\2[]\5\n"+
		"\6\2\\U\3\2\2\2\\Z\3\2\2\2\\[\3\2\2\2]o\3\2\2\2^_\f\n\2\2_`\7\t\2\2`n"+
		"\5\f\7\13ab\f\t\2\2bc\7\n\2\2cn\5\f\7\nde\f\b\2\2ef\7\13\2\2fn\5\f\7\t"+
		"gh\f\7\2\2hi\7\7\2\2in\5\f\7\bjk\f\6\2\2kl\7\b\2\2ln\5\f\7\7m^\3\2\2\2"+
		"ma\3\2\2\2md\3\2\2\2mg\3\2\2\2mj\3\2\2\2nq\3\2\2\2om\3\2\2\2op\3\2\2\2"+
		"p\r\3\2\2\2qo\3\2\2\2rs\b\b\1\2st\7\27\2\2t{\5\16\b\5uv\7\21\2\2vw\5\16"+
		"\b\2wx\7\22\2\2x{\3\2\2\2y{\5\n\6\2zr\3\2\2\2zu\3\2\2\2zy\3\2\2\2{\u0084"+
		"\3\2\2\2|}\f\7\2\2}~\7\26\2\2~\u0083\5\16\b\b\177\u0080\f\6\2\2\u0080"+
		"\u0081\7\25\2\2\u0081\u0083\5\16\b\7\u0082|\3\2\2\2\u0082\177\3\2\2\2"+
		"\u0083\u0086\3\2\2\2\u0084\u0082\3\2\2\2\u0084\u0085\3\2\2\2\u0085\17"+
		"\3\2\2\2\u0086\u0084\3\2\2\2\u0087\u0088\7\6\2\2\u0088\u0089\7\23\2\2"+
		"\u0089\u008a\5\f\7\2\u008a\21\3\2\2\2\u008b\u008c\7\20\2\2\u008c\u008d"+
		"\7\6\2\2\u008d\u008e\7\23\2\2\u008e\u008f\7\30\2\2\u008f\u0090\5\24\13"+
		"\2\u0090\u0091\7\31\2\2\u0091\23\3\2\2\2\u0092\u0094\5\n\6\2\u0093\u0095"+
		"\7\32\2\2\u0094\u0093\3\2\2\2\u0094\u0095\3\2\2\2\u0095\u0097\3\2\2\2"+
		"\u0096\u0092\3\2\2\2\u0097\u009a\3\2\2\2\u0098\u0096\3\2\2\2\u0098\u0099"+
		"\3\2\2\2\u0099\25\3\2\2\2\u009a\u0098\3\2\2\2\u009b\u009c\7\5\2\2\u009c"+
		"\u009d\7\6\2\2\u009d\u00a4\7\21\2\2\u009e\u00a0\5\30\r\2\u009f\u00a1\7"+
		"\32\2\2\u00a0\u009f\3\2\2\2\u00a0\u00a1\3\2\2\2\u00a1\u00a3\3\2\2\2\u00a2"+
		"\u009e\3\2\2\2\u00a3\u00a6\3\2\2\2\u00a4\u00a2\3\2\2\2\u00a4\u00a5\3\2"+
		"\2\2\u00a5\u00a7\3\2\2\2\u00a6\u00a4\3\2\2\2\u00a7\u00ab\7\22\2\2\u00a8"+
		"\u00aa\7\4\2\2\u00a9\u00a8\3\2\2\2\u00aa\u00ad\3\2\2\2\u00ab\u00a9\3\2"+
		"\2\2\u00ab\u00ac\3\2\2\2\u00ac\u00ae\3\2\2\2\u00ad\u00ab\3\2\2\2\u00ae"+
		"\u00b2\7\34\2\2\u00af\u00b1\7\4\2\2\u00b0\u00af\3\2\2\2\u00b1\u00b4\3"+
		"\2\2\2\u00b2\u00b0\3\2\2\2\u00b2\u00b3\3\2\2\2\u00b3\u00bf\3\2\2\2\u00b4"+
		"\u00b2\3\2\2\2\u00b5\u00b6\5\4\3\2\u00b6\u00ba\7\24\2\2\u00b7\u00b9\7"+
		"\4\2\2\u00b8\u00b7\3\2\2\2\u00b9\u00bc\3\2\2\2\u00ba\u00b8\3\2\2\2\u00ba"+
		"\u00bb\3\2\2\2\u00bb\u00be\3\2\2\2\u00bc\u00ba\3\2\2\2\u00bd\u00b5\3\2"+
		"\2\2\u00be\u00c1\3\2\2\2\u00bf\u00bd\3\2\2\2\u00bf\u00c0\3\2\2\2\u00c0"+
		"\u00c2\3\2\2\2\u00c1\u00bf\3\2\2\2\u00c2\u00c6\5\32\16\2\u00c3\u00c5\7"+
		"\4\2\2\u00c4\u00c3\3\2\2\2\u00c5\u00c8\3\2\2\2\u00c6\u00c4\3\2\2\2\u00c6"+
		"\u00c7\3\2\2\2\u00c7\u00c9\3\2\2\2\u00c8\u00c6\3\2\2\2\u00c9\u00ca\7\35"+
		"\2\2\u00ca\27\3\2\2\2\u00cb\u00cc\5\6\4\2\u00cc\31\3\2\2\2\u00cd\u00ce"+
		"\7\36\2\2\u00ce\u00cf\5\4\3\2\u00cf\u00d0\7\24\2\2\u00d0\u00d4\3\2\2\2"+
		"\u00d1\u00d2\7\36\2\2\u00d2\u00d4\7\24\2\2\u00d3\u00cd\3\2\2\2\u00d3\u00d1"+
		"\3\2\2\2\u00d4\33\3\2\2\2\u00d5\u00d6\7\6\2\2\u00d6\u00e0\7\21\2\2\u00d7"+
		"\u00db\5\n\6\2\u00d8\u00da\7\32\2\2\u00d9\u00d8\3\2\2\2\u00da\u00dd\3"+
		"\2\2\2\u00db\u00d9\3\2\2\2\u00db\u00dc\3\2\2\2\u00dc\u00df\3\2\2\2\u00dd"+
		"\u00db\3\2\2\2\u00de\u00d7\3\2\2\2\u00df\u00e2\3\2\2\2\u00e0\u00de\3\2"+
		"\2\2\u00e0\u00e1\3\2\2\2\u00e1\u00e3\3\2\2\2\u00e2\u00e0\3\2\2\2\u00e3"+
		"\u00e4\7\22\2\2\u00e4\35\3\2\2\2\34#(\60\63:FLS\\moz\u0082\u0084\u0094"+
		"\u0098\u00a0\u00a4\u00ab\u00b2\u00ba\u00bf\u00c6\u00d3\u00db\u00e0";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}