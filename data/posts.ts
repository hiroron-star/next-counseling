import { Post } from "@/types/post";

export const mockPosts: Post[] = [
  {
    id: "1",
    title: "何をどうしたら良いのかわからない",
    content:
      "過去に気分変調症(持続性抑うつ障害)と診断されたことがあり、最近また調子が悪くなってきています。仕事も続かず、人間関係もうまくいかず、何をどうしたら良いのかわからない状態です。",
    prefecture: "千葉県",
    ageRange: "20代前半",
    gender: "男性",
    status: "closed",
    replyCount: 2,
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "職場に馴染めず、今後のキャリアに悩みます",
    content:
      "こんにちは。今日は、職場のことで抱えている、人間関係の悩みについて相談させてください。転職してから3ヶ月が経ちましたが、なかなか職場の雰囲気に馴染めず、毎日が辛いです。今後のキャリアについても不安でいっぱいです。",
    prefecture: "奈良県",
    ageRange: "30代後半",
    gender: "女性",
    status: "closed",
    replyCount: 10,
    createdAt: new Date("2024-01-14"),
  },
  {
    id: "3",
    title: "家族との関係に悩んでいます",
    content:
      "最近、家族との関係がうまくいっていません。特に母親とのコミュニケーションが取れず、毎日の会話が苦痛になっています。どうしたら改善できるでしょうか？",
    prefecture: "東京都",
    ageRange: "20代後半",
    gender: "女性",
    status: "open",
    replyCount: 5,
    createdAt: new Date("2024-01-16"),
  },
  {
    id: "4",
    title: "時々目に見えない人に導かれている感覚になる時がある",
    content:
      "私は、時々なのですがふと神様や仏様、ご先祖様に見守られているような感覚になり、目に見えない人に導かれているような気がすることがあります。これは正常な感覚なのでしょうか？",
    prefecture: "滋賀県",
    ageRange: "20代後半",
    gender: "女性",
    status: "closed",
    replyCount: 8,
    createdAt: new Date("2024-01-13"),
  },
  {
    id: "5",
    title: "不安や緊張で眠れない日々が続いています",
    content:
      "仕事のプレッシャーからか、最近不安や緊張で眠れない日々が続いています。睡眠薬に頼る前に、何か良い方法はないでしょうか？",
    prefecture: "大阪府",
    ageRange: "40代前半",
    gender: "男性",
    status: "open",
    replyCount: 3,
    createdAt: new Date("2024-01-17"),
  },
];

