(() => {
  'use strict';

  const STORAGE_KEY = 'logarithmsFormulaCards.stats.v2';
  const THEME_KEY = 'logarithmsWebpage.theme.v2';

  const FORMULAS = [
    {
        "id": "product",
        "group": "rules",
        "category": "Արտադրյալ",
        "leftHtml": "log<sub>a</sub>(xy)",
        "rightHtml": "log<sub>a</sub>x + log<sub>a</sub>y",
        "plain": "log_a(xy) = log_a x + log_a y",
        "leftAliases": [
            "log_a(xy)",
            "loga(xy)",
            "log_a xy",
            "log_a(x*y)",
            "logₐ(xy)"
        ],
        "rightAliases": [
            "log_a x + log_a y",
            "log_ax+log_ay",
            "loga x + loga y",
            "log_a(x)+log_a(y)",
            "logₐx+logₐy"
        ],
        "explanation": "Արտադրյալի լոգարիթմը նույն հիմքով լոգարիթմների գումարն է։",
        "connectionHtml": "Հիմնական կանոն է․ դրանից գալիս է հակառակ ձևը՝ log<sub>a</sub>x + log<sub>a</sub>y = log<sub>a</sub>(xy)։"
    },
    {
        "id": "quotient",
        "group": "rules",
        "category": "Քանորդ",
        "leftHtml": "log<sub>a</sub>(x/y)",
        "rightHtml": "log<sub>a</sub>x − log<sub>a</sub>y",
        "plain": "log_a(x/y) = log_a x − log_a y",
        "leftAliases": [
            "log_a(x/y)",
            "loga(x/y)",
            "log_a x/y",
            "logₐ(x/y)"
        ],
        "rightAliases": [
            "log_a x - log_a y",
            "log_ax-log_ay",
            "loga x - loga y",
            "log_a(x)-log_a(y)",
            "logₐx−logₐy"
        ],
        "explanation": "Քանորդի լոգարիթմը համարիչի լոգարիթմից հանած հայտարարի լոգարիթմն է։",
        "connectionHtml": "Հիմնական կանոն է․ դրանից գալիս է հակառակ ձևը՝ log<sub>a</sub>x − log<sub>a</sub>y = log<sub>a</sub>(x/y)։"
    },
    {
        "id": "power",
        "group": "rules",
        "category": "Աստիճան",
        "leftHtml": "log<sub>a</sub>(x<sup>n</sup>)",
        "rightHtml": "n log<sub>a</sub>x",
        "plain": "log_a(x^n) = n log_a x",
        "leftAliases": [
            "log_a(x^n)",
            "log_a x^n",
            "loga(x^n)",
            "logₐ(xⁿ)"
        ],
        "rightAliases": [
            "n log_a x",
            "nlog_ax",
            "n*log_a x",
            "n·log_a x",
            "nloga x",
            "n logₐx"
        ],
        "explanation": "Լոգարիթմվող արտահայտության աստիճանը դուրս է գալիս որպես գործակից։",
        "connectionHtml": "Հիմնական կանոն է․ դրանից գալիս են գործակիցը աստիճան դարձնելը, արմատները և բացասական գործակիցները։",
        "exampleHtml": "Օրինակ՝ 2lg√3 = lg(√3)<sup>2</sup> = lg3։"
    },
    {
        "id": "root",
        "group": "rules",
        "category": "Քառակուսի արմատ",
        "leftHtml": "log<sub>a</sub>√x",
        "rightHtml": "1/2 log<sub>a</sub>x",
        "plain": "log_a√x = 1/2 log_a x",
        "leftAliases": [
            "log_a sqrt(x)",
            "log_a√x",
            "log_a sqrtx",
            "log_a(x^(1/2))",
            "loga√x"
        ],
        "rightAliases": [
            "1/2 log_a x",
            "(1/2)log_a x",
            "0.5log_a x",
            "0,5log_a x",
            "1/2*log_a x",
            "½log_a x"
        ],
        "explanation": "Քանի որ √x = x^(1/2), աստիճանի կանոնից ստացվում է 1/2 գործակիցը։",
        "connectionHtml": "Գալիս է աստիճանի կանոնից՝ log<sub>a</sub>(x<sup>n</sup>) = nlog<sub>a</sub>x, որտեղ n = 1/2։"
    },
    {
        "id": "nth-root",
        "group": "transform",
        "category": "n-րդ արմատ",
        "leftHtml": "log<sub>a</sub><sup>n</sup>√x",
        "rightHtml": "1/n log<sub>a</sub>x",
        "plain": "log_a(n-th root of x) = 1/n log_a x",
        "leftAliases": [
            "log_a nthroot x",
            "log_a root_n x",
            "log_a(x^(1/n))",
            "log_a n√x",
            "log_a ⁿ√x"
        ],
        "rightAliases": [
            "1/n log_a x",
            "(1/n)log_a x",
            "1/n*log_a x",
            "log_a x/n",
            "1/nloga x"
        ],
        "explanation": "n-րդ արմատը նույնն է, ինչ x^(1/n), դրա համար գործակիցը դառնում է 1/n։",
        "connectionHtml": "Գալիս է աստիճանի կանոնից՝ log<sub>a</sub>(x<sup>n</sup>) = nlog<sub>a</sub>x։",
        "exampleHtml": "Օրինակ՝ log<sub>a</sub>∛x = 1/3 log<sub>a</sub>x։"
    },
    {
        "id": "base-log",
        "group": "basic",
        "category": "Հիմքի լոգարիթմ",
        "leftHtml": "log<sub>a</sub>a",
        "rightHtml": "1",
        "plain": "log_a a = 1",
        "leftAliases": [
            "log_a a",
            "log_aa",
            "loga a",
            "logₐa"
        ],
        "rightAliases": [
            "1",
            "+1"
        ],
        "explanation": "a-ն պետք է բարձրացնել 1 աստիճան, որպեսզի ստացվի a։"
    },
    {
        "id": "one-log",
        "group": "basic",
        "category": "Մեկի լոգարիթմ",
        "leftHtml": "log<sub>a</sub>1",
        "rightHtml": "0",
        "plain": "log_a 1 = 0",
        "leftAliases": [
            "log_a 1",
            "log_a1",
            "loga1",
            "logₐ1"
        ],
        "rightAliases": [
            "0",
            "+0"
        ],
        "explanation": "Ցանկացած թույլատրելի հիմքի համար a^0 = 1։"
    },
    {
        "id": "log-of-power-base",
        "group": "basic",
        "category": "Հակադարձ գործողություն",
        "leftHtml": "log<sub>a</sub>(a<sup>x</sup>)",
        "rightHtml": "x",
        "plain": "log_a(a^x) = x",
        "leftAliases": [
            "log_a(a^x)",
            "log_a a^x",
            "loga(a^x)",
            "logₐ(aˣ)"
        ],
        "rightAliases": [
            "x"
        ],
        "explanation": "Լոգարիթմը և նույն հիմքով աստիճանը իրար հակադարձ գործողություններ են։"
    },
    {
        "id": "power-of-log",
        "group": "basic",
        "category": "Հակադարձ գործողություն",
        "leftHtml": "a<sup>log<sub>a</sub>x</sup>",
        "rightHtml": "x",
        "plain": "a^(log_a x) = x",
        "leftAliases": [
            "a^(log_a x)",
            "a^log_a x",
            "a^{log_a x}",
            "a^(log_ax)",
            "a^log_ax"
        ],
        "rightAliases": [
            "x"
        ],
        "explanation": "Եթե a-ը բարձրացվում է logₐx աստիճան, արդյունքը x է։"
    },
    {
        "id": "a-k-log",
        "group": "transform",
        "category": "Աստիճան + log",
        "leftHtml": "a<sup>k log<sub>a</sub>x</sup>",
        "rightHtml": "x<sup>k</sup>",
        "plain": "a^(k log_a x) = x^k",
        "leftAliases": [
            "a^(k log_a x)",
            "a^(klog_ax)",
            "a^klog_ax",
            "a^{k log_a x}"
        ],
        "rightAliases": [
            "x^k",
            "xk",
            "x^{k}"
        ],
        "explanation": "k գործակիցը նախ կարող է տեղափոխվել որպես x-ի աստիճան, հետո a^(logₐ...) կանոնը վերացնում է log-ը։",
        "connectionHtml": "Գալիս է a<sup>log<sub>a</sub>x</sup> = x և nlog<sub>a</sub>x = log<sub>a</sub>(x<sup>n</sup>) ձևերից։",
        "exampleHtml": "Օրինակ՝ 10<sup>2lg3</sup> = 3<sup>2</sup> = 9։"
    },
    {
        "id": "reciprocal-base",
        "group": "base",
        "category": "Փոխադարձ հիմքեր",
        "leftHtml": "log<sub>a</sub>b",
        "rightHtml": "1 / log<sub>b</sub>a",
        "plain": "log_a b = 1 / log_b a",
        "leftAliases": [
            "log_a b",
            "log_ab",
            "loga b",
            "logₐb"
        ],
        "rightAliases": [
            "1/log_b a",
            "1/log_ba",
            "1/(log_b a)",
            "1/logba",
            "1 / log_b a"
        ],
        "explanation": "Հիմքը և լոգարիթմվող թիվը տեղերով փոխելիս ստացվում է հակադարձ արժեքը։",
        "connectionHtml": "Գալիս է հիմքի փոխման կանոնից՝ log<sub>a</sub>b = log<sub>b</sub>b / log<sub>b</sub>a = 1/log<sub>b</sub>a։"
    },
    {
        "id": "base-change",
        "group": "base",
        "category": "Հիմքի փոխում",
        "leftHtml": "log<sub>a</sub>x",
        "rightHtml": "log<sub>b</sub>x / log<sub>b</sub>a",
        "plain": "log_a x = log_b x / log_b a",
        "leftAliases": [
            "log_a x",
            "log_ax",
            "loga x",
            "logₐx"
        ],
        "rightAliases": [
            "log_b x/log_b a",
            "log_bx/log_ba",
            "logbx/logba",
            "log_b(x)/log_b(a)",
            "ln x/ln a",
            "lnx/lna",
            "lg x/lg a",
            "lgx/lga"
        ],
        "explanation": "Հիմքը փոխելու համար նույն նոր հիմքով վերցնում ենք x-ի և a-ի լոգարիթմների հարաբերությունը։"
    },
    {
        "id": "base-change-ln",
        "group": "base",
        "category": "Հիմքի փոխում ln-ով",
        "leftHtml": "log<sub>a</sub>x",
        "rightHtml": "ln x / ln a",
        "plain": "log_a x = ln x / ln a",
        "leftAliases": [
            "log_a x",
            "log_ax",
            "loga x",
            "logₐx"
        ],
        "rightAliases": [
            "ln x/ln a",
            "lnx/lna",
            "ln(x)/ln(a)"
        ],
        "explanation": "Հիմքի փոխման կանոնում նոր հիմքը վերցնում ենք e, ուստի ստացվում է ln։",
        "connectionHtml": "Գալիս է log<sub>a</sub>x = log<sub>b</sub>x / log<sub>b</sub>a կանոնից՝ b = e։"
    },
    {
        "id": "base-change-lg",
        "group": "base",
        "category": "Հիմքի փոխում lg-ով",
        "leftHtml": "log<sub>a</sub>x",
        "rightHtml": "lg x / lg a",
        "plain": "log_a x = lg x / lg a",
        "leftAliases": [
            "log_a x",
            "log_ax",
            "loga x",
            "logₐx"
        ],
        "rightAliases": [
            "lg x/lg a",
            "lgx/lga",
            "lg(x)/lg(a)"
        ],
        "explanation": "Հիմքի փոխման կանոնում նոր հիմքը վերցնում ենք 10, ուստի ստացվում է lg։",
        "connectionHtml": "Գալիս է log<sub>a</sub>x = log<sub>b</sub>x / log<sub>b</sub>a կանոնից՝ b = 10։"
    },
    {
        "id": "lg",
        "group": "basic",
        "category": "lg",
        "leftHtml": "lg x",
        "rightHtml": "log<sub>10</sub>x",
        "plain": "lg x = log_10 x",
        "leftAliases": [
            "lg x",
            "lgx"
        ],
        "rightAliases": [
            "log_10 x",
            "log10x",
            "log_10x",
            "log₁₀x"
        ],
        "explanation": "lg-ը տասնորդական լոգարիթմն է, այսինքն՝ հիմքը 10 է։"
    },
    {
        "id": "ln",
        "group": "basic",
        "category": "ln",
        "leftHtml": "ln x",
        "rightHtml": "log<sub>e</sub>x",
        "plain": "ln x = log_e x",
        "leftAliases": [
            "ln x",
            "lnx"
        ],
        "rightAliases": [
            "log_e x",
            "logex",
            "log_ex",
            "logₑx"
        ],
        "explanation": "ln-ը բնական լոգարիթմն է, այսինքն՝ հիմքը e է։"
    },
    {
        "id": "inverse-argument",
        "group": "rules",
        "category": "Հակադարձ թիվ",
        "leftHtml": "log<sub>a</sub>(1/x)",
        "rightHtml": "−log<sub>a</sub>x",
        "plain": "log_a(1/x) = −log_a x",
        "leftAliases": [
            "log_a(1/x)",
            "log_a 1/x",
            "loga(1/x)",
            "logₐ(1/x)"
        ],
        "rightAliases": [
            "-log_a x",
            "-log_ax",
            "−log_a x",
            "-loga x",
            "-logₐx"
        ],
        "explanation": "1/x = x^(-1), ուստի աստիճանի կանոնով դուրս է գալիս −1։",
        "connectionHtml": "Գալիս է աստիճանի կանոնից՝ log<sub>a</sub>(x<sup>−1</sup>) = −log<sub>a</sub>x։"
    },
    {
        "id": "negative-power",
        "group": "rules",
        "category": "Բացասական աստիճան",
        "leftHtml": "log<sub>a</sub>(x<sup>−n</sup>)",
        "rightHtml": "−n log<sub>a</sub>x",
        "plain": "log_a(x^−n) = −n log_a x",
        "leftAliases": [
            "log_a(x^-n)",
            "log_a x^-n",
            "log_a(x^{-n})",
            "loga(x^-n)",
            "logₐ(x⁻ⁿ)"
        ],
        "rightAliases": [
            "-n log_a x",
            "-nlog_ax",
            "−n log_a x",
            "-n*log_a x",
            "-nloga x"
        ],
        "explanation": "Բացասական աստիճանը դուրս է գալիս նույն նշանով՝ −n։",
        "connectionHtml": "Գալիս է աստիճանի կանոնից՝ n-ի փոխարեն վերցնում ենք −n։"
    },
    {
        "id": "a-power-n",
        "group": "basic",
        "category": "Հիմքի աստիճան",
        "leftHtml": "log<sub>a</sub>(a<sup>n</sup>)",
        "rightHtml": "n",
        "plain": "log_a(a^n) = n",
        "leftAliases": [
            "log_a(a^n)",
            "log_a a^n",
            "loga(a^n)",
            "logₐ(aⁿ)"
        ],
        "rightAliases": [
            "n"
        ],
        "explanation": "Նույն հիմքի դեպքում լոգարիթմը վերադարձնում է աստիճանացույցը։",
        "connectionHtml": "Գալիս է log<sub>a</sub>(a<sup>x</sup>) = x հակադարձ գործողության կանոնից։"
    },
    {
        "id": "negative-base-power",
        "group": "basic",
        "category": "Հիմքի բացասական աստիճան",
        "leftHtml": "log<sub>a</sub>(a<sup>−n</sup>)",
        "rightHtml": "−n",
        "plain": "log_a(a^−n) = −n",
        "leftAliases": [
            "log_a(a^-n)",
            "log_a a^-n",
            "log_a(a^{-n})",
            "loga(a^-n)",
            "logₐ(a⁻ⁿ)"
        ],
        "rightAliases": [
            "-n",
            "−n"
        ],
        "explanation": "Նույն հիմքի դեպքում պատասխանը ուղղակի աստիճանացույցն է՝ այստեղ −n։",
        "connectionHtml": "Գալիս է log<sub>a</sub>(a<sup>x</sup>) = x կանոնից, երբ x = −n։"
    },
    {
        "id": "two-powers-product",
        "group": "mixed",
        "category": "Խառը արտադրյալ",
        "leftHtml": "log<sub>a</sub>(x<sup>m</sup>y<sup>n</sup>)",
        "rightHtml": "m log<sub>a</sub>x + n log<sub>a</sub>y",
        "plain": "log_a(x^m y^n) = m log_a x + n log_a y",
        "leftAliases": [
            "log_a(x^m y^n)",
            "log_a(x^m*y^n)",
            "loga(x^m y^n)"
        ],
        "rightAliases": [
            "m log_a x + n log_a y",
            "mlog_ax+nlog_ay",
            "m*log_a x+n*log_a y",
            "m loga x + n loga y"
        ],
        "explanation": "Օգտագործվում են և՛ արտադրյալի, և՛ աստիճանի կանոնները։",
        "connectionHtml": "Գալիս է log<sub>a</sub>(xy) և log<sub>a</sub>(x<sup>n</sup>) կանոնները միասին կիրառելուց։"
    },
    {
        "id": "two-powers-quotient",
        "group": "mixed",
        "category": "Խառը քանորդ",
        "leftHtml": "log<sub>a</sub>(x<sup>m</sup>/y<sup>n</sup>)",
        "rightHtml": "m log<sub>a</sub>x − n log<sub>a</sub>y",
        "plain": "log_a(x^m/y^n) = m log_a x − n log_a y",
        "leftAliases": [
            "log_a(x^m/y^n)",
            "log_a(x^m / y^n)",
            "loga(x^m/y^n)"
        ],
        "rightAliases": [
            "m log_a x - n log_a y",
            "mlog_ax-nlog_ay",
            "m*log_a x-n*log_a y",
            "m loga x - n loga y"
        ],
        "explanation": "Քանորդի կանոնից գալիս է հանում, իսկ աստիճանները դառնում են գործակիցներ։",
        "connectionHtml": "Գալիս է log<sub>a</sub>(x/y) և log<sub>a</sub>(x<sup>n</sup>) կանոնները միասին կիրառելուց։"
    },
    {
        "id": "coeff-to-power",
        "group": "transform",
        "category": "Գործակիցը աստիճան",
        "leftHtml": "n log<sub>a</sub>x",
        "rightHtml": "log<sub>a</sub>(x<sup>n</sup>)",
        "plain": "n log_a x = log_a(x^n)",
        "leftAliases": [
            "n log_a x",
            "nlog_ax",
            "n*log_a x",
            "nloga x"
        ],
        "rightAliases": [
            "log_a(x^n)",
            "log_a x^n",
            "loga(x^n)"
        ],
        "explanation": "Եթե log-ի առաջ գործակից կա, այն կարելի է տեղափոխել ներս՝ որպես աստիճան։",
        "connectionHtml": "Սա աստիճանի կանոնի հակառակ ուղղությունն է՝ log<sub>a</sub>(x<sup>n</sup>) = nlog<sub>a</sub>x։",
        "exampleHtml": "Օրինակ՝ 2lg√3 = lg(√3)<sup>2</sup> = lg3։"
    },
    {
        "id": "fraction-coeff-to-root",
        "group": "transform",
        "category": "Կոտորակ գործակից",
        "leftHtml": "1/n log<sub>a</sub>x",
        "rightHtml": "log<sub>a</sub><sup>n</sup>√x",
        "plain": "1/n log_a x = log_a(n-th root of x)",
        "leftAliases": [
            "1/n log_a x",
            "(1/n)log_a x",
            "1/n*log_a x",
            "log_a x/n",
            "1/nloga x"
        ],
        "rightAliases": [
            "log_a nthroot x",
            "log_a root_n x",
            "log_a(x^(1/n))",
            "log_a n√x",
            "log_a ⁿ√x"
        ],
        "explanation": "Կոտորակ գործակիցը ներսում դառնում է կոտորակ աստիճան, այսինքն՝ արմատ։",
        "connectionHtml": "Գալիս է nlog<sub>a</sub>x = log<sub>a</sub>(x<sup>n</sup>) ձևից՝ n-ի փոխարեն 1/n։",
        "exampleHtml": "Օրինակ՝ 1/2 log<sub>a</sub>x = log<sub>a</sub>√x։"
    },
    {
        "id": "negative-coeff-to-reciprocal",
        "group": "transform",
        "category": "Բացասական գործակից",
        "leftHtml": "−log<sub>a</sub>x",
        "rightHtml": "log<sub>a</sub>(1/x)",
        "plain": "−log_a x = log_a(1/x)",
        "leftAliases": [
            "-log_a x",
            "-log_ax",
            "−log_a x",
            "-loga x"
        ],
        "rightAliases": [
            "log_a(1/x)",
            "log_a 1/x",
            "loga(1/x)"
        ],
        "explanation": "Մինուսը նշանակում է x-ի −1 աստիճան, իսկ x^(−1) = 1/x։",
        "connectionHtml": "Գալիս է log<sub>a</sub>(x<sup>−1</sup>) = −log<sub>a</sub>x կանոնից։",
        "exampleHtml": "Օրինակ՝ −lg5 = lg(1/5)։"
    },
    {
        "id": "negative-n-coeff-to-reciprocal",
        "group": "transform",
        "category": "−n գործակից",
        "leftHtml": "−n log<sub>a</sub>x",
        "rightHtml": "log<sub>a</sub>(1/x<sup>n</sup>)",
        "plain": "−n log_a x = log_a(1/x^n)",
        "leftAliases": [
            "-n log_a x",
            "-nlog_ax",
            "−n log_a x",
            "-n*log_a x"
        ],
        "rightAliases": [
            "log_a(1/x^n)",
            "log_a x^-n",
            "log_a(x^-n)",
            "loga(1/x^n)"
        ],
        "explanation": "−n գործակիցը ներսում դառնում է x^(−n), այսինքն՝ 1/x^n։",
        "connectionHtml": "Գալիս է աստիճանի կանոնի հակառակ ուղղությունից և բացասական աստիճանի կանոնից։",
        "exampleHtml": "Օրինակ՝ −2log<sub>a</sub>x = log<sub>a</sub>(1/x<sup>2</sup>)։"
    },
    {
        "id": "sum-to-product",
        "group": "transform",
        "category": "Գումարը արտադրյալ",
        "leftHtml": "log<sub>a</sub>x + log<sub>a</sub>y",
        "rightHtml": "log<sub>a</sub>(xy)",
        "plain": "log_a x + log_a y = log_a(xy)",
        "leftAliases": [
            "log_a x + log_a y",
            "log_ax+log_ay",
            "loga x + loga y"
        ],
        "rightAliases": [
            "log_a(xy)",
            "log_a(x*y)",
            "loga(xy)"
        ],
        "explanation": "Երկու նույն հիմքով լոգարիթմների գումարը կարելի է գրել մեկ լոգարիթմով՝ արտադրյալով։",
        "connectionHtml": "Սա արտադրյալի կանոնի հակառակ ուղղությունն է։",
        "exampleHtml": "Օրինակ՝ lg2 + lg5 = lg10 = 1։"
    },
    {
        "id": "difference-to-quotient",
        "group": "transform",
        "category": "Տարբերությունը քանորդ",
        "leftHtml": "log<sub>a</sub>x − log<sub>a</sub>y",
        "rightHtml": "log<sub>a</sub>(x/y)",
        "plain": "log_a x − log_a y = log_a(x/y)",
        "leftAliases": [
            "log_a x - log_a y",
            "log_ax-log_ay",
            "loga x - loga y"
        ],
        "rightAliases": [
            "log_a(x/y)",
            "log_a x/y",
            "loga(x/y)"
        ],
        "explanation": "Երկու նույն հիմքով լոգարիթմների տարբերությունը կարելի է գրել մեկ լոգարիթմով՝ քանորդով։",
        "connectionHtml": "Սա քանորդի կանոնի հակառակ ուղղությունն է։",
        "exampleHtml": "Օրինակ՝ lg20 − lg2 = lg10 = 1։"
    },
    {
        "id": "powered-base-argument",
        "group": "mixed",
        "category": "Աստիճան հիմքում և ներսում",
        "leftHtml": "log<sub>a<sup>m</sup></sub>(x<sup>n</sup>)",
        "rightHtml": "n/m · log<sub>a</sub>x",
        "plain": "log_(a^m)(x^n) = n/m · log_a x",
        "leftAliases": [
            "log_a^m(x^n)",
            "log_(a^m)(x^n)",
            "log_{a^m}(x^n)",
            "loga^m x^n"
        ],
        "rightAliases": [
            "n/m log_a x",
            "(n/m)log_a x",
            "n/m*log_a x",
            "n/m·log_a x"
        ],
        "explanation": "Երբ հիմքն էլ է աստիճանով, փոխում ենք հիմքը դեպի a, իսկ x^n-ի n-ը դուրս է գալիս։",
        "connectionHtml": "Գալիս է հիմքի փոխման և աստիճանի կանոններից։",
        "exampleHtml": "Օրինակ՝ log<sub>4</sub>8 = log<sub>2²</sub>2³ = 3/2։"
    },
    {
        "id": "powered-base-same-base",
        "group": "mixed",
        "category": "a աստիճան հիմքում",
        "leftHtml": "log<sub>a<sup>m</sup></sub>(a<sup>n</sup>)",
        "rightHtml": "n/m",
        "plain": "log_(a^m)(a^n) = n/m",
        "leftAliases": [
            "log_(a^m)(a^n)",
            "log_a^m(a^n)",
            "log_{a^m}(a^n)",
            "loga^m a^n"
        ],
        "rightAliases": [
            "n/m",
            "n / m"
        ],
        "explanation": "Եթե և՛ հիմքը, և՛ ներսի թիվը նույն a-ի աստիճաններ են, պատասխանը աստիճանների հարաբերությունն է։",
        "connectionHtml": "Սա log<sub>a<sup>m</sup></sub>(x<sup>n</sup>) = n/m log<sub>a</sub>x կանոնի հատուկ դեպքն է, երբ x = a։",
        "exampleHtml": "Օրինակ՝ log<sub>9</sub>27 = log<sub>3²</sub>3³ = 3/2։"
    },
    {
        "id": "chain",
        "group": "mixed",
        "category": "Շղթայական կանոն",
        "leftHtml": "log<sub>a</sub>b · log<sub>b</sub>c",
        "rightHtml": "log<sub>a</sub>c",
        "plain": "log_a b · log_b c = log_a c",
        "leftAliases": [
            "log_a b * log_b c",
            "log_ab*log_bc",
            "log_a b log_b c",
            "log_ab log_bc",
            "logₐb·log_bc"
        ],
        "rightAliases": [
            "log_a c",
            "log_ac",
            "loga c",
            "logₐc"
        ],
        "explanation": "Միջանկյալ b հիմքը կրճատվում է, ինչպես հիմքի փոխման կանոնում։",
        "connectionHtml": "Գալիս է հիմքի փոխման կանոնից։ Օրինակ՝ log<sub>b</sub>c = log<sub>a</sub>c / log<sub>a</sub>b։"
    },
    {
        "id": "multiplication-inverse",
        "group": "base",
        "category": "Փոխադարձություն",
        "leftHtml": "log<sub>a</sub>x · log<sub>x</sub>a",
        "rightHtml": "1",
        "plain": "log_a x · log_x a = 1",
        "leftAliases": [
            "log_a x * log_x a",
            "log_ax*log_xa",
            "log_a x log_x a",
            "log_ax log_xa"
        ],
        "rightAliases": [
            "1",
            "+1"
        ],
        "explanation": "logₐx և logₓa փոխադարձ թվեր են, ուստի արտադրյալը 1 է։",
        "connectionHtml": "Գալիս է log<sub>a</sub>x = 1/log<sub>x</sub>a փոխադարձ հիմքերի կանոնից։"
    },
    {
        "id": "number-to-log",
        "group": "transform",
        "category": "Թիվը log-ի տեսքով",
        "leftHtml": "c",
        "rightHtml": "log<sub>a</sub>(a<sup>c</sup>)",
        "plain": "c = log_a(a^c)",
        "leftAliases": [
            "c"
        ],
        "rightAliases": [
            "log_a(a^c)",
            "log_a a^c",
            "loga(a^c)"
        ],
        "explanation": "Ցանկացած թիվ կարելի է գրել որպես նույն հիմքով լոգարիթմ, եթե պետք է հավասարեցնել log-երին։",
        "connectionHtml": "Գալիս է log<sub>a</sub>(a<sup>x</sup>) = x կանոնից։",
        "exampleHtml": "Օրինակ՝ 3 = log<sub>2</sub>8, որովհետև 8 = 2³։"
    },
    {
        "id": "log-equation-to-exponential",
        "group": "solving",
        "category": "log-ից աստիճանային",
        "leftHtml": "log<sub>a</sub>x = c",
        "rightHtml": "x = a<sup>c</sup>",
        "plain": "log_a x = c ⇔ x = a^c",
        "leftAliases": [
            "log_a x = c",
            "log_ax=c",
            "loga x=c"
        ],
        "rightAliases": [
            "x=a^c",
            "x = a^c",
            "a^c=x"
        ],
        "explanation": "Լոգարիթմային հավասարումը կարելի է անմիջապես գրել աստիճանային տեսքով։",
        "connectionHtml": "Սա լոգարիթմի սահմանումն է՝ log<sub>a</sub>x = c ⇔ a<sup>c</sup> = x։"
    },
    {
        "id": "same-log-equation",
        "group": "solving",
        "category": "Նույն հիմքով log-եր",
        "leftHtml": "log<sub>a</sub>f(x) = log<sub>a</sub>g(x)",
        "rightHtml": "f(x) = g(x)",
        "plain": "log_a f(x) = log_a g(x) ⇒ f(x) = g(x)",
        "leftAliases": [
            "log_a f(x)=log_a g(x)",
            "log_af(x)=log_ag(x)",
            "loga f(x)=loga g(x)"
        ],
        "rightAliases": [
            "f(x)=g(x)",
            "fx=gx",
            "f=g"
        ],
        "explanation": "Նույն հիմքով լոգարիթմները հավասար են, ուրեմն ներսի արտահայտություններն են հավասար՝ բայց պետք է ստուգել պայմանները։",
        "connectionHtml": "Գալիս է այն փաստից, որ նույն թույլատրելի հիմքով log ֆունկցիան մեկարժեք է։",
        "exampleHtml": "Պայմանները պարտադիր են՝ f(x)>0 և g(x)>0։"
    }
];

  const state = {
    round: [], currentIndex: 0, answered: false, correctCount: 0, wrongCount: 0,
    streak: 0, bestRoundStreak: 0, roundResults: [], currentCard: null, currentShownSide: 'left'
  };

  const el = {
    root: document.documentElement,
    themeToggle: document.getElementById('themeToggle'),
    formulaGrid: document.getElementById('formulaGrid'),
    cheatsheetBody: document.getElementById('cheatsheetBody'),
    formulaCount: document.getElementById('formulaCount'),
    roundSize: document.getElementById('roundSize'),
    hardMode: document.getElementById('hardMode'),
    startBtn: document.getElementById('startBtn'),
    gamePanel: document.getElementById('gamePanel'),
    finishPanel: document.getElementById('finishPanel'),
    scoreText: document.getElementById('scoreText'),
    streakText: document.getElementById('streakText'),
    progressText: document.getElementById('progressText'),
    progressFill: document.getElementById('progressFill'),
    accuracyLive: document.getElementById('accuracyLive'),
    categoryBadge: document.getElementById('categoryBadge'),
    sideBadge: document.getElementById('sideBadge'),
    shownFormula: document.getElementById('shownFormula'),
    promptText: document.getElementById('promptText'),
    answerForm: document.getElementById('answerForm'),
    answerInput: document.getElementById('answerInput'),
    checkBtn: document.getElementById('checkBtn'),
    feedbackBox: document.getElementById('feedbackBox'),
    feedbackTitle: document.getElementById('feedbackTitle'),
    feedbackIcon: document.getElementById('feedbackIcon'),
    feedbackText: document.getElementById('feedbackText'),
    correctAnswerText: document.getElementById('correctAnswerText'),
    explanationText: document.getElementById('explanationText'),
    nextBtn: document.getElementById('nextBtn'),
    finishTitle: document.getElementById('finishTitle'),
    finishCorrect: document.getElementById('finishCorrect'),
    finishWrong: document.getElementById('finishWrong'),
    finishAccuracy: document.getElementById('finishAccuracy'),
    finishStreak: document.getElementById('finishStreak'),
    playAgainBtn: document.getElementById('playAgainBtn'),
    resetStatsBtn: document.getElementById('resetStatsBtn'),
    totalGames: document.getElementById('totalGames'),
    totalCards: document.getElementById('totalCards'),
    totalCorrect: document.getElementById('totalCorrect'),
    totalAccuracy: document.getElementById('totalAccuracy'),
    bestStreak: document.getElementById('bestStreak'),
    weakList: document.getElementById('weakList'),
    historyList: document.getElementById('historyList'),
    xValue: document.getElementById('xValue'),
    baseValue: document.getElementById('baseValue'),
    calculatorForm: document.getElementById('calculatorForm'),
    logResult: document.getElementById('logResult'),
    lgResult: document.getElementById('lgResult'),
    lnResult: document.getElementById('lnResult'),
    calcStatus: document.getElementById('calcStatus'),
    copyAllFormulas: document.getElementById('copyAllFormulas'),
    toast: document.getElementById('toast')
  };

  function getBlankStats() {
    return { games: 0, cards: 0, correct: 0, wrong: 0, bestStreak: 0, formulas: {}, history: [] };
  }

  function readStats() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return { ...getBlankStats(), ...parsed, formulas: parsed?.formulas || {}, history: parsed?.history || [] };
    } catch {
      return getBlankStats();
    }
  }

  function writeStats(stats) { localStorage.setItem(STORAGE_KEY, JSON.stringify(stats)); }

  function shuffle(list) {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function percent(part, total) { return total ? Math.round((part / total) * 100) : 0; }

  function normalize(raw) {
    return String(raw || '')
      .toLowerCase()
      .replace(/<[^>]*>/g, '')
      .replace(/[{}]/g, '')
      .replace(/[։:]/g, '')
      .replace(/[−–—]/g, '-')
      .replace(/[×·*]/g, '')
      .replace(/√/g, 'sqrt')
      .replace(/½/g, '1/2')
      .replace(/₀/g, '0').replace(/₁/g, '1').replace(/₂/g, '2').replace(/₃/g, '3').replace(/₄/g, '4')
      .replace(/₅/g, '5').replace(/₆/g, '6').replace(/₇/g, '7').replace(/₈/g, '8').replace(/₉/g, '9')
      .replace(/ₐ/g, 'a').replace(/ₑ/g, 'e').replace(/ₓ/g, 'x')
      .replace(/⁰/g, '0').replace(/¹/g, '1').replace(/²/g, '2').replace(/³/g, '3').replace(/⁴/g, '4')
      .replace(/⁵/g, '5').replace(/⁶/g, '6').replace(/⁷/g, '7').replace(/⁸/g, '8').replace(/⁹/g, '9')
      .replace(/ⁿ/g, 'n').replace(/ᵐ/g, 'm').replace(/ᵏ/g, 'k').replace(/ᶜ/g, 'c').replace(/ˣ/g, 'x').replace(/ᵧ/g, 'y').replace(/⁻/g, '-')
      .replace(/_/g, '')
      .replace(/\s+/g, '')
      .replace(/\(([^()+\-/*^=]+)\)/g, '$1')
      .trim();
  }

  function splitInputCandidates(raw) {
    const value = String(raw || '').trim();
    const chunks = [value];
    if (value.includes('=')) chunks.push(...value.split('=').map((piece) => piece.trim()));
    return chunks.filter(Boolean);
  }

  function isCorrect(raw, aliases) {
    const hard = el.hardMode.checked;
    const candidates = splitInputCandidates(raw).map(normalize);
    const accepted = aliases.map(normalize);
    if (hard) return candidates.some((candidate) => accepted.includes(candidate));
    return candidates.some((candidate) => accepted.some((answer) => candidate === answer || candidate.replace(/^=/, '') === answer));
  }

  function showToast(message = 'Պատճենվեց') {
    el.toast.textContent = message;
    el.toast.classList.add('is-visible');
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => el.toast.classList.remove('is-visible'), 1600);
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      showToast('Պատճենվեց');
    } catch {
      const area = document.createElement('textarea');
      area.value = text;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      area.remove();
      showToast('Պատճենվեց');
    }
  }

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    el.root.dataset.theme = theme;
    el.themeToggle.textContent = theme === 'dark' ? '☾' : '☀';
  }

  function toggleTheme() {
    const next = el.root.dataset.theme === 'dark' ? 'light' : 'dark';
    el.root.dataset.theme = next;
    el.themeToggle.textContent = next === 'dark' ? '☾' : '☀';
    localStorage.setItem(THEME_KEY, next);
  }

  function renderFormulas(group = 'all') {
    const rows = group === 'all' ? FORMULAS : FORMULAS.filter((formula) => formula.group === group);
    el.formulaCount.textContent = FORMULAS.length;
    el.formulaGrid.innerHTML = rows.map((formula, index) => {
      const connection = formula.connectionHtml ? `<div class="formula-connection"><span>Կապ / որտեղից է գալիս</span><strong>${formula.connectionHtml}</strong></div>` : '';
      const example = formula.exampleHtml ? `<div class="formula-example"><span>Օրինակ</span><strong>${formula.exampleHtml}</strong></div>` : '';
      return `
      <article class="formula-card ${formula.connectionHtml ? 'is-derived' : ''}" data-group="${formula.group}">
        <div class="formula-card-top">
          <h3>${String(index + 1).padStart(2, '0')} · ${formula.category}</h3>
          <button class="copy-formula" type="button" data-copy="${formula.plain.replace(/"/g, '&quot;')}">Copy</button>
        </div>
        <div class="formula-equation"><span>${formula.leftHtml}</span><span class="equal-sign">=</span><span>${formula.rightHtml}</span></div>
        <p>${formula.explanation}</p>
        ${connection}
        ${example}
      </article>`;
    }).join('');

    el.cheatsheetBody.innerHTML = FORMULAS.map((formula) => `
      <tr><td>${formula.leftHtml}</td><td>=</td><td>${formula.rightHtml}</td><td>${formula.connectionHtml ? 'Կապ ունի' : 'Հիմնական'}</td></tr>
    `).join('');
  }

  function runCalculator(event) {
    event?.preventDefault();
    const x = Number(el.xValue.value);
    const a = Number(el.baseValue.value);
    const xOk = Number.isFinite(x) && x > 0;
    const aOk = Number.isFinite(a) && a > 0 && a !== 1;

    if (!xOk || !aOk) {
      el.logResult.textContent = '—';
      el.lgResult.textContent = xOk ? formatNumber(Math.log10(x)) : '—';
      el.lnResult.textContent = xOk ? formatNumber(Math.log(x)) : '—';
      el.calcStatus.className = 'note-bar danger';
      el.calcStatus.textContent = !xOk ? 'x-ը պետք է լինի դրական։' : 'Հիմքը պետք է լինի դրական և չհավասարվի 1-ի։';
      return;
    }

    el.logResult.textContent = formatNumber(Math.log(x) / Math.log(a));
    el.lgResult.textContent = formatNumber(Math.log10(x));
    el.lnResult.textContent = formatNumber(Math.log(x));
    el.calcStatus.className = 'note-bar success';
    el.calcStatus.textContent = 'Պայմանները ճիշտ են։';
  }

  function formatNumber(value) {
    if (!Number.isFinite(value)) return '—';
    const rounded = Math.abs(value) < 1e-12 ? 0 : value;
    return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(6).replace(/0+$/, '').replace(/\.$/, '');
  }

  function startGame() {
    const sizeValue = el.roundSize.value;
    const shuffled = shuffle(FORMULAS);
    const size = sizeValue === 'all' ? FORMULAS.length : Math.min(Number(sizeValue), FORMULAS.length);
    state.round = shuffled.slice(0, size).map((formula) => ({ formula, shownSide: Math.random() > 0.5 ? 'left' : 'right' }));
    state.currentIndex = 0;
    state.answered = false;
    state.correctCount = 0;
    state.wrongCount = 0;
    state.streak = 0;
    state.bestRoundStreak = 0;
    state.roundResults = [];
    el.finishPanel.classList.add('is-hidden');
    el.gamePanel.classList.remove('is-hidden');
    renderCurrentCard();
    setTimeout(() => el.answerInput.focus(), 60);
  }

  function renderCurrentCard() {
    const item = state.round[state.currentIndex];
    if (!item) return finishGame();
    state.currentCard = item.formula;
    state.currentShownSide = item.shownSide;
    state.answered = false;

    el.categoryBadge.textContent = item.formula.category;
    el.sideBadge.textContent = item.shownSide === 'left' ? 'Ցույց է տրված՝ ձախ կողմը' : 'Ցույց է տրված՝ աջ կողմը';
    el.shownFormula.innerHTML = item.shownSide === 'left' ? item.formula.leftHtml : item.formula.rightHtml;
    el.promptText.textContent = item.shownSide === 'left' ? 'Գրիր բանաձևի աջ կողմը։' : 'Գրիր բանաձևի ձախ կողմը։';
    el.answerInput.value = '';
    el.answerInput.disabled = false;
    el.checkBtn.disabled = false;
    el.feedbackBox.className = 'feedback-box is-hidden';
    el.correctAnswerText.innerHTML = '';
    el.explanationText.textContent = '';
    updateLiveScore();
  }

  function updateLiveScore() {
    const totalAnswered = state.correctCount + state.wrongCount;
    const total = state.round.length || 1;
    const progressPercent = Math.round((totalAnswered / total) * 100);
    el.scoreText.textContent = state.correctCount;
    el.streakText.textContent = state.streak;
    el.progressText.textContent = `${Math.min(state.currentIndex + 1, total)} / ${total}`;
    el.progressFill.style.width = `${progressPercent}%`;
    el.accuracyLive.textContent = `${percent(state.correctCount, totalAnswered)}%`;
  }

  function submitAnswer(event) {
    event.preventDefault();
    if (state.answered || !state.currentCard) return;
    const rawAnswer = el.answerInput.value.trim();
    if (!rawAnswer) {
      el.answerInput.focus();
      el.answerInput.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-5px)' }, { transform: 'translateX(5px)' }, { transform: 'translateX(0)' }], { duration: 180 });
      return;
    }

    const expectedAliases = state.currentShownSide === 'left' ? state.currentCard.rightAliases : state.currentCard.leftAliases;
    const expectedHtml = state.currentShownSide === 'left' ? state.currentCard.rightHtml : state.currentCard.leftHtml;
    const gotCorrect = isCorrect(rawAnswer, expectedAliases);
    state.answered = true;
    el.answerInput.disabled = true;
    el.checkBtn.disabled = true;

    if (gotCorrect) {
      state.correctCount += 1;
      state.streak += 1;
      state.bestRoundStreak = Math.max(state.bestRoundStreak, state.streak);
    } else {
      state.wrongCount += 1;
      state.streak = 0;
    }

    state.roundResults.push({ formulaId: state.currentCard.id, correct: gotCorrect, shownSide: state.currentShownSide, userAnswer: rawAnswer });

    el.feedbackBox.className = `feedback-box ${gotCorrect ? 'correct' : 'wrong'}`;
    el.feedbackTitle.textContent = gotCorrect ? 'Ճիշտ է' : 'Սխալ է';
    el.feedbackIcon.textContent = gotCorrect ? '✓' : '×';
    el.feedbackText.textContent = gotCorrect ? 'Լավ է․ դու հիշեցիր բանաձևի մյուս կողմը։' : 'Ոչինչ, նայիր ճիշտ կողմը և փորձիր հիշել հաջորդ անգամ։';
    el.correctAnswerText.innerHTML = expectedHtml;
    el.explanationText.textContent = state.currentCard.explanation;
    el.feedbackBox.classList.remove('is-hidden');
    updateLiveScore();
    el.nextBtn.textContent = state.currentIndex === state.round.length - 1 ? 'Ավարտել խաղը' : 'Հաջորդ քարտը';
    el.nextBtn.focus();
  }

  function nextCard() {
    if (!state.answered) return;
    state.currentIndex += 1;
    if (state.currentIndex >= state.round.length) finishGame();
    else {
      renderCurrentCard();
      setTimeout(() => el.answerInput.focus(), 60);
    }
  }

  function finishGame() {
    const total = state.round.length;
    el.progressFill.style.width = '100%';
    el.gamePanel.classList.add('is-hidden');
    el.finishPanel.classList.remove('is-hidden');
    el.finishCorrect.textContent = state.correctCount;
    el.finishWrong.textContent = state.wrongCount;
    el.finishAccuracy.textContent = `${percent(state.correctCount, total)}%`;
    el.finishStreak.textContent = state.bestRoundStreak;
    el.finishTitle.textContent = state.correctCount === total ? 'Կատարյալ արդյունք 🎉' : state.correctCount >= Math.ceil(total * 0.75) ? 'Շատ լավ արդյունք' : 'Շարունակիր կրկնել';
    saveRoundStats();
  }

  function saveRoundStats() {
    const total = state.round.length;
    if (!total || state.roundResults.length !== total) return;
    if (state.roundResults.some((result) => result.saved)) return;
    const stats = readStats();
    stats.games += 1;
    stats.cards += total;
    stats.correct += state.correctCount;
    stats.wrong += state.wrongCount;
    stats.bestStreak = Math.max(stats.bestStreak, state.bestRoundStreak);
    for (const result of state.roundResults) {
      const current = stats.formulas[result.formulaId] || { seen: 0, correct: 0, wrong: 0 };
      current.seen += 1;
      if (result.correct) current.correct += 1;
      else current.wrong += 1;
      stats.formulas[result.formulaId] = current;
      result.saved = true;
    }
    stats.history.unshift({ date: new Date().toISOString(), total, correct: state.correctCount, wrong: state.wrongCount, accuracy: percent(state.correctCount, total), bestStreak: state.bestRoundStreak });
    stats.history = stats.history.slice(0, 20);
    writeStats(stats);
    renderStats();
  }

  function renderStats() {
    const stats = readStats();
    el.totalGames.textContent = stats.games;
    el.totalCards.textContent = stats.cards;
    el.totalCorrect.textContent = stats.correct;
    el.totalAccuracy.textContent = `${percent(stats.correct, stats.cards)}%`;
    el.bestStreak.textContent = stats.bestStreak;
    renderWeakList(stats);
    renderHistory(stats);
  }

  function renderWeakList(stats) {
    const rows = FORMULAS.map((formula) => {
      const item = stats.formulas[formula.id] || { seen: 0, correct: 0, wrong: 0 };
      return { formula, ...item, accuracy: percent(item.correct, item.seen) };
    }).filter((row) => row.seen > 0).sort((a, b) => a.accuracy - b.accuracy || b.seen - a.seen).slice(0, 6);

    if (!rows.length) {
      el.weakList.innerHTML = '<div class="empty-state">Դեռ վիճակագրություն չկա։ Սկսիր խաղը, և այստեղ կերևան դժվար բանաձևերը։</div>';
      return;
    }
    el.weakList.innerHTML = rows.map((row) => `<div class="list-row"><div><strong>${row.formula.leftHtml} = ${row.formula.rightHtml}</strong><small>${row.formula.category} · տեսել ես ${row.seen} անգամ · սխալ ${row.wrong}</small></div><div class="row-score">${row.accuracy}%</div></div>`).join('');
  }

  function renderHistory(stats) {
    if (!stats.history.length) {
      el.historyList.innerHTML = '<div class="empty-state">Դեռ ավարտված խաղ չկա։</div>';
      return;
    }
    el.historyList.innerHTML = stats.history.map((game) => {
      const date = new Date(game.date);
      const formatted = Number.isNaN(date.getTime()) ? 'Անհայտ ամսաթիվ' : date.toLocaleString('hy-AM', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
      return `<div class="list-row"><div><strong>${formatted}</strong><small>${game.correct}/${game.total} ճիշտ · լավագույն streak՝ ${game.bestStreak}</small></div><div class="row-score">${game.accuracy}%</div></div>`;
    }).join('');
  }

  function resetStats() {
    if (!window.confirm('Մաքրել ամբողջ վիճակագրությո՞ւնը։')) return;
    localStorage.removeItem(STORAGE_KEY);
    renderStats();
  }

  function insertQuickText(text) {
    const input = el.answerInput;
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    let insert = text;
    let cursorOffset = insert.length;
    if (text === '()') cursorOffset = 1;
    input.value = `${input.value.slice(0, start)}${insert}${input.value.slice(end)}`;
    input.focus();
    input.setSelectionRange(start + cursorOffset, start + cursorOffset);
  }

  function bindEvents() {
    el.themeToggle.addEventListener('click', toggleTheme);
    el.startBtn.addEventListener('click', startGame);
    el.playAgainBtn.addEventListener('click', startGame);
    el.answerForm.addEventListener('submit', submitAnswer);
    el.nextBtn.addEventListener('click', nextCard);
    el.resetStatsBtn.addEventListener('click', resetStats);
    el.calculatorForm.addEventListener('submit', runCalculator);
    el.xValue.addEventListener('input', runCalculator);
    el.baseValue.addEventListener('input', runCalculator);
    el.copyAllFormulas.addEventListener('click', () => copyText(FORMULAS.map((formula) => formula.plain).join('\n')));

    document.addEventListener('click', (event) => {
      const quickKey = event.target.closest('[data-insert]');
      if (quickKey) insertQuickText(quickKey.dataset.insert);

      const copyButton = event.target.closest('[data-copy]');
      if (copyButton) copyText(copyButton.dataset.copy);

      const filterButton = event.target.closest('[data-category]');
      if (filterButton) {
        document.querySelectorAll('.filter-btn').forEach((button) => button.classList.remove('is-active'));
        filterButton.classList.add('is-active');
        renderFormulas(filterButton.dataset.category);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (location.hash !== '#game' && !document.getElementById('game').matches(':hover')) return;
      if (event.key === 'Enter' && state.answered) {
        event.preventDefault();
        nextCard();
      }
    });
  }

  function boot() {
    initTheme();
    renderFormulas();
    runCalculator();
    renderStats();
    bindEvents();
  }

  boot();
})();
