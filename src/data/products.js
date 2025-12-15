import kimchiImage from '../assets/product_kimchi_whole.png';
import pogiKimchiImage from '../assets/prod_101_pogi_kimchi.png';
import banchanImage from '../assets/product_banchan_set.png';
import hangwaImage from '../assets/product_hangwa_sweets.png';
import dorajiExtract from '../assets/product_doraji_extract.png';
import dorajiTea from '../assets/product_doraji_tea.png';
import driedRoot from '../assets/product_dried_root.png';

export const products = [
    // 김치/반찬 (Kimchi/Sides)
    {
        id: 101,
        title: '솔담 명품 포기김치 5kg',
        price: 45000,
        category: '김치/반찬',
        image: pogiKimchiImage,
        description: '국내산 배추와 태양초 고춧가루로 담근 시원하고 아삭한 명품 포기김치입니다.'
    },
    {
        id: 102,
        title: '여수 돌산 갓김치 2kg',
        price: 28000,
        category: '김치/반찬',
        image: kimchiImage,
        description: '여수 돌산의 톡 쏘는 맛이 일품인 별미 갓김치입니다.'
    },
    {
        id: 103,
        title: '프리미엄 나물 반찬 5종 세트',
        price: 32000,
        category: '김치/반찬',
        image: banchanImage,
        description: '시금치, 고사리, 도라지 등 제철 나물로 구성된 건강 반찬 세트입니다.'
    },
    {
        id: 104,
        title: '저염 명란젓 500g',
        price: 25000,
        category: '김치/반찬',
        image: banchanImage,
        description: '짜지 않고 담백한 최상급 저염 명란젓입니다.'
    },
    {
        id: 105,
        title: '밥도둑 간장게장 2마리',
        price: 55000,
        category: '김치/반찬',
        image: banchanImage,
        description: '알이 꽉 찬 서해안 암꽃게로 담근 감칠맛 나는 간장게장입니다.'
    },
    {
        id: 106,
        title: '총각김치 3kg',
        price: 35000,
        category: '김치/반찬',
        image: kimchiImage,
        description: '아삭아삭 씹히는 맛이 일품인 국내산 총각김치입니다.'
    },

    // 전통간식 (Snacks)
    {
        id: 201,
        title: '궁중 약과 선물세트',
        price: 38000,
        category: '전통간식',
        image: hangwaImage,
        description: '전통 방식으로 겹겹이 빚어낸 쫀득하고 달콤한 명품 약과입니다.'
    },
    {
        id: 202,
        title: '수제 유과 모음 1kg',
        price: 42000,
        category: '전통간식',
        image: hangwaImage,
        description: '바삭하고 부드러운 식감의 다양한 유과 모음입니다.'
    },
    {
        id: 203,
        title: '제주 오메기떡 20개입',
        price: 29000,
        category: '전통간식',
        image: hangwaImage,
        description: '제주 고유의 맛을 담은 쫄깃한 오메기떡입니다.'
    },
    {
        id: 204,
        title: '호두 곶감 말이 10구',
        price: 45000,
        category: '전통간식',
        image: hangwaImage,
        description: '상주 곶감에 고소한 호두를 넣어 만든 고급 영양 간식입니다.'
    },
    {
        id: 205,
        title: '인절미 흑임자 떡 세트',
        price: 22000,
        category: '전통간식',
        image: hangwaImage,
        description: '고소한 콩고물과 흑임자가 어우러진 쫄깃한 인절미입니다.'
    },

    // 차/음료 (Tea/Drinks) - Including existing Doraji items
    {
        id: 301,
        title: '6년근 도라지 진액 스틱',
        price: 89000,
        category: '차/음료',
        image: dorajiExtract,
        description: '6년근 약도라지를 진하게 달여낸 프리미엄 스틱형 진액입니다.'
    },
    {
        id: 302,
        title: '프리미엄 도라지청 500g',
        price: 45000,
        category: '차/음료',
        image: dorajiExtract,
        description: '기관지에 좋은 도라지와 배를 넣어 만든 달콤쌉싸름한 청입니다.'
    },
    {
        id: 303,
        title: '유기농 도라지차 티백',
        price: 25000,
        category: '차/음료',
        image: dorajiTea,
        description: '구수하고 은은한 향이 일품인 유기농 도라지차입니다.'
    },
    {
        id: 304,
        title: '제주 청귤청 1kg',
        price: 18000,
        category: '차/음료',
        image: dorajiExtract,
        description: '상큼한 제주 청귤을 통째로 담은 비타민 가득한 수제청입니다.'
    },
    {
        id: 305,
        title: '전통 수정과 1.5L',
        price: 12000,
        category: '차/음료',
        image: dorajiTea,
        description: '계피와 생강의 깊은 맛을 살린 시원한 전통 수정과입니다.'
    },

    // 신선식품/건재 (Fresh/Dried)
    {
        id: 401,
        title: '국내산 건도라지 300g',
        price: 35000,
        category: '신선식품',
        image: driedRoot,
        description: '깨끗하게 손질하여 말린 최상급 국내산 건도라지입니다.'
    },
    {
        id: 402,
        title: '지리산 자연산 송이버섯 500g',
        price: 250000,
        category: '신선식품',
        image: driedRoot,
        description: '지리산의 정기를 받고 자란 향이 깊은 자연산 송이버섯입니다.'
    },
    {
        id: 403,
        title: '횡성 한우 1++ 등심 선물세트',
        price: 350000,
        category: '선물세트',
        image: banchanImage, // Using banchan image as placeholder for now or generic food
        description: '마블링이 예술인 최고급 횡성 한우 등심 선물세트입니다.'
    },
    {
        id: 404,
        title: '영광 법성포 굴비 세트',
        price: 120000,
        category: '선물세트',
        image: banchanImage,
        description: '임금님 수라상에 오르던 명품 영광 굴비입니다.'
    },
    {
        id: 405,
        title: '완도 활전복 1kg (10-12미)',
        price: 65000,
        category: '신선식품',
        image: banchanImage,
        description: '바다의 산삼이라 불리는 싱싱한 완도 활전복입니다.'
    }
];
