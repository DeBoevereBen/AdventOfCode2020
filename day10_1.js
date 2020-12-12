const input = `48
171
156
51
26
6
80
62
65
82
130
97
49
31
142
83
75
20
154
119
56
114
92
33
140
74
118
1
96
44
128
134
121
64
158
27
17
101
59
12
89
88
145
167
11
3
39
43
105
16
170
63
111
2
108
21
146
77
45
52
32
127
147
76
58
37
86
129
57
133
120
163
138
161
139
71
9
141
168
164
124
157
95
25
38
69
87
155
135
15
102
70
34
42
24
50
68
169
10
55
117
30
81
151
100
162
148`;


const testInput = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;


const parse = () => {
    const lines = input.split("\n").map(x => parseInt(x)).sort((a, b) => a - b);

    const mapped = [];

    for (let i = 0; i < lines.length - 1; i++) {
        const curr = lines[i];
        const next = lines[i + 1];
        const diff = next - curr;

        mapped.push({ n: curr, diff })
    }

    const one = mapped.filter(m => m.diff == 1);
    const three = mapped.filter(m => m.diff == 3);

    // Add one for the start & one for the end
    return (one.length + 1) * (three.length + 1)
}

console.log(parse())

