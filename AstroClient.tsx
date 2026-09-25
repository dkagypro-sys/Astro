 "use client";
import {useState} from "react";
import {Menu, X, Sparkles, Star, Moon, Heart, CalendarDays, Phone, Search} from "lucide-react";

const rasigal=[
["மேஷம்","Mesha","♈","செவ்வாய்"],["ரிஷபம்","Rishabha","♉","சுக்கிரன்"],["மிதுனம்","Mithuna","♊","புதன்"],
["கடகம்","Kadaga","♋","சந்திரன்"],["சிம்மம்","Simha","♌","சூரியன்"],["கன்னி","Kanni","♍","புதன்"],
["துலாம்","Thulam","♎","சுக்கிரன்"],["விருச்சிகம்","Viruchigam","♏","செவ்வாய்"],["தனுசு","Dhanusu","♐","குரு"],
["மகரம்","Makaram","♑","சனி"],["கும்பம்","Kumbam","♒","சனி"],["மீனம்","Meenam","♓","குரு"]
];
const stars=["அஸ்வினி","பரணி","கார்த்திகை","ரோகிணி","மிருகசீரிஷம்","திருவாதிரை","புனர்பூசம்","பூசம்","ஆயில்யம்","மகம்","பூரம்","உத்திரம்","ஹஸ்தம்","சித்திரை","சுவாதி","விசாகம்","அனுஷம்","கேட்டை","மூலம்","பூராடம்","உத்திராடம்","திருவோணம்","அவிட்டம்","சதயம்","பூரட்டாதி","உத்திரட்டாதி","ரேவதி"];

export default function AstroClient(){
 const [menu,setMenu]=useState(false); const [selected,setSelected]=useState("மேஷம்"); const [dob,setDob]=useState(""); const [time,setTime]=useState(""); const [place,setPlace]=useState(""); const [result,setResult]=useState("");
 const generate=()=>{if(!dob||!time||!place){setResult("பிறந்த தேதி, நேரம் மற்றும் இடத்தை உள்ளிடுங்கள்.");return}setResult("உங்கள் பிறப்பு விவரங்கள் பெறப்பட்டன. துல்லியமான கிரக நிலை/ஜாதகக் கணக்கீட்டிற்கு ephemeris calculation service இணைக்கப்பட வேண்டும்.");};
 return <div>
 <header className="sticky top-0 z-50 border-b border-yellow-700/20 bg-black/50 backdrop-blur-xl">
  <div className="container flex h-16 items-center justify-between">
   <a href="#" className="text-xl font-bold"><span className="gold">✦</span> அகஸ்திய <span className="gold">ஜோதிடம்</span></a>
   <nav className="hidden gap-6 text-sm md:flex"><a href="#rasi">ராசிபலன்</a><a href="#stars">நட்சத்திரம்</a><a href="#jathagam">ஜாதகம்</a><a href="#porutham">பொருத்தம்</a></nav>
   <button className="md:hidden" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
  </div>
  {menu&&<nav className="container flex flex-col gap-4 border-t border-yellow-700/20 py-4 md:hidden"><a href="#rasi" onClick={()=>setMenu(false)}>ராசிபலன்</a><a href="#stars" onClick={()=>setMenu(false)}>நட்சத்திரம்</a><a href="#jathagam" onClick={()=>setMenu(false)}>ஜாதகம்</a><a href="#porutham" onClick={()=>setMenu(false)}>பொருத்தம்</a></nav>}
 </header>

 <main>
 <section className="container heroGlow flex min-h-[560px] flex-col items-center justify-center py-20 text-center">
  <div className="mb-5 rounded-full border border-yellow-600/30 bg-yellow-500/10 px-5 py-2 text-sm gold">✦ பாரம்பரியம் • நவீன தொழில்நுட்பம் ✦</div>
  <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-6xl">உங்கள் வாழ்க்கையின் <span className="gold">நட்சத்திரப் பாதை</span></h1>
  <p className="muted mt-6 max-w-2xl text-lg">ராசிபலன், நட்சத்திரம், ஜாதகம் மற்றும் திருமண பொருத்தம் — அனைத்தையும் ஒரே இடத்தில் எளிமையாக அறியுங்கள்.</p>
  <div className="mt-9 flex flex-wrap justify-center gap-3"><a href="#jathagam" className="rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 px-7 py-3 font-bold text-black">ஜாதகம் பார்க்க</a><a href="#rasi" className="rounded-full border border-yellow-600/40 px-7 py-3">ராசிபலன் பார்க்க</a></div>
  <div className="mt-14 text-6xl">☀️　🌙　🪐</div>
 </section>

 <section id="rasi" className="container py-16"><div className="mb-8 text-center"><p className="gold">TODAY'S ZODIAC</p><h2 className="text-3xl font-bold">இன்றைய ராசிபலன்</h2><p className="muted mt-2">ஒரு ராசியை தேர்வு செய்து பொதுவான பலனை பார்க்கவும்.</p></div>
 <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{rasigal.map(r=><button key={r[0]} onClick={()=>setSelected(r[0])} className={`card glass rounded-2xl p-5 text-center ${selected===r[0]?"border-yellow-500/70 bg-yellow-500/10":""}`}><div className="text-4xl">{r[2]}</div><div className="mt-2 font-bold">{r[0]}</div><div className="muted text-xs">{r[3]}</div></button>)}</div>
 <div className="glass mt-5 rounded-3xl p-6"><div className="flex items-center gap-3"><Star className="gold"/><h3 className="text-xl font-bold">{selected} — இன்றைய பலன்</h3></div><p className="muted mt-4 leading-7">இன்று திட்டமிட்டு செயல்படுவது நல்லது. வேலை மற்றும் தனிப்பட்ட விஷயங்களில் பொறுமையாக முடிவெடுக்கவும். செலவுகளை கவனமாக நிர்வகித்து, முக்கியமான உரையாடல்களில் தெளிவாக பேசுங்கள்.</p></div>
 </section>

 <section id="stars" className="bg-black/20 py-16"><div className="container"><div className="text-center"><p className="gold">27 NAKSHATRAS</p><h2 className="text-3xl font-bold">27 நட்சத்திரங்கள்</h2></div><div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9">{stars.map((s,i)=><div key={s} className="glass rounded-xl p-3 text-center text-sm"><span className="gold">✦</span><div className="mt-1">{s}</div><small className="muted">{i+1}</small></div>)}</div></div></section>

 <section id="jathagam" className="container py-16"><div className="grid gap-8 lg:grid-cols-2"><div><p className="gold">BIRTH CHART</p><h2 className="text-3xl font-bold">உங்கள் ஜாதகத்தை உருவாக்குங்கள்</h2><p className="muted mt-3 leading-7">பிறந்த விவரங்களை உள்ளிட்டு உங்கள் ஜாதகப் பதிவை தொடங்குங்கள்.</p><div className="glass mt-7 rounded-3xl p-6">
 <label className="muted text-sm">பிறந்த தேதி</label><input type="date" value={dob} onChange={e=>setDob(e.target.value)} className="mt-2 w-full rounded-xl border border-yellow-700/20 bg-black/30 p-3 text-white"/>
 <label className="muted mt-4 block text-sm">பிறந்த நேரம்</label><input type="time" value={time} onChange={e=>setTime(e.target.value)} className="mt-2 w-full rounded-xl border border-yellow-700/20 bg-black/30 p-3 text-white"/>
 <label className="muted mt-4 block text-sm">பிறந்த இடம்</label><input placeholder="உதா: Vellore, Tamil Nadu" value={place} onChange={e=>setPlace(e.target.value)} className="mt-2 w-full rounded-xl border border-yellow-700/20 bg-black/30 p-3 text-white"/>
 <button onClick={generate} className="mt-5 w-full rounded-xl bg-yellow-500 p-3 font-bold text-black">ஜாதக விவரங்களை உருவாக்கு</button>
 {result&&<p className="mt-4 rounded-xl bg-yellow-500/10 p-4 text-sm gold">{result}</p>}</div></div>
 <div className="glass flex min-h-[420px] items-center justify-center rounded-3xl p-8 text-center"><div><div className="text-8xl">🔮</div><h3 className="mt-5 text-2xl font-bold">வேத ஜோதிட கணிதம்</h3><p className="muted mt-3">லக்னம் • ராசி • நட்சத்திரம் • தசா • கிரக நிலைகள்</p><div className="mt-7 grid grid-cols-3 gap-3 text-sm"><div className="rounded-xl bg-white/5 p-4">☀️<br/>சூரியன்</div><div className="rounded-xl bg-white/5 p-4">🌙<br/>சந்திரன்</div><div className="rounded-xl bg-white/5 p-4">🪐<br/>கிரகங்கள்</div></div></div></div></div></section>

 <section id="porutham" className="bg-black/20 py-16"><div className="container"><div className="text-center"><p className="gold">MARRIAGE MATCH</p><h2 className="text-3xl font-bold">திருமண பொருத்தம்</h2><p className="muted mt-2">இருவரின் பிறந்த விவரங்களை வைத்து பொருத்தம் கணக்கிடும் module-க்கு இடம்.</p></div><div className="mx-auto mt-8 max-w-3xl glass rounded-3xl p-6"><div className="grid gap-4 sm:grid-cols-2"><input placeholder="மணமகன் பெயர்" className="rounded-xl border border-yellow-700/20 bg-black/30 p-3"/><input placeholder="மணமகள் பெயர்" className="rounded-xl border border-yellow-700/20 bg-black/30 p-3"/><input type="date" className="rounded-xl border border-yellow-700/20 bg-black/30 p-3"/><input type="date" className="rounded-xl border border-yellow-700/20 bg-black/30 p-3"/></div><button className="mt-5 w-full rounded-xl bg-yellow-500 p-3 font-bold text-black">பொருத்தம் கணக்கிடு</button></div></div></section>

 <section className="container py-16"><div className="grid gap-4 md:grid-cols-3"><div className="glass rounded-2xl p-6"><CalendarDays className="gold"/><h3 className="mt-4 text-xl font-bold">நல்ல நேரம்</h3><p className="muted mt-2">தினசரி முக்கிய நேரங்களை காட்டும் பகுதி.</p></div><div className="glass rounded-2xl p-6"><Moon className="gold"/><h3 className="mt-4 text-xl font-bold">சந்திர நிலை</h3><p className="muted mt-2">அன்றைய சந்திர ராசி மற்றும் திதி தகவல்கள்.</p></div><div className="glass rounded-2xl p-6"><Heart className="gold"/><h3 className="mt-4 text-xl font-bold">பரிகாரம்</h3><p className="muted mt-2">பாரம்பரிய ஜோதிட முறைகளில் கூறப்படும் பரிகார தகவல்கள்.</p></div></div></section>
 </main>
 <footer className="border-t border-yellow-700/20 bg-black/30 py-10"><div className="container flex flex-col justify-between gap-5 sm:flex-row"><div><div className="text-xl font-bold"><span className="gold">✦</span> அகஸ்திய ஜோதிடம்</div><p className="muted mt-2 text-sm">ஜோதிட தகவல்களை எளிமையாக அறிய ஒரு நவீன தளம்.</p></div><div className="muted text-sm">© 2026 Agasthiya Jothidam</div></div></footer>
 </div>
}