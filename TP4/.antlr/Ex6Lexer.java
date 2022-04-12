// Generated from /Users/diana_ghindaoanu/Documents/ALF_2022/ALF_TP_2021/TP4/Ex6.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class Ex6Lexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		NEWLINE=1, WS=2, SEMICOLON=3, EQUAL=4, TYPE_INT=5, TYPE_FLOAT=6, TYPE_STRING=7, 
		MUL=8, DIV=9, REM=10, ADD=11, SUB=12, LP=13, RP=14, VARIABLE=15, INT_VALUE=16, 
		FLOAT_VALUE=17, STRING_VALUE=18;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"NEWLINE", "WS", "SEMICOLON", "EQUAL", "TYPE_INT", "TYPE_FLOAT", "TYPE_STRING", 
			"MUL", "DIV", "REM", "ADD", "SUB", "LP", "RP", "VARIABLE", "INT_VALUE", 
			"FLOAT_VALUE", "STRING_VALUE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "';'", "'='", "'int'", "'float'", "'string'", "'*'", 
			"'/'", "'%'", "'+'", "'-'", "'('", "')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "NEWLINE", "WS", "SEMICOLON", "EQUAL", "TYPE_INT", "TYPE_FLOAT", 
			"TYPE_STRING", "MUL", "DIV", "REM", "ADD", "SUB", "LP", "RP", "VARIABLE", 
			"INT_VALUE", "FLOAT_VALUE", "STRING_VALUE"
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


	public Ex6Lexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Ex6.g4"; }

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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\24~\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\3\2\6\2)\n\2\r\2\16\2*\3\2\3\2\3\3\6\3\60\n\3\r\3\16\3\61\3"+
		"\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3"+
		"\16\3\17\3\17\3\20\3\20\6\20[\n\20\r\20\16\20\\\3\21\6\21`\n\21\r\21\16"+
		"\21a\3\22\6\22e\n\22\r\22\16\22f\3\22\3\22\6\22k\n\22\r\22\16\22l\3\23"+
		"\3\23\6\23q\n\23\r\23\16\23r\3\23\3\23\3\23\6\23x\n\23\r\23\16\23y\3\23"+
		"\5\23}\n\23\2\2\24\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r"+
		"\31\16\33\17\35\20\37\21!\22#\23%\24\3\2\b\4\2\f\f\17\17\3\2\"\"\5\2\62"+
		";C\\c|\3\2\62;\3\2$$\3\2))\2\u0086\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2"+
		"\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3"+
		"\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2"+
		"\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\3(\3\2\2\2\5/\3\2\2\2"+
		"\7\65\3\2\2\2\t\67\3\2\2\2\139\3\2\2\2\r=\3\2\2\2\17C\3\2\2\2\21J\3\2"+
		"\2\2\23L\3\2\2\2\25N\3\2\2\2\27P\3\2\2\2\31R\3\2\2\2\33T\3\2\2\2\35V\3"+
		"\2\2\2\37X\3\2\2\2!_\3\2\2\2#d\3\2\2\2%|\3\2\2\2\')\t\2\2\2(\'\3\2\2\2"+
		")*\3\2\2\2*(\3\2\2\2*+\3\2\2\2+,\3\2\2\2,-\b\2\2\2-\4\3\2\2\2.\60\t\3"+
		"\2\2/.\3\2\2\2\60\61\3\2\2\2\61/\3\2\2\2\61\62\3\2\2\2\62\63\3\2\2\2\63"+
		"\64\b\3\2\2\64\6\3\2\2\2\65\66\7=\2\2\66\b\3\2\2\2\678\7?\2\28\n\3\2\2"+
		"\29:\7k\2\2:;\7p\2\2;<\7v\2\2<\f\3\2\2\2=>\7h\2\2>?\7n\2\2?@\7q\2\2@A"+
		"\7c\2\2AB\7v\2\2B\16\3\2\2\2CD\7u\2\2DE\7v\2\2EF\7t\2\2FG\7k\2\2GH\7p"+
		"\2\2HI\7i\2\2I\20\3\2\2\2JK\7,\2\2K\22\3\2\2\2LM\7\61\2\2M\24\3\2\2\2"+
		"NO\7\'\2\2O\26\3\2\2\2PQ\7-\2\2Q\30\3\2\2\2RS\7/\2\2S\32\3\2\2\2TU\7*"+
		"\2\2U\34\3\2\2\2VW\7+\2\2W\36\3\2\2\2XZ\7a\2\2Y[\t\4\2\2ZY\3\2\2\2[\\"+
		"\3\2\2\2\\Z\3\2\2\2\\]\3\2\2\2] \3\2\2\2^`\t\5\2\2_^\3\2\2\2`a\3\2\2\2"+
		"a_\3\2\2\2ab\3\2\2\2b\"\3\2\2\2ce\t\5\2\2dc\3\2\2\2ef\3\2\2\2fd\3\2\2"+
		"\2fg\3\2\2\2gh\3\2\2\2hj\7\60\2\2ik\t\5\2\2ji\3\2\2\2kl\3\2\2\2lj\3\2"+
		"\2\2lm\3\2\2\2m$\3\2\2\2np\7$\2\2oq\n\6\2\2po\3\2\2\2qr\3\2\2\2rp\3\2"+
		"\2\2rs\3\2\2\2st\3\2\2\2t}\7$\2\2uw\7)\2\2vx\n\7\2\2wv\3\2\2\2xy\3\2\2"+
		"\2yw\3\2\2\2yz\3\2\2\2z{\3\2\2\2{}\7)\2\2|n\3\2\2\2|u\3\2\2\2}&\3\2\2"+
		"\2\f\2*\61\\aflry|\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}