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