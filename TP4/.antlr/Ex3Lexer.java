// Generated from /Users/diana_ghindaoanu/Documents/ALF_2022/ALF_TP_2021/TP4/Ex3.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class Ex3Lexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		NEWLINE=1, WS=2, SEMICOLON=3, EQUAL=4, TYPE_INT=5, TYPE_FLOAT=6, TYPE_STRING=7, 
		MUL=8, DIV=9, REM=10, ADD=11, SUB=12, VARIABLE=13, INT_VALUE=14, FLOAT_VALUE=15, 
		STRING_VALUE=16;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"NEWLINE", "WS", "SEMICOLON", "EQUAL", "TYPE_INT", "TYPE_FLOAT", "TYPE_STRING", 
			"MUL", "DIV", "REM", "ADD", "SUB", "VARIABLE", "INT_VALUE", "FLOAT_VALUE", 
			"STRING_VALUE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "';'", "'='", "'int'", "'float'", "'string'", "'*'", 
			"'/'", "'%'", "'+'", "'-'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "NEWLINE", "WS", "SEMICOLON", "EQUAL", "TYPE_INT", "TYPE_FLOAT", 
			"TYPE_STRING", "MUL", "DIV", "REM", "ADD", "SUB", "VARIABLE", "INT_VALUE", 
			"FLOAT_VALUE", "STRING_VALUE"
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


	public Ex3Lexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Ex3.g4"; }

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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\22v\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\3\2\6\2%\n"+
		"\2\r\2\16\2&\3\2\3\2\3\3\6\3,\n\3\r\3\16\3-\3\3\3\3\3\4\3\4\3\5\3\5\3"+
		"\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t"+
		"\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3\16\6\16S\n\16\r\16\16\16"+
		"T\3\17\6\17X\n\17\r\17\16\17Y\3\20\6\20]\n\20\r\20\16\20^\3\20\3\20\6"+
		"\20c\n\20\r\20\16\20d\3\21\3\21\6\21i\n\21\r\21\16\21j\3\21\3\21\3\21"+
		"\6\21p\n\21\r\21\16\21q\3\21\5\21u\n\21\2\2\22\3\3\5\4\7\5\t\6\13\7\r"+
		"\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22\3\2\b\4\2\f\f"+
		"\17\17\3\2\"\"\5\2\62;C\\c|\3\2\62;\3\2$$\3\2))\2~\2\3\3\2\2\2\2\5\3\2"+
		"\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21"+
		"\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2"+
		"\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\3$\3\2\2\2\5+\3\2\2\2\7\61\3"+
		"\2\2\2\t\63\3\2\2\2\13\65\3\2\2\2\r9\3\2\2\2\17?\3\2\2\2\21F\3\2\2\2\23"+
		"H\3\2\2\2\25J\3\2\2\2\27L\3\2\2\2\31N\3\2\2\2\33P\3\2\2\2\35W\3\2\2\2"+
		"\37\\\3\2\2\2!t\3\2\2\2#%\t\2\2\2$#\3\2\2\2%&\3\2\2\2&$\3\2\2\2&\'\3\2"+
		"\2\2\'(\3\2\2\2()\b\2\2\2)\4\3\2\2\2*,\t\3\2\2+*\3\2\2\2,-\3\2\2\2-+\3"+
		"\2\2\2-.\3\2\2\2./\3\2\2\2/\60\b\3\2\2\60\6\3\2\2\2\61\62\7=\2\2\62\b"+
		"\3\2\2\2\63\64\7?\2\2\64\n\3\2\2\2\65\66\7k\2\2\66\67\7p\2\2\678\7v\2"+
		"\28\f\3\2\2\29:\7h\2\2:;\7n\2\2;<\7q\2\2<=\7c\2\2=>\7v\2\2>\16\3\2\2\2"+
		"?@\7u\2\2@A\7v\2\2AB\7t\2\2BC\7k\2\2CD\7p\2\2DE\7i\2\2E\20\3\2\2\2FG\7"+
		",\2\2G\22\3\2\2\2HI\7\61\2\2I\24\3\2\2\2JK\7\'\2\2K\26\3\2\2\2LM\7-\2"+
		"\2M\30\3\2\2\2NO\7/\2\2O\32\3\2\2\2PR\7a\2\2QS\t\4\2\2RQ\3\2\2\2ST\3\2"+
		"\2\2TR\3\2\2\2TU\3\2\2\2U\34\3\2\2\2VX\t\5\2\2WV\3\2\2\2XY\3\2\2\2YW\3"+
		"\2\2\2YZ\3\2\2\2Z\36\3\2\2\2[]\t\5\2\2\\[\3\2\2\2]^\3\2\2\2^\\\3\2\2\2"+
		"^_\3\2\2\2_`\3\2\2\2`b\7\60\2\2ac\t\5\2\2ba\3\2\2\2cd\3\2\2\2db\3\2\2"+
		"\2de\3\2\2\2e \3\2\2\2fh\7$\2\2gi\n\6\2\2hg\3\2\2\2ij\3\2\2\2jh\3\2\2"+
		"\2jk\3\2\2\2kl\3\2\2\2lu\7$\2\2mo\7)\2\2np\n\7\2\2on\3\2\2\2pq\3\2\2\2"+
		"qo\3\2\2\2qr\3\2\2\2rs\3\2\2\2su\7)\2\2tf\3\2\2\2tm\3\2\2\2u\"\3\2\2\2"+
		"\f\2&-TY^djqt\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}