import React from 'react';
import { 
  TriangleAlert, 
  Search, 
  Scale, 
  Brain, 
  Flame, 
  Laptop, 
  LineChart, 
  Mic, 
  FileText,
  Link as LinkIcon,
  PlayCircle
} from 'lucide-react';

const SecurityPage: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto space-y-20">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#C9302C] mb-6 tracking-tight">
          AI工具的使用限制與資安注意事項
        </h1>
        <p className="text-brand-secondary font-medium text-lg md:text-xl max-w-2xl mx-auto">
          好用的工具通常也最鋒利。學會分辨「什麼能餵、什麼不能信」，保護公司的機密也保護你的專業
        </p>
      </div>

      {/* Case 1: Deloitte */}
      <div className="space-y-8">
        <div className="bg-[#FFEBEE] rounded-3xl p-8 text-center border border-red-100 shadow-sm">
           <div className="inline-block bg-[#FFCDD2] text-[#B71C1C] px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide">
              ⚠️ AI 幻覺真實案例
           </div>
           <div className="text-4xl md:text-6xl font-extrabold text-[#B71C1C] mb-4">
              NT$ 8,750,000
           </div>
           <p className="font-bold text-gray-800 text-lg md:text-xl">
              德勤 (Deloitte) AI 報告出包，被迫退還款項
           </p>
        </div>

        <div className="bg-[#FFF8E1] rounded-3xl p-8 border-l-8 border-[#B71C1C] shadow-sm relative overflow-hidden">
             {/* Decorative element */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
             
             <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#B71C1C] mb-6 flex items-center gap-2 justify-center md:justify-start">
                    <FileText className="w-6 h-6" /> 事件經過
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                    德勤澳洲分公司使用生成式 AI 協助政府撰寫報告時，內容充斥多處由 AI「幻覺」捏造的聯邦法院判決引文、錯誤引用的聯邦法官言論，以及引用不存在的學術論文或書籍。
                </p>
                <p className="text-gray-800 leading-relaxed font-bold border-t border-gray-200 pt-4 mt-2">
                    這不只是金錢損失，更凸顯了 AI 錯誤會規模化地損害企業信譽與專業判斷力。
                </p>
             </div>
        </div>
      </div>

      {/* Three Lines of Defense */}
      <div>
         <h2 className="text-3xl font-bold text-[#B71C1C] text-center mb-10">面對風險，我們必須建立三道防線</h2>
         <div className="grid md:grid-cols-3 gap-6">
            {/* 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#B71C1C] text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-4 text-[#B71C1C]">
                    <Search size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">實施人工查核</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    AI 產出的每一條引文、數據，都必須經過人類專家的二次驗證。
                </p>
            </div>
            {/* 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#B71C1C] text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-4 text-[#B71C1C]">
                    <Scale size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">確立責任歸屬</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    明確定義 AI 是工具，最終簽核者必須是 "人"，並承擔全責。
                </p>
            </div>
            {/* 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#B71C1C] text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-4 text-[#B71C1C]">
                    <Brain size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">心態定位</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    AI 是加速器，不是決策者。準確性仍是人類專業判斷的責任。
                </p>
            </div>
         </div>
      </div>

      {/* Video Placeholder 1 */}
      <div className="text-center">
          <h3 className="text-2xl font-bold text-[#B71C1C] mb-6 inline-block border-b-4 border-[#B71C1C] pb-1">事件影片</h3>
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg aspect-video flex items-center justify-center relative group cursor-pointer border-4 border-white">
              <img src="https://picsum.photos/seed/deloitte-flowchart/800/450" alt="Deloitte AI Fail" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 filter blur-[1px] group-hover:blur-0" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <PlayCircle size={48} className="text-[#B71C1C] ml-1" fill="currentColor" />
                 </div>
              </div>
          </div>
          <p className="text-right text-xs text-gray-500 mt-2 font-mono">影片為NotebookLM製作</p>
      </div>

      <div className="w-full h-px bg-red-200 my-16"></div>

      {/* Case 2: Samsung */}
      <div className="space-y-8">
        <div className="bg-[#FFF3E0] rounded-3xl p-8 text-center border border-orange-100 shadow-sm">
           <div className="inline-block bg-[#FFCCBC] text-[#D84315] px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide">
              ⚠️ AI 資安真實案例
           </div>
           <div className="text-3xl md:text-5xl font-extrabold text-[#BF360C] mb-4 flex flex-col md:flex-row items-center justify-center gap-2">
              <div className="flex items-center gap-2">
                  <Flame className="fill-orange-500 text-orange-600 w-10 h-10 md:w-12 md:h-12" /> 
                  不到 20 天，
              </div>
              <span>3 起外洩</span>
           </div>
           <p className="font-bold text-gray-800 text-lg md:text-xl mb-3">
              三星半導體導入 AI 的慘痛教訓：
           </p>
           <p className="text-[#BF360C] font-bold text-lg">
              一且輸入，即成外部 AI 的養分，且公司無法回收。
           </p>
        </div>

        <div className="bg-[#FFF8E1] rounded-3xl p-8 border-l-8 border-[#BF360C] shadow-sm relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#BF360C] mb-6 flex items-center gap-2 justify-center md:justify-start">
                    <TriangleAlert className="w-6 h-6" /> 事件經過
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                    三星半導體部門在導入 ChatGPT 後 20 天內，發生 3 起嚴重資料外洩。員工為求方便，將除錯代碼與良率數據上傳至外部伺服器。
                </p>
                <p className="text-gray-800 leading-relaxed font-bold border-t border-orange-200 pt-4 mt-2 text-justify">
                    資料已進入 AI 學習庫，無法執行回收。這起事件猶如給予專業服務業一個警示：雲端生成式 AI 不僅只是輔助工具，更是會將資料外送的系統。若一旦缺乏明確的使用邊界與治理機制，可能造成無法挽回的專業與商業風險。
                </p>
             </div>
        </div>
      </div>

      {/* Safety Drill */}
      <div>
         <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">情境演練：怎樣用才安全？</h2>
         <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-red-50 p-6 text-center border-b border-red-100">
                    <Laptop className="w-10 h-10 mx-auto text-[#B71C1C] mb-3" />
                    <h3 className="font-bold text-xl text-[#B71C1C]">程式除錯</h3>
                </div>
                <div className="p-6 space-y-5 flex-grow">
                    <div>
                        <div className="text-xs font-bold text-red-600 mb-1 bg-red-100 inline-block px-2 py-0.5 rounded">❌ 高風險</div>
                        <p className="text-sm text-gray-600 leading-snug mt-1">直接貼上整段包含核心演算法的原始碼。</p>
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                        <div className="text-xs font-bold text-green-700 mb-1 bg-green-100 inline-block px-2 py-0.5 rounded">⭕ 安全替代</div>
                        <p className="text-sm text-gray-600 leading-snug mt-1">將關鍵邏輯匿名化、去識別化後再詢問，或使用本地部署 AI。</p>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-red-50 p-6 text-center border-b border-red-100">
                    <LineChart className="w-10 h-10 mx-auto text-[#B71C1C] mb-3" />
                    <h3 className="font-bold text-xl text-[#B71C1C]">數據分析</h3>
                </div>
                <div className="p-6 space-y-5 flex-grow">
                    <div>
                        <div className="text-xs font-bold text-red-600 mb-1 bg-red-100 inline-block px-2 py-0.5 rounded">❌ 高風險</div>
                        <p className="text-sm text-gray-600 leading-snug mt-1">上傳真實的產品良率、製程參數 Excel 檔。</p>
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                        <div className="text-xs font-bold text-green-700 mb-1 bg-green-100 inline-block px-2 py-0.5 rounded">⭕ 安全替代</div>
                        <p className="text-sm text-gray-600 leading-snug mt-1">使用虛擬假資料測試公式邏輯，確認無誤後再於本地套用。</p>
                    </div>
                </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-red-50 p-6 text-center border-b border-red-100">
                    <Mic className="w-10 h-10 mx-auto text-[#B71C1C] mb-3" />
                    <h3 className="font-bold text-xl text-[#B71C1C]">會議紀錄</h3>
                </div>
                <div className="p-6 space-y-5 flex-grow">
                    <div>
                        <div className="text-xs font-bold text-red-600 mb-1 bg-red-100 inline-block px-2 py-0.5 rounded">❌ 高風險</div>
                        <p className="text-sm text-gray-600 leading-snug mt-1">上傳整段包含機密專案名稱與策略的錄音檔。</p>
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                        <div className="text-xs font-bold text-green-700 mb-1 bg-green-100 inline-block px-2 py-0.5 rounded">⭕ 安全替代</div>
                        <p className="text-sm text-gray-600 leading-snug mt-1">僅輸入模糊化後的摘要要點，不包含具體人名與專案代號。</p>
                    </div>
                </div>
            </div>
         </div>
      </div>

       {/* Video Placeholder 2 */}
       <div className="text-center">
          <h3 className="text-2xl font-bold text-[#B71C1C] mb-6 inline-block border-b-4 border-[#B71C1C] pb-1">事件影片</h3>
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg aspect-video flex items-center justify-center relative group cursor-pointer border-4 border-white">
              {/* Placeholder image representation */}
              <img src="https://picsum.photos/seed/internal-investigation/800/450" alt="Samsung Data Leak" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 filter blur-[1px] group-hover:blur-0" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <PlayCircle size={48} className="text-[#B71C1C] ml-1" fill="currentColor" />
                 </div>
              </div>
          </div>
          <p className="text-right text-xs text-gray-500 mt-2 font-mono">影片為NotebookLM製作</p>
      </div>


      {/* Further Reading */}
      <div className="pt-12 border-t border-gray-300">
         <h3 className="text-xl font-bold text-[#B71C1C] mb-8 flex items-center gap-2">
            <LinkIcon size={24} /> 延伸閱讀與資料來源
         </h3>
         <div className="bg-white rounded-xl p-8 shadow-inner border border-gray-100">
            <ul className="space-y-4 text-xs md:text-sm text-gray-600">
                <li className="flex gap-2 items-start">
                    <span className="text-[#B71C1C] font-bold">•</span>
                    <a href="https://apnews.com/article/australia-ai-errors-deloitte-ab54858680ffc4ae6555b31c8fb987f3" target="_blank" rel="noreferrer" className="hover:text-red-700 hover:underline break-all">
                        Deloitte Australia to partially refund $290,000 report filled with suspected AI-generated errors | AP News
                    </a>
                </li>
                <li className="flex gap-2 items-start">
                    <span className="text-[#B71C1C] font-bold">•</span>
                    <a href="https://www.bnext.com.tw/article/84780/australia-deloitte-ai" target="_blank" rel="noreferrer" className="hover:text-red-700 hover:underline break-all">
                        AI幻覺惹禍！Deloitte澳洲分公司亂刪判決、學術研究，被迫退還875萬報告費 | 數位時代
                    </a>
                </li>
                <li className="flex gap-2 items-start">
                    <span className="text-[#B71C1C] font-bold">•</span>
                    <a href="https://www.businessweekly.com.tw/management/blog/3019821" target="_blank" rel="noreferrer" className="hover:text-red-700 hover:underline break-all">
                        跨國企業也出包，德勤用AI產報告被爆幻覺一堆！AI垃圾正形成職場大災難 | 數位時代
                    </a>
                </li>
                <li className="flex gap-2 items-start">
                    <span className="text-[#B71C1C] font-bold">•</span>
                    <a href="https://www.digitimes.com.tw/tech/dt/n/shwnws.asp?id=0000726597_FXV679XP8IDSP18HR3ZHF" target="_blank" rel="noreferrer" className="hover:text-red-700 hover:underline break-all">
                        三星半導體部門ChatGPT使用遭限 員工怨內部AI難用 | DIGITIMES
                    </a>
                </li>
                <li className="flex gap-2 items-start">
                    <span className="text-[#B71C1C] font-bold">•</span>
                    <a href="https://www.digitimes.com.tw/tech/dt/n/shwnws.asp?id=0000660911_GV3LF27M0DYJOI2ZJ5Y85" target="_blank" rel="noreferrer" className="hover:text-red-700 hover:underline break-all">
                        三星引入ChatGPT不到20天 爆3件半導體機密資料外洩事故 | DIGITIMES
                    </a>
                </li>
                <li className="flex gap-2 items-start">
                    <span className="text-[#B71C1C] font-bold">•</span>
                    <a href="https://www.ithome.com.tw/news/156291" target="_blank" rel="noreferrer" className="hover:text-red-700 hover:underline break-all">
                        員工外洩內部機密！三星開放ChatGPT後出事緊急限縮使用 | iThome
                    </a>
                </li>
                <li className="flex gap-2 items-start">
                    <span className="text-[#B71C1C] font-bold">•</span>
                    <a href="https://www.infoq.cn/article/48HXL0qs8AowJxDgSpom" target="_blank" rel="noreferrer" className="hover:text-red-700 hover:underline break-all">
                    三星被曝芯片機密代碼遭 ChatGPT 泄露，引入不到 20 天就出 3 起事故，內部考慮重新禁用 | InfoQ
                    </a>
                </li>
                <li className="flex gap-2 items-start">
                    <span className="text-[#B71C1C] font-bold">•</span>
                    <a href="https://www.businesstoday.com.tw/article/category/183015/post/202304020018/" target="_blank" rel="noreferrer" className="hover:text-red-700 hover:underline break-all">
                        才導入ChatGPT不到20天...三星爆3起機密資料外洩！公司回應：加強內部監管 | 今周刊
                    </a>
                </li>
            </ul>
         </div>
      </div>

    </div>
  );
};

export default SecurityPage;