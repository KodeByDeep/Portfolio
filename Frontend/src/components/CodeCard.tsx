/**
 * CodeCard
 * A fake VS Code-style editor card showing Sandeep's developer profile
 * as TypeScript. Pure HTML/CSS — no images.
 */

// Syntax-colour helpers
const K  = ({ children }: { children: string }) => (
  <span className="text-purple-400">{children}</span>       // keyword
)
const S  = ({ children }: { children: string }) => (
  <span className="text-emerald-300">{children}</span>      // string / value
)
const Prop = ({ children }: { children: string }) => (
  <span className="text-blue-300">{children}</span>         // object key
)
const Cm = ({ children }: { children: string }) => (
  <span className="text-white/30 italic">{children}</span>  // comment
)
const Num = ({ children }: { children: string }) => (
  <span className="text-orange-300">{children}</span>       // number / bool
)
const Ty = ({ children }: { children: string }) => (
  <span className="text-yellow-300">{children}</span>       // type name
)

interface LineProps {
  n: number
  children: React.ReactNode
}
function Line({ n, children }: LineProps) {
  return (
    <div className="flex items-start gap-4 leading-6 min-h-[1.5rem]">
      <span className="w-5 shrink-0 text-right text-white/20 select-none text-xs mt-0.5">
        {n}
      </span>
      <span className="flex-1 whitespace-pre-wrap break-all">{children}</span>
    </div>
  )
}

export default function CodeCard() {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0d1117] font-mono text-sm">

      {/* ── Title bar ── */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#161b22] border-b border-white/10">
        {/* Traffic lights */}
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        {/* Filename tab */}
        <div className="flex items-center gap-2 px-3 py-0.5 rounded-md bg-[#0d1117] border border-white/10 text-xs text-white/60">
          <span className="text-blue-400">TS</span>
          sandeep.ts
        </div>
      </div>

      {/* ── Code body ── */}
      <div className="px-4 py-5 space-y-0.5 text-white/85 overflow-x-auto">

        <Line n={1}><Cm>// Junior developer — open to work</Cm></Line>
        <Line n={2}>&nbsp;</Line>
        <Line n={3}>
          <K>const </K>
          <span className="text-white">sandeep</span>
          <span className="text-white/60">: </span>
          <Ty>Developer</Ty>
          <span className="text-white/60"> = {'{'}</span>
        </Line>
        <Line n={4}>
          {'  '}<Prop>role</Prop>
          <span className="text-white/60">: </span>
          <S>"Junior Full Stack Developer"</S>
          <span className="text-white/60">,</span>
        </Line>
        <Line n={5}>
          {'  '}<Prop>degree</Prop>
          <span className="text-white/60">: </span>
          <S>"BSc Computer Science, First Class (88%)"</S>
          <span className="text-white/60">,</span>
        </Line>
        <Line n={6}>
          {'  '}<Prop>location</Prop>
          <span className="text-white/60">: </span>
          <S>"West London"</S>
          <span className="text-white/60">,</span>
        </Line>
        <Line n={7}>
          {'  '}<Prop>stack</Prop>
          <span className="text-white/60">: [</span>
          <S>"React"</S>
          <span className="text-white/60">, </span>
          <S>"Next.js"</S>
          <span className="text-white/60">, </span>
          <S>"TypeScript"</S>
          <span className="text-white/60">,</span>
        </Line>
        <Line n={8}>
          {'          '}
          <S>"Node.js"</S>
          <span className="text-white/60">, </span>
          <S>"MongoDB"</S>
          <span className="text-white/60">],</span>
        </Line>
        <Line n={9}>
          {'  '}<Prop>clientSites</Prop>
          <span className="text-white/60">: </span>
          <Num>2</Num>
          <span className="text-white/60">,</span>
        </Line>
        <Line n={10}>
          {'  '}<Prop>openToWork</Prop>
          <span className="text-white/60">: </span>
          <Num>true</Num>
          <span className="text-white/60">,</span>
        </Line>
        <Line n={11}>
          <span className="text-white/60">{'};'}</span>
          {/* Blinking cursor — respects prefers-reduced-motion via CSS class */}
          <span className="cursor-blink ml-0.5 inline-block w-0.5 h-4 bg-emerald-400 align-middle" />
        </Line>

      </div>
    </div>
  )
}
