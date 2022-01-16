import Table from "src/core/components/Table";
import useTableColumns from "src/core/hooks/useTableColumns";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function TableWrapper() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([] as any[]);

  const { columns } = useTableColumns();

  useEffect(() => {
    setLoading(false);
    setData([
      {
        region: "منطقه 1خراسان ",
        "province-name": "خراسان رضوی ",
        "city-name": "مشهد ",
        "counter-code": "245151",
        "counter-name": "پایانه باهنر مشهد",
        referer1: {
          refererId: "3216549877",
          name: "امین یوسفی",
        },
        referer2: {
          refererId: "6549873211",
          name: "مسعود ترابی",
        },
      },
      {
        region: "منطقه 1خراسان ",
        "province-name": "خراسان جنوبی ",
        "city-name": "بیرجند ",
        "counter-code": "245278",
        "counter-name": "بازار مرکزی بیرجند ",
        referer1: {
          refererId: "3216549877",
          name: "امین یوسفی",
        },
        referer2: {
          refererId: "6549873211",
          name: "مسعود ترابی",
        },
      },
      {
        region: "منطقه 1خراسان ",
        "province-name": "کرمان ",
        "city-name": "جیرفت ",
        "counter-code": "245435",
        "counter-name": "بلوار شهدا",
        referer1: {
          refererId: "3216549877",
          name: "امین یوسفی",
        },
        referer2: {
          refererId: "6549873211",
          name: "مسعود ترابی",
        },
      },
      {
        region: "منطقه 2 اذربایجان",
        "province-name": "آذربایجان شرقی ",
        "city-name": "تبریز",
        "counter-code": "245103",
        "counter-name": "زعفرانیه ",
        referer1: {
          refererId: "3216549877",
          name: "امین یوسفی",
        },
        referer2: {
          refererId: "6549873211",
          name: "مسعود ترابی",
        },
      },
      {
        region: "منطقه 2 اذربایجان",
        "province-name": "آذربایجان غربی ",
        "city-name": "ارومیه",
        "counter-code": "245122",
        "counter-name": "پناهگاه ",
        referer1: {
          refererId: "3216549877",
          name: "امین یوسفی",
        },
        referer2: {
          refererId: "6549873211",
          name: "مسعود ترابی",
        },
      },
      {
        region: "منطقه 3 اصفهان",
        "province-name": "اصفهان",
        "city-name": "اصفهان ",
        "counter-code": "245175",
        "counter-name": "میدان ولیعصر بهارستان ",
        referer1: {
          refererId: "3216549877",
          name: "امین یوسفی",
        },
        referer2: {
          refererId: "6549873211",
          name: "مسعود ترابی",
        },
      },
      {
        region: "منطقه 4 فارس",
        "province-name": "فارس",
        "city-name": "شیراز",
        "counter-code": "245468",
        "counter-name": "فرصت شیراز",
        referer1: {
          refererId: "3216549877",
          name: "امین یوسفی",
        },
        referer2: {
          refererId: "6549873211",
          name: "مسعود ترابی",
        },
      },
      {
        region: "منطقه 4 فارس",
        "province-name": "فارس",
        "city-name": "شیراز",
        "counter-code": "245112",
        "counter-name": "بلوار پاسداران",
        referer1: {
          refererId: "3216549877",
          name: "امین یوسفی",
        },
        referer2: {
          refererId: "6549873211",
          name: "مسعود ترابی",
        },
      },
      {
        region: "منطقه 5 البرز",
        "province-name": "البرز",
        "city-name": "کرج ",
        "counter-code": "245320",
        "counter-name": "45 متری گلشهر",
        referer1: {
          refererId: "3216549877",
          name: "امین یوسفی",
        },
        referer2: {
          refererId: "6549873211",
          name: "مسعود ترابی",
        },
      },
      {
        region: "منطقه 5 البرز",
        "province-name": "البرز",
        "city-name": "کرج ",
        "counter-code": "245329",
        "counter-name": "مترو کرج ",
        referer1: {
          refererId: "3216549877",
          name: "امین یوسفی",
        },
        referer2: {
          refererId: "6549873211",
          name: "مسعود ترابی",
        },
      },
      {
        region: "منطقه 6 قم",
        "province-name": "قم",
        "city-name": "قم",
        "counter-code": "245390",
        "counter-name": "شهرداری منطقه 2 ",
        referer1: {
          refererId: "3216549877",
          name: "امین یوسفی",
        },
        referer2: {
          refererId: "6549873211",
          name: "مسعود ترابی",
        },
      },
      {
        region: "منطقه 7 قزوین",
        "province-name": "قزوین",
        "city-name": "قزوین ",
        "counter-code": "245113",
        "counter-name": " میدان عارف",
        referer1: {
          refererId: "3216549877",
          name: "امین یوسفی",
        },
        referer2: {
          refererId: "6549873211",
          name: "مسعود ترابی",
        },
      },
      {
        region: "منطقه 7 قزوین",
        "province-name": "گیلان ",
        "city-name": "رشت",
        "counter-code": "245167",
        "counter-name": "سبزه میدان",
        referer1: {
          refererId: "3216549877",
          name: "امین یوسفی",
        },
        referer2: {
          refererId: "6549873211",
          name: "مسعود ترابی",
        },
      },
      {
        region: "منطقه 7 قزوین",
        "province-name": "کردستان ",
        "city-name": "سنندج",
        "counter-code": "245123",
        "counter-name": "بوستان شادی",
        referer1: {
          refererId: "3216549877",
          name: "امین یوسفی",
        },
        referer2: {
          refererId: "6549873211",
          name: "مسعود ترابی",
        },
      },
      {
        region: "منطقه 7 قزوین",
        "province-name": "همدان ",
        "city-name": "همدان ",
        "counter-code": "245305",
        "counter-name": "میدان سپاه ",
        referer1: {
          refererId: "3216549877",
          name: "امین یوسفی",
        },
        referer2: {
          refererId: "6549873211",
          name: "مسعود ترابی",
        },
      },
      {
        region: "منطقه 9 تهران",
        "province-name": "تهران ",
        "city-name": "تهران ",
        "counter-code": "245232",
        "counter-name": "میدان فردوسی",
        referer1: {
          refererId: "3216549877",
          name: "امین یوسفی",
        },
        referer2: {
          refererId: "6549873211",
          name: "مسعود ترابی",
        },
      },
      {
        region: "منطقه 10 تهران",
        "province-name": "تهران ",
        "city-name": "تهران ",
        "counter-code": "245487",
        "counter-name": "صالح آباد ",
        referer1: {
          refererId: "3216549877",
          name: "امین یوسفی",
        },
        referer2: {
          refererId: "6549873211",
          name: "مسعود ترابی",
        },
      },
      {
        region: "منطقه 10 تهران",
        "province-name": "تهران ",
        "city-name": "تهران ",
        "counter-code": "245271",
        "counter-name": "میدان آزادی",
        referer1: {
          refererId: "3216549877",
          name: "امین یوسفی",
        },
        referer2: {
          refererId: "6549873211",
          name: "مسعود ترابی",
        },
      },
      {
        region: "منطقه 11 خوزستان",
        "province-name": "خوزستان ",
        "city-name": "اهواز",
        "counter-code": "245343",
        "counter-name": "کوروش اهواز",
        referer1: {
          refererId: "3216549877",
          name: "امین یوسفی",
        },
        referer2: {
          refererId: "6549873211",
          name: "مسعود ترابی",
        },
      },
      {
        region: "حوزه شمال ",
        "province-name": "مازندران ",
        "city-name": "ساری",
        "counter-code": "245134",
        "counter-name": " بلوار آزادی",
        referer1: {
          refererId: "3216549877",
          name: "امین یوسفی",
        },
        referer2: {
          refererId: "6549873211",
          name: "مسعود ترابی",
        },
      },
    ]);
  }, []);

  return (
    <Box height={"100%"}>
      <Table data={data} columns={columns} loaded={loading} />
    </Box>
  );
}
