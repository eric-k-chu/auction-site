import { Lots } from "@/lib/types";
import { randomUUID } from "crypto";

const sample = `1 2018 HYUNDAI BG42403 CT 5NPD84LF8JH223442 CAPITAL ONE AUTO FINANCE
2 2021 HONDA KXN6072 NY 5FNYF8H27MB032182
3 2022 KIA 16KTZ FL 5XXG64J2XNG091983 HYUNDAI MOTOR FINANCE
4 2018 KIA LBM7104 NY KNDPM3AC1J7485240 SANTANDER CONSUMER
5 2014 NISSAN BL90838 CT 1N4AL3AP5EN333030
6 2018 VOLKSWAGEN LLR4925 PA 3VW547AU7JM285991
7 2005 AUDI EC74878 IL WAULT68E45A031855
8 2008 MERCURY KWZ5610 NY 4M2EU48848UJ05876
9 2006 JEEP KZJ4035 NY 1J8HG58226C337531
10 2009 SUBARU LDD4876 NY JF2SH61669H759971
11 2007 FORD LNH8229 PA 3FAHP07ZX7R227618
12 2010 SMART B18PEN NJ WMEEJ3BA6AK360522
13 2000 HONDA M49MTC NJ 1HGCG1655YA036601
14 2003 FREIGHTLINER 72400ME NY 1FUJBGA833HL09567
15 2019 HONDA KTX2454 NY 2HGFCF64KH545983 WELLS FARGO AUTO
16 2019 HYUNDAI LNY6024 PA KM8J2CA43KU918804 CAPITAL ONE AUTO FINANCE
17 2003 BUICK KML6237 PA 3G5DA0E33S606256
18 2012 HONA KZY437 NY 5FNYF4H55CB018119 AMERICAN HONDA
19 2012 CHEVROLET JRM NY 1GAZG1FA3C1198802
20 2004 HONDA DL47411 IL 1HGCM56824A122386
21 2010 FORD MDK1326 PA 3FAHHP0JA3AR160998
22 2005 BMW KBK8140 OH WBXPA734852C45786 MANUFACTURERS AND TRADERS
23 2012 HINO 87792NC NY 5PVNE8JT0C4S54304
24 2007 MITSUBISHI 8EM3741 MD JA4MT41XX7Z004990
25 2003 TOYOTA LFZ8014 NY 2T1CF28P73C603868
26 2016 BUICK KHU1903 NY 1G4GB5G3XGF119621
27 2013 MAZDA RDN8456 NC JM1CW2CL8D0153647 BYRIDER FINANCE, LLC DBA CNAC
28 2005 HONDA LBK1450 NY JHLRD78885C027308
29 2017 NISSAN LEV7550 NY 1N4AL3AP1HC250713 THRIFT INVESTMENT
30 2020 HONDA LBE3629 NY 3CZRU6H34LM727666 AMERICAN HONDA
31 2012 HONDA GJE3212 NY 5J6RM4H78CL013368
32 2005 HONDA LAV1161 NY 5FRNL384X5B021213
33 2007 NISSAN KVJ7525 NY 3N1AB61E47L609703
34 2006 VOLKSWAGEN KYP2937 NY 3VWSF81K76M761178
35 2015 FORD LCG4980 NY 1FADP3F21FL342545
36 2019 FORD LCA6068 NY MAJ3S2GE8KC297868 CARVANA LLC
37 2020 CHEVROLET KUT3133 NY 3GNAXUEV5LL157890 CREDIT ACCEPTANCE
38 2015 MERCEDES PGB539 SC WDDHF8JB8FB119711 AMERICREDIT FINANCIAL SERVICES
39 2023 MERCEDES LDK5166 NY W1KWJ6EB2PG120281 MERCEDES-BENZ
40 2019 HONDA T674670C NY 5FNYF6H54KB071677 AMERICAN HONDA
41 2014 BMW ARKING NY WBA3X5C56ED243175 LENDBUZZ FUNDING LLC
42 2000 FORD KZS6631 NY 1FMPU18L6YLA75251
43 2002 FORD HPB8864 NY 1FTNE24252HB67652
44 2023 HYUNDAI LGT6751 NY KMHLS4AG2PU622561 BANK OF AMERICA
45 2019 FORD LFZ9836 NY 3FA6P0RU3KR182801 CAPITAL ONE AUTO
46 2007 BMW JDA8118 NY WBXPC93447WF24421 BMW BANK OF NORTH
47 2016 JEEP LBX9060 NY 1C4HJWDG0GL171737 CAPITAL ONE AUTO
48 2006 HONDA JRC6089 NY 1HGCM564X6A117520 JPMORGAN CHASE
49 2004 HONDA KTY2419 NY SHSRD78824U202739`;

export async function fetchExampleData(delay = 3000): Promise<Lots> {
  await new Promise((resolve) => setTimeout(resolve, delay));

  const vehicles = sample.split("\n").map((line) => {
    const [, year, make, plateNumber, state, vehicleId, ...lienholderArr] =
      line.split(" ");
    const lienholder = lienholderArr.join(" ");
    return {
      vehicleId,
      lienholder: lienholder.toLocaleLowerCase() || undefined,
      state,
      plateNumber,
      make: make.toLocaleLowerCase(),
      year: parseInt(year),
    };
  });

  return {
    lots: [
      {
        id: randomUUID(),
        location: "Legacy Towing",
        date: 1709878760,
        vehicles,
        address: "131-01 39th Ave Flushing, NY 11354",
        about:
          "I will sell at Public Auction by, on Friday March 08, 2024 at 10:00 o'clock in the morning at Legacy Towing 131-01 39th Ave Flushing, NY 11354 the right, title and interest of the judgment debtors in and to the listed vehicles.",
      },
    ],
  };
}
