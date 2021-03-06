import { atom, selector } from "recoil";
import herbsData from "./herbs";

export const openSideMenu = atom({
  key: "openSideMenu",
  default: false,
});

export const herbsD = atom({
  key: "herbs",
  default: herbsData,
});

export const herbKeyword = atom({
  key: "herbKeyword",
  default: "",
});

export const filteredHerbs = selector({
  key: "filteredHerbs",
  get: ({ get }) => {
    const herbs = get(herbsD);
    const keyword = get(herbKeyword);

    if (!keyword) {
      return null
    } else {
      return herbs.filter((item) => {
        return item.title.includes(keyword);
      });
    }
  },
});

export const selectedClinic = atom({
  key: "selectedClinic",
  default: false,
});

export const clinics = atom({
  key: "clinics",
  default: [
    {
      id: 1,
      name: "保德仁中医诊所",
      pic: "/clinic-1.jpg",
      lang: "国语 / 粤语 / 英语",
      tel: "604-430-8185",
      address: "UnitB 5679 Imperial St., Burnaby",
      email: "vancouverbroadgreen@gmail.com",
      description:
        "保德仁中医馆位于Burnaby,是一所集治疗,养生,美容于一体的中医诊所。主治医生均具有三十至四十年中医针灸及中西医临床经验，并具有中医最高学历及最高级临床职称，针灸、推拿手法超群。擅长治疗神经、肌肉、骨伤等疑难痛症及内、外、妇、儿、皮肤病等。特效针灸美容，美体，产后康复。美容护肤项目：基础护理，小气泡深层清洁，水氧补湿，面部提升收紧及去黄紧致。激光脱毛，无痛祛痣肉疣。 ",
    },
    {
      id: 2,
      name: "东华中医",
      pic: "/clinic-2.jpg",
      lang: "国语 / 粤语 / 英语",
      tel: "604-831-2698",
      email: "vancouverbroadgreen@gmail.com",
      description:
        "保德仁中医馆位于Burnaby,是一所集治疗,养生,美容于一体的中医诊所。主治医生均具有三十至四十年中医针灸及中西医临床经验，并具有中医最高学历及最高级临床职称，针灸、推拿手法超群。擅长治疗神经、肌肉、骨伤等疑难痛症及内、外、妇、儿、皮肤病等。特效针灸美容，美体，产后康复。美容护肤项目：基础护理，小气泡深层清洁，水氧补湿，面部提升收紧及去黄紧致。激光脱毛，无痛祛痣肉疣。 ",
    },
    {
      id: 3,
      name: "保德仁中医诊所",
      pic: "/clinic-1.jpg",
      lang: "国语 / 粤语 / 英语",
      tel: "604-430-8185",
      email: "vancouverbroadgreen@gmail.com",
      description:
        "保德仁中医馆位于Burnaby,是一所集治疗,养生,美容于一体的中医诊所。主治医生均具有三十至四十年中医针灸及中西医临床经验，并具有中医最高学历及最高级临床职称，针灸、推拿手法超群。擅长治疗神经、肌肉、骨伤等疑难痛症及内、外、妇、儿、皮肤病等。特效针灸美容，美体，产后康复。美容护肤项目：基础护理，小气泡深层清洁，水氧补湿，面部提升收紧及去黄紧致。激光脱毛，无痛祛痣肉疣。 ",
    },
    {
      id: 4,
      name: "东华中医",
      pic: "/clinic-2.jpg",
      lang: "国语 / 粤语 / 英语",
      tel: "604-831-2698",
      email: "vancouverbroadgreen@gmail.com",
      description:
        "保德仁中医馆位于Burnaby,是一所集治疗,养生,美容于一体的中医诊所。主治医生均具有三十至四十年中医针灸及中西医临床经验，并具有中医最高学历及最高级临床职称，针灸、推拿手法超群。擅长治疗神经、肌肉、骨伤等疑难痛症及内、外、妇、儿、皮肤病等。特效针灸美容，美体，产后康复。美容护肤项目：基础护理，小气泡深层清洁，水氧补湿，面部提升收紧及去黄紧致。激光脱毛，无痛祛痣肉疣。 ",
    },
  ],
});

export const selectedDoctor = atom({
  key: "selectedDoctor",
  default: {
    bio:
      "简介：毕业于徐州医学院（现徐州医科大学），从事呼吸内科临床诊疗工作30余年。对支气管哮喘、慢阻肺、间质性肺疾病等呼吸疾病，以及各种疑难病例的治疗有着丰富的临床诊疗经验和独到的见解。曾多次前往美国、英国交流学习，拓宽学术视野，同时参与...",
    cat: "儿科",
    goodAt:
      "擅长：支气管哮喘、支气管扩张、慢性支气管炎、间质性肺炎、肺气肿、肺心病、肺间质纤维化、慢性阻塞性肺病、慢性咳嗽、呼吸衰竭、尘肺、矽肺等。",
    id: 1,
    name: "石志坚",
    pic: "/v-doc-1.jpg",
    title: "小儿内科副主任医师",
  },
});

export const doctors = atom({
  key: "doctors",
  default: [
    {
      id: 1,
      name: "石志坚",
      pic: "/v-doc-1.jpg",
      title: "小儿内科副主任医师",
      cat: "儿科",
      clinic: {
        id: 1,
        name: "保德仁中医诊所",
        pic: "/clinic-1.jpg",
        lang: "国语 / 粤语 / 英语",
        tel: "604-430-8185",
        address: "UnitB 5679 Imperial St., Burnaby",
        email: "vancouverbroadgreen@gmail.com",
        description:
          "保德仁中医馆位于Burnaby,是一所集治疗,养生,美容于一体的中医诊所。主治医生均具有三十至四十年中医针灸及中西医临床经验，并具有中医最高学历及最高级临床职称，针灸、推拿手法超群。擅长治疗神经、肌肉、骨伤等疑难痛症及内、外、妇、儿、皮肤病等。特效针灸美容，美体，产后康复。美容护肤项目：基础护理，小气泡深层清洁，水氧补湿，面部提升收紧及去黄紧致。激光脱毛，无痛祛痣肉疣。 ",
      },
      goodAt:
        "擅长：支气管哮喘、支气管扩张、慢性支气管炎、间质性肺炎、肺气肿、肺心病、肺间质纤维化、慢性阻塞性肺病、慢性咳嗽、呼吸衰竭、尘肺、矽肺等。",
      bio:
        "简介：毕业于徐州医学院（现徐州医科大学），从事呼吸内科临床诊疗工作30余年。对支气管哮喘、慢阻肺、间质性肺疾病等呼吸疾病，以及各种疑难病例的治疗有着丰富的临床诊疗经验和独到的见解。曾多次前往美国、英国交流学习，拓宽学术视野，同时参与...",
    },
    {
      id: 2,
      name: "王光强",
      pic: "/doctor-2.jpg",
      title: "小儿内科副主任医师",
      cat: "儿科",
      clinic: 
      {
        id: 2,
        name: "东华中医",
        pic: "/clinic-2.jpg",
        lang: "国语 / 粤语 / 英语",
        tel: "604-831-2698",
        email: "vancouverbroadgreen@gmail.com",
        description:
          "保德仁中医馆位于Burnaby,是一所集治疗,养生,美容于一体的中医诊所。主治医生均具有三十至四十年中医针灸及中西医临床经验，并具有中医最高学历及最高级临床职称，针灸、推拿手法超群。擅长治疗神经、肌肉、骨伤等疑难痛症及内、外、妇、儿、皮肤病等。特效针灸美容，美体，产后康复。美容护肤项目：基础护理，小气泡深层清洁，水氧补湿，面部提升收紧及去黄紧致。激光脱毛，无痛祛痣肉疣。 ",
      },
      goodAt:
        "擅长：支气管哮喘、支气管扩张、慢性支气管炎、间质性肺炎、肺气肿、肺心病、肺间质纤维化、慢性阻塞性肺病、慢性咳嗽、呼吸衰竭、尘肺、矽肺等。",
      bio:
        "简介：毕业于徐州医学院（现徐州医科大学），从事呼吸内科临床诊疗工作30余年。对支气管哮喘、慢阻肺、间质性肺疾病等呼吸疾病，以及各种疑难病例的治疗有着丰富的临床诊疗经验和独到的见解。曾多次前往美国、英国交流学习，拓宽学术视野，同时参与...",
    },
    {
      id: 3,
      name: "周俊",
      pic: "/doctor-3.jpg",
      title: "小儿内科副主任医师",
      cat: "儿科",
      clinic: 
      {
        id: 3,
        name: "保德仁中医诊所",
        pic: "/clinic-1.jpg",
        lang: "国语 / 粤语 / 英语",
        tel: "604-430-8185",
        email: "vancouverbroadgreen@gmail.com",
        description:
          "保德仁中医馆位于Burnaby,是一所集治疗,养生,美容于一体的中医诊所。主治医生均具有三十至四十年中医针灸及中西医临床经验，并具有中医最高学历及最高级临床职称，针灸、推拿手法超群。擅长治疗神经、肌肉、骨伤等疑难痛症及内、外、妇、儿、皮肤病等。特效针灸美容，美体，产后康复。美容护肤项目：基础护理，小气泡深层清洁，水氧补湿，面部提升收紧及去黄紧致。激光脱毛，无痛祛痣肉疣。 ",
      },
      goodAt:
        "擅长：支气管哮喘、支气管扩张、慢性支气管炎、间质性肺炎、肺气肿、肺心病、肺间质纤维化、慢性阻塞性肺病、慢性咳嗽、呼吸衰竭、尘肺、矽肺等。",
      bio:
        "简介：毕业于徐州医学院（现徐州医科大学），从事呼吸内科临床诊疗工作30余年。对支气管哮喘、慢阻肺、间质性肺疾病等呼吸疾病，以及各种疑难病例的治疗有着丰富的临床诊疗经验和独到的见解。曾多次前往美国、英国交流学习，拓宽学术视野，同时参与...",
    },
    {
      id: 4,
      name: "吕莎莎",
      pic: "/doctor-4.jpg",
      title: "小儿内科副主任医师",
      cat: "儿科",
      clinic : 
      {
        id: 4,
        name: "东华中医",
        pic: "/clinic-2.jpg",
        lang: "国语 / 粤语 / 英语",
        tel: "604-831-2698",
        email: "vancouverbroadgreen@gmail.com",
        description:
          "保德仁中医馆位于Burnaby,是一所集治疗,养生,美容于一体的中医诊所。主治医生均具有三十至四十年中医针灸及中西医临床经验，并具有中医最高学历及最高级临床职称，针灸、推拿手法超群。擅长治疗神经、肌肉、骨伤等疑难痛症及内、外、妇、儿、皮肤病等。特效针灸美容，美体，产后康复。美容护肤项目：基础护理，小气泡深层清洁，水氧补湿，面部提升收紧及去黄紧致。激光脱毛，无痛祛痣肉疣。 ",
      },
      goodAt:
        "擅长：支气管哮喘、支气管扩张、慢性支气管炎、间质性肺炎、肺气肿、肺心病、肺间质纤维化、慢性阻塞性肺病、慢性咳嗽、呼吸衰竭、尘肺、矽肺等。",
      bio:
        "简介：毕业于徐州医学院（现徐州医科大学），从事呼吸内科临床诊疗工作30余年。对支气管哮喘、慢阻肺、间质性肺疾病等呼吸疾病，以及各种疑难病例的治疗有着丰富的临床诊疗经验和独到的见解。曾多次前往美国、英国交流学习，拓宽学术视野，同时参与...",
    },
  ],
});
