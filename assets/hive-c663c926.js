import{T as E}from"./index-3be565c4.js";const R={comments:{lineComment:"--",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}]},A={defaultToken:"",tokenPostfix:".sql",ignoreCase:!0,brackets:[{open:"[",close:"]",token:E.DELIMITER_SQUARE},{open:"(",close:")",token:E.DELIMITER_PAREN},{open:"{",close:"}",token:E.DELIMITER_CURLY}],keywords:["ALL","ALTER","AND","ANTI","ANY","APPLICATION","ARRAY","AS","AUTHORIZATION","BETWEEN","BIGINT","BINARY","BOOLEAN","BOTH","BY","CASE","CAST","CHAR","COLUMN","COMMIT","COMPACTIONID","CONF","CONSTRAINT","CREATE","CROSS","CUBE","CURRENT","CURRENT_DATE","CURRENT_TIMESTAMP","CURSOR","DATABASE","CONNECTOR","CONNECTORS","DATE","DDL","DEC","DECIMAL","NUMERIC","DELETE","DESCRIBE","DISTINCT","DOUBLE","DROP","RECOVER","ELSE","END","EXCEPT","EXCHANGE","EXISTS","EXTENDED","EXTERNAL","EXTRACT","FALSE","FETCH","FLOAT","FLOOR","FOLLOWING","FOR","FORCE","FOREIGN","FROM","FULL","FUNCTION","GRANT","GROUP","GROUPING","HAVING","IF","IMPORT","IN","INNER","INSERT","INT","INTEGER","INTERSECT","INTERVAL","INTO","IS","JOIN","$KEY$","LATERAL","LEADING","LEFT","LESS","LIKE","LOCAL","MACRO","MAP","MERGE","MINUS","MORE","NONE","NOT","NULL","OF","ON","ONLY","OR","ORDER","OUT","OUTER","OVER","PARTITION","PERCENT","PKFK_JOIN","PRECEDING","PRECISION","PREPARE","PRESERVE","PRIMARY","PROCEDURE","QUALIFY","RANGE","READS","REAL","REDUCE","REFERENCES","REGEXP","REVOKE","RIGHT","RLIKE","ROLLBACK","ROLLUP","ROW","ROWS","SELECT","SET","SMALLINT","SOME","START","SYNC","TABLE","TABLESAMPLE","THEN","TIME","TIMESTAMP","TIMESTAMPLOCALTZ","TO","TRAILING","TRANSFORM","TRIGGER","TRUE","TRUNCATE","UNBOUNDED","UNION","UNIQUE","UNIQUEJOIN","UPDATE","USER","USING","UTC_TMESTAMP","VALUES","VARCHAR","WHEN","WHERE","WINDOW","WITH","ADD","ANALYZE","ASC","AT","CASCADE","CHANGE","COMMENT","COMPUTE","DEFAULT","DESC","DISABLE","EVERY","EXECUTE","EXPLAIN","FILE","FILEFORMAT","FORMAT","FORMATTED","INDEX","KEY","KEYS","LIMIT","LOAD","LOCATION","OFFSET","OVERWRITE","PARTITIONED","PURGE","RELOAD","RENAME","REPLACE","REWRITE","ROLE","SCHEMA","SHOW","SORT","SORTED","STRING","TOUCH","USE","UNLOCK","VIEW"],operators:["BETWEEN","IS","LIKE","RLIKE","REGEXP","DIV","NOT","AND","OR","NOT","IN","EXISTS","JOIN","INNER","OUTER","LEFT","RIGHT","FULL","CROSS","SEMI","EXCEPT","INTERSECT","UNION","MINUS"],builtinFunctions:["ROUND","BROUND","FLOOR","CEIL","RAND","EXP","LN","LOG10","LOG2","LOG","POW","POWER","SQRT","BIN","HEX","UNHEX","CONV","ABS","PMOD","SIN","ASIN","COS","ACOS","TAN","ATAN","DEGREES","RADIANS","POSITIVE","NEGATIVE","SIGN","E","PI","FACTORIAL","CBRT","SHIFTLEFT","SHIFTRIGHT","GREATEST","LEAST","WIDTH_BUCKET","SIZE","MAP_KEYS","MAP_VALUES","ARRAY_CONTAINS","SORT_ARRAY","BINARY","CAST","FROM_UNIXTIME","UNIX_TIMESTAMP","TO_DATE","YEAR","QUARTER","MONTH","DAY","HOUR","MINUTE","SECOND","WEEKOFYEAR","EXTRACT","DATEDIFF","DATE_ADD","DATE_SUB","FROM_UTC_TIMESTAMP","TO_UTC_TIMESTAMP","CURRENT_DATE","CURRENT_TIMESTAMP","ADD_MONTHS","LAST_DAY","NEXT_DAY","TRUNC","MONTHS_BETWEEN","DATE_FORMAT","ASSERT_TRUE","COALESCE","ISNOTNULL","ISNULL","NULLIF","NVL","ASCII","BASE64","CHARACTER_LENGTH","CHR","CONCAT","CONTEXT_NGRAMS","CONCAT_WS","DECODE","ELT","ENCODE","FIELD","FIND_IN_SET","FORMAT_NUMBER","GET_JSON_OBJECT","IN_FILE","INSTR","LENGTH","LOCATE","LOWER","LPAD","LTRIM","NGRAMS","OCTET_LENGTH","PARSE_URL","PRINTF","QUOTE","REGEXP_EXTRACT","REGEXP_REPLACE","REPEAT","REPLACE","REVERSE","RPAD","RTRIM","SENTENCES","SPACE","SPLIT","STR_TO_MAP","SUBSTR","SUBSTRING","SUBSTRING_INDEX","TRANSLATE","TRIM","UNBASE64","UPPER","INITCAP","LEVENSHTEIN","SOUNDEX","MASK","MASK_FIRST_N","MASK_LAST_N","MASK_SHOW_FIRST_N","MASK_SHOW_LAST_N","MASK_HASH","JAVA_METHOD","REFLECT","HASH","CURRENT_USER","LOGGED_IN_USER","CURRENT_DATABASE","MD5","SHA1","SHA","CRC32","SHA2","AES_ENCRYPT","VERSION","SURROGATE_KEY","COUNT","SUM","AVG","MIN","MAX","VARIANCE","VAR_POP","VAR_SAMP","STDDEV_POP","STDDEV_SAMP","COVAR_POP","COVAR_SAMP","CORR","PERCENTILE","PERCENTILE_APPROX","REGR_AVGX","REGR_AVGY","REGR_COUNT","REGR_INTERCEPT","REGR_R2","REGR_SLOPE","REGR_SXX","REGR_SXY","REGR_SYY","HISTOGRAM_NUMERIC","COLLECT_SET","COLLECT_LIST","NTILE","EXPLODE","POSEXPLODE","INLINE","STACK","JSON_TUPLE","PARSE_URL_TUPLE"],builtinVariables:[],typeKeywords:["TINYINT","SMALLINT","INT","INTEGER","BIGINT","FLOAT","DOUBLE","DECIMAL","NUMERIC","TIMESTAMP","DATE","INTERVAL","STRING","VARCHAR","CHAR","BOOLEAN","BINARY","ARRAY","MAP","STRUCT","UNIONTYPE"],scopeKeywords:["CASE","END","WHEN","THEN","ELSE"],pseudoColumns:[],tokenizer:{root:[{include:"@comments"},{include:"@whitespace"},{include:"@pseudoColumns"},{include:"@customParams"},{include:"@numbers"},{include:"@strings"},{include:"@complexIdentifiers"},{include:"@scopes"},{include:"@complexDataTypes"},[/[;,.]/,E.DELIMITER],[/[\(\)\[\]\{\}]/,"@brackets"],[/[\w@#$]+/,{cases:{"@scopeKeywords":E.KEYWORD_SCOPE,"@operators":E.OPERATOR_KEYWORD,"@typeKeywords":E.TYPE,"@builtinVariables":E.VARIABLE,"@builtinFunctions":E.PREDEFINED,"@keywords":E.KEYWORD,"@default":E.IDENTIFIER}}],[/[<>=!%&+\-*/|~^]/,E.OPERATOR_SYMBOL]],whitespace:[[/[\s\t\r\n]+/,E.WHITE]],comments:[[/--+.*/,E.COMMENT],[/\/\*/,{token:E.COMMENT_QUOTE,next:"@comment"}]],comment:[[/[^*/]+/,E.COMMENT],[/\*\//,{token:E.COMMENT_QUOTE,next:"@pop"}],[/./,E.COMMENT]],pseudoColumns:[[/[$][A-Za-z_][\w@#$]*/,{cases:{"@pseudoColumns":E.PREDEFINED,"@default":E.IDENTIFIER}}]],customParams:[[/\${[A-Za-z0-9._-]*}/,E.VARIABLE],[/\@\@{[A-Za-z0-9._-]*}/,E.VARIABLE]],numbers:[[/0[xX][0-9a-fA-F]*/,E.NUMBER_HEX],[/[$][+-]*\d*(\.\d*)?/,E.NUMBER],[/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/,E.NUMBER]],strings:[[/'/,{token:E.STRING,next:"@string_single"}],[/"/,{token:E.STRING,next:"@string_double"}]],string_single:[[/[^']+/,E.STRING_ESCAPE],[/''/,E.STRING],[/'/,{token:E.STRING,next:"@pop"}]],string_double:[[/[^"]+/,E.STRING_ESCAPE],[/""/,E.STRING],[/"/,{token:E.STRING,next:"@pop"}]],complexIdentifiers:[[/`/,{token:E.IDENTIFIER_QUOTE,next:"@quotedIdentifier"}]],quotedIdentifier:[[/[^`]+/,E.IDENTIFIER_QUOTE],[/``/,E.IDENTIFIER_QUOTE],[/`/,{token:E.IDENTIFIER_QUOTE,next:"@pop"}]],scopes:[],complexDataTypes:[[/DOUBLE\s+PRECISION\b/i,{token:E.TYPE}]]}};export{R as conf,A as language};
