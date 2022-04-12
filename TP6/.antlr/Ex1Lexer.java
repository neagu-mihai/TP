// Generated from c:\Users\Chrys\Documents\GitHub\TP\TP6\Ex1.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class Ex1Lexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WS=1, NEWLINE=2, VARIABLE=3, ADD=4, SUB=5, MUL=6, DIV=7, REM=8, INT=9, 
		FLOAT=10, STRING=11, BOOLEAN=12, LP=13, RP=14, EQ=15, SEMICOLON=16, INT_NUMBER=17, 
		FLOAT_NUMBER=18, STRING_TEXT=19, TRUE=20, FALSE=21, OR=22, AND=23, NOT=24;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"WS", "NEWLINE", "VARIABLE", "ADD", "SUB", "MUL", "DIV", "REM", "INT", 
			"FLOAT", "STRING", "BOOLEAN", "LP", "RP", "EQ", "SEMICOLON", "INT_NUMBER", 
			"FLOAT_NUMBER", "STRING_TEXT", "TRUE", "FALSE", "OR", "AND", "NOT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'+'", "'-'", "'*'", "'/'", "'%'", "'int'", "'float'", 
			"'string'", "'bool'", "'('", "')'", "'='", "';'", null, null, null, "'true'", 
			"'false'", "'||'", "'&&'", "'!'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WS", "NEWLINE", "VARIABLE", "ADD", "SUB", "MUL", "DIV", "REM", 
			"INT", "FLOAT", "STRING", "BOOLEAN", "LP", "RP", "EQ", "SEMICOLON", "INT_NUMBER", 
			"FLOAT_NUMBER", "STRING_TEXT", "TRUE", "FALSE", "OR", "AND", "NOT"
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


	public Ex1Lexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Ex1.g4"; }

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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\32\u009f\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\3\2\3\2\3\2\3\2\3\3\6\39\n\3\r\3\16\3:\3\3\3\3\3\4\3\4\6\4A\n\4"+
		"\r\4\16\4B\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\n\3\n\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r"+
		"\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\21\3\21\3\22\6\22n\n\22\r\22\16\22"+
		"o\3\23\6\23s\n\23\r\23\16\23t\3\23\3\23\6\23y\n\23\r\23\16\23z\3\24\3"+
		"\24\6\24\177\n\24\r\24\16\24\u0080\3\24\3\24\3\24\6\24\u0086\n\24\r\24"+
		"\16\24\u0087\3\24\5\24\u008b\n\24\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3"+
		"\26\3\26\3\26\3\26\3\27\3\27\3\27\3\30\3\30\3\30\3\31\3\31\2\2\32\3\3"+
		"\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21"+
		"!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\3\2\7\4\2\f\f\17\17\5\2\62;C\\"+
		"c|\3\2\62;\3\2$$\3\2))\2\u00a6\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t"+
		"\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2"+
		"\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2"+
		"\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2"+
		"+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\3\63\3\2\2\2\58\3\2\2\2\7"+
		">\3\2\2\2\tD\3\2\2\2\13F\3\2\2\2\rH\3\2\2\2\17J\3\2\2\2\21L\3\2\2\2\23"+
		"N\3\2\2\2\25R\3\2\2\2\27X\3\2\2\2\31_\3\2\2\2\33d\3\2\2\2\35f\3\2\2\2"+
		"\37h\3\2\2\2!j\3\2\2\2#m\3\2\2\2%r\3\2\2\2\'\u008a\3\2\2\2)\u008c\3\2"+
		"\2\2+\u0091\3\2\2\2-\u0097\3\2\2\2/\u009a\3\2\2\2\61\u009d\3\2\2\2\63"+
		"\64\7\"\2\2\64\65\3\2\2\2\65\66\b\2\2\2\66\4\3\2\2\2\679\t\2\2\28\67\3"+
		"\2\2\29:\3\2\2\2:8\3\2\2\2:;\3\2\2\2;<\3\2\2\2<=\b\3\2\2=\6\3\2\2\2>@"+
		"\7a\2\2?A\t\3\2\2@?\3\2\2\2AB\3\2\2\2B@\3\2\2\2BC\3\2\2\2C\b\3\2\2\2D"+
		"E\7-\2\2E\n\3\2\2\2FG\7/\2\2G\f\3\2\2\2HI\7,\2\2I\16\3\2\2\2JK\7\61\2"+
		"\2K\20\3\2\2\2LM\7\'\2\2M\22\3\2\2\2NO\7k\2\2OP\7p\2\2PQ\7v\2\2Q\24\3"+
		"\2\2\2RS\7h\2\2ST\7n\2\2TU\7q\2\2UV\7c\2\2VW\7v\2\2W\26\3\2\2\2XY\7u\2"+
		"\2YZ\7v\2\2Z[\7t\2\2[\\\7k\2\2\\]\7p\2\2]^\7i\2\2^\30\3\2\2\2_`\7d\2\2"+
		"`a\7q\2\2ab\7q\2\2bc\7n\2\2c\32\3\2\2\2de\7*\2\2e\34\3\2\2\2fg\7+\2\2"+
		"g\36\3\2\2\2hi\7?\2\2i \3\2\2\2jk\7=\2\2k\"\3\2\2\2ln\t\4\2\2ml\3\2\2"+
		"\2no\3\2\2\2om\3\2\2\2op\3\2\2\2p$\3\2\2\2qs\t\4\2\2rq\3\2\2\2st\3\2\2"+
		"\2tr\3\2\2\2tu\3\2\2\2uv\3\2\2\2vx\7\60\2\2wy\t\4\2\2xw\3\2\2\2yz\3\2"+
		"\2\2zx\3\2\2\2z{\3\2\2\2{&\3\2\2\2|~\7$\2\2}\177\n\5\2\2~}\3\2\2\2\177"+
		"\u0080\3\2\2\2\u0080~\3\2\2\2\u0080\u0081\3\2\2\2\u0081\u0082\3\2\2\2"+
		"\u0082\u008b\7$\2\2\u0083\u0085\7)\2\2\u0084\u0086\n\6\2\2\u0085\u0084"+
		"\3\2\2\2\u0086\u0087\3\2\2\2\u0087\u0085\3\2\2\2\u0087\u0088\3\2\2\2\u0088"+
		"\u0089\3\2\2\2\u0089\u008b\7)\2\2\u008a|\3\2\2\2\u008a\u0083\3\2\2\2\u008b"+
		"(\3\2\2\2\u008c\u008d\7v\2\2\u008d\u008e\7t\2\2\u008e\u008f\7w\2\2\u008f"+
		"\u0090\7g\2\2\u0090*\3\2\2\2\u0091\u0092\7h\2\2\u0092\u0093\7c\2\2\u0093"+
		"\u0094\7n\2\2\u0094\u0095\7u\2\2\u0095\u0096\7g\2\2\u0096,\3\2\2\2\u0097"+
		"\u0098\7~\2\2\u0098\u0099\7~\2\2\u0099.\3\2\2\2\u009a\u009b\7(\2\2\u009b"+
		"\u009c\7(\2\2\u009c\60\3\2\2\2\u009d\u009e\7#\2\2\u009e\62\3\2\2\2\13"+
		"\2:Botz\u0080\u0087\u008a\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}