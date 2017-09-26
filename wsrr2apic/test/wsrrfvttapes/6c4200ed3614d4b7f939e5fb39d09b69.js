
var path = require("path");

/**
 * GET /WSRR/7.5/Metadata/JSON/97b28197-17b7-4790.87f0.488f5a48f053
 *
 * accept: application/json
 * host: srb84a.hursley.ibm.com:9443
 * authorization: Basic dXNlcjp1c2Vy
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("x-powered-by", "Servlet/3.0");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "1524");
  res.setHeader("expires", "-1");
  res.setHeader("content-language", "en-US");
  res.setHeader("set-cookie", ["LtpaToken2=L1c93N/AFTGmi3544K81Lb/lovqNQArlytnyQYkMVUF3jo41smSxGK+W8m5acmCdEkgrW5XBZ18YMHoAEezGqpJI3rotMpydT9xWVCYU5BuW0Dxi3r62ZqR6Se0Qy/tl8+lhHRWIaC6qnmblAFMRUWylXhv/dsXoHy3m2pbeAKM11DufQ+CirjD/QC/9V3rzwe/eYWuxVk9gFziUc98m//5jF1/iqbL80lbLUyxRq3Dn5bAaf1bzfWVdWsWdI1pe3jtsBOYmbi2/XJIXjfVFe/0pNaATZdfaVgmuGht8n8lQZEoAeBCN8mRLimuP9gzfWol8XFRgHl7ynj3yfys3UYr4YznzML4zJypBp4bi4P/5f4BgQSCpKRsjZVJUS3dkuLyysJ+RWLAEubqJzrzhAk4MNaAesayCg34O3SlLwJotPMPEm7FMMCoGd6S4Th9WM9yZQJ3be1yFey96zjXM8yzp+Xek4CX3DzWAF8fd40u310gzVRXbFirEBsqH7l6E4qgbD++/7bXmG50xDVsysomrSLxyaVAw2L/WgcEPnSsKGWDkvNTw4ns7Ux7PQy86VZme0POArNF7Y/pro25JiftLJv001a5YzTEvGmpTmvV4nrS6yzs1Wi8Ejz+bzYXKB2GhD+o3VMrYVkza2JVUW+YIC4CqrH/veIx82jSa++rJVzhidd1VoiKVsurIK8uU; Path=/; Secure; HttpOnly"]);
  res.setHeader("connection", "Close");
  res.setHeader("date", "Mon, 01 Aug 2016 08:43:48 GMT");
  res.setHeader("cache-control", "no-cache=\"set-cookie, set-cookie2\"");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3sicHJvcGVydGllcyI6W3sidmFsdWUiOiI5N2IyODE5Ny0xN2I3LTQ3OTAuODdmMC40ODhmNWE0OGYwNTMiLCJuYW1lIjoiYnNyVVJJIn0seyJ2YWx1ZSI6Ik1hdGhTZXJ2ZXJJbnRlcmZhY2Uud3NkbCIsIm5hbWUiOiJuYW1lIn0seyJ2YWx1ZSI6Imh0dHA6XC9cL21hdGgucG90LmlibS5jb20iLCJuYW1lIjoibmFtZXNwYWNlIn0seyJ2YWx1ZSI6IjEuMCIsIm5hbWUiOiJ2ZXJzaW9uIn0seyJ2YWx1ZSI6IiIsIm5hbWUiOiJkZXNjcmlwdGlvbiJ9LHsidmFsdWUiOiJ3YXNhZG1pbiIsIm5hbWUiOiJvd25lciJ9LHsidmFsdWUiOiIxNDY0NzAwOTg1ODA2IiwibmFtZSI6Imxhc3RNb2RpZmllZCJ9LHsidmFsdWUiOiIxNDY0NzAwOTg1ODA2IiwibmFtZSI6ImNyZWF0aW9uVGltZXN0YW1wIn0seyJ2YWx1ZSI6Indhc2FkbWluIiwibmFtZSI6Imxhc3RNb2RpZmllZEJ5In0seyJ2YWx1ZSI6IlVURi04IiwibmFtZSI6ImVuY29kaW5nIn0seyJ2YWx1ZSI6Ik1hdGhTZXJ2ZXJJbnRlcmZhY2Uud3NkbCIsIm5hbWUiOiJsb2NhdGlvbiJ9LHsidmFsdWUiOiIyNjU5IiwibmFtZSI6ImNvbnRlbnRTaXplIn0seyJ2YWx1ZSI6Imh0dHA6XC9cL3d3dy53My5vcmdcLzIwMDFcL1hNTFNjaGVtYSIsIm5hbWUiOiJ4bWxuc194c2QifSx7InZhbHVlIjoiaHR0cDpcL1wvd3MtaS5vcmdcL3Byb2ZpbGVzXC9iYXNpY1wvMS4xXC94c2QiLCJuYW1lIjoieG1sbnNfd3NpIn0seyJ2YWx1ZSI6Imh0dHA6XC9cL3NjaGVtYXMueG1sc29hcC5vcmdcL3dzZGxcL3NvYXBcLyIsIm5hbWUiOiJ4bWxuc193c2Rsc29hcCJ9LHsidmFsdWUiOiJodHRwOlwvXC9tYXRoLnBvdC5pYm0uY29tIiwibmFtZSI6InhtbG5zX3RucyJ9LHsidmFsdWUiOiJodHRwOlwvXC9tYXRoLnBvdC5pYm0uY29tIiwibmFtZSI6InhtbG5zX2ludGYifSx7InZhbHVlIjoiaHR0cDpcL1wvc2NoZW1hcy54bWxzb2FwLm9yZ1wvd3NkbFwvIiwibmFtZSI6InhtbG5zIn0seyJ2YWx1ZSI6Imh0dHA6XC9cL21hdGgucG90LmlibS5jb20iLCJuYW1lIjoieHNkVGFyZ2V0TmFtZXNwYWNlcyJ9XSwic3Vic2NyaWJlZFRyYW5zaXRpb25zIjpbXSwic3Vic2NyaWJlZE9wZXJhdGlvbnMiOltdLCJ0eXBlIjoiV1NETERvY3VtZW50IiwicmVsYXRpb25zaGlwcyI6W3sidGFyZ2V0VHlwZSI6IlhTRERvY3VtZW50IiwibmFtZSI6ImluY2x1ZGVkWFNEcyIsInRhcmdldEJzclVSSSI6IjRkYjUwOTRkLTU2MGItNGJiNy45MDEwLjUzNzMyNTUzMTA4NiJ9XSwiYnNyVVJJIjoiOTdiMjgxOTctMTdiNy00NzkwLjg3ZjAuNDg4ZjVhNDhmMDUzIiwidGFyZ2V0Q2xhc3NpZmljYXRpb25zIjpbXSwiY2xhc3NpZmljYXRpb25zIjpbeyJ1cmkiOiJodHRwOlwvXC93d3cuaWJtLmNvbVwveG1sbnNcL3Byb2RcL3NlcnZpY2VyZWdpc3RyeVwvbGlmZWN5Y2xlXC92NnIzXC9MaWZlY3ljbGVEZWZpbml0aW9uI09ubGluZSIsImdvdmVybmFuY2VTdGF0ZSI6InRydWUifV0sImdvdmVybmFuY2VSb290QnNyVVJJIjoiZmI1MmFmZmItYWRiMS00MWNiLmE2OGIuMGFlYWIxMGE4YmJiIn1d", "base64"));
  res.end();

  return __filename;
};