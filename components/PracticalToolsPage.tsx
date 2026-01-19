import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  BrainCircuit, 
  Zap, 
  HardHat, 
  Search,
  Plus
} from 'lucide-react';

const PracticalToolsPage: React.FC = () => {
  const [startChatAnimation, setStartChatAnimation] = useState(false);
  const chatSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartChatAnimation(true);
          observer.disconnect(); // Trigger only once
        }
      },
      { threshold: 0.3 }
    );

    if (chatSectionRef.current) {
      observer.observe(chatSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 tracking-tight">
          AI在工作中的實用小工具介紹
        </h1>
        <p className="text-gray-500 text-sm md:text-base mb-2">
          給秘書與工地夥伴的最強外掛：
        </p>
        <p className="text-brand-secondary font-medium mb-10">
          資料有憑有據、自動釐清需求、幫你整理成完美報告。
        </p>
        
        <button className="bg-[#8B2323] hover:bg-[#721c1c] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg flex items-center gap-2 mx-auto transition-all transform hover:scale-105">
          體驗未來的搜尋方式 <Sparkles size={20} className="text-yellow-300" />
        </button>
      </div>

      {/* Comparison Flow */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-24">
        <div className="text-center opacity-50 relative group">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-800 -rotate-3 z-10"></div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">Just Chatting</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            瞎掰、資訊零散、無來源<br/>需要人工二次查證
          </p>
        </div>

        <ArrowRight size={40} className="text-brand-primary rotate-90 md:rotate-0" />

        <div className="text-center relative pl-6 border-l-4 border-brand-primary">
          <h3 className="text-3xl font-bold text-brand-primary mb-2">Deep Research</h3>
          <p className="text-xs text-gray-600 font-medium leading-relaxed">
            資料有憑有據、自動釐清需求<br/>直接產出可用的完美報告
          </p>
        </div>
      </div>

      {/* How to Enable */}
      <div className="mb-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-brand-primary mb-4">如何開啟深度研究模式？</h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Gemini Card */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-red-100 flex flex-col">
            <h3 className="text-2xl font-bold text-[#8B2323] mb-4 text-center">Gemini Pro</h3>
            <div className="bg-gray-900 rounded-lg p-4 mb-4 flex-grow relative overflow-hidden text-gray-300 text-xs font-mono">
               {/* Mock UI */}
               <div className="flex h-40">
                  <div className="w-1/4 border-r border-gray-700 p-2 flex flex-col gap-2">
                      <div className="w-full h-2 bg-gray-700 rounded"></div>
                      <div className="w-full h-8 bg-gray-800 rounded border border-red-500/50 flex items-center justify-center relative">
                         <span className="text-[10px] text-white">工具</span>
                         <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full text-white flex items-center justify-center text-[10px] font-bold">1</div>
                      </div>
                  </div>
                  <div className="w-3/4 p-2 relative">
                      <div className="absolute top-10 left-4 bg-[#2A2A2A] p-2 rounded border border-gray-600 shadow-xl w-32">
                          <div className="flex items-center gap-2 mb-1 p-1 bg-blue-900/30 rounded border border-red-500">
                             <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                             <span className="text-white">Deep Research</span>
                             <div className="absolute -right-2 -top-2 w-4 h-4 bg-red-600 rounded-full text-white flex items-center justify-center text-[10px] font-bold">2</div>
                          </div>
                          <div className="flex items-center gap-2 p-1 opacity-50">
                             <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                             <span>建立圖像</span>
                          </div>
                      </div>
                  </div>
               </div>
               <div className="absolute bottom-2 left-2 text-gray-500">問問 Gemini</div>
            </div>
            <div className="space-y-2">
               <div className="flex items-center gap-3">
                  <span className="bg-[#B71C1C] text-white text-xs px-2 py-1 rounded font-bold">Step 1</span>
                  <span className="text-sm text-gray-700 font-medium">點擊對話框左側的「工具」</span>
               </div>
               <div className="flex items-center gap-3">
                  <span className="bg-[#B71C1C] text-white text-xs px-2 py-1 rounded font-bold">Step 2</span>
                  <span className="text-sm text-gray-700 font-medium">選擇「Deep Research」</span>
               </div>
            </div>
          </div>

          {/* ChatGPT Card */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-red-100 flex flex-col">
            <h3 className="text-2xl font-bold text-[#8B2323] mb-4 text-center">ChatGPT</h3>
            <div className="bg-gray-900 rounded-lg p-4 mb-4 flex-grow relative overflow-hidden text-gray-300 text-xs font-mono">
               {/* Mock UI */}
               <div className="flex h-40 flex-col justify-end">
                  <div className="w-full bg-[#2A2A2A] rounded-lg p-2 flex items-center gap-2 border border-gray-700">
                      <div className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center relative border-red-500">
                         <Plus size={14} />
                         <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-600 rounded-full text-white flex items-center justify-center text-[10px] font-bold">1</div>
                      </div>
                      <span className="text-gray-500">提出任何問題</span>
                  </div>
                  <div className="absolute bottom-12 left-4 bg-[#1E1E1E] p-2 rounded-lg border border-gray-600 shadow-xl w-40">
                      <div className="p-1 mb-1 flex items-center gap-2 text-gray-400">
                        <div className="w-3 h-3 border border-gray-400 rounded"></div>
                        新增照片和檔案
                      </div>
                      <div className="p-1 mb-1 flex items-center gap-2 bg-gray-800 rounded border border-red-500 text-white relative">
                        <Search size={12} />
                        深入研究
                        <div className="absolute -right-2 -top-2 w-4 h-4 bg-red-600 rounded-full text-white flex items-center justify-center text-[10px] font-bold">2</div>
                      </div>
                  </div>
               </div>
            </div>
            <div className="space-y-2">
               <div className="flex items-center gap-3">
                  <span className="bg-[#B71C1C] text-white text-xs px-2 py-1 rounded font-bold">Step 1</span>
                  <span className="text-sm text-gray-700 font-medium">點擊輸入框左側的「＋」</span>
               </div>
               <div className="flex items-center gap-3">
                  <span className="bg-[#B71C1C] text-white text-xs px-2 py-1 rounded font-bold">Step 2</span>
                  <span className="text-sm text-gray-700 font-medium">點選「深入研究」</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Need This */}
      <div className="mb-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-brand-primary mb-4">為什麼你需要「深度研究」？</h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Reason 1 */}
            <div className="bg-[#FAF0F0] rounded-xl p-8 relative overflow-hidden group hover:bg-[#F5E6E6] transition-colors">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#E57373]"></div>
                <div className="mb-4">
                    <ShieldCheck className="w-12 h-12 text-[#E57373]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">1. 拒絕瞎掰，每一句都有憑有據</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    一般 AI 有時會一本正經地胡說八道。但在「深度研究」模式下，它會像一位嚴謹的律師，列出所有參考來源的網站連結。
                </p>
                <div className="text-[#C9302C] text-xs font-bold flex gap-2 items-start">
                    <span>👉</span>
                    工地法規、廠商報價、會議資料，絕對不造假，讓您查證超安心。
                </div>
            </div>

            {/* Reason 2 */}
            <div className="bg-[#FAF0F0] rounded-xl p-8 relative overflow-hidden group hover:bg-[#F5E6E6] transition-colors">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#5C6BC0]"></div>
                <div className="mb-4">
                    <BrainCircuit className="w-12 h-12 text-[#5C6BC0]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">2. 不只是回答，還會幫你「想」</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                   不知道該怎麼問才專業？沒關係。當你提出模糊的問題時，它會反過來問你問題，幫你把需求定義清楚。
                </p>
                <div className="text-[#C9302C] text-xs font-bold flex gap-2 items-start">
                    <span>👉</span>
                    就像一位資深顧問，引導你說出重點，讓結果比你想的還完整。
                </div>
            </div>
        </div>
      </div>

      {/* Efficiency Revolution */}
      <div className="bg-[#FFF8F0] rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden border border-orange-100">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-brand-primary font-bold text-sm bg-white px-4 py-1 rounded-full shadow-sm">
            <Zap size={16} fill="currentColor" /> 功能亮點
        </div>
        
        <h2 className="text-3xl font-bold text-center text-brand-primary mt-6 mb-12">效率革命</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
            <div className="text-center relative">
                <span className="text-4xl text-gray-400 font-light relative inline-block">
                    10 天
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-500"></div>
                </span>
                <p className="text-gray-500 text-lg mt-2">人工搜尋整理</p>
            </div>
            
            <ArrowRight size={48} className="text-brand-primary hidden md:block" />
            <ArrowRight size={32} className="text-brand-primary rotate-90 md:hidden" />

            <div className="text-center">
                 <span className="text-5xl font-bold text-brand-primary">10 min</span>
                 <p className="text-brand-primary text-xl font-bold mt-2">深度研究</p>
                 <div className="w-1 h-8 bg-brand-primary mx-auto mt-2 hidden md:block"></div>
            </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-600 mb-6 leading-relaxed">
                不管是整理供應商清單，還是查詢最新的建築法規，深度研究會自動將網路上雜亂的資訊，系統性地整理成結構分明的文章或表格。
            </p>
            <div className="text-left inline-block space-y-2 text-sm md:text-base text-gray-700">
                <div className="flex items-center gap-2">
                    <span className="text-brand-primary font-bold">✓</span> 告別開十幾個視窗複製貼上
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-brand-primary font-bold">✓</span> 自動去蕪存菁，整理重點
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-brand-primary font-bold">✓</span> 直接生成有理有據的專業報告
                </div>
            </div>
        </div>
      </div>

      {/* Real Battle Chat (Animated) */}
      <div className="mb-24" ref={chatSectionRef}>
        <div className="relative border-2 border-dashed border-red-300 rounded-3xl p-6 md:p-10 bg-white">
             <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#B71C1C] text-white px-6 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2 whitespace-nowrap z-10">
                <Sparkles size={16} /> 實戰：AI 如何幫你釐清需求？
             </div>

             <div className="space-y-6 mt-6">
                {/* User Message */}
                <div 
                    className={`flex gap-4 transition-all duration-700 ease-out transform ${startChatAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <HardHat size={20} className="text-gray-600" />
                    </div>
                    <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none text-gray-700 shadow-sm max-w-[90%]">
                        <div className="text-xs text-gray-500 mb-1 font-bold">使用者提問：</div>
                        「幫我找台北南港適合外送工地的便當店。」
                    </div>
                </div>

                {/* AI Reply */}
                <div 
                    className={`flex flex-row-reverse gap-4 transition-all duration-700 ease-out transform ${startChatAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: '1200ms' }}
                >
                     <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center flex-shrink-0">
                        <Sparkles size={20} className="text-brand-primary" />
                     </div>
                     <div className="bg-[#F2D7D5] p-5 rounded-2xl rounded-tr-none text-gray-800 shadow-sm max-w-[90%]">
                        <div className="text-xs text-brand-primary mb-2 font-bold flex items-center gap-1">
                            🤖 AI 深度研究回覆 (釐清)：
                        </div>
                        <p className="text-sm leading-relaxed mb-2">
                            「沒問題。為了精準推薦，我需要確認：
                        </p>
                        <ol className="list-decimal list-inside text-sm space-y-1 font-medium bg-white/50 p-2 rounded-lg">
                            <li>預算範圍？($100內/$150內)</li>
                            <li>工人數量？(決定是否需大量訂購)</li>
                            <li>口味偏好？(是否需重油重鹹補充體力)」</li>
                        </ol>
                     </div>
                </div>

                {/* Final Result Box */}
                <div 
                    className={`mx-auto max-w-md bg-white border-2 border-orange-200 rounded-xl p-4 text-center shadow-sm transition-all duration-700 ease-out transform ${startChatAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: '3000ms' }}
                >
                    <div className="text-orange-600 font-bold text-sm mb-1 flex items-center justify-center gap-1">
                        <Zap size={14} fill="currentColor" /> 最終產出
                    </div>
                    <p className="font-bold text-gray-800 text-sm">
                        生成一份包含店家連結、價格、外送門檻的比較表格。
                    </p>
                </div>
             </div>
        </div>
      </div>

      {/* Who Needs This */}
      <div className="mb-12">
        <div className="text-center mb-10">
            <h2 className="text-lg font-bold text-[#B71C1C] flex items-center justify-center gap-2">
                <span className="text-lg">♦</span> 誰最需要這個功能？
            </h2>
            <div className="w-full h-px bg-red-200 mt-4 max-w-xs mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Persona 1 */}
            <div className="bg-[#FFFBF5] rounded-3xl p-8 border-l-8 border-[#FBC02D] shadow-sm flex flex-col h-full">
                <div className="mb-4 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm text-3xl">
                    🚧
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">工地同仁</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    遇到冷門規範與知識別再大海撈針。AI 直接找出法規公文，條列重點讓你帶去現場對照。
                </p>
            </div>

            {/* Persona 2 */}
            <div className="bg-[#FFFBF5] rounded-3xl p-8 border-l-8 border-[#795548] shadow-sm flex flex-col h-full">
                 <div className="mb-4 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm text-3xl">
                    💼
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">行政秘書</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    搞不懂老闆指令？AI 幫你擬定反問清單，並自動生成含預約連結的完整行程表。
                </p>
            </div>
        </div>
      </div>

    </div>
  );
};

export default PracticalToolsPage;