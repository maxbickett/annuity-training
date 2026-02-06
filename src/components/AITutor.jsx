import { useState } from 'react';
import { X, Brain, User, Send } from 'lucide-react';

export function AITutor({ moduleId, moduleTitle, questions, isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "I'm your AI tutor for annuities. Ask me anything about the concepts you're learning, or I can quiz you to test your understanding. What would you like to explore?"
    }
  ]);
  const [input, setInput] = useState('');
  const [mode, setMode] = useState('chat');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim().toLowerCase();
    setMessages(m => [...m, { role: 'user', content: input }]);
    setInput('');

    setTimeout(() => {
      let response = '';

      if (mode === 'quiz' || userMsg.includes('quiz') || userMsg.includes('test me')) {
        if (questions && questions.length > 0) {
          const q = questions[Math.floor(Math.random() * questions.length)];
          response = `Here's a question:\n\n**${q.q}**\n\nOptions:\n${q.options.map((o, i) => `${i + 1}. ${o}`).join('\n')}\n\nWhat's your answer? (reply with the number)`;
        } else {
          response = "Let me ask you a conceptual question:\n\n**What is the primary trade-off when purchasing an annuity?**\n\nThink about what you're giving up vs what you're gaining.";
        }
      } else if (userMsg.includes('mortality credit')) {
        response = `**Mortality credits** are the secret sauce of annuities.

Here's how they work:

1. Insurance company pools thousands of annuitants
2. Statistically, some will die earlier than average
3. Their remaining funds stay in the pool
4. Those who live longer benefit from those funds

**The result:** Annuity payout rates are 50-75% higher than you could safely achieve alone.

Example:
- Self-managing $1M with 4% rule = $40K/year
- SPIA at age 65 with $1M = $65-75K/year

The extra $25-35K/year comes from mortality credits - not better investments.`;
      } else if (userMsg.includes('glwb') || userMsg.includes('guaranteed lifetime')) {
        response = `**GLWB (Guaranteed Lifetime Withdrawal Benefit)** is the most popular living benefit rider.

**How it works:**
- You get a "benefit base" (usually = premium, but can grow)
- Guaranteed withdrawal rate (typically 4-6% depending on age)
- Withdraw that amount EVERY YEAR FOR LIFE
- Even if account value hits $0, payments continue

**Example:**
- $500K premium at age 65
- 5% GLWB rate
- = $25,000/year guaranteed for life

**Cost:** Typically 0.75-1.25% annually`;
      } else if (userMsg.includes('spia') || userMsg.includes('immediate')) {
        response = `**SPIA (Single Premium Immediate Annuity):**

The simplest annuity - you give insurance company a lump sum, they pay you income starting within 12 months.

**Key numbers at age 65:**
- $100K might get you $550-650/month for life
- That's 6.5-7.8% payout rate
- Compare to 4% rule: only $333/month

**Trade-off:** You lose access to the principal. It's gone. But you can NEVER outlive the income.

**Best for:** Clients who want maximum guaranteed income and have other liquid assets.`;
      } else if (userMsg.includes('fia') || userMsg.includes('fixed indexed')) {
        response = `**FIA (Fixed Indexed Annuity):**

Principal is protected, but growth is linked to an index like S&P 500.

**The catch:** You don't get full index returns. Caps, spreads, and participation rates limit upside.

**Example with 10% cap:**
- S&P up 25% → You get 10%
- S&P down 15% → You get 0% (not negative)

**Realistic long-term returns:** 4-6% historically

**Best for:** Clients who want more growth potential than CDs but can't stomach any losses.`;
      } else if (userMsg.includes('fee') || userMsg.includes('cost') || userMsg.includes('expensive')) {
        response = `**The Fee Stack in Variable Annuities:**

| Fee Type | Typical Range |
|----------|---------------|
| M&E | 1.0-1.4% |
| Admin | 0.1-0.3% |
| Subaccount | 0.5-1.0% |
| Rider | 0.75-1.5% |
| **TOTAL** | **2.35-4.2%** |

**The math that matters:**
$500K at 7% gross over 20 years:
- No fees: $1.93M
- 3% fees: $897K
- **Lost to fees: $1.04M**

VAs must provide value to justify this. That value is guarantees, not investment performance.`;
      } else if (userMsg.includes('surrender') || userMsg.includes('liquidity')) {
        response = `**Surrender Charges - The Liquidity Trade-off:**

Most annuities have surrender periods (typically 5-10 years). If you withdraw more than the free amount, you pay a penalty.

**Typical schedule:**
Year 1: 7-8%
Year 2: 6-7%
Year 3: 5-6%
...declining to 0%

**Free withdrawal:** Usually 10% per year penalty-free

**Critical point:** This is why annuities should NEVER be someone's only liquid asset. They need other money for emergencies.`;
      } else {
        response = `Good question about "${input.substring(0, 50)}${input.length > 50 ? '...' : ''}"

In the context of Module ${moduleId}: ${moduleTitle}, the key points are:

1. **Every annuity involves trade-offs** - you give up something (liquidity, upside, principal) to gain something (guarantees, income, protection)

2. **Suitability depends on context** - age, income needs, risk tolerance, other assets, and tax situation all matter

3. **Documentation matters** - always document WHY this product for THIS client

Would you like me to:
- Quiz you on this topic?
- Walk through a client scenario?
- Explain a specific concept deeper?`;
      }

      setMessages(m => [...m, { role: 'assistant', content: response }]);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-2xl w-full max-w-2xl h-[80vh] flex flex-col">
        <div className="p-4 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
              <Brain size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">AI Tutor</h3>
              <p className="text-slate-400 text-sm">Module {moduleId}: {moduleTitle}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === 'user' ? 'bg-blue-600' : 'bg-gradient-to-br from-blue-500 to-violet-500'
              }`}>
                {msg.role === 'user' ? <User size={16} className="text-white" /> : <Brain size={16} className="text-white" />}
              </div>
              <div className={`max-w-[80%] p-4 rounded-2xl ${
                msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200'
              }`}>
                <div className="text-sm whitespace-pre-wrap">{msg.content}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-slate-700">
          <div className="flex gap-2 mb-3">
            {['Chat', 'Quiz Me', 'Scenario'].map(m => (
              <button
                key={m}
                onClick={() => {
                  setMode(m.toLowerCase());
                  if (m === 'Quiz Me') {
                    setInput('quiz me');
                  }
                }}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  mode === m.toLowerCase()
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything about annuities..."
              className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
