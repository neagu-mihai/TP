// Generated from /Users/diana_ghindaoanu/Documents/ALF_2022/TP/TP7/Alf.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class AlfParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WS=1, NEWLINE=2, FUNCTION=3, VARIABLE=4, ADD=5, SUB=6, MUL=7, DIV=8, REM=9, 
		INT=10, FLOAT=11, STRING=12, LIST=13, LP=14, RP=15, EQ=16, SEMICOLON=17, 
		LSP=18, RSP=19, COMMA=20, LB=21, RB=22, RETURN=23, INT_NUMBER=24, FLOAT_NUMBER=25, 
		STRING_TEXT=26;
	public static final int
		RULE_start = 0, RULE_statement = 1, RULE_declaration = 2, RULE_type = 3, 
		RULE_value = 4, RULE_expression = 5, RULE_attribution = 6, RULE_list_declaration = 7, 
		RULE_values = 8, RULE_function_declaration = 9, RULE_parameter = 10, RULE_return_function = 11, 
		RULE_function_call = 12;
	private static String[] makeRuleNames() {
		return new String[] {
			"start", "statement", "declaration", "type", "value", "expression", "attribution", 
			"list_declaration", "values", "function_declaration", "parameter", "return_function", 
			"function_call"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'function'", null, "'+'", "'-'", "'*'", "'/'", "'%'", 
			"'int'", "'float'", "'string'", "'list'", "'('", "')'", "'='", "';'", 
			"'['", "']'", "','", "'{'", "'}'", "'return'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WS", "NEWLINE", "FUNCTION", "VARIABLE", "ADD", "SUB", "MUL", "DIV", 
			"REM", "INT", "FLOAT", "STRING", "LIST", "LP", "RP", "EQ", "SEMICOLON", 
			"LSP", "RSP", "COMMA", "LB", "RB", "RETURN", "INT_NUMBER", "FLOAT_NUMBER", 
			"STRING_TEXT"
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
	public String getGrammarFileName() { return "Alf.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public AlfParser(TokenStream input) {
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
		public List<TerminalNode> SEMICOLON() { return getTokens(AlfParser.SEMICOLON); }
		public TerminalNode SEMICOLON(int i) {
			return getToken(AlfParser.SEMICOLON, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(AlfParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(AlfParser.NEWLINE, i);
		}
		public MultilineProgContext(StartContext ctx) { copyFrom(ctx); }
	}
	public static class SinglelineProgContext extends StartContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(AlfParser.SEMICOLON, 0); }
		public SinglelineProgContext(StartContext ctx) { copyFrom(ctx); }
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_start);
		int _la;
		try {
			setState(42);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				_localctx = new MultilineProgContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(36);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FUNCTION) | (1L << VARIABLE) | (1L << INT) | (1L << FLOAT) | (1L << STRING) | (1L << LIST) | (1L << LP) | (1L << INT_NUMBER) | (1L << FLOAT_NUMBER) | (1L << STRING_TEXT))) != 0)) {
					{
					{
					setState(26);
					statement();
					setState(27);
					match(SEMICOLON);
					setState(31);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==NEWLINE) {
						{
						{
						setState(28);
						match(NEWLINE);
						}
						}
						setState(33);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
					}
					setState(38);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				_localctx = new SinglelineProgContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(39);
				statement();
				setState(40);
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
			setState(49);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				_localctx = new DeclarationRuleContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(44);
				declaration();
				}
				break;
			case 2:
				_localctx = new ExpressionRuleContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(45);
				expression(0);
				}
				break;
			case 3:
				_localctx = new ListRuleContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(46);
				list_declaration();
				}
				break;
			case 4:
				_localctx = new FunctionRuleContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(47);
				function_declaration();
				}
				break;
			case 5:
				_localctx = new AttributionRuleContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(48);
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
		public TerminalNode VARIABLE() { return getToken(AlfParser.VARIABLE, 0); }
		public TerminalNode EQ() { return getToken(AlfParser.EQ, 0); }
		public Function_callContext function_call() {
			return getRuleContext(Function_callContext.class,0);
		}
		public VariableFunctionCallContext(DeclarationContext ctx) { copyFrom(ctx); }
	}
	public static class VariableDeclarationContext extends DeclarationContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode VARIABLE() { return getToken(AlfParser.VARIABLE, 0); }
		public TerminalNode EQ() { return getToken(AlfParser.EQ, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public VariableDeclarationContext(DeclarationContext ctx) { copyFrom(ctx); }
	}

	public final DeclarationContext declaration() throws RecognitionException {
		DeclarationContext _localctx = new DeclarationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_declaration);
		try {
			setState(61);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				_localctx = new VariableDeclarationContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(51);
				type();
				setState(52);
				match(VARIABLE);
				setState(53);
				match(EQ);
				setState(54);
				expression(0);
				}
				break;
			case 2:
				_localctx = new VariableFunctionCallContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(56);
				type();
				setState(57);
				match(VARIABLE);
				setState(58);
				match(EQ);
				setState(59);
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
		public TerminalNode INT() { return getToken(AlfParser.INT, 0); }
		public TypeIntContext(TypeContext ctx) { copyFrom(ctx); }
	}
	public static class TypeFloatContext extends TypeContext {
		public TerminalNode FLOAT() { return getToken(AlfParser.FLOAT, 0); }
		public TypeFloatContext(TypeContext ctx) { copyFrom(ctx); }
	}
	public static class TypeStringContext extends TypeContext {
		public TerminalNode STRING() { return getToken(AlfParser.STRING, 0); }
		public TypeStringContext(TypeContext ctx) { copyFrom(ctx); }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_type);
		try {
			setState(66);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INT:
				_localctx = new TypeIntContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(63);
				match(INT);
				}
				break;
			case FLOAT:
				_localctx = new TypeFloatContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(64);
				match(FLOAT);
				}
				break;
			case STRING:
				_localctx = new TypeStringContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(65);
				match(STRING);
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
		public TerminalNode VARIABLE() { return getToken(AlfParser.VARIABLE, 0); }
		public ValueVariableContext(ValueContext ctx) { copyFrom(ctx); }
	}
	public static class ValueStringContext extends ValueContext {
		public TerminalNode STRING_TEXT() { return getToken(AlfParser.STRING_TEXT, 0); }
		public ValueStringContext(ValueContext ctx) { copyFrom(ctx); }
	}
	public static class ValueIntContext extends ValueContext {
		public TerminalNode INT_NUMBER() { return getToken(AlfParser.INT_NUMBER, 0); }
		public ValueIntContext(ValueContext ctx) { copyFrom(ctx); }
	}
	public static class ValueFloatContext extends ValueContext {
		public TerminalNode FLOAT_NUMBER() { return getToken(AlfParser.FLOAT_NUMBER, 0); }
		public ValueFloatContext(ValueContext ctx) { copyFrom(ctx); }
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_value);
		try {
			setState(72);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INT_NUMBER:
				_localctx = new ValueIntContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(68);
				match(INT_NUMBER);
				}
				break;
			case FLOAT_NUMBER:
				_localctx = new ValueFloatContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(69);
				match(FLOAT_NUMBER);
				}
				break;
			case STRING_TEXT:
				_localctx = new ValueStringContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(70);
				match(STRING_TEXT);
				}
				break;
			case VARIABLE:
				_localctx = new ValueVariableContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(71);
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
		public TerminalNode MUL() { return getToken(AlfParser.MUL, 0); }
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
		public TerminalNode DIV() { return getToken(AlfParser.DIV, 0); }
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
		public TerminalNode SUB() { return getToken(AlfParser.SUB, 0); }
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
		public TerminalNode REM() { return getToken(AlfParser.REM, 0); }
		public ExpressionRemContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpressionParanthesisContext extends ExpressionContext {
		public TerminalNode LP() { return getToken(AlfParser.LP, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RP() { return getToken(AlfParser.RP, 0); }
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
		public TerminalNode ADD() { return getToken(AlfParser.ADD, 0); }
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
			setState(80);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LP:
				{
				_localctx = new ExpressionParanthesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(75);
				match(LP);
				setState(76);
				expression(0);
				setState(77);
				match(RP);
				}
				break;
			case VARIABLE:
			case INT_NUMBER:
			case FLOAT_NUMBER:
			case STRING_TEXT:
				{
				_localctx = new ExpressionValueContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(79);
				value();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(99);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(97);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionMultiplyContext(new ExpressionContext(_parentctx, _parentState));
						((ExpressionMultiplyContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(82);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(83);
						((ExpressionMultiplyContext)_localctx).op = match(MUL);
						setState(84);
						((ExpressionMultiplyContext)_localctx).right = expression(8);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionDivisionContext(new ExpressionContext(_parentctx, _parentState));
						((ExpressionDivisionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(85);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(86);
						((ExpressionDivisionContext)_localctx).op = match(DIV);
						setState(87);
						((ExpressionDivisionContext)_localctx).right = expression(7);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionRemContext(new ExpressionContext(_parentctx, _parentState));
						((ExpressionRemContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(88);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(89);
						((ExpressionRemContext)_localctx).op = match(REM);
						setState(90);
						((ExpressionRemContext)_localctx).right = expression(6);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionAdditionContext(new ExpressionContext(_parentctx, _parentState));
						((ExpressionAdditionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(91);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(92);
						((ExpressionAdditionContext)_localctx).op = match(ADD);
						setState(93);
						((ExpressionAdditionContext)_localctx).right = expression(5);
						}
						break;
					case 5:
						{
						_localctx = new ExpressionSubtractionContext(new ExpressionContext(_parentctx, _parentState));
						((ExpressionSubtractionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(94);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(95);
						((ExpressionSubtractionContext)_localctx).op = match(SUB);
						setState(96);
						((ExpressionSubtractionContext)_localctx).right = expression(4);
						}
						break;
					}
					} 
				}
				setState(101);
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
		public TerminalNode VARIABLE() { return getToken(AlfParser.VARIABLE, 0); }
		public TerminalNode EQ() { return getToken(AlfParser.EQ, 0); }
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
			setState(102);
			match(VARIABLE);
			setState(103);
			match(EQ);
			setState(104);
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
		public TerminalNode LIST() { return getToken(AlfParser.LIST, 0); }
		public TerminalNode VARIABLE() { return getToken(AlfParser.VARIABLE, 0); }
		public TerminalNode EQ() { return getToken(AlfParser.EQ, 0); }
		public TerminalNode LSP() { return getToken(AlfParser.LSP, 0); }
		public ValuesContext values() {
			return getRuleContext(ValuesContext.class,0);
		}
		public TerminalNode RSP() { return getToken(AlfParser.RSP, 0); }
		public ListDeclarationContext(List_declarationContext ctx) { copyFrom(ctx); }
	}

	public final List_declarationContext list_declaration() throws RecognitionException {
		List_declarationContext _localctx = new List_declarationContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_list_declaration);
		try {
			_localctx = new ListDeclarationContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(106);
			match(LIST);
			setState(107);
			match(VARIABLE);
			setState(108);
			match(EQ);
			setState(109);
			match(LSP);
			setState(110);
			values();
			setState(111);
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
		public List<TerminalNode> COMMA() { return getTokens(AlfParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(AlfParser.COMMA, i);
		}
		public ListValuesContext(ValuesContext ctx) { copyFrom(ctx); }
	}

	public final ValuesContext values() throws RecognitionException {
		ValuesContext _localctx = new ValuesContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_values);
		int _la;
		try {
			_localctx = new ListValuesContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(118);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << VARIABLE) | (1L << INT_NUMBER) | (1L << FLOAT_NUMBER) | (1L << STRING_TEXT))) != 0)) {
				{
				{
				setState(113);
				value();
				setState(114);
				match(COMMA);
				}
				}
				setState(120);
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
		public TerminalNode FUNCTION() { return getToken(AlfParser.FUNCTION, 0); }
		public TerminalNode VARIABLE() { return getToken(AlfParser.VARIABLE, 0); }
		public TerminalNode LP() { return getToken(AlfParser.LP, 0); }
		public TerminalNode RP() { return getToken(AlfParser.RP, 0); }
		public TerminalNode LB() { return getToken(AlfParser.LB, 0); }
		public Return_functionContext return_function() {
			return getRuleContext(Return_functionContext.class,0);
		}
		public TerminalNode RB() { return getToken(AlfParser.RB, 0); }
		public List<ParameterContext> parameter() {
			return getRuleContexts(ParameterContext.class);
		}
		public ParameterContext parameter(int i) {
			return getRuleContext(ParameterContext.class,i);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<TerminalNode> SEMICOLON() { return getTokens(AlfParser.SEMICOLON); }
		public TerminalNode SEMICOLON(int i) {
			return getToken(AlfParser.SEMICOLON, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(AlfParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(AlfParser.COMMA, i);
		}
		public FunctionContentContext(Function_declarationContext ctx) { copyFrom(ctx); }
	}

	public final Function_declarationContext function_declaration() throws RecognitionException {
		Function_declarationContext _localctx = new Function_declarationContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_function_declaration);
		int _la;
		try {
			_localctx = new FunctionContentContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(121);
			match(FUNCTION);
			setState(122);
			match(VARIABLE);
			setState(123);
			match(LP);
			setState(133);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << INT) | (1L << FLOAT) | (1L << STRING))) != 0)) {
				{
				{
				setState(124);
				parameter();
				setState(128);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(125);
					match(COMMA);
					}
					}
					setState(130);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				}
				setState(135);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(136);
			match(RP);
			setState(137);
			match(LB);
			setState(143);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FUNCTION) | (1L << VARIABLE) | (1L << INT) | (1L << FLOAT) | (1L << STRING) | (1L << LIST) | (1L << LP) | (1L << INT_NUMBER) | (1L << FLOAT_NUMBER) | (1L << STRING_TEXT))) != 0)) {
				{
				{
				setState(138);
				statement();
				setState(139);
				match(SEMICOLON);
				}
				}
				setState(145);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(146);
			return_function();
			setState(147);
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
		enterRule(_localctx, 20, RULE_parameter);
		try {
			_localctx = new FunctionParameterContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(149);
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
		public TerminalNode RETURN() { return getToken(AlfParser.RETURN, 0); }
		public TerminalNode SEMICOLON() { return getToken(AlfParser.SEMICOLON, 0); }
		public EmptyReturnContext(Return_functionContext ctx) { copyFrom(ctx); }
	}
	public static class ReturnStatementContext extends Return_functionContext {
		public TerminalNode RETURN() { return getToken(AlfParser.RETURN, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(AlfParser.SEMICOLON, 0); }
		public ReturnStatementContext(Return_functionContext ctx) { copyFrom(ctx); }
	}

	public final Return_functionContext return_function() throws RecognitionException {
		Return_functionContext _localctx = new Return_functionContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_return_function);
		try {
			setState(157);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				_localctx = new ReturnStatementContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(151);
				match(RETURN);
				setState(152);
				statement();
				setState(153);
				match(SEMICOLON);
				}
				break;
			case 2:
				_localctx = new EmptyReturnContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(155);
				match(RETURN);
				setState(156);
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
		public TerminalNode VARIABLE() { return getToken(AlfParser.VARIABLE, 0); }
		public TerminalNode LP() { return getToken(AlfParser.LP, 0); }
		public TerminalNode RP() { return getToken(AlfParser.RP, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(AlfParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(AlfParser.COMMA, i);
		}
		public FunctionCallContext(Function_callContext ctx) { copyFrom(ctx); }
	}

	public final Function_callContext function_call() throws RecognitionException {
		Function_callContext _localctx = new Function_callContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_function_call);
		int _la;
		try {
			_localctx = new FunctionCallContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(159);
			match(VARIABLE);
			setState(160);
			match(LP);
			setState(170);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << VARIABLE) | (1L << INT_NUMBER) | (1L << FLOAT_NUMBER) | (1L << STRING_TEXT))) != 0)) {
				{
				{
				setState(161);
				value();
				setState(165);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(162);
					match(COMMA);
					}
					}
					setState(167);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				}
				setState(172);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(173);
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
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 7);
		case 1:
			return precpred(_ctx, 6);
		case 2:
			return precpred(_ctx, 5);
		case 3:
			return precpred(_ctx, 4);
		case 4:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\34\u00b2\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\3\2\3\2\3\2\7\2 \n\2\f\2\16\2#\13\2\7"+
		"\2%\n\2\f\2\16\2(\13\2\3\2\3\2\3\2\5\2-\n\2\3\3\3\3\3\3\3\3\3\3\5\3\64"+
		"\n\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4@\n\4\3\5\3\5\3\5\5\5"+
		"E\n\5\3\6\3\6\3\6\3\6\5\6K\n\6\3\7\3\7\3\7\3\7\3\7\3\7\5\7S\n\7\3\7\3"+
		"\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\7\7d\n\7\f\7\16"+
		"\7g\13\7\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\7\nw"+
		"\n\n\f\n\16\nz\13\n\3\13\3\13\3\13\3\13\3\13\7\13\u0081\n\13\f\13\16\13"+
		"\u0084\13\13\7\13\u0086\n\13\f\13\16\13\u0089\13\13\3\13\3\13\3\13\3\13"+
		"\3\13\7\13\u0090\n\13\f\13\16\13\u0093\13\13\3\13\3\13\3\13\3\f\3\f\3"+
		"\r\3\r\3\r\3\r\3\r\3\r\5\r\u00a0\n\r\3\16\3\16\3\16\3\16\7\16\u00a6\n"+
		"\16\f\16\16\16\u00a9\13\16\7\16\u00ab\n\16\f\16\16\16\u00ae\13\16\3\16"+
		"\3\16\3\16\2\3\f\17\2\4\6\b\n\f\16\20\22\24\26\30\32\2\2\2\u00be\2,\3"+
		"\2\2\2\4\63\3\2\2\2\6?\3\2\2\2\bD\3\2\2\2\nJ\3\2\2\2\fR\3\2\2\2\16h\3"+
		"\2\2\2\20l\3\2\2\2\22x\3\2\2\2\24{\3\2\2\2\26\u0097\3\2\2\2\30\u009f\3"+
		"\2\2\2\32\u00a1\3\2\2\2\34\35\5\4\3\2\35!\7\23\2\2\36 \7\4\2\2\37\36\3"+
		"\2\2\2 #\3\2\2\2!\37\3\2\2\2!\"\3\2\2\2\"%\3\2\2\2#!\3\2\2\2$\34\3\2\2"+
		"\2%(\3\2\2\2&$\3\2\2\2&\'\3\2\2\2\'-\3\2\2\2(&\3\2\2\2)*\5\4\3\2*+\7\23"+
		"\2\2+-\3\2\2\2,&\3\2\2\2,)\3\2\2\2-\3\3\2\2\2.\64\5\6\4\2/\64\5\f\7\2"+
		"\60\64\5\20\t\2\61\64\5\24\13\2\62\64\5\16\b\2\63.\3\2\2\2\63/\3\2\2\2"+
		"\63\60\3\2\2\2\63\61\3\2\2\2\63\62\3\2\2\2\64\5\3\2\2\2\65\66\5\b\5\2"+
		"\66\67\7\6\2\2\678\7\22\2\289\5\f\7\29@\3\2\2\2:;\5\b\5\2;<\7\6\2\2<="+
		"\7\22\2\2=>\5\32\16\2>@\3\2\2\2?\65\3\2\2\2?:\3\2\2\2@\7\3\2\2\2AE\7\f"+
		"\2\2BE\7\r\2\2CE\7\16\2\2DA\3\2\2\2DB\3\2\2\2DC\3\2\2\2E\t\3\2\2\2FK\7"+
		"\32\2\2GK\7\33\2\2HK\7\34\2\2IK\7\6\2\2JF\3\2\2\2JG\3\2\2\2JH\3\2\2\2"+
		"JI\3\2\2\2K\13\3\2\2\2LM\b\7\1\2MN\7\20\2\2NO\5\f\7\2OP\7\21\2\2PS\3\2"+
		"\2\2QS\5\n\6\2RL\3\2\2\2RQ\3\2\2\2Se\3\2\2\2TU\f\t\2\2UV\7\t\2\2Vd\5\f"+
		"\7\nWX\f\b\2\2XY\7\n\2\2Yd\5\f\7\tZ[\f\7\2\2[\\\7\13\2\2\\d\5\f\7\b]^"+
		"\f\6\2\2^_\7\7\2\2_d\5\f\7\7`a\f\5\2\2ab\7\b\2\2bd\5\f\7\6cT\3\2\2\2c"+
		"W\3\2\2\2cZ\3\2\2\2c]\3\2\2\2c`\3\2\2\2dg\3\2\2\2ec\3\2\2\2ef\3\2\2\2"+
		"f\r\3\2\2\2ge\3\2\2\2hi\7\6\2\2ij\7\22\2\2jk\5\f\7\2k\17\3\2\2\2lm\7\17"+
		"\2\2mn\7\6\2\2no\7\22\2\2op\7\24\2\2pq\5\22\n\2qr\7\25\2\2r\21\3\2\2\2"+
		"st\5\n\6\2tu\7\26\2\2uw\3\2\2\2vs\3\2\2\2wz\3\2\2\2xv\3\2\2\2xy\3\2\2"+
		"\2y\23\3\2\2\2zx\3\2\2\2{|\7\5\2\2|}\7\6\2\2}\u0087\7\20\2\2~\u0082\5"+
		"\26\f\2\177\u0081\7\26\2\2\u0080\177\3\2\2\2\u0081\u0084\3\2\2\2\u0082"+
		"\u0080\3\2\2\2\u0082\u0083\3\2\2\2\u0083\u0086\3\2\2\2\u0084\u0082\3\2"+
		"\2\2\u0085~\3\2\2\2\u0086\u0089\3\2\2\2\u0087\u0085\3\2\2\2\u0087\u0088"+
		"\3\2\2\2\u0088\u008a\3\2\2\2\u0089\u0087\3\2\2\2\u008a\u008b\7\21\2\2"+
		"\u008b\u0091\7\27\2\2\u008c\u008d\5\4\3\2\u008d\u008e\7\23\2\2\u008e\u0090"+
		"\3\2\2\2\u008f\u008c\3\2\2\2\u0090\u0093\3\2\2\2\u0091\u008f\3\2\2\2\u0091"+
		"\u0092\3\2\2\2\u0092\u0094\3\2\2\2\u0093\u0091\3\2\2\2\u0094\u0095\5\30"+
		"\r\2\u0095\u0096\7\30\2\2\u0096\25\3\2\2\2\u0097\u0098\5\6\4\2\u0098\27"+
		"\3\2\2\2\u0099\u009a\7\31\2\2\u009a\u009b\5\4\3\2\u009b\u009c\7\23\2\2"+
		"\u009c\u00a0\3\2\2\2\u009d\u009e\7\31\2\2\u009e\u00a0\7\23\2\2\u009f\u0099"+
		"\3\2\2\2\u009f\u009d\3\2\2\2\u00a0\31\3\2\2\2\u00a1\u00a2\7\6\2\2\u00a2"+
		"\u00ac\7\20\2\2\u00a3\u00a7\5\n\6\2\u00a4\u00a6\7\26\2\2\u00a5\u00a4\3"+
		"\2\2\2\u00a6\u00a9\3\2\2\2\u00a7\u00a5\3\2\2\2\u00a7\u00a8\3\2\2\2\u00a8"+
		"\u00ab\3\2\2\2\u00a9\u00a7\3\2\2\2\u00aa\u00a3\3\2\2\2\u00ab\u00ae\3\2"+
		"\2\2\u00ac\u00aa\3\2\2\2\u00ac\u00ad\3\2\2\2\u00ad\u00af\3\2\2\2\u00ae"+
		"\u00ac\3\2\2\2\u00af\u00b0\7\21\2\2\u00b0\33\3\2\2\2\23!&,\63?DJRcex\u0082"+
		"\u0087\u0091\u009f\u00a7\u00ac";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}