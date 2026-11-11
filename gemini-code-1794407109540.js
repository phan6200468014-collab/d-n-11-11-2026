<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Hành Trình Xanh — Bé Vui Học Đếm Đến 9</title>
  <style>
    /* ==========================================================================
       1. BIẾN CSS & THIẾT LẬP CƠ BẢN (HỖ TRỢ TIẾNG VIỆT RÕ NÉT)
       ========================================================================== */
    :root {
      --font-main: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      --sky-top: #7ec8e3;
      --sky-bottom: #dff6ff;
      --grass-light: #8ce071;
      --grass-mid: #5ec246;
      --grass-dark: #3da329;
      --path-color: #f6d799;
      --path-border: #d9b26f;
      --primary-green: #2e8b57;
      --accent-orange: #ff9800;
      --accent-yellow: #ffd54f;
      --accent-blue: #29b6f6;
      --accent-purple: #ab47bc;
      --text-dark: #1f3a2e;
      --text-light: #ffffff;
      --card-bg: rgba(255, 255, 255, 0.94);
      --shadow-soft: 0 6px 16px rgba(20, 60, 30, 0.18);
      --shadow-btn: 0 5px 0 rgba(0, 0, 0, 0.18);
      --touch-min: 64px;
      --radius-lg: 24px;
      --radius-md: 16px;
      --radius-pill: 999px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      user-select: none;
      -webkit-user-select: none;
      -webkit-touch-callout: none;
      -webkit-tap-highlight-color: transparent;
    }

    html, body {
      width: 100%;
      height: 100%;
      overflow: hidden;
      font-family: var(--font-main);
      background: linear-gradient(180deg, var(--sky-top) 0%, var(--sky-bottom) 60%, var(--grass-light) 60%, var(--grass-mid) 100%);
      color: var(--text-dark);
      touch-action: manipulation;
    }

    button {
      font-family: var(--font-main);
      cursor: pointer;
      border: none;
      outline: none;
      background: none;
    }

    button:focus-visible {
      outline: 4px dashed var(--accent-orange);
      outline-offset: 3px;
    }

    /* ==========================================================================
       2. PHÂN 3 LỚP CHUYỂN ĐỘNG & TÔN TRỌNG PREFERS-REDUCED-MOTION
       - Lớp 1 (.layer-bg): Chuyển động nền chậm, dịu, có thể tắt.
       - Lớp 2 (.layer-character): Chớp mắt, vẫy tay, đổi biểu cảm.
       - Lớp 3 (.layer-learning): Đứng yên khi đếm/chọn/kéo, chỉ phản hồi khi chạm.
       ========================================================================== */
    @keyframes cloudFloat {
      0% { transform: translateX(-8%); }
      50% { transform: translateX(8%); }
      100% { transform: translateX(-8%); }
    }

    @keyframes leafSway {
      0%, 100% { transform: rotate(-3deg); }
      50% { transform: rotate(3deg); }
    }

    @keyframes waterRipple {
      0%, 100% { transform: scaleX(1) translateY(0); opacity: 0.75; }
      50% { transform: scaleX(1.06) translateY(2px); opacity: 0.95; }
    }

    @keyframes bunnyBlink {
      0%, 92%, 100% { transform: scaleY(1); }
      95% { transform: scaleY(0.1); }
    }

    @keyframes bunnyWave {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(-14deg); }
      75% { transform: rotate(10deg); }
    }

    @keyframes bunnyHappyBounce {
      0%, 100% { transform: translateY(0) scale(1); }
      40% { transform: translateY(-10px) scale(1.03); }
      70% { transform: translateY(-4px) scale(1.01); }
    }

    @keyframes gentleShake {
      0%, 100% { transform: translateX(0) rotate(0deg); }
      20% { transform: translateX(-6px) rotate(-2deg); }
      40% { transform: translateX(6px) rotate(2deg); }
      60% { transform: translateX(-4px) rotate(-1deg); }
      80% { transform: translateX(4px) rotate(1deg); }
    }

    @keyframes idlePulseGlow {
      0%, 100% {
        filter: drop-shadow(0 0 0px rgba(255, 193, 7, 0));
        transform: scale(1);
      }
      50% {
        filter: drop-shadow(0 0 14px rgba(255, 193, 7, 0.95));
        transform: scale(1.05);
      }
    }

    @keyframes popStar {
      0% { transform: scale(0.2) rotate(-20deg); opacity: 0; }
      60% { transform: scale(1.2) rotate(8deg); opacity: 1; }
      100% { transform: scale(1) rotate(0deg); opacity: 1; }
    }

    @keyframes floatSparkle {
      0% { transform: translateY(0) scale(0.7); opacity: 1; }
      100% { transform: translateY(-60px) scale(1.3); opacity: 0; }
    }

    /* Áp dụng lớp nền */
    .layer-bg .cloud-anim {
      animation: cloudFloat 26s ease-in-out infinite;
    }
    .layer-bg .cloud-anim-slow {
      animation: cloudFloat 36s ease-in-out infinite reverse;
    }
    .layer-bg .leaf-anim {
      transform-origin: bottom center;
      animation: leafSway 6s ease-in-out infinite;
    }
    .layer-bg .water-anim {
      transform-origin: center;
      animation: waterRipple 5s ease-in-out infinite;
    }

    /* Tắt chuyển động nền khi cô tắt hoặc thiết bị bật giảm chuyển động */
    body.bg-motion-off .layer-bg .cloud-anim,
    body.bg-motion-off .layer-bg .cloud-anim-slow,
    body.bg-motion-off .layer-bg .leaf-anim,
    body.bg-motion-off .layer-bg .water-anim {
      animation: none !important;
    }

    @media (prefers-reduced-motion: reduce) {
      .layer-bg .cloud-anim,
      .layer-bg .cloud-anim-slow,
      .layer-bg .leaf-anim,
      .layer-bg .water-anim,
      .layer-character .char-eye-blink,
      .layer-character .char-arm-wave {
        animation: none !important;
      }
    }

    /* Áp dụng lớp nhân vật */
    .layer-character .char-eye-blink {
      transform-origin: center;
      animation: bunnyBlink 4.5s infinite;
    }
    .layer-character .char-arm-wave {
      transform-origin: 30% 30%;
      animation: bunnyWave 2.4s ease-in-out infinite;
    }
    .layer-character.state-happy .character-svg-root {
      animation: bunnyHappyBounce 0.8s ease-in-out 2;
    }
    .layer-character.state-encourage .char-head-group {
      transform-origin: 50% 65%;
      transform: rotate(-8deg);
      transition: transform 0.35s ease;
    }
    .layer-character .char-head-group {
      transform-origin: 50% 65%;
      transition: transform 0.35s ease;
    }

    /* Áp dụng lớp đối tượng học tập: ĐỨNG YÊN mặc định, chỉ phản hồi khi tương tác */
    .layer-learning .learning-item {
      transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.2s ease;
      cursor: pointer;
    }
    .layer-learning .learning-item:active,
    .layer-learning .learning-item.item-active {
      transform: scale(1.12);
      filter: drop-shadow(0 6px 12px rgba(46, 139, 87, 0.35));
    }
    .layer-learning .learning-item.shake-gentle {
      animation: gentleShake 0.55s ease-in-out;
      filter: drop-shadow(0 0 10px rgba(255, 152, 0, 0.9));
    }
    .idle-hint-glow {
      animation: idlePulseGlow 1.6s ease-in-out infinite !important;
    }

    /* ==========================================================================
       3. KHUNG GIAO DIỆN CHÍNH & THANH ĐIỀU HƯỚNG TRÊN CÙNG
       ========================================================================== */
    #app-container {
      position: relative;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    /* Lớp nền cảnh thiên nhiên toàn màn hình */
    #global-bg-scene {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      pointer-events: none;
    }

    /* Thanh điều khiển nổi phía trên (gọn gàng, nút chạm >= 60x60px) */
    #top-hud {
      position: relative;
      z-index: 20;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 16px;
      gap: 10px;
      pointer-events: none;
    }

    .hud-group {
      display: flex;
      align-items: center;
      gap: 10px;
      pointer-events: auto;
    }

    .hud-btn {
      min-width: var(--touch-min);
      min-height: var(--touch-min);
      padding: 8px 16px;
      border-radius: var(--radius-md);
      background: var(--card-bg);
      border: 3px solid #2e8b57;
      box-shadow: var(--shadow-btn);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--text-dark);
      transition: transform 0.12s ease, background-color 0.15s ease;
    }

    .hud-btn:active {
      transform: translateY(3px);
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.18);
    }

    .hud-btn.btn-orange {
      background: #fff8e1;
      border-color: #f57c00;
      color: #bf360c;
    }

    .hud-btn.btn-blue {
      background: #e1f5fe;
      border-color: #0288d1;
      color: #01579b;
    }

    .hud-btn.btn-teacher {
      min-height: 52px;
      padding: 6px 14px;
      font-size: 0.95rem;
      background: rgba(255, 255, 255, 0.9);
      border: 2px solid #5c6bc0;
      color: #283593;
    }

    .star-badge {
      min-height: var(--touch-min);
      padding: 6px 18px;
      border-radius: var(--radius-pill);
      background: linear-gradient(135deg, #fff9c4 0%, #ffd54f 100%);
      border: 3px solid #f57f17;
      box-shadow: var(--shadow-btn);
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 1.35rem;
      font-weight: 800;
      color: #b25000;
    }

    /* ==========================================================================
       4. CÁC MÀN HÌNH (CHỜ, BẢN ĐỒ, TRẠM CHƠI, NGÀY HỘI XANH)
       ========================================================================== */
    .screen-view {
      position: relative;
      z-index: 10;
      flex: 1;
      width: 100%;
      height: calc(100vh - 80px);
      display: none;
      flex-direction: column;
      justify-content: space-between;
    }

    .screen-view.active {
      display: flex;
    }

    /* --- 4.1 MÀN HÌNH CHỜ (SPLASH SCREEN) --- */
    #screen-welcome {
      align-items: center;
      justify-content: center;
      padding: 16px;
      text-align: center;
    }

    .welcome-stage {
      background: rgba(255, 255, 255, 0.88);
      backdrop-filter: blur(6px);
      border: 5px solid #4caf50;
      border-radius: 36px;
      padding: 24px 32px;
      max-width: 780px;
      width: 94%;
      box-shadow: 0 16px 36px rgba(20, 70, 30, 0.25);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }

    .game-title-banner {
      font-size: clamp(1.6rem, 4vw, 2.7rem);
      font-weight: 900;
      color: #1b5e20;
      text-shadow: 0 2px 0 #ffffff, 0 4px 8px rgba(0,0,0,0.12);
      line-height: 1.25;
    }

    .game-subtitle {
      font-size: clamp(1.05rem, 2.2vw, 1.35rem);
      font-weight: 700;
      color: #e65100;
      background: #fff3e0;
      padding: 6px 20px;
      border-radius: var(--radius-pill);
      border: 2px solid #ffb74d;
    }

    .welcome-character-wrap {
      width: 190px;
      height: 190px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn-primary-giant {
      min-width: 260px;
      min-height: 76px;
      padding: 14px 36px;
      border-radius: var(--radius-pill);
      background: linear-gradient(180deg, #ffca28 0%, #ff9800 100%);
      border: 4px solid #e65100;
      box-shadow: 0 8px 0 #bf360c, 0 12px 24px rgba(0,0,0,0.22);
      font-size: clamp(1.35rem, 3vw, 1.85rem);
      font-weight: 900;
      color: #ffffff;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      transition: transform 0.12s ease, box-shadow 0.12s ease;
    }

    .btn-primary-giant:active {
      transform: translateY(5px);
      box-shadow: 0 3px 0 #bf360c;
    }

    /* --- 4.2 MÀN HÌNH BẢN ĐỒ 5 TRẠM (MAP SCREEN) --- */
    #screen-map {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 6px 16px 14px;
    }

    .map-header-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 6px;
      flex-wrap: wrap;
    }

    .map-speech-box {
      display: flex;
      align-items: center;
      gap: 12px;
      background: var(--card-bg);
      border: 3px solid #43a047;
      border-radius: var(--radius-lg);
      padding: 8px 18px;
      box-shadow: var(--shadow-soft);
      max-width: 680px;
    }

    .map-bunny-avatar {
      width: 68px;
      height: 68px;
      flex-shrink: 0;
    }

    .map-speech-text {
      font-size: clamp(1rem, 2vw, 1.25rem);
      font-weight: 700;
      color: #1b5e20;
      line-height: 1.35;
    }

    /* Vùng bản đồ tương tác chính (>= 2/3 màn hình) */
    .map-world-canvas {
      position: relative;
      flex: 1;
      width: 100%;
      border-radius: 28px;
      overflow: hidden;
      border: 4px solid rgba(255, 255, 255, 0.75);
      box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.08), var(--shadow-soft);
      background: linear-gradient(180deg, #b3e5fc 0%, #e1f5fe 32%, #aed581 33%, #7cb342 100%);
    }

    .map-road-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .map-stations-grid {
      position: relative;
      z-index: 5;
      width: 100%;
      height: 100%;
    }

    /* Các nút trạm trên bản đồ */
    .station-node {
      position: absolute;
      transform: translate(-50%, -50%);
      width: clamp(145px, 18vw, 210px);
      min-height: 130px;
      background: rgba(255, 255, 255, 0.95);
      border: 4px solid #2e7d32;
      border-radius: 24px;
      padding: 8px 10px;
      box-shadow: 0 8px 0 rgba(27, 94, 32, 0.28), 0 12px 20px rgba(0,0,0,0.18);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      cursor: pointer;
      transition: transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .station-node:hover {
      transform: translate(-50%, -53%) scale(1.04);
    }

    .station-node:active {
      transform: translate(-50%, -48%) scale(0.98);
    }

    .station-node.explored {
      border-color: #ff8f00;
      background: linear-gradient(180deg, #ffffff 0%, #fffde7 100%);
    }

    /* Tọa độ 5 trạm trên màn hình ngang (PC / TV / Tablet) */
    .station-node[data-station="1"] { left: 14%; top: 68%; }
    .station-node[data-station="2"] { left: 31%; top: 34%; }
    .station-node[data-station="3"] { left: 50%; top: 70%; }
    .station-node[data-station="4"] { left: 69%; top: 34%; }
    .station-node[data-station="5"] { left: 86%; top: 66%; }

    .station-number-badge {
      position: absolute;
      top: -14px;
      left: -10px;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: #ff9800;
      border: 3px solid #ffffff;
      color: #ffffff;
      font-weight: 900;
      font-size: 1.15rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 3px 6px rgba(0,0,0,0.2);
    }

    .station-explored-tag {
      position: absolute;
      top: -14px;
      right: -8px;
      background: #2e7d32;
      color: #ffffff;
      font-size: 0.72rem;
      font-weight: 800;
      padding: 3px 8px;
      border-radius: var(--radius-pill);
      border: 2px solid #ffffff;
      display: none;
    }

    .station-node.explored .station-explored-tag {
      display: inline-block;
    }

    .station-icon-svg {
      width: 68px;
      height: 60px;
    }

    .station-title {
      font-size: clamp(0.9rem, 1.35vw, 1.08rem);
      font-weight: 800;
      color: #1b5e20;
      text-align: center;
      line-height: 1.2;
    }

    /* 3 ô tiến trình của mỗi trạm */
    .station-rounds-bar {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-top: 2px;
    }

    .round-pip {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #e0e0e0;
      border: 2px solid #9e9e9e;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      color: transparent;
      transition: all 0.25s ease;
    }

    .round-pip.done {
      background: #ffd54f;
      border-color: #f57f17;
      color: #bf360c;
      font-weight: 900;
      box-shadow: 0 2px 4px rgba(245, 127, 23, 0.4);
    }

    /* Nút mở khóa Ngày Hội Xanh trên Bản đồ */
    .festival-banner-btn {
      min-height: var(--touch-min);
      padding: 10px 22px;
      border-radius: var(--radius-pill);
      font-size: 1.15rem;
      font-weight: 900;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      box-shadow: var(--shadow-btn);
      transition: all 0.25s ease;
    }

    .festival-banner-btn.locked {
      background: rgba(255, 255, 255, 0.85);
      border: 3px dashed #78909c;
      color: #455a64;
    }

    .festival-banner-btn.unlocked {
      background: linear-gradient(135deg, #ffca28 0%, #ff6f00 100%);
      border: 4px solid #ffffff;
      color: #ffffff;
      animation: bunnyHappyBounce 1.5s infinite;
    }

    /* --- 4.3 MÀN HÌNH SÂN KHẤU TRẠM CHƠI (STATION SCREEN) --- */
    #screen-station {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 4px 14px 12px;
      display: none;
      flex-direction: column;
      gap: 8px;
    }

    #screen-station.active {
      display: flex;
    }

    /* Thanh thông tin trạm & chọn nhanh 3 vòng */
    .station-top-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
      z-index: 15;
    }

    .station-header-info {
      display: flex;
      align-items: center;
      gap: 12px;
      background: var(--card-bg);
      padding: 6px 16px;
      border-radius: var(--radius-pill);
      border: 3px solid #2e8b57;
      box-shadow: var(--shadow-soft);
    }

    .station-header-name {
      font-size: clamp(1.05rem, 2vw, 1.35rem);
      font-weight: 900;
      color: #1b5e20;
    }

    .round-selector-tabs {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .round-tab-btn {
      min-width: 60px;
      min-height: 50px;
      padding: 6px 14px;
      border-radius: var(--radius-pill);
      background: #e8f5e9;
      border: 3px solid #81c784;
      font-size: 1rem;
      font-weight: 800;
      color: #2e7d32;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .round-tab-btn.active {
      background: #ff9800;
      border-color: #e65100;
      color: #ffffff;
      transform: scale(1.06);
    }

    .round-tab-btn.completed::after {
      content: "★";
      color: #ffd54f;
      font-size: 1.1rem;
    }

    /* Sân khấu tương tác của trạm (chiếm > 75% màn hình) */
    #station-stage-wrapper {
      position: relative;
      flex: 1;
      width: 100%;
      border-radius: 28px;
      overflow: hidden;
      border: 4px solid rgba(255, 255, 255, 0.85);
      box-shadow: var(--shadow-soft);
      background: linear-gradient(180deg, #c8e6c9 0%, #a5d6a7 100%);
      display: flex;
      flex-direction: column;
    }

    /* Vùng lắp ghép nội dung từng trạm ở Bước 2-5 */
    #station-stage {
      position: relative;
      flex: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    /* Góc nhân vật Thỏ Bông đồng hành & bong bóng phản hồi */
    #companion-dock {
      position: absolute;
      left: 14px;
      bottom: 12px;
      z-index: 25;
      display: flex;
      align-items: flex-end;
      gap: 10px;
      pointer-events: none;
      max-width: min(560px, 88vw);
    }

    .companion-avatar-box {
      width: clamp(92px, 13vw, 130px);
      height: clamp(92px, 13vw, 130px);
      flex-shrink: 0;
      pointer-events: auto;
      cursor: pointer;
      filter: drop-shadow(0 6px 10px rgba(0,0,0,0.2));
    }

    .speech-bubble {
      pointer-events: auto;
      background: rgba(255, 255, 255, 0.97);
      border: 4px solid #43a047;
      border-radius: 22px 22px 22px 6px;
      padding: 12px 18px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
      display: flex;
      flex-direction: column;
      gap: 6px;
      transition: all 0.25s ease;
    }

    .speech-bubble.feedback-encourage {
      border-color: #ff9800;
      background: #fff8e1;
    }

    .speech-bubble.feedback-correct {
      border-color: #2e7d32;
      background: #f1f8e9;
    }

    .speech-main-text {
      font-size: clamp(1.05rem, 2.1vw, 1.38rem);
      font-weight: 800;
      color: #1b5e20;
      line-height: 1.35;
    }

    .speech-bubble.feedback-encourage .speech-main-text {
      color: #e65100;
    }

    /* Hộp phủ ăn mừng khi hoàn thành 1 vòng (không tự chuyển màn ngay) */
    #round-complete-overlay {
      position: absolute;
      inset: 0;
      z-index: 40;
      background: rgba(15, 50, 25, 0.62);
      backdrop-filter: blur(4px);
      display: none;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }

    #round-complete-overlay.active {
      display: flex;
    }

    .complete-dialog-card {
      background: #ffffff;
      border: 5px solid #ffb300;
      border-radius: 32px;
      padding: 24px 32px;
      max-width: 540px;
      width: 92%;
      text-align: center;
      box-shadow: 0 18px 40px rgba(0,0,0,0.35);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
      animation: popStar 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .complete-stars-row {
      display: flex;
      gap: 12px;
      justify-content: center;
    }

    .complete-title {
      font-size: clamp(1.5rem, 3.2vw, 2.1rem);
      font-weight: 900;
      color: #2e7d32;
    }

    .complete-desc {
      font-size: 1.2rem;
      font-weight: 700;
      color: #455a64;
    }

    .complete-actions {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 6px;
    }

    /* --- 4.4 MÀN HÌNH NGÀY HỘI XANH (FESTIVAL CELEBRATION SCREEN) --- */
    #screen-festival {
      padding: 10px 16px 16px;
      align-items: center;
      justify-content: center;
    }

    .festival-stage-card {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 30px;
      border: 5px solid #ffd54f;
      background: linear-gradient(180deg, #4fc3f7 0%, #fff9c4 52%, #81c784 53%, #4caf50 100%);
      box-shadow: var(--shadow-soft);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
    }

    .festival-characters-parade {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      gap: clamp(12px, 3vw, 36px);
      flex-wrap: wrap;
      z-index: 5;
    }

    /* ==========================================================================
       5. BẢNG DÀNH CHO CÔ VÀ BỐ MẸ (TEACHER / PARENT MODAL)
       ========================================================================== */
    #teacher-modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 100;
      background: rgba(10, 35, 20, 0.72);
      backdrop-filter: blur(5px);
      display: none;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }

    #teacher-modal-backdrop.active {
      display: flex;
    }

    .teacher-modal-box {
      background: #ffffff;
      border: 4px solid #3949ab;
      border-radius: 28px;
      max-width: 860px;
      width: 96%;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: 0 20px 50px rgba(0,0,0,0.4);
    }

    .teacher-modal-header {
      background: #3949ab;
      color: #ffffff;
      padding: 16px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .teacher-modal-header h2 {
      font-size: 1.4rem;
      font-weight: 800;
    }

    .teacher-modal-body {
      padding: 20px 24px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 18px;
      font-size: 1.02rem;
      line-height: 1.55;
      color: #263238;
    }

    .teacher-section {
      background: #f5f7ff;
      border-left: 5px solid #3949ab;
      border-radius: 12px;
      padding: 14px 18px;
    }

    .teacher-section h3 {
      color: #1a237e;
      margin-bottom: 8px;
      font-size: 1.15rem;
    }

    .teacher-section ul {
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .teacher-controls-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
      background: #e8f5e9;
      padding: 14px 18px;
      border-radius: 16px;
      border: 2px solid #66bb6a;
    }

    .confirm-reset-panel {
      display: none;
      align-items: center;
      gap: 10px;
      background: #ffebee;
      border: 2px solid #ef5350;
      padding: 10px 14px;
      border-radius: 12px;
      margin-top: 8px;
      flex-wrap: wrap;
    }

    .confirm-reset-panel.active {
      display: flex;
    }

    /* Lớp hiệu ứng pháo hoa ngôi sao */
    #fx-layer {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 90;
      overflow: hidden;
    }

    .fx-star {
      position: absolute;
      width: 36px;
      height: 36px;
      animation: floatSparkle 1.1s ease-out forwards;
    }

    /* ==========================================================================
       6. TƯƠNG THÍCH ĐIỆN THOẠI & MÀN HÌNH NHỎ (GIỮ VẬT THỂ ĐỦ LỚN, DỄ CHẠM)
       ========================================================================== */
    @media (max-width: 820px) {
      #top-hud {
        padding: 6px 10px;
      }
      .hud-btn span.btn-label-text {
        display: none;
      }
      /* Chuyển bản đồ thành danh sách thẻ lớn dễ chạm trên điện thoại */
      .map-world-canvas {
        overflow-y: auto;
        padding: 14px;
      }
      .map-road-svg {
        display: none;
      }
      .map-stations-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
        gap: 14px;
        height: auto;
      }
      .station-node {
        position: relative !important;
        left: auto !important;
        top: auto !important;
        transform: none !important;
        width: 100%;
        min-height: 140px;
      }
      .station-node:hover,
      .station-node:active {
        transform: scale(0.98) !important;
      }
      #companion-dock {
        left: 8px;
        bottom: 8px;
      }
      .companion-avatar-box {
        width: 82px;
        height: 82px;
      }
    }
  </style>
</head>
<body>

  <div id="app-container">
    <!-- ========================================================================
         LỚP 1: CẢNH NỀN THIÊN NHIÊN TOÀN MÀN HÌNH (.layer-bg)
         ======================================================================== -->
    <svg id="global-bg-scene" class="layer-bg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#7ec8e3" />
          <stop offset="62%" stop-color="#e0f7fa" />
          <stop offset="100%" stop-color="#c8e6c9" />
        </linearGradient>
        <linearGradient id="hillFar" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#81c784" />
          <stop offset="100%" stop-color="#4caf50" />
        </linearGradient>
        <linearGradient id="hillNear" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#9ccc65" />
          <stop offset="100%" stop-color="#558b2f" />
        </linearGradient>
      </defs>

      <!-- Bầu trời -->
      <rect width="1600" height="900" fill="url(#skyGrad)" />

      <!-- Ông mặt trời ấm áp -->
      <g transform="translate(1420, 120)">
        <circle cx="0" cy="0" r="68" fill="#fff59d" opacity="0.45" />
        <circle cx="0" cy="0" r="50" fill="#ffd54f" stroke="#ffb300" stroke-width="4" />
      </g>

      <!-- Mây trôi chậm -->
      <g class="cloud-anim" opacity="0.9">
        <g transform="translate(220, 110)">
          <ellipse cx="0" cy="10" rx="65" ry="32" fill="#ffffff" />
          <ellipse cx="-35" cy="18" rx="45" ry="25" fill="#ffffff" />
          <ellipse cx="40" cy="18" rx="48" ry="26" fill="#ffffff" />
        </g>
        <g transform="translate(980, 150) scale(0.85)">
          <ellipse cx="0" cy="10" rx="70" ry="34" fill="#ffffff" />
          <ellipse cx="-42" cy="18" rx="45" ry="25" fill="#ffffff" />
          <ellipse cx="42" cy="18" rx="50" ry="26" fill="#ffffff" />
        </g>
      </g>

      <g class="cloud-anim-slow" opacity="0.78">
        <g transform="translate(580, 85) scale(0.75)">
          <ellipse cx="0" cy="10" rx="65" ry="30" fill="#ffffff" />
          <ellipse cx="-35" cy="18" rx="42" ry="22" fill="#ffffff" />
          <ellipse cx="38" cy="18" rx="42" ry="22" fill="#ffffff" />
        </g>
      </g>

      <!-- Đồi cỏ phía xa và gần -->
      <path d="M0,600 Q360,470 780,570 T1600,540 L1600,900 L0,900 Z" fill="url(#hillFar)" />
      <path d="M0,670 Q450,560 920,660 T1600,630 L1600,900 L0,900 Z" fill="url(#hillNear)" />

      <!-- Hồ nước nhỏ gợn sóng nhẹ -->
      <g transform="translate(1280, 760)" class="water-anim">
        <ellipse cx="0" cy="0" rx="190" ry="52" fill="#4fc3f7" stroke="#81d4fa" stroke-width="5" />
        <path d="M-90,-8 Q-45,-18 0,-8 T90,-8" fill="none" stroke="#e1f5fe" stroke-width="4" stroke-linecap="round" />
        <path d="M-60,15 Q-15,5 30,15 T110,15" fill="none" stroke="#e1f5fe" stroke-width="3" stroke-linecap="round" />
      </g>

      <!-- Cây xanh & bụi lá đung đưa nhẹ -->
      <g transform="translate(95, 580)" class="leaf-anim">
        <rect x="-14" y="20" width="28" height="80" rx="8" fill="#795548" />
        <circle cx="0" cy="-10" r="56" fill="#43a047" />
        <circle cx="-36" cy="12" r="42" fill="#66bb6a" />
        <circle cx="36" cy="12" r="42" fill="#2e7d32" />
      </g>

      <g transform="translate(1510, 560)" class="leaf-anim">
        <rect x="-12" y="20" width="24" height="75" rx="8" fill="#795548" />
        <circle cx="0" cy="-12" r="50" fill="#43a047" />
        <circle cx="-30" cy="10" r="38" fill="#66bb6a" />
        <circle cx="30" cy="10" r="38" fill="#2e7d32" />
      </g>
    </svg>

    <!-- ========================================================================
         THANH ĐIỀU KHIỂN TRÊN CÙNG (TOP HUD)
         ======================================================================== -->
    <header id="top-hud">
      <div class="hud-group">
        <!-- Nút Về Bản Đồ -->
        <button id="btn-back-map" class="hud-btn btn-orange" type="button" aria-label="Về bản đồ" style="display: none;">
          <svg width="28" height="28" viewBox="0 0 36 36">
            <path d="M4,18 L18,5 L32,18" fill="none" stroke="#e65100" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9,16 L9,31 L27,31 L27,16" fill="#ffcc80" stroke="#e65100" stroke-width="3" stroke-linejoin="round"/>
          </svg>
          <span class="btn-label-text">Về bản đồ</span>
        </button>

        <!-- Nút Nghe Lại Hướng Dẫn -->
        <button id="btn-replay-voice" class="hud-btn btn-blue" type="button" aria-label="Nghe lại hướng dẫn">
          <svg width="28" height="28" viewBox="0 0 36 36">
            <path d="M6,14 L13,14 L21,7 L21,29 L13,22 L6,22 Z" fill="#0288d1" stroke="#01579b" stroke-width="2" stroke-linejoin="round"/>
            <path d="M25,12 Q30,18 25,24" fill="none" stroke="#0288d1" stroke-width="3" stroke-linecap="round"/>
            <path d="M28,8 Q35,18 28,28" fill="none" stroke="#0288d1" stroke-width="3" stroke-linecap="round"/>
          </svg>
          <span class="btn-label-text">Nghe lại</span>
        </button>
      </div>

      <div class="hud-group">
        <!-- Huy hiệu Tổng Sao -->
        <div class="star-badge" aria-label="Số sao của bé">
          <svg width="32" height="32" viewBox="0 0 36 36">
            <polygon points="18,2 23,12 34,14 26,22 28,33 18,28 8,33 10,22 2,14 13,12" fill="#ffb300" stroke="#e65100" stroke-width="2.5" stroke-linejoin="round"/>
          </svg>
          <span id="hud-star-count">0</span>
        </div>

        <!-- Nút Bật/Tắt Âm Thanh -->
        <button id="btn-toggle-mute" class="hud-btn" type="button" aria-label="Bật hoặc tắt tiếng">
          <span id="mute-icon-holder">🔊</span>
          <span class="btn-label-text" id="mute-label-text">Âm thanh</span>
        </button>

        <!-- Nút Toàn Màn Hình (Tự ẩn nếu trình duyệt không hỗ trợ) -->
        <button id="btn-fullscreen" class="hud-btn" type="button" aria-label="Toàn màn hình" style="display: none;">
          <svg width="26" height="26" viewBox="0 0 32 32">
            <path d="M4,12 L4,4 L12,4 M20,4 L28,4 L28,12 M28,20 L28,28 L20,28 M12,28 L4,28 L4,20" fill="none" stroke="#1b5e20" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="btn-label-text">Toàn màn hình</span>
        </button>

        <!-- Nút Dành Cho Cô Và Bố Mẹ -->
        <button id="btn-open-teacher" class="hud-btn btn-teacher" type="button">
          <span>👩‍🏫</span>
          <span class="btn-label-text">Dành cho cô và bố mẹ</span>
        </button>
      </div>
    </header>

    <!-- ========================================================================
         MÀN HÌNH 1: MÀN HÌNH CHỜ (WELCOME / SPLASH SCREEN)
         ======================================================================== -->
    <section id="screen-welcome" class="screen-view active" aria-label="Màn hình bắt đầu">
      <div class="welcome-stage">
        <div class="game-subtitle">🌱 Trò chơi giáo dục cho bé 3 – 5 tuổi 🌱</div>
        <h1 class="game-title-banner">HÀNH TRÌNH XANH<br>BÉ VUI HỌC ĐẾM ĐẾN 9</h1>
        <div id="welcome-bunny-holder" class="welcome-character-wrap layer-character"></div>
        <p style="font-size: 1.18rem; font-weight: 700; color: #2e7d32; max-width: 560px;">
          Cùng bạn Thỏ Bông khám phá 5 trạm xanh, tưới hoa, tìm bạn thú, đi chợ nông trại và mở hội nhé!
        </p>
        <button id="btn-start-game" class="btn-primary-giant" type="button">
          <span>▶</span>
          <span>Bắt đầu chơi</span>
        </button>
      </div>
    </section>

    <!-- ========================================================================
         MÀN HÌNH 2: BẢN ĐỒ 5 TRẠM (MAP SCREEN)
         ======================================================================== -->
    <section id="screen-map" class="screen-view" aria-label="Bản đồ 5 trạm">
      <div class="map-header-bar">
        <div class="map-speech-box">
          <div id="map-bunny-holder" class="map-bunny-avatar layer-character"></div>
          <div id="map-speech-text" class="map-speech-text">
            Chào bé! Bé hãy chạm vào một trạm trên bản đồ để cùng Thỏ Bông khám phá nhé!
          </div>
        </div>

        <!-- Nút Ngày Hội Xanh (Mở khóa khi khám phá đủ 5 trạm) -->
        <button id="btn-open-festival" class="festival-banner-btn locked" type="button">
          <span id="festival-btn-icon">🔒</span>
          <span id="festival-btn-text">Ngày Hội Xanh (0/5 trạm)</span>
        </button>
      </div>

      <div class="map-world-canvas">
        <!-- Đường mòn nối 5 trạm -->
        <svg class="map-road-svg" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <path d="M 168,408 C 240,320 290,204 372,204 C 455,204 510,420 600,420 C 690,420 740,204 828,204 C 915,204 960,396 1032,396"
                fill="none" stroke="#d9b26f" stroke-width="44" stroke-linecap="round" />
          <path d="M 168,408 C 240,320 290,204 372,204 C 455,204 510,420 600,420 C 690,420 740,204 828,204 C 915,204 960,396 1032,396"
                fill="none" stroke="#fbe4b4" stroke-width="32" stroke-linecap="round" stroke-dasharray="22 18" />
        </svg>

        <!-- Danh sách 5 trạm -->
        <div id="map-stations-container" class="map-stations-grid"></div>
      </div>
    </section>

    <!-- ========================================================================
         MÀN HÌNH 3: SÂN KHẤU TRẠM CHƠI (STATION PLAY SCREEN)
         ======================================================================== -->
    <section id="screen-station" class="screen-view" aria-label="Khu vực chơi trạm">
      <div class="station-top-bar">
        <div class="station-header-info">
          <span id="station-current-badge" style="background:#ff9800;color:#fff;font-weight:900;padding:4px 12px;border-radius:99px;">Trạm 1</span>
          <span id="station-current-title" class="station-header-name">Vườn hoa thức giấc</span>
        </div>

        <!-- Bộ nút chọn vòng 1, 2, 3 -->
        <div id="station-round-tabs" class="round-selector-tabs"></div>
      </div>

      <div id="station-stage-wrapper">
        <!-- Vùng sân khấu động để các Trạm 1..5 vẽ cảnh và đối tượng học tập -->
        <div id="station-stage" class="layer-learning"></div>

        <!-- Nhân vật đồng hành Thỏ Bông & Bong bóng thoại phản hồi -->
        <div id="companion-dock">
          <div id="station-bunny-holder" class="companion-avatar-box layer-character" title="Chạm để nghe lại hướng dẫn"></div>
          <div id="station-speech-bubble" class="speech-bubble">
            <div id="station-speech-text" class="speech-main-text">
              Bé hãy lắng nghe hướng dẫn và bắt đầu chơi nhé!
            </div>
          </div>
        </div>

        <!-- Hộp thoại hoàn thành vòng chơi (Hiện nút Đi tiếp / Về bản đồ) -->
        <div id="round-complete-overlay" role="dialog" aria-modal="true">
          <div class="complete-dialog-card">
            <div class="complete-stars-row" id="complete-stars-svg"></div>
            <h2 class="complete-title" id="complete-dialog-title">Hoan hô! Bé giỏi quá!</h2>
            <p class="complete-desc" id="complete-dialog-desc">Bé đã hoàn thành vòng chơi và nhận được sao vàng!</p>
            <div class="complete-actions">
              <button id="btn-complete-map" class="hud-btn btn-orange" type="button" style="min-height:64px;font-size:1.15rem;">
                🏡 Về bản đồ
              </button>
              <button id="btn-complete-next" class="hud-btn" type="button" style="min-height:64px;font-size:1.2rem;background:#4caf50;color:#fff;border-color:#1b5e20;">
                ▶ Đi tiếp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================================
         MÀN HÌNH 4: CẢNH LỄ HỘI NGÀY HỘI XANH (KHI KHÁM PHÁ ĐỦ 5 TRẠM)
         ======================================================================== -->
    <section id="screen-festival" class="screen-view" aria-label="Ngày Hội Xanh">
      <div class="festival-stage-card">
        <div style="text-align:center; z-index:5;">
          <div class="game-subtitle">🎉 CHÚC MỪNG BÉ ĐÃ KHÁM PHÁ ĐỦ 5 TRẠM 🎉</div>
          <h2 class="game-title-banner" style="margin-top:6px;">NGÀY HỘI XANH RỰC RỠ</h2>
          <p style="font-size:1.2rem;font-weight:700;color:#1b5e20;margin-top:6px;">
            Chạm vào các bạn nhỏ và chậu cây để bắn pháo hoa, nở hoa và nghe tiếng nhạc vui nhộn nhé!
          </p>
        </div>

        <!-- Dàn nhân vật SVG cùng nhảy múa mừng lễ hội -->
        <div id="festival-parade-container" class="festival-characters-parade"></div>

        <div style="display:flex; gap:16px; z-index:5; flex-wrap:wrap; justify-content:center;">
          <button id="btn-festival-fireworks" class="btn-primary-giant" type="button" style="min-height:66px;font-size:1.3rem;">
            ✨ Bắn pháo hoa ngôi sao
          </button>
          <button id="btn-festival-back-map" class="hud-btn btn-orange" type="button" style="min-height:66px;font-size:1.2rem;">
            🗺️ Quay lại bản đồ
          </button>
        </div>
      </div>
    </section>

    <!-- ========================================================================
         BẢNG DÀNH CHO CÔ VÀ BỐ MẸ (TEACHER / PARENT MODAL)
         ======================================================================== -->
    <div id="teacher-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="teacher-modal-title">
      <div class="teacher-modal-box">
        <div class="teacher-modal-header">
          <h2 id="teacher-modal-title">👩‍🏫 Hướng dẫn Dành cho Cô và Bố Mẹ (Lớp ghép 3 – 5 tuổi)</h2>
          <button id="btn-close-teacher" class="hud-btn btn-orange" type="button" style="min-height:48px;min-width:48px;padding:4px 12px;">
            ✖ Đóng
          </button>
        </div>
        <div class="teacher-modal-body">
          <!-- Điều khiển cài đặt lớp học -->
          <div class="teacher-controls-row">
            <div>
              <strong>🌿 Chuyển động lớp nền (mây trôi, lá đung đưa, nước gợn):</strong>
              <p style="font-size:0.92rem;color:#455a64;">Có thể tắt để trẻ tập trung tối đa vào vật thể đếm trên màn hình Tivi.</p>
            </div>
            <button id="btn-toggle-bg-motion" class="hud-btn" type="button" style="background:#fff;">
              Đang bật chuyển động nền
            </button>
          </div>

          <!-- Mục tiêu giáo dục 5 trạm -->
          <div class="teacher-section">
            <h3>🎯 Mục tiêu giáo dục từng trạm (Làm quen với Toán & Môi trường xanh)</h3>
            <ul>
              <li><strong>Trạm 1 — Vườn hoa thức giấc (Số lượng 1 – 5):</strong> Đếm trên đối tượng, chạm tưới nước từng chậu hoa theo thứ tự từ trái sang phải, nhận biết mối quan hệ 1–1 và kết luận tổng số hoa nở.</li>
              <li><strong>Trạm 2 — Khu rừng tìm bạn (Số lượng 3 – 7):</strong> Quan sát, tìm và đếm các bạn thú ẩn nấp trong rừng xanh, phân loại đúng nhóm đối tượng theo yêu cầu.</li>
              <li><strong>Trạm 3 — Phiên chợ nông trại (Số lượng 4 – 8):</strong> Tạo nhóm nông sản sạch theo yêu cầu của khách hàng, nhận biết <em>"Chưa đủ"</em>, <em>"Nhiều hơn rồi"</em>, <em>"Chưa đúng loại"</em> để thêm hoặc bớt.</li>
              <li><strong>Trạm 4 — Chuyến tàu Ngày Hội Xanh (Dãy số & Số lượng đến 9):</strong> Sắp xếp toa tàu, kiểm đếm các kiện quà cây xanh và hành khách lên tàu đến 9.</li>
              <li><strong>Trạm 5 — Thị trấn nghề nghiệp (Tổng hợp đếm & Gộp nhóm đến 9):</strong> Giúp bác làm vườn, lính cứu hỏa, bác sĩ, đầu bếp chuẩn bị đúng số lượng dụng cụ nghề nghiệp.</li>
            </ul>
          </div>

          <!-- Cách tổ chức chơi nhóm / luân phiên -->
          <div class="teacher-section">
            <h3>🤝 Cách tổ chức chơi nhóm & luân phiên trên lớp</h3>
            <ul>
              <li><strong>Chơi cả lớp trên Tivi cảm ứng:</strong> Cô mời 1 trẻ lên chạm thao tác, cả lớp ở dưới cùng vỗ tay và đếm to theo từng tiếng đếm phát ra từ trò chơi.</li>
              <li><strong>Chơi cặp đôi (Trẻ 4–5 tuổi kèm trẻ 3 tuổi):</strong> Một bé chọn/kéo vật phẩm, bé kia kiểm tra và bấm nút hoàn thành.</li>
              <li><strong>Mở khóa linh hoạt:</strong> Cô có thể bấm trực tiếp vào bất kỳ trạm nào trên Bản đồ hoặc chuyển tự do giữa Vòng 1, Vòng 2, Vòng 3 để phù hợp với thời lượng tiết học. Khám phá xong Vòng 1 của 5 trạm sẽ mở khóa ngay cảnh <strong>Ngày Hội Xanh</strong>.</li>
            </ul>
          </div>

          <!-- Gợi ý phân hóa độ tuổi 3 tuổi và 4-5 tuổi -->
          <div class="teacher-section">
            <h3>🌱 Gợi ý hỗ trợ phân hóa cho Lớp ghép (3, 4, 5 tuổi)</h3>
            <ul>
              <li><strong>Với trẻ 3 tuổi (Vòng 1 mỗi trạm):</strong> Khuyến khích trẻ dùng ngón trỏ chạm từng vật hoặc kéo thả 2 điểm đơn giản, dựa vào bóng mờ/hình mẫu trực quan và đếm trong phạm vi 1 – 5.</li>
              <li><strong>Với trẻ 4 – 5 tuổi (Vòng 2 & Vòng 3):</strong> Yêu cầu trẻ tự đếm nhẩm, tự lấy đúng số lượng đến 8 – 9 mà không cần bóng gợi ý, đồng thời đặt câu hỏi <em>"Vì sao con biết đã đủ/thừa?"</em> hoặc <em>"Muốn đủ 9 thì cần thêm mấy?"</em>.</li>
            </ul>
          </div>

          <!-- Xóa tiến trình có xác nhận 2 bước -->
          <div class="teacher-controls-row" style="background:#fff3e0;border-color:#ffb74d;">
            <div>
              <strong>🔄 Đặt lại dữ liệu sao & tiến trình:</strong>
              <p style="font-size:0.92rem;color:#5d4037;">Dùng khi cô muốn bắt đầu mới hoàn toàn cho một ca học/lớp học khác.</p>
            </div>
            <button id="btn-ask-reset" class="hud-btn btn-orange" type="button">
              🗑️ Xóa tiến trình
            </button>
            <div id="confirm-reset-box" class="confirm-reset-panel">
              <strong style="color:#c62828;">Cô có chắc chắn muốn xóa toàn bộ sao và tiến trình về 0 không?</strong>
              <button id="btn-confirm-reset-yes" class="hud-btn" type="button" style="background:#d32f2f;color:#fff;border-color:#b71c1c;min-height:48px;">
                Đồng ý xóa
              </button>
              <button id="btn-confirm-reset-no" class="hud-btn" type="button" style="background:#fff;min-height:48px;">
                Hủy bỏ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lớp hiệu ứng hạt ngôi sao / pháo hoa -->
    <div id="fx-layer" aria-hidden="true"></div>
  </div>

  <!-- ==========================================================================
       PHẦN JAVASCRIPT CỐT LÕI (BƯỚC 1)
       ========================================================================== -->
  <script>
    // CÔ THAY ĐƯỜNG DẪN FILE GHI ÂM TẠI ĐÂY
    const AUDIO_FILES = {
      // 1. Lời chào & dẫn nhập bản đồ
      welcome: './am-thanh/loi-chao-bat-dau.mp3',
      mapIntro: './am-thanh/chon-tram-tren-ban-do.mp3',

      // 2. Tiếng đếm số từ 1 đến 9
      numbers: {
        1: './am-thanh/so-1.mp3',
        2: './am-thanh/so-2.mp3',
        3: './am-thanh/so-3.mp3',
        4: './am-thanh/so-4.mp3',
        5: './am-thanh/so-5.mp3',
        6: './am-thanh/so-6.mp3',
        7: './am-thanh/so-7.mp3',
        8: './am-thanh/so-8.mp3',
        9: './am-thanh/so-9.mp3'
      },

      // 3. Tiếng tổng kết số lượng sau khi đếm xong số cuối
      summary: {
        1: './am-thanh/tat-ca-co-1.mp3',
        2: './am-thanh/tat-ca-co-2.mp3',
        3: './am-thanh/tat-ca-co-3.mp3',
        4: './am-thanh/tat-ca-co-4.mp3',
        5: './am-thanh/tat-ca-co-5.mp3',
        6: './am-thanh/tat-ca-co-6.mp3',
        7: './am-thanh/tat-ca-co-7.mp3',
        8: './am-thanh/tat-ca-co-8.mp3',
        9: './am-thanh/tat-ca-co-9.mp3'
      },

      // 4. Lời thoại phản hồi
      feedback: {
        correct: './am-thanh/khen-dung-roi.mp3',
        tryAgain: './am-thanh/be-thu-lai-nhe.mp3',
        wrongType: './am-thanh/chua-dung-loai.mp3',
        notEnough: './am-thanh/chua-du-so-luong.mp3',
        tooMany: './am-thanh/nhieu-hon-roi.mp3',
        recount: './am-thanh/be-dem-lai-nhe.mp3',
        roundComplete: './am-thanh/hoan-thanh-vong-choi.mp3',
        festivalUnlock: './am-thanh/mo-khoa-ngay-hoi-xanh.mp3',
        festivalCelebration: './am-thanh/chuc-mung-ngay-hoi-xanh.mp3'
      },

      // 5. Hướng dẫn từng bước của 5 trạm
      stations: {
        1: {
          intro: './am-thanh/tram1-gioi-thieu.mp3',
          round1: './am-thanh/tram1-vong1-huong-dan.mp3',
          round2: './am-thanh/tram1-vong2-huong-dan.mp3',
          round3: './am-thanh/tram1-vong3-huong-dan.mp3',
          stepWater: './am-thanh/tram1-buoc-tuoi-nuoc.mp3',
          stepChooseNumber: './am-thanh/tram1-buoc-chon-the-so.mp3'
        },
        2: {
          intro: './am-thanh/tram2-gioi-thieu.mp3',
          round1: './am-thanh/tram2-vong1-huong-dan.mp3',
          round2: './am-thanh/tram2-vong2-huong-dan.mp3',
          round3: './am-thanh/tram2-vong3-huong-dan.mp3',
          stepFind: './am-thanh/tram2-buoc-tim-ban.mp3',
          stepCount: './am-thanh/tram2-buoc-dem-ban.mp3'
        },
        3: {
          intro: './am-thanh/tram3-gioi-thieu.mp3',
          round1: './am-thanh/tram3-vong1-huong-dan.mp3',
          round2: './am-thanh/tram3-vong2-huong-dan.mp3',
          round3: './am-thanh/tram3-vong3-huong-dan.mp3',
          stepPack: './am-thanh/tram3-buoc-xep-gio.mp3',
          stepConfirm: './am-thanh/tram3-buoc-giao-hang.mp3'
        },
        4: {
          intro: './am-thanh/tram4-gioi-thieu.mp3',
          round1: './am-thanh/tram4-vong1-huong-dan.mp3',
          round2: './am-thanh/tram4-vong2-huong-dan.mp3',
          round3: './am-thanh/tram4-vong3-huong-dan.mp3',
          stepLoadTrain: './am-thanh/tram4-buoc-xep-toa-tau.mp3',
          stepDepart: './am-thanh/tram4-buoc-tau-chay.mp3'
        },
        5: {
          intro: './am-thanh/tram5-gioi-thieu.mp3',
          round1: './am-thanh/tram5-vong1-huong-dan.mp3',
          round2: './am-thanh/tram5-vong2-huong-dan.mp3',
          round3: './am-thanh/tram5-vong3-huong-dan.mp3',
          stepEquip: './am-thanh/tram5-buoc-chon-do-nghe.mp3',
          stepComplete: './am-thanh/tram5-buoc-hoan-thanh.mp3'
        }
      }
    };

    /* ==========================================================================
       1. DANH MỤC 5 TRẠM TRÊN BẢN ĐỒ
       ========================================================================== */
    const STATIONS_META = [
      {
        id: 1,
        name: 'Vườn hoa thức giấc',
        shortDesc: 'Tưới nước & đếm hoa nở',
        iconType: 'garden'
      },
      {
        id: 2,
        name: 'Khu rừng tìm bạn',
        shortDesc: 'Tìm & đếm các bạn thú',
        iconType: 'forest'
      },
      {
        id: 3,
        name: 'Phiên chợ nông trại',
        shortDesc: 'Xếp nông sản vào giỏ',
        iconType: 'market'
      },
      {
        id: 4,
        name: 'Chuyến tàu Ngày Hội Xanh',
        shortDesc: 'Xếp toa tàu & quà xanh',
        iconType: 'train'
      },
      {
        id: 5,
        name: 'Thị trấn nghề nghiệp',
        shortDesc: 'Chuẩn bị đồ nghề giúp cô chú',
        iconType: 'town'
      }
    ];

    /* ==========================================================================
       2. HỆ THỐNG QUẢN LÝ TRẠNG THÁI (STATE) & LOCALSTORAGE AN TOÀN
       ========================================================================== */
    const STORAGE_KEY = 'HANH_TRINH_XANH_SAVE_V1';

    const AppState = {
      data: {
        stars: 0,
        muted: false,
        bgMotionEnabled: true,
        // Lưu trạng thái hoàn thành 3 vòng của từng trạm: { 1: [false, false, false], ... }
        completedRounds: {
          1: [false, false, false],
          2: [false, false, false],
          3: [false, false, false],
          4: [false, false, false],
          5: [false, false, false]
        },
        // Đánh dấu Đã khám phá khi hoàn thành Vòng 1
        exploredStations: {
          1: false,
          2: false,
          3: false,
          4: false,
          5: false
        }
      },
      currentScreen: 'welcome', // 'welcome' | 'map' | 'station' | 'festival'
      currentStationId: 1,
      currentRoundIndex: 0, // 0, 1, 2 (tương ứng Vòng 1, 2, 3)
      lastInstructionAudio: null,
      lastInstructionText: '',

      load() {
        try {
          const raw = window.localStorage.getItem(STORAGE_KEY);
          if (raw) {
            const parsed = JSON.parse(raw);
            if (typeof parsed.stars === 'number') this.data.stars = parsed.stars;
            if (typeof parsed.muted === 'boolean') this.data.muted = parsed.muted;
            if (typeof parsed.bgMotionEnabled === 'boolean') this.data.bgMotionEnabled = parsed.bgMotionEnabled;
            if (parsed.completedRounds) {
              for (let s = 1; s <= 5; s++) {
                if (Array.isArray(parsed.completedRounds[s]) && parsed.completedRounds[s].length === 3) {
                  this.data.completedRounds[s] = parsed.completedRounds[s].map(Boolean);
                }
              }
            }
            if (parsed.exploredStations) {
              for (let s = 1; s <= 5; s++) {
                this.data.exploredStations[s] = Boolean(
                  parsed.exploredStations[s] || this.data.completedRounds[s][0]
                );
              }
            }
          }
        } catch (err) {
          // Dự phòng an toàn khi trình duyệt chặn localStorage
        }
      },

      save() {
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
        } catch (err) {
          // Bỏ qua nếu localStorage bị khóa trong iframe/webview
        }
      },

      /**
       * Đánh dấu hoàn thành 1 vòng chơi.
       * Không cộng sao trùng nếu vòng đó đã từng hoàn thành.
       */
      completeRound(stationId, roundIndex) {
        const rounds = this.data.completedRounds[stationId];
        if (!rounds) return { earnedNewStar: false, unlockedFestivalNow: false };

        const wasFestivalUnlocked = this.isFestivalUnlocked();
        let earnedNewStar = false;

        if (!rounds[roundIndex]) {
          rounds[roundIndex] = true;
          this.data.stars += 1;
          earnedNewStar = true;
        }

        // Hoàn thành vòng 1 (roundIndex === 0) hoặc bất kỳ vòng nào của trạm -> Đã khám phá
        if (roundIndex === 0 || rounds[0]) {
          this.data.exploredStations[stationId] = true;
        }

        const isFestivalUnlockedNow = this.isFestivalUnlocked();
        const unlockedFestivalNow = !wasFestivalUnlocked && isFestivalUnlockedNow;

        this.save();
        return { earnedNewStar, unlockedFestivalNow };
      },

      getExploredCount() {
        let count = 0;
        for (let s = 1; s <= 5; s++) {
          if (this.data.exploredStations[s] || this.data.completedRounds[s][0]) {
            count++;
          }
        }
        return count;
      },

      isFestivalUnlocked() {
        return this.getExploredCount() >= 5;
      },

      resetProgress() {
        this.data.stars = 0;
        for (let s = 1; s <= 5; s++) {
          this.data.completedRounds[s] = [false, false, false];
          this.data.exploredStations[s] = false;
        }
        this.save();
      }
    };

    /* ==========================================================================
       3. HỆ THỐNG ÂM THANH (QUEUE FILE GHI ÂM + WEB AUDIO API TỔNG HỢP)
       ========================================================================== */
    const AudioSystem = {
      ctx: null,
      queue: [],
      isPlayingQueue: false,
      currentAudio: null,
      currentWatchdog: null,
      missingFiles: new Set(),
      audioCache: new Map(),
      queueSessionId: 0,

      initContext() {
        if (!this.ctx) {
          const AudioCtx = window.AudioContext || window.webkitAudioContext;
          if (AudioCtx) {
            this.ctx = new AudioCtx();
          }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume().catch(() => {});
        }
      },

      /**
       * Xóa toàn bộ hàng đợi thoại ngay lập tức khi đổi bước / đổi cảnh / tắt tiếng
       */
      clearQueue() {
        this.queueSessionId += 1;
        this.queue = [];
        this.isPlayingQueue = false;
        if (this.currentWatchdog) {
          clearTimeout(this.currentWatchdog);
          this.currentWatchdog = null;
        }
        if (this.currentAudio) {
          try {
            this.currentAudio.pause();
            this.currentAudio.currentTime = 0;
          } catch (e) {}
          this.currentAudio = null;
        }
      },

      /**
       * Phát 1 lời thoại đơn lẻ (xóa hàng đợi cũ để chỉ phát 1 lời thoại tại 1 thời điểm)
       */
      speakSingle(fileUrl, onDone) {
        this.clearQueue();
        this.enqueue(fileUrl, onDone);
      },

      /**
       * Đưa 1 file âm thanh hoặc callback vào hàng đợi tuần tự
       */
      enqueue(fileUrl, onDone) {
        if (AppState.data.muted) {
          if (typeof onDone === 'function') onDone();
          return;
        }
        this.queue.push({ fileUrl, onDone });
        if (!this.isPlayingQueue) {
          this._processNext(this.queueSessionId);
        }
      },

      /**
       * Xếp hàng đợi đếm số tuần tự và chờ số cuối kết thúc mới đọc câu tổng kết
       */
      enqueueCountNumber(numberValue, isFinalNumber = false, onSummaryDone = null) {
        const numUrl = AUDIO_FILES.numbers[numberValue];
        this.enqueue(numUrl, () => {
          if (isFinalNumber) {
            const sumUrl = AUDIO_FILES.summary[numberValue];
            this.enqueue(sumUrl, onSummaryDone);
          }
        });
      },

      _processNext(sessionId) {
        if (sessionId !== this.queueSessionId) return;
        if (AppState.data.muted || this.queue.length === 0) {
          this.isPlayingQueue = false;
          return;
        }

        this.isPlayingQueue = true;
        const item = this.queue.shift();
        const { fileUrl, onDone } = item;

        const finishItem = () => {
          if (sessionId !== this.queueSessionId) return;
          if (this.currentWatchdog) {
            clearTimeout(this.currentWatchdog);
            this.currentWatchdog = null;
          }
          this.currentAudio = null;
          if (typeof onDone === 'function') {
            try { onDone(); } catch (e) {}
          }
          this._processNext(sessionId);
        };

        // Nếu không có đường dẫn hoặc file đã xác định thiếu trong phiên chơi -> bỏ qua ngay, không tải lại
        if (!fileUrl || this.missingFiles.has(fileUrl)) {
          finishItem();
          return;
        }

        try {
          let audio = this.audioCache.get(fileUrl);
          if (!audio) {
            audio = new Audio();
            audio.preload = 'auto';
            audio.src = fileUrl;
            this.audioCache.set(fileUrl, audio);
          } else {
            audio.pause();
            audio.currentTime = 0;
          }

          this.currentAudio = audio;
          let settled = false;

          const cleanupAndFinish = (markMissing = false) => {
            if (settled) return;
            settled = true;
            audio.onended = null;
            audio.onerror = null;
            if (markMissing) {
              this.missingFiles.add(fileUrl);
              this.audioCache.delete(fileUrl);
            }
            finishItem();
          };

          audio.onended = () => cleanupAndFinish(false);
          audio.onerror = () => cleanupAndFinish(true);

          // Safety watchdog chỉ kích hoạt nếu trình duyệt treo mạng quá lâu (15 giây)
          this.currentWatchdog = setTimeout(() => {
            cleanupAndFinish(false);
          }, 15000);

          const playPromise = audio.play();
          if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(() => {
              cleanupAndFinish(true);
            });
          }
        } catch (err) {
          this.missingFiles.add(fileUrl);
          finishItem();
        }
      },

      /* --- HIỆU ỨNG ÂM THANH TỔNG HỢP BẰNG WEB AUDIO API --- */
      playTap() {
        if (AppState.data.muted) return;
        this.initContext();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(780, now + 0.08);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.09);
      },

      playCorrect() {
        if (AppState.data.muted) return;
        this.initContext();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0.22, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.26);
        });
      },

      playWrong() {
        // Tiếng bụp nhẹ ấm áp, không chói tai
        if (AppState.data.muted) return;
        this.initContext();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(280, now);
        osc.frequency.exponentialRampToValueAtTime(170, now + 0.18);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.21);
      },

      playWater() {
        if (AppState.data.muted) return;
        this.initContext();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        [0, 0.07, 0.14].forEach((offset, i) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(420 + i * 110, now + offset);
          osc.frequency.exponentialRampToValueAtTime(880 + i * 120, now + offset + 0.09);
          gain.gain.setValueAtTime(0.14, now + offset);
          gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.1);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + offset);
          osc.stop(now + offset + 0.11);
        });
      },

      playCoin() {
        if (AppState.data.muted) return;
        this.initContext();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(987.77, now);
        osc.frequency.setValueAtTime(1318.51, now + 0.07);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.29);
      },

      playTrainHorn() {
        if (AppState.data.muted) return;
        this.initContext();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        [349.23, 440.0].forEach((freq) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now);
          gain.gain.setValueAtTime(0.15, now);
          gain.gain.setValueAtTime(0.15, now + 0.22);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.46);
        });
      },

      playCarHorn() {
        if (AppState.data.muted) return;
        this.initContext();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        [0, 0.16].forEach((offset) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(480, now + offset);
          gain.gain.setValueAtTime(0.1, now + offset);
          gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.11);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + offset);
          osc.stop(now + offset + 0.12);
        });
      },

      playFanfare() {
        if (AppState.data.muted) return;
        this.initContext();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const melody = [
          { f: 523.25, t: 0, d: 0.14 },
          { f: 659.25, t: 0.14, d: 0.14 },
          { f: 783.99, t: 0.28, d: 0.14 },
          { f: 1046.5, t: 0.42, d: 0.38 }
        ];
        melody.forEach((n) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(n.f, now + n.t);
          gain.gain.setValueAtTime(0.22, now + n.t);
          gain.gain.exponentialRampToValueAtTime(0.001, now + n.t + n.d);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + n.t);
          osc.stop(now + n.t + n.d + 0.02);
        });
      }
    };

    /* ==========================================================================
       4. THƯ VIỆN SVG NHÂN VẬT & BIỂU TƯỢNG DÙNG CHUNG (HOẠT HÌNH 2D BO TRÒN)
       ========================================================================== */
    const SVG_LIB = {
      /**
       * Nhân vật chính: Thỏ Bông
       * @param {'idle'|'happy'|'encourage'} state - 3 trạng thái biểu cảm bắt buộc
       */
      getThoBongSVG(state = 'idle') {
        let eyesMarkup = '';
        let mouthMarkup = '';
        let cheeksMarkup = `
          <ellipse cx="68" cy="122" rx="10" ry="6" fill="#ff8a80" opacity="0.65"/>
          <ellipse cx="132" cy="122" rx="10" ry="6" fill="#ff8a80" opacity="0.65"/>
        `;

        if (state === 'happy') {
          eyesMarkup = `
            <path d="M72,105 Q80,95 88,105" fill="none" stroke="#263238" stroke-width="4.5" stroke-linecap="round"/>
            <path d="M112,105 Q120,95 128,105" fill="none" stroke="#263238" stroke-width="4.5" stroke-linecap="round"/>
          `;
          mouthMarkup = `
            <path d="M88,122 Q100,138 112,122 Z" fill="#ef5350" stroke="#263238" stroke-width="3" stroke-linejoin="round"/>
          `;
        } else if (state === 'encourage') {
          eyesMarkup = `
            <g class="char-eye-blink">
              <circle cx="80" cy="106" r="6.5" fill="#263238"/>
              <circle cx="78" cy="104" r="2.2" fill="#ffffff"/>
              <circle cx="120" cy="106" r="6.5" fill="#263238"/>
              <circle cx="118" cy="104" r="2.2" fill="#ffffff"/>
            </g>
            <path d="M70,94 Q80,90 88,95" fill="none" stroke="#5d4037" stroke-width="3" stroke-linecap="round"/>
            <path d="M112,95 Q120,90 130,94" fill="none" stroke="#5d4037" stroke-width="3" stroke-linecap="round"/>
          `;
          mouthMarkup = `
            <path d="M91,125 Q100,131 109,124" fill="none" stroke="#263238" stroke-width="3.5" stroke-linecap="round"/>
          `;
        } else {
          // Trạng thái chờ (idle)
          eyesMarkup = `
            <g class="char-eye-blink">
              <circle cx="80" cy="106" r="6.5" fill="#263238"/>
              <circle cx="78" cy="104" r="2.2" fill="#ffffff"/>
              <circle cx="120" cy="106" r="6.5" fill="#263238"/>
              <circle cx="118" cy="104" r="2.2" fill="#ffffff"/>
            </g>
          `;
          mouthMarkup = `
            <path d="M92,123 Q100,130 108,123" fill="none" stroke="#263238" stroke-width="3.5" stroke-linecap="round"/>
          `;
        }

        return `
          <svg class="character-svg-root" viewBox="0 0 200 220" width="100%" height="100%">
            <!-- Bóng đổ dưới chân -->
            <ellipse cx="100" cy="206" rx="52" ry="10" fill="rgba(0,0,0,0.16)"/>
            <!-- Chân tròn -->
            <ellipse cx="78" cy="194" rx="18" ry="11" fill="#ffffff" stroke="#546e7a" stroke-width="3.5"/>
            <ellipse cx="122" cy="194" rx="18" ry="11" fill="#ffffff" stroke="#546e7a" stroke-width="3.5"/>
            <!-- Thân mặc yếm xanh lá mầm -->
            <ellipse cx="100" cy="158" rx="38" ry="36" fill="#ffffff" stroke="#546e7a" stroke-width="3.5"/>
            <path d="M72,148 Q100,156 128,148 L124,186 Q100,194 76,186 Z" fill="#66bb6a" stroke="#2e7d32" stroke-width="3"/>
            <circle cx="84" cy="156" r="4" fill="#ffd54f"/>
            <circle cx="116" cy="156" r="4" fill="#ffd54f"/>
            <!-- Tay trái & Tay phải vẫy -->
            <g class="char-arm-wave">
              <ellipse cx="52" cy="148" rx="15" ry="10" transform="rotate(-25 52 148)" fill="#ffffff" stroke="#546e7a" stroke-width="3.5"/>
            </g>
            <ellipse cx="148" cy="152" rx="15" ry="10" transform="rotate(25 148 152)" fill="#ffffff" stroke="#546e7a" stroke-width="3.5"/>
            <!-- Nhóm Đầu & Tai Thỏ Bông -->
            <g class="char-head-group">
              <!-- Tai trái -->
              <ellipse cx="78" cy="44" rx="14" ry="36" transform="rotate(-10 78 44)" fill="#ffffff" stroke="#546e7a" stroke-width="3.5"/>
              <ellipse cx="78" cy="46" rx="7" ry="24" transform="rotate(-10 78 46)" fill="#ffcdd2"/>
              <!-- Tai phải -->
              <ellipse cx="122" cy="44" rx="14" ry="36" transform="rotate(10 122 44)" fill="#ffffff" stroke="#546e7a" stroke-width="3.5"/>
              <ellipse cx="122" cy="46" rx="7" ry="24" transform="rotate(10 122 46)" fill="#ffcdd2"/>
              <!-- Khuôn mặt tròn bầu bĩnh -->
              <ellipse cx="100" cy="108" rx="46" ry="38" fill="#ffffff" stroke="#546e7a" stroke-width="3.5"/>
              ${cheeksMarkup}
              ${eyesMarkup}
              <!-- Mũi hồng nhỏ -->
              <ellipse cx="100" cy="115" rx="6" ry="4.5" fill="#ff8a80"/>
              ${mouthMarkup}
              <!-- Chiếc lá non cài trên đầu -->
              <path d="M100,70 Q112,56 122,66 Q112,76 100,70 Z" fill="#4caf50" stroke="#1b5e20" stroke-width="2"/>
            </g>
          </svg>
        `;
      },

      /**
       * Bác Làm Vườn thân thiện (dùng ở Trạm 1, Trạm 3, Trạm 5 & Ngày Hội Xanh)
       */
      getGardenerSVG(state = 'idle') {
        const mouth = state === 'happy'
          ? `<path d="M88,116 Q100,130 112,116 Z" fill="#e53935" stroke="#3e2723" stroke-width="2.5"/>`
          : `<path d="M90,117 Q100,124 110,117" fill="none" stroke="#3e2723" stroke-width="3" stroke-linecap="round"/>`;
        return `
          <svg viewBox="0 0 200 220" width="100%" height="100%">
            <ellipse cx="100" cy="206" rx="50" ry="10" fill="rgba(0,0,0,0.16)"/>
            <rect x="74" y="176" width="18" height="26" rx="8" fill="#5d4037"/>
            <rect x="108" y="176" width="18" height="26" rx="8" fill="#5d4037"/>
            <!-- Thân áo & yếm làm vườn -->
            <rect x="64" y="128" width="72" height="56" rx="24" fill="#ffb74d" stroke="#e65100" stroke-width="3"/>
            <path d="M74,132 L126,132 L122,182 L78,182 Z" fill="#43a047" stroke="#1b5e20" stroke-width="3"/>
            <!-- Tay -->
            <ellipse cx="52" cy="150" rx="14" ry="10" fill="#ffcc80" stroke="#8d6e63" stroke-width="3"/>
            <ellipse cx="148" cy="150" rx="14" ry="10" fill="#ffcc80" stroke="#8d6e63" stroke-width="3"/>
            <!-- Đầu -->
            <circle cx="100" cy="100" r="36" fill="#ffe0b2" stroke="#8d6e63" stroke-width="3"/>
            <!-- Mắt & Miệng -->
            <circle cx="86" cy="98" r="5" fill="#3e2723"/>
            <circle cx="114" cy="98" r="5" fill="#3e2723"/>
            <ellipse cx="76" cy="108" rx="7" ry="4" fill="#ff8a80" opacity="0.6"/>
            <ellipse cx="124" cy="108" rx="7" ry="4" fill="#ff8a80" opacity="0.6"/>
            ${mouth}
            <!-- Mũ rơm vàng rộng vành -->
            <ellipse cx="100" cy="70" rx="58" ry="14" fill="#ffd54f" stroke="#f57f17" stroke-width="3.5"/>
            <path d="M68,68 Q100,32 132,68 Z" fill="#ffe082" stroke="#f57f17" stroke-width="3.5"/>
            <path d="M69,64 Q100,72 131,64" fill="none" stroke="#43a047" stroke-width="5"/>
          </svg>
        `;
      },

      /**
       * Bạn thú rừng / Khách hàng nông trại / Nhân vật thị trấn dùng chung
       * @param {'bear'|'fox'|'monkey'|'conductor'|'firefighter'|'doctor'|'chef'} role
       */
      getFriendCharacterSVG(role = 'bear', state = 'idle') {
        const colors = {
          bear: { main: '#a1887f', ear: '#6d4c41', shirt: '#29b6f6', hat: 'none' },
          fox: { main: '#ff8a65', ear: '#d84315', shirt: '#66bb6a', hat: 'none' },
          monkey: { main: '#bcaaa4', ear: '#8d6e63', shirt: '#ffa726', hat: 'none' },
          conductor: { main: '#ffcc80', ear: '#ffb74d', shirt: '#1e88e5', hat: 'conductor' },
          firefighter: { main: '#ffcc80', ear: '#ffb74d', shirt: '#e53935', hat: 'fire' },
          doctor: { main: '#ffcc80', ear: '#ffb74d', shirt: '#ffffff', hat: 'doctor' },
          chef: { main: '#ffcc80', ear: '#ffb74d', shirt: '#fff8e1', hat: 'chef' }
        };
        const c = colors[role] || colors.bear;
        let hatSvg = '';
        if (c.hat === 'conductor') {
          hatSvg = `<path d="M66,70 L134,70 L128,46 L72,46 Z" fill="#1565c0" stroke="#0d47a1" stroke-width="3"/><ellipse cx="100" cy="72" rx="38" ry="7" fill="#0d47a1"/><circle cx="100" cy="58" r="6" fill="#ffd54f"/>`;
        } else if (c.hat === 'fire') {
          hatSvg = `<path d="M60,74 Q100,36 140,74 Z" fill="#d32f2f" stroke="#b71c1c" stroke-width="3"/><rect x="92" y="48" width="16" height="14" rx="4" fill="#ffd54f"/>`;
        } else if (c.hat === 'doctor') {
          hatSvg = `<rect x="74" y="46" width="52" height="24" rx="8" fill="#ffffff" stroke="#90a4ae" stroke-width="3"/><path d="M100,52 L100,64 M94,58 L106,58" stroke="#e53935" stroke-width="4" stroke-linecap="round"/>`;
        } else if (c.hat === 'chef') {
          hatSvg = `<path d="M72,72 L72,50 Q66,32 86,36 Q100,24 114,36 Q134,32 128,50 L128,72 Z" fill="#ffffff" stroke="#b0bec5" stroke-width="3"/>`;
        }

        const mouth = state === 'happy'
          ? `<path d="M88,116 Q100,129 112,116 Z" fill="#ef5350" stroke="#3e2723" stroke-width="2.5"/>`
          : `<path d="M90,117 Q100,124 110,117" fill="none" stroke="#3e2723" stroke-width="3" stroke-linecap="round"/>`;

        return `
          <svg viewBox="0 0 200 220" width="100%" height="100%">
            <ellipse cx="100" cy="206" rx="48" ry="10" fill="rgba(0,0,0,0.15)"/>
            <ellipse cx="80" cy="192" rx="15" ry="10" fill="${c.ear}" stroke="#3e2723" stroke-width="3"/>
            <ellipse cx="120" cy="192" rx="15" ry="10" fill="${c.ear}" stroke="#3e2723" stroke-width="3"/>
            <rect x="66" y="130" width="68" height="56" rx="24" fill="${c.shirt}" stroke="#37474f" stroke-width="3"/>
            <ellipse cx="52" cy="152" rx="13" ry="9" fill="${c.main}" stroke="#3e2723" stroke-width="3"/>
            <ellipse cx="148" cy="152" rx="13" ry="9" fill="${c.main}" stroke="#3e2723" stroke-width="3"/>
            <!-- Tai tròn -->
            <circle cx="68" cy="74" r="14" fill="${c.ear}" stroke="#3e2723" stroke-width="3"/>
            <circle cx="132" cy="74" r="14" fill="${c.ear}" stroke="#3e2723" stroke-width="3"/>
            <!-- Đầu -->
            <circle cx="100" cy="100" r="36" fill="${c.main}" stroke="#3e2723" stroke-width="3"/>
            <circle cx="86" cy="98" r="5" fill="#263238"/>
            <circle cx="114" cy="98" r="5" fill="#263238"/>
            <ellipse cx="100" cy="108" rx="6" ry="4" fill="#5d4037"/>
            ${mouth}
            ${hatSvg}
          </svg>
        `;
      },

      /**
       * Biểu tượng minh họa cho 5 trạm trên bản đồ
       */
      getStationIconSVG(type) {
        if (type === 'garden') {
          return `<svg viewBox="0 0 80 70" class="station-icon-svg">
            <rect x="24" y="42" width="32" height="22" rx="5" fill="#d84315" stroke="#bf360c" stroke-width="2.5"/>
            <path d="M40,42 L40,22" stroke="#2e7d32" stroke-width="4" stroke-linecap="round"/>
            <circle cx="40" cy="20" r="14" fill="#ff80ab" stroke="#c2185b" stroke-width="2.5"/>
            <circle cx="40" cy="20" r="6" fill="#ffd54f"/>
          </svg>`;
        }
        if (type === 'forest') {
          return `<svg viewBox="0 0 80 70" class="station-icon-svg">
            <rect x="34" y="44" width="12" height="20" rx="3" fill="#6d4c41"/>
            <polygon points="40,8 14,46 66,46" fill="#43a047" stroke="#1b5e20" stroke-width="2.5" stroke-linejoin="round"/>
            <polygon points="40,18 20,48 60,48" fill="#66bb6a"/>
          </svg>`;
        }
        if (type === 'market') {
          return `<svg viewBox="0 0 80 70" class="station-icon-svg">
            <path d="M16,32 L64,32 L56,58 L24,58 Z" fill="#ffb74d" stroke="#e65100" stroke-width="2.5" stroke-linejoin="round"/>
            <path d="M26,32 Q40,10 54,32" fill="none" stroke="#8d6e63" stroke-width="4" stroke-linecap="round"/>
            <circle cx="32" cy="28" r="8" fill="#e53935"/>
            <circle cx="48" cy="28" r="8" fill="#fdd835"/>
          </svg>`;
        }
        if (type === 'train') {
          return `<svg viewBox="0 0 80 70" class="station-icon-svg">
            <rect x="14" y="24" width="52" height="28" rx="6" fill="#29b6f6" stroke="#0277bd" stroke-width="2.5"/>
            <rect x="46" y="14" width="16" height="14" rx="3" fill="#ffd54f" stroke="#f57f17" stroke-width="2"/>
            <circle cx="26" cy="54" r="8" fill="#37474f" stroke="#cfd8dc" stroke-width="2.5"/>
            <circle cx="54" cy="54" r="8" fill="#37474f" stroke="#cfd8dc" stroke-width="2.5"/>
          </svg>`;
        }
        return `<svg viewBox="0 0 80 70" class="station-icon-svg">
          <rect x="18" y="26" width="44" height="36" rx="4" fill="#fff59d" stroke="#f57f17" stroke-width="2.5"/>
          <polygon points="40,8 12,28 68,28" fill="#ef5350" stroke="#b71c1c" stroke-width="2.5" stroke-linejoin="round"/>
          <rect x="33" y="42" width="14" height="20" rx="3" fill="#29b6f6"/>
        </svg>`;
      }
    };

    /* ==========================================================================
       5. BỘ ĐẾM 10 GIÂY KHÔNG THAO TÁC -> GỢI Ý VÙNG CẦN CHÚ Ý (IDLE HINT)
       ========================================================================== */
    const IdleHintSystem = {
      timer: null,
      timeoutMs: 10000, // Đúng 10 giây không thao tác

      init() {
        const resetEvents = ['pointerdown', 'pointermove', 'keydown', 'touchstart'];
        resetEvents.forEach((evt) => {
          window.addEventListener(evt, () => this.resetTimer(), { passive: true });
        });
        this.resetTimer();
      },

      resetTimer() {
        this.clearHintGlow();
        if (this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.triggerHintGlow();
        }, this.timeoutMs);
      },

      clearHintGlow() {
        document.querySelectorAll('.idle-hint-glow').forEach((el) => {
          el.classList.remove('idle-hint-glow');
        });
      },

      triggerHintGlow() {
        // Không tự giải hộ, chỉ làm sáng nhẹ vùng cần chú ý
        if (AppState.currentScreen === 'welcome') {
          const btnStart = document.getElementById('btn-start-game');
          if (btnStart) btnStart.classList.add('idle-hint-glow');
        } else if (AppState.currentScreen === 'map') {
          // Gợi ý trạm đầu tiên chưa khám phá hoặc trạm 1
          let targetNode = document.querySelector('.station-node:not(.explored)') || document.querySelector('.station-node');
          if (targetNode) targetNode.classList.add('idle-hint-glow');
        } else if (AppState.currentScreen === 'station') {
          // Làm sáng các phần tử có đánh dấu data-hint-target="true" trong sân khấu trạm
          const targets = document.querySelectorAll('#station-stage [data-hint-target="true"]');
          if (targets.length > 0) {
            targets.forEach((t) => t.classList.add('idle-hint-glow'));
          } else {
            const btnReplay = document.getElementById('btn-replay-voice');
            if (btnReplay) btnReplay.classList.add('idle-hint-glow');
          }
        }
      }
    };

    /* ==========================================================================
       6. HỆ THỐNG ĐIỀU PHỐI TRÒ CHƠI, BẢN ĐỒ & PHẢN HỒI SƯ PHẠM (GAME ENGINE)
       ========================================================================== */
    const GameEngine = {
      // Nơi lưu trữ 5 module trạm sẽ lắp ghép ở Bước 2 -> Bước 5
      stationModules: {},

      registerStation(stationId, moduleObj) {
        this.stationModules[stationId] = moduleObj;
      },

      init() {
        AppState.load();
        this.setupFullscreenButton();
        this.bindGlobalEvents();
        this.applySettingsToDOM();
        this.renderCharacters();
        this.renderMapStations();
        this.renderFestivalScene();
        IdleHintSystem.init();
      },

      setupFullscreenButton() {
        const btnFs = document.getElementById('btn-fullscreen');
        const canFs = Boolean(
          document.fullscreenEnabled ||
          document.webkitFullscreenEnabled ||
          document.documentElement.requestFullscreen ||
          document.documentElement.webkitRequestFullscreen
        );
        if (!canFs) {
          btnFs.style.display = 'none';
          return;
        }
        btnFs.style.display = 'inline-flex';
        btnFs.addEventListener('click', () => {
          AudioSystem.playTap();
          if (!document.fullscreenElement && !document.webkitFullscreenElement) {
            const req = document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen;
            if (req) req.call(document.documentElement).catch(() => {});
          } else {
            const exit = document.exitFullscreen || document.webkitExitFullscreen;
            if (exit) exit.call(document).catch(() => {});
          }
        });
      },

      applySettingsToDOM() {
        // Cập nhật số sao
        document.getElementById('hud-star-count').textContent = String(AppState.data.stars);

        // Cập nhật nút âm thanh
        const muteIcon = document.getElementById('mute-icon-holder');
        const muteLabel = document.getElementById('mute-label-text');
        if (AppState.data.muted) {
          muteIcon.textContent = '🔇';
          muteLabel.textContent = 'Đã tắt tiếng';
        } else {
          muteIcon.textContent = '🔊';
          muteLabel.textContent = 'Âm thanh';
        }

        // Cập nhật chuyển động lớp nền
        if (AppState.data.bgMotionEnabled) {
          document.body.classList.remove('bg-motion-off');
          document.getElementById('btn-toggle-bg-motion').textContent = '✅ Đang bật chuyển động nền';
        } else {
          document.body.classList.add('bg-motion-off');
          document.getElementById('btn-toggle-bg-motion').textContent = '⏸️ Đang tắt chuyển động nền';
        }
      },

      renderCharacters() {
        document.getElementById('welcome-bunny-holder').innerHTML = SVG_LIB.getThoBongSVG('happy');
        document.getElementById('map-bunny-holder').innerHTML = SVG_LIB.getThoBongSVG('idle');
        this.setCompanionState('idle');
      },

      /**
       * Đổi trạng thái biểu cảm của Thỏ Bông tại trạm chơi ('idle' | 'happy' | 'encourage')
       */
      setCompanionState(state = 'idle') {
        const holder = document.getElementById('station-bunny-holder');
        if (!holder) return;
        holder.classList.remove('state-idle', 'state-happy', 'state-encourage');
        holder.classList.add(`state-${state}`);
        holder.innerHTML = SVG_LIB.getThoBongSVG(state);
      },

      /**
       * Cập nhật lời hướng dẫn hiện tại (hỗ trợ nút Nghe lại)
       */
      setInstruction(text, audioUrl) {
        AppState.lastInstructionText = text;
        AppState.lastInstructionAudio = audioUrl;

        const bubble = document.getElementById('station-speech-bubble');
        const speechText = document.getElementById('station-speech-text');
        if (bubble && speechText) {
          bubble.classList.remove('feedback-encourage', 'feedback-correct');
          speechText.textContent = text;
        }
        this.setCompanionState('idle');
        if (audioUrl) {
          AudioSystem.speakSingle(audioUrl);
        }
      },

      /**
       * Phản hồi khi trẻ thao tác ĐÚNG
       */
      triggerCorrectFeedback(customMessage = 'Đúng rồi! Bé giỏi lắm!', audioUrl = AUDIO_FILES.feedback.correct) {
        AudioSystem.playCorrect();
        this.setCompanionState('happy');
        const bubble = document.getElementById('station-speech-bubble');
        const speechText = document.getElementById('station-speech-text');
        if (bubble && speechText) {
          bubble.classList.remove('feedback-encourage');
          bubble.classList.add('feedback-correct');
          speechText.textContent = `🌟 ${customMessage}`;
        }
        if (audioUrl) {
          AudioSystem.speakSingle(audioUrl);
        }
      },

      /**
       * Phản hồi nhẹ nhàng khi trẻ thao tác CHƯA ĐÚNG (Không dùng dấu X đỏ lớn hay lời chê)
       * @param {'wrongType'|'notEnough'|'tooMany'|'recount'|'tryAgain'} reasonType
       * @param {HTMLElement|null} targetElement - Vật thể cần lắc nhẹ viền cam
       */
      triggerEncourageFeedback(reasonType = 'tryAgain', targetElement = null) {
        AudioSystem.playWrong();
        this.setCompanionState('encourage');

        const messages = {
          wrongType: { icon: '🔄', text: 'Chưa đúng loại rồi, bé chọn lại nhé!', audio: AUDIO_FILES.feedback.wrongType },
          notEnough: { icon: '➕', text: 'Chưa đủ số lượng, bé thêm vào nhé!', audio: AUDIO_FILES.feedback.notEnough },
          tooMany:   { icon: '➖', text: 'Nhiều hơn rồi, bé bớt ra một chút nhé!', audio: AUDIO_FILES.feedback.tooMany },
          recount:   { icon: '👆', text: 'Bé đếm lại nhé, chậm rãi từng cái một!', audio: AUDIO_FILES.feedback.recount },
          tryAgain:  { icon: '💛', text: 'Gần đúng rồi, bé thử lại lần nữa nhé!', audio: AUDIO_FILES.feedback.tryAgain }
        };

        const msg = messages[reasonType] || messages.tryAgain;
        const bubble = document.getElementById('station-speech-bubble');
        const speechText = document.getElementById('station-speech-text');

        if (bubble && speechText) {
          bubble.classList.remove('feedback-correct');
          bubble.classList.add('feedback-encourage');
          speechText.textContent = `${msg.icon} ${msg.text}`;
        }

        if (targetElement) {
          targetElement.classList.remove('shake-gentle');
          void targetElement.offsetWidth;
          targetElement.classList.add('shake-gentle');
          setTimeout(() => targetElement.classList.remove('shake-gentle'), 650);
        }

        AudioSystem.speakSingle(msg.audio);
      },

      /**
       * Hoàn thành 1 vòng chơi: Cộng 1 sao, bắn pháo hoa ngôi sao, hiện nút Đi tiếp / Về bản đồ
       */
      completeCurrentRound(summaryMessage = 'Bé đã hoàn thành xuất sắc vòng chơi này!') {
        const sId = AppState.currentStationId;
        const rIdx = AppState.currentRoundIndex;
        const result = AppState.completeRound(sId, rIdx);

        this.applySettingsToDOM();
        this.renderMapStations();
        this.renderStationRoundTabs();
        this.setCompanionState('happy');
        this.spawnStarBurst(18);
        AudioSystem.playFanfare();

        const overlay = document.getElementById('round-complete-overlay');
        const descEl = document.getElementById('complete-dialog-desc');
        const starsRow = document.getElementById('complete-stars-svg');

        starsRow.innerHTML = [0, 1, 2].map((i) => {
          const done = AppState.data.completedRounds[sId][i];
          const fill = done ? '#ffb300' : '#e0e0e0';
          const stroke = done ? '#e65100' : '#9e9e9e';
          return `<svg width="56" height="56" viewBox="0 0 36 36">
            <polygon points="18,2 23,12 34,14 26,22 28,33 18,28 8,33 10,22 2,14 13,12"
                     fill="${fill}" stroke="${stroke}" stroke-width="2.5" stroke-linejoin="round"/>
          </svg>`;
        }).join('');

        if (result.unlockedFestivalNow) {
          descEl.textContent = `${summaryMessage} 🎉 Bé đã khám phá đủ 5 trạm và mở khóa Ngày Hội Xanh!`;
          AudioSystem.speakSingle(AUDIO_FILES.feedback.festivalUnlock);
        } else {
          descEl.textContent = summaryMessage;
          AudioSystem.speakSingle(AUDIO_FILES.feedback.roundComplete);
        }

        overlay.classList.add('active');
      },

      /**
       * Hiệu ứng pháo hoa ngôi sao bay lên
       */
      spawnStarBurst(count = 14) {
        const layer = document.getElementById('fx-layer');
        for (let i = 0; i < count; i++) {
          const star = document.createElement('div');
          star.className = 'fx-star';
          star.style.left = `${15 + Math.random() * 70}%`;
          star.style.top = `${25 + Math.random() * 55}%`;
          star.innerHTML = `<svg viewBox="0 0 36 36" width="100%" height="100%">
            <polygon points="18,2 23,12 34,14 26,22 28,33 18,28 8,33 10,22 2,14 13,12"
                     fill="#ffd54f" stroke="#f57f17" stroke-width="2"/>
          </svg>`;
          layer.appendChild(star);
          setTimeout(() => star.remove(), 1150);
        }
      },

      /**
       * Chuyển đổi giữa các màn hình chính
       */
      switchScreen(screenName) {
        AudioSystem.clearQueue();
        AppState.currentScreen = screenName;

        document.querySelectorAll('.screen-view').forEach((sc) => sc.classList.remove('active'));
        const target = document.getElementById(`screen-${screenName}`);
        if (target) target.classList.add('active');

        const btnBackMap = document.getElementById('btn-back-map');
        if (screenName === 'station' || screenName === 'festival') {
          btnBackMap.style.display = 'inline-flex';
        } else {
          btnBackMap.style.display = 'none';
        }

        if (screenName === 'map') {
          this.renderMapStations();
          AppState.lastInstructionAudio = AUDIO_FILES.mapIntro;
          AppState.lastInstructionText = 'Chào bé! Bé hãy chạm vào một trạm trên bản đồ để cùng Thỏ Bông khám phá nhé!';
          AudioSystem.speakSingle(AUDIO_FILES.mapIntro);
        } else if (screenName === 'festival') {
          this.spawnStarBurst(20);
          AudioSystem.playFanfare();
          AppState.lastInstructionAudio = AUDIO_FILES.feedback.festivalCelebration;
          AudioSystem.speakSingle(AUDIO_FILES.feedback.festivalCelebration);
        }
        IdleHintSystem.resetTimer();
      },

      /**
       * Vẽ Bản đồ 5 trạm và thanh tiến trình 3 vòng mỗi trạm
       */
      renderMapStations() {
        const container = document.getElementById('map-stations-container');
        container.innerHTML = '';

        STATIONS_META.forEach((st) => {
          const rounds = AppState.data.completedRounds[st.id] || [false, false, false];
          const isExplored = Boolean(AppState.data.exploredStations[st.id] || rounds[0]);

          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = `station-node ${isExplored ? 'explored' : ''}`;
          btn.setAttribute('data-station', String(st.id));
          btn.setAttribute('aria-label', `Trạm ${st.id}: ${st.name}`);

          const pipsHtml = rounds.map((done, idx) => `
            <span class="round-pip ${done ? 'done' : ''}" title="Vòng ${idx + 1}">★</span>
          `).join('');

          btn.innerHTML = `
            <span class="station-number-badge">${st.id}</span>
            <span class="station-explored-tag">✓ Đã khám phá</span>
            ${SVG_LIB.getStationIconSVG(st.iconType)}
            <div class="station-title">${st.name}</div>
            <div class="station-rounds-bar">${pipsHtml}</div>
          `;

          btn.addEventListener('click', () => {
            AudioSystem.playTap();
            // Chọn vòng đầu tiên chưa hoàn thành, hoặc Vòng 1 nếu đã xong cả 3
            const nextRoundIdx = rounds.findIndex((r) => !r);
            this.openStation(st.id, nextRoundIdx === -1 ? 0 : nextRoundIdx);
          });

          container.appendChild(btn);
        });

        // Cập nhật trạng thái nút Ngày Hội Xanh
        const festBtn = document.getElementById('btn-open-festival');
        const festIcon = document.getElementById('festival-btn-icon');
        const festText = document.getElementById('festival-btn-text');
        const exploredCount = AppState.getExploredCount();

        if (AppState.isFestivalUnlocked()) {
          festBtn.classList.remove('locked');
          festBtn.classList.add('unlocked');
          festIcon.textContent = '🎉';
          festText.textContent = 'Vào Ngày Hội Xanh!';
        } else {
          festBtn.classList.remove('unlocked');
          festBtn.classList.add('locked');
          festIcon.textContent = '🔒';
          festText.textContent = `Ngày Hội Xanh (${exploredCount}/5 trạm)`;
        }
      },

      /**
       * Mở một trạm cụ thể và khởi chạy vòng chơi
       */
      openStation(stationId, roundIndex = 0) {
        AppState.currentStationId = stationId;
        AppState.currentRoundIndex = roundIndex;

        const meta = STATIONS_META.find((m) => m.id === stationId) || STATIONS_META[0];
        document.getElementById('station-current-badge').textContent = `Trạm ${meta.id}`;
        document.getElementById('station-current-title').textContent = meta.name;
        document.getElementById('round-complete-overlay').classList.remove('active');

        this.switchScreen('station');
        this.renderStationRoundTabs();
        this.loadStationRoundStage(stationId, roundIndex);
      },

      renderStationRoundTabs() {
        const tabsContainer = document.getElementById('station-round-tabs');
        const sId = AppState.currentStationId;
        const rounds = AppState.data.completedRounds[sId] || [false, false, false];
        tabsContainer.innerHTML = '';

        [0, 1, 2].forEach((rIdx) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = `round-tab-btn ${rIdx === AppState.currentRoundIndex ? 'active' : ''} ${rounds[rIdx] ? 'completed' : ''}`;
          btn.textContent = `Vòng ${rIdx + 1}`;
          btn.addEventListener('click', () => {
            AudioSystem.playTap();
            document.getElementById('round-complete-overlay').classList.remove('active');
            AppState.currentRoundIndex = rIdx;
            this.renderStationRoundTabs();
            this.loadStationRoundStage(sId, rIdx);
          });
          tabsContainer.appendChild(btn);
        });
      },

      /**
       * Nạp nội dung tương tác của Trạm vào #station-stage
       */
      loadStationRoundStage(stationId, roundIndex) {
        AudioSystem.clearQueue();
        const stage = document.getElementById('station-stage');
        stage.innerHTML = '';

        const mod = this.stationModules[stationId];
        if (mod && typeof mod.render === 'function') {
          mod.render(stage, roundIndex);
        } else {
          // Giao diện khung chờ sẵn cho các trạm sẽ lắp ghép ở Bước 2 -> Bước 5
          const meta = STATIONS_META.find((m) => m.id === stationId);
          const roundAudioKey = `round${roundIndex + 1}`;
          const audioUrl = (AUDIO_FILES.stations[stationId] && AUDIO_FILES.stations[stationId][roundAudioKey]) || null;

          this.setInstruction(
            `Chào mừng bé đến với ${meta.name} — Vòng ${roundIndex + 1}!`,
            audioUrl
          );

          stage.innerHTML = `
            <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;text-align:center;gap:16px;">
              <div style="width:140px;height:140px;">${SVG_LIB.getGardenerSVG('happy')}</div>
              <h3 style="font-size:1.6rem;color:#1b5e20;font-weight:900;">
                Sân khấu ${meta.name} (Vòng ${roundIndex + 1})
              </h3>
              <p style="font-size:1.15rem;color:#2e7d32;font-weight:700;max-width:540px;">
                Khung trạm đã sẵn sàng! Cô có thể thử nghiệm hiệu ứng phản hồi đúng, phản hồi động viên và hoàn thành vòng ngay bên dưới:
              </p>
              <div style="display:flex;gap:14px;flex-wrap:wrap;justify-content:center;">
                <button type="button" id="demo-btn-encourage" class="hud-btn btn-orange" data-hint-target="true">
                  🔄 Thử phản hồi khi chọn sai
                </button>
                <button type="button" id="demo-btn-complete" class="hud-btn" style="background:#4caf50;color:#fff;border-color:#1b5e20;" data-hint-target="true">
                  🌟 Hoàn thành Vòng ${roundIndex + 1}
                </button>
              </div>
            </div>
          `;

          const btnEncourage = document.getElementById('demo-btn-encourage');
          const btnComplete = document.getElementById('demo-btn-complete');
          if (btnEncourage) {
            btnEncourage.addEventListener('click', () => {
              this.triggerEncourageFeedback('recount', btnEncourage);
            });
          }
          if (btnComplete) {
            btnComplete.addEventListener('click', () => {
              this.completeCurrentRound(`Hoan hô! Bé đã hoàn thành Vòng ${roundIndex + 1} tại ${meta.name}!`);
            });
          }
        }
      },

      /**
       * Vẽ Cảnh Lễ Hội Ngày Hội Xanh
       */
      renderFestivalScene() {
        const container = document.getElementById('festival-parade-container');
        if (!container) return;
        const characters = [
          { name: 'Thỏ Bông', svg: SVG_LIB.getThoBongSVG('happy') },
          { name: 'Bác Làm Vườn', svg: SVG_LIB.getGardenerSVG('happy') },
          { name: 'Bạn Gấu', svg: SVG_LIB.getFriendCharacterSVG('bear', 'happy') },
          { name: 'Bác Lái Tàu', svg: SVG_LIB.getFriendCharacterSVG('conductor', 'happy') },
          { name: 'Chú Cứu Hỏa', svg: SVG_LIB.getFriendCharacterSVG('firefighter', 'happy') }
        ];

        container.innerHTML = characters.map((ch) => `
          <div class="learning-item" style="width:clamp(105px,15vw,150px);text-align:center;cursor:pointer;">
            <div style="width:100%;height:clamp(115px,16vw,160px);">${ch.svg}</div>
            <span style="background:#fff;padding:4px 12px;border-radius:99px;font-weight:800;font-size:0.95rem;border:2px solid #2e7d32;display:inline-block;">
              ${ch.name}
            </span>
          </div>
        `).join('');

        container.querySelectorAll('.learning-item').forEach((item, idx) => {
          item.addEventListener('click', () => {
            if (idx === 3) AudioSystem.playTrainHorn();
            else if (idx === 4) AudioSystem.playCarHorn();
            else AudioSystem.playCorrect();
            this.spawnStarBurst(10);
          });
        });
      },

      bindGlobalEvents() {
        // 1. Nút Bắt đầu chơi ở màn hình chờ (kích hoạt Web Audio API)
        document.getElementById('btn-start-game').addEventListener('click', () => {
          AudioSystem.initContext();
          AudioSystem.playCorrect();
          AudioSystem.speakSingle(AUDIO_FILES.welcome, () => {
            AudioSystem.enqueue(AUDIO_FILES.mapIntro);
          });
          this.switchScreen('map');
        });

        // 2. Nút Về bản đồ
        document.getElementById('btn-back-map').addEventListener('click', () => {
          AudioSystem.playTap();
          document.getElementById('round-complete-overlay').classList.remove('active');
          this.switchScreen('map');
        });

        // 3. Nút Nghe lại hướng dẫn (hoặc chạm vào Thỏ Bông)
        const replayHandler = () => {
          AudioSystem.playTap();
          if (AppState.lastInstructionAudio) {
            AudioSystem.speakSingle(AppState.lastInstructionAudio);
          } else if (AppState.currentScreen === 'map') {
            AudioSystem.speakSingle(AUDIO_FILES.mapIntro);
          } else if (AppState.currentScreen === 'welcome') {
            AudioSystem.speakSingle(AUDIO_FILES.welcome);
          }
        };
        document.getElementById('btn-replay-voice').addEventListener('click', replayHandler);
        document.getElementById('station-bunny-holder').addEventListener('click', replayHandler);

        // 4. Nút Bật/Tắt Âm thanh
        document.getElementById('btn-toggle-mute').addEventListener('click', () => {
          AppState.data.muted = !AppState.data.muted;
          if (AppState.data.muted) {
            AudioSystem.clearQueue();
          } else {
            AudioSystem.playTap();
          }
          AppState.save();
          this.applySettingsToDOM();
        });

        // 5. Nút Đi tiếp & Về bản đồ trong hộp thoại Hoàn thành vòng
        document.getElementById('btn-complete-map').addEventListener('click', () => {
          AudioSystem.playTap();
          document.getElementById('round-complete-overlay').classList.remove('active');
          this.switchScreen('map');
        });

        document.getElementById('btn-complete-next').addEventListener('click', () => {
          AudioSystem.playTap();
          document.getElementById('round-complete-overlay').classList.remove('active');
          if (AppState.currentRoundIndex < 2) {
            this.openStation(AppState.currentStationId, AppState.currentRoundIndex + 1);
          } else {
            this.switchScreen('map');
          }
        });

        // 6. Nút mở Ngày Hội Xanh
        document.getElementById('btn-open-festival').addEventListener('click', () => {
          if (AppState.isFestivalUnlocked()) {
            AudioSystem.playTap();
            this.switchScreen('festival');
          } else {
            AudioSystem.playWrong();
            const mapSpeech = document.getElementById('map-speech-text');
            mapSpeech.textContent = `🌱 Bé hãy khám phá đủ 5 trạm (hoàn thành Vòng 1 mỗi trạm) để mở khóa Ngày Hội Xanh nhé!`;
          }
        });

        document.getElementById('btn-festival-fireworks').addEventListener('click', () => {
          AudioSystem.playFanfare();
          this.spawnStarBurst(24);
        });

        document.getElementById('btn-festival-back-map').addEventListener('click', () => {
          AudioSystem.playTap();
          this.switchScreen('map');
        });

        // 7. Bảng Dành cho cô và bố mẹ
        const teacherModal = document.getElementById('teacher-modal-backdrop');
        const confirmResetBox = document.getElementById('confirm-reset-box');

        document.getElementById('btn-open-teacher').addEventListener('click', () => {
          AudioSystem.playTap();
          confirmResetBox.classList.remove('active');
          teacherModal.classList.add('active');
        });

        document.getElementById('btn-close-teacher').addEventListener('click', () => {
          AudioSystem.playTap();
          teacherModal.classList.remove('active');
        });

        document.getElementById('btn-toggle-bg-motion').addEventListener('click', () => {
          AudioSystem.playTap();
          AppState.data.bgMotionEnabled = !AppState.data.bgMotionEnabled;
          AppState.save();
          this.applySettingsToDOM();
        });

        document.getElementById('btn-ask-reset').addEventListener('click', () => {
          AudioSystem.playTap();
          confirmResetBox.classList.add('active');
        });

        document.getElementById('btn-confirm-reset-no').addEventListener('click', () => {
          AudioSystem.playTap();
          confirmResetBox.classList.remove('active');
        });

        document.getElementById('btn-confirm-reset-yes').addEventListener('click', () => {
          AudioSystem.playCorrect();
          AppState.resetProgress();
          confirmResetBox.classList.remove('active');
          this.applySettingsToDOM();
          this.renderMapStations();
          if (AppState.currentScreen === 'station') {
            this.renderStationRoundTabs();
          }
        });
      }
    };

    /* ==========================================================================
       VÙNG LẮP GHÉP CÁC TRẠM (BƯỚC 2 -> BƯỚC 5)
       - Bước 2: Lắp ghép Trạm 1 (Vườn hoa thức giấc) & Trạm 2 (Khu rừng tìm bạn)
       - Bước 3: Lắp ghép Trạm 3 (Phiên chợ nông trại)
       - Bước 4: Lắp ghép Trạm 4 (Chuyến tàu Ngày Hội Xanh)
       - Bước 5: Lắp ghép Trạm 5 (Thị trấn nghề nghiệp) & Hoàn thiện tổng thể
       ========================================================================== */

    // [VỊ TRÍ LẮP GHÉP MÃ NGUỒN TRẠM 1..5 Ở CÁC BƯỚC TIẾP THEO]
/* ==========================================================================
       BƯỚC 2.1: CSS BỔ SUNG CHO BỘ TƯƠNG TÁC, BÀN TAY MẪU & TRẠM 1
       (Tự động nạp vào <head> để giữ nguyên cấu trúc 1 file duy nhất)
       ========================================================================== */
    (function injectStep2Styles() {
      const style = document.createElement('style');
      style.id = 'step2-styles';
      style.textContent = `
        /* --- Trạng thái Kéo thả & Chạm 2 điểm --- */
        .ix-draggable {
          touch-action: none;
          cursor: grab;
          position: relative;
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.2s ease, box-shadow 0.2s ease;
        }
        .ix-draggable:active {
          cursor: grabbing;
        }
        .ix-draggable.ix-locked {
          pointer-events: none !important;
        }
        .ix-draggable.ix-selected {
          transform: scale(1.1) translateY(-6px) !important;
          filter: drop-shadow(0 0 14px rgba(255, 193, 7, 0.98)) !important;
          z-index: 35 !important;
        }
        .ix-draggable.ix-selected::after {
          content: "";
          position: absolute;
          inset: -8px;
          border: 4px dashed #ff9800;
          border-radius: 22px;
          animation: ixPulseRing 1.1s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes ixPulseRing {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.06); opacity: 0.7; }
        }

        .ix-dropzone {
          position: relative;
          transition: transform 0.2s ease, filter 0.2s ease, box-shadow 0.2s ease;
        }
        .ix-dropzone.ix-drop-ready {
          filter: drop-shadow(0 0 12px rgba(76, 175, 80, 0.85));
        }
        .ix-dropzone.ix-drop-hover {
          transform: scale(1.04);
          filter: drop-shadow(0 0 18px rgba(255, 193, 7, 0.98));
        }

        /* Bản sao nổi đi theo ngón tay khi kéo */
        .ix-drag-ghost {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none !important;
          z-index: 999;
          margin: 0 !important;
          transform-origin: center center;
          filter: drop-shadow(0 14px 20px rgba(0, 0, 0, 0.28));
          will-change: transform;
        }
        .ix-drag-ghost.ix-flying-back {
          transition: transform 0.36s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.36s ease;
        }

        /* --- Bộ nối dây SVG (Dùng cho Trạm 5) --- */
        .ix-connector-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 18;
        }
        .ix-anchor-node {
          touch-action: none;
          cursor: pointer;
          transition: transform 0.2s ease, filter 0.2s ease;
        }
        .ix-anchor-node.ix-anchor-selected {
          transform: scale(1.12);
          filter: drop-shadow(0 0 14px #ff9800);
        }
        .ix-line-correct {
          stroke: #2e7d32;
          stroke-width: 8;
          stroke-linecap: round;
          fill: none;
          filter: drop-shadow(0 3px 6px rgba(46, 125, 50, 0.4));
        }
        .ix-line-active {
          stroke: #ff9800;
          stroke-width: 7;
          stroke-dasharray: 12 8;
          stroke-linecap: round;
          fill: none;
        }
        .ix-line-wrong {
          stroke: #ff7043;
          stroke-width: 7;
          stroke-linecap: round;
          fill: none;
          transition: opacity 0.45s ease;
        }

        /* --- Lớp Bàn tay SVG làm mẫu (Hand Tutorial Overlay) --- */
        .hand-tutorial-overlay {
          position: absolute;
          inset: 0;
          z-index: 60;
          background: rgba(15, 45, 25, 0.28);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: 12px;
          pointer-events: auto;
        }
        .hand-tutorial-banner {
          background: #ffffff;
          border: 4px solid #ff9800;
          border-radius: 999px;
          padding: 8px 20px;
          display: inline-flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.22);
          font-weight: 800;
          font-size: 1.1rem;
          color: #bf360c;
        }
        .hand-tutorial-skip-btn {
          background: #ff9800;
          color: #ffffff;
          font-weight: 900;
          padding: 6px 16px;
          border-radius: 999px;
          font-size: 0.98rem;
          min-height: 42px;
        }
        .hand-tutorial-actor {
          position: fixed;
          width: 78px;
          height: 78px;
          pointer-events: none;
          z-index: 65;
          filter: drop-shadow(0 8px 14px rgba(0,0,0,0.3));
          transition: transform 0.75s cubic-bezier(0.34, 1.2, 0.64, 1), opacity 0.3s ease;
        }
        .hand-tutorial-clone {
          position: fixed;
          pointer-events: none;
          z-index: 64;
          opacity: 0.92;
          filter: drop-shadow(0 10px 18px rgba(255, 152, 0, 0.45));
          transition: transform 0.75s cubic-bezier(0.34, 1.2, 0.64, 1), opacity 0.3s ease;
        }

        /* --- GIAO DIỆN TRẠM 1: VƯỜN HOA THỨC GIẤC --- */
        .st1-root {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          background: linear-gradient(180deg, #b3e5fc 0%, #e1f5fe 38%, #aed581 39%, #7cb342 100%);
        }

        /* Thanh tiến trình 6 bước của Trạm 1 */
        .st1-steps-bar {
          position: relative;
          z-index: 12;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          padding: 8px 14px;
          background: rgba(255, 255, 255, 0.88);
          border-bottom: 3px solid #81c784;
          flex-wrap: wrap;
        }
        .st1-steps-list {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }
        .st1-step-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 999px;
          background: #eceff1;
          border: 2px solid #b0bec5;
          font-size: 0.92rem;
          font-weight: 800;
          color: #607d8b;
          transition: all 0.25s ease;
        }
        .st1-step-pill.active {
          background: #fff8e1;
          border-color: #ff9800;
          color: #e65100;
          transform: scale(1.06);
          box-shadow: 0 3px 8px rgba(255, 152, 0, 0.25);
        }
        .st1-step-pill.done {
          background: #e8f5e9;
          border-color: #43a047;
          color: #1b5e20;
        }
        .st1-demo-btn {
          min-height: 46px;
          padding: 6px 14px;
          border-radius: 999px;
          background: #e1f5fe;
          border: 2px solid #0288d1;
          color: #01579b;
          font-weight: 800;
          font-size: 0.92rem;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        /* Bố cục sân chơi chính của Trạm 1 */
        .st1-playfield {
          position: relative;
          flex: 1;
          width: 100%;
          display: grid;
          grid-template-columns: 260px 1fr 290px;
          gap: 12px;
          padding: 10px 16px 115px;
          align-items: center;
          z-index: 5;
        }

        /* Cột trái: Kệ dụng cụ (Túi hạt & Bình tưới) */
        .st1-left-panel {
          background: rgba(255, 248, 225, 0.94);
          border: 4px solid #ffb300;
          border-radius: 24px;
          padding: 12px;
          box-shadow: 0 8px 18px rgba(0,0,0,0.14);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .st1-panel-title {
          font-size: 1.05rem;
          font-weight: 900;
          color: #bf360c;
          text-align: center;
          background: #ffe082;
          padding: 4px 14px;
          border-radius: 999px;
          width: 100%;
        }
        .st1-seed-rack {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          width: 100%;
        }
        .st1-seed-packet {
          width: 72px;
          height: 88px;
          background: #ffffff;
          border: 3px solid #8d6e63;
          border-radius: 14px;
          padding: 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 4px 0 rgba(93, 64, 55, 0.25);
        }
        .st1-seed-packet.disabled-tool,
        .st1-watering-can.disabled-tool {
          opacity: 0.42;
          filter: grayscale(0.45);
          pointer-events: none;
        }
        .st1-watering-can {
          width: 126px;
          height: 100px;
          background: #e1f5fe;
          border: 3px solid #0288d1;
          border-radius: 20px;
          padding: 6px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 5px 0 rgba(2, 136, 209, 0.25);
        }

        /* Cột giữa: Luống đất 9 vị trí trồng cố định */
        .st1-center-garden {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
        }
        .st1-target-sign {
          background: #ffffff;
          border: 4px solid #2e7d32;
          border-radius: 22px;
          padding: 8px 18px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 6px 14px rgba(0,0,0,0.14);
        }
        .st1-soil-bed {
          position: relative;
          width: 100%;
          max-width: 560px;
          min-height: 270px;
          background: linear-gradient(180deg, #8d6e63 0%, #6d4c41 55%, #5d4037 100%);
          border: 6px solid #4e342e;
          border-radius: 32px;
          padding: 16px;
          box-shadow: inset 0 8px 18px rgba(0,0,0,0.32), 0 10px 20px rgba(0,0,0,0.2);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 12px;
          place-items: center;
        }
        .st1-soil-spot {
          position: relative;
          width: clamp(74px, 9.5vw, 108px);
          height: clamp(74px, 9.5vw, 94px);
          border-radius: 22px;
          background: radial-gradient(ellipse at center, #4e342e 0%, #3e2723 75%, transparent 78%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .st1-plant-node {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .st1-flower-num-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #ff9800;
          border: 2.5px solid #ffffff;
          color: #ffffff;
          font-weight: 900;
          font-size: 0.98rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 3px 6px rgba(0,0,0,0.28);
          pointer-events: none;
        }

        /* Hiệu ứng tưới nước trên luống hoa */
        .st1-water-Overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 25;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Cột phải: Bác làm vườn & Giấy gói hoa kết bó */
        .st1-right-panel {
          background: rgba(255, 255, 255, 0.94);
          border: 4px solid #43a047;
          border-radius: 24px;
          padding: 12px;
          box-shadow: 0 8px 18px rgba(0,0,0,0.14);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .st1-gardener-header {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
        }
        .st1-gardener-avatar {
          width: 78px;
          height: 82px;
          flex-shrink: 0;
        }
        .st1-order-card {
          flex: 1;
          background: #f1f8e9;
          border: 2.5px solid #66bb6a;
          border-radius: 16px;
          padding: 6px 10px;
          text-align: center;
        }
        .st1-order-number {
          font-size: 1.8rem;
          font-weight: 900;
          color: #d84315;
          line-height: 1.1;
        }

        /* Vùng giấy gói hoa (Bouquet Wrapper) */
        .st1-bouquet-zone {
          position: relative;
          width: 100%;
          min-height: 175px;
          background: linear-gradient(180deg, #fffde7 0%, #fff59d 100%);
          border: 4px dashed #fbc02d;
          border-radius: 22px;
          padding: 10px 8px 28px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.3s ease;
        }
        .st1-bouquet-zone.wrapped-complete {
          border-style: solid;
          border-color: #e91e63;
          background: linear-gradient(180deg, #fce4ec 0%, #f8bbd0 100%);
          animation: bunnyHappyBounce 0.9s ease 2;
        }
        .st1-bouquet-item {
          width: 56px;
          height: 56px;
          cursor: pointer;
          position: relative;
          transition: transform 0.18s ease;
        }
        .st1-bouquet-item:hover {
          transform: scale(1.1);
        }
        .st1-bouquet-ribbon {
          position: absolute;
          bottom: -14px;
          left: 50%;
          transform: translateX(-50%);
          width: 84px;
          height: 44px;
          pointer-events: none;
          display: none;
        }
        .st1-bouquet-zone.wrapped-complete .st1-bouquet-ribbon {
          display: block;
        }

        .st1-check-btn {
          width: 100%;
          min-height: 60px;
          border-radius: 999px;
          background: linear-gradient(180deg, #66bb6a 0%, #2e7d32 100%);
          border: 3px solid #1b5e20;
          color: #ffffff;
          font-size: 1.18rem;
          font-weight: 900;
          box-shadow: 0 5px 0 #1b5e20;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .st1-check-btn:disabled {
          opacity: 0.45;
          filter: grayscale(0.5);
          pointer-events: none;
        }

        /* Tương thích màn hình dọc / điện thoại cho Trạm 1 */
        @media (max-width: 980px) {
          .st1-playfield {
            grid-template-columns: 1fr;
            overflow-y: auto;
            padding-bottom: 130px;
          }
          .st1-left-panel {
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
          }
          .st1-panel-title {
            width: auto;
          }
          .st1-soil-bed {
            min-height: 240px;
          }
        }
      `;
      document.head.appendChild(style);
    })();

    /* ==========================================================================
       BƯỚC 2.2: BỔ SUNG ĐƯỜNG DẪN ÂM THANH CHI TIẾT CHO TRẠM 1 (NẾU CHƯA CÓ)
       ========================================================================== */
    if (AUDIO_FILES && AUDIO_FILES.stations && AUDIO_FILES.stations[1]) {
      Object.assign(AUDIO_FILES.stations[1], {
        stepSeed: './am-thanh/tram1-buoc1-chon-hat.mp3',
        stepWater: './am-thanh/tram1-buoc-tuoi-nuoc.mp3',
        stepCount: './am-thanh/tram1-buoc3-cham-dem-hoa.mp3',
        stepBouquet: './am-thanh/tram1-buoc4-ket-bo-hoa.mp3',
        stepComplete: './am-thanh/tram1-buoc6-tang-bo-hoa.mp3'
      });
    }

    /* ==========================================================================
       BƯỚC 2.3: BÀN TAY SVG LÀM MẪU (HAND TUTORIAL SYSTEM)
       - Lần đầu gặp kiểu thao tác ('drag_drop' | 'tap_count' | 'connect_line')
         sẽ hiển thị bàn tay SVG minh họa trên bản sao (không sửa dữ liệu thật).
       - Trẻ có thể bấm "Bỏ qua" hoặc bấm nút "👋 Xem mẫu" để xem lại.
       ========================================================================== */
    const HandTutorial = {
      seenTypes: new Set(),
      activeOverlay: null,
      activeTimer: null,

      getHandSVG() {
        return `
          <svg viewBox="0 0 90 90" width="100%" height="100%">
            <circle cx="34" cy="24" r="18" fill="rgba(255, 193, 7, 0.35)"/>
            <path d="M34,18 C38,18 41,21 41,25 L41,44 L46,41 C54,37 64,42 64,51 L64,64 C64,75 54,84 42,84 L32,84 C22,84 16,76 16,66 L16,50 C16,46 20,43 24,45 L27,47 L27,25 C27,21 30,18 34,18 Z"
                  fill="#ffe0b2" stroke="#5d4037" stroke-width="3.5" stroke-linejoin="round"/>
            <circle cx="34" cy="23" r="4" fill="#ff8a80" opacity="0.6"/>
          </svg>
        `;
      },

      stop() {
        if (this.activeTimer) {
          clearTimeout(this.activeTimer);
          this.activeTimer = null;
        }
        if (this.activeOverlay) {
          this.activeOverlay.remove();
          this.activeOverlay = null;
        }
        document.querySelectorAll('.hand-tutorial-actor, .hand-tutorial-clone').forEach((el) => el.remove());
      },

      /**
       * Chạy làm mẫu nếu lần đầu gặp kiểu thao tác này
       */
      autoShowIfFirstTime(type, options) {
        if (this.seenTypes.has(type)) return;
        this.seenTypes.add(type);
        this.playDemo(type, options);
      },

      /**
       * Phát hoạt cảnh bàn tay làm mẫu trên lớp bản sao
       * @param {'drag_drop'|'tap_count'|'connect_line'} type
       * @param {{ container: HTMLElement, fromEl: HTMLElement, toEl?: HTMLElement, label?: string }} options
       */
      playDemo(type, options = {}) {
        this.stop();
        const container = options.container || document.getElementById('station-stage');
        const fromEl = options.fromEl;
        if (!container || !fromEl) return;

        const fromRect = fromEl.getBoundingClientRect();
        if (fromRect.width === 0 || fromRect.height === 0) return;

        const overlay = document.createElement('div');
        overlay.className = 'hand-tutorial-overlay';
        const bannerText = options.label || (
          type === 'tap_count'
            ? 'Làm mẫu: Chạm từng nụ hoa để đếm nhé!'
            : type === 'connect_line'
              ? 'Làm mẫu: Kéo nối hoặc chạm 2 điểm để nối dây nhé!'
              : 'Làm mẫu: Kéo vật hoặc chạm chọn rồi chạm đích nhé!'
        );

        overlay.innerHTML = `
          <div class="hand-tutorial-banner">
            <span>👋 ${bannerText}</span>
            <button type="button" class="hand-tutorial-skip-btn">Bỏ qua</button>
          </div>
        `;
        container.appendChild(overlay);
        this.activeOverlay = overlay;

        const finishDemo = () => this.stop();
        overlay.addEventListener('pointerdown', finishDemo);
        overlay.querySelector('.hand-tutorial-skip-btn').addEventListener('click', (e) => {
          e.stopPropagation();
          AudioSystem.playTap();
          finishDemo();
        });

        // Tạo bàn tay SVG
        const handEl = document.createElement('div');
        handEl.className = 'hand-tutorial-actor';
        handEl.innerHTML = this.getHandSVG();
        document.body.appendChild(handEl);

        const startX = fromRect.left + fromRect.width / 2 - 26;
        const startY = fromRect.top + fromRect.height / 2 - 14;
        handEl.style.transform = `translate3d(${startX}px, ${startY}px, 0) scale(1)`;

        if (type === 'tap_count' || !options.toEl) {
          // Minh họa chạm đếm trên bản sao
          this.activeTimer = setTimeout(() => {
            handEl.style.transform = `translate3d(${startX}px, ${startY}px, 0) scale(0.82)`;
            this.activeTimer = setTimeout(() => {
              handEl.style.transform = `translate3d(${startX}px, ${startY}px, 0) scale(1.05)`;
              this.activeTimer = setTimeout(finishDemo, 750);
            }, 350);
          }, 250);
          return;
        }

        // Minh họa kéo thả / nối từ fromEl sang toEl bằng bản sao (clone)
        const toRect = options.toEl.getBoundingClientRect();
        const endX = toRect.left + toRect.width / 2 - 26;
        const endY = toRect.top + toRect.height / 2 - 14;

        const cloneEl = fromEl.cloneNode(true);
        cloneEl.className = 'hand-tutorial-clone';
        cloneEl.style.width = `${fromRect.width}px`;
        cloneEl.style.height = `${fromRect.height}px`;
        cloneEl.style.left = '0px';
        cloneEl.style.top = '0px';
        const cloneStartX = fromRect.left;
        const cloneStartY = fromRect.top;
        const cloneEndX = toRect.left + (toRect.width - fromRect.width) / 2;
        const cloneEndY = toRect.top + (toRect.height - fromRect.height) / 2;
        cloneEl.style.transform = `translate3d(${cloneStartX}px, ${cloneStartY}px, 0)`;
        document.body.appendChild(cloneEl);

        this.activeTimer = setTimeout(() => {
          handEl.style.transform = `translate3d(${endX}px, ${endY}px, 0) scale(0.92)`;
          cloneEl.style.transform = `translate3d(${cloneEndX}px, ${cloneEndY}px, 0) scale(1.05)`;
          this.activeTimer = setTimeout(() => {
            cloneEl.style.opacity = '0';
            handEl.style.opacity = '0';
            this.activeTimer = setTimeout(finishDemo, 380);
          }, 850);
        }, 320);
      }
    };

    /* ==========================================================================
       BƯỚC 2.4: BỘ XỬ LÝ TƯƠNG TÁC DÙNG CHUNG (INTERACTION MANAGER)
       - Hỗ trợ song song:
         (1) Kéo vật thả vào vùng nhận (Pointer Events)
         (2) Chạm chọn vật (hiện viền sáng) -> Chạm vùng nhận (2-point tap)
         (3) Điều khiển bàn phím (Tab, Enter/Space, Escape)
       - Khóa đơn điểm kéo (bỏ qua ngón tay thứ 2).
       - Vùng nhận mở rộng hitbox (+20px) và tự động tính lại khi đổi kích thước màn hình.
       ========================================================================== */
    class InteractionController {
      constructor(stageElement) {
        this.stage = stageElement;
        this.draggables = new Map(); // element -> config
        this.dropzones = new Map();  // element -> config
        this.selectedElement = null;
        this.activeDrag = null;      // Chỉ 1 thao tác kéo tại 1 thời điểm
        this.movementThreshold = 10; // Ngưỡng phân biệt chạm (tap) và kéo (drag)
        this.hitboxPadding = 20;     // Mở rộng vùng nhận cho trẻ 3-5 tuổi

        this._onWindowResize = () => this.refreshLayout();
        this._onKeyDown = (e) => this._handleGlobalKeyDown(e);
        window.addEventListener('resize', this._onWindowResize, { passive: true });
        window.addEventListener('orientationchange', this._onWindowResize, { passive: true });
        window.addEventListener('keydown', this._onKeyDown);
      }

      destroy() {
        this.cancelActiveDrag(true);
        this.clearSelection();
        window.removeEventListener('resize', this._onWindowResize);
        window.removeEventListener('orientationchange', this._onWindowResize);
        window.removeEventListener('keydown', this._onKeyDown);
        this.draggables.clear();
        this.dropzones.clear();
      }

      refreshLayout() {
        // Khi xoay màn hình hoặc đổi kích thước, xóa ghost đang lơ lửng nhưng giữ nguyên dữ liệu
        if (this.activeDrag) {
          this.cancelActiveDrag(true);
        }
      }

      /**
       * Đăng ký một phần tử có thể kéo & chạm chọn
       * @param {HTMLElement} el
       * @param {{ id: string, type: string, data?: any, canDrag?: () => boolean, onSelect?: (el)=>void }} cfg
       */
      registerDraggable(el, cfg = {}) {
        if (!el) return;
        el.classList.add('ix-draggable');
        if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
        if (!el.hasAttribute('role')) el.setAttribute('role', 'button');

        const itemState = {
          el,
          id: cfg.id || '',
          type: cfg.type || 'default',
          data: cfg.data || {},
          canDrag: cfg.canDrag || (() => true),
          onSelect: cfg.onSelect || null,
          isAnimating: false
        };
        this.draggables.set(el, itemState);

        el.addEventListener('pointerdown', (e) => this._onPointerDown(e, itemState));
        el.addEventListener('pointermove', (e) => this._onPointerMove(e, itemState));
        el.addEventListener('pointerup', (e) => this._onPointerUp(e, itemState));
        el.addEventListener('pointercancel', (e) => this._onPointerCancel(e, itemState));
        el.addEventListener('lostpointercapture', (e) => this._onPointerCancel(e, itemState));

        // Chặn sự kiện click trùng lặp sau khi vừa kết thúc kéo
        el.addEventListener('click', (e) => {
          if (el.dataset.justDragged === 'true') {
            e.stopPropagation();
            e.preventDefault();
            delete el.dataset.justDragged;
          }
        }, true);

        // Hỗ trợ bàn phím
        el.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (itemState.isAnimating || !itemState.canDrag()) return;
            this.toggleSelect(el);
          }
        });
      }

      /**
       * Đăng ký một vùng nhận (dropzone)
       * @param {HTMLElement} zoneEl
       * @param {{ acceptTypes?: string[], hitboxPadding?: number, onDrop: (itemState, zoneEl) => boolean }} cfg
       */
      registerDropzone(zoneEl, cfg = {}) {
        if (!zoneEl) return;
        zoneEl.classList.add('ix-dropzone');
        if (!zoneEl.hasAttribute('tabindex')) zoneEl.setAttribute('tabindex', '0');

        const zoneState = {
          el: zoneEl,
          acceptTypes: cfg.acceptTypes || null,
          hitboxPadding: typeof cfg.hitboxPadding === 'number' ? cfg.hitboxPadding : this.hitboxPadding,
          onDrop: cfg.onDrop || (() => false)
        };
        this.dropzones.set(zoneEl, zoneState);

        // Chạm điểm thứ 2 vào vùng nhận khi đã chọn 1 vật
        zoneEl.addEventListener('pointerdown', (e) => {
          if (this.activeDrag) return;
          if (!this.selectedElement) return;
          const selectedState = this.draggables.get(this.selectedElement);
          if (!selectedState || selectedState.isAnimating) return;

          // Nếu người dùng chạm vào chính vật đang chọn hoặc một vật con có xử lý riêng thì bỏ qua
          if (e.target === this.selectedElement || this.selectedElement.contains(e.target)) return;

          e.stopPropagation();
          this._attemptDropByTap(selectedState, zoneState);
        });

        // Hỗ trợ bàn phím nhấn Enter/Space vào vùng nhận
        zoneEl.addEventListener('keydown', (e) => {
          if ((e.key === 'Enter' || e.key === ' ') && this.selectedElement) {
            e.preventDefault();
            const selectedState = this.draggables.get(this.selectedElement);
            if (selectedState && !selectedState.isAnimating) {
              this._attemptDropByTap(selectedState, zoneState);
            }
          }
        });
      }

      toggleSelect(el) {
        const state = this.draggables.get(el);
        if (!state || state.isAnimating || !state.canDrag()) return;

        AudioSystem.playTap();
        if (this.selectedElement === el) {
          this.clearSelection();
          return;
        }
        this.clearSelection();
        this.selectedElement = el;
        el.classList.add('ix-selected');
        this._highlightCompatibleZones(state, true);
        if (typeof state.onSelect === 'function') {
          state.onSelect(el);
        }
      }

      clearSelection() {
        if (this.selectedElement) {
          this.selectedElement.classList.remove('ix-selected');
          this.selectedElement = null;
        }
        this.dropzones.forEach((z) => {
          z.el.classList.remove('ix-drop-ready', 'ix-drop-hover');
        });
      }

      _highlightCompatibleZones(itemState, active) {
        this.dropzones.forEach((z) => {
          const ok = !z.acceptTypes || z.acceptTypes.includes(itemState.type);
          if (active && ok) {
            z.el.classList.add('ix-drop-ready');
          } else {
            z.el.classList.remove('ix-drop-ready', 'ix-drop-hover');
          }
        });
      }

      _onPointerDown(e, itemState) {
        // Chỉ xử lý chuột trái hoặc cảm ứng, và bỏ qua ngón tay thứ hai nếu đang kéo
        if (e.button !== undefined && e.button !== 0) return;
        if (this.activeDrag !== null) return;
        if (itemState.isAnimating || !itemState.canDrag()) return;

        HandTutorial.stop();
        const rect = itemState.el.getBoundingClientRect();

        this.activeDrag = {
          pointerId: e.pointerId,
          itemState,
          startX: e.clientX,
          startY: e.clientY,
          lastX: e.clientX,
          lastY: e.clientY,
          offsetX: e.clientX - rect.left,
          offsetY: e.clientY - rect.top,
          originRect: rect,
          hasMovedBeyondThreshold: false,
          ghostEl: null,
          hoveredZone: null
        };

        try {
          itemState.el.setPointerCapture(e.pointerId);
        } catch (err) {}
      }

      _onPointerMove(e, itemState) {
        if (!this.activeDrag || this.activeDrag.pointerId !== e.pointerId) return;
        const drag = this.activeDrag;
        drag.lastX = e.clientX;
        drag.lastY = e.clientY;

        const dx = e.clientX - drag.startX;
        const dy = e.clientY - drag.startY;
        const dist = Math.hypot(dx, dy);

        if (!drag.hasMovedBeyondThreshold) {
          if (dist < this.movementThreshold) return;
          // Bắt đầu chuyển sang chế độ KÉO THỰC SỰ
          drag.hasMovedBeyondThreshold = true;
          this.clearSelection();
          this._createDragGhost(drag);
          this._highlightCompatibleZones(itemState, true);
        }

        if (drag.ghostEl) {
          const gx = e.clientX - drag.offsetX;
          const gy = e.clientY - drag.offsetY;
          drag.ghostEl.style.transform = `translate3d(${gx}px, ${gy}px, 0) scale(1.08)`;
        }

        // Kiểm tra va chạm với vùng nhận (có mở rộng hitbox)
        const hitZone = this._findDropzoneAtPoint(e.clientX, e.clientY, itemState);
        if (drag.hoveredZone && drag.hoveredZone !== hitZone) {
          drag.hoveredZone.el.classList.remove('ix-drop-hover');
        }
        if (hitZone) {
          hitZone.el.classList.add('ix-drop-hover');
        }
        drag.hoveredZone = hitZone;
      }

      _onPointerUp(e, itemState) {
        if (!this.activeDrag || this.activeDrag.pointerId !== e.pointerId) return;
        const drag = this.activeDrag;

        try {
          if (itemState.el.hasPointerCapture(e.pointerId)) {
            itemState.el.releasePointerCapture(e.pointerId);
          }
        } catch (err) {}

        // Trường hợp 1: Chưa vượt ngưỡng di chuyển -> Xử lý như CHẠM CHỌN (Tap)
        if (!drag.hasMovedBeyondThreshold) {
          this.activeDrag = null;
          this.toggleSelect(itemState.el);
          return;
        }

        // Trường hợp 2: Đã kéo -> Đánh dấu vừa kéo để không phát sinh click lặp
        itemState.el.dataset.justDragged = 'true';
        setTimeout(() => {
          if (itemState.el) delete itemState.el.dataset.justDragged;
        }, 120);

        const targetZone = this._findDropzoneAtPoint(e.clientX, e.clientY, itemState);
        this._highlightCompatibleZones(itemState, false);

        if (targetZone) {
          // khóa vật trong lúc xử lý kết quả thả
          itemState.isAnimating = true;
          itemState.el.classList.add('ix-locked');
          const accepted = Boolean(targetZone.onDrop(itemState, targetZone.el));
          if (accepted) {
            this._removeGhostImmediate(drag);
            itemState.el.style.opacity = '';
            itemState.isAnimating = false;
            itemState.el.classList.remove('ix-locked');
            this.activeDrag = null;
          } else {
            // Vùng nhận từ chối (ví dụ: sai loại hạt giống) -> Bay về chỗ cũ
            this._flyBackAndCleanup(drag);
          }
        } else {
          // Thả ngoài vùng nhận -> Bay về chỗ cũ
          this._flyBackAndCleanup(drag);
        }
      }

      _onPointerCancel(e, itemState) {
        if (!this.activeDrag || this.activeDrag.pointerId !== e.pointerId) return;
        this._highlightCompatibleZones(itemState, false);
        if (this.activeDrag.hasMovedBeyondThreshold) {
          this._flyBackAndCleanup(this.activeDrag);
        } else {
          this.activeDrag = null;
        }
      }

      _attemptDropByTap(itemState, zoneState) {
        if (zoneState.acceptTypes && !zoneState.acceptTypes.includes(itemState.type)) {
          return;
        }
        itemState.isAnimating = true;
        itemState.el.classList.add('ix-locked');
        this.clearSelection();

        const accepted = Boolean(zoneState.onDrop(itemState, zoneState.el));
        itemState.isAnimating = false;
        itemState.el.classList.remove('ix-locked');
        if (!accepted) {
          // Lắc nhẹ tại chỗ nếu chưa đúng
          itemState.el.classList.remove('shake-gentle');
          void itemState.el.offsetWidth;
          itemState.el.classList.add('shake-gentle');
          setTimeout(() => itemState.el.classList.remove('shake-gentle'), 600);
        }
      }

      _createDragGhost(drag) {
        const el = drag.itemState.el;
        const rect = el.getBoundingClientRect();
        drag.originRect = rect;

        const ghost = el.cloneNode(true);
        ghost.className = `${el.className} ix-drag-ghost`;
        ghost.classList.remove('ix-selected');
        ghost.style.width = `${rect.width}px`;
        ghost.style.height = `${rect.height}px`;
        const gx = drag.lastX - drag.offsetX;
        const gy = drag.lastY - drag.offsetY;
        ghost.style.transform = `translate3d(${gx}px, ${gy}px, 0) scale(1.08)`;
        document.body.appendChild(ghost);

        el.style.opacity = '0.3';
        drag.ghostEl = ghost;
      }

      _removeGhostImmediate(drag) {
        if (drag && drag.ghostEl) {
          drag.ghostEl.remove();
          drag.ghostEl = null;
        }
      }

      _flyBackAndCleanup(drag) {
        const itemState = drag.itemState;
        const ghost = drag.ghostEl;
        this.activeDrag = null;

        if (!ghost) {
          itemState.el.style.opacity = '';
          itemState.isAnimating = false;
          itemState.el.classList.remove('ix-locked');
          return;
        }

        itemState.isAnimating = true;
        itemState.el.classList.add('ix-locked');

        // Tính lại tọa độ gốc hiện tại phòng trường hợp màn hình vừa co giãn
        const currentOrigin = itemState.el.getBoundingClientRect();
        const targetX = currentOrigin.width > 0 ? currentOrigin.left : drag.originRect.left;
        const targetY = currentOrigin.height > 0 ? currentOrigin.top : drag.originRect.top;

        ghost.classList.add('ix-flying-back');
        requestAnimationFrame(() => {
          ghost.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) scale(1)`;
        });

        setTimeout(() => {
          if (ghost.parentNode) ghost.remove();
          itemState.el.style.opacity = '';
          itemState.isAnimating = false;
          itemState.el.classList.remove('ix-locked');
        }, 370);
      }

      cancelActiveDrag(immediate = false) {
        if (!this.activeDrag) return;
        const drag = this.activeDrag;
        this._highlightCompatibleZones(drag.itemState, false);
        if (immediate) {
          this._removeGhostImmediate(drag);
          drag.itemState.el.style.opacity = '';
          drag.itemState.isAnimating = false;
          drag.itemState.el.classList.remove('ix-locked');
          this.activeDrag = null;
        } else {
          this._flyBackAndCleanup(drag);
        }
      }

      _findDropzoneAtPoint(clientX, clientY, itemState) {
        let bestZone = null;
        let bestDist = Infinity;

        this.dropzones.forEach((zoneState) => {
          if (zoneState.acceptTypes && !zoneState.acceptTypes.includes(itemState.type)) {
            return;
          }
          const rect = zoneState.el.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) return;

          const pad = zoneState.hitboxPadding;
          const withinX = clientX >= rect.left - pad && clientX <= rect.right + pad;
          const withinY = clientY >= rect.top - pad && clientY <= rect.bottom + pad;

          if (withinX && withinY) {
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dist = Math.hypot(clientX - cx, clientY - cy);
            if (dist < bestDist) {
              bestDist = dist;
              bestZone = zoneState;
            }
          }
        });

        return bestZone;
      }

      _handleGlobalKeyDown(e) {
        if (e.key === 'Escape') {
          this.clearSelection();
          this.cancelActiveDrag(false);
        }
      }
    }

    /* ==========================================================================
       BƯỚC 2.5: BỘ XỬ LÝ THAO TÁC NỐI DÂY (LINE CONNECTOR — DÙNG CHO TRẠM 5)
       - Hỗ trợ cả kéo từ điểm đầu đến điểm cuối VÀ chạm điểm đầu rồi chạm điểm cuối.
       - Chấm kết quả bằng 2 đầu nối (startId, endId), không bắt vẽ thẳng.
       - Đường nối đúng giữ lại; đường nối sai mờ dần rồi tự xóa mà không làm mất
         các cặp đã nối đúng trước đó.
       ========================================================================== */
    class LineConnectorController {
      /**
       * @param {HTMLElement} containerEl - Khung chứa tương đối
       * @param {{ onValidatePair: (startId: string, endId: string) => boolean, onMatchSuccess?: (startId: string, endId: string) => void, onMatchFail?: (startId: string, endId: string, endEl: HTMLElement) => void }} callbacks
       */
      constructor(containerEl, callbacks = {}) {
        this.container = containerEl;
        this.onValidatePair = callbacks.onValidatePair || (() => false);
        this.onMatchSuccess = callbacks.onMatchSuccess || null;
        this.onMatchFail = callbacks.onMatchFail || null;

        this.startAnchors = new Map(); // id -> { id, el, connected }
        this.endAnchors = new Map();   // id -> { id, el, connected }
        this.connectedPairs = [];      // [{ startId, endId, lineEl }]

        this.selectedStartId = null;
        this.activeDrag = null;
        this.hitboxPadding = 22;

        // Tạo lớp SVG vẽ dây nối đè lên container
        this.svgLayer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svgLayer.setAttribute('class', 'ix-connector-layer');
        this.container.appendChild(this.svgLayer);

        this._onResize = () => this.redrawPermanentLines();
        window.addEventListener('resize', this._onResize, { passive: true });
        window.addEventListener('orientationchange', this._onResize, { passive: true });
      }

      destroy() {
        window.removeEventListener('resize', this._onResize);
        window.removeEventListener('orientationchange', this._onResize);
        if (this.svgLayer && this.svgLayer.parentNode) {
          this.svgLayer.remove();
        }
      }

      registerStartAnchor(id, el) {
        el.classList.add('ix-anchor-node');
        el.setAttribute('tabindex', '0');
        const info = { id, el, connected: false };
        this.startAnchors.set(id, info);

        el.addEventListener('pointerdown', (e) => this._onStartPointerDown(e, info));
        el.addEventListener('pointermove', (e) => this._onStartPointerMove(e));
        el.addEventListener('pointerup', (e) => this._onStartPointerUp(e));
        el.addEventListener('pointercancel', (e) => this._onStartPointerCancel(e));
        el.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (!info.connected) this.selectStartAnchor(id);
          }
        });
      }

      registerEndAnchor(id, el) {
        el.classList.add('ix-anchor-node');
        el.setAttribute('tabindex', '0');
        const info = { id, el, connected: false };
        this.endAnchors.set(id, info);

        el.addEventListener('pointerdown', (e) => {
          if (this.activeDrag) return;
          if (this.selectedStartId) {
            e.stopPropagation();
            this._completeConnection(this.selectedStartId, id);
          }
        });
        el.addEventListener('keydown', (e) => {
          if ((e.key === 'Enter' || e.key === ' ') && this.selectedStartId) {
            e.preventDefault();
            this._completeConnection(this.selectedStartId, id);
          }
        });
      }

      selectStartAnchor(startId) {
        const info = this.startAnchors.get(startId);
        if (!info || info.connected) return;
        AudioSystem.playTap();

        if (this.selectedStartId === startId) {
          this.clearSelection();
          return;
        }
        this.clearSelection();
        this.selectedStartId = startId;
        info.el.classList.add('ix-anchor-selected');
      }

      clearSelection() {
        this.startAnchors.forEach((a) => a.el.classList.remove('ix-anchor-selected'));
        this.selectedStartId = null;
      }

      _getRelativeCenter(el) {
        const cRect = this.container.getBoundingClientRect();
        const r = el.getBoundingClientRect();
        return {
          x: r.left - cRect.left + r.width / 2,
          y: r.top - cRect.top + r.height / 2
        };
      }

      _getRelativePoint(clientX, clientY) {
        const cRect = this.container.getBoundingClientRect();
        return {
          x: clientX - cRect.left,
          y: clientY - cRect.top
        };
      }

      _onStartPointerDown(e, startInfo) {
        if (startInfo.connected) return;
        if (this.activeDrag !== null) return;
        HandTutorial.stop();

        const startPt = this._getRelativeCenter(startInfo.el);
        const tempLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        tempLine.setAttribute('class', 'ix-line-active');
        tempLine.setAttribute('x1', String(startPt.x));
        tempLine.setAttribute('y1', String(startPt.y));
        tempLine.setAttribute('x2', String(startPt.x));
        tempLine.setAttribute('y2', String(startPt.y));
        this.svgLayer.appendChild(tempLine);

        this.activeDrag = {
          pointerId: e.pointerId,
          startInfo,
          startClientX: e.clientX,
          startClientY: e.clientY,
          moved: false,
          tempLine
        };

        try {
          startInfo.el.setPointerCapture(e.pointerId);
        } catch (err) {}
      }

      _onStartPointerMove(e) {
        if (!this.activeDrag || this.activeDrag.pointerId !== e.pointerId) return;
        const dist = Math.hypot(e.clientX - this.activeDrag.startClientX, e.clientY - this.activeDrag.startClientY);
        if (dist > 8) this.activeDrag.moved = true;

        const pt = this._getRelativePoint(e.clientX, e.clientY);
        this.activeDrag.tempLine.setAttribute('x2', String(pt.x));
        this.activeDrag.tempLine.setAttribute('y2', String(pt.y));
      }

      _onStartPointerUp(e) {
        if (!this.activeDrag || this.activeDrag.pointerId !== e.pointerId) return;
        const drag = this.activeDrag;
        this.activeDrag = null;

        try {
          if (drag.startInfo.el.hasPointerCapture(e.pointerId)) {
            drag.startInfo.el.releasePointerCapture(e.pointerId);
          }
        } catch (err) {}

        drag.tempLine.remove();

        if (!drag.moved) {
          this.selectStartAnchor(drag.startInfo.id);
          return;
        }

        const hitEnd = this._findEndAnchorAt(e.clientX, e.clientY);
        if (hitEnd) {
          this._completeConnection(drag.startInfo.id, hitEnd.id);
        }
      }

      _onStartPointerCancel(e) {
        if (!this.activeDrag || this.activeDrag.pointerId !== e.pointerId) return;
        this.activeDrag.tempLine.remove();
        this.activeDrag = null;
      }

      _findEndAnchorAt(clientX, clientY) {
        let found = null;
        this.endAnchors.forEach((endInfo) => {
          const r = endInfo.el.getBoundingClientRect();
          const pad = this.hitboxPadding;
          if (
            clientX >= r.left - pad &&
            clientX <= r.right + pad &&
            clientY >= r.top - pad &&
            clientY <= r.bottom + pad
          ) {
            found = endInfo;
          }
        });
        return found;
      }

      _completeConnection(startId, endId) {
        const startInfo = this.startAnchors.get(startId);
        const endInfo = this.endAnchors.get(endId);
        if (!startInfo || !endInfo || startInfo.connected) return;

        this.clearSelection();
        const p1 = this._getRelativeCenter(startInfo.el);
        const p2 = this._getRelativeCenter(endInfo.el);

        const isCorrect = Boolean(this.onValidatePair(startId, endId));
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', String(p1.x));
        line.setAttribute('y1', String(p1.y));
        line.setAttribute('x2', String(p2.x));
        line.setAttribute('y2', String(p2.y));

        if (isCorrect) {
          line.setAttribute('class', 'ix-line-correct');
          this.svgLayer.appendChild(line);
          startInfo.connected = true;
          endInfo.connected = true;
          this.connectedPairs.push({ startId, endId, lineEl: line });
          if (typeof this.onMatchSuccess === 'function') {
            this.onMatchSuccess(startId, endId);
          }
        } else {
          // Đường nối sai mờ dần rồi tự xóa, giữ nguyên các đường đúng trước đó
          line.setAttribute('class', 'ix-line-wrong');
          this.svgLayer.appendChild(line);
          if (typeof this.onMatchFail === 'function') {
            this.onMatchFail(startId, endId, endInfo.el);
          }
          requestAnimationFrame(() => {
            line.style.opacity = '0';
          });
          setTimeout(() => {
            if (line.parentNode) line.remove();
          }, 460);
        }
      }

      redrawPermanentLines() {
        this.connectedPairs.forEach((pair) => {
          const s = this.startAnchors.get(pair.startId);
          const e = this.endAnchors.get(pair.endId);
          if (s && e && pair.lineEl) {
            const p1 = this._getRelativeCenter(s.el);
            const p2 = this._getRelativeCenter(e.el);
            pair.lineEl.setAttribute('x1', String(p1.x));
            pair.lineEl.setAttribute('y1', String(p1.y));
            pair.lineEl.setAttribute('x2', String(p2.x));
            pair.lineEl.setAttribute('y2', String(p2.y));
          }
        });
      }
    }

    /* ==========================================================================
       BƯỚC 2.6: TRẠM 1 — VƯỜN HOA THỨC GIẤC (ĐẦY ĐỦ 3 VÒNG & 6 BƯỚC TUẦN TỰ)
       ========================================================================== */
    const Station1Garden = {
      // Danh mục 3 loài hoa SVG của Trạm 1
      FLOWER_TYPES: {
        sunflower: {
          id: 'sunflower',
          name: 'Hoa Mặt Trời Vàng',
          petalColor: '#ffd54f',
          petalStroke: '#f57f17',
          centerColor: '#795548',
          seedColor: '#ffb300'
        },
        rose: {
          id: 'rose',
          name: 'Hoa Hồng Đỏ',
          petalColor: '#ff5252',
          petalStroke: '#b71c1c',
          centerColor: '#ffeb3b',
          seedColor: '#e53935'
        },
        tulip: {
          id: 'tulip',
          name: 'Hoa Tulip Tím',
          petalColor: '#ba68c8',
          petalStroke: '#6a1b9a',
          centerColor: '#fff176',
          seedColor: '#8e24aa'
        }
      },

      // Cấu hình 3 vòng chơi: khác loại hoa mục tiêu và khác số lượng N (1..9) giữa các vòng liền kề
      ROUNDS_CONFIG: [
        {
          roundIndex: 0,
          targetFlower: 'sunflower',
          targetCount: 4, // Phù hợp trẻ 3 tuổi làm quen
          note: 'Vòng 1: Hoa Mặt Trời Vàng (Bó 4 bông)'
        },
        {
          roundIndex: 1,
          targetFlower: 'rose',
          targetCount: 6, // Phù hợp trẻ 4 tuổi
          note: 'Vòng 2: Hoa Hồng Đỏ (Bó 6 bông)'
        },
        {
          roundIndex: 2,
          targetFlower: 'tulip',
          targetCount: 9, // Phù hợp trẻ 5 tuổi đếm trọn vẹn đến 9
          note: 'Vòng 3: Hoa Tulip Tím (Bó 9 bông)'
        }
      ],

      currentController: null,
      state: null,

      /* --- THƯ VIỆN SVG NỘI TUYẾN CỦA TRẠM 1 --- */
      getSeedPacketSVG(flowerId) {
        const f = this.FLOWER_TYPES[flowerId] || this.FLOWER_TYPES.sunflower;
        return `
          <svg viewBox="0 0 70 84" width="100%" height="100%">
            <rect x="6" y="6" width="58" height="72" rx="10" fill="#fff8e1" stroke="#8d6e63" stroke-width="3"/>
            <path d="M6,22 L64,22" stroke="#d7ccc8" stroke-width="2" stroke-dasharray="4 3"/>
            <circle cx="35" cy="48" r="18" fill="#ffffff" stroke="${f.petalStroke}" stroke-width="2.5"/>
            ${this.getFlowerHeadOnlySVG(flowerId, 35, 48, 0.55)}
            <circle cx="24" cy="14" r="3.5" fill="${f.seedColor}"/>
            <circle cx="35" cy="14" r="3.5" fill="${f.seedColor}"/>
            <circle cx="46" cy="14" r="3.5" fill="${f.seedColor}"/>
          </svg>
        `;
      },

      getWateringCanSVG() {
        return `
          <svg viewBox="0 0 120 96" width="100%" height="100%">
            <!-- Quai cầm -->
            <path d="M34,32 C14,24 14,68 34,64" fill="none" stroke="#0277bd" stroke-width="7" stroke-linecap="round"/>
            <!-- Vòi tưới -->
            <path d="M76,48 L104,24" stroke="#0288d1" stroke-width="9" stroke-linecap="round"/>
            <ellipse cx="107" cy="22" rx="6" ry="9" transform="rotate(35 107 22)" fill="#ffd54f" stroke="#f57f17" stroke-width="2.5"/>
            <!-- Thân bình -->
            <rect x="30" y="30" width="50" height="44" rx="14" fill="#29b6f6" stroke="#01579b" stroke-width="3.5"/>
            <ellipse cx="55" cy="30" rx="20" ry="6" fill="#0288d1" stroke="#01579b" stroke-width="2.5"/>
            <!-- Giọt nước trang trí trên thân -->
            <path d="M55,44 C50,52 50,58 55,58 C60,58 60,52 55,44 Z" fill="#e1f5fe"/>
          </svg>
        `;
      },

      getFlowerHeadOnlySVG(flowerId, cx = 45, cy = 40, scale = 1) {
        const f = this.FLOWER_TYPES[flowerId] || this.FLOWER_TYPES.sunflower;
        if (flowerId === 'tulip') {
          return `
            <g transform="translate(${cx}, ${cy}) scale(${scale})">
              <path d="M-20,4 C-22,-22 -8,-28 0,-12 C8,-28 22,-22 20,4 C18,20 -18,20 -20,4 Z"
                    fill="${f.petalColor}" stroke="${f.petalStroke}" stroke-width="3" stroke-linejoin="round"/>
              <circle cx="-6" cy="-1" r="2.5" fill="#263238"/>
              <circle cx="6" cy="-1" r="2.5" fill="#263238"/>
              <path d="M-4,5 Q0,9 4,5" fill="none" stroke="#263238" stroke-width="2" stroke-linecap="round"/>
            </g>
          `;
        }
        if (flowerId === 'rose') {
          return `
            <g transform="translate(${cx}, ${cy}) scale(${scale})">
              <circle cx="-12" cy="-8" r="12" fill="${f.petalColor}" stroke="${f.petalStroke}" stroke-width="2.5"/>
              <circle cx="12" cy="-8" r="12" fill="${f.petalColor}" stroke="${f.petalStroke}" stroke-width="2.5"/>
              <circle cx="-12" cy="10" r="12" fill="${f.petalColor}" stroke="${f.petalStroke}" stroke-width="2.5"/>
              <circle cx="12" cy="10" r="12" fill="${f.petalColor}" stroke="${f.petalStroke}" stroke-width="2.5"/>
              <circle cx="0" cy="1" r="15" fill="#ff1744" stroke="${f.petalStroke}" stroke-width="2.5"/>
              <circle cx="0" cy="1" r="10" fill="${f.centerColor}" stroke="#f57f17" stroke-width="2"/>
              <circle cx="-4" cy="-1" r="2" fill="#263238"/>
              <circle cx="4" cy="-1" r="2" fill="#263238"/>
              <path d="M-3,4 Q0,7 3,4" fill="none" stroke="#263238" stroke-width="2" stroke-linecap="round"/>
            </g>
          `;
        }
        // Mặc định: Hoa Mặt Trời Vàng (sunflower)
        return `
          <g transform="translate(${cx}, ${cy}) scale(${scale})">
            <circle cx="0" cy="-18" r="9" fill="${f.petalColor}" stroke="${f.petalStroke}" stroke-width="2"/>
            <circle cx="0" cy="18" r="9" fill="${f.petalColor}" stroke="${f.petalStroke}" stroke-width="2"/>
            <circle cx="-18" cy="0" r="9" fill="${f.petalColor}" stroke="${f.petalStroke}" stroke-width="2"/>
            <circle cx="18" cy="0" r="9" fill="${f.petalColor}" stroke="${f.petalStroke}" stroke-width="2"/>
            <circle cx="-13" cy="-13" r="9" fill="${f.petalColor}" stroke="${f.petalStroke}" stroke-width="2"/>
            <circle cx="13" cy="-13" r="9" fill="${f.petalColor}" stroke="${f.petalStroke}" stroke-width="2"/>
            <circle cx="-13" cy="13" r="9" fill="${f.petalColor}" stroke="${f.petalStroke}" stroke-width="2"/>
            <circle cx="13" cy="13" r="9" fill="${f.petalColor}" stroke="${f.petalStroke}" stroke-width="2"/>
            <circle cx="0" cy="0" r="13" fill="#fff59d" stroke="${f.petalStroke}" stroke-width="2.5"/>
            <circle cx="-4" cy="-2" r="2.2" fill="#3e2723"/>
            <circle cx="4" cy="-2" r="2.2" fill="#3e2723"/>
            <path d="M-4,4 Q0,8 4,4" fill="none" stroke="#3e2723" stroke-width="2" stroke-linecap="round"/>
          </g>
        `;
      },

      /**
       * Hình trạng thái cây trên mỗi ô đất: 'empty' | 'sprout' | 'bud' | 'bloom'
       */
      getPlantSpotSVG(stageName, flowerId) {
        const f = this.FLOWER_TYPES[flowerId] || this.FLOWER_TYPES.sunflower;
        if (stageName === 'empty') {
          return `
            <svg viewBox="0 0 90 90" width="100%" height="100%">
              <ellipse cx="45" cy="70" rx="28" ry="11" fill="#5d4037" stroke="#3e2723" stroke-width="2.5"/>
              <circle cx="38" cy="68" r="2.5" fill="#8d6e63"/>
              <circle cx="52" cy="71" r="2.5" fill="#8d6e63"/>
            </svg>
          `;
        }
        if (stageName === 'sprout') {
          return `
            <svg viewBox="0 0 90 90" width="100%" height="100%">
              <ellipse cx="45" cy="72" rx="28" ry="10" fill="#4e342e"/>
              <path d="M45,70 Q45,50 45,42" stroke="#43a047" stroke-width="5" stroke-linecap="round"/>
              <path d="M45,52 Q28,40 30,54 Q36,60 45,52 Z" fill="#66bb6a" stroke="#2e7d32" stroke-width="2.5"/>
              <path d="M45,48 Q62,36 60,50 Q54,56 45,48 Z" fill="#81c784" stroke="#2e7d32" stroke-width="2.5"/>
            </svg>
          `;
        }
        if (stageName === 'bud') {
          return `
            <svg viewBox="0 0 90 90" width="100%" height="100%">
              <ellipse cx="45" cy="74" rx="28" ry="10" fill="#4e342e"/>
              <path d="M45,72 L45,38" stroke="#2e7d32" stroke-width="6" stroke-linecap="round"/>
              <path d="M45,58 Q26,48 28,60 Q36,66 45,58 Z" fill="#43a047" stroke="#1b5e20" stroke-width="2.5"/>
              <path d="M45,56 Q64,46 62,58 Q54,64 45,56 Z" fill="#66bb6a" stroke="#1b5e20" stroke-width="2.5"/>
              <!-- Nụ hoa chúm chím chờ bé chạm đếm -->
              <ellipse cx="45" cy="32" rx="14" ry="17" fill="${f.petalColor}" stroke="${f.petalStroke}" stroke-width="3"/>
              <path d="M33,40 Q45,28 57,40" fill="#43a047" stroke="#1b5e20" stroke-width="2.5"/>
            </svg>
          `;
        }
        // Trạng thái 'bloom' (Hoa đã nở rực rỡ)
        return `
          <svg viewBox="0 0 90 90" width="100%" height="100%">
            <ellipse cx="45" cy="76" rx="26" ry="9" fill="#4e342e"/>
            <path d="M45,74 L45,40" stroke="#2e7d32" stroke-width="6" stroke-linecap="round"/>
            <path d="M45,60 Q26,50 28,62 Q36,68 45,60 Z" fill="#43a047" stroke="#1b5e20" stroke-width="2.5"/>
            <path d="M45,58 Q64,48 62,60 Q54,66 45,58 Z" fill="#66bb6a" stroke="#1b5e20" stroke-width="2.5"/>
            ${this.getFlowerHeadOnlySVG(flowerId, 45, 32, 0.95)}
          </svg>
        `;
      },

      getRibbonBowSVG() {
        return `
          <svg viewBox="0 0 90 48" width="100%" height="100%">
            <path d="M40,22 L24,44 L36,42 L44,26 Z" fill="#d81b60" stroke="#880e4f" stroke-width="2"/>
            <path d="M50,22 L66,44 L54,42 L46,26 Z" fill="#d81b60" stroke="#880e4f" stroke-width="2"/>
            <ellipse cx="28" cy="18" rx="18" ry="11" transform="rotate(-12 28 18)" fill="#ff4081" stroke="#880e4f" stroke-width="2.5"/>
            <ellipse cx="62" cy="18" rx="18" ry="11" transform="rotate(12 62 18)" fill="#ff4081" stroke="#880e4f" stroke-width="2.5"/>
            <circle cx="45" cy="19" r="8" fill="#f50057" stroke="#880e4f" stroke-width="2.5"/>
          </svg>
        `;
      },

      /**
       * Khởi tạo và vẽ sân khấu Trạm 1 theo vòng chơi (roundIndex: 0, 1, 2)
       */
      render(stageEl, roundIndex = 0) {
        if (this.currentController) {
          this.currentController.destroy();
          this.currentController = null;
        }
        HandTutorial.stop();

        const cfg = this.ROUNDS_CONFIG[roundIndex] || this.ROUNDS_CONFIG[0];
        const flowerInfo = this.FLOWER_TYPES[cfg.targetFlower];

        // Khởi tạo trạng thái vòng chơi của Trạm 1
        this.state = {
          roundIndex,
          targetFlower: cfg.targetFlower,
          targetCount: cfg.targetCount,
          currentStep: 1, // 1: Chọn hạt, 2: Tưới nước, 3: Đếm hoa, 4: Kết bó, 5: Kiểm tra, 6: Hoàn thành
          bloomCount: 0,
          // 9 vị trí cố định trên luống đất
          spots: Array.from({ length: 9 }, (_, idx) => ({
            index: idx,
            stage: 'empty', // 'empty' | 'sprout' | 'bud' | 'bloom'
            assignedNumber: null, // Số thứ tự gắn với từng bông khi trẻ chạm đếm (1..9)
            inBouquet: false
          }))
        };

        stageEl.innerHTML = `
          <div class="st1-root" id="st1-root">
            <!-- Thanh hiển thị tiến trình 6 bước -->
            <div class="st1-steps-bar">
              <div class="st1-steps-list" id="st1-steps-list">
                <span class="st1-step-pill active" data-step-pill="1">1. 🌱 Chọn hạt</span>
                <span class="st1-step-pill" data-step-pill="2">2. 💧 Tưới nước</span>
                <span class="st1-step-pill" data-step-pill="3">3. 🌸 Đếm 9 hoa</span>
                <span class="st1-step-pill" data-step-pill="4">4. 💐 Kết bó</span>
                <span class="st1-step-pill" data-step-pill="5">5. ✔ Kiểm tra</span>
                <span class="st1-step-pill" data-step-pill="6">6. 🎁 Tặng hoa</span>
              </div>
              <button type="button" class="st1-demo-btn" id="st1-btn-watch-demo">
                👋 Xem mẫu
              </button>
            </div>

            <!-- Sân chơi chính 3 khu vực -->
            <div class="st1-playfield">
              <!-- Cột trái: Kệ túi hạt & Bình tưới -->
              <div class="st1-left-panel">
                <div class="st1-panel-title">🧰 Kệ Dụng Cụ Làm Vườn</div>
                <div class="st1-seed-rack" id="st1-seed-rack">
                  ${['sunflower', 'rose', 'tulip'].map((fId) => `
                    <div class="st1-seed-packet learning-item"
                         id="st1-seed-${fId}"
                         data-flower-id="${fId}"
                         aria-label="Túi hạt ${this.FLOWER_TYPES[fId].name}">
                      ${this.getSeedPacketSVG(fId)}
                    </div>
                  `).join('')}
                </div>
                <div class="st1-watering-can disabled-tool learning-item"
                     id="st1-watering-can"
                     aria-label="Bình tưới nước">
                  ${this.getWateringCanSVG()}
                </div>
              </div>

              <!-- Cột giữa: Bảng mẫu hoa & Luống đất 9 vị trí -->
              <div class="st1-center-garden">
                <div class="st1-target-sign">
                  <div style="width:48px;height:48px;">
                    <svg viewBox="0 0 90 90" width="100%" height="100%">
                      ${this.getFlowerHeadOnlySVG(cfg.targetFlower, 45, 45, 1.1)}
                    </svg>
                  </div>
                  <div>
                    <div style="font-size:0.88rem;font-weight:800;color:#558b2f;">HOA CẦN TRỒNG:</div>
                    <div style="font-size:1.15rem;font-weight:900;color:#1b5e20;">${flowerInfo.name}</div>
                  </div>
                </div>

                <!-- Luống đất có đúng 9 vị trí cố định đủ lớn -->
                <div class="st1-soil-bed" id="st1-soil-bed" aria-label="Luống đất trồng hoa">
                  ${this.state.spots.map((sp) => `
                    <div class="st1-soil-spot" id="st1-spot-${sp.index}" data-spot-index="${sp.index}">
                      <div class="st1-plant-node" id="st1-plant-${sp.index}">
                        ${this.getPlantSpotSVG('empty', cfg.targetFlower)}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Cột phải: Bác Làm Vườn & Giấy gói kết bó hoa -->
              <div class="st1-right-panel">
                <div class="st1-gardener-header">
                  <div class="st1-gardener-avatar" id="st1-gardener-box">
                    ${SVG_LIB.getGardenerSVG('idle')}
                  </div>
                  <div class="st1-order-card">
                    <div style="font-size:0.88rem;font-weight:800;color:#2e7d32;">BÁC CẦN BÓ:</div>
                    <div class="st1-order-number" id="st1-order-num">${cfg.targetCount} bông</div>
                    <div style="font-size:0.86rem;font-weight:800;color:#546e7a;" id="st1-bouquet-counter">
                      Trong bó: 0 / ${cfg.targetCount}
                    </div>
                  </div>
                </div>

                <!-- Giấy gói hoa (Nhận hoa ở Bước 4, có thể chạm/kéo lấy ra nếu thừa) -->
                <div class="st1-bouquet-zone" id="st1-bouquet-zone" aria-label="Giấy gói hoa">
                  <div style="width:100%;text-align:center;font-size:0.9rem;font-weight:800;color:#f57f17;" id="st1-bouquet-placeholder">
                    💐 Giấy gói hoa (Đặt ${cfg.targetCount} bông vào đây)
                  </div>
                  <div id="st1-bouquet-items" style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;align-items:center;"></div>
                  <div class="st1-bouquet-ribbon">${this.getRibbonBowSVG()}</div>
                </div>

                <!-- Nút Kiểm tra (Mở ở Bước 4 & Bước 5) -->
                <button type="button" class="st1-check-btn" id="st1-btn-check" disabled>
                  ✔ Kiểm tra bó hoa
                </button>
              </div>
            </div>
          </div>
        `;

        this.currentController = new InteractionController(stageEl);
        this._bindInteractions(stageEl);
        this._enterStep(1);
      },

      _updateStepPills() {
        const cur = this.state.currentStep;
        document.querySelectorAll('#st1-steps-list [data-step-pill]').forEach((pill) => {
          const stepNum = Number(pill.getAttribute('data-step-pill'));
          pill.classList.remove('active', 'done');
          if (stepNum < cur) pill.classList.add('done');
          else if (stepNum === cur) pill.classList.add('active');
        });
      },

      _setHintTargets(selectorList = []) {
        document.querySelectorAll('#station-stage [data-hint-target]').forEach((el) => {
          el.removeAttribute('data-hint-target');
          el.classList.remove('idle-hint-glow');
        });
        selectorList.forEach((sel) => {
          document.querySelectorAll(sel).forEach((el) => {
            el.setAttribute('data-hint-target', 'true');
          });
        });
        IdleHintSystem.resetTimer();
      },

      _bindInteractions(stageEl) {
        const ctrl = this.currentController;
        const soilBedEl = document.getElementById('st1-soil-bed');
        const bouquetZoneEl = document.getElementById('st1-bouquet-zone');
        const wateringCanEl = document.getElementById('st1-watering-can');
        const checkBtn = document.getElementById('st1-btn-check');
        const demoBtn = document.getElementById('st1-btn-watch-demo');

        // 1. Đăng ký 3 túi hạt giống (Chỉ cho phép kéo/chọn ở Bước 1)
        ['sunflower', 'rose', 'tulip'].forEach((fId) => {
          const packetEl = document.getElementById(`st1-seed-${fId}`);
          ctrl.registerDraggable(packetEl, {
            id: `seed-${fId}`,
            type: 'seed',
            data: { flowerId: fId },
            canDrag: () => this.state.currentStep === 1
          });
        });

        // 2. Đăng ký Bình tưới nước (Chỉ cho phép kéo/chọn ở Bước 2)
        ctrl.registerDraggable(wateringCanEl, {
          id: 'watering-can',
          type: 'water',
          canDrag: () => this.state.currentStep === 2
        });

        // 3. Đăng ký Luống đất là vùng nhận cho:
        //    - Túi hạt ở Bước 1
        //    - Bình tưới ở Bước 2
        //    - Hoa trả lại từ bó hoa ở Bước 4/5
        ctrl.registerDropzone(soilBedEl, {
          acceptTypes: ['seed', 'water', 'bouquet-flower'],
          hitboxPadding: 26,
          onDrop: (itemState) => {
            if (itemState.type === 'seed' && this.state.currentStep === 1) {
              return this._handleSeedDrop(itemState);
            }
            if (itemState.type === 'water' && this.state.currentStep === 2) {
              return this._handleWaterDrop();
            }
            if (itemState.type === 'bouquet-flower' && (this.state.currentStep === 4 || this.state.currentStep === 5)) {
              return this._returnFlowerFromBouquet(itemState.data.spotIndex);
            }
            return false;
          }
        });

        // 4. Đăng ký Giấy gói hoa là vùng nhận cho 9 bông hoa nở ở Bước 4 & Bước 5
        ctrl.registerDropzone(bouquetZoneEl, {
          acceptTypes: ['garden-flower'],
          hitboxPadding: 26,
          onDrop: (itemState) => {
            if (this.state.currentStep !== 4 && this.state.currentStep !== 5) return false;
            return this._moveFlowerToBouquet(itemState.data.spotIndex);
          }
        });

        // 5. Nút Kiểm tra bó hoa (Bước 4 -> Bước 5 -> Bước 6)
        checkBtn.addEventListener('click', () => {
          if (this.state.currentStep !== 4 && this.state.currentStep !== 5) return;
          this._handleCheckBouquet();
        });

        // 6. Nút Xem mẫu bàn tay SVG theo đúng bước hiện tại
        demoBtn.addEventListener('click', () => {
          AudioSystem.playTap();
          this._playCurrentStepTutorial(stageEl);
        });
      },

      _playCurrentStepTutorial(stageEl) {
        const st = this.state;
        const soilBedEl = document.getElementById('st1-soil-bed');
        const bouquetZoneEl = document.getElementById('st1-bouquet-zone');

        if (st.currentStep === 1) {
          const correctSeedEl = document.getElementById(`st1-seed-${st.targetFlower}`);
          HandTutorial.playDemo('drag_drop', {
            container: stageEl,
            fromEl: correctSeedEl,
            toEl: soilBedEl,
            label: 'Đưa đúng túi hạt giống vào luống đất nhé!'
          });
        } else if (st.currentStep === 2) {
          const canEl = document.getElementById('st1-watering-can');
          HandTutorial.playDemo('drag_drop', {
            container: stageEl,
            fromEl: canEl,
            toEl: soilBedEl,
            label: 'Đưa bình tưới nước vào luống để mầm cây lớn thành nụ nhé!'
          });
        } else if (st.currentStep === 3) {
          const firstUnbloomed = st.spots.find((s) => s.stage === 'bud') || st.spots[0];
          const plantEl = document.getElementById(`st1-plant-${firstUnbloomed.index}`);
          HandTutorial.playDemo('tap_count', {
            container: stageEl,
            fromEl: plantEl,
            label: 'Chạm vào từng nụ hoa để hoa nở và đếm từ 1 đến 9 nhé!'
          });
        } else if (st.currentStep === 4 || st.currentStep === 5) {
          const availableSpot = st.spots.find((s) => !s.inBouquet) || st.spots[0];
          const plantEl = document.getElementById(`st1-plant-${availableSpot.index}`);
          HandTutorial.playDemo('drag_drop', {
            container: stageEl,
            fromEl: plantEl,
            toEl: bouquetZoneEl,
            label: `Lấy đủ ${st.targetCount} bông hoa đặt vào giấy gói rồi bấm Kiểm tra nhé!`
          });
        }
      },

      /**
       * Chuyển trạng thái tuần tự giữa 6 bước của Trạm 1
       */
      _enterStep(stepNumber) {
        this.state.currentStep = stepNumber;
        this._updateStepPills();
        const flowerName = this.FLOWER_TYPES[this.state.targetFlower].name;
        const stageEl = document.getElementById('station-stage');

        if (stepNumber === 1) {
          // Bước 1: Chọn túi hạt đúng loại
          GameEngine.setInstruction(
            `Bước 1: Bé hãy chọn đúng túi hạt ${flowerName} đưa vào luống đất nhé!`,
            AUDIO_FILES.stations[1].stepSeed || AUDIO_FILES.stations[1][`round${this.state.roundIndex + 1}`]
          );
          this._setHintTargets([`#st1-seed-${this.state.targetFlower}`, '#st1-soil-bed']);
          HandTutorial.autoShowIfFirstTime('drag_drop', {
            container: stageEl,
            fromEl: document.getElementById(`st1-seed-${this.state.targetFlower}`),
            toEl: document.getElementById('st1-soil-bed'),
            label: 'Kéo túi hạt hoặc chạm túi hạt rồi chạm luống đất nhé!'
          });
        } else if (stepNumber === 2) {
          // Bước 2: Mở khóa bình tưới, khóa các túi hạt
          document.querySelectorAll('.st1-seed-packet').forEach((el) => el.classList.add('disabled-tool'));
          const canEl = document.getElementById('st1-watering-can');
          canEl.classList.remove('disabled-tool');

          // Hiển thị 9 mầm cây xanh trên luống
          this.state.spots.forEach((sp) => {
            sp.stage = 'sprout';
            const plantEl = document.getElementById(`st1-plant-${sp.index}`);
            if (plantEl) {
              plantEl.innerHTML = this.getPlantSpotSVG('sprout', this.state.targetFlower);
            }
          });

          GameEngine.setInstruction(
            'Bước 2: 9 mầm cây đã nhú lên rồi! Bé hãy đưa bình tưới nước đến luống hoa nhé!',
            AUDIO_FILES.stations[1].stepWater
          );
          this._setHintTargets(['#st1-watering-can', '#st1-soil-bed']);
        } else if (stepNumber === 3) {
          // Bước 3: Khóa bình tưới, cả 9 mầm lớn thành nụ hoa chờ bé chạm đếm 1..9
          document.getElementById('st1-watering-can').classList.add('disabled-tool');

          this.state.spots.forEach((sp) => {
            sp.stage = 'bud';
            const plantEl = document.getElementById(`st1-plant-${sp.index}`);
            if (plantEl) {
              plantEl.innerHTML = this.getPlantSpotSVG('bud', this.state.targetFlower);
              plantEl.style.cursor = 'pointer';
              plantEl.setAttribute('tabindex', '0');
              plantEl.setAttribute('role', 'button');
              plantEl.setAttribute('aria-label', `Nụ hoa vị trí ${sp.index + 1}`);

              plantEl.onclick = () => this._handleBudTap(sp.index);
              plantEl.onkeydown = (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  this._handleBudTap(sp.index);
                }
              };
            }
          });

          GameEngine.setInstruction(
            'Bước 3: Bé hãy chạm lần lượt vào từng nụ hoa để hoa nở và đếm từ 1 đến 9 nhé!',
            AUDIO_FILES.stations[1].stepCount
          );
          this._setHintTargets(['.st1-plant-node']);
          HandTutorial.autoShowIfFirstTime('tap_count', {
            container: stageEl,
            fromEl: document.getElementById('st1-plant-0'),
            label: 'Chạm vào từng nụ hoa để hoa nở và nghe đếm số nhé!'
          });
        } else if (stepNumber === 4) {
          // Bước 4: Đã nở đủ 9 bông nguồn -> Mở khóa kéo/chạm hoa vào giấy gói + mở nút Kiểm tra
          const N = this.state.targetCount;
          document.getElementById('st1-btn-check').disabled = false;

          this.state.spots.forEach((sp) => {
            const plantEl = document.getElementById(`st1-plant-${sp.index}`);
            if (!plantEl) return;
            // Xóa sự kiện đếm của Bước 3 để gắn bộ kéo thả / chạm 2 điểm vào giấy gói
            plantEl.onclick = null;
            plantEl.onkeydown = null;

            this.currentController.registerDraggable(plantEl, {
              id: `garden-flower-${sp.index}`,
              type: 'garden-flower',
              data: { spotIndex: sp.index },
              canDrag: () => (this.state.currentStep === 4 || this.state.currentStep === 5) && !sp.inBouquet
            });
          });

          GameEngine.setInstruction(
            `Bước 4: Bác làm vườn cần bó ${N} bông ${flowerName}. Bé hãy lấy ${N} bông từ 9 bông trên luống đặt vào giấy gói rồi bấm Kiểm tra nhé!`,
            AUDIO_FILES.stations[1].stepBouquet
          );
          this._setHintTargets(['.st1-plant-node', '#st1-bouquet-zone', '#st1-btn-check']);
        }
      },

      /**
       * Xử lý Bước 1: Thả túi hạt vào luống
       */
      _handleSeedDrop(itemState) {
        const chosenFlower = itemState.data.flowerId;
        if (chosenFlower !== this.state.targetFlower) {
          // Sai loại hạt -> trả về kệ và báo "Chưa đúng loại"
          GameEngine.triggerEncourageFeedback('wrongType', itemState.el);
          return false;
        }

        AudioSystem.playCorrect();
        this._enterStep(2);
        return true;
      },

      /**
       * Xử lý Bước 2: Đưa bình tưới vào luống (1 lượt tưới đủ cho cả 9 mầm lớn thành nụ)
       */
      _handleWaterDrop() {
        AudioSystem.playWater();
        const soilBedEl = document.getElementById('st1-soil-bed');

        // Hiệu ứng tia nước tưới mát lành trên luống hoa
        const waterFx = document.createElement('div');
        waterFx.className = 'st1-water-Overlay';
        waterFx.innerHTML = `
          <svg viewBox="0 0 320 140" width="85%" height="85%">
            <g fill="#29b6f6" opacity="0.88">
              <circle cx="60" cy="30" r="8"/><circle cx="110" cy="50" r="9"/><circle cx="160" cy="25" r="8"/>
              <circle cx="210" cy="45" r="9"/><circle cx="260" cy="30" r="8"/>
              <circle cx="85" cy="95" r="7"/><circle cx="160" cy="85" r="9"/><circle cx="235" cy="95" r="7"/>
            </g>
          </svg>
        `;
        soilBedEl.appendChild(waterFx);

        setTimeout(() => {
          if (waterFx.parentNode) waterFx.remove();
          this._enterStep(3);
        }, 650);

        return true;
      },

      /**
       * Xử lý Bước 3: Chạm từng nụ hoa để nở và phát âm đếm 1..9
       * - Mỗi hoa chỉ tăng biến đếm đúng 1 lần.
       * - Chạm lại bông hoa đã nở chỉ phát lại số đã gắn với bông đó.
       */
      _handleBudTap(spotIndex) {
        if (this.state.currentStep !== 3) return;
        HandTutorial.stop();

        const spot = this.state.spots[spotIndex];
        const plantEl = document.getElementById(`st1-plant-${spotIndex}`);
        if (!spot || !plantEl) return;

        // Nếu bông hoa này đã nở rồi -> chỉ đọc lại số đã gắn với bông đó
        if (spot.stage === 'bloom' && spot.assignedNumber !== null) {
          AudioSystem.playTap();
          plantEl.classList.remove('item-active');
          void plantEl.offsetWidth;
          plantEl.classList.add('item-active');
          setTimeout(() => plantEl.classList.remove('item-active'), 300);

          AudioSystem.speakSingle(AUDIO_FILES.numbers[spot.assignedNumber]);
          return;
        }

        // Bông hoa mới nở lần đầu -> Tăng số đếm tuần tự (1..9)
        this.state.bloomCount += 1;
        const num = this.state.bloomCount;
        spot.stage = 'bloom';
        spot.assignedNumber = num;

        AudioSystem.playTap();
        plantEl.innerHTML = `
          ${this.getPlantSpotSVG('bloom', this.state.targetFlower)}
          <span class="st1-flower-num-badge">${num}</span>
        `;

        const isLastFlower = (num === 9);
        const speechText = document.getElementById('station-speech-text');
        if (speechText) {
          speechText.textContent = isLastFlower
            ? `🌸 ${num}! Tất cả có 9 bông hoa đã nở rực rỡ!`
            : `🌸 ${num} bông hoa! Bé chạm tiếp các nụ hoa còn lại nhé!`;
        }

        // Xếp hàng đợi đọc số đếm; nếu là bông thứ 9 thì chờ đọc xong số 9 mới đọc câu tổng kết
        AudioSystem.enqueueCountNumber(num, isLastFlower, () => {
          if (isLastFlower && this.state.currentStep === 3) {
            this._enterStep(4);
          }
        });
      },

      /**
       * Bước 4 & 5: Đưa 1 bông hoa từ luống vào giấy gói
       */
      _moveFlowerToBouquet(spotIndex) {
        const spot = this.state.spots[spotIndex];
        if (!spot || spot.inBouquet) return false;

        spot.inBouquet = true;
        AudioSystem.playTap();
        this._syncGardenAndBouquetDOM();
        return true;
      },

      /**
       * Bước 4 & 5: Lấy bớt 1 bông hoa từ giấy gói trả về lại vị trí cũ trên luống
       * (Hỗ trợ cả chạm trực tiếp vào bông hoa trong bó HOẶC kéo bông hoa từ bó về luống)
       */
      _returnFlowerFromBouquet(spotIndex) {
        const spot = this.state.spots[spotIndex];
        if (!spot || !spot.inBouquet) return false;

        spot.inBouquet = false;
        AudioSystem.playTap();
        this._syncGardenAndBouquetDOM();
        return true;
      },

      _syncGardenAndBouquetDOM() {
        const flowerId = this.state.targetFlower;
        const bouquetItemsContainer = document.getElementById('st1-bouquet-items');
        const placeholder = document.getElementById('st1-bouquet-placeholder');
        const counterEl = document.getElementById('st1-bouquet-counter');

        const selectedSpots = this.state.spots.filter((s) => s.inBouquet);
        const currentCount = selectedSpots.length;

        if (counterEl) {
          counterEl.textContent = `Trong bó: ${currentCount} / ${this.state.targetCount}`;
        }
        if (placeholder) {
          placeholder.style.display = currentCount > 0 ? 'none' : 'block';
        }

        // Cập nhật hiển thị 9 ô trên luống đất
        this.state.spots.forEach((sp) => {
          const plantEl = document.getElementById(`st1-plant-${sp.index}`);
          if (!plantEl) return;
          if (sp.inBouquet) {
            plantEl.style.opacity = '0.22';
            plantEl.style.pointerEvents = 'none';
          } else {
            plantEl.style.opacity = '1';
            plantEl.style.pointerEvents = 'auto';
          }
        });

        // Cập nhật các bông hoa nằm trong giấy gói (có thể chạm hoặc kéo để lấy ra khi thừa)
        bouquetItemsContainer.innerHTML = '';
        selectedSpots.forEach((sp, idx) => {
          const itemEl = document.createElement('div');
          itemEl.className = 'st1-bouquet-item learning-item';
          itemEl.setAttribute('title', 'Chạm hoặc kéo về luống để bớt hoa ra');
          itemEl.innerHTML = `
            <svg viewBox="0 0 90 90" width="100%" height="100%">
              ${this.getFlowerHeadOnlySVG(flowerId, 45, 45, 1.15)}
            </svg>
            <span class="st1-flower-num-badge" style="width:24px;height:24px;font-size:0.82rem;">${idx + 1}</span>
          `;

          // Đăng ký kéo thả từ bó hoa về lại luống đất
          this.currentController.registerDraggable(itemEl, {
            id: `bouquet-flower-${sp.index}`,
            type: 'bouquet-flower',
            data: { spotIndex: sp.index },
            canDrag: () => this.state.currentStep === 4 || this.state.currentStep === 5
          });

          // Đồng thời cho phép chạm nhẹ vào bông hoa trong bó để lấy ra nhanh
          itemEl.addEventListener('click', (e) => {
            if (itemEl.dataset.justDragged === 'true') return;
            e.stopPropagation();
            if (this.state.currentStep === 4 || this.state.currentStep === 5) {
              this._returnFlowerFromBouquet(sp.index);
            }
          });

          bouquetItemsContainer.appendChild(itemEl);
        });
      },

      /**
       * Bước 5: Kiểm tra số lượng hoa trong bó so với yêu cầu N
       * - Nếu < N: Báo "Chưa đủ" và giữ nguyên bó hiện tại để trẻ thêm vào.
       * - Nếu > N: Báo "Nhiều hơn rồi" và giữ nguyên bó hiện tại để trẻ lấy bớt ra.
       * - Nếu === N: Chuyển sang Bước 6 (Hoàn thành, thắt nơ, bác làm vườn nhận hoa).
       */
      _handleCheckBouquet() {
        this.state.currentStep = 5;
        this._updateStepPills();

        const currentCount = this.state.spots.filter((s) => s.inBouquet).length;
        const targetCount = this.state.targetCount;
        const bouquetZoneEl = document.getElementById('st1-bouquet-zone');

        if (currentCount < targetCount) {
          GameEngine.triggerEncourageFeedback('notEnough', bouquetZoneEl);
          return;
        }

        if (currentCount > targetCount) {
          GameEngine.triggerEncourageFeedback('tooMany', bouquetZoneEl);
          return;
        }

        // Đúng bằng N -> Bước 6: Hoàn thành!
        this._enterStep6Complete();
      },

      /**
       * Bước 6: Giấy gói thắt nơ, Bác Làm Vườn vui vẻ nhận bó hoa và hoàn thành vòng
       */
      _enterStep6Complete() {
        this.state.currentStep = 6;
        this._updateStepPills();

        const checkBtn = document.getElementById('st1-btn-check');
        if (checkBtn) checkBtn.disabled = true;

        const bouquetZoneEl = document.getElementById('st1-bouquet-zone');
        if (bouquetZoneEl) {
          bouquetZoneEl.classList.add('wrapped-complete');
        }

        const gardenerBox = document.getElementById('st1-gardener-box');
        if (gardenerBox) {
          gardenerBox.innerHTML = SVG_LIB.getGardenerSVG('happy');
        }

        const N = this.state.targetCount;
        const flowerName = this.FLOWER_TYPES[this.state.targetFlower].name;

        GameEngine.triggerCorrectFeedback(
          `Tuyệt vời! Bé đã bó đủ ${N} bông ${flowerName} tặng Bác Làm Vườn!`,
          AUDIO_FILES.summary[N] || AUDIO_FILES.feedback.correct
        );

        setTimeout(() => {
          GameEngine.completeCurrentRound(
            `Bé đã trồng, đếm đến 9 và kết bó đúng ${N} bông ${flowerName} tặng Bác Làm Vườn!`
          );
        }, 1200);
      }
    };

    // Đăng ký Trạm 1 vào GameEngine
    GameEngine.registerStation(1, Station1Garden);
/* ==========================================================================
       BƯỚC 3.1: CSS BỔ SUNG CHO TRẠM 2 (KHU RỪNG) & TRẠM 3 (PHIÊN CHỢ)
       ========================================================================== */
    (function injectStep3Styles() {
      const style = document.createElement('style');
      style.id = 'step3-styles';
      style.textContent = `
        /* ======================================================================
           GIAO DIỆN TRẠM 2 — KHU RỪNG TÌM BẠN
           ====================================================================== */
        .st2-root {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          background: linear-gradient(180deg, #b3e5fc 0%, #e1f5fe 32%, #a5d6a7 33%, #66bb6a 72%, #43a047 100%);
        }

        .st2-steps-bar {
          position: relative;
          z-index: 15;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          padding: 7px 14px;
          background: rgba(255, 255, 255, 0.9);
          border-bottom: 3px solid #66bb6a;
          flex-wrap: wrap;
        }

        .st2-playfield {
          position: relative;
          flex: 1;
          width: 100%;
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          grid-template-rows: 1fr auto;
          gap: 10px;
          padding: 8px 14px 110px;
          z-index: 5;
        }

        /* Khu đồng cỏ & rừng cây bên trái */
        .st2-meadow-zone {
          position: relative;
          background: linear-gradient(180deg, rgba(200, 230, 201, 0.7) 0%, rgba(129, 199, 132, 0.88) 100%);
          border: 4px solid #2e7d32;
          border-radius: 26px;
          padding: 10px;
          box-shadow: inset 0 4px 14px rgba(0,0,0,0.1), 0 6px 14px rgba(0,0,0,0.12);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        .st2-target-banner {
          position: relative;
          z-index: 5;
          background: #ffffff;
          border: 4px solid #ff9800;
          border-radius: 20px;
          padding: 6px 14px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          align-self: flex-start;
          box-shadow: 0 4px 10px rgba(0,0,0,0.12);
        }

        .st2-meadow-grid {
          position: relative;
          z-index: 5;
          flex: 1;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 8px;
          place-items: center;
          padding: 6px 2px;
        }

        .st2-animal-slot {
          width: clamp(64px, 7.8vw, 94px);
          height: clamp(64px, 7.8vw, 94px);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .st2-animal-card {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border-radius: 18px;
        }

        /* Khu thảm tập kết & chọn biển số bên phải */
        .st2-right-zone {
          display: flex;
          flex-direction: column;
          gap: 10px;
          justify-content: space-between;
        }

        .st2-gathering-mat {
          position: relative;
          flex: 1;
          background: radial-gradient(circle at center, #fff9c4 0%, #ffe082 85%, #ffd54f 100%);
          border: 5px dashed #f57f17;
          border-radius: 28px;
          padding: 10px;
          box-shadow: 0 8px 18px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }

        .st2-mat-header {
          font-size: 1.02rem;
          font-weight: 900;
          color: #bf360c;
          background: rgba(255, 255, 255, 0.88);
          padding: 4px 14px;
          border-radius: 999px;
          border: 2px solid #ffb300;
        }

        .st2-mat-grid {
          flex: 1;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 6px;
          place-items: center;
          padding: 4px;
        }

        .st2-mat-item {
          width: clamp(60px, 7.2vw, 84px);
          height: clamp(60px, 7.2vw, 84px);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .st2-count-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #d84315;
          border: 2.5px solid #ffffff;
          color: #ffffff;
          font-weight: 900;
          font-size: 0.92rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0,0,0,0.28);
          pointer-events: none;
        }

        /* Bảng 3 biển số ở Bước 4 */
        .st2-number-board {
          display: none;
          align-items: center;
          justify-content: center;
          gap: 14px;
          background: rgba(255, 255, 255, 0.95);
          border: 4px solid #0288d1;
          border-radius: 22px;
          padding: 8px 14px;
          box-shadow: 0 6px 14px rgba(0,0,0,0.16);
        }
        .st2-number-board.active {
          display: flex;
        }

        .st2-num-sign {
          min-width: 72px;
          min-height: 72px;
          border-radius: 20px;
          background: linear-gradient(180deg, #fffde7 0%, #ffd54f 100%);
          border: 4px solid #f57f17;
          box-shadow: 0 5px 0 #e65100;
          font-size: 1.9rem;
          font-weight: 900;
          color: #bf360c;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.15s ease;
        }
        .st2-num-sign:active {
          transform: translateY(3px);
        }

        /* Khu vực đường ray & Đoàn tàu tham quan phía dưới */
        .st2-train-station {
          grid-column: 1 / -1;
          position: relative;
          height: 128px;
          background: linear-gradient(180deg, rgba(141, 110, 99, 0.25) 0%, rgba(93, 64, 55, 0.45) 100%);
          border-radius: 22px;
          border: 3px solid #5d4037;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 6px 14px;
        }

        .st2-rail-track {
          position: absolute;
          bottom: 8px;
          left: 0;
          right: 0;
          height: 12px;
          background: repeating-linear-gradient(90deg, #4e342e 0px, #4e342e 16px, transparent 16px, transparent 32px);
          border-top: 4px solid #78909c;
          pointer-events: none;
        }

        .st2-train-wrapper {
          position: relative;
          z-index: 5;
          display: flex;
          align-items: flex-end;
          gap: 6px;
          transform: translateX(-120%);
          transition: transform 0.95s cubic-bezier(0.22, 1, 0.36, 1);
          width: 100%;
          justify-content: center;
        }
        .st2-train-wrapper.arrived {
          transform: translateX(0%);
        }
        .st2-train-wrapper.departing {
          transform: translateX(125%);
          transition: transform 1.2s ease-in;
        }

        .st2-train-seats-box {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #29b6f6;
          border: 4px solid #01579b;
          border-radius: 20px;
          padding: 6px 10px;
          min-height: 86px;
          box-shadow: 0 6px 0 #0277bd;
        }

        .st2-seat-slot {
          width: clamp(50px, 5.8vw, 68px);
          height: clamp(54px, 6.2vw, 70px);
          background: #e1f5fe;
          border: 3px dashed #0288d1;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .st2-seat-slot.occupied {
          border-style: solid;
          border-color: #2e7d32;
          background: #ffffff;
        }

        .st2-depart-btn {
          margin-left: 10px;
          min-height: 68px;
          padding: 10px 22px;
          border-radius: 999px;
          background: linear-gradient(180deg, #ffca28 0%, #f57c00 100%);
          border: 4px solid #ffffff;
          box-shadow: 0 6px 0 #bf360c;
          color: #ffffff;
          font-size: 1.18rem;
          font-weight: 900;
          display: none;
          align-items: center;
          gap: 8px;
          animation: bunnyHappyBounce 1.2s infinite;
        }
        .st2-depart-btn.visible {
          display: inline-flex;
        }

        /* ======================================================================
           GIAO DIỆN TRẠM 3 — PHIÊN CHỢ NÔNG TRẠI
           ====================================================================== */
        .st3-root {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          background: linear-gradient(180deg, #fff8e1 0%, #ffecb3 35%, #c5e1a5 36%, #9ccc65 100%);
        }

        .st3-steps-bar {
          position: relative;
          z-index: 15;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          padding: 7px 14px;
          background: rgba(255, 255, 255, 0.92);
          border-bottom: 3px solid #ffb300;
          flex-wrap: wrap;
        }

        .st3-playfield {
          position: relative;
          flex: 1;
          width: 100%;
          display: grid;
          grid-template-columns: 1.2fr 0.9fr 0.9fr;
          gap: 12px;
          padding: 10px 14px 115px;
          align-items: stretch;
          z-index: 5;
        }

        /* Cột trái: Quầy gỗ nông sản (Luôn có 9 món mục tiêu + 2 món loại khác) */
        .st3-stall-panel {
          background: linear-gradient(180deg, #ffe0b2 0%, #ffcc80 100%);
          border: 5px solid #8d6e63;
          border-radius: 26px;
          padding: 10px;
          box-shadow: 0 8px 18px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 8px;
        }

        .st3-awning {
          background: repeating-linear-gradient(
            90deg,
            #e53935 0px,
            #e53935 28px,
            #ffffff 28px,
            #ffffff 56px
          );
          height: 26px;
          border-radius: 14px 14px 6px 6px;
          border: 2.5px solid #b71c1c;
          box-shadow: 0 4px 6px rgba(0,0,0,0.15);
        }

        .st3-shelf-grid {
          flex: 1;
          background: rgba(255, 255, 255, 0.78);
          border: 3px solid #a1887f;
          border-radius: 18px;
          padding: 8px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 8px;
          place-items: center;
        }

        .st3-shelf-slot {
          width: clamp(58px, 6.8vw, 78px);
          height: clamp(58px, 6.8vw, 78px);
          background: rgba(239, 235, 233, 0.85);
          border: 2px dashed #bcaaa4;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .st3-produce-item {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        /* Cột giữa: Giỏ hàng (tối đa 9 món) & Nút giao hàng */
        .st3-basket-panel {
          background: rgba(255, 255, 255, 0.94);
          border: 4px solid #f57c00;
          border-radius: 26px;
          padding: 12px;
          box-shadow: 0 8px 18px rgba(0,0,0,0.14);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .st3-basket-dropzone {
          position: relative;
          width: 100%;
          flex: 1;
          min-height: 185px;
          background: linear-gradient(180deg, #fffde7 0%, #ffe082 100%);
          border: 4px dashed #ef6c00;
          border-radius: 24px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }

        .st3-basket-items-grid {
          width: 100%;
          flex: 1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 6px;
          place-items: center;
        }

        .st3-basket-item {
          width: clamp(52px, 6vw, 68px);
          height: clamp(52px, 6vw, 68px);
          position: relative;
          cursor: pointer;
          transition: transform 0.16s ease;
        }
        .st3-basket-item:hover {
          transform: scale(1.08);
        }

        .st3-deliver-btn {
          width: 100%;
          min-height: 62px;
          border-radius: 999px;
          background: linear-gradient(180deg, #ffca28 0%, #f57c00 100%);
          border: 3px solid #e65100;
          box-shadow: 0 5px 0 #bf360c;
          color: #ffffff;
          font-size: 1.15rem;
          font-weight: 900;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .st3-deliver-btn:disabled {
          opacity: 0.45;
          filter: grayscale(0.5);
          pointer-events: none;
        }

        /* Cột phải: Khách hàng, Phiếu đơn hàng & Heo đất nhận xu */
        .st3-customer-panel {
          background: rgba(255, 255, 255, 0.94);
          border: 4px solid #43a047;
          border-radius: 26px;
          padding: 12px;
          box-shadow: 0 8px 18px rgba(0,0,0,0.14);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .st3-customer-top {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
        }

        .st3-customer-avatar {
          width: 86px;
          height: 92px;
          flex-shrink: 0;
        }

        .st3-order-bubble {
          flex: 1;
          background: #f1f8e9;
          border: 3px solid #2e7d32;
          border-radius: 20px;
          padding: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .st3-order-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .st3-order-qty {
          font-size: 2rem;
          font-weight: 900;
          color: #d84315;
        }

        /* Khu vực Heo đất & Đồng xu đồ chơi (Bước 8 - 10) */
        .st3-piggy-zone {
          width: 100%;
          flex: 1;
          background: #fce4ec;
          border: 3px solid #ec407a;
          border-radius: 22px;
          padding: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
        }

        .st3-coins-tray {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          justify-content: center;
          align-items: center;
          min-height: 62px;
          width: 100%;
        }

        .st3-toy-coin {
          width: 48px;
          height: 48px;
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease;
        }
        .st3-toy-coin:hover {
          transform: scale(1.12);
        }
        .st3-toy-coin.collected {
          opacity: 0.22;
          pointer-events: none;
          transform: scale(0.8);
        }

        @media (max-width: 980px) {
          .st2-playfield,
          .st3-playfield {
            grid-template-columns: 1fr;
            overflow-y: auto;
            padding-bottom: 130px;
          }
          .st2-train-station {
            min-height: 120px;
          }
        }
      `;
      document.head.appendChild(style);
    })();

    /* ==========================================================================
       BƯỚC 3.2: CẬP NHẬT ĐƯỜNG DẪN ÂM THANH CHI TIẾT CHO TRẠM 2 & TRẠM 3
       ========================================================================== */
    if (AUDIO_FILES && AUDIO_FILES.stations) {
      if (AUDIO_FILES.stations[2]) {
        Object.assign(AUDIO_FILES.stations[2], {
          step1Model: './am-thanh/tram2-buoc1-xem-hinh-mau.mp3',
          step2Gather: './am-thanh/tram2-buoc2-dua-ban-vao-tham.mp3',
          step3Count: './am-thanh/tram2-buoc3-cham-dem-ban.mp3',
          step4ChooseNum: './am-thanh/tram2-buoc4-chon-bien-so.mp3',
          step5TrainArrive: './am-thanh/tram2-buoc5-tau-vao-ga.mp3',
          step6BoardTrain: './am-thanh/tram2-buoc6-len-ghe-tau.mp3',
          step7Depart: './am-thanh/tram2-buoc7-tau-khoi-hanh.mp3'
        });
      }
      if (AUDIO_FILES.stations[3]) {
        Object.assign(AUDIO_FILES.stations[3], {
          step1Order: './am-thanh/tram3-buoc1-xem-don-hang.mp3',
          step2Pick: './am-thanh/tram3-buoc2-chon-nong-san-vao-gio.mp3',
          step8Coins: './am-thanh/tram3-buoc8-nhan-xu-do-choi.mp3',
          step9CountCoins: './am-thanh/tram3-buoc9-cham-xu-vao-heo-dat.mp3',
          step10Thanks: './am-thanh/tram3-buoc10-khach-cam-on.mp3'
        });
      }
    }

    /* ==========================================================================
       BƯỚC 3.3: TRẠM 2 — KHU RỪNG TÌM BẠN (ĐẦY ĐỦ 3 VÒNG & 7 BƯỚC TUẦN TỰ)
       - Không để tiếng kêu động vật chồng lên giọng đọc số khi đếm.
       - Con vật vẽ bằng SVG 2D bo tròn, có mắt chớp nhẹ, đứng vị trí ổn định.
       ========================================================================== */
    const Station2Forest = {
      ANIMAL_SPECIES: {
        duck: {
          id: 'duck',
          name: 'Bạn Vịt Vàng'
        },
        deer: {
          id: 'deer',
          name: 'Bạn Hươu Sao'
        },
        squirrel: {
          id: 'squirrel',
          name: 'Bạn Sóc Nâu'
        },
        frog: {
          id: 'frog',
          name: 'Bạn Ếch Xanh'
        },
        bird: {
          id: 'bird',
          name: 'Bạn Chim Xanh'
        }
      },

      // 3 vòng chơi có loài mục tiêu và số lượng N (1..9) hoàn toàn khác nhau
      ROUNDS_CONFIG: [
        {
          roundIndex: 0,
          targetSpecies: 'duck',
          targetCount: 3, // Vòng 1: 3 Bạn Vịt Vàng + 2 loài khác
          distractors: ['frog', 'squirrel'],
          numberChoices: [2, 3, 5]
        },
        {
          roundIndex: 1,
          targetSpecies: 'deer',
          targetCount: 5, // Vòng 2: 5 Bạn Hươu Sao + 2 loài khác
          distractors: ['duck', 'frog'],
          numberChoices: [4, 5, 7]
        },
        {
          roundIndex: 2,
          targetSpecies: 'squirrel',
          targetCount: 8, // Vòng 3: 8 Bạn Sóc Nâu + 2 loài khác
          distractors: ['deer', 'bird'],
          numberChoices: [6, 8, 9]
        }
      ],

      currentController: null,
      state: null,

      /* --- THƯ VIỆN SVG CÁC BẠN THÚ RỪNG & ĐOÀN TÀU --- */
      getAnimalSVG(speciesId) {
        if (speciesId === 'duck') {
          return `
            <svg viewBox="0 0 90 90" width="100%" height="100%" class="layer-character">
              <ellipse cx="45" cy="80" rx="26" ry="7" fill="rgba(0,0,0,0.15)"/>
              <!-- Chân màng cam -->
              <path d="M33,72 L27,79 L39,79 Z" fill="#ff8f00" stroke="#e65100" stroke-width="2"/>
              <path d="M55,72 L49,79 L61,79 Z" fill="#ff8f00" stroke="#e65100" stroke-width="2"/>
              <!-- Thân vịt tròn -->
              <ellipse cx="46" cy="56" rx="25" ry="18" fill="#ffd54f" stroke="#f57f17" stroke-width="3"/>
              <path d="M34,52 Q46,62 58,52" fill="none" stroke="#ffb300" stroke-width="3" stroke-linecap="round"/>
              <!-- Đầu vịt -->
              <circle cx="42" cy="32" r="17" fill="#ffee58" stroke="#f57f17" stroke-width="3"/>
              <!-- Mắt chớp -->
              <g class="char-eye-blink">
                <circle cx="36" cy="29" r="3.2" fill="#263238"/>
                <circle cx="48" cy="29" r="3.2" fill="#263238"/>
              </g>
              <!-- Mỏ cam -->
              <ellipse cx="42" cy="36" rx="9" ry="4.5" fill="#ff7043" stroke="#d84315" stroke-width="2"/>
            </svg>
          `;
        }
        if (speciesId === 'deer') {
          return `
            <svg viewBox="0 0 90 90" width="100%" height="100%" class="layer-character">
              <ellipse cx="45" cy="81" rx="26" ry="7" fill="rgba(0,0,0,0.15)"/>
              <!-- Chân -->
              <rect x="30" y="60" width="7" height="19" rx="3.5" fill="#a1887f" stroke="#5d4037" stroke-width="2"/>
              <rect x="52" y="60" width="7" height="19" rx="3.5" fill="#a1887f" stroke="#5d4037" stroke-width="2"/>
              <!-- Thân hươu sao -->
              <ellipse cx="45" cy="56" rx="22" ry="15" fill="#ffb74d" stroke="#8d6e63" stroke-width="3"/>
              <circle cx="38" cy="53" r="3" fill="#fff8e1"/>
              <circle cx="50" cy="51" r="3" fill="#fff8e1"/>
              <circle cx="45" cy="60" r="2.8" fill="#fff8e1"/>
              <!-- Gạc nhỏ & Tai -->
              <path d="M33,18 L29,10 M33,14 L37,11" stroke="#6d4c41" stroke-width="3" stroke-linecap="round"/>
              <path d="M57,18 L61,10 M57,14 L53,11" stroke="#6d4c41" stroke-width="3" stroke-linecap="round"/>
              <ellipse cx="26" cy="24" rx="7" ry="4" transform="rotate(-20 26 24)" fill="#ffb74d" stroke="#8d6e63" stroke-width="2.5"/>
              <ellipse cx="64" cy="24" rx="7" ry="4" transform="rotate(20 64 24)" fill="#ffb74d" stroke="#8d6e63" stroke-width="2.5"/>
              <!-- Đầu -->
              <circle cx="45" cy="31" r="16" fill="#ffcc80" stroke="#8d6e63" stroke-width="3"/>
              <g class="char-eye-blink">
                <circle cx="39" cy="29" r="3" fill="#263238"/>
                <circle cx="51" cy="29" r="3" fill="#263238"/>
              </g>
              <ellipse cx="45" cy="35" rx="4.5" ry="3" fill="#5d4037"/>
              <path d="M41,40 Q45,44 49,40" fill="none" stroke="#5d4037" stroke-width="2" stroke-linecap="round"/>
            </svg>
          `;
        }
        if (speciesId === 'squirrel') {
          return `
            <svg viewBox="0 0 90 90" width="100%" height="100%" class="layer-character">
              <ellipse cx="45" cy="80" rx="26" ry="7" fill="rgba(0,0,0,0.15)"/>
              <!-- Đuôi xù to tròn -->
              <path d="M56,64 C78,62 82,30 62,28 C52,27 54,48 56,64 Z" fill="#a1887f" stroke="#5d4037" stroke-width="3"/>
              <!-- Chân -->
              <ellipse cx="34" cy="74" rx="8" ry="5" fill="#8d6e63" stroke="#4e342e" stroke-width="2"/>
              <ellipse cx="50" cy="74" rx="8" ry="5" fill="#8d6e63" stroke="#4e342e" stroke-width="2"/>
              <!-- Thân -->
              <ellipse cx="42" cy="56" rx="18" ry="17" fill="#bcaaa4" stroke="#5d4037" stroke-width="3"/>
              <ellipse cx="42" cy="58" rx="11" ry="11" fill="#efebe9"/>
              <!-- Tai & Đầu -->
              <circle cx="30" cy="20" r="6" fill="#8d6e63" stroke="#4e342e" stroke-width="2.5"/>
              <circle cx="54" cy="20" r="6" fill="#8d6e63" stroke="#4e342e" stroke-width="2.5"/>
              <circle cx="42" cy="33" r="15" fill="#bcaaa4" stroke="#5d4037" stroke-width="3"/>
              <g class="char-eye-blink">
                <circle cx="36" cy="31" r="3" fill="#263238"/>
                <circle cx="48" cy="31" r="3" fill="#263238"/>
              </g>
              <circle cx="42" cy="36" r="3" fill="#d84315"/>
              <path d="M38,41 Q42,44 46,41" fill="none" stroke="#4e342e" stroke-width="2" stroke-linecap="round"/>
            </svg>
          `;
        }
        if (speciesId === 'frog') {
          return `
            <svg viewBox="0 0 90 90" width="100%" height="100%" class="layer-character">
              <ellipse cx="45" cy="80" rx="26" ry="7" fill="rgba(0,0,0,0.15)"/>
              <ellipse cx="45" cy="54" rx="24" ry="18" fill="#66bb6a" stroke="#1b5e20" stroke-width="3"/>
              <ellipse cx="45" cy="58" rx="15" ry="11" fill="#c8e6c9"/>
              <circle cx="33" cy="34" r="9" fill="#66bb6a" stroke="#1b5e20" stroke-width="3"/>
              <circle cx="57" cy="34" r="9" fill="#66bb6a" stroke="#1b5e20" stroke-width="3"/>
              <g class="char-eye-blink">
                <circle cx="33" cy="34" r="4" fill="#263238"/>
                <circle cx="57" cy="34" r="4" fill="#263238"/>
              </g>
              <path d="M35,50 Q45,58 55,50" fill="none" stroke="#1b5e20" stroke-width="3" stroke-linecap="round"/>
            </svg>
          `;
        }
        // Chim xanh ('bird')
        return `
          <svg viewBox="0 0 90 90" width="100%" height="100%" class="layer-character">
            <ellipse cx="45" cy="80" rx="22" ry="6" fill="rgba(0,0,0,0.14)"/>
            <ellipse cx="45" cy="50" rx="22" ry="19" fill="#29b6f6" stroke="#01579b" stroke-width="3"/>
            <ellipse cx="45" cy="55" rx="13" ry="11" fill="#e1f5fe"/>
            <g class="char-eye-blink">
              <circle cx="38" cy="43" r="3.2" fill="#263238"/>
              <circle cx="52" cy="43" r="3.2" fill="#263238"/>
            </g>
            <polygon points="45,46 40,52 50,52" fill="#ffb300" stroke="#e65100" stroke-width="1.5"/>
          </svg>
        `;
      },

      getTrainEngineSVG() {
        return `
          <svg viewBox="0 0 110 86" width="96" height="78">
            <rect x="26" y="10" width="16" height="22" rx="4" fill="#ef5350" stroke="#b71c1c" stroke-width="2.5"/>
            <rect x="14" y="28" width="84" height="42" rx="12" fill="#43a047" stroke="#1b5e20" stroke-width="3"/>
            <rect x="64" y="16" width="32" height="30" rx="6" fill="#fff9c4" stroke="#f57f17" stroke-width="3"/>
            <circle cx="34" cy="72" r="11" fill="#37474f" stroke="#cfd8dc" stroke-width="3"/>
            <circle cx="76" cy="72" r="11" fill="#37474f" stroke="#cfd8dc" stroke-width="3"/>
          </svg>
        `;
      },

      render(stageEl, roundIndex = 0) {
        if (this.currentController) {
          this.currentController.destroy();
          this.currentController = null;
        }
        HandTutorial.stop();

        const cfg = this.ROUNDS_CONFIG[roundIndex] || this.ROUNDS_CONFIG[0];
        const targetInfo = this.ANIMAL_SPECIES[cfg.targetSpecies];

        // Tạo danh sách các con vật trên đồng cỏ: N con loài mục tiêu + 2 con loài khác
        const animalsList = [];
        for (let i = 0; i < cfg.targetCount; i++) {
          animalsList.push({
            uid: `animal-target-${i}`,
            species: cfg.targetSpecies,
            isTarget: true,
            location: 'meadow', // 'meadow' | 'mat' | 'train'
            assignedCount: null
          });
        }
        cfg.distractors.forEach((dSpecies, idx) => {
          animalsList.push({
            uid: `animal-dist-${idx}`,
            species: dSpecies,
            isTarget: false,
            location: 'meadow',
            assignedCount: null
          });
        });

        // Trộn vị trí cố định để các bạn thú đứng xen kẽ tự nhiên
        const shuffled = animalsList.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = (i * 3 + roundIndex + 1) % (i + 1);
          const tmp = shuffled[i];
          shuffled[i] = shuffled[j];
          shuffled[j] = tmp;
        }

        this.state = {
          roundIndex,
          targetSpecies: cfg.targetSpecies,
          targetCount: cfg.targetCount,
          numberChoices: cfg.numberChoices,
          currentStep: 1, // 1..7
          countedSoFar: 0,
          animals: shuffled
        };

        stageEl.innerHTML = `
          <div class="st2-root" id="st2-root">
            <!-- Thanh 7 bước tiến trình -->
            <div class="st2-steps-bar">
              <div class="st1-steps-list" id="st2-steps-list">
                <span class="st1-step-pill active" data-step-pill="1">1. 👀 Xem mẫu</span>
                <span class="st1-step-pill" data-step-pill="2">2. 🧺 Tập hợp bạn</span>
                <span class="st1-step-pill" data-step-pill="3">3. 👆 Chạm đếm</span>
                <span class="st1-step-pill" data-step-pill="4">4. 🔢 Chọn biển số</span>
                <span class="st1-step-pill" data-step-pill="5">5. 🚂 Tàu vào ga</span>
                <span class="st1-step-pill" data-step-pill="6">6. 💺 Lên ghế tàu</span>
                <span class="st1-step-pill" data-step-pill="7">7. 🚩 Khởi hành</span>
              </div>
              <button type="button" class="st1-demo-btn" id="st2-btn-watch-demo">
                👋 Xem mẫu
              </button>
            </div>

            <!-- Sân chơi chính -->
            <div class="st2-playfield">
              <!-- Đồng cỏ rừng xanh bên trái -->
              <div class="st2-meadow-zone" id="st2-meadow-zone">
                <div class="st2-target-banner" id="st2-target-banner">
                  <div style="width:52px;height:52px;">${this.getAnimalSVG(cfg.targetSpecies)}</div>
                  <div>
                    <div style="font-size:0.84rem;font-weight:800;color:#e65100;">BẠN THÚ CẦN TÌM:</div>
                    <div style="font-size:1.15rem;font-weight:900;color:#1b5e20;">${targetInfo.name}</div>
                  </div>
                </div>

                <!-- Lưới vị trí ổn định trên đồng cỏ -->
                <div class="st2-meadow-grid" id="st2-meadow-grid">
                  ${this.state.animals.map((an) => `
                    <div class="st2-animal-slot" id="st2-meadow-slot-${an.uid}">
                      <div class="st2-animal-card learning-item"
                           id="st2-animal-${an.uid}"
                           data-uid="${an.uid}"
                           aria-label="${this.ANIMAL_SPECIES[an.species].name}">
                        ${this.getAnimalSVG(an.species)}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Khu vực Thảm tập kết & Biển số bên phải -->
              <div class="st2-right-zone">
                <div class="st2-gathering-mat" id="st2-gathering-mat" aria-label="Thảm tập kết">
                  <div class="st2-mat-header" id="st2-mat-header">
                    🧺 Thảm Tập Kết (${targetInfo.name}: 0 / ${cfg.targetCount})
                  </div>
                  <div class="st2-mat-grid" id="st2-mat-grid"></div>
                </div>

                <!-- 3 Biển số hiển thị ở Bước 4 -->
                <div class="st2-number-board" id="st2-number-board" aria-label="Chọn biển số đúng">
                  <span style="font-weight:900;color:#01579b;font-size:1rem;">Chọn số lượng:</span>
                  ${cfg.numberChoices.map((num) => `
                    <button type="button" class="st2-num-sign learning-item" data-num="${num}">
                      ${num}
                    </button>
                  `).join('')}
                </div>
              </div>

              <!-- Đoàn tàu tham quan phía dưới (Bước 5 - 7) -->
              <div class="st2-train-station" id="st2-train-station">
                <div class="st2-rail-track"></div>
                <div class="st2-train-wrapper" id="st2-train-wrapper">
                  ${this.getTrainEngineSVG()}
                  <div class="st2-train-seats-box" id="st2-train-dropzone" aria-label="Toa ghế ngồi đoàn tàu">
                    ${Array.from({ length: cfg.targetCount }, (_, sIdx) => `
                      <div class="st2-seat-slot" id="st2-seat-${sIdx}" data-seat-index="${sIdx}"></div>
                    `).join('')}
                  </div>
                  <button type="button" class="st2-depart-btn" id="st2-btn-depart">
                    🚩 Khởi hành!
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;

        this.currentController = new InteractionController(stageEl);
        this._bindInteractions(stageEl);
        this._enterStep1And2();
      },

      _updateStepPills(stepNum) {
        this.state.currentStep = stepNum;
        document.querySelectorAll('#st2-steps-list [data-step-pill]').forEach((pill) => {
          const n = Number(pill.getAttribute('data-step-pill'));
          pill.classList.remove('active', 'done');
          if (n < stepNum) pill.classList.add('done');
          else if (n === stepNum) pill.classList.add('active');
        });
      },

      _setHintTargets(selectors = []) {
        document.querySelectorAll('#station-stage [data-hint-target]').forEach((el) => {
          el.removeAttribute('data-hint-target');
          el.classList.remove('idle-hint-glow');
        });
        selectors.forEach((sel) => {
          document.querySelectorAll(sel).forEach((el) => el.setAttribute('data-hint-target', 'true'));
        });
        IdleHintSystem.resetTimer();
      },

      _bindInteractions(stageEl) {
        const ctrl = this.currentController;
        const matEl = document.getElementById('st2-gathering-mat');
        const trainZoneEl = document.getElementById('st2-train-dropzone');
        const departBtn = document.getElementById('st2-btn-depart');
        const demoBtn = document.getElementById('st2-btn-watch-demo');

        // Đăng ký kéo thả / chạm chọn cho tất cả con vật trên đồng cỏ
        this.state.animals.forEach((an) => {
          const el = document.getElementById(`st2-animal-${an.uid}`);
          ctrl.registerDraggable(el, {
            id: an.uid,
            type: 'meadow-animal',
            data: { uid: an.uid },
            canDrag: () => this.state.currentStep === 2 && an.location === 'meadow'
          });
        });

        // Thảm tập kết nhận con vật ở Bước 2
        ctrl.registerDropzone(matEl, {
          acceptTypes: ['meadow-animal'],
          hitboxPadding: 26,
          onDrop: (itemState) => {
            if (this.state.currentStep !== 2) return false;
            return this._handleAnimalDropToMat(itemState.data.uid, itemState.el);
          }
        });

        // Toa tàu nhận con vật từ thảm ở Bước 6
        ctrl.registerDropzone(trainZoneEl, {
          acceptTypes: ['mat-animal'],
          hitboxPadding: 28,
          onDrop: (itemState) => {
            if (this.state.currentStep !== 6) return false;
            return this._handleAnimalBoardTrain(itemState.data.uid);
          }
        });

        // Sự kiện chọn biển số ở Bước 4
        document.querySelectorAll('#st2-number-board .st2-num-sign').forEach((btn) => {
          btn.addEventListener('click', () => {
            if (this.state.currentStep !== 4) return;
            const chosenNum = Number(btn.getAttribute('data-num'));
            this._handleChooseNumberSign(chosenNum, btn);
          });
        });

        // Nút khởi hành ở Bước 7
        departBtn.addEventListener('click', () => {
          if (this.state.currentStep !== 7) return;
          this._handleTrainDepart();
        });

        // Nút xem mẫu
        demoBtn.addEventListener('click', () => {
          AudioSystem.playTap();
          this._playCurrentTutorial(stageEl);
        });
      },

      _playCurrentTutorial(stageEl) {
        const step = this.state.currentStep;
        if (step <= 2) {
          const targetAnimal = this.state.animals.find((a) => a.isTarget && a.location === 'meadow');
          if (targetAnimal) {
            HandTutorial.playDemo('drag_drop', {
              container: stageEl,
              fromEl: document.getElementById(`st2-animal-${targetAnimal.uid}`),
              toEl: document.getElementById('st2-gathering-mat'),
              label: 'Đưa đúng bạn thú theo hình mẫu vào Thảm tập kết nhé!'
            });
          }
        } else if (step === 3) {
          const firstMatEl = document.querySelector('#st2-mat-grid .st2-mat-item');
          if (firstMatEl) {
            HandTutorial.playDemo('tap_count', {
              container: stageEl,
              fromEl: firstMatEl,
              label: 'Chạm vào từng bạn thú trên thảm để đếm nhé!'
            });
          }
        } else if (step === 4) {
          const correctBtn = document.querySelector(`#st2-number-board .st2-num-sign[data-num="${this.state.targetCount}"]`);
          if (correctBtn) {
            HandTutorial.playDemo('tap_count', {
              container: stageEl,
              fromEl: correctBtn,
              label: 'Chạm vào biển số đúng với số lượng vừa đếm nhé!'
            });
          }
        } else if (step === 6) {
          const firstMatEl = document.querySelector('#st2-mat-grid .st2-mat-item:not(.boarded)');
          const trainZone = document.getElementById('st2-train-dropzone');
          if (firstMatEl && trainZone) {
            HandTutorial.playDemo('drag_drop', {
              container: stageEl,
              fromEl: firstMatEl,
              toEl: trainZone,
              label: 'Đưa từng bạn thú từ thảm lên ghế trống trên tàu nhé!'
            });
          }
        }
      },

      /**
       * Bước 1 & Bước 2: Hiển thị mẫu loài cần tìm và mở thao tác đưa vào thảm tập kết
       */
      _enterStep1And2() {
        const spName = this.ANIMAL_SPECIES[this.state.targetSpecies].name;
        this._updateStepPills(1);

        // Bước 1: Nhấn mạnh bảng mẫu rồi mở ngay Bước 2
        const banner = document.getElementById('st2-target-banner');
        if (banner) banner.classList.add('idle-hint-glow');

        setTimeout(() => {
          if (banner) banner.classList.remove('idle-hint-glow');
          if (this.state.currentStep === 1) {
            this._updateStepPills(2);
          }
        }, 900);

        this.state.currentStep = 2;
        GameEngine.setInstruction(
          `Bước 1 & 2: Bé hãy nhìn hình mẫu ${spName} và đưa tất cả ${spName} vào Thảm tập kết nhé!`,
          AUDIO_FILES.stations[2].step2Gather || AUDIO_FILES.stations[2][`round${this.state.roundIndex + 1}`]
        );
        this._setHintTargets(['.st2-animal-card', '#st2-gathering-mat']);
      },

      /**
       * Xử lý khi trẻ thả con vật vào thảm ở Bước 2
       */
      _handleAnimalDropToMat(uid, originalEl) {
        const animal = this.state.animals.find((a) => a.uid === uid);
        if (!animal || animal.location !== 'meadow') return false;

        // Nếu sai loài -> trả về chỗ cũ và báo "Chưa đúng loại"
        if (!animal.isTarget) {
          GameEngine.triggerEncourageFeedback('wrongType', originalEl);
          return false;
        }

        // Đúng loài -> Chuyển vào thảm tập kết
        animal.location = 'mat';
        AudioSystem.playCorrect();

        if (originalEl) {
          originalEl.style.opacity = '0.18';
          originalEl.style.pointerEvents = 'none';
        }

        this._renderMatAnimals();

        const gatheredCount = this.state.animals.filter((a) => a.location === 'mat').length;
        const spName = this.ANIMAL_SPECIES[this.state.targetSpecies].name;
        document.getElementById('st2-mat-header').textContent =
          `🧺 Thảm Tập Kết (${spName}: ${gatheredCount} / ${this.state.targetCount})`;

        if (gatheredCount === this.state.targetCount) {
          setTimeout(() => this._enterStep3Count(), 450);
        }
        return true;
      },

      _renderMatAnimals() {
        const matGrid = document.getElementById('st2-mat-grid');
        const matAnimals = this.state.animals.filter((a) => a.location === 'mat' || a.location === 'train');
        matGrid.innerHTML = '';

        matAnimals.forEach((an) => {
          const item = document.createElement('div');
          item.className = `st2-mat-item learning-item ${an.location === 'train' ? 'boarded' : ''}`;
          item.id = `st2-mat-animal-${an.uid}`;
          item.style.opacity = an.location === 'train' ? '0.22' : '1';
          item.style.pointerEvents = an.location === 'train' ? 'none' : 'auto';
          item.innerHTML = `
            ${this.getAnimalSVG(an.species)}
            ${an.assignedCount ? `<span class="st2-count-badge">${an.assignedCount}</span>` : ''}
          `;

          // Ở Bước 3: Chạm từng con để đếm từ 1 đến N (Không phát tiếng kêu động vật đè giọng đọc số)
          item.addEventListener('click', (e) => {
            if (item.dataset.justDragged === 'true') return;
            if (this.state.currentStep === 3) {
              e.stopPropagation();
              this._handleTapCountAnimal(an, item);
            }
          });

          // Ở Bước 6: Hỗ trợ kéo thả hoặc chạm 2 điểm đưa bạn thú từ thảm lên ghế tàu
          this.currentController.registerDraggable(item, {
            id: `mat-${an.uid}`,
            type: 'mat-animal',
            data: { uid: an.uid },
            canDrag: () => this.state.currentStep === 6 && an.location === 'mat'
          });

          matGrid.appendChild(item);
        });
      },

      /**
       * Bước 3: Chạm từng con vật trên thảm để đếm từ 1 đến N
       */
      _enterStep3Count() {
        this._updateStepPills(3);
        const spName = this.ANIMAL_SPECIES[this.state.targetSpecies].name;
        GameEngine.setInstruction(
          `Bước 3: Đã tập hợp đủ các bạn ${spName}! Bé hãy chạm vào từng bạn trên thảm để đếm từ 1 đến ${this.state.targetCount} nhé!`,
          AUDIO_FILES.stations[2].step3Count || AUDIO_FILES.stations[2].stepCount
        );
        this._setHintTargets(['#st2-mat-grid .st2-mat-item']);
      },

      _handleTapCountAnimal(animalObj, itemEl) {
        if (this.state.currentStep !== 3) return;
        HandTutorial.stop();

        // Nếu con vật này đã được đếm rồi -> chỉ phát lại số đã gắn với con vật đó
        if (animalObj.assignedCount !== null) {
          AudioSystem.playTap();
          AudioSystem.speakSingle(AUDIO_FILES.numbers[animalObj.assignedCount]);
          return;
        }

        this.state.countedSoFar += 1;
        const num = this.state.countedSoFar;
        animalObj.assignedCount = num;

        // Tuyệt đối chỉ phát âm thanh chạm nhẹ & giọng đọc số, không phát tiếng kêu động vật chồng lên
        AudioSystem.playTap();
        this._renderMatAnimals();

        const isFinal = (num === this.state.targetCount);
        const speechText = document.getElementById('station-speech-text');
        if (speechText) {
          speechText.textContent = isFinal
            ? `🌟 ${num}! Tất cả có ${num} ${this.ANIMAL_SPECIES[this.state.targetSpecies].name}!`
            : `👆 ${num}! Bé chạm đếm tiếp bạn bên cạnh nhé!`;
        }

        AudioSystem.enqueueCountNumber(num, isFinal, () => {
          if (isFinal && this.state.currentStep === 3) {
            this._enterStep4ChooseNumber();
          }
        });
      },

      /**
       * Bước 4: Hiển thị 3 biển số khác nhau (1..9), trẻ chọn biển số N
       */
      _enterStep4ChooseNumber() {
        this._updateStepPills(4);
        const board = document.getElementById('st2-number-board');
        if (board) board.classList.add('active');

        GameEngine.setInstruction(
          `Bước 4: Có tất cả ${this.state.targetCount} bạn! Bé hãy chạm chọn biển số ${this.state.targetCount} nhé!`,
          AUDIO_FILES.stations[2].step4ChooseNum
        );
        this._setHintTargets(['#st2-number-board .st2-num-sign']);
      },

      _handleChooseNumberSign(chosenNum, btnEl) {
        if (chosenNum !== this.state.targetCount) {
          GameEngine.triggerEncourageFeedback('recount', btnEl);
          return;
        }

        AudioSystem.playCorrect();
        btnEl.style.background = '#66bb6a';
        btnEl.style.color = '#ffffff';
        this._enterStep5TrainArrives();
      },

      /**
       * Bước 5: Đoàn tàu chạy vào ga và dừng hẳn (có tiếng còi tàu)
       */
      _enterStep5TrainArrives() {
        this._updateStepPills(5);
        AudioSystem.playTrainHorn();

        const trainWrapper = document.getElementById('st2-train-wrapper');
        if (trainWrapper) {
          trainWrapper.classList.add('arrived');
        }

        GameEngine.setInstruction(
          'Bước 5: Tu tu xình xịch! Đoàn tàu tham quan đã vào ga rồi!',
          AUDIO_FILES.stations[2].step5TrainArrive
        );

        // Chờ tàu dừng hẳn (950ms) rồi mở Bước 6
        setTimeout(() => {
          if (this.state.currentStep === 5) {
            this._enterStep6BoardTrain();
          }
        }, 1000);
      },

      /**
       * Bước 6: Đưa từng con vật từ thảm lên các ghế trống trên tàu (mỗi con lên 1 lần)
       */
      _enterStep6BoardTrain() {
        this._updateStepPills(6);
        this._renderMatAnimals();

        GameEngine.setInstruction(
          `Bước 6: Bé hãy đưa từng bạn thú từ thảm tập kết xuống ngồi vào ${this.state.targetCount} ghế trống trên tàu nhé!`,
          AUDIO_FILES.stations[2].step6BoardTrain
        );
        this._setHintTargets(['#st2-mat-grid .st2-mat-item', '#st2-train-dropzone']);
      },

      _handleAnimalBoardTrain(uid) {
        const animal = this.state.animals.find((a) => a.uid === uid);
        if (!animal || animal.location !== 'mat') return false;

        // Tìm ghế trống đầu tiên trên tàu
        const boardedCount = this.state.animals.filter((a) => a.location === 'train').length;
        const seatEl = document.getElementById(`st2-seat-${boardedCount}`);
        if (!seatEl) return false;

        animal.location = 'train';
        AudioSystem.playTap();

        seatEl.classList.add('occupied');
        seatEl.innerHTML = `
          <div style="width:92%;height:92%;">${this.getAnimalSVG(animal.species)}</div>
        `;

        this._renderMatAnimals();

        const newBoardedCount = boardedCount + 1;
        // Đọc số thứ tự hành khách lên tàu
        AudioSystem.enqueueCountNumber(newBoardedCount, false);

        if (newBoardedCount === this.state.targetCount) {
          setTimeout(() => this._enterStep7ReadyToDepart(), 500);
        }
        return true;
      },

      /**
       * Bước 7: Đủ N con trên tàu -> Hiện nút Khởi hành -> Tàu chạy ngắn, vẫy chào & hoàn thành vòng
       */
      _enterStep7ReadyToDepart() {
        this._updateStepPills(7);
        const departBtn = document.getElementById('st2-btn-depart');
        if (departBtn) departBtn.classList.add('visible');

        GameEngine.setInstruction(
          `Bước 7: Đã đủ ${this.state.targetCount} hành khách trên tàu! Bé hãy bấm nút Khởi hành để đoàn tàu lăn bánh nhé!`,
          AUDIO_FILES.stations[2].step7Depart
        );
        this._setHintTargets(['#st2-btn-depart']);
      },

      _handleTrainDepart() {
        const departBtn = document.getElementById('st2-btn-depart');
        if (departBtn) departBtn.disabled = true;

        AudioSystem.playTrainHorn();
        const trainWrapper = document.getElementById('st2-train-wrapper');
        if (trainWrapper) {
          trainWrapper.classList.add('departing');
        }

        const N = this.state.targetCount;
        const spName = this.ANIMAL_SPECIES[this.state.targetSpecies].name;

        GameEngine.triggerCorrectFeedback(
          `Tạm biệt ${N} ${spName}! Chúc chuyến đi vui vẻ!`,
          AUDIO_FILES.summary[N] || AUDIO_FILES.feedback.correct
        );

        setTimeout(() => {
          GameEngine.completeCurrentRound(
            `Bé đã phân loại, đếm đúng ${N} ${spName}, chọn đúng số ${N} và đưa các bạn lên tàu khởi hành!`
          );
        }, 1250);
      }
    };

    /* ==========================================================================
       BƯỚC 3.4: TRẠM 3 — PHIÊN CHỢ NÔNG TRẠI (ĐẦY ĐỦ 3 VÒNG & 10 BƯỚC TUẦN TỰ)
       - Trên quầy luôn có đủ 9 món thuộc sản phẩm mục tiêu + 2 món loại khác.
       - Giỏ chứa tối đa 9 món (cho phép bỏ nhiều hơn N để trẻ nhận biết thừa).
       - Đúng N món -> Khách đưa N đồng xu đồ chơi -> Trẻ chạm từng xu vào heo đất.
       ========================================================================== */
    const Station3Market = {
      PRODUCE_CATALOG: {
        apple: {
          id: 'apple',
          name: 'Quả Táo Đỏ'
        },
        corn: {
          id: 'corn',
          name: 'Bắp Ngô Vàng'
        },
        carrot: {
          id: 'carrot',
          name: 'Củ Cà Rốt'
        },
        pumpkin: {
          id: 'pumpkin',
          name: 'Quả Bí Ngô'
        }
      },

      // 3 vòng chơi: khác sản phẩm và khác số lượng N (1..9).
      // Lưu ý sư phạm: Khách hàng mua nông sản cho bữa tiệc chung của Ngày Hội Xanh,
      // không mô tả món hàng như bằng chứng chế độ ăn sinh học ngoài đời của loài vật.
      ROUNDS_CONFIG: [
        {
          roundIndex: 0,
          customerRole: 'bear',
          customerName: 'Bạn Gấu Nhỏ',
          targetProduce: 'apple',
          targetCount: 4, // Vòng 1: 4 Quả Táo Đỏ (trên quầy có 9 táo + 1 ngô + 1 cà rốt)
          distractors: ['corn', 'carrot']
        },
        {
          roundIndex: 1,
          customerRole: 'fox',
          customerName: 'Bạn Cáo Nhỏ',
          targetProduce: 'corn',
          targetCount: 6, // Vòng 2: 6 Bắp Ngô Vàng (trên quầy có 9 ngô + 1 táo + 1 bí ngô)
          distractors: ['apple', 'pumpkin']
        },
        {
          roundIndex: 2,
          customerRole: 'monkey',
          customerName: 'Bạn Khỉ Nhỏ',
          targetProduce: 'carrot',
          targetCount: 9, // Vòng 3: 9 Củ Cà Rốt (trên quầy có 9 cà rốt + 1 táo + 1 bí ngô)
          distractors: ['apple', 'pumpkin']
        }
      ],

      currentController: null,
      state: null,

      /* --- THƯ VIỆN SVG NÔNG SẢN, HEO ĐẤT & ĐỒNG XU ĐỒ CHƠI --- */
      getProduceSVG(produceId) {
        if (produceId === 'apple') {
          return `
            <svg viewBox="0 0 80 80" width="100%" height="100%">
              <ellipse cx="40" cy="72" rx="22" ry="5" fill="rgba(0,0,0,0.14)"/>
              <path d="M40,22 Q42,10 48,10" fill="none" stroke="#5d4037" stroke-width="4" stroke-linecap="round"/>
              <path d="M42,16 Q56,10 54,22 Q46,24 42,16 Z" fill="#43a047" stroke="#1b5e20" stroke-width="2"/>
              <path d="M40,22 C20,18 14,42 22,58 C28,68 36,68 40,64 C44,68 52,68 58,58 C66,42 60,18 40,22 Z"
                    fill="#e53935" stroke="#b71c1c" stroke-width="3"/>
              <ellipse cx="28" cy="36" rx="4" ry="8" transform="rotate(-15 28 36)" fill="#ffcdd2" opacity="0.7"/>
              <circle cx="34" cy="44" r="2.5" fill="#263238"/>
              <circle cx="46" cy="44" r="2.5" fill="#263238"/>
              <path d="M36,50 Q40,54 44,50" fill="none" stroke="#263238" stroke-width="2" stroke-linecap="round"/>
            </svg>
          `;
        }
        if (produceId === 'corn') {
          return `
            <svg viewBox="0 0 80 80" width="100%" height="100%">
              <ellipse cx="40" cy="72" rx="20" ry="5" fill="rgba(0,0,0,0.14)"/>
              <ellipse cx="40" cy="38" rx="15" ry="26" fill="#fdd835" stroke="#f57f17" stroke-width="3"/>
              <path d="M30,30 L50,30 M28,40 L52,40 M30,50 L50,50" stroke="#f9a825" stroke-width="2"/>
              <path d="M26,64 C16,50 20,34 32,48 Z" fill="#43a047" stroke="#1b5e20" stroke-width="2.5"/>
              <path d="M54,64 C64,50 60,34 48,48 Z" fill="#66bb6a" stroke="#1b5e20" stroke-width="2.5"/>
              <circle cx="35" cy="34" r="2.3" fill="#263238"/>
              <circle cx="45" cy="34" r="2.3" fill="#263238"/>
              <path d="M37,39 Q40,42 43,39" fill="none" stroke="#263238" stroke-width="2" stroke-linecap="round"/>
            </svg>
          `;
        }
        if (produceId === 'carrot') {
          return `
            <svg viewBox="0 0 80 80" width="100%" height="100%">
              <ellipse cx="40" cy="72" rx="18" ry="5" fill="rgba(0,0,0,0.14)"/>
              <path d="M40,22 C30,10 24,16 34,24 M40,22 C40,8 46,8 42,22 M40,22 C50,10 56,16 46,24"
                    fill="none" stroke="#2e7d32" stroke-width="4" stroke-linecap="round"/>
              <path d="M26,24 Q40,20 54,24 L43,66 Q40,72 37,66 Z"
                    fill="#fb8c00" stroke="#e65100" stroke-width="3" stroke-linejoin="round"/>
              <circle cx="35" cy="36" r="2.3" fill="#263238"/>
              <circle cx="45" cy="36" r="2.3" fill="#263238"/>
              <path d="M37,42 Q40,45 43,42" fill="none" stroke="#263238" stroke-width="2" stroke-linecap="round"/>
            </svg>
          `;
        }
        // Quả Bí Ngô ('pumpkin')
        return `
          <svg viewBox="0 0 80 80" width="100%" height="100%">
            <ellipse cx="40" cy="72" rx="24" ry="5" fill="rgba(0,0,0,0.14)"/>
            <path d="M38,22 Q40,12 46,14" fill="none" stroke="#2e7d32" stroke-width="4.5" stroke-linecap="round"/>
            <ellipse cx="26" cy="46" rx="14" ry="20" fill="#ff9800" stroke="#e65100" stroke-width="2.5"/>
            <ellipse cx="54" cy="46" rx="14" ry="20" fill="#ff9800" stroke="#e65100" stroke-width="2.5"/>
            <ellipse cx="40" cy="46" rx="16" ry="22" fill="#ffa726" stroke="#e65100" stroke-width="2.5"/>
            <circle cx="34" cy="43" r="2.5" fill="#263238"/>
            <circle cx="46" cy="43" r="2.5" fill="#263238"/>
            <path d="M36,50 Q40,54 44,50" fill="none" stroke="#263238" stroke-width="2" stroke-linecap="round"/>
          </svg>
        `;
      },

      getPiggyBankSVG() {
        return `
          <svg viewBox="0 0 120 90" width="104" height="78">
            <ellipse cx="60" cy="82" rx="38" ry="6" fill="rgba(0,0,0,0.15)"/>
            <rect x="38" y="64" width="10" height="16" rx="4" fill="#f06292" stroke="#ad1457" stroke-width="2.5"/>
            <rect x="72" y="64" width="10" height="16" rx="4" fill="#f06292" stroke="#ad1457" stroke-width="2.5"/>
            <ellipse cx="60" cy="48" rx="36" ry="26" fill="#f48fb1" stroke="#ad1457" stroke-width="3"/>
            <!-- Khe bỏ xu trên lưng heo đất -->
            <rect x="48" y="24" width="24" height="5" rx="2.5" fill="#880e4f"/>
            <!-- Tai & Mũi heo -->
            <polygon points="38,28 30,14 46,22" fill="#f06292" stroke="#ad1457" stroke-width="2.5"/>
            <ellipse cx="24" cy="48" rx="8" ry="11" fill="#f06292" stroke="#ad1457" stroke-width="2.5"/>
            <circle cx="22" cy="45" r="2" fill="#880e4f"/>
            <circle cx="22" cy="51" r="2" fill="#880e4f"/>
            <circle cx="38" cy="40" r="3.2" fill="#263238"/>
            <path d="M36,54 Q42,58 48,54" fill="none" stroke="#880e4f" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
        `;
      },

      getToyCoinSVG(numLabel = '') {
        return `
          <svg viewBox="0 0 56 56" width="100%" height="100%">
            <circle cx="28" cy="28" r="24" fill="#ffd54f" stroke="#f57f17" stroke-width="3.5"/>
            <circle cx="28" cy="28" r="18" fill="#fff59d" stroke="#fbc02d" stroke-width="2" stroke-dasharray="4 3"/>
            ${numLabel
              ? `<text x="28" y="35" text-anchor="middle" font-size="20" font-weight="900" fill="#bf360c">${numLabel}</text>`
              : `<polygon points="28,14 32,23 42,24 34,31 36,40 28,35 20,40 22,31 14,24 24,23" fill="#ff8f00"/>`
            }
          </svg>
        `;
      },

      render(stageEl, roundIndex = 0) {
        if (this.currentController) {
          this.currentController.destroy();
          this.currentController = null;
        }
        HandTutorial.stop();

        const cfg = this.ROUNDS_CONFIG[roundIndex] || this.ROUNDS_CONFIG[0];
        const prodInfo = this.PRODUCE_CATALOG[cfg.targetProduce];

        // Tạo 11 món trên quầy: Luôn có đúng 9 món thuộc sản phẩm mục tiêu + 2 món loại khác
        const stallItems = [];
        for (let i = 0; i < 9; i++) {
          stallItems.push({
            uid: `prod-target-${i}`,
            produceId: cfg.targetProduce,
            isTarget: true,
            inBasket: false
          });
        }
        cfg.distractors.forEach((dId, idx) => {
          stallItems.push({
            uid: `prod-dist-${idx}`,
            produceId: dId,
            isTarget: false,
            inBasket: false
          });
        });

        this.state = {
          roundIndex,
          customerRole: cfg.customerRole,
          customerName: cfg.customerName,
          targetProduce: cfg.targetProduce,
          targetCount: cfg.targetCount,
          currentStep: 1, // 1..10
          stallItems,
          coinsCollected: 0,
          coinsState: Array.from({ length: cfg.targetCount }, (_, idx) => ({
            index: idx,
            collected: false,
            assignedNumber: null
          }))
        };

        stageEl.innerHTML = `
          <div class="st3-root" id="st3-root">
            <!-- Thanh hiển thị tiến trình 10 bước -->
            <div class="st3-steps-bar">
              <div class="st1-steps-list" id="st3-steps-list">
                <span class="st1-step-pill active" data-step-pill="1">1. 📋 Xem đơn</span>
                <span class="st1-step-pill" data-step-pill="2">2. 🧺 Nhặt hàng</span>
                <span class="st1-step-pill" data-step-pill="6">3. 🤝 Giao giỏ</span>
                <span class="st1-step-pill" data-step-pill="8">4. 🪙 Nhận xu</span>
                <span class="st1-step-pill" data-step-pill="9">5. 🐷 Bỏ heo đất</span>
                <span class="st1-step-pill" data-step-pill="10">6. 💛 Cảm ơn</span>
              </div>
              <button type="button" class="st1-demo-btn" id="st3-btn-watch-demo">
                👋 Xem mẫu
              </button>
            </div>

            <!-- Sân chơi 3 cột -->
            <div class="st3-playfield">
              <!-- Cột trái: Quầy nông sản (9 món mục tiêu + 2 món khác) -->
              <div class="st3-stall-panel" id="st3-stall-panel" aria-label="Quầy nông sản">
                <div class="st3-awning"></div>
                <div style="text-align:center;font-weight:900;color:#4e342e;font-size:1rem;">
                  🥕 Quầy Nông Sản Ngày Hội Xanh (Có sẵn 9 ${prodInfo.name})
                </div>
                <div class="st3-shelf-grid" id="st3-shelf-grid">
                  ${this.state.stallItems.map((item) => `
                    <div class="st3-shelf-slot" id="st3-slot-${item.uid}">
                      <div class="st3-produce-item learning-item"
                           id="st3-prod-${item.uid}"
                           data-uid="${item.uid}"
                           aria-label="${this.PRODUCE_CATALOG[item.produceId].name}">
                        ${this.getProduceSVG(item.produceId)}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Cột giữa: Giỏ hàng (chứa tối đa 9 món) & Nút giao giỏ -->
              <div class="st3-basket-panel">
                <div style="font-weight:900;color:#e65100;font-size:1.05rem;" id="st3-basket-counter">
                  🧺 Giỏ Hàng Của Bé: 0 món (Tối đa 9)
                </div>

                <div class="st3-basket-dropzone" id="st3-basket-dropzone" aria-label="Giỏ hàng">
                  <div id="st3-basket-hint" style="font-size:0.9rem;font-weight:800;color:#bf360c;text-align:center;">
                    Đặt đúng ${cfg.targetCount} ${prodInfo.name} vào giỏ (Chạm vào món trong giỏ nếu muốn lấy bớt ra)
                  </div>
                  <div class="st3-basket-items-grid" id="st3-basket-items-grid"></div>
                </div>

                <button type="button" class="st3-deliver-btn" id="st3-btn-deliver">
                  🤝 Giao giỏ cho khách
                </button>
              </div>

              <!-- Cột phải: Khách hàng, Đơn hàng & Heo đất -->
              <div class="st3-customer-panel">
                <div class="st3-customer-top">
                  <div class="st3-customer-avatar" id="st3-customer-avatar">
                    ${SVG_LIB.getFriendCharacterSVG(cfg.customerRole, 'idle')}
                  </div>
                  <div class="st3-order-bubble" id="st3-order-bubble">
                    <div style="font-size:0.84rem;font-weight:800;color:#1b5e20;">
                      ${cfg.customerName} mua cho lễ hội:
                    </div>
                    <div class="st3-order-row">
                      <div style="width:50px;height:50px;">${this.getProduceSVG(cfg.targetProduce)}</div>
                      <span class="st3-order-qty">${cfg.targetCount}</span>
                    </div>
                    <div style="font-size:0.92rem;font-weight:900;color:#2e7d32;">${prodInfo.name}</div>
                  </div>
                </div>

                <!-- Khu vực Heo đất & Đồng xu đồ chơi (Mở ở Bước 8 - 10) -->
                <div class="st3-piggy-zone" id="st3-piggy-zone">
                  <div style="font-size:0.9rem;font-weight:900;color:#ad1457;" id="st3-piggy-status">
                    🐷 Heo Đất Đếm Xu: Chờ giao đúng đơn hàng
                  </div>
                  <div class="st3-coins-tray" id="st3-coins-tray"></div>
                  <div id="st3-piggy-svg-holder">${this.getPiggyBankSVG()}</div>
                </div>
              </div>
            </div>
          </div>
        `;

        this.currentController = new InteractionController(stageEl);
        this._bindInteractions(stageEl);
        this._enterSteps1To5();
      },

      _updateStepPills(activePillCode) {
        document.querySelectorAll('#st3-steps-list [data-step-pill]').forEach((pill) => {
          const code = Number(pill.getAttribute('data-step-pill'));
          pill.classList.remove('active', 'done');
          if (code < activePillCode) pill.classList.add('done');
          else if (code === activePillCode) pill.classList.add('active');
        });
      },

      _setHintTargets(selectors = []) {
        document.querySelectorAll('#station-stage [data-hint-target]').forEach((el) => {
          el.removeAttribute('data-hint-target');
          el.classList.remove('idle-hint-glow');
        });
        selectors.forEach((sel) => {
          document.querySelectorAll(sel).forEach((el) => el.setAttribute('data-hint-target', 'true'));
        });
        IdleHintSystem.resetTimer();
      },

      _bindInteractions(stageEl) {
        const ctrl = this.currentController;
        const basketZone = document.getElementById('st3-basket-dropzone');
        const stallPanel = document.getElementById('st3-stall-panel');
        const deliverBtn = document.getElementById('st3-btn-deliver');
        const demoBtn = document.getElementById('st3-btn-watch-demo');

        // 1. Đăng ký kéo thả / chạm chọn cho tất cả nông sản trên quầy
        this.state.stallItems.forEach((item) => {
          const el = document.getElementById(`st3-prod-${item.uid}`);
          ctrl.registerDraggable(el, {
            id: item.uid,
            type: 'stall-produce',
            data: { uid: item.uid },
            canDrag: () => this.state.currentStep <= 7 && !item.inBasket
          });
        });

        // 2. Giỏ hàng nhận nông sản từ quầy (tối đa 9 món)
        ctrl.registerDropzone(basketZone, {
          acceptTypes: ['stall-produce'],
          hitboxPadding: 26,
          onDrop: (itemState) => {
            if (this.state.currentStep > 7) return false;
            return this._handleAddProduceToBasket(itemState.data.uid, itemState.el);
          }
        });

        // 3. Quầy hàng nhận lại nông sản khi trẻ kéo bớt từ giỏ ra
        ctrl.registerDropzone(stallPanel, {
          acceptTypes: ['basket-produce'],
          hitboxPadding: 24,
          onDrop: (itemState) => {
            if (this.state.currentStep > 7) return false;
            return this._handleRemoveProduceFromBasket(itemState.data.uid);
          }
        });

        // 4. Nút Giao giỏ cho khách (Bước 6 & Bước 7)
        deliverBtn.addEventListener('click', () => {
          if (this.state.currentStep > 7) return;
          this._handleDeliverBasket();
        });

        // 5. Nút Xem mẫu
        demoBtn.addEventListener('click', () => {
          AudioSystem.playTap();
          if (this.state.currentStep <= 7) {
            const avail = this.state.stallItems.find((i) => i.isTarget && !i.inBasket);
            if (avail) {
              HandTutorial.playDemo('drag_drop', {
                container: stageEl,
                fromEl: document.getElementById(`st3-prod-${avail.uid}`),
                toEl: basketZone,
                label: `Chọn đúng ${this.PRODUCE_CATALOG[this.state.targetProduce].name} bỏ vào giỏ nhé!`
              });
            }
          } else if (this.state.currentStep === 9) {
            const firstCoin = document.querySelector('#st3-coins-tray .st3-toy-coin:not(.collected)');
            if (firstCoin) {
              HandTutorial.playDemo('tap_count', {
                container: stageEl,
                fromEl: firstCoin,
                label: 'Chạm vào từng đồng xu đồ chơi để bỏ vào heo đất nhé!'
              });
            }
          }
        });
      },

      /**
       * Bước 1 -> Bước 5: Khách đến quầy hiện đơn hàng, trẻ nhặt sản phẩm vào giỏ
       */
      _enterSteps1To5() {
        this.state.currentStep = 2;
        this._updateStepPills(2);

        const prodName = this.PRODUCE_CATALOG[this.state.targetProduce].name;
        const N = this.state.targetCount;

        GameEngine.setInstruction(
          `${this.state.customerName} muốn mua ${N} ${prodName} cho lễ hội. Bé hãy cho đúng ${N} ${prodName} vào giỏ rồi bấm Giao giỏ nhé!`,
          AUDIO_FILES.stations[3].step2Pick || AUDIO_FILES.stations[3][`round${this.state.roundIndex + 1}`]
        );
        this._setHintTargets(['.st3-produce-item', '#st3-basket-dropzone', '#st3-btn-deliver']);
      },

      /**
       * Bước 2, 3, 4: Bỏ nông sản vào giỏ
       * - Sai loại (Bước 3): trả về quầy và báo "Chưa đúng loại".
       * - Đúng loại (Bước 4): cho phép bỏ tối đa 9 món (nhiều hơn N) để trẻ tự phát hiện khi thừa.
       */
      _handleAddProduceToBasket(uid, prodEl) {
        const item = this.state.stallItems.find((i) => i.uid === uid);
        if (!item || item.inBasket) return false;

        // Bước 3: Kiểm tra đúng loại nông sản
        if (!item.isTarget) {
          GameEngine.triggerEncourageFeedback('wrongType', prodEl);
          return false;
        }

        // Bước 4: Giỏ chứa tối đa 9 món
        const currentInBasket = this.state.stallItems.filter((i) => i.inBasket).length;
        if (currentInBasket >= 9) {
          return false;
        }

        item.inBasket = true;
        AudioSystem.playTap();
        this._syncStallAndBasketDOM();
        return true;
      },

      /**
       * Bước 5: Trẻ chạm (hoặc kéo) món hàng trong giỏ để lấy bớt ra quầy
       */
      _handleRemoveProduceFromBasket(uid) {
        const item = this.state.stallItems.find((i) => i.uid === uid);
        if (!item || !item.inBasket) return false;

        item.inBasket = false;
        AudioSystem.playTap();
        this._syncStallAndBasketDOM();
        return true;
      },

      _syncStallAndBasketDOM() {
        const inBasketItems = this.state.stallItems.filter((i) => i.inBasket);
        const count = inBasketItems.length;

        const counterEl = document.getElementById('st3-basket-counter');
        if (counterEl) {
          counterEl.textContent = `🧺 Giỏ Hàng Của Bé: ${count} món`;
        }

        // Cập nhật trạng thái trên kệ quầy hàng
        this.state.stallItems.forEach((item) => {
          const el = document.getElementById(`st3-prod-${item.uid}`);
          if (!el) return;
          if (item.inBasket) {
            el.style.opacity = '0.2';
            el.style.pointerEvents = 'none';
          } else {
            el.style.opacity = '1';
            el.style.pointerEvents = 'auto';
          }
        });

        // Vẽ các món trong giỏ hàng (Bước 5: chạm vào lấy bớt ra ngay)
        const grid = document.getElementById('st3-basket-items-grid');
        grid.innerHTML = '';

        inBasketItems.forEach((item, idx) => {
          const bItem = document.createElement('div');
          bItem.className = 'st3-basket-item learning-item';
          bItem.title = 'Chạm để lấy bớt ra quầy';
          bItem.innerHTML = `
            ${this.getProduceSVG(item.produceId)}
            <span class="st2-count-badge" style="width:24px;height:24px;font-size:0.8rem;">${idx + 1}</span>
          `;

          // Hỗ trợ kéo từ giỏ về quầy
          this.currentController.registerDraggable(bItem, {
            id: `basket-${item.uid}`,
            type: 'basket-produce',
            data: { uid: item.uid },
            canDrag: () => this.state.currentStep <= 7
          });

          // Hỗ trợ chạm trực tiếp vào món trong giỏ để lấy bớt ra quầy
          bItem.addEventListener('click', (e) => {
            if (bItem.dataset.justDragged === 'true') return;
            e.stopPropagation();
            if (this.state.currentStep <= 7) {
              this._handleRemoveProduceFromBasket(item.uid);
            }
          });

          grid.appendChild(bItem);
        });
      },

      /**
       * Bước 6 & Bước 7: Bấm nút giao giỏ cho khách để kiểm tra
       * - Nếu thiếu (< N): Giữ nguyên các món trong giỏ, báo "Chưa đủ".
       * - Nếu thừa (> N): Giữ nguyên các món trong giỏ, báo "Nhiều hơn rồi".
       * - Nếu đúng (=== N): Chuyển sang Bước 8 (Khách nhận hàng & đưa N đồng xu đồ chơi).
       */
      _handleDeliverBasket() {
        this.state.currentStep = 6;
        this._updateStepPills(6);

        const count = this.state.stallItems.filter((i) => i.inBasket).length;
        const target = this.state.targetCount;
        const basketZone = document.getElementById('st3-basket-dropzone');

        if (count < target) {
          this.state.currentStep = 7;
          GameEngine.triggerEncourageFeedback('notEnough', basketZone);
          return;
        }

        if (count > target) {
          this.state.currentStep = 7;
          GameEngine.triggerEncourageFeedback('tooMany', basketZone);
          return;
        }

        // Đúng bằng N -> Sang Bước 8 & 9
        this._enterStep8And9Coins();
      },

      /**
       * Bước 8 & Bước 9: Khách vui vẻ nhận hàng, đưa ra đúng N đồng xu đồ chơi (1 món - 1 xu).
       * Trẻ chạm từng đồng xu để đưa vào heo đất kèm tiếng xu leng keng và giọng đếm 1..N.
       */
      _enterStep8And9Coins() {
        this.state.currentStep = 9;
        this._updateStepPills(9);

        const deliverBtn = document.getElementById('st3-btn-deliver');
        if (deliverBtn) deliverBtn.disabled = true;

        const custAvatar = document.getElementById('st3-customer-avatar');
        if (custAvatar) {
          custAvatar.innerHTML = SVG_LIB.getFriendCharacterSVG(this.state.customerRole, 'happy');
        }

        const N = this.state.targetCount;
        const statusEl = document.getElementById('st3-piggy-status');
        if (statusEl) {
          statusEl.textContent = `🪙 Bỏ xu vào Heo Đất: 0 / ${N} xu`;
        }

        this._renderCoinsTray();
        AudioSystem.playCorrect();

        GameEngine.setInstruction(
          `Bước 8 & 9: ${this.state.customerName} gửi tặng ${N} đồng xu ngôi sao! Bé hãy chạm từng đồng xu để bỏ vào heo đất và đếm từ 1 đến ${N} nhé!`,
          AUDIO_FILES.stations[3].step9CountCoins || AUDIO_FILES.stations[3].step8Coins
        );
        this._setHintTargets(['#st3-coins-tray .st3-toy-coin']);
      },

      _renderCoinsTray() {
        const tray = document.getElementById('st3-coins-tray');
        tray.innerHTML = '';

        this.state.coinsState.forEach((cObj) => {
          const coinEl = document.createElement('div');
          coinEl.className = `st3-toy-coin learning-item ${cObj.collected ? 'collected' : ''}`;
          coinEl.setAttribute('role', 'button');
          coinEl.setAttribute('tabindex', '0');
          coinEl.setAttribute('aria-label', `Đồng xu đồ chơi ${cObj.index + 1}`);
          coinEl.innerHTML = this.getToyCoinSVG(cObj.assignedNumber || '');

          const onTapCoin = () => {
            if (this.state.currentStep !== 9) return;
            this._handleTapCoin(cObj, coinEl);
          };

          coinEl.addEventListener('click', onTapCoin);
          coinEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onTapCoin();
            }
          });

          tray.appendChild(coinEl);
        });
      },

      _handleTapCoin(coinObj, coinEl) {
        HandTutorial.stop();
        if (coinObj.collected) return;

        this.state.coinsCollected += 1;
        const num = this.state.coinsCollected;
        coinObj.collected = true;
        coinObj.assignedNumber = num;

        // Tiếng xu leng keng + Hiệu ứng heo đất nhún vui
        AudioSystem.playCoin();
        const piggyHolder = document.getElementById('st3-piggy-svg-holder');
        if (piggyHolder) {
          piggyHolder.classList.remove('item-active');
          void piggyHolder.offsetWidth;
          piggyHolder.classList.add('item-active');
          setTimeout(() => piggyHolder.classList.remove('item-active'), 260);
        }

        const N = this.state.targetCount;
        const statusEl = document.getElementById('st3-piggy-status');
        if (statusEl) {
          statusEl.textContent = `🪙 Bỏ xu vào Heo Đất: ${num} / ${N} xu`;
        }

        this._renderCoinsTray();

        const isFinal = (num === N);
        const speechText = document.getElementById('station-speech-text');
        if (speechText) {
          speechText.textContent = isFinal
            ? `🪙 ${num} đồng xu! Bé đã thu đủ ${N} đồng xu vào heo đất rồi!`
            : `🪙 ${num} đồng xu! Bé chạm tiếp đồng xu còn lại nhé!`;
        }

        AudioSystem.enqueueCountNumber(num, isFinal, () => {
          if (isFinal && this.state.currentStep === 9) {
            this._enterStep10CustomerThanks();
          }
        });
      },

      /**
       * Bước 10: Thu đủ N xu -> Khách lịch sự cảm ơn và hoàn thành vòng chơi
       */
      _enterStep10CustomerThanks() {
        this.state.currentStep = 10;
        this._updateStepPills(10);

        const N = this.state.targetCount;
        const prodName = this.PRODUCE_CATALOG[this.state.targetProduce].name;

        GameEngine.triggerCorrectFeedback(
          `${this.state.customerName} nói: "Cảm ơn bé nhiều nhé! Bé bán hàng giỏi và lịch sự quá!"`,
          AUDIO_FILES.stations[3].step10Thanks || AUDIO_FILES.feedback.correct
        );

        setTimeout(() => {
          GameEngine.completeCurrentRound(
            `Bé đã giao đúng ${N} ${prodName} cho ${this.state.customerName} và đếm đủ ${N} đồng xu vào heo đất!`
          );
        }, 1250);
      }
    };

    // Đăng ký Trạm 2 và Trạm 3 vào GameEngine
    GameEngine.registerStation(2, Station2Forest);
    GameEngine.registerStation(3, Station3Market);
/* ==========================================================================
       BƯỚC 4.1: NÂNG CẤP NHẸ BỘ TƯƠNG TÁC CHO VÙNG CUỘN NGANG (TRẠM 4)
       - Khi trẻ đã chạm chọn 1 giỏ ở sân ga rồi chạm/vuốt trên vùng tàu để cuộn,
         chỉ kích hoạt thả (drop-by-tap) ở sự kiện pointerup nếu ngón tay không
         di chuyển quá 12px (tránh việc chạm để vuộn tàu bị tính nhầm là thả giỏ).
       ========================================================================== */
    (function upgradeDropzoneTapForScroll() {
      if (!window.InteractionController) return;
      InteractionController.prototype.registerDropzone = function(zoneEl, cfg = {}) {
        if (!zoneEl) return;
        zoneEl.classList.add('ix-dropzone');
        if (!zoneEl.hasAttribute('tabindex')) zoneEl.setAttribute('tabindex', '0');

        const zoneState = {
          el: zoneEl,
          acceptTypes: cfg.acceptTypes || null,
          hitboxPadding: typeof cfg.hitboxPadding === 'number' ? cfg.hitboxPadding : this.hitboxPadding,
          onDrop: cfg.onDrop || (() => false)
        };
        this.dropzones.set(zoneEl, zoneState);

        let tapStartX = 0;
        let tapStartY = 0;
        let tapCandidate = false;

        zoneEl.addEventListener('pointerdown', (e) => {
          if (this.activeDrag || !this.selectedElement) {
            tapCandidate = false;
            return;
          }
          const selectedState = this.draggables.get(this.selectedElement);
          if (!selectedState || selectedState.isAnimating) {
            tapCandidate = false;
            return;
          }
          if (e.target === this.selectedElement || this.selectedElement.contains(e.target)) {
            tapCandidate = false;
            return;
          }
          tapStartX = e.clientX;
          tapStartY = e.clientY;
          tapCandidate = true;
        });

        zoneEl.addEventListener('pointerup', (e) => {
          if (!tapCandidate) return;
          tapCandidate = false;
          if (this.activeDrag || !this.selectedElement) return;
          const dist = Math.hypot(e.clientX - tapStartX, e.clientY - tapStartY);
          if (dist > 12) return; // Người dùng đang vuốt cuộn ngang đoàn tàu

          const selectedState = this.draggables.get(this.selectedElement);
          if (!selectedState || selectedState.isAnimating) return;
          e.stopPropagation();
          this._attemptDropByTap(selectedState, zoneState);
        });

        zoneEl.addEventListener('pointercancel', () => {
          tapCandidate = false;
        });

        zoneEl.addEventListener('keydown', (e) => {
          if ((e.key === 'Enter' || e.key === ' ') && this.selectedElement) {
            e.preventDefault();
            const selectedState = this.draggables.get(this.selectedElement);
            if (selectedState && !selectedState.isAnimating) {
              this._attemptDropByTap(selectedState, zoneState);
            }
          }
        });
      };
    })();

    /* ==========================================================================
       BƯỚC 4.2: CSS CHO TRẠM 4 (CHUYẾN TÀU) & TRẠM 5 (THỊ TRẤN NGHỀ NGHIỆP)
       ========================================================================== */
    (function injectStep4Styles() {
      const style = document.createElement('style');
      style.id = 'step4-styles';
      style.textContent = `
        /* ======================================================================
           GIAO DIỆN TRẠM 4 — CHUYẾN TÀU NGÀY HỘI XANH
           ====================================================================== */
        .st4-root {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          background: linear-gradient(180deg, #b3e5fc 0%, #e1f5fe 38%, #d7ccc8 39%, #bcaaa4 100%);
        }

        .st4-steps-bar {
          position: relative;
          z-index: 15;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          padding: 7px 14px;
          background: rgba(255, 255, 255, 0.92);
          border-bottom: 3px solid #0288d1;
          flex-wrap: wrap;
        }

        .st4-playfield {
          position: relative;
          flex: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 8px;
          padding: 8px 12px 112px;
          z-index: 5;
          overflow: hidden;
        }

        /* Thanh điều khiển cuộn ngang đoàn tàu & gợi ý vuốt */
        .st4-train-controls-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 0 4px;
        }

        .st4-scroll-btn {
          min-width: 64px;
          min-height: 60px;
          padding: 6px 14px;
          border-radius: 18px;
          background: #ffffff;
          border: 3px solid #0288d1;
          box-shadow: 0 5px 0 rgba(2, 136, 209, 0.28);
          font-size: 1.05rem;
          font-weight: 900;
          color: #01579b;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        .st4-scroll-btn:active {
          transform: translateY(3px);
        }

        .st4-swipe-hint-pill {
          background: rgba(255, 255, 255, 0.92);
          border: 2px dashed #0288d1;
          border-radius: 999px;
          padding: 6px 16px;
          font-size: 0.95rem;
          font-weight: 800;
          color: #01579b;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-align: center;
        }

        /* Khung cuộn ngang chứa Đầu tàu + 9 Toa (1..9) */
        .st4-train-viewport {
          position: relative;
          width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          background: linear-gradient(180deg, #e1f5fe 0%, #c8e6c9 68%, #78909c 69%, #546e7a 100%);
          border: 4px solid #37474f;
          border-radius: 24px;
          padding: 12px 16px 22px;
          box-shadow: inset 0 4px 12px rgba(0,0,0,0.12), 0 6px 14px rgba(0,0,0,0.15);
          scroll-behavior: auto;
          -webkit-overflow-scrolling: touch;
        }

        /* Đường ray dưới đáy đoàn tàu */
        .st4-train-track-strip {
          display: inline-flex;
          align-items: flex-end;
          gap: 10px;
          min-width: max-content;
          padding-bottom: 8px;
          border-bottom: 6px dashed #cfd8dc;
          transform: translateX(110%);
          transition: transform 1.05s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .st4-train-track-strip.arrived {
          transform: translateX(0%);
        }
        .st4-train-track-strip.departing {
          transform: translateX(-125%);
          transition: transform 1.35s ease-in;
        }

        /* Đầu tàu (Locomotive) */
        .st4-locomotive-box {
          position: relative;
          width: 156px;
          height: 152px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          border-radius: 22px;
          padding: 4px;
          transition: transform 0.2s ease, filter 0.2s ease;
        }
        .st4-locomotive-box.ready-depart {
          cursor: pointer;
          background: rgba(255, 249, 196, 0.65);
          border: 4px solid #ff9800;
          animation: bunnyHappyBounce 1.1s infinite;
          filter: drop-shadow(0 0 16px rgba(255, 193, 7, 0.95));
        }
        .st4-loco-depart-tag {
          display: none;
          position: absolute;
          top: -6px;
          background: #ff6f00;
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 900;
          padding: 4px 10px;
          border-radius: 999px;
          border: 2px solid #ffffff;
          white-space: nowrap;
          box-shadow: 0 3px 8px rgba(0,0,0,0.25);
        }
        .st4-locomotive-box.ready-depart .st4-loco-depart-tag {
          display: inline-block;
        }

        /* Từng toa tàu đánh số 1 đến 9 */
        .st4-carriage-card {
          position: relative;
          width: clamp(118px, 11vw, 138px);
          height: 148px;
          flex-shrink: 0;
          background: linear-gradient(180deg, #ffffff 0%, #fffde7 100%);
          border: 4px solid #0277bd;
          border-radius: 20px;
          padding: 6px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 6px 0 #01579b;
        }
        .st4-carriage-card::after {
          content: "";
          position: absolute;
          bottom: -14px;
          left: 16px;
          right: 16px;
          height: 12px;
          background: radial-gradient(circle at 20% 50%, #263238 7px, transparent 8px),
                      radial-gradient(circle at 80% 50%, #263238 7px, transparent 8px);
        }
        .st4-carriage-card.loaded {
          border-color: #2e7d32;
          background: linear-gradient(180deg, #e8f5e9 0%, #c8e6c9 100%);
          box-shadow: 0 6px 0 #1b5e20;
        }

        .st4-carriage-num-header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4px;
        }
        .st4-carriage-num-badge {
          min-width: 40px;
          height: 40px;
          border-radius: 12px;
          background: #ff9800;
          border: 2.5px solid #e65100;
          color: #ffffff;
          font-size: 1.45rem;
          font-weight: 900;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .st4-carriage-card.loaded .st4-carriage-num-badge {
          background: #2e7d32;
          border-color: #1b5e20;
        }

        .st4-carriage-cargo-slot {
          width: 100%;
          flex: 1;
          margin-top: 4px;
          border: 2.5px dashed #90a4ae;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .st4-carriage-card.loaded .st4-carriage-cargo-slot {
          border-style: solid;
          border-color: #43a047;
          background: #ffffff;
        }

        /* Sân ga chứa 3 giỏ nông sản */
        .st4-platform-zone {
          background: rgba(255, 255, 255, 0.94);
          border: 4px solid #8d6e63;
          border-radius: 24px;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 14px;
          flex-wrap: wrap;
          box-shadow: 0 8px 18px rgba(0,0,0,0.15);
        }

        .st4-basket-card {
          width: clamp(165px, 24vw, 225px);
          min-height: 138px;
          background: linear-gradient(180deg, #fff8e1 0%, #ffe082 100%);
          border: 4px solid #f57c00;
          border-radius: 22px;
          padding: 8px 10px;
          box-shadow: 0 6px 0 #e65100;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 4px;
        }
        .st4-basket-card.placed-on-train {
          opacity: 0.22;
          pointer-events: none;
          filter: grayscale(0.5);
        }

        /* Lưới 3x3 xếp quả rõ ràng, không chồng lấp để trẻ dễ đếm */
        .st4-basket-fruits-grid {
          width: 100%;
          min-height: 92px;
          background: rgba(255, 255, 255, 0.88);
          border: 2.5px solid #ffb74d;
          border-radius: 16px;
          padding: 5px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 4px;
          place-items: center;
        }

        .st4-fruit-cell {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .st4-basket-label {
          font-size: 0.92rem;
          font-weight: 900;
          color: #bf360c;
        }

        /* ======================================================================
           GIAO DIỆN TRẠM 5 — THỊ TRẤN NGHỀ NGHIỆP (3 GIAI ĐOẠN RÕ RÀNG)
           ====================================================================== */
        .st5-root {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          background: linear-gradient(180deg, #e1f5fe 0%, #fff9c4 38%, #c8e6c9 39%, #81c784 100%);
        }

        .st5-steps-bar {
          position: relative;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          padding: 7px 14px;
          background: rgba(255, 255, 255, 0.94);
          border-bottom: 3px solid #2e7d32;
          flex-wrap: wrap;
        }

        .st5-stage-body {
          position: relative;
          flex: 1;
          width: 100%;
          padding: 10px 16px 115px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 5;
          overflow: hidden;
        }

        /* --- GIAI ĐOẠN A: ĐÓNG GÓI TỪNG GIỎ (BƯỚC 1 - 3) --- */
        .st5-phaseA-layout {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 14px;
          align-items: stretch;
        }

        .st5-supply-table {
          background: rgba(255, 248, 225, 0.95);
          border: 4px solid #8d6e63;
          border-radius: 26px;
          padding: 12px;
          box-shadow: 0 8px 18px rgba(0,0,0,0.14);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 8px;
        }

        .st5-supply-grid {
          flex: 1;
          background: #ffffff;
          border: 3px solid #d7ccc8;
          border-radius: 20px;
          padding: 10px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 8px;
          place-items: center;
        }

        .st5-supply-slot {
          width: clamp(58px, 6.8vw, 80px);
          height: clamp(58px, 6.8vw, 80px);
          background: #f5f5f5;
          border: 2px dashed #b0bec5;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .st5-pack-panel {
          background: rgba(255, 255, 255, 0.95);
          border: 4px solid #2e7d32;
          border-radius: 26px;
          padding: 12px;
          box-shadow: 0 8px 18px rgba(0,0,0,0.14);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 8px;
        }

        .st5-basket-tabs {
          display: flex;
          gap: 8px;
          justify-content: center;
        }
        .st5-basket-tab-pill {
          padding: 5px 14px;
          border-radius: 999px;
          font-weight: 900;
          font-size: 0.92rem;
          background: #eceff1;
          color: #607d8b;
          border: 2px solid #cfd8dc;
        }
        .st5-basket-tab-pill.active {
          background: #fff8e1;
          color: #e65100;
          border-color: #ff9800;
        }
        .st5-basket-tab-pill.done {
          background: #e8f5e9;
          color: #1b5e20;
          border-color: #43a047;
        }

        .st5-pack-order-header {
          background: #f1f8e9;
          border: 3px solid #66bb6a;
          border-radius: 18px;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .st5-pack-dropzone {
          flex: 1;
          min-height: 155px;
          background: linear-gradient(180deg, #fffde7 0%, #ffe082 100%);
          border: 4px dashed #f57c00;
          border-radius: 22px;
          padding: 8px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 6px;
          place-items: center;
        }

        /* --- GIAI ĐOẠN B: MÀN NỐI 2 BƯỚC TUẦN TỰ (BƯỚC 4 - 6) --- */
        .st5-phaseB-board {
          position: relative;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.92);
          border: 4px solid #0288d1;
          border-radius: 28px;
          padding: 14px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .st5-connect-col {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 100%;
          gap: 10px;
          z-index: 22;
        }

        .st5-connect-card {
          min-width: clamp(190px, 24vw, 260px);
          min-height: 92px;
          background: #ffffff;
          border: 4px solid #2e7d32;
          border-radius: 22px;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          box-shadow: 0 5px 0 rgba(46, 125, 50, 0.22);
        }

        .st5-anchor-dot {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #ff9800;
          border: 4px solid #ffffff;
          box-shadow: 0 0 0 3px #e65100;
          flex-shrink: 0;
        }

        /* --- GIAI ĐOẠN C: GIAO HÀNG & LÀM ĐẸP LÀNG (BƯỚC 7 - 12) --- */
        .st5-phaseC-town {
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.9);
          border: 4px solid #43a047;
          border-radius: 28px;
          padding: 12px 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          gap: 10px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .st5-delivery-lane {
          position: relative;
          width: 100%;
          min-height: 96px;
          background: #eceff1;
          border: 3px solid #90a4ae;
          border-radius: 22px;
          padding: 6px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
        }

        /* Mặt đường nhựa có vạch kẻ an toàn */
        .st5-road-line {
          position: absolute;
          left: 110px;
          right: 190px;
          top: 50%;
          height: 18px;
          transform: translateY(-50%);
          background: #607d8b;
          border-radius: 8px;
          z-index: 1;
        }
        .st5-road-line::after {
          content: "";
          position: absolute;
          left: 8px;
          right: 8px;
          top: 7px;
          height: 4px;
          background: repeating-linear-gradient(90deg, #ffd54f 0px, #ffd54f 18px, transparent 18px, transparent 34px);
        }

        .st5-courier-scooter {
          position: relative;
          z-index: 5;
          width: 120px;
          height: 84px;
          background: #fffde7;
          border: 3px solid #f57c00;
          border-radius: 18px;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 1.25s cubic-bezier(0.34, 1.15, 0.64, 1), background-color 0.3s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.18);
        }
        .st5-courier-scooter.delivered {
          border-color: #2e7d32;
          background: #e8f5e9;
          cursor: default;
        }

        .st5-destination-card {
          position: relative;
          z-index: 4;
          width: clamp(185px, 24vw, 250px);
          height: 86px;
          background: #ffffff;
          border: 3px solid #43a047;
          border-radius: 18px;
          padding: 6px 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .st5-destination-card.beautified {
          background: linear-gradient(135deg, #fff9c4 0%, #c8e6c9 100%);
          border-color: #ff8f00;
          box-shadow: 0 0 14px rgba(255, 193, 7, 0.7);
        }

        @media (max-width: 980px) {
          .st5-phaseA-layout {
            grid-template-columns: 1fr;
            overflow-y: auto;
          }
          .st5-connect-card {
            min-width: 145px;
            padding: 6px 8px;
          }
        }
      `;
      document.head.appendChild(style);
    })();

    /* ==========================================================================
       BƯỚC 4.3: CẬP NHẬT ĐƯỜNG DẪN ÂM THANH CHI TIẾT CHO TRẠM 4 & TRẠM 5
       ========================================================================== */
    if (AUDIO_FILES && AUDIO_FILES.stations) {
      if (AUDIO_FILES.stations[4]) {
        Object.assign(AUDIO_FILES.stations[4], {
          step1Arrive: './am-thanh/tram4-buoc1-tau-vao-san-ga.mp3',
          step2Load: './am-thanh/tram4-buoc-xep-toa-tau.mp3',
          step6ReadyDepart: './am-thanh/tram4-buoc6-cham-dau-tau.mp3',
          step7Depart: './am-thanh/tram4-buoc-tau-chay.mp3'
        });
      }
      if (AUDIO_FILES.stations[5]) {
        Object.assign(AUDIO_FILES.stations[5], {
          phaseAPack: './am-thanh/tram5-giaidoanA-dong-goi-gio.mp3',
          phaseBConnectNum: './am-thanh/tram5-giaidoanB-buoc1-noi-so.mp3',
          phaseBConnectJob: './am-thanh/tram5-giaidoanB-buoc2-noi-nghe.mp3',
          phaseCDeliver: './am-thanh/tram5-giaidoanC-cham-xe-giao-hang.mp3',
          phaseCComplete: './am-thanh/tram5-buoc-hoan-thanh.mp3'
        });
      }
    }

    /* ==========================================================================
       BƯỚC 4.4: TRẠM 4 — CHUYẾN TÀU NGÀY HỘI XANH (ĐẦY ĐỦ 3 VÒNG & 7 BƯỚC)
       - Đoàn tàu 9 toa đánh số thứ tự từ 1 đến 9.
       - 3 giỏ nông sản trên sân ga, mỗi giỏ từ 1–9 quả cùng loại xếp rõ ràng 3x3
         không chồng lấp, số lượng 3 giỏ hoàn toàn khác nhau.
       - Hỗ trợ cuộn ngang mượt mà: nút trái/phải lớn, gợi ý vuốt, tự động cuộn
         nhẹ khi kéo giỏ sát mép vùng tàu, và hỗ trợ "chạm chọn giỏ -> cuộn tàu -> chạm toa".
       - Tuyệt đối không tự cuộn đến toa đúng trước khi trẻ trả lời.
       ========================================================================== */
    const Station4Train = {
      FRUIT_TYPES: {
        apple:      { id: 'apple',      name: 'Quả Táo Đỏ',   color: '#e53935', stroke: '#b71c1c' },
        orange:     { id: 'orange',     name: 'Quả Cam Vàng', color: '#fb8c00', stroke: '#e65100' },
        banana:     { id: 'banana',     name: 'Quả Chuối',    color: '#fdd835', stroke: '#f57f17' },
        strawberry: { id: 'strawberry', name: 'Quả Dâu Tây',  color: '#f44336', stroke: '#c62828' },
        pear:       { id: 'pear',       name: 'Quả Lê Xanh',  color: '#9ccc65', stroke: '#558b2f' },
        mango:      { id: 'mango',      name: 'Quả Xoài Vàng',color: '#ffca28', stroke: '#ff8f00' },
        watermelon: { id: 'watermelon', name: 'Quả Dưa Hấu',  color: '#43a047', stroke: '#1b5e20' },
        peach:      { id: 'peach',      name: 'Quả Đào Hồng', color: '#ff80ab', stroke: '#c2185b' },
        plum:       { id: 'plum',       name: 'Quả Mận Tím',  color: '#ab47bc', stroke: '#6a1b9a' }
      },

      // 3 vòng chơi: Mỗi vòng 3 giỏ có số lượng hoàn toàn khác nhau (bao phủ 1..9)
      ROUNDS_CONFIG: [
        {
          roundIndex: 0,
          baskets: [
            { id: 'b1', fruit: 'apple',  count: 2 },
            { id: 'b2', fruit: 'orange', count: 5 },
            { id: 'b3', fruit: 'banana', count: 7 }
          ]
        },
        {
          roundIndex: 1,
          baskets: [
            { id: 'b1', fruit: 'strawberry', count: 3 },
            { id: 'b2', fruit: 'pear',       count: 6 },
            { id: 'b3', fruit: 'mango',      count: 8 }
          ]
        },
        {
          roundIndex: 2,
          baskets: [
            { id: 'b1', fruit: 'watermelon', count: 1 },
            { id: 'b2', fruit: 'peach',      count: 4 },
            { id: 'b3', fruit: 'plum',       count: 9 }
          ]
        }
      ],

      currentController: null,
      edgeScrollRaf: null,
      lastPointerX: null,
      lastPointerY: null,
      _boundPointerTracker: null,
      state: null,

      /* --- HÌNH VẼ SVG QUẢ & ĐẦU TÀU TRẠM 4 --- */
      getMiniFruitSVG(fruitId) {
        const f = this.FRUIT_TYPES[fruitId] || this.FRUIT_TYPES.apple;
        if (fruitId === 'banana') {
          return `
            <svg viewBox="0 0 36 36" width="100%" height="100%">
              <path d="M8,24 C14,30 26,24 28,10 C24,18 16,22 8,20 Z" fill="${f.color}" stroke="${f.stroke}" stroke-width="2.2" stroke-linejoin="round"/>
            </svg>
          `;
        }
        if (fruitId === 'watermelon') {
          return `
            <svg viewBox="0 0 36 36" width="100%" height="100%">
              <circle cx="18" cy="19" r="12" fill="${f.color}" stroke="${f.stroke}" stroke-width="2.2"/>
              <path d="M12,10 Q18,18 12,28 M18,8 L18,30 M24,10 Q18,18 24,28" fill="none" stroke="#1b5e20" stroke-width="2"/>
            </svg>
          `;
        }
        return `
          <svg viewBox="0 0 36 36" width="100%" height="100%">
            <path d="M18,8 Q22,3 25,7" fill="none" stroke="#43a047" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="18" cy="20" r="11.5" fill="${f.color}" stroke="${f.stroke}" stroke-width="2.2"/>
            <circle cx="14" cy="16" r="2.2" fill="#ffffff" opacity="0.65"/>
          </svg>
        `;
      },

      getLocomotiveSVG() {
        return `
          <svg viewBox="0 0 150 130" width="100%" height="100%">
            <!-- Ống khói & Khói trắng -->
            <circle cx="42" cy="16" r="10" fill="#ffffff" opacity="0.85"/>
            <circle cx="60" cy="12" r="7" fill="#ffffff" opacity="0.7"/>
            <rect x="32" y="26" width="20" height="28" rx="5" fill="#e53935" stroke="#b71c1c" stroke-width="3"/>
            <!-- Thân đầu tàu -->
            <rect x="18" y="48" width="116" height="54" rx="14" fill="#2e7d32" stroke="#1b5e20" stroke-width="3.5"/>
            <!-- Buồng lái Bác Lái Tàu -->
            <rect x="82" y="24" width="46" height="44" rx="10" fill="#ffd54f" stroke="#f57f17" stroke-width="3.5"/>
            <rect x="90" y="30" width="30" height="24" rx="5" fill="#e1f5fe" stroke="#0288d1" stroke-width="2"/>
            <circle cx="105" cy="42" r="8" fill="#ffcc80" stroke="#5d4037" stroke-width="2"/>
            <!-- Mũi cản trước -->
            <polygon points="18,102 4,102 18,76" fill="#ff9800" stroke="#e65100" stroke-width="2.5" stroke-linejoin="round"/>
            <!-- Bánh xe lớn -->
            <circle cx="44" cy="106" r="15" fill="#37474f" stroke="#cfd8dc" stroke-width="3.5"/>
            <circle cx="44" cy="106" r="5" fill="#ffd54f"/>
            <circle cx="102" cy="106" r="15" fill="#37474f" stroke="#cfd8dc" stroke-width="3.5"/>
            <circle cx="102" cy="106" r="5" fill="#ffd54f"/>
          </svg>
        `;
      },

      render(stageEl, roundIndex = 0) {
        this._cleanup();
        HandTutorial.stop();

        const cfg = this.ROUNDS_CONFIG[roundIndex] || this.ROUNDS_CONFIG[0];

        this.state = {
          roundIndex,
          currentStep: 1, // 1..7
          baskets: cfg.baskets.map((b) => ({
            id: b.id,
            fruit: b.fruit,
            count: b.count,
            placed: false,
            carriageNum: null
          })),
          carriages: Array.from({ length: 9 }, (_, i) => ({
            num: i + 1,
            occupiedByBasketId: null
          }))
        };

        stageEl.innerHTML = `
          <div class="st4-root" id="st4-root">
            <!-- Thanh hiển thị 7 bước -->
            <div class="st4-steps-bar">
              <div class="st1-steps-list" id="st4-steps-list">
                <span class="st1-step-pill active" data-step-pill="1">1. 🚂 Tàu vào ga</span>
                <span class="st1-step-pill" data-step-pill="2">2. 🧺 Đếm & xếp giỏ (0/3)</span>
                <span class="st1-step-pill" data-step-pill="6">3. 🔔 Chạm đầu tàu</span>
                <span class="st1-step-pill" data-step-pill="7">4. 🚩 Khởi hành</span>
              </div>
              <button type="button" class="st1-demo-btn" id="st4-btn-watch-demo">
                👋 Xem mẫu
              </button>
            </div>

            <div class="st4-playfield">
              <!-- Hàng nút mũi tên Trái / Phải lớn & gợi ý vuốt xem 9 toa -->
              <div class="st4-train-controls-row">
                <button type="button" class="st4-scroll-btn" id="st4-btn-scroll-left" aria-label="Cuộn tàu sang trái">
                  ◀ Toa trước
                </button>
                <div class="st4-swipe-hint-pill">
                  <span>↔ Vuốt ngang hoặc bấm mũi tên để xem toa số 1 đến số 9</span>
                </div>
                <button type="button" class="st4-scroll-btn" id="st4-btn-scroll-right" aria-label="Cuộn tàu sang phải">
                  Toa sau ▶
                </button>
              </div>

              <!-- Khung cuộn ngang Đoàn tàu (Đầu tàu + 9 Toa thứ tự 1..9) -->
              <div class="st4-train-viewport" id="st4-train-scroll-viewport" aria-label="Đoàn tàu 9 toa">
                <div class="st4-train-track-strip" id="st4-train-strip">
                  <!-- Đầu tàu -->
                  <div class="st4-locomotive-box" id="st4-locomotive" role="button" tabindex="0" aria-label="Đầu tàu khởi hành">
                    <span class="st4-loco-depart-tag">👆 Chạm khởi hành!</span>
                    ${this.getLocomotiveSVG()}
                  </div>

                  <!-- 9 Toa tàu từ 1 đến 9 -->
                  ${this.state.carriages.map((car) => `
                    <div class="st4-carriage-card"
                         id="st4-car-${car.num}"
                         data-car-num="${car.num}"
                         aria-label="Toa tàu số ${car.num}">
                      <div class="st4-carriage-num-header">
                        <span class="st4-carriage-num-badge">${car.num}</span>
                        <span id="st4-car-status-${car.num}" style="font-size:1.1rem;font-weight:900;color:#2e7d32;"></span>
                      </div>
                      <div class="st4-carriage-cargo-slot" id="st4-car-slot-${car.num}">
                        <span style="font-size:0.82rem;font-weight:800;color:#78909c;">Toa số ${car.num}</span>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Sân ga chứa 3 giỏ nông sản -->
              <div class="st4-platform-zone" id="st4-platform-zone" aria-label="Sân ga chứa 3 giỏ nông sản">
                ${this.state.baskets.map((b) => `
                  <div class="st4-basket-card learning-item"
                       id="st4-basket-${b.id}"
                       data-basket-id="${b.id}"
                       aria-label="Giỏ ${this.FRUIT_TYPES[b.fruit].name}">
                    <div class="st4-basket-fruits-grid">
                      ${Array.from({ length: 9 }, (_, cellIdx) => `
                        <div class="st4-fruit-cell">
                          ${cellIdx < b.count ? this.getMiniFruitSVG(b.fruit) : ''}
                        </div>
                      `).join('')}
                    </div>
                    <div class="st4-basket-label">
                      🧺 Giỏ ${this.FRUIT_TYPES[b.fruit].name}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;

        this.currentController = new InteractionController(stageEl);
        this._bindInteractions(stageEl);
        this._startAutoEdgeScrollLoop();
        this._enterStep1TrainArrives();
      },

      _cleanup() {
        if (this.currentController) {
          this.currentController.destroy();
          this.currentController = null;
        }
        if (this.edgeScrollRaf) {
          cancelAnimationFrame(this.edgeScrollRaf);
          this.edgeScrollRaf = null;
        }
        if (this._boundPointerTracker) {
          window.removeEventListener('pointermove', this._boundPointerTracker);
          this._boundPointerTracker = null;
        }
      },

      _updateStepPills(activeCode) {
        document.querySelectorAll('#st4-steps-list [data-step-pill]').forEach((pill) => {
          const code = Number(pill.getAttribute('data-step-pill'));
          pill.classList.remove('active', 'done');
          if (code < activeCode) pill.classList.add('done');
          else if (code === activeCode) pill.classList.add('active');
        });
      },

      _setHintTargets(selectors = []) {
        document.querySelectorAll('#station-stage [data-hint-target]').forEach((el) => {
          el.removeAttribute('data-hint-target');
          el.classList.remove('idle-hint-glow');
        });
        selectors.forEach((sel) => {
          document.querySelectorAll(sel).forEach((el) => el.setAttribute('data-hint-target', 'true'));
        });
        IdleHintSystem.resetTimer();
      },

      /**
       * Tự động cuộn ngang nhẹ nhàng khi trẻ kéo giỏ nông sản sát mép trái/phải vùng tàu
       */
      _startAutoEdgeScrollLoop() {
        this._boundPointerTracker = (e) => {
          this.lastPointerX = e.clientX;
          this.lastPointerY = e.clientY;
        };
        window.addEventListener('pointermove', this._boundPointerTracker, { passive: true });

        const tick = () => {
          const viewport = document.getElementById('st4-train-scroll-viewport');
          if (!viewport || !this.currentController) {
            this.edgeScrollRaf = null;
            return;
          }

          const drag = this.currentController.activeDrag;
          if (drag && drag.hasMovedBeyondThreshold && this.lastPointerX !== null) {
            const rect = viewport.getBoundingClientRect();
            const edgeZone = 85;
            if (this.lastPointerX >= rect.left && this.lastPointerX <= rect.left + edgeZone) {
              viewport.scrollLeft -= 7;
            } else if (this.lastPointerX <= rect.right && this.lastPointerX >= rect.right - edgeZone) {
              viewport.scrollLeft += 7;
            }
          }
          this.edgeScrollRaf = requestAnimationFrame(tick);
        };
        this.edgeScrollRaf = requestAnimationFrame(tick);
      },

      _bindInteractions(stageEl) {
        const ctrl = this.currentController;
        const viewport = document.getElementById('st4-train-scroll-viewport');
        const btnLeft = document.getElementById('st4-btn-scroll-left');
        const btnRight = document.getElementById('st4-btn-scroll-right');
        const locoEl = document.getElementById('st4-locomotive');
        const demoBtn = document.getElementById('st4-btn-watch-demo');

        // 1. Nút cuộn ngang Trái / Phải (Không làm mất trạng thái giỏ đang được chạm chọn)
        btnLeft.addEventListener('click', (e) => {
          e.stopPropagation();
          AudioSystem.playTap();
          viewport.scrollBy({ left: -260, behavior: 'smooth' });
        });
        btnRight.addEventListener('click', (e) => {
          e.stopPropagation();
          AudioSystem.playTap();
          viewport.scrollBy({ left: 260, behavior: 'smooth' });
        });

        // 2. Đăng ký kéo thả / chạm chọn cho 3 giỏ nông sản trên sân ga
        this.state.baskets.forEach((b) => {
          const basketEl = document.getElementById(`st4-basket-${b.id}`);
          ctrl.registerDraggable(basketEl, {
            id: b.id,
            type: 'platform-basket',
            data: { basketId: b.id, count: b.count, fruit: b.fruit },
            canDrag: () => this.state.currentStep >= 2 && this.state.currentStep <= 5 && !b.placed
          });
        });

        // 3. Đăng ký 9 toa tàu là vùng nhận (dropzone)
        this.state.carriages.forEach((car) => {
          const carEl = document.getElementById(`st4-car-${car.num}`);
          ctrl.registerDropzone(carEl, {
            acceptTypes: ['platform-basket'],
            hitboxPadding: 14,
            onDrop: (itemState) => {
              if (this.state.currentStep < 2 || this.state.currentStep > 5) return false;
              return this._handleDropBasketOnCarriage(itemState.data.basketId, car.num, carEl);
            }
          });
        });

        // 4. Sự kiện chạm Đầu tàu để khởi hành ở Bước 6
        const onLocoTrigger = () => {
          if (this.state.currentStep !== 6) return;
          this._handleStep7TrainDepart();
        };
        locoEl.addEventListener('click', onLocoTrigger);
        locoEl.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onLocoTrigger();
          }
        });

        // 5. Nút Xem mẫu (Tuyệt đối không cuộn sẵn tới toa đáp án, chỉ minh họa cách kéo/chạm lên vùng tàu)
        demoBtn.addEventListener('click', () => {
          AudioSystem.playTap();
          if (this.state.currentStep === 6) {
            HandTutorial.playDemo('tap_count', {
              container: stageEl,
              fromEl: locoEl,
              label: 'Chạm vào Đầu tàu đang sáng để khởi hành nhé!'
            });
          } else {
            const availBasket = this.state.baskets.find((b) => !b.placed);
            if (availBasket) {
              HandTutorial.playDemo('drag_drop', {
                container: stageEl,
                fromEl: document.getElementById(`st4-basket-${availBasket.id}`),
                toEl: viewport,
                label: 'Đếm số quả trong giỏ rồi đưa lên toa tàu có số tương ứng nhé!'
              });
            }
          }
        });
      },

      /**
       * Bước 1: Đoàn tàu chạy vào sân ga và dừng lại
       */
      _enterStep1TrainArrives() {
        this.state.currentStep = 1;
        this._updateStepPills(1);
        AudioSystem.playTrainHorn();

        const strip = document.getElementById('st4-train-strip');
        requestAnimationFrame(() => {
          if (strip) strip.classList.add('arrived');
        });

        GameEngine.setInstruction(
          'Bước 1: Xình xịch! Đoàn tàu 9 toa đã tiến vào sân ga Ngày Hội Xanh!',
          AUDIO_FILES.stations[4].step1Arrive || AUDIO_FILES.stations[4][`round${this.state.roundIndex + 1}`]
        );

        setTimeout(() => {
          if (this.state && this.state.currentStep === 1) {
            this._enterStep2LoadBaskets();
          }
        }, 1050);
      },

      /**
       * Bước 2 - 5: Đếm quả trong từng giỏ và đưa lên toa tàu có số tương ứng (1..9)
       */
      _enterStep2LoadBaskets() {
        this.state.currentStep = 2;
        this._updateStepPills(2);

        GameEngine.setInstruction(
          'Bước 2: Bé hãy đếm số quả trong từng giỏ ở sân ga rồi đưa giỏ lên toa tàu có gắn chữ số tương ứng nhé!',
          AUDIO_FILES.stations[4].step2Load
        );
        this._setHintTargets(['.st4-basket-card:not(.placed-on-train)', '.st4-carriage-card:not(.loaded)']);
      },

      _handleDropBasketOnCarriage(basketId, carriageNum, carEl) {
        const basket = this.state.baskets.find((b) => b.id === basketId);
        const carriage = this.state.carriages.find((c) => c.num === carriageNum);
        if (!basket || !carriage || basket.placed) return false;

        // Không cho đặt giỏ khác vào toa đã có hàng
        if (carriage.occupiedByBasketId !== null) {
          GameEngine.triggerEncourageFeedback('tryAgain', carEl);
          return false;
        }

        // Bước 3: Nếu sai toa -> giỏ bay về sân ga, phản hồi nhẹ nhàng "Bé đếm lại nhé"
        if (basket.count !== carriageNum) {
          GameEngine.triggerEncourageFeedback('recount', carEl);
          return false;
        }

        // Bước 4: Đúng toa -> Đặt gọn trên toa và đánh dấu hoàn thành
        basket.placed = true;
        basket.carriageNum = carriageNum;
        carriage.occupiedByBasketId = basket.id;

        const basketEl = document.getElementById(`st4-basket-${basket.id}`);
        if (basketEl) {
          basketEl.classList.add('placed-on-train');
        }

        carEl.classList.add('loaded');
        const statusEl = document.getElementById(`st4-car-status-${carriageNum}`);
        if (statusEl) statusEl.textContent = '★';

        const slotEl = document.getElementById(`st4-car-slot-${carriageNum}`);
        if (slotEl) {
          slotEl.innerHTML = `
            <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
              <div style="width:44px;height:44px;">${this.getMiniFruitSVG(basket.fruit)}</div>
              <span style="font-size:0.84rem;font-weight:900;color:#1b5e20;">${basket.count} quả ✓</span>
            </div>
          `;
        }

        const loadedCount = this.state.baskets.filter((b) => b.placed).length;
        const stepPill2 = document.querySelector('#st4-steps-list [data-step-pill="2"]');
        if (stepPill2) {
          stepPill2.textContent = `2. 🧺 Đếm & xếp giỏ (${loadedCount}/3)`;
        }

        const fruitName = this.FRUIT_TYPES[basket.fruit].name;
        GameEngine.triggerCorrectFeedback(
          `Đúng rồi! Giỏ có ${basket.count} ${fruitName} khớp với Toa số ${carriageNum}!`,
          AUDIO_FILES.numbers[carriageNum]
        );

        if (loadedCount === 3) {
          setTimeout(() => this._enterStep6HighlightLocomotive(), 650);
        } else {
          this._setHintTargets(['.st4-basket-card:not(.placed-on-train)', '.st4-carriage-card:not(.loaded)']);
        }
        return true;
      },

      /**
       * Bước 6: Xếp xong cả 3 giỏ -> Làm sáng đầu tàu để trẻ chạm khởi hành
       */
      _enterStep6HighlightLocomotive() {
        this.state.currentStep = 6;
        this._updateStepPills(6);

        const viewport = document.getElementById('st4-train-scroll-viewport');
        if (viewport) {
          // Khi đã hoàn thành cả 3 câu hỏi, cuộn nhẹ về đầu tàu để trẻ thấy đầu tàu phát sáng
          viewport.scrollTo({ left: 0, behavior: 'smooth' });
        }

        const locoEl = document.getElementById('st4-locomotive');
        if (locoEl) {
          locoEl.classList.add('ready-depart');
        }

        GameEngine.setInstruction(
          'Bước 6: Đã xếp đủ cả 3 giỏ nông sản lên tàu! Bé hãy chạm vào Đầu tàu đang phát sáng để khởi hành nhé!',
          AUDIO_FILES.stations[4].step6ReadyDepart
        );
        this._setHintTargets(['#st4-locomotive']);
      },

      /**
       * Bước 7: Tàu hú còi chạy đi và hoàn thành vòng chơi
       */
      _handleStep7TrainDepart() {
        this.state.currentStep = 7;
        this._updateStepPills(7);

        const locoEl = document.getElementById('st4-locomotive');
        if (locoEl) locoEl.classList.remove('ready-depart');

        AudioSystem.playTrainHorn();
        const strip = document.getElementById('st4-train-strip');
        if (strip) {
          strip.classList.add('departing');
        }

        GameEngine.triggerCorrectFeedback(
          'Tu tu xình xịch! Chuyến tàu Ngày Hội Xanh lăn bánh khởi hành!',
          AUDIO_FILES.stations[4].step7Depart || AUDIO_FILES.feedback.correct
        );

        setTimeout(() => {
          this._cleanup();
          GameEngine.completeCurrentRound(
            'Bé đã đếm chính xác 3 giỏ nông sản, ghép đúng chữ số trên đoàn tàu 1–9 và cho tàu khởi hành!'
          );
        }, 1350);
      }
    };

    /* ==========================================================================
       BƯỚC 4.5: TRẠM 5 — THỊ TRẤN NGHỀ NGHIỆP (3 VÒNG & 12 BƯỚC / 3 GIAI ĐOẠN)
       - Quan hệ Sản phẩm – Nghề nghiệp an toàn, bình đẳng giới:
         + Chậu Cây Giống (sapling) -> Người Làm Vườn (gardener)
         + Củ Cà Rốt Tươi (carrot)  -> Đầu Bếp (chef)
         + Viên Gạch Màu (brick)    -> Thợ Xây Bồn Hoa (builder)
       - Chia 3 giai đoạn rõ ràng (không bắt trẻ xử lý 3 cột cùng lúc):
         + Giai đoạn A (Bước 1-3): Đóng gói lần lượt từng giỏ (Giỏ 1 -> Giỏ 2 -> Giỏ 3).
         + Giai đoạn B (Bước 4-6):
           * Màn nối Bước 1: Nối từng giỏ với cô/chú giao hàng mang thẻ số tương ứng.
           * Màn nối Bước 2: Nối từng cô/chú giao hàng với đúng khu vực nghề nghiệp.
         + Giai đoạn C (Bước 7-12): Chạm từng người giao hàng để xe chạy trên đường định sẵn,
           người nhận làm đẹp khu làng (cây nở hoa, bàn tiệc có món ăn, bồn hoa hoàn thiện).
       ========================================================================== */
    const Station5Town = {
      ITEMS_META: {
        sapling: {
          id: 'sapling',
          name: 'Chậu Cây Giống',
          jobId: 'gardener',
          jobTitle: 'Người Làm Vườn',
          placeName: 'Khu Vườn Xanh'
        },
        carrot: {
          id: 'carrot',
          name: 'Củ Cà Rốt Tươi',
          jobId: 'chef',
          jobTitle: 'Đầu Bếp Lễ Hội',
          placeName: 'Bàn Tiệc Rau Củ'
        },
        brick: {
          id: 'brick',
          name: 'Viên Gạch Màu',
          jobId: 'builder',
          jobTitle: 'Thợ Xây Bồn Hoa',
          placeName: 'Công Viên Bồn Hoa'
        }
      },

      // 3 vòng chơi: Mỗi vòng gồm 3 giỏ ứng với 3 nghề và 3 số lượng hoàn toàn khác nhau (1..9)
      ROUNDS_CONFIG: [
        {
          roundIndex: 0,
          orders: [
            { basketIndex: 0, itemType: 'sapling', count: 2, courierId: 'c1', courierName: 'Cô Giao Hàng Minh' },
            { basketIndex: 1, itemType: 'carrot',  count: 4, courierId: 'c2', courierName: 'Chú Giao Hàng Nam' },
            { basketIndex: 2, itemType: 'brick',   count: 5, courierId: 'c3', courierName: 'Cô Giao Hàng Lan' }
          ],
          courierOrderStep1: [1, 2, 0],
          jobOrderStep2: [2, 0, 1]
        },
        {
          roundIndex: 1,
          orders: [
            { basketIndex: 0, itemType: 'carrot',  count: 3, courierId: 'c1', courierName: 'Chú Giao Hàng Hải' },
            { basketIndex: 1, itemType: 'brick',   count: 6, courierId: 'c2', courierName: 'Cô Giao Hàng Mai' },
            { basketIndex: 2, itemType: 'sapling', count: 7, courierId: 'c3', courierName: 'Chú Giao Hàng Phúc' }
          ],
          courierOrderStep1: [2, 0, 1],
          jobOrderStep2: [1, 2, 0]
        },
        {
          roundIndex: 2,
          orders: [
            { basketIndex: 0, itemType: 'brick',   count: 4, courierId: 'c1', courierName: 'Cô Giao Hàng Hà' },
            { basketIndex: 1, itemType: 'sapling', count: 8, courierId: 'c2', courierName: 'Chú Giao Hàng Kiên' },
            { basketIndex: 2, itemType: 'carrot',  count: 9, courierId: 'c3', courierName: 'Cô Giao Hàng Thảo' }
          ],
          courierOrderStep1: [1, 0, 2],
          jobOrderStep2: [0, 2, 1]
        }
      ],

      currentController: null,
      currentConnector: null,
      state: null,

      /* --- THƯ VIỆN SVG SẢN PHẨM, NGƯỜI GIAO HÀNG ĐỘI MŨ BẢO HIỂM & KHU LÀNG --- */
      getProductSVG(itemType) {
        if (itemType === 'sapling') {
          return `
            <svg viewBox="0 0 72 72" width="100%" height="100%">
              <polygon points="20,42 52,42 46,64 26,64" fill="#d84315" stroke="#8d6e63" stroke-width="2.5" stroke-linejoin="round"/>
              <rect x="17" y="37" width="38" height="7" rx="3" fill="#ff7043" stroke="#8d6e63" stroke-width="2"/>
              <path d="M36,37 L36,18" stroke="#2e7d32" stroke-width="4.5" stroke-linecap="round"/>
              <path d="M36,28 C20,18 18,32 36,32 Z" fill="#66bb6a" stroke="#1b5e20" stroke-width="2.2"/>
              <path d="M36,22 C52,12 54,26 36,26 Z" fill="#43a047" stroke="#1b5e20" stroke-width="2.2"/>
            </svg>
          `;
        }
        if (itemType === 'carrot') {
          return Station3Market.getProduceSVG('carrot');
        }
        // Viên gạch màu xây bồn hoa ('brick') — bo tròn an toàn
        return `
          <svg viewBox="0 0 72 72" width="100%" height="100%">
            <rect x="10" y="24" width="52" height="28" rx="7" fill="#ff7043" stroke="#bf360c" stroke-width="3"/>
            <rect x="14" y="28" width="44" height="8" rx="3" fill="#ffab91" opacity="0.65"/>
            <circle cx="24" cy="20" r="5" fill="#ff8a65" stroke="#bf360c" stroke-width="2.2"/>
            <circle cx="36" cy="20" r="5" fill="#ff8a65" stroke="#bf360c" stroke-width="2.2"/>
            <circle cx="48" cy="20" r="5" fill="#ff8a65" stroke="#bf360c" stroke-width="2.2"/>
          </svg>
        `;
      },

      /**
       * Cô/Chú giao hàng đội mũ bảo hiểm an toàn (kèm xe điện nhỏ ở Giai đoạn C)
       */
      getCourierWithHelmetSVG(colorTheme = '#0288d1', withScooter = false) {
        if (!withScooter) {
          return `
            <svg viewBox="0 0 84 84" width="64" height="64">
              <circle cx="42" cy="48" r="20" fill="#ffe0b2" stroke="#5d4037" stroke-width="2.5"/>
              <!-- Mũ bảo hiểm an toàn có kính chắn -->
              <path d="M20,44 C20,22 64,22 64,44 Z" fill="${colorTheme}" stroke="#263238" stroke-width="3"/>
              <rect x="26" y="34" width="32" height="8" rx="4" fill="#e1f5fe" stroke="#01579b" stroke-width="1.8"/>
              <!-- Dây quai mũ an toàn -->
              <path d="M24,44 Q42,66 60,44" fill="none" stroke="#37474f" stroke-width="2.2"/>
              <circle cx="35" cy="49" r="2.8" fill="#263238"/>
              <circle cx="49" cy="49" r="2.8" fill="#263238"/>
              <path d="M37,56 Q42,60 47,56" fill="none" stroke="#263238" stroke-width="2.2" stroke-linecap="round"/>
            </svg>
          `;
        }
        return `
          <svg viewBox="0 0 110 80" width="100%" height="100%">
            <!-- Xe máy điện giao hàng bo tròn -->
            <rect x="12" y="42" width="30" height="20" rx="6" fill="#ffd54f" stroke="#f57f17" stroke-width="2.5"/>
            <path d="M26,56 L78,56 L84,34 L68,34 L62,50 L36,50 Z" fill="${colorTheme}" stroke="#263238" stroke-width="2.5" stroke-linejoin="round"/>
            <circle cx="28" cy="64" r="10" fill="#37474f" stroke="#cfd8dc" stroke-width="3"/>
            <circle cx="78" cy="64" r="10" fill="#37474f" stroke="#cfd8dc" stroke-width="3"/>
            <!-- Người giao hàng đội mũ bảo hiểm -->
            <circle cx="54" cy="26" r="11" fill="#ffe0b2" stroke="#5d4037" stroke-width="2"/>
            <path d="M42,24 C42,10 66,10 66,24 Z" fill="${colorTheme}" stroke="#263238" stroke-width="2.2"/>
          </svg>
        `;
      },

      /**
       * Cảnh khu vực nghề nghiệp trước và sau khi nhận hàng (beautified = false / true)
       */
      getDestinationSceneSVG(jobId, beautified = false) {
        if (jobId === 'gardener') {
          if (!beautified) {
            return `
              <svg viewBox="0 0 90 74" width="76" height="64">
                <ellipse cx="45" cy="58" rx="36" ry="10" fill="#8d6e63" stroke="#5d4037" stroke-width="2.5"/>
                <circle cx="30" cy="56" r="4" fill="#6d4c41"/>
                <circle cx="60" cy="56" r="4" fill="#6d4c41"/>
              </svg>
            `;
          }
          // Sau khi giao cây giống: Cây nở hoa rực rỡ
          return `
            <svg viewBox="0 0 90 74" width="76" height="64">
              <ellipse cx="45" cy="60" rx="36" ry="10" fill="#66bb6a" stroke="#2e7d32" stroke-width="2.5"/>
              <path d="M26,58 L26,30 M45,58 L45,24 M64,58 L64,30" stroke="#2e7d32" stroke-width="4" stroke-linecap="round"/>
              <circle cx="26" cy="26" r="10" fill="#ff80ab" stroke="#c2185b" stroke-width="2"/>
              <circle cx="45" cy="20" r="12" fill="#ffd54f" stroke="#f57f17" stroke-width="2"/>
              <circle cx="64" cy="26" r="10" fill="#ba68c8" stroke="#6a1b9a" stroke-width="2"/>
            </svg>
          `;
        }

        if (jobId === 'chef') {
          if (!beautified) {
            return `
              <svg viewBox="0 0 90 74" width="76" height="64">
                <rect x="14" y="42" width="62" height="10" rx="4" fill="#ffb74d" stroke="#e65100" stroke-width="2.5"/>
                <rect x="22" y="52" width="8" height="16" fill="#8d6e63"/>
                <rect x="60" y="52" width="8" height="16" fill="#8d6e63"/>
                <ellipse cx="45" cy="38" rx="16" ry="5" fill="#ffffff" stroke="#90a4ae" stroke-width="2"/>
              </svg>
            `;
          }
          // Sau khi giao cà rốt: Bàn tiệc có món ăn ngon lành
          return `
            <svg viewBox="0 0 90 74" width="76" height="64">
              <rect x="14" y="44" width="62" height="10" rx="4" fill="#ffb74d" stroke="#e65100" stroke-width="2.5"/>
              <rect x="22" y="54" width="8" height="14" fill="#8d6e63"/>
              <rect x="60" y="54" width="8" height="14" fill="#8d6e63"/>
              <path d="M26,42 C26,24 64,24 64,42 Z" fill="#ff7043" stroke="#bf360c" stroke-width="2.5"/>
              <circle cx="38" cy="28" r="5" fill="#66bb6a"/>
              <circle cx="52" cy="28" r="5" fill="#ffd54f"/>
            </svg>
          `;
        }

        // 'builder' (Thợ xây bồn hoa)
        if (!beautified) {
          return `
            <svg viewBox="0 0 90 74" width="76" height="64">
              <rect x="16" y="48" width="58" height="14" rx="4" fill="#bcaaa4" stroke="#5d4037" stroke-width="2.5" stroke-dasharray="6 4"/>
            </svg>
          `;
        }
        // Sau khi giao gạch: Bồn hoa gạch hoàn thiện rực rỡ
        return `
          <svg viewBox="0 0 90 74" width="76" height="64">
            <rect x="14" y="40" width="62" height="24" rx="5" fill="#ff7043" stroke="#bf360c" stroke-width="2.5"/>
            <path d="M14,52 L76,52 M34,40 L34,52 M56,40 L56,52 M24,52 L24,64 M45,52 L45,64 M66,52 L66,64" stroke="#fff8e1" stroke-width="2"/>
            <circle cx="30" cy="30" r="9" fill="#ffd54f" stroke="#f57f17" stroke-width="2"/>
            <circle cx="45" cy="26" r="10" fill="#ff4081" stroke="#880e4f" stroke-width="2"/>
            <circle cx="60" cy="30" r="9" fill="#29b6f6" stroke="#01579b" stroke-width="2"/>
          </svg>
        `;
      },

      render(stageEl, roundIndex = 0) {
        this._cleanup();
        HandTutorial.stop();

        const cfg = this.ROUNDS_CONFIG[roundIndex] || this.ROUNDS_CONFIG[0];

        this.state = {
          roundIndex,
          phase: 'A', // 'A' (Đóng gói) | 'B1' (Nối số) | 'B2' (Nối nghề) | 'C' (Giao hàng)
          activeBasketIdx: 0, // 0, 1, 2 trong Giai đoạn A
          orders: cfg.orders.map((o) => ({
            ...o,
            packedCount: 0,
            completedPack: false,
            connectedStep1: false,
            connectedStep2: false,
            delivered: false
          })),
          courierOrderStep1: cfg.courierOrderStep1,
          jobOrderStep2: cfg.jobOrderStep2,
          supplyItems: []
        };

        stageEl.innerHTML = `
          <div class="st5-root" id="st5-root">
            <!-- Thanh hiển thị tiến trình 3 Giai đoạn (12 bước) -->
            <div class="st5-steps-bar">
              <div class="st1-steps-list" id="st5-steps-list">
                <span class="st1-step-pill active" data-phase-pill="A" id="st5-pill-A">
                  Giai đoạn A: 📦 Đóng gói (Giỏ 1/3)
                </span>
                <span class="st1-step-pill" data-phase-pill="B1" id="st5-pill-B1">
                  Giai đoạn B1: 🔗 Nối giỏ với thẻ số
                </span>
                <span class="st1-step-pill" data-phase-pill="B2" id="st5-pill-B2">
                  Giai đoạn B2: 🔗 Nối người nhận nghề
                </span>
                <span class="st1-step-pill" data-phase-pill="C" id="st5-pill-C">
                  Giai đoạn C: 🛵 Giao hàng làm đẹp làng
                </span>
              </div>
              <button type="button" class="st1-demo-btn" id="st5-btn-watch-demo">
                👋 Xem mẫu
              </button>
            </div>

            <!-- Vùng hiển thị theo từng giai đoạn (không bắt trẻ xử lý 3 cột cùng lúc) -->
            <div class="st5-stage-body" id="st5-stage-body"></div>
          </div>
        `;

        document.getElementById('st5-btn-watch-demo').addEventListener('click', () => {
          AudioSystem.playTap();
          this._playCurrentPhaseDemo(stageEl);
        });

        this._startPhaseA_Basket(0);
      },

      _cleanup() {
        if (this.currentController) {
          this.currentController.destroy();
          this.currentController = null;
        }
        if (this.currentConnector) {
          this.currentConnector.destroy();
          this.currentConnector = null;
        }
      },

      _updatePhasePills(phaseCode) {
        this.state.phase = phaseCode;
        const orderList = ['A', 'B1', 'B2', 'C'];
        const curIdx = orderList.indexOf(phaseCode);
        orderList.forEach((code, idx) => {
          const pill = document.getElementById(`st5-pill-${code}`);
          if (!pill) return;
          pill.classList.remove('active', 'done');
          if (idx < curIdx) pill.classList.add('done');
          else if (idx === curIdx) pill.classList.add('active');
        });
      },

      _setHintTargets(selectors = []) {
        document.querySelectorAll('#station-stage [data-hint-target]').forEach((el) => {
          el.removeAttribute('data-hint-target');
          el.classList.remove('idle-hint-glow');
        });
        selectors.forEach((sel) => {
          document.querySelectorAll(sel).forEach((el) => el.setAttribute('data-hint-target', 'true'));
        });
        IdleHintSystem.resetTimer();
      },

      /* ========================================================================
         GIAI ĐOẠN A: ĐÓNG GÓI LẦN LƯỢT 3 GIỎ (MỖI THỜI ĐIỂM CHỈ MỞ 1 GIỎ)
         ======================================================================== */
      _startPhaseA_Basket(basketIdx) {
        this._cleanup();
        this.state.activeBasketIdx = basketIdx;
        this._updatePhasePills('A');

        const pillA = document.getElementById('st5-pill-A');
        if (pillA) {
          pillA.textContent = `Giai đoạn A: 📦 Đóng gói (Giỏ ${basketIdx + 1}/3)`;
        }

        const order = this.state.orders[basketIdx];
        const meta = this.ITEMS_META[order.itemType];
        const allTypes = ['sapling', 'carrot', 'brick'];
        const distractors = allTypes.filter((t) => t !== order.itemType);

        // Tạo 9 món thuộc loại mục tiêu + 2 món thuộc 2 loại khác trên bàn đóng gói
        const supply = [];
        for (let i = 0; i < 9; i++) {
          supply.push({
            uid: `sup-target-${i}`,
            itemType: order.itemType,
            isTarget: true,
            inBasket: i < order.packedCount
          });
        }
        distractors.forEach((dType, idx) => {
          supply.push({
            uid: `sup-dist-${idx}`,
            itemType: dType,
            isTarget: false,
            inBasket: false
          });
        });
        this.state.supplyItems = supply;

        const bodyEl = document.getElementById('st5-stage-body');
        bodyEl.innerHTML = `
          <div class="st5-phaseA-layout">
            <!-- Bàn nguyên liệu bên trái -->
            <div class="st5-supply-table" id="st5-supply-table" aria-label="Bàn nguyên liệu">
              <div style="font-weight:900;color:#4e342e;font-size:1.02rem;text-align:center;">
                🧰 Bàn Nguyên Liệu (Chọn đúng ${meta.name})
              </div>
              <div class="st5-supply-grid" id="st5-supply-grid">
                ${supply.map((s) => `
                  <div class="st5-supply-slot">
                    <div class="st3-produce-item learning-item"
                         id="st5-sup-${s.uid}"
                         data-uid="${s.uid}"
                         aria-label="${this.ITEMS_META[s.itemType].name}">
                      ${this.getProductSVG(s.itemType)}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Bàn đóng gói giỏ hiện tại bên phải -->
            <div class="st5-pack-panel">
              <div class="st5-basket-tabs">
                ${this.state.orders.map((o, idx) => `
                  <span class="st5-basket-tab-pill ${idx === basketIdx ? 'active' : ''} ${o.completedPack ? 'done' : ''}">
                    Giỏ ${idx + 1} ${o.completedPack ? '✓' : ''}
                  </span>
                `).join('')}
              </div>

              <div class="st5-pack-order-header">
                <div style="display:flex;align-items:center;gap:10px;">
                  <div style="width:52px;height:52px;">${this.getProductSVG(order.itemType)}</div>
                  <div>
                    <div style="font-size:0.84rem;font-weight:800;color:#2e7d32;">ĐƠN HÀNG GIỎ ${basketIdx + 1} (${meta.jobTitle}):</div>
                    <div style="font-size:1.15rem;font-weight:900;color:#1b5e20;">${order.count} ${meta.name}</div>
                  </div>
                </div>
                <div style="font-size:1.05rem;font-weight:900;color:#d84315;" id="st5-pack-counter">
                  Đã xếp: ${order.packedCount} / ${order.count}
                </div>
              </div>

              <div class="st5-pack-dropzone" id="st5-pack-dropzone" aria-label="Giỏ đóng gói"></div>

              <button type="button" class="st3-deliver-btn" id="st5-btn-check-pack">
                ✔ Kiểm tra Giỏ ${basketIdx + 1}
              </button>
            </div>
          </div>
        `;

        const stageEl = document.getElementById('station-stage');
        this.currentController = new InteractionController(stageEl);

        const dropzoneEl = document.getElementById('st5-pack-dropzone');
        const tableEl = document.getElementById('st5-supply-table');

        // Đăng ký kéo thả / chạm chọn cho các món trên bàn nguyên liệu
        this.state.supplyItems.forEach((s) => {
          const el = document.getElementById(`st5-sup-${s.uid}`);
          this.currentController.registerDraggable(el, {
            id: s.uid,
            type: 'supply-item',
            data: { uid: s.uid },
            canDrag: () => !s.inBasket
          });
        });

        // Giỏ nhận nguyên liệu (tối đa 9 món)
        this.currentController.registerDropzone(dropzoneEl, {
          acceptTypes: ['supply-item'],
          hitboxPadding: 24,
          onDrop: (itemState) => this._handleAddSupplyToPack(itemState.data.uid, itemState.el)
        });

        // Bàn nhận lại nguyên liệu khi kéo bớt từ giỏ ra
        this.currentController.registerDropzone(tableEl, {
          acceptTypes: ['packed-item'],
          hitboxPadding: 24,
          onDrop: (itemState) => this._handleRemoveSupplyFromPack(itemState.data.uid)
        });

        document.getElementById('st5-btn-check-pack').addEventListener('click', () => {
          this._handleVerifyCurrentPack();
        });

        this._syncPhaseADOM();

        GameEngine.setInstruction(
          `Giai đoạn A (Giỏ ${basketIdx + 1}/3): Bé hãy lấy đúng ${order.count} ${meta.name} cho ${meta.jobTitle} rồi bấm Kiểm tra nhé!`,
          AUDIO_FILES.stations[5].phaseAPack || AUDIO_FILES.stations[5][`round${this.state.roundIndex + 1}`]
        );
        this._setHintTargets(['#st5-supply-grid .st3-produce-item', '#st5-pack-dropzone', '#st5-btn-check-pack']);
      },

      _handleAddSupplyToPack(uid, itemEl) {
        const item = this.state.supplyItems.find((s) => s.uid === uid);
        if (!item || item.inBasket) return false;

        // Nhặt sai loại -> trả về bàn và báo "Chưa đúng loại"
        if (!item.isTarget) {
          GameEngine.triggerEncourageFeedback('wrongType', itemEl);
          return false;
        }

        const currentCount = this.state.supplyItems.filter((s) => s.inBasket).length;
        if (currentCount >= 9) return false;

        item.inBasket = true;
        this.state.orders[this.state.activeBasketIdx].packedCount = currentCount + 1;
        AudioSystem.playTap();
        this._syncPhaseADOM();
        return true;
      },

      _handleRemoveSupplyFromPack(uid) {
        const item = this.state.supplyItems.find((s) => s.uid === uid);
        if (!item || !item.inBasket) return false;

        item.inBasket = false;
        const currentCount = this.state.supplyItems.filter((s) => s.inBasket).length;
        this.state.orders[this.state.activeBasketIdx].packedCount = currentCount;
        AudioSystem.playTap();
        this._syncPhaseADOM();
        return true;
      },

      _syncPhaseADOM() {
        const order = this.state.orders[this.state.activeBasketIdx];
        const inBasket = this.state.supplyItems.filter((s) => s.inBasket);
        order.packedCount = inBasket.length;

        const counterEl = document.getElementById('st5-pack-counter');
        if (counterEl) {
          counterEl.textContent = `Đã xếp: ${order.packedCount} / ${order.count}`;
        }

        this.state.supplyItems.forEach((s) => {
          const el = document.getElementById(`st5-sup-${s.uid}`);
          if (!el) return;
          el.style.opacity = s.inBasket ? '0.2' : '1';
          el.style.pointerEvents = s.inBasket ? 'none' : 'auto';
        });

        const dropzoneEl = document.getElementById('st5-pack-dropzone');
        dropzoneEl.innerHTML = '';

        inBasket.forEach((s, idx) => {
          const pEl = document.createElement('div');
          pEl.className = 'st3-basket-item learning-item';
          pEl.title = 'Chạm để lấy bớt ra';
          pEl.innerHTML = `
            ${this.getProductSVG(s.itemType)}
            <span class="st2-count-badge" style="width:24px;height:24px;font-size:0.8rem;">${idx + 1}</span>
          `;

          this.currentController.registerDraggable(pEl, {
            id: `pack-${s.uid}`,
            type: 'packed-item',
            data: { uid: s.uid },
            canDrag: () => true
          });

          pEl.addEventListener('click', (e) => {
            if (pEl.dataset.justDragged === 'true') return;
            e.stopPropagation();
            this._handleRemoveSupplyFromPack(s.uid);
          });

          dropzoneEl.appendChild(pEl);
        });
      },

      _handleVerifyCurrentPack() {
        const order = this.state.orders[this.state.activeBasketIdx];
        const dropzoneEl = document.getElementById('st5-pack-dropzone');

        // Nếu thiếu hoặc thừa: giữ nguyên giỏ hiện tại để trẻ thêm/bớt
        if (order.packedCount < order.count) {
          GameEngine.triggerEncourageFeedback('notEnough', dropzoneEl);
          return;
        }
        if (order.packedCount > order.count) {
          GameEngine.triggerEncourageFeedback('tooMany', dropzoneEl);
          return;
        }

        // Đúng số lượng yêu cầu!
        order.completedPack = true;
        AudioSystem.playCorrect();

        if (this.state.activeBasketIdx < 2) {
          const nextIdx = this.state.activeBasketIdx + 1;
          GameEngine.triggerCorrectFeedback(
            `Giỏ ${this.state.activeBasketIdx + 1} đã đủ ${order.count} món! Tiếp tục đóng gói Giỏ ${nextIdx + 1} nhé!`,
            AUDIO_FILES.numbers[order.count]
          );
          setTimeout(() => {
            this._startPhaseA_Basket(nextIdx);
          }, 750);
        } else {
          GameEngine.triggerCorrectFeedback(
            'Hoan hô! Bé đã đóng gói xong cả 3 giỏ hàng! Bây giờ mình chuyển sang nối tuyến giao hàng nhé!',
            AUDIO_FILES.feedback.correct
          );
          setTimeout(() => {
            this._startPhaseB_Step1ConnectNumbers();
          }, 850);
        }
      },

      /* ========================================================================
         GIAI ĐOẠN B - BƯỚC 1 (BƯỚC 4): NỐI GIỎ HÀNG VỚI NGƯỜI GIAO HÀNG MANG THẺ SỐ
         ======================================================================== */
      _startPhaseB_Step1ConnectNumbers() {
        this._cleanup();
        this._updatePhasePills('B1');

        const bodyEl = document.getElementById('st5-stage-body');
        const courierColors = ['#0288d1', '#f57c00', '#7b1fa2'];

        bodyEl.innerHTML = `
          <div class="st5-phaseB-board" id="st5-connect-board-1">
            <!-- Cột trái: 3 Giỏ đã đóng gói -->
            <div class="st5-connect-col">
              ${this.state.orders.map((o, idx) => `
                <div class="st5-connect-card learning-item"
                     id="st5-b1-start-${idx}"
                     data-basket-idx="${idx}">
                  <div style="display:flex;align-items:center;gap:8px;">
                    <div style="width:52px;height:52px;">${this.getProductSVG(o.itemType)}</div>
                    <div>
                      <div style="font-weight:900;color:#1b5e20;font-size:1rem;">Giỏ ${idx + 1}: ${this.ITEMS_META[o.itemType].name}</div>
                      <div style="font-weight:800;color:#d84315;font-size:0.92rem;">Số lượng: ${o.count} món</div>
                    </div>
                  </div>
                  <div class="st5-anchor-dot" title="Điểm nối giỏ ${idx + 1}"></div>
                </div>
              `).join('')}
            </div>

            <!-- Cột phải: 3 Người giao hàng mang Thẻ Số (đội mũ bảo hiểm an toàn) -->
            <div class="st5-connect-col">
              ${this.state.courierOrderStep1.map((orderIdx, displayPos) => {
                const o = this.state.orders[orderIdx];
                return `
                  <div class="st5-connect-card learning-item"
                       id="st5-b1-end-${orderIdx}"
                       data-target-idx="${orderIdx}">
                    <div class="st5-anchor-dot" style="background:#0288d1;box-shadow:0 0 0 3px #01579b;"></div>
                    <div style="display:flex;align-items:center;gap:10px;">
                      ${this.getCourierWithHelmetSVG(courierColors[displayPos], false)}
                      <div>
                        <div style="font-size:0.86rem;font-weight:800;color:#455a64;">${o.courierName}</div>
                        <div style="font-size:1.35rem;font-weight:900;color:#bf360c;background:#fff8e1;padding:2px 12px;border-radius:12px;border:2px solid #ffb300;display:inline-block;">
                          Thẻ số ${o.count}
                        </div>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;

        const boardEl = document.getElementById('st5-connect-board-1');
        this.currentConnector = new LineConnectorController(boardEl, {
          onValidatePair: (startId, endId) => startId === endId,
          onMatchSuccess: (startId) => {
            const idx = Number(startId);
            this.state.orders[idx].connectedStep1 = true;
            AudioSystem.playCorrect();

            const allDone = this.state.orders.every((o) => o.connectedStep1);
            if (allDone) {
              GameEngine.triggerCorrectFeedback(
                'Tuyệt vời! Cả 3 giỏ hàng đã nối đúng với Thẻ số của cô chú giao hàng!',
                AUDIO_FILES.feedback.correct
              );
              setTimeout(() => {
                this._startPhaseB_Step2ConnectJobs();
              }, 850);
            }
          },
          onMatchFail: (_startId, _endId, endEl) => {
            GameEngine.triggerEncourageFeedback('recount', endEl);
          }
        });

        this.state.orders.forEach((_, idx) => {
          this.currentConnector.registerStartAnchor(String(idx), document.getElementById(`st5-b1-start-${idx}`));
          this.currentConnector.registerEndAnchor(String(idx), document.getElementById(`st5-b1-end-${idx}`));
        });

        GameEngine.setInstruction(
          'Giai đoạn B (Bước 1): Bé hãy kéo nối (hoặc chạm 2 đầu) từ mỗi Giỏ hàng sang Cô/Chú giao hàng mang Thẻ số tương ứng nhé!',
          AUDIO_FILES.stations[5].phaseBConnectNum
        );
        this._setHintTargets(['#st5-connect-board-1 .st5-connect-card']);

        HandTutorial.autoShowIfFirstTime('connect_line', {
          container: document.getElementById('station-stage'),
          fromEl: document.getElementById('st5-b1-start-0'),
          toEl: document.getElementById('st5-b1-end-0'),
          label: 'Kéo nối hoặc chạm Giỏ hàng rồi chạm Cô/Chú có Thẻ số đúng nhé!'
        });
      },

      /* ========================================================================
         GIAI ĐOẠN B - BƯỚC 2 (BƯỚC 5): NỐI NGƯỜI GIAO HÀNG VỚI KHU VỰC NGHỀ NGHIỆP
         ======================================================================== */
      _startPhaseB_Step2ConnectJobs() {
        this._cleanup();
        this._updatePhasePills('B2');

        const bodyEl = document.getElementById('st5-stage-body');
        const courierColors = ['#0288d1', '#f57c00', '#7b1fa2'];

        bodyEl.innerHTML = `
          <div class="st5-phaseB-board" id="st5-connect-board-2">
            <!-- Cột trái: 3 Cô/Chú giao hàng đã nhận giỏ -->
            <div class="st5-connect-col">
              ${this.state.orders.map((o, idx) => `
                <div class="st5-connect-card learning-item"
                     id="st5-b2-start-${idx}">
                  <div style="display:flex;align-items:center;gap:8px;">
                    ${this.getCourierWithHelmetSVG(courierColors[idx], false)}
                    <div style="width:42px;height:42px;">${this.getProductSVG(o.itemType)}</div>
                    <div>
                      <div style="font-size:0.95rem;font-weight:900;color:#1b5e20;">${o.courierName}</div>
                      <div style="font-size:0.85rem;font-weight:800;color:#e65100;">Chở ${o.count} ${this.ITEMS_META[o.itemType].name}</div>
                    </div>
                  </div>
                  <div class="st5-anchor-dot"></div>
                </div>
              `).join('')}
            </div>

            <!-- Cột phải: 3 Khu vực nghề nghiệp cần sản phẩm -->
            <div class="st5-connect-col">
              ${this.state.jobOrderStep2.map((orderIdx) => {
                const o = this.state.orders[orderIdx];
                const meta = this.ITEMS_META[o.itemType];
                return `
                  <div class="st5-connect-card learning-item"
                       id="st5-b2-end-${orderIdx}">
                    <div class="st5-anchor-dot" style="background:#43a047;box-shadow:0 0 0 3px #1b5e20;"></div>
                    <div style="display:flex;align-items:center;gap:10px;">
                      ${this.getDestinationSceneSVG(meta.jobId, false)}
                      <div>
                        <div style="font-size:1rem;font-weight:900;color:#1b5e20;">${meta.jobTitle}</div>
                        <div style="font-size:0.86rem;font-weight:800;color:#546e7a;">📍 ${meta.placeName}</div>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;

        const boardEl = document.getElementById('st5-connect-board-2');
        this.currentConnector = new LineConnectorController(boardEl, {
          onValidatePair: (startId, endId) => startId === endId,
          onMatchSuccess: (startId) => {
            const idx = Number(startId);
            this.state.orders[idx].connectedStep2 = true;
            AudioSystem.playCorrect();

            const allDone = this.state.orders.every((o) => o.connectedStep2);
            if (allDone) {
              GameEngine.triggerCorrectFeedback(
                'Chính xác! Cả 3 tuyến đường giao hàng tới Khu làng nghề đã sẵn sàng!',
                AUDIO_FILES.feedback.correct
              );
              setTimeout(() => {
                this._startPhaseC_DeliveryTown();
              }, 850);
            }
          },
          onMatchFail: (_startId, _endId, endEl) => {
            GameEngine.triggerEncourageFeedback('wrongType', endEl);
          }
        });

        this.state.orders.forEach((_, idx) => {
          this.currentConnector.registerStartAnchor(String(idx), document.getElementById(`st5-b2-start-${idx}`));
          this.currentConnector.registerEndAnchor(String(idx), document.getElementById(`st5-b2-end-${idx}`));
        });

        GameEngine.setInstruction(
          'Giai đoạn B (Bước 2): Bé hãy nối từng Cô/Chú giao hàng với đúng Khu vực nghề nghiệp cần sản phẩm đó nhé!',
          AUDIO_FILES.stations[5].phaseBConnectJob
        );
        this._setHintTargets(['#st5-connect-board-2 .st5-connect-card']);
      },

      /* ========================================================================
         GIAI ĐOẠN C (BƯỚC 7 - 12): CHẠM XE GIAO HÀNG CHẠY TRÊN ĐƯỜNG ĐỊNH SẴN
         VÀ LÀM ĐẸP KHU LÀNG
         ======================================================================== */
      _startPhaseC_DeliveryTown() {
        this._cleanup();
        this._updatePhasePills('C');

        const bodyEl = document.getElementById('st5-stage-body');
        const courierColors = ['#0288d1', '#f57c00', '#7b1fa2'];

        bodyEl.innerHTML = `
          <div class="st5-phaseC-town" id="st5-phaseC-town">
            ${this.state.orders.map((o, idx) => {
              const meta = this.ITEMS_META[o.itemType];
              return `
                <div class="st5-delivery-lane" id="st5-lane-${idx}">
                  <div class="st5-road-line"></div>

                  <!-- Xe giao hàng chạy trên đường định sẵn -->
                  <div class="st5-courier-scooter learning-item"
                       id="st5-scooter-${idx}"
                       role="button"
                       tabindex="0"
                       aria-label="Chạm để ${o.courierName} khởi hành giao ${meta.name}">
                    ${this.getCourierWithHelmetSVG(courierColors[idx], true)}
                  </div>

                  <!-- Khu vực nghề nghiệp nhận hàng & làm đẹp làng -->
                  <div class="st5-destination-card" id="st5-dest-${idx}">
                    <div>
                      <div style="font-size:0.95rem;font-weight:900;color:#1b5e20;">${meta.jobTitle}</div>
                      <div style="font-size:0.82rem;font-weight:800;color:#e65100;" id="st5-dest-status-${idx}">
                        ⏳ Chờ ${o.count} ${meta.name}
                      </div>
                    </div>
                    <div id="st5-dest-scene-${idx}">
                      ${this.getDestinationSceneSVG(meta.jobId, false)}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;

        this.state.orders.forEach((o, idx) => {
          const scooterEl = document.getElementById(`st5-scooter-${idx}`);
          const onTrigger = () => this._handleDispatchScooter(idx);
          scooterEl.addEventListener('click', onTrigger);
          scooterEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onTrigger();
            }
          });
        });

        GameEngine.setInstruction(
          'Giai đoạn C: Bé hãy chạm vào từng Cô/Chú giao hàng để xe chạy trên đường an toàn tới làm đẹp khu làng nhé!',
          AUDIO_FILES.stations[5].phaseCDeliver
        );
        this._setHintTargets(['.st5-courier-scooter:not(.delivered)']);
      },

      _handleDispatchScooter(idx) {
        const order = this.state.orders[idx];
        if (!order || order.delivered || order.driving) return;
        order.driving = true;

        const laneEl = document.getElementById(`st5-lane-${idx}`);
        const scooterEl = document.getElementById(`st5-scooter-${idx}`);
        const destEl = document.getElementById(`st5-dest-${idx}`);
        if (!laneEl || !scooterEl || !destEl) return;

        AudioSystem.playCarHorn();

        // Tính khoảng cách an toàn trên đường định sẵn tới trước khu vực người nhận
        const laneRect = laneEl.getBoundingClientRect();
        const scooterRect = scooterEl.getBoundingClientRect();
        const destRect = destEl.getBoundingClientRect();
        const travelX = Math.max(40, destRect.left - scooterRect.left - scooterRect.width - 12);

        scooterEl.style.transform = `translateX(${travelX}px)`;
        scooterEl.classList.add('delivered');
        scooterEl.removeAttribute('data-hint-target');
        scooterEl.classList.remove('idle-hint-glow');

        // Khi xe dừng đúng nơi nhận (sau 1.25 giây) -> Làm đẹp khu làng
        setTimeout(() => {
          order.delivered = true;
          const meta = this.ITEMS_META[order.itemType];
          AudioSystem.playCorrect();

          destEl.classList.add('beautified');
          const sceneHolder = document.getElementById(`st5-dest-scene-${idx}`);
          if (sceneHolder) {
            sceneHolder.innerHTML = this.getDestinationSceneSVG(meta.jobId, true);
          }
          const statusEl = document.getElementById(`st5-dest-status-${idx}`);
          if (statusEl) {
            statusEl.style.color = '#2e7d32';
            statusEl.textContent = `✨ ${meta.placeName} rực rỡ!`;
          }

          const allDelivered = this.state.orders.every((o) => o.delivered);
          if (allDelivered) {
            GameEngine.triggerCorrectFeedback(
              'Tuyệt vời! Cả 3 khu vực trong Thị trấn nghề nghiệp đã được làm đẹp rực rỡ!',
              AUDIO_FILES.stations[5].phaseCComplete || AUDIO_FILES.feedback.correct
            );
            setTimeout(() => {
              GameEngine.completeCurrentRound(
                'Bé đã đóng gói đúng số lượng 3 giỏ hàng, nối đúng thẻ số và nghề nghiệp, và giao hàng làm đẹp toàn bộ Thị trấn!'
              );
            }, 1250);
          } else {
            this._setHintTargets(['.st5-courier-scooter:not(.delivered)']);
          }
        }, 1250);
      },

      _playCurrentPhaseDemo(stageEl) {
        if (this.state.phase === 'A') {
          const avail = this.state.supplyItems.find((s) => s.isTarget && !s.inBasket);
          const dropzoneEl = document.getElementById('st5-pack-dropzone');
          if (avail && dropzoneEl) {
            HandTutorial.playDemo('drag_drop', {
              container: stageEl,
              fromEl: document.getElementById(`st5-sup-${avail.uid}`),
              toEl: dropzoneEl,
              label: 'Đưa đúng sản phẩm vào giỏ cho đủ số lượng rồi bấm Kiểm tra nhé!'
            });
          }
        } else if (this.state.phase === 'B1') {
          const idx = this.state.orders.findIndex((o) => !o.connectedStep1);
          const targetIdx = idx >= 0 ? idx : 0;
          HandTutorial.playDemo('connect_line', {
            container: stageEl,
            fromEl: document.getElementById(`st5-b1-start-${targetIdx}`),
            toEl: document.getElementById(`st5-b1-end-${targetIdx}`),
            label: 'Nối Giỏ hàng với Cô/Chú giao hàng mang Thẻ số tương ứng nhé!'
          });
        } else if (this.state.phase === 'B2') {
          const idx = this.state.orders.findIndex((o) => !o.connectedStep2);
          const targetIdx = idx >= 0 ? idx : 0;
          HandTutorial.playDemo('connect_line', {
            container: stageEl,
            fromEl: document.getElementById(`st5-b2-start-${targetIdx}`),
            toEl: document.getElementById(`st5-b2-end-${targetIdx}`),
            label: 'Nối Cô/Chú giao hàng với đúng Khu vực nghề nghiệp cần sản phẩm nhé!'
          });
        } else if (this.state.phase === 'C') {
          const idx = this.state.orders.findIndex((o) => !o.delivered);
          const targetIdx = idx >= 0 ? idx : 0;
          HandTutorial.playDemo('tap_count', {
            container: stageEl,
            fromEl: document.getElementById(`st5-scooter-${targetIdx}`),
            label: 'Chạm vào từng Cô/Chú giao hàng để xe lăn bánh tới làm đẹp làng nhé!'
          });
        }
      }
    };

    // Đăng ký Trạm 4 và Trạm 5 vào GameEngine
    GameEngine.registerStation(4, Station4Train);
    GameEngine.registerStation(5, Station5Town);
/* ==========================================================================
       BƯỚC 5.1: CSS NÂNG CẤP CHO ĐẠI LỄ HỘI "NGÀY HỘI XANH" & HUY HIỆU KỶ NIỆM
       ========================================================================== */
    (function injectStep5Styles() {
      const style = document.createElement('style');
      style.id = 'step5-styles';
      style.textContent = `
        /* --- Bố cục toàn cảnh Ngày Hội Xanh --- */
        .fest-grand-layout {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 8px;
          z-index: 5;
        }

        .fest-top-banner {
          background: rgba(255, 255, 255, 0.92);
          border: 4px solid #ff9800;
          border-radius: 24px;
          padding: 8px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          box-shadow: 0 6px 16px rgba(0,0,0,0.14);
        }

        .fest-zones-grid {
          flex: 1;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 10px;
          overflow: hidden;
        }

        .fest-zone-card {
          position: relative;
          background: rgba(255, 255, 255, 0.9);
          border: 4px solid #43a047;
          border-radius: 24px;
          padding: 8px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 6px 14px rgba(0,0,0,0.12);
          overflow: hidden;
        }

        .fest-zone-title {
          font-size: 0.96rem;
          font-weight: 900;
          color: #1b5e20;
          background: #e8f5e9;
          padding: 3px 12px;
          border-radius: 999px;
          border: 2px solid #81c784;
          z-index: 3;
        }

        /* Góc 1: Vườn hoa 9 bông khoe sắc */
        .fest-flowers-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          flex-wrap: wrap;
          flex: 1;
          width: 100%;
        }

        .fest-flower-btn {
          width: clamp(44px, 5.2vw, 60px);
          height: clamp(48px, 5.6vw, 64px);
          position: relative;
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .fest-flower-btn:hover,
        .fest-flower-btn.bloomed-pop {
          transform: scale(1.16) translateY(-4px);
        }

        /* Góc 2: Chuyến tàu thú rừng diễu hành */
        .fest-train-parade-track {
          position: relative;
          width: 100%;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          cursor: pointer;
        }

        .fest-mini-train {
          display: flex;
          align-items: flex-end;
          gap: 6px;
          transition: transform 0.8s cubic-bezier(0.34, 1.3, 0.64, 1);
        }
        .fest-mini-train.chug-hop {
          transform: translateX(18px) translateY(-6px);
        }

        /* Góc 3: Quầy nông sản & Bàn tiệc lễ hội */
        .fest-market-feast {
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 100%;
          flex: 1;
          gap: 8px;
          cursor: pointer;
        }

        /* Góc 4: Cô chú làng nghề & Thỏ Bông chúc mừng */
        .fest-heroes-stage {
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          width: 100%;
          flex: 1;
          gap: 6px;
        }

        .fest-hero-figure {
          width: clamp(62px, 7.5vw, 88px);
          height: clamp(68px, 8.2vw, 96px);
          cursor: pointer;
          transition: transform 0.2s ease;
          position: relative;
        }
        .fest-hero-figure:hover {
          transform: translateY(-6px) scale(1.08);
        }

        /* Thanh nút tương tác kỷ niệm dưới cùng */
        .fest-bottom-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          z-index: 6;
        }

        /* Hộp thoại Huy Hiệu Kỷ Niệm Hành Trình Xanh */
        #fest-souvenir-modal {
          position: absolute;
          inset: 0;
          z-index: 55;
          background: rgba(15, 50, 25, 0.68);
          backdrop-filter: blur(4px);
          display: none;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }
        #fest-souvenir-modal.active {
          display: flex;
        }

        .fest-souvenir-card {
          background: linear-gradient(180deg, #ffffff 0%, #fffde7 100%);
          border: 6px solid #ffb300;
          border-radius: 32px;
          padding: 22px 28px;
          max-width: 560px;
          width: 94%;
          text-align: center;
          box-shadow: 0 20px 45px rgba(0,0,0,0.38);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          animation: popStar 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @media (max-width: 860px) {
          .fest-zones-grid {
            grid-template-columns: 1fr;
            overflow-y: auto;
          }
          .fest-zone-card {
            min-height: 145px;
          }
        }
      `;
      document.head.appendChild(style);
    })();

    /* ==========================================================================
       BƯỚC 5.2: HỆ THỐNG DỌN DẸP TÀI NGUYÊN & CHỐNG GẮN LẶP SỰ KIỆN
       - Đảm bảo mỗi khi chuyển màn hình, đổi trạm hoặc đổi vòng chơi:
         + Xóa toàn bộ timer trạm đang chạy.
         + Hủy trạng thái kéo thả, đường nối SVG tạm và bàn tay làm mẫu.
         + Dọn sạch hàng đợi âm thanh.
       ========================================================================== */
    const LifecycleGuard = {
      stationTimers: new Set(),

      setManagedTimeout(fn, delayMs) {
        const id = setTimeout(() => {
          this.stationTimers.delete(id);
          fn();
        }, delayMs);
        this.stationTimers.add(id);
        return id;
      },

      clearAllStationResources() {
        // 1. Dọn toàn bộ timer chuyển bước đang chờ
        this.stationTimers.forEach((id) => clearTimeout(id));
        this.stationTimers.clear();

        // 2. Dừng bàn tay SVG làm mẫu và âm thanh đang phát
        if (window.HandTutorial) {
          HandTutorial.stop();
        }
        if (window.AudioSystem) {
          AudioSystem.clearQueue();
        }
        if (window.IdleHintSystem) {
          IdleHintSystem.clearHintGlow();
        }

        // 3. Dọn dẹp bộ điều khiển tương tác của từng trạm (Trạm 1 -> Trạm 5)
        const stations = [
          window.Station1Garden,
          window.Station2Forest,
          window.Station3Market,
          window.Station4Train,
          window.Station5Town
        ];

        stations.forEach((st) => {
          if (!st) return;
          if (typeof st._cleanup === 'function') {
            st._cleanup();
          }
          if (st.currentController && typeof st.currentController.destroy === 'function') {
            st.currentController.destroy();
            st.currentController = null;
          }
          if (st.currentConnector && typeof st.currentConnector.destroy === 'function') {
            st.currentConnector.destroy();
            st.currentConnector = null;
          }
        });

        // 4. Xóa mọi phần tử kéo nổi hoặc bàn tay mẫu còn sót trên body
        document.querySelectorAll(
          '.ix-drag-ghost, .hand-tutorial-actor, .hand-tutorial-clone'
        ).forEach((el) => el.remove());
      }
    };

    /* ==========================================================================
       BƯỚC 5.3: CẢNH ĐẠI LỄ HỘI "NGÀY HỘI XANH" (TÍCH HỢP ĐỦ 5 TRẠM)
       ========================================================================== */
    const FestivalGrandScene = {
      flowerCounter: 0,

      getSouvenirBadgeSVG() {
        return `
          <svg viewBox="0 0 140 130" width="120" height="110">
            <!-- Ruy băng huy chương -->
            <polygon points="44,82 28,124 48,116 58,90" fill="#e53935" stroke="#b71c1c" stroke-width="2.5"/>
            <polygon points="96,82 112,124 92,116 82,90" fill="#e53935" stroke="#b71c1c" stroke-width="2.5"/>
            <!-- Vòng nguyệt quế xanh -->
            <circle cx="70" cy="56" r="44" fill="#fff9c4" stroke="#43a047" stroke-width="6" stroke-dasharray="12 6"/>
            <circle cx="70" cy="56" r="36" fill="#ffd54f" stroke="#f57f17" stroke-width="4"/>
            <!-- Ngôi sao lớn ở tâm -->
            <polygon points="70,24 79,43 100,46 84,60 88,81 70,70 52,81 56,60 40,46 61,43"
                     fill="#fffde7" stroke="#e65100" stroke-width="3" stroke-linejoin="round"/>
          </svg>
        `;
      },

      render() {
        const festivalCard = document.querySelector('#screen-festival .festival-stage-card');
        if (!festivalCard) return;

        this.flowerCounter = 0;
        const flowerTypes = [
          'sunflower', 'rose', 'tulip',
          'sunflower', 'rose', 'tulip',
          'sunflower', 'rose', 'tulip'
        ];

        festivalCard.innerHTML = `
          <div class="fest-grand-layout">
            <!-- Tiêu đề lễ hội -->
            <div class="fest-top-banner">
              <div style="display:flex;align-items:center;gap:12px;">
                <div style="width:62px;height:62px;">${SVG_LIB.getThoBongSVG('happy')}</div>
                <div style="text-align:left;">
                  <div style="font-size:0.88rem;font-weight:900;color:#e65100;">
                    🎉 CHÚC MỪNG BÉ ĐÃ KHÁM PHÁ ĐỦ 5 TRẠM XANH 🎉
                  </div>
                  <div style="font-size:clamp(1.2rem,2.4vw,1.65rem);font-weight:900;color:#1b5e20;">
                    ĐẠI LỄ HỘI NGÀY HỘI XANH — ĐẾM VUI ĐẾN 9
                  </div>
                </div>
              </div>
              <div id="fest-live-message" style="font-size:1rem;font-weight:800;color:#bf360c;background:#fff8e1;padding:6px 14px;border-radius:999px;border:2px solid #ffb300;">
                👆 Bé hãy chạm vào vườn hoa, đoàn tàu, quầy chợ và các cô chú nhé!
              </div>
            </div>

            <!-- 4 Góc tương tác hội tụ đủ 5 trạm -->
            <div class="fest-zones-grid">
              <!-- Góc 1: Vườn Hoa Khoe Sắc (Trạm 1 - 9 bông hoa đếm 1..9) -->
              <div class="fest-zone-card" id="fest-zone-garden">
                <span class="fest-zone-title">🌸 Vườn Hoa 9 Bông Khoe Sắc (Chạm đếm 1 – 9)</span>
                <div class="fest-flowers-row" id="fest-flowers-row">
                  ${flowerTypes.map((fType, idx) => `
                    <div class="fest-flower-btn learning-item"
                         data-flower-idx="${idx}"
                         role="button"
                         tabindex="0"
                         aria-label="Hoa lễ hội ${idx + 1}">
                      ${Station1Garden.getPlantSpotSVG('bloom', fType)}
                      <span class="st1-flower-num-badge" id="fest-fl-badge-${idx}" style="display:none;"></span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Góc 2: Chuyến Tàu Thú Rừng Du Hội (Trạm 2 & Trạm 4) -->
              <div class="fest-zone-card" id="fest-zone-train">
                <span class="fest-zone-title">🚂 Chuyến Tàu Thú Rừng Đi Hội (Chạm hú còi)</span>
                <div class="fest-train-parade-track" id="fest-train-trigger" role="button" tabindex="0">
                  <div class="fest-mini-train" id="fest-mini-train">
                    ${Station2Forest.getTrainEngineSVG()}
                    <div style="display:flex;gap:4px;background:#29b6f6;padding:6px 10px;border-radius:16px;border:3px solid #01579b;">
                      <div style="width:52px;height:52px;">${Station2Forest.getAnimalSVG('duck')}</div>
                      <div style="width:52px;height:52px;">${Station2Forest.getAnimalSVG('deer')}</div>
                      <div style="width:52px;height:52px;">${Station2Forest.getAnimalSVG('squirrel')}</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Góc 3: Bàn Tiệc Nông Sản & Heo Đất Vàng (Trạm 3) -->
              <div class="fest-zone-card" id="fest-zone-market">
                <span class="fest-zone-title">🥕 Quầy Nông Sản & Heo Đất Vui Nhộn</span>
                <div class="fest-market-feast" id="fest-market-trigger" role="button" tabindex="0">
                  <div style="width:62px;height:62px;">${Station3Market.getProduceSVG('apple')}</div>
                  <div style="width:62px;height:62px;">${Station3Market.getProduceSVG('corn')}</div>
                  <div style="width:62px;height:62px;">${Station3Market.getProduceSVG('carrot')}</div>
                  <div>${Station3Market.getPiggyBankSVG()}</div>
                </div>
              </div>

              <!-- Góc 4: Các Cô Chú Làng Nghề & Thỏ Bông Chúc Mừng (Trạm 5) -->
              <div class="fest-zone-card" id="fest-zone-town">
                <span class="fest-zone-title">🏘️ Các Cô Chú Làng Nghề Chúc Mừng Bé</span>
                <div class="fest-heroes-stage" id="fest-heroes-stage">
                  <div class="fest-hero-figure learning-item" data-hero="gardener" title="Bác Làm Vườn">
                    ${SVG_LIB.getGardenerSVG('happy')}
                  </div>
                  <div class="fest-hero-figure learning-item" data-hero="chef" title="Đầu Bếp Lễ Hội">
                    ${SVG_LIB.getFriendCharacterSVG('chef', 'happy')}
                  </div>
                  <div class="fest-hero-figure learning-item" data-hero="courier" title="Cô Chú Giao Hàng">
                    ${Station5Town.getCourierWithHelmetSVG('#0288d1', true)}
                  </div>
                  <div class="fest-hero-figure learning-item" data-hero="bunny" title="Thỏ Bông">
                    ${SVG_LIB.getThoBongSVG('happy')}
                  </div>
                </div>
              </div>
            </div>

            <!-- Hàng nút điều khiển lễ hội & Kỷ niệm -->
            <div class="fest-bottom-actions">
              <button id="btn-festival-fireworks" class="btn-primary-giant" type="button" style="min-height:62px;font-size:1.18rem;padding:10px 24px;">
                ✨ Bắn pháo hoa ngôi sao
              </button>
              <button id="btn-festival-souvenir" class="hud-btn" type="button" style="min-height:62px;font-size:1.15rem;background:#ab47bc;color:#fff;border-color:#6a1b9a;">
                🏅 Nhận Huy Hiệu Kỷ Niệm
              </button>
              <button id="btn-festival-back-map" class="hud-btn btn-orange" type="button" style="min-height:62px;font-size:1.15rem;">
                🗺️ Quay lại bản đồ
              </button>
            </div>

            <!-- Hộp thoại Huy Hiệu Kỷ Niệm -->
            <div id="fest-souvenir-modal" role="dialog" aria-modal="true">
              <div class="fest-souvenir-card">
                <div>${this.getSouvenirBadgeSVG()}</div>
                <h3 style="font-size:1.65rem;font-weight:900;color:#1b5e20;">
                  HUY HIỆU ĐẠI SỨ HÀNH TRÌNH XANH
                </h3>
                <p id="fest-souvenir-stats" style="font-size:1.15rem;font-weight:800;color:#d84315;"></p>
                <p style="font-size:1.02rem;font-weight:700;color:#37474f;">
                  Chúc mừng bé đã biết phân loại, đếm giỏi từ 1 đến 9, giao tiếp lịch sự và yêu thiên nhiên xanh!
                </p>
                <button type="button" id="btn-close-souvenir" class="btn-primary-giant" style="min-height:58px;font-size:1.15rem;padding:8px 28px;">
                  🌟 Tuyệt vời quá!
                </button>
              </div>
            </div>
          </div>
        `;

        this._bindFestivalEvents();
      },

      _bindFestivalEvents() {
        const liveMsg = document.getElementById('fest-live-message');

        // 1. Tương tác chạm đếm 9 bông hoa nở trong lễ hội
        document.querySelectorAll('#fest-flowers-row .fest-flower-btn').forEach((flEl) => {
          flEl.addEventListener('click', () => {
            this.flowerCounter = (this.flowerCounter % 9) + 1;
            const num = this.flowerCounter;
            AudioSystem.playWater();
            AudioSystem.enqueueCountNumber(num, num === 9);

            flEl.classList.add('bloomed-pop');
            setTimeout(() => flEl.classList.remove('bloomed-pop'), 380);

            const badge = flEl.querySelector('.st1-flower-num-badge');
            if (badge) {
              badge.style.display = 'flex';
              badge.textContent = String(num);
            }
            if (liveMsg) {
              liveMsg.textContent = `🌸 Bé vừa chạm bông hoa số ${num}! Vườn hoa Ngày Hội Xanh thơm ngát!`;
            }
            GameEngine.spawnStarBurst(6);
          });
        });

        // 2. Tương tác chạm Đoàn tàu thú rừng
        const trainTrigger = document.getElementById('fest-train-trigger');
        const miniTrain = document.getElementById('fest-mini-train');
        if (trainTrigger && miniTrain) {
          trainTrigger.addEventListener('click', () => {
            AudioSystem.playTrainHorn();
            miniTrain.classList.add('chug-hop');
            setTimeout(() => miniTrain.classList.remove('chug-hop'), 750);
            if (liveMsg) {
              liveMsg.textContent = '🚂 Tu tu xình xịch! Các bạn Vịt, Hươu Sao, Sóc Nâu vẫy chào bé!';
            }
            GameEngine.spawnStarBurst(10);
          });
        }

        // 3. Tương tác chạm Quầy nông sản & Heo đất
        const marketTrigger = document.getElementById('fest-market-trigger');
        if (marketTrigger) {
          marketTrigger.addEventListener('click', () => {
            AudioSystem.playCoin();
            if (liveMsg) {
              liveMsg.textContent = '🪙 Leng keng! Quầy nông sản sạch và Heo đất chúc bé luôn chăm ngoan!';
            }
            GameEngine.spawnStarBurst(10);
          });
        }

        // 4. Tương tác chạm các Cô Chú Làng Nghề & Thỏ Bông
        document.querySelectorAll('#fest-heroes-stage .fest-hero-figure').forEach((heroEl) => {
          heroEl.addEventListener('click', () => {
            const role = heroEl.getAttribute('data-hero');
            if (role === 'courier') {
              AudioSystem.playCarHorn();
              if (liveMsg) liveMsg.textContent = '🛵 Cô chú giao hàng cảm ơn bé đã nối đúng tuyến đường an toàn!';
            } else {
              AudioSystem.playCorrect();
              if (liveMsg) liveMsg.textContent = '💛 Thỏ Bông và các cô chú làng nghề khen bé đếm đến 9 rất giỏi!';
            }
            GameEngine.spawnStarBurst(8);
          });
        });

        // 5. Nút Bắn pháo hoa ngôi sao
        const btnFireworks = document.getElementById('btn-festival-fireworks');
        if (btnFireworks) {
          btnFireworks.addEventListener('click', () => {
            AudioSystem.playFanfare();
            GameEngine.spawnStarBurst(28);
            AudioSystem.speakSingle(AUDIO_FILES.feedback.festivalCelebration);
          });
        }

        // 6. Nút Nhận Huy Hiệu Kỷ Niệm
        const btnSouvenir = document.getElementById('btn-festival-souvenir');
        const souvenirModal = document.getElementById('fest-souvenir-modal');
        const btnCloseSouvenir = document.getElementById('btn-close-souvenir');
        const statsEl = document.getElementById('fest-souvenir-stats');

        if (btnSouvenir && souvenirModal) {
          btnSouvenir.addEventListener('click', () => {
            AudioSystem.playFanfare();
            GameEngine.spawnStarBurst(24);
            let totalCompletedRounds = 0;
            for (let s = 1; s <= 5; s++) {
              const r = AppState.data.completedRounds[s] || [];
              totalCompletedRounds += r.filter(Boolean).length;
            }
            if (statsEl) {
              statsEl.textContent = `⭐ Tổng số sao của bé: ${AppState.data.stars} Sao | Đã hoàn thành: ${totalCompletedRounds}/15 vòng chơi`;
            }
            souvenirModal.classList.add('active');
            AudioSystem.speakSingle(AUDIO_FILES.feedback.festivalCelebration);
          });
        }

        if (btnCloseSouvenir && souvenirModal) {
          btnCloseSouvenir.addEventListener('click', () => {
            AudioSystem.playTap();
            souvenirModal.classList.remove('active');
          });
        }

        // 7. Nút Quay lại bản đồ
        const btnBackMap = document.getElementById('btn-festival-back-map');
        if (btnBackMap) {
          btnBackMap.addEventListener('click', () => {
            AudioSystem.playTap();
            GameEngine.switchScreen('map');
          });
        }
      }
    };

    /* ==========================================================================
       BƯỚC 5.4: KẾT NỐI ĐỒNG BỘ 5 TRẠM & KIỂM TRA TÍNH TOÀN VẸN HỆ THỐNG
       ========================================================================== */
    (function integrateAllStationsAndGuards() {
      // 1. Ghi đè hàm renderFestivalScene của GameEngine bằng FestivalGrandScene đầy đủ
      GameEngine.renderFestivalScene = function() {
        FestivalGrandScene.render();
      };

      // 2. Bọc an toàn switchScreen để luôn dọn sạch timer/ghost/connector trước khi chuyển cảnh
      const originalSwitchScreen = GameEngine.switchScreen.bind(GameEngine);
      GameEngine.switchScreen = function(screenName) {
        LifecycleGuard.clearAllStationResources();
        if (screenName === 'festival') {
          FestivalGrandScene.render();
        }
        originalSwitchScreen(screenName);
      };

      // 3. Bọc an toàn loadStationRoundStage để luôn dọn sạch tài nguyên khi đổi vòng
      const originalLoadStage = GameEngine.loadStationRoundStage.bind(GameEngine);
      GameEngine.loadStationRoundStage = function(stationId, roundIndex) {
        LifecycleGuard.clearAllStationResources();
        originalLoadStage(stationId, roundIndex);
      };

      // 4. Hàm tự kiểm tra kết nối cả 5 trạm
      GameEngine.verifyAllStationsIntegration = function() {
        const report = {
          stationsRegistered: [],
          missingStations: [],
          audioConfigReady: Boolean(window.AUDIO_FILES && AUDIO_FILES.numbers && AUDIO_FILES.stations),
          interactionEngineReady: Boolean(window.InteractionController && window.LineConnectorController && window.HandTutorial)
        };
        for (let id = 1; id <= 5; id++) {
          if (this.stationModules[id] && typeof this.stationModules[id].render === 'function') {
            report.stationsRegistered.push(id);
          } else {
            report.missingStations.push(id);
          }
        }
        return report;
      };
    })();
    // Khởi chạy ứng dụng khi trang tải xong
    window.addEventListener('DOMContentLoaded', () => {
      GameEngine.init();
    });
  </script>
</body>
</html>
