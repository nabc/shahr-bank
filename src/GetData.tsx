import axios from "axios";
import { xml2json } from "xml-js";

export default function GetData() {
  const url = "backoffice/Services/bpm/TransactionService.asmx";
  const request = `
    <soap:Envelope
    xmlns:bpm="http://bpmellat.co/"
    xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
    <soap:Header>
        <wsse:Security soap:mustUnderstand="true"
            xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
            xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsu:Timestamp wsu:Id="TS-9394CFD2B4462D5A7216429334166562">
                <wsu:Created>2022-01-23T10:23:36.655Z</wsu:Created>
                <wsu:Expires>2022-01-23T10:24:36.655Z</wsu:Expires>
            </wsu:Timestamp>
            <wsse:UsernameToken wsu:Id="UsernameToken-9394CFD2B4462D5A7216429334082631">
                <wsse:Username>Novira</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">42071638</wsse:Password>
                <wsse:Nonce EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary">jNquos/H4aNjy/dw+GLiqQ==</wsse:Nonce>
                <wsu:Created>2022-01-23T10:23:28.256Z</wsu:Created>
            </wsse:UsernameToken>
        </wsse:Security>
    </soap:Header>
    <soap:Body>
        <bpm:getTransactionByDate>
            <TerminalId>6321889</TerminalId>
            <FromDate>20220120</FromDate>
            <ToDate>20220122</ToDate>
        </bpm:getTransactionByDate>
    </soap:Body>
</soap:Envelope>
    `;

  // axios
  //   .post(url, request, {
  //     headers: { "Content-Type": "text/xml" },
  //   })
  //   .then((res) => {
  //     console.log(res);

  //     const records = JSON.parse(
  //       xml2json(
  //         JSON.parse(xml2json(res.data, { compact: true, spaces: 4 }))["soap:Envelope"]["soap:Body"][
  //           "getTransactionByDateResponse"
  //         ]["getTransactionByDateResult"]["_text"],
  //         {
  //           compact: true,
  //           spaces: 4,
  //         }
  //       )
  //     ).response.record;
  //     console.dir(records);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  const text = `<record>
  <field name="Id" value="321654987" />
  <field name="terminalId" value="111111111" />
  <field name="transactionDate" value="2021/11/19" />
  <field name="transactionTime" value="00:12:21" />
</record><record>
  <field name="Id" value="321654987" />
  <field name="terminalId" value="111111111" />
  <field name="transactionDate" value="2021/11/19" />
  <field name="transactionTime" value="00:12:21" />
</record><record>
  <field name="Id" value="321654987" />
  <field name="terminalId" value="111111111" />
  <field name="transactionDate" value="2021/11/19" />
  <field name="transactionTime" value="00:12:21" />
</record>`;

  const sample = JSON.parse(xml2json(text, { compact: true, spaces: 4 }));
  console.log(sample);

  console.log(getRecordObject(sample.record));

  function getRecordObject(records: any[]) {
    return records.map((record) => {
      return record.field.reduce(
        (acc: any, fieldItem: any) => ({ ...acc, [fieldItem._attributes.name]: fieldItem._attributes.value }),
        {}
      );
    });
  }

  return null;
}
