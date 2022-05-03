// Generated from /Users/diana_ghindaoanu/Documents/ALF_2022/TP/TP7/Alf.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class AlfLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WS=1, NEWLINE=2, FUNCTION=3, VARIABLE=4, ADD=5, SUB=6, MUL=7, DIV=8, REM=9, 
		INT=10, FLOAT=11, STRING=12, LIST=13, LP=14, RP=15, EQ=16, SEMICOLON=17, 
		LSP=18, RSP=19, COMMA=20, LB=21, RB=22, RETURN=23, INT_NUMBER=24, FLOAT_NUMBER=25, 
		STRING_TEXT=26;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"WS", "NEWLINE", "FUNCTION", "VARIABLE", "ADD", "SUB", "MUL", "DIV", 
			"REM", "INT", "FLOAT", "STRING", "LIST", "LP", "RP", "EQ", "SEMICOLON", 
			"LSP", "RSP", "COMMA", "LB", "RB", "RETURN", "INT_NUMBER", "FLOAT_NUMBER", 
			"STRING_TEXT"
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


	public AlfLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Alf.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\34\u00aa\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\3\2\3\2\3\2\3\2\3\3\6\3=\n\3\r\3\16\3>\3\3\3"+
		"\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\6\5N\n\5\r\5\16\5O\3\6"+
		"\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3"+
		"\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\17\3"+
		"\17\3\20\3\20\3\21\3\21\3\22\3\22\3\23\3\23\3\24\3\24\3\25\3\25\3\26\3"+
		"\26\3\27\3\27\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\31\6\31\u008c\n\31"+
		"\r\31\16\31\u008d\3\32\6\32\u0091\n\32\r\32\16\32\u0092\3\32\3\32\6\32"+
		"\u0097\n\32\r\32\16\32\u0098\3\33\3\33\6\33\u009d\n\33\r\33\16\33\u009e"+
		"\3\33\3\33\3\33\6\33\u00a4\n\33\r\33\16\33\u00a5\3\33\5\33\u00a9\n\33"+
		"\2\2\34\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17"+
		"\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\3\2\7"+
		"\4\2\f\f\17\17\5\2\62;C\\c|\3\2\62;\3\2$$\3\2))\2\u00b1\2\3\3\2\2\2\2"+
		"\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2"+
		"\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2"+
		"\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2"+
		"\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2"+
		"\2\63\3\2\2\2\2\65\3\2\2\2\3\67\3\2\2\2\5<\3\2\2\2\7B\3\2\2\2\tK\3\2\2"+
		"\2\13Q\3\2\2\2\rS\3\2\2\2\17U\3\2\2\2\21W\3\2\2\2\23Y\3\2\2\2\25[\3\2"+
		"\2\2\27_\3\2\2\2\31e\3\2\2\2\33l\3\2\2\2\35q\3\2\2\2\37s\3\2\2\2!u\3\2"+
		"\2\2#w\3\2\2\2%y\3\2\2\2\'{\3\2\2\2)}\3\2\2\2+\177\3\2\2\2-\u0081\3\2"+
		"\2\2/\u0083\3\2\2\2\61\u008b\3\2\2\2\63\u0090\3\2\2\2\65\u00a8\3\2\2\2"+
		"\678\7\"\2\289\3\2\2\29:\b\2\2\2:\4\3\2\2\2;=\t\2\2\2<;\3\2\2\2=>\3\2"+
		"\2\2><\3\2\2\2>?\3\2\2\2?@\3\2\2\2@A\b\3\2\2A\6\3\2\2\2BC\7h\2\2CD\7w"+
		"\2\2DE\7p\2\2EF\7e\2\2FG\7v\2\2GH\7k\2\2HI\7q\2\2IJ\7p\2\2J\b\3\2\2\2"+
		"KM\7a\2\2LN\t\3\2\2ML\3\2\2\2NO\3\2\2\2OM\3\2\2\2OP\3\2\2\2P\n\3\2\2\2"+
		"QR\7-\2\2R\f\3\2\2\2ST\7/\2\2T\16\3\2\2\2UV\7,\2\2V\20\3\2\2\2WX\7\61"+
		"\2\2X\22\3\2\2\2YZ\7\'\2\2Z\24\3\2\2\2[\\\7k\2\2\\]\7p\2\2]^\7v\2\2^\26"+
		"\3\2\2\2_`\7h\2\2`a\7n\2\2ab\7q\2\2bc\7c\2\2cd\7v\2\2d\30\3\2\2\2ef\7"+
		"u\2\2fg\7v\2\2gh\7t\2\2hi\7k\2\2ij\7p\2\2jk\7i\2\2k\32\3\2\2\2lm\7n\2"+
		"\2mn\7k\2\2no\7u\2\2op\7v\2\2p\34\3\2\2\2qr\7*\2\2r\36\3\2\2\2st\7+\2"+
		"\2t \3\2\2\2uv\7?\2\2v\"\3\2\2\2wx\7=\2\2x$\3\2\2\2yz\7]\2\2z&\3\2\2\2"+
		"{|\7_\2\2|(\3\2\2\2}~\7.\2\2~*\3\2\2\2\177\u0080\7}\2\2\u0080,\3\2\2\2"+
		"\u0081\u0082\7\177\2\2\u0082.\3\2\2\2\u0083\u0084\7t\2\2\u0084\u0085\7"+
		"g\2\2\u0085\u0086\7v\2\2\u0086\u0087\7w\2\2\u0087\u0088\7t\2\2\u0088\u0089"+
		"\7p\2\2\u0089\60\3\2\2\2\u008a\u008c\t\4\2\2\u008b\u008a\3\2\2\2\u008c"+
		"\u008d\3\2\2\2\u008d\u008b\3\2\2\2\u008d\u008e\3\2\2\2\u008e\62\3\2\2"+
		"\2\u008f\u0091\t\4\2\2\u0090\u008f\3\2\2\2\u0091\u0092\3\2\2\2\u0092\u0090"+
		"\3\2\2\2\u0092\u0093\3\2\2\2\u0093\u0094\3\2\2\2\u0094\u0096\7\60\2\2"+
		"\u0095\u0097\t\4\2\2\u0096\u0095\3\2\2\2\u0097\u0098\3\2\2\2\u0098\u0096"+
		"\3\2\2\2\u0098\u0099\3\2\2\2\u0099\64\3\2\2\2\u009a\u009c\7$\2\2\u009b"+
		"\u009d\n\5\2\2\u009c\u009b\3\2\2\2\u009d\u009e\3\2\2\2\u009e\u009c\3\2"+
		"\2\2\u009e\u009f\3\2\2\2\u009f\u00a0\3\2\2\2\u00a0\u00a9\7$\2\2\u00a1"+
		"\u00a3\7)\2\2\u00a2\u00a4\n\6\2\2\u00a3\u00a2\3\2\2\2\u00a4\u00a5\3\2"+
		"\2\2\u00a5\u00a3\3\2\2\2\u00a5\u00a6\3\2\2\2\u00a6\u00a7\3\2\2\2\u00a7"+
		"\u00a9\7)\2\2\u00a8\u009a\3\2\2\2\u00a8\u00a1\3\2\2\2\u00a9\66\3\2\2\2"+
		"\13\2>O\u008d\u0092\u0098\u009e\u00a5\u00a8\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}