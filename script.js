// --- 1. ポケモンデータの定義 ---

// --- A. 食材タイプポケモンデータ (Y軸: 食材確率) ---
const pokemonDataIngredient = [
    { name: "フシギバナ", file: "3.webp", skill: "食材ゲットS", assistTime: 2800, ingredientRate: 26.60, ingredientsText: "ミツ トマト ポテト" },
    { name: "リザードン", file: "6.webp", skill: "食材ゲットS", assistTime: 2400, ingredientRate: 22.40, ingredientsText: "ミート ジンジャー ハーブ" },
    { name: "カメックス", file: "9.webp", skill: "食材ゲットS", assistTime: 2800, ingredientRate: 27.50, ingredientsText: "ミルク カカオ ミート" },
    { name: "ダグトリオ", file: "51.webp", skill: "エナジーチャージS(固定)", assistTime: 2650, ingredientRate: 19.00, ingredientsText: "トマト ねぎ マメ" },
    { name: "ウツボット", file: "71.webp", skill: "げんきチャージS", assistTime: 2800, ingredientRate: 23.30, ingredientsText: "トマト ポテト ねぎ" },
    { name: "ゴローニャ", file: "76.webp", skill: "エナジーチャージS(ランダム)", assistTime: 3100, ingredientRate: 28.00, ingredientsText: "マメ ポテト きのこ" },
    { name: "カモネギ", file: "83.webp", skill: "エナジーチャージS(固定)", assistTime: 3000, ingredientRate: 16.00, ingredientsText: "ねぎ ミート ジンジャー" },
    { name: "ゲンガー", file: "94.webp", skill: "エナジーチャージS(ランダム)", assistTime: 2200, ingredientRate: 16.10, ingredientsText: "ハーブ きのこ オイル" },
    { name: "ラッキー", file: "113-1.png", skill: "げんきオールS", assistTime: 2900, ingredientRate: 23.60, ingredientsText: "たまご ポテト ミツ" },
    { name: "ガルーラ", file: "115.webp", skill: "食材ゲットS", assistTime: 2650, ingredientRate: 22.20, ingredientsText: "ジンジャー ポテト マメ" },
    { name: "バリヤード", file: "122.webp", skill: "ものまね(スキルコピー)", assistTime: 2800, ingredientRate: 21.60, ingredientsText: "トマト ポテト ねぎ" },
    { name: "カイロス", file: "127.webp", skill: "エナジーチャージS(固定)", assistTime: 2400, ingredientRate: 21.60, ingredientsText: "ミツ りんご ミート" },
    { name: "メタモン", file: "132.webp", skill: "へんしん(スキルコピー)", assistTime: 3500, ingredientRate: 20.10, ingredientsText: "オイル ねぎ しっぽ" },
    { name: "カイリュー", file: "149.webp", skill: "げんきチャージS", assistTime: 2600, ingredientRate: 26.40, ingredientsText: "ハーブ コーン オイル" },
    { name: "ヌオー", file: "195.webp", skill: "げんきチャージS", assistTime: 3400, ingredientRate: 19.00, ingredientsText: "きのこ ポテト ミート" },
    { name: "デリバード", file: "225.webp", skill: "プレゼント(食材ゲットS)", assistTime: 2500, ingredientRate: 18.80, ingredientsText: "たまご りんご カカオ" },
    { name: "ハピナス", file: "242.webp", skill: "げんきオールS", assistTime: 3100, ingredientRate: 23.80, ingredientsText: "たまご ポテト ミツ" },
    { name: "バンギラス", file: "248.webp", skill: "げんきチャージS", assistTime: 2700, ingredientRate: 26.60, ingredientsText: "ジンジャー マメ ミート" },
    { name: "クチート", file: "303.webp", skill: "かいりきバサミ(食材セレクトS)", assistTime: 3200, ingredientRate: 20.40, ingredientsText: "オイル コーン トマト" },
    { name: "ボスゴドラ", file: "306.webp", skill: "げんきチャージS", assistTime: 3000, ingredientRate: 28.50, ingredientsText: "ミート コーヒー マメ" },
    { name: "フライゴン", file: "330.webp", skill: "エナジーチャージS(固定)", assistTime: 2700, ingredientRate: 17.20, ingredientsText: "アボカド ハーブ マメ" },
    { name: "アブソル", file: "359.webp", skill: "エナジーチャージS(固定)", assistTime: 2950, ingredientRate: 17.80, ingredientsText: "カカオ りんご きのこ" },
    { name: "レントラー", file: "405.webp", skill: "料理パワーアップS", assistTime: 2400, ingredientRate: 20.00, ingredientsText: "トマト オイル コーヒー" },
    { name: "ドクロッグ", file: "454.webp", skill: "エナジーチャージS(固定)", assistTime: 3400, ingredientRate: 22.90, ingredientsText: "オイル ミート" },
    { name: "ユキノオー", file: "460.webp", skill: "エナジーチャージS(ランダム)", assistTime: 3000, ingredientRate: 25.00, ingredientsText: "トマト たまご きのこ" },
    { name: "ダークライ", file: "491.webp", skill: "ナイトメア(エナジーチャージM)", assistTime: 2900, ingredientRate: 19.20, ingredientsText: "" }, 
    { name: "パンプジン（中玉）", file: "711.webp", skill: "エナジーチャージS(固定)", assistTime: 3200, ingredientRate: 13.00, ingredientsText: "カボチャ マメ ポテト" },
    { name: "クワガノン", file: "738.webp", skill: "エナジーチャージS(固定)", assistTime: 2800, ingredientRate: 19.40, ingredientsText: "コーヒー キノコ ミツ" },
    { name: "キテルグマ", file: "760.webp", skill: "エナジーチャージS(ランダム)", assistTime: 2800, ingredientRate: 22.90, ingredientsText: "コーン ミート たまご" },
    { name: "キュワワー", file: "764.webp", skill: "げんきエールS", assistTime: 2500, ingredientRate: 16.70, ingredientsText: "コーン ジンジャー カカオ" },
    { name: "ウッウ", file: "845.webp", skill: "料理チャンスS", assistTime: 2700, ingredientRate: 16.50, ingredientsText: "オイル ポテト たまご" },
    { name: "マスカーニャ", file: "908.webp", skill: "料理パワーアップS", assistTime: 2600, ingredientRate: 19.00, ingredientsText: "ポテト ミルク ジンジャー" },
    { name: "ラウドボーン", file: "911.webp", skill: "げんきチャージS", assistTime: 2700, ingredientRate: 26.80, ingredientsText: "りんご ミート ハーブ" },
    { name: "ウェーニバル", file: "914.webp", skill: "エナジーチャージM", assistTime: 2600, ingredientRate: 23.20, ingredientsText: "マメ ねぎ オイル" },
    { name: "ドオー", file: "980.webp", skill: "げんきチャージS", assistTime: 3500, ingredientRate: 20.80, ingredientsText: "カカオ コーヒー ポテト" },
];

// --- B. スキルタイプポケモンデータ (Y軸: スキル確率) ---
const pokemonDataSkill = [
    { name: "プクリン", file: "40.webp", skill: "げんきオールS", assistTime: 2900, skillRate: 4.00, ingredientsText: "ミツ オイル カカオ" },
    { name: "ペルシアン", file: "53.webp", skill: "ゆめのかけらゲットS(固定)", assistTime: 2800, skillRate: 4.40, ingredientsText: "ミルク ミート" },
    { name: "ゴルダック", file: "55.webp", skill: "エナジーチャージM", assistTime: 3400, skillRate: 12.50, ingredientsText: "カカオ りんご ミート" },
    { name: "ウインディ", file: "59.webp", skill: "おてつだいサポートS", assistTime: 2500, skillRate: 4.90, ingredientsText: "ハーブ ミート ミルク" },
    { name: "ヤドラン", file: "80.webp", skill: "げんきエールS", assistTime: 3800, skillRate: 8.00, ingredientsText: "カカオ しっぽ トマト" },
    { name: "シャワーズ", file: "134.webp", skill: "食材ゲットS", assistTime: 3100, skillRate: 6.10, ingredientsText: "ミルク カカオ ミート" },
    { name: "サンダース", file: "135.webp", skill: "おてつだいサポートS", assistTime: 2200, skillRate: 3.90, ingredientsText: "ミルク カカオ ミート" },
    { name: "ブースター", file: "136.webp", skill: "料理パワーアップS", assistTime: 2700, skillRate: 5.20, ingredientsText: "ミルク カカオ ミート" },
    { name: "デンリュウ", file: "181.webp", skill: "エナジーチャージM", assistTime: 2500, skillRate: 4.70, ingredientsText: "ハーブ たまご" },
    { name: "ウソッキー", file: "185.webp", skill: "エナジーチャージM", assistTime: 4000, skillRate: 7.20, ingredientsText: "トマト マメ きのこ" },
    { name: "エーフィ", file: "196.webp", skill: "エナジーチャージM", assistTime: 2400, skillRate: 4.40, ingredientsText: "ミルク カカオ ミート" },
    { name: "ブラッキー", file: "197.webp", skill: "つきのひかり(げんきチャージS)", assistTime: 3200, skillRate: 10.10, ingredientsText: "ミルク カカオ ミート" },
    { name: "ヤドキング", file: "199.webp", skill: "げんきエールS", assistTime: 3400, skillRate: 8.70, ingredientsText: "カカオ しっぽ トマト" },
    { name: "ソーナンス", file: "202.webp", skill: "げんきエールS", assistTime: 3500, skillRate: 8.20, ingredientsText: "りんご きのこ オイル" },
    { name: "ヘラクロス", file: "214.webp", skill: "食材ゲットS", assistTime: 2300, skillRate: 4.70, ingredientsText: "ミツ きのこ ミート" },
    { name: "ライコウ", file: "243.webp", skill: "おてつだいブースト(でんき)", assistTime: 2100, skillRate: 1.90, ingredientsText: "ミート ハーブ ねぎ" },
    { name: "エンテイ", file: "244.webp", skill: "おてつだいブースト(ほのお)", assistTime: 2400, skillRate: 2.30, ingredientsText: "オイル トマト きのこ" },
    { name: "スイクン", file: "245.webp", skill: "おてつだいブースト(みず)", assistTime: 2700, skillRate: 2.60, ingredientsText: "りんご オイル コーン" },
    { name: "ジュカイン", file: "254.webp", skill: "きのみバースト", assistTime: 2300, skillRate: 3.00, ingredientsText: "たまご コーヒー ねぎ" },
    { name: "サーナイト", file: "282.webp", skill: "げんきオールS", assistTime: 2400, skillRate: 4.20, ingredientsText: "りんご コーン ねぎ" },
    { name: "ヤミラミ", file: "302.webp", skill: "ゆめのかけらゲットS(ランダム)", assistTime: 3600, skillRate: 6.80, ingredientsText: "オイル きのこ カカオ" },
    { name: "プラスル", file: "311.webp", skill: "プラス(食材ゲットS)", assistTime: 2400, skillRate: 4.90, ingredientsText: "コーヒー ねぎ ミルク" },
    { name: "マイナン", file: "312.webp", skill: "マイナス(料理パワーアップS)", assistTime: 2400, skillRate: 4.90, ingredientsText: "ミツ たまご ミルク" },
    { name: "マルノーム", file: "317.webp", skill: "ゆめのかけらゲットS(ランダム)", assistTime: 3500, skillRate: 7.00, ingredientsText: "マメ きのこ ミツ" },
    { name: "フワライド", file: "426.webp", skill: "たくわえる(エナジーチャージS)", assistTime: 2500, skillRate: 6.30, ingredientsText: "コーン オイル ポテト" },
    { name: "ドンカラス", file: "430.webp", skill: "きょううん(食材セレクトS)", assistTime: 3200, skillRate: 6.70, ingredientsText: "コーヒー マメ ハーブ" },
    { name: "ルカリオ", file: "448.webp", skill: "ゆめのかけらゲットS(固定)", assistTime: 2600, skillRate: 5.10, ingredientsText: "オイル ポテト たまご" },
    { name: "ジバコイル", file: "462.webp", skill: "料理パワーアップS", assistTime: 3100, skillRate: 6.20, ingredientsText: "オイル ハーブ" },
    { name: "トゲキッス", file: "468.webp", skill: "ゆびをふる", assistTime: 2600, skillRate: 5.30, ingredientsText: "たまご ジンジャー カカオ" },
    { name: "リーフィア", file: "470.webp", skill: "げんきエールS", assistTime: 3000, skillRate: 6.90, ingredientsText: "ミルク カカオ ミート" },
    { name: "グレイシア", file: "471.webp", skill: "料理パワーアップS", assistTime: 3200, skillRate: 6.30, ingredientsText: "ミルク カカオ ミート" },
    { name: "エルレイド", file: "475.webp", skill: "おてつだいサポートS", assistTime: 2400, skillRate: 5.40, ingredientsText: "りんご コーン ねぎ" },
    { name: "クレセリア", file: "488.webp", skill: "みかづきのいのり(げんきオールS)", assistTime: 2300, skillRate: 4.10, ingredientsText: "ジンジャー カカオ トマト" },
    { name: "ダークライ", file: "491.webp", skill: "ナイトメア(エナジーチャージM)", assistTime: 2900, skillRate: 2.30, ingredientsText: "" },
    { name: "イワパレス", file: "558.webp", skill: "食材セレクトS", assistTime: 3200, skillRate: 6.40, ingredientsText: "アボカド ポテト オイル" },
    { name: "ウォーグル", file: "628.webp", skill: "きのみバースト", assistTime: 2400, skillRate: 3.50, ingredientsText: "ミート コーン コーヒー" },
    { name: "ニンフィア", file: "700.webp", skill: "げんきオールS", assistTime: 2600, skillRate: 4.00, ingredientsText: "ミルク カカオ ミート" },
    { name: "デデンネ", file: "702.webp", skill: "料理チャンスS", assistTime: 2500, skillRate: 4.50, ingredientsText: "りんご カカオ コーン" },
    { name: "ミミッキュ", file: "778.webp", skill: "ばけのかわ(きのみバースト)", assistTime: 2500, skillRate: 3.50, ingredientsText: "りんご コーヒー きのこ" },
    { name: "ストリンダー（ハイ/ロー）", file: "849.webp", skill: "プラス(食材ゲットS)/マイナス(料理パワーアップS)", assistTime: 3100, skillRate: 6.40, ingredientsText: "ミルク りんご ねぎ" },
    { name: "パーモット", file: "923.webp", skill: "げんきオールS", assistTime: 2400, skillRate: 3.90, ingredientsText: "カカオ ミルク たまご" },
    { name: "イーブイ（ハロウィン）", file: "ハロウィンイーブイ.webp", skill: "食材ゲットS", assistTime: 3200, skillRate: 4.60, ingredientsText: "カボチャ カカオ ミルク" },
    { name: "ピカチュウ（ホリデー）", file: "ホリデーピカチュウ.webp", skill: "ゆめのかけらゲットS(固定)", assistTime: 2500, skillRate: 4.20, ingredientsText: "りんご ジンジャー たまご" },
];


// データをPlotlyの形式に変換
const x_data_ingredient = pokemonDataIngredient.map(p => p.assistTime);
const y_data_ingredient = pokemonDataIngredient.map(p => p.ingredientRate);
const pokemon_names_ingredient = pokemonDataIngredient.map(p => p.name);

const x_data_skill = pokemonDataSkill.map(p => p.assistTime);
const y_data_skill = pokemonDataSkill.map(p => p.skillRate);
const pokemon_names_skill = pokemonDataSkill.map(p => p.name);

// 全てのデータを統合したマップ（ホバー用）
const allPokemonData = {
    ingredient: pokemonDataIngredient,
    skill: pokemonDataSkill
};


// --- 2. グラフ設定の定義 ---

// 食材タイプの色 (見やすいオレンジ)
const COLOR_INGREDIENT = 'rgb(255, 165, 0)'; 
// スキルタイプの色 (見やすい青)
const COLOR_SKILL = 'rgb(0, 150, 255)';

// 共通のトレース設定
const commonTrace = {
  mode: 'markers+text',
  type: 'scatter',
  name: 'ポケモン散布図',
  textposition: 'top center',
  textfont: {
    family: 'Arial, sans-serif',
    size: 10,
    color: '#333'
  },
  marker: {
    size: 15,
    opacity: 0.8,
    line: {
      color: 'rgba(255, 255, 255, 1)',
      width: 1
    }
  },
  hoverinfo: 'none',
};

// 食材タイプグラフのトレース
const traceIngredient = {
    ...commonTrace,
    x: x_data_ingredient,
    y: y_data_ingredient,
    text: pokemon_names_ingredient,
    marker: {...commonTrace.marker, color: COLOR_INGREDIENT} 
};

// スキルタイプグラフのトレース
const traceSkill = {
    ...commonTrace,
    x: x_data_skill,
    y: y_data_skill,
    text: pokemon_names_skill,
    marker: {...commonTrace.marker, color: COLOR_SKILL} 
};


// 共通レイアウト設定
const commonLayout = {
    plot_bgcolor: '#FFFFFF',
    paper_bgcolor: '#FFFFFF',
    hovermode: 'closest', 
    responsive: true
};

// 食材タイプグラフのレイアウト
const layoutIngredient = {
    ...commonLayout,
    // タイトルを修正
    title: {
        text: '散布図_食材タイプ',
        font: { size: 26, color: COLOR_INGREDIENT } // 色をオレンジに変更
    },
    xaxis: {
        title: { text: 'おてつだい時間 (秒)', font: { size: 18 } },
        range: [2000, Math.max(...x_data_ingredient) * 1.05],
        rangemode: 'tozero', 
        tickfont: { size: 14 },
        gridcolor: '#e5e5e5',
        zerolinecolor: '#cccccc',
    },
    yaxis: {
        title: { text: '食材確率 (%)', font: { size: 18 } },
        range: [10, Math.max(...y_data_ingredient) * 1.05],
        rangemode: 'tozero',
        tickfont: { size: 14 },
        tickformat: '.1f',
        gridcolor: '#e5e5e5',
        zerolinecolor: '#cccccc',
    },
};

// スキルタイプグラフのレイアウト
const layoutSkill = {
    ...commonLayout,
    // タイトルを修正
    title: {
        text: '散布図_スキルタイプ',
        font: { size: 26, color: COLOR_SKILL } // 色を青に変更
    },
    xaxis: {
        title: { text: 'おてつだい時間 (秒)', font: { size: 18 } },
        range: [2000, Math.max(...x_data_skill) * 1.05],
        rangemode: 'tozero', 
        tickfont: { size: 14 },
        gridcolor: '#e5e5e5',
        zerolinecolor: '#cccccc',
    },
    yaxis: {
        title: { text: 'スキル確率 (%)', font: { size: 18 } },
        range: [0, Math.max(...y_data_skill) * 1.1],
        rangemode: 'tozero',
        tickfont: { size: 14 },
        tickformat: '.1f',
        gridcolor: '#e5e5e5',
        zerolinecolor: '#cccccc',
    },
};

const config = {
    displayModeBar: true, 
    scrollZoom: true,
    displaylogo: false
};


// --- 3. グラフ描画とタブ切り替えロジック ---

// グラフ描画関数
function plotGraph(type) {
    const plotDivId = `scatter-plot-${type}`;
    const trace = type === 'ingredient' ? traceIngredient : traceSkill;
    const layout = type === 'ingredient' ? layoutIngredient : layoutSkill;
    
    const plotDiv = document.getElementById(plotDivId);

    if (!plotDiv._plotly_data) {
        Plotly.newPlot(plotDiv, [trace], layout, config);
        
        // 描画されたグラフにホバーイベントを設定
        plotDiv.on('plotly_hover', handlePlotlyHover);
        plotDiv.on('plotly_unhover', hideDetailCard);
        plotDiv.on('plotly_click', hideDetailCard);
    } else {
        Plotly.relayout(plotDiv, layout);
    }
}

// グローバル関数として公開
window.openTab = function(tabName) {
    // グラフコンテナの表示/非表示を切り替え
    document.getElementById('scatter-plot-ingredient').style.display = (tabName === 'ingredient') ? 'block' : 'none';
    document.getElementById('scatter-plot-skill').style.display = (tabName === 'skill') ? 'block' : 'none';

    // タブボタンのアクティブ状態を切り替え
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.tab-button[onclick*='${tabName}']`).classList.add('active');

    // グラフを描画
    plotGraph(tabName);
    
    // ホバーカードを非表示にする
    hideDetailCard();
}

// 初期表示: 食材タイプグラフを表示
window.onload = function() {
    window.openTab('ingredient');
};


// --- 4. カスタム詳細情報カードの実装 (共通ロジック) ---

const detailCard = document.getElementById('detail-card');

/**
 * 詳細情報カードのHTMLを生成する関数
 */
function createDetailCardHtml(p, type) {
    const pokemonImagePath = `./images/${p.file}`; 
    const ingredients = p.ingredientsText ? p.ingredientsText.split(' ') : [];

    const ingredientImagesHtml = ingredients.map(ing => {
        // ウッウの'たまご'は、食材画像ファイル名に合わせて調整（前回修正済み）
        const ingImagePath = `./images/${ing}.webp`; 
        return `<img src="${ingImagePath}" alt="${ing}" title="${ing}">`;
    }).join('');

    // 表示するY軸のデータとラベルを決定
    const yValue = type === 'ingredient' ? `${p.ingredientRate}%` : `${p.skillRate}%`;
    const yLabel = type === 'ingredient' ? '食材確率' : 'スキル確率';

    // カスタムカード内の色をグラフの色と合わせる
    const cardColor = type === 'ingredient' ? COLOR_INGREDIENT : COLOR_SKILL;

    // detail-card h3のスタイルを一時的に変更
    detailCard.querySelector('h3').style.color = cardColor;


    return `
        <h3>${p.name}</h3>
        <img id="pokemon-image" src="${pokemonImagePath}" alt="${p.name}">
        <p><strong>スキル:</strong> ${p.skill}</p>
        <p><strong>おてつだい時間:</strong> ${p.assistTime} 秒</p>
        <p><strong>${yLabel}:</strong> ${yValue}</p>
        <p><strong>持ってくる食材:</strong></p>
        <div class="ingredient-images">${ingredientImagesHtml || 'なし'}</div>
    `;
}

// グラフ上の点にカーソルが合わさった時のイベントハンドラ
function handlePlotlyHover(data) {
    if (data.points && data.points.length > 0) {
        
        // どのデータセットを参照すべきか、アクティブなタブから判断
        const activeTab = document.querySelector('.tab-button.active').textContent.includes('食材') ? 'ingredient' : 'skill';
        
        const pointIndex = data.points[0].pointIndex;
        const hoveredPokemon = allPokemonData[activeTab][pointIndex];

        const xPos = data.event.clientX;
        const yPos = data.event.clientY;
        
        // カードのHTMLを生成・設定
        detailCard.innerHTML = createDetailCardHtml(hoveredPokemon, activeTab);
        
        // カスタムカード内の色をグラフの色と合わせる
        const cardColor = activeTab === 'ingredient' ? COLOR_INGREDIENT : COLOR_SKILL;
        detailCard.style.borderColor = cardColor;
        detailCard.querySelector('h3').style.color = cardColor;


        detailCard.style.top = `${yPos + 15}px`; 
        detailCard.style.left = `${xPos + 15}px`; 
        detailCard.style.display = 'block';

    } else {
        hideDetailCard();
    }
}

function hideDetailCard() {
    detailCard.style.display = 'none';
    // カードが非表示になったら、色をリセット（次のホバー時に再設定されるため必須ではないが、クリーンな状態を保つ）
    detailCard.style.borderColor = '#333';
}
