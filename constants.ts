import { SectionData } from './types';

export const SECTIONS: SectionData[] = [
  {
    id: 'autocad',
    tag: 'AI x 標準圖塊整合',
    title: 'AutoCAD 2025 智慧圖塊',
    imageAlt: 'AutoCAD 2025 Interface showing smart blocks',
    whyTitle: '為什麼你需要這個功能？',
    whyPoints: [
      '這是一套自動整理幾何物件的智慧系統。只需輸入 BCONVERT 指令，AI 就會自動幫你：',
      '偵測散落的線段（如家具、設備）',
      '一鍵批次轉換為「標準圖塊」',
      '大幅減少人工重複建立的時間 ⏳'
    ],
    ratings: {
      usability: {
        stars: 5,
        description: '僅需輸入 BCONVERT 並框選一個範例物件，AI 會自動偵測圖面所有相同的散亂圖形。確認後即可一鍵批次轉換為圖塊，無需繁雜的設定'
      },
      versatility: {
        stars: 4,
        description: '此功能目前僅針對「標準建築平面圖」有較佳訓練成果。含Text/MText或Hatch的物件辨識能力差，例：圖塊中包含文字無法視為同一物件轉換，且不支援3D。'
      },
      practicality: {
        stars: 4.5,
        description: '對幾何定義極嚴格。兩張椅子就算外觀相同，只要其中一線段有微小縫隙，AI 仍可能判為不同物件而漏選。'
      }
    }
  },
  {
    id: 'doxel',
    tag: 'AI x 品管、進度追蹤',
    title: 'Doxel AI',
    imageAlt: 'Doxel AI dashboard showing construction site analysis',
    whyTitle: '為什麼你需要導入 Doxel？',
    whyPoints: [
      '這是一套專注於「進度追蹤與品管」的自動化平台。只需進行現場掃描（360°/LiDAR），AI 就會自動幫你：',
      '全自動比對：將現場影像與 BIM 模型疊合分析',
      '預防重工：精確抓出安裝錯誤，避免拆掉重做 🛠️',
      '監控進度：生成即時儀表板，不再擔心專案延期 📉',
      '影片從20:00開始觀看'
    ],
    ratings: {
      usability: {
        stars: 4,
        description: '終端使用者的儀表板介面直觀、數據清晰，但系統運作高度依賴前期的資料整合（BIM 模型、P6 排程）與現場硬體佈建（360° 相機、LiDAR 或機器人巡檢），建置與維護的技術門檻較一般軟體高。'
      },
      versatility: {
        stars: 4.5,
        description: '技術在於「比對現場與模型」，因此極度受限於 BIM 模型的完整度與精確度。主要適用於機電複雜度高、工期緊迫的大型專案'
      },
      practicality: {
        stars: 0, // Represents "????" in the image
        description: '把人工回報轉為數據驗證，遠端即可精準追蹤「做多少算多少」，並提早發現錯誤避免重工。限制：在視線遮蔽處（高架地板下、天花板內、密集管線），AI 影像比對的正確性仍有待驗證。'
      }
    }
  },
  {
    id: 'bimgo',
    tag: 'AI x 品質管理',
    title: 'BIMGO',
    imageAlt: 'BIMGO interface showing checklist and analysis',
    whyTitle: '為什麼你需要這個功能？',
    whyPoints: [
      '這是一套懂模型、更懂台灣法規的 BIM 智慧大腦。它不只會看圖，還能幫你「讀書」與「除錯」：',
      '自動法規檢核：內建台灣最新建築法規，一鍵抓出設計違規。',
      '全能模型分析：自動讀取 BIM 元件屬性與衝突，生成施工性報告。',
      'AI 越教越聰明：可上傳自己的技術文件，讓 AI 學習你的專案標準 📚'
    ],
    ratings: {
      usability: {
        stars: 5,
        description: '將常見的檢核流程模組化，使用者可直接選取執行，但若需設計客製化流程仍具一定門檻。'
      },
      versatility: {
        stars: 3.5,
        description: '目前功能以品質檢查與法規審視為主，建模、自動數量計算與施工性檢討等功能仍在開發中。'
      },
      practicality: {
        stars: 4,
        description: '具備自動化檢核與法規比對潛力，但整體流程與工具仍在發展，暫難應對不同階段的複雜品質檢核需求。'
      }
    }
  },
  {
    id: 'm5',
    tag: 'AI x 自動建模',
    title: 'M5智應部 自研 AI-BIM 自動化建模框架',
    imageAlt: 'M5 Smart Department coding interface and 3D model generation',
    whyTitle: '為什麼你需要這個功能？',
    whyPoints: [
      '這是 M5智應部 獨家研發的智慧建模框架。不再需要手動繪製每一條管線，現在透過文字對話，AI 就能幫你：',
      '聽懂指令：整合 AI x BIM x MCP 技術，用「語意」就能控制模型 🗣️',
      '自動建圖：複雜的「冰水主機房」也能一鍵自動生成',
      '全流程自動化：從理解需求到產出幾何圖形，讓工程師專注於設計思考 ✨'
    ],
    ratings: {
      usability: {
        stars: 4.5,
        description: '尚處於實驗性質系統，操作需理解 Revit API、MCP 架構與模型語意資料結構。流程以指令與程式模組為主，目前適合開發背景的 BIM 工程師使用。'
      },
      versatility: {
        stars: 4,
        description: '目前聚焦於冰水機房自動建模，但框架可延伸至其他機電系統，如冷卻水、消防或電氣配管；具可擴展潛力但尚未模組化完成。'
      },
      practicality: {
        stars: 5,
        description: '已能自動生成冰水主機、幫浦與管線佈局，並執行碰撞檢查與節點連接；惟穩定性與容錯機制仍待強化，實務應用尚處實驗性質。'
      }
    }
  }
];