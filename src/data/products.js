import pogiKimchiImage from '../assets/prod_101_pogi_kimchi.png';
import gatKimchiImage from '../assets/prod_102_gat_kimchi.png';
import namulSetImage from '../assets/prod_103_namul_set.png';
import myeongranImage from '../assets/prod_104_myeongran.png';
import ganjangGejangImage from '../assets/prod_105_ganjang_gejang.png';
import chonggakKimchiImage from '../assets/prod_106_chonggak_kimchi.png';
import yakgwaImage from '../assets/prod_201_yakgwa.png';
import yugwaImage from '../assets/prod_202_yugwa.png';
import omegiTteokImage from '../assets/prod_203_omegi_tteok.png';
import walnutPersimmonImage from '../assets/prod_204_walnut_persimmon.png';
import injeolmiImage from '../assets/prod_205_injeolmi.png';
import dorajiStickImage from '../assets/prod_301_doraji_stick.png';
import dorajiCheongImage from '../assets/prod_302_doraji_cheong.png';
import dorajiTeaImage from '../assets/prod_303_doraji_tea.png';
import tangerineCheongImage from '../assets/prod_304_tangerine_cheong.png';
import sujeonggwaImage from '../assets/prod_305_sujeonggwa.png';
import driedDorajiImage from '../assets/prod_401_dried_doraji.png';
import pineMushroomImage from '../assets/prod_402_pine_mushroom.png';
import hanwooSetImage from '../assets/prod_403_hanwoo_set.png';
import gulbiSetImage from '../assets/prod_404_gulbi_set.png';
import abaloneImage from '../assets/prod_405_abalone.png';
import mealKitImage from '../assets/category_meal_kit.png';

export const products = [
    // 1. 김치/반찬 (Kimchi/Sides) - 20 Items
    { id: 101, title: '솔담 명품 포기김치 5kg', price: 45000, category: '김치/반찬', image: pogiKimchiImage, description: '국내산 배추와 태양초 고춧가루로 담근 시원하고 아삭한 명품 포기김치입니다.', discount: 10, rating: 4.8, reviews: 128, freeShipping: true },
    { id: 102, title: '여수 돌산 갓김치 2kg', price: 28000, category: '김치/반찬', image: gatKimchiImage, description: '여수 돌산의 톡 쏘는 맛이 일품인 별미 갓김치입니다.', discount: 5, rating: 4.7, reviews: 85, freeShipping: false },
    { id: 103, title: '프리미엄 나물 반찬 5종 세트', price: 32000, category: '김치/반찬', image: namulSetImage, description: '시금치, 고사리, 도라지 등 제철 나물로 구성된 건강 반찬 세트입니다.', discount: 0, rating: 4.9, reviews: 42, freeShipping: true },
    { id: 104, title: '저염 명란젓 500g', price: 25000, category: '김치/반찬', image: myeongranImage, description: '짜지 않고 담백한 최상급 저염 명란젓입니다.', discount: 15, rating: 4.6, reviews: 210, freeShipping: false },
    { id: 105, title: '밥도둑 간장게장 2마리', price: 55000, category: '김치/반찬', image: ganjangGejangImage, description: '알이 꽉 찬 서해안 암꽃게로 담근 감칠맛 나는 간장게장입니다.', discount: 20, rating: 4.9, reviews: 350, freeShipping: true },
    { id: 106, title: '총각김치 3kg', price: 35000, category: '김치/반찬', image: chonggakKimchiImage, description: '아삭아삭 씹히는 맛이 일품인 국내산 총각김치입니다.', discount: 0, rating: 4.7, reviews: 95, freeShipping: true },
    { id: 107, title: '파김치 1kg', price: 18000, category: '김치/반찬', image: pogiKimchiImage, description: '알싸한 쪽파의 향이 살아있는 밥도둑 파김치입니다.', discount: 5, rating: 4.5, reviews: 60, freeShipping: false },
    { id: 108, title: '백김치 3kg', price: 28000, category: '김치/반찬', image: pogiKimchiImage, description: '시원하고 깔끔한 국물 맛이 일품인 백김치입니다.', discount: 10, rating: 4.8, reviews: 72, freeShipping: false },
    { id: 109, title: '오이소박이 1kg', price: 15000, category: '김치/반찬', image: pogiKimchiImage, description: '아삭한 오이와 부추의 조화가 좋은 오이소박이입니다.', discount: 0, rating: 4.6, reviews: 45, freeShipping: false },
    { id: 110, title: '깍두기 2kg', price: 16000, category: '김치/반찬', image: chonggakKimchiImage, description: '설렁탕집 그 맛 그대로, 시원하고 달큰한 깍두기입니다.', discount: 0, rating: 4.7, reviews: 88, freeShipping: false },
    { id: 111, title: '양념 깻잎지 500g', price: 12000, category: '김치/반찬', image: namulSetImage, description: '향긋한 깻잎에 매콤달콤한 양념을 더한 밥반찬입니다.', discount: 5, rating: 4.5, reviews: 110, freeShipping: false },
    { id: 112, title: '진미채 볶음 300g', price: 13000, category: '김치/반찬', image: namulSetImage, description: '부드러운 진미채를 매콤하게 볶아낸 국민 밑반찬입니다.', discount: 0, rating: 4.8, reviews: 150, freeShipping: false },
    { id: 113, title: '메추리알 장조림 500g', price: 11000, category: '김치/반찬', image: namulSetImage, description: '짜지 않고 담백하여 아이들도 좋아하는 메추리알 장조림입니다.', discount: 10, rating: 4.9, reviews: 200, freeShipping: false },
    { id: 114, title: '낙지젓갈 500g', price: 22000, category: '김치/반찬', image: myeongranImage, description: '통통한 낙지의 식감이 살아있는 매콤한 낙지젓갈입니다.', discount: 5, rating: 4.7, reviews: 130, freeShipping: false },
    { id: 115, title: '오징어젓갈 500g', price: 18000, category: '김치/반찬', image: myeongranImage, description: '쫄깃한 오징어와 감칠맛 나는 양념의 조화.', discount: 0, rating: 4.6, reviews: 180, freeShipping: false },
    { id: 116, title: '창란젓 500g', price: 24000, category: '김치/반찬', image: myeongranImage, description: '독특한 식감과 깊은 맛을 자랑하는 창란젓입니다.', discount: 15, rating: 4.8, reviews: 90, freeShipping: false },
    { id: 117, title: '더덕 무침 300g', price: 19000, category: '김치/반찬', image: namulSetImage, description: '향긋한 더덕을 매콤새콤하게 무쳐낸 건강 반찬입니다.', discount: 10, rating: 4.5, reviews: 55, freeShipping: false },
    { id: 118, title: '연근 조림 300g', price: 10000, category: '김치/반찬', image: namulSetImage, description: '아삭하고 쫀득한 식감의 단짠단짠 연근 조림입니다.', discount: 0, rating: 4.4, reviews: 40, freeShipping: false },
    { id: 119, title: '검은콩 자반 300g', price: 9000, category: '김치/반찬', image: namulSetImage, description: '고소하고 달콤한 영양 만점 검은콩 자반입니다.', discount: 0, rating: 4.6, reviews: 65, freeShipping: false },
    { id: 120, title: '무말랭이 무침 500g', price: 12000, category: '김치/반찬', image: chonggakKimchiImage, description: '꼬들꼬들한 식감이 매력적인 매콤한 무말랭이입니다.', discount: 5, rating: 4.7, reviews: 105, freeShipping: false },

    // 2. 전통간식 (Snacks) - 15 Items
    { id: 201, title: '궁중 약과 선물세트', price: 38000, category: '전통간식', image: yakgwaImage, description: '전통 방식으로 겹겹이 빚어낸 쫀득하고 달콤한 명품 약과입니다.', discount: 10, rating: 4.9, reviews: 320, freeShipping: true },
    { id: 202, title: '수제 유과 모음 1kg', price: 42000, category: '전통간식', image: yugwaImage, description: '바삭하고 부드러운 식감의 다양한 유과 모음입니다.', discount: 15, rating: 4.8, reviews: 150, freeShipping: true },
    { id: 203, title: '제주 오메기떡 20개입', price: 29000, category: '전통간식', image: omegiTteokImage, description: '제주 고유의 맛을 담은 쫄깃한 오메기떡입니다.', discount: 5, rating: 4.7, reviews: 210, freeShipping: false },
    { id: 204, title: '호두 곶감 말이 10구', price: 45000, category: '전통간식', image: walnutPersimmonImage, description: '상주 곶감에 고소한 호두를 넣어 만든 고급 영양 간식입니다.', discount: 0, rating: 4.9, reviews: 180, freeShipping: true },
    { id: 205, title: '인절미 흑임자 떡 세트', price: 22000, category: '전통간식', image: injeolmiImage, description: '고소한 콩고물과 흑임자가 어우러진 쫄깃한 인절미입니다.', discount: 10, rating: 4.8, reviews: 140, freeShipping: false },
    { id: 206, title: '수제 양갱 선물세트 12구', price: 35000, category: '전통간식', image: yakgwaImage, description: '많이 달지 않고 부드러운 고급 수제 양갱입니다.', discount: 5, rating: 4.7, reviews: 95, freeShipping: true },
    { id: 207, title: '찹쌀떡 20개입', price: 20000, category: '전통간식', image: injeolmiImage, description: '쫄깃한 찹쌀떡 속에 달콤한 팥앙금이 가득합니다.', discount: 0, rating: 4.6, reviews: 120, freeShipping: false },
    { id: 208, title: '전통 강정 모음', price: 25000, category: '전통간식', image: yugwaImage, description: '견과류가 듬뿍 들어간 바삭하고 고소한 전통 강정입니다.', discount: 10, rating: 4.8, reviews: 80, freeShipping: false },
    { id: 209, title: '매작과 300g', price: 15000, category: '전통간식', image: yakgwaImage, description: '생강향이 은은한 바삭하고 고소한 전통 과자입니다.', discount: 0, rating: 4.5, reviews: 50, freeShipping: false },
    { id: 210, title: '개성 주악 10구', price: 32000, category: '전통간식', image: yakgwaImage, description: '겉은 바삭하고 속은 쫀득한 즙청이 가득한 개성 주악입니다.', discount: 15, rating: 4.9, reviews: 250, freeShipping: true },
    { id: 211, title: '쑥개떡 1kg', price: 18000, category: '전통간식', image: omegiTteokImage, description: '향긋한 쑥 내음이 가득한 쫄깃한 쑥개떡입니다.', discount: 5, rating: 4.7, reviews: 110, freeShipping: false },
    { id: 212, title: '바람떡 1kg', price: 18000, category: '전통간식', image: injeolmiImage, description: '반달 모양의 떡 속에 달콤한 앙금이 들어간 바람떡입니다.', discount: 0, rating: 4.6, reviews: 90, freeShipping: false },
    { id: 213, title: '경단 1kg', price: 17000, category: '전통간식', image: injeolmiImage, description: '동글동글 귀여운 모양에 다양한 고물을 묻힌 경단입니다.', discount: 0, rating: 4.5, reviews: 75, freeShipping: false },
    { id: 214, title: '약식 1kg', price: 22000, category: '전통간식', image: yakgwaImage, description: '밤, 대추, 잣을 넣어 정성껏 쪄낸 전통 영양 간식입니다.', discount: 10, rating: 4.8, reviews: 130, freeShipping: false },
    { id: 215, title: '식혜 1.5L', price: 8000, category: '전통간식', image: sujeonggwaImage, description: '엿기름으로 삭혀 만든 달콤하고 시원한 전통 식혜입니다.', discount: 0, rating: 4.9, reviews: 400, freeShipping: false },

    // 3. 차/음료 (Tea/Drinks) - 15 Items
    { id: 301, title: '6년근 도라지 진액 스틱', price: 89000, category: '차/음료', image: dorajiStickImage, description: '6년근 약도라지를 진하게 달여낸 프리미엄 스틱형 진액입니다.', discount: 20, rating: 4.9, reviews: 520, freeShipping: true },
    { id: 302, title: '프리미엄 도라지청 500g', price: 45000, category: '차/음료', image: dorajiCheongImage, description: '기관지에 좋은 도라지와 배를 넣어 만든 달콤쌉싸름한 청입니다.', discount: 10, rating: 4.8, reviews: 310, freeShipping: true },
    { id: 303, title: '유기농 도라지차 티백', price: 25000, category: '차/음료', image: dorajiTeaImage, description: '구수하고 은은한 향이 일품인 유기농 도라지차입니다.', discount: 5, rating: 4.7, reviews: 180, freeShipping: false },
    { id: 304, title: '제주 청귤청 1kg', price: 18000, category: '차/음료', image: tangerineCheongImage, description: '상큼한 제주 청귤을 통째로 담은 비타민 가득한 수제청입니다.', discount: 10, rating: 4.8, reviews: 250, freeShipping: false },
    { id: 305, title: '전통 수정과 1.5L', price: 12000, category: '차/음료', image: sujeonggwaImage, description: '계피와 생강의 깊은 맛을 살린 시원한 전통 수정과입니다.', discount: 0, rating: 4.6, reviews: 150, freeShipping: false },
    { id: 306, title: '오미자청 1kg', price: 28000, category: '차/음료', image: tangerineCheongImage, description: '다섯 가지 맛이 나는 오미자를 발효시킨 건강청입니다.', discount: 5, rating: 4.7, reviews: 120, freeShipping: false },
    { id: 307, title: '매실청 1kg', price: 22000, category: '차/음료', image: tangerineCheongImage, description: '소화에 좋은 국내산 매실로 담근 새콤달콤한 매실청입니다.', discount: 0, rating: 4.8, reviews: 200, freeShipping: false },
    { id: 308, title: '유자청 1kg', price: 19000, category: '차/음료', image: tangerineCheongImage, description: '고흥 유자의 향긋함을 그대로 담은 비타민 C 가득 유자청입니다.', discount: 10, rating: 4.7, reviews: 160, freeShipping: false },
    { id: 309, title: '생강청 500g', price: 25000, category: '차/음료', image: dorajiCheongImage, description: '몸을 따뜻하게 해주는 진한 생강청입니다.', discount: 5, rating: 4.6, reviews: 90, freeShipping: false },
    { id: 310, title: '대추차 500g', price: 23000, category: '차/음료', image: dorajiCheongImage, description: '국내산 대추를 푹 고아 만든 진하고 달콤한 대추차입니다.', discount: 0, rating: 4.5, reviews: 80, freeShipping: false },
    { id: 311, title: '쌍화차 10포', price: 30000, category: '차/음료', image: dorajiTeaImage, description: '여러 가지 한약재를 넣어 달인 깊은 맛의 쌍화차입니다.', discount: 15, rating: 4.8, reviews: 110, freeShipping: true },
    { id: 312, title: '국화차 티백 20입', price: 15000, category: '차/음료', image: dorajiTeaImage, description: '가을의 향기를 담은 은은한 국화차입니다.', discount: 0, rating: 4.6, reviews: 60, freeShipping: false },
    { id: 313, title: '녹차 (세작) 80g', price: 40000, category: '차/음료', image: dorajiTeaImage, description: '어린 잎을 따서 만든 부드럽고 감칠맛 나는 고급 녹차입니다.', discount: 10, rating: 4.9, reviews: 75, freeShipping: true },
    { id: 314, title: '홍삼 절편 200g', price: 55000, category: '차/음료', image: dorajiStickImage, description: '홍삼을 꿀에 절여 쫀득하고 달콤하게 즐기는 건강 간식입니다.', discount: 20, rating: 4.9, reviews: 140, freeShipping: true },
    { id: 315, title: '배즙 30포', price: 35000, category: '차/음료', image: dorajiStickImage, description: '달콤한 배를 통째로 착즙한 시원한 배즙입니다.', discount: 5, rating: 4.8, reviews: 220, freeShipping: true },

    // 4. 신선식품/선물세트 (Fresh/Gifts) - 15 Items
    { id: 401, title: '국내산 건도라지 300g', price: 35000, category: '신선식품', image: driedDorajiImage, description: '깨끗하게 손질하여 말린 최상급 국내산 건도라지입니다.', discount: 10, rating: 4.8, reviews: 95, freeShipping: true },
    { id: 402, title: '지리산 자연산 송이버섯 500g', price: 250000, category: '신선식품', image: pineMushroomImage, description: '지리산의 정기를 받고 자란 향이 깊은 자연산 송이버섯입니다.', discount: 0, rating: 5.0, reviews: 42, freeShipping: true },
    { id: 403, title: '횡성 한우 1++ 등심 선물세트', price: 350000, category: '선물세트', image: hanwooSetImage, description: '마블링이 예술인 최고급 횡성 한우 등심 선물세트입니다.', discount: 15, rating: 5.0, reviews: 88, freeShipping: true },
    { id: 404, title: '영광 법성포 굴비 세트', price: 120000, category: '선물세트', image: gulbiSetImage, description: '임금님 수라상에 오르던 명품 영광 굴비입니다.', discount: 10, rating: 4.9, reviews: 150, freeShipping: true },
    { id: 405, title: '완도 활전복 1kg (10-12미)', price: 65000, category: '신선식품', image: abaloneImage, description: '바다의 산삼이라 불리는 싱싱한 완도 활전복입니다.', discount: 20, rating: 4.9, reviews: 210, freeShipping: true },
    { id: 406, title: '제주 은갈치 특대 3미', price: 85000, category: '신선식품', image: gulbiSetImage, description: '두툼한 살밥과 은빛 비늘이 살아있는 제주 은갈치입니다.', discount: 5, rating: 4.8, reviews: 70, freeShipping: true },
    { id: 407, title: '상주 곶감 선물세트 30구', price: 60000, category: '선물세트', image: walnutPersimmonImage, description: '겉은 쫄깃하고 속은 촉촉한 명품 상주 곶감입니다.', discount: 10, rating: 4.9, reviews: 130, freeShipping: true },
    { id: 408, title: '자연산 꿀 1kg', price: 50000, category: '신선식품', image: dorajiCheongImage, description: '청정 지역에서 채밀한 100% 자연산 잡화꿀입니다.', discount: 0, rating: 4.8, reviews: 60, freeShipping: true },
    { id: 409, title: '표고버섯 선물세트', price: 45000, category: '선물세트', image: pineMushroomImage, description: '향과 식감이 뛰어난 최상급 표고버섯 세트입니다.', discount: 5, rating: 4.7, reviews: 85, freeShipping: true },
    { id: 410, title: '한우 사골 세트 4kg', price: 80000, category: '선물세트', image: hanwooSetImage, description: '진하고 구수한 국물이 우러나는 한우 사골입니다.', discount: 10, rating: 4.8, reviews: 110, freeShipping: true },
    { id: 411, title: '제주 옥돔 세트 5미', price: 110000, category: '선물세트', image: gulbiSetImage, description: '담백하고 고소한 맛이 일품인 제주 특산물 옥돔입니다.', discount: 0, rating: 4.9, reviews: 55, freeShipping: true },
    { id: 412, title: '명품 사과 배 혼합세트', price: 75000, category: '선물세트', image: tangerineCheongImage, description: '당도 높은 사과와 배를 엄선하여 담은 과일 선물세트입니다.', discount: 15, rating: 4.7, reviews: 140, freeShipping: true },
    { id: 413, title: '황태채 500g', price: 25000, category: '신선식품', image: driedDorajiImage, description: '강원도 용대리 덕장에서 말린 포슬포슬한 황태채입니다.', discount: 0, rating: 4.6, reviews: 90, freeShipping: false },
    { id: 414, title: '건고사리 200g', price: 18000, category: '신선식품', image: namulSetImage, description: '부드럽고 구수한 맛이 좋은 국내산 건고사리입니다.', discount: 0, rating: 4.5, reviews: 65, freeShipping: false },
    { id: 415, title: '참기름 들기름 세트', price: 40000, category: '선물세트', image: dorajiCheongImage, description: '국내산 통깨와 들깨를 저온 압착하여 짠 고소한 기름 세트입니다.', discount: 5, rating: 4.9, reviews: 180, freeShipping: true },

    // 5. 밀키트 (Meal Kits) - 35 Items (NEW)
    { id: 501, title: '의정부식 부대찌개 밀키트', price: 15900, category: '밀키트', image: mealKitImage, description: '진한 사골 육수와 햄, 소시지가 듬뿍 들어간 정통 부대찌개입니다.', discount: 10, rating: 4.8, reviews: 550, freeShipping: false },
    { id: 502, title: '서울식 소불고기 전골', price: 18900, category: '밀키트', image: mealKitImage, description: '달짝지근한 국물에 부드러운 소고기와 당면을 즐기는 전골 요리입니다.', discount: 5, rating: 4.7, reviews: 420, freeShipping: false },
    { id: 503, title: '춘천 닭갈비 밀키트', price: 14900, category: '밀키트', image: mealKitImage, description: '매콤달콤한 양념과 쫄깃한 닭다리살의 조화가 일품인 닭갈비입니다.', discount: 15, rating: 4.9, reviews: 610, freeShipping: false },
    { id: 504, title: '안동 찜닭 밀키트', price: 16900, category: '밀키트', image: mealKitImage, description: '짭조름한 간장 소스에 매콤함을 더한 밥도둑 안동 찜닭입니다.', discount: 10, rating: 4.8, reviews: 380, freeShipping: false },
    { id: 505, title: '밀푀유 나베', price: 19900, category: '밀키트', image: mealKitImage, description: '겹겹이 쌓은 배추와 소고기가 만들어내는 시원하고 담백한 국물 요리입니다.', discount: 0, rating: 4.9, reviews: 720, freeShipping: false },
    { id: 506, title: '감바스 알 아히요', price: 13900, category: '밀키트', image: mealKitImage, description: '통통한 새우와 마늘, 올리브 오일의 풍미가 가득한 스페인 요리입니다.', discount: 5, rating: 4.7, reviews: 290, freeShipping: false },
    { id: 507, title: '마라탕 밀키트', price: 15900, category: '밀키트', image: mealKitImage, description: '얼얼한 마라 소스와 다양한 재료를 넣어 끓여 먹는 중독성 강한 맛.', discount: 10, rating: 4.8, reviews: 850, freeShipping: false },
    { id: 508, title: '소고기 샤브샤브', price: 21900, category: '밀키트', image: mealKitImage, description: '신선한 채소와 소고기를 맑은 육수에 살짝 익혀 먹는 건강식입니다.', discount: 0, rating: 4.8, reviews: 340, freeShipping: false },
    { id: 509, title: '차돌박이 된장찌개', price: 12900, category: '밀키트', image: mealKitImage, description: '고소한 차돌박이와 구수한 된장의 만남, 깊은 맛의 된장찌개입니다.', discount: 5, rating: 4.7, reviews: 260, freeShipping: false },
    { id: 510, title: '돼지고기 김치찌개', price: 11900, category: '밀키트', image: mealKitImage, description: '잘 익은 김치와 돼지고기를 듬뿍 넣어 끓인 한국인의 소울 푸드.', discount: 0, rating: 4.9, reviews: 510, freeShipping: false },
    { id: 511, title: '순두부 찌개 밀키트', price: 10900, category: '밀키트', image: mealKitImage, description: '몽글몽글한 순두부와 얼큰한 국물이 어우러진 밥도둑 찌개입니다.', discount: 10, rating: 4.8, reviews: 330, freeShipping: false },
    { id: 512, title: '낙곱새 전골', price: 23900, category: '밀키트', image: mealKitImage, description: '낙지, 곱창, 새우의 환상적인 조합, 부산의 명물 낙곱새입니다.', discount: 15, rating: 4.9, reviews: 680, freeShipping: false },
    { id: 513, title: '쭈꾸미 볶음', price: 14900, category: '밀키트', image: mealKitImage, description: '탱글탱글한 쭈꾸미를 매콤하게 볶아낸 입맛 돋우는 별미입니다.', discount: 5, rating: 4.7, reviews: 240, freeShipping: false },
    { id: 514, title: '제육볶음 밀키트', price: 12900, category: '밀키트', image: mealKitImage, description: '매콤달콤한 양념이 고기에 쏙 배어있는 밥 반찬의 정석 제육볶음.', discount: 10, rating: 4.8, reviews: 450, freeShipping: false },
    { id: 515, title: '소고기 미역국', price: 9900, category: '밀키트', image: mealKitImage, description: '소고기를 볶아 끓여내 국물 맛이 진하고 구수한 미역국입니다.', discount: 0, rating: 4.9, reviews: 310, freeShipping: false },
    { id: 516, title: '육개장 밀키트', price: 11900, category: '밀키트', image: mealKitImage, description: '대파와 소고기를 듬뿍 넣어 얼큰하게 끓여낸 전통 보양식 육개장.', discount: 5, rating: 4.8, reviews: 280, freeShipping: false },
    { id: 517, title: '갈비탕', price: 13900, category: '밀키트', image: mealKitImage, description: '큼직한 갈비와 맑고 깊은 국물이 일품인 든든한 한 끼 갈비탕.', discount: 10, rating: 4.7, reviews: 360, freeShipping: false },
    { id: 518, title: '삼계탕 밀키트', price: 14900, category: '밀키트', image: mealKitImage, description: '국내산 닭 한 마리에 인삼, 대추를 넣어 푹 고아낸 보양식.', discount: 5, rating: 4.8, reviews: 190, freeShipping: false },
    { id: 519, title: '떡볶이 (오리지널)', price: 6900, category: '밀키트', image: mealKitImage, description: '매콤달콤한 학교 앞 분식집 스타일의 추억의 떡볶이입니다.', discount: 0, rating: 4.9, reviews: 950, freeShipping: false },
    { id: 520, title: '로제 떡볶이', price: 8900, category: '밀키트', image: mealKitImage, description: '부드러운 크림과 매콤한 소스가 만난 꾸덕한 로제 떡볶이.', discount: 10, rating: 4.8, reviews: 820, freeShipping: false },
    { id: 521, title: '크림 파스타', price: 11900, category: '밀키트', image: mealKitImage, description: '진한 크림 소스와 베이컨의 풍미가 가득한 고소한 크림 파스타.', discount: 5, rating: 4.7, reviews: 230, freeShipping: false },
    { id: 522, title: '토마토 파스타', price: 10900, category: '밀키트', image: mealKitImage, description: '상큼한 토마토 소스와 신선한 재료가 어우러진 정통 파스타.', discount: 0, rating: 4.6, reviews: 180, freeShipping: false },
    { id: 523, title: '알리오 올리오', price: 9900, category: '밀키트', image: mealKitImage, description: '마늘과 올리브 오일의 향긋한 풍미를 즐기는 담백한 오일 파스타.', discount: 0, rating: 4.7, reviews: 210, freeShipping: false },
    { id: 524, title: '찹스테이크 밀키트', price: 17900, category: '밀키트', image: mealKitImage, description: '부드러운 소고기와 아삭한 채소를 특제 소스에 볶아낸 요리.', discount: 15, rating: 4.8, reviews: 340, freeShipping: false },
    { id: 525, title: '함박 스테이크', price: 12900, category: '밀키트', image: mealKitImage, description: '두툼한 패티에 데미그라스 소스를 곁들인 육즙 가득 함박 스테이크.', discount: 10, rating: 4.8, reviews: 290, freeShipping: false },
    { id: 526, title: '돈까스 밀키트', price: 9900, category: '밀키트', image: mealKitImage, description: '바삭한 튀김옷 속에 촉촉한 등심이 들어있는 수제 돈까스.', discount: 5, rating: 4.9, reviews: 410, freeShipping: false },
    { id: 527, title: '치즈 돈까스', price: 11900, category: '밀키트', image: mealKitImage, description: '쭉 늘어나는 모짜렐라 치즈가 듬뿍 들어간 고소한 치즈 돈까스.', discount: 5, rating: 4.9, reviews: 520, freeShipping: false },
    { id: 528, title: '우동 밀키트', price: 6900, category: '밀키트', image: mealKitImage, description: '쫄깃한 면발과 시원한 가쓰오 국물이 좋은 정통 우동.', discount: 0, rating: 4.7, reviews: 160, freeShipping: false },
    { id: 529, title: '메밀 소바', price: 7900, category: '밀키트', image: mealKitImage, description: '시원한 쯔유 육수에 적셔 먹는 여름 별미 메밀 소바.', discount: 0, rating: 4.8, reviews: 220, freeShipping: false },
    { id: 530, title: '비빔 막국수', price: 8900, category: '밀키트', image: mealKitImage, description: '매콤새콤한 양념장에 비벼 먹는 춘천 스타일 비빔 막국수.', discount: 5, rating: 4.7, reviews: 180, freeShipping: false },
    { id: 531, title: '콩국수 밀키트', price: 9900, category: '밀키트', image: mealKitImage, description: '진한 콩물을 갈아 만든 고소하고 시원한 여름 보양식 콩국수.', discount: 0, rating: 4.8, reviews: 250, freeShipping: false },
    { id: 532, title: '칼국수 (바지락)', price: 8900, category: '밀키트', image: mealKitImage, description: '시원한 바지락 육수와 쫄깃한 면발이 일품인 바지락 칼국수.', discount: 0, rating: 4.7, reviews: 190, freeShipping: false },
    { id: 533, title: '수제비 밀키트', price: 8900, category: '밀키트', image: mealKitImage, description: '멸치 육수에 얇게 뜬 수제비를 넣어 끓인 구수한 맛.', discount: 0, rating: 4.6, reviews: 140, freeShipping: false },
    { id: 534, title: '잔치국수', price: 5900, category: '밀키트', image: mealKitImage, description: '깔끔한 멸치 육수에 소면을 말아 먹는 따뜻한 잔치국수.', discount: 0, rating: 4.8, reviews: 120, freeShipping: false },
    { id: 535, title: '비빔국수', price: 6900, category: '밀키트', image: mealKitImage, description: '매콤달콤한 양념장에 신선한 야채를 곁들인 입맛 돋우는 비빔국수.', discount: 5, rating: 4.8, reviews: 160, freeShipping: false }
];
