
var path = require("path");

/**
 * GET /WSRR/7.5/Metadata/JSON/2919fd29-fc17-4729.bae4.0b95690be4f9
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
  res.setHeader("content-length", "2483");
  res.setHeader("expires", "-1");
  res.setHeader("content-language", "en-US");
  res.setHeader("set-cookie", ["LtpaToken2=L1c93N/AFTGmi3544K81Lb/lovqNQArlytnyQYkMVUF3jo41smSxGK+W8m5acmCdEkgrW5XBZ18YMHoAEezGqpJI3rotMpydT9xWVCYU5BuW0Dxi3r62ZqR6Se0Qy/tl8+lhHRWIaC6qnmblAFMRUWylXhv/dsXoHy3m2pbeAKM11DufQ+CirjD/QC/9V3rzwe/eYWuxVk9gFziUc98m//5jF1/iqbL80lbLUyxRq3Dn5bAaf1bzfWVdWsWdI1pe3jtsBOYmbi2/XJIXjfVFe/0pNaATZdfaVgmuGht8n8lQZEoAeBCN8mRLimuP9gzfWol8XFRgHl7ynj3yfys3UYr4YznzML4zJypBp4bi4P/5f4BgQSCpKRsjZVJUS3dkuLyysJ+RWLAEubqJzrzhAk4MNaAesayCg34O3SlLwJotPMPEm7FMMCoGd6S4Th9WM9yZQJ3be1yFey96zjXM8yzp+Xek4CX3DzWAF8fd40u310gzVRXbFirEBsqH7l6E4qgbD++/7bXmG50xDVsysomrSLxyaVAw2L/WgcEPnSsKGWDkvNTw4ns7Ux7PQy86VZme0POArNF7Y/pro25JiftLJv001a5YzTEvGmpTmvV4nrS6yzs1Wi8Ejz+bzYXKB2GhD+o3VMrYVkza2JVUW+YIC4CqrH/veIx82jSa++rJVzhidd1VoiKVsurIK8uU; Path=/; Secure; HttpOnly"]);
  res.setHeader("connection", "Close");
  res.setHeader("date", "Mon, 01 Aug 2016 08:43:45 GMT");
  res.setHeader("cache-control", "no-cache=\"set-cookie, set-cookie2\"");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3sicHJvcGVydGllcyI6W3sidmFsdWUiOiIyOTE5ZmQyOS1mYzE3LTQ3MjkuYmFlNC4wYjk1NjkwYmU0ZjkiLCJuYW1lIjoiYnNyVVJJIn0seyJ2YWx1ZSI6IkJhc2ljIFNlcnZpY2UiLCJuYW1lIjoibmFtZSJ9LHsidmFsdWUiOm51bGwsIm5hbWUiOiJuYW1lc3BhY2UifSx7InZhbHVlIjoiMS4wIiwibmFtZSI6InZlcnNpb24ifSx7InZhbHVlIjoiQmFzaWMgdmVyc2lvbiAxLjAgaW4gU09BUC4iLCJuYW1lIjoiZGVzY3JpcHRpb24ifSx7InZhbHVlIjoiYWRtaW4iLCJuYW1lIjoib3duZXIifSx7InZhbHVlIjoiMTQ2Mjk3MjU3Njk5MiIsIm5hbWUiOiJsYXN0TW9kaWZpZWQifSx7InZhbHVlIjoiMTQ2MjQ2MDAyNTEwNiIsIm5hbWUiOiJjcmVhdGlvblRpbWVzdGFtcCJ9LHsidmFsdWUiOiJ3YXNhZG1pbiIsIm5hbWUiOiJsYXN0TW9kaWZpZWRCeSJ9LHsidmFsdWUiOiJodHRwOlwvXC93d3cuaWJtLmNvbVwveG1sbnNcL3Byb2RcL3NlcnZpY2VyZWdpc3RyeVwvcHJvZmlsZVwvdjZyM1wvR292ZXJuYW5jZUVuYWJsZW1lbnRNb2RlbCNTZXJ2aWNlVmVyc2lvbiIsIm5hbWUiOiJwcmltYXJ5VHlwZSJ9LHsidmFsdWUiOiIiLCJuYW1lIjoiYWxlNjNfZ3VpZCJ9LHsidmFsdWUiOiJzZWFnZXJAdWsuaWJtLmNvbSIsIm5hbWUiOiJhbGU2M19vd25lckVtYWlsIn0seyJ2YWx1ZSI6IiIsIm5hbWUiOiJhbGU2M19hc3NldFR5cGUifSx7InZhbHVlIjoiIiwibmFtZSI6ImFsZTYzX3JlbW90ZVN0YXRlIn0seyJ2YWx1ZSI6IiIsIm5hbWUiOiJhbGU2M19mdWxsRGVzY3JpcHRpb24ifSx7InZhbHVlIjoiIiwibmFtZSI6ImFsZTYzX2Fzc2V0T3duZXJzIn0seyJ2YWx1ZSI6IiIsIm5hbWUiOiJhbGU2M19jb21tdW5pdHlOYW1lIn0seyJ2YWx1ZSI6bnVsbCwibmFtZSI6ImdlcDYzX2NvbnN1bWVySWRlbnRpZmllciJ9LHsidmFsdWUiOm51bGwsIm5hbWUiOiJnZXA2M192ZXJzaW9uVGVybWluYXRpb25EYXRlIn0seyJ2YWx1ZSI6bnVsbCwibmFtZSI6ImdlcDYzX3ZlcnNpb25BdmFpbGFiaWxpdHlEYXRlIn0seyJ2YWx1ZSI6bnVsbCwibmFtZSI6ImFsZTYzX3JlcXVpcmVtZW50c0xpbmsifSx7InZhbHVlIjpudWxsLCJuYW1lIjoiYWxlNjNfYXNzZXRXZWJMaW5rIn1dLCJzdWJzY3JpYmVkVHJhbnNpdGlvbnMiOltdLCJzdWJzY3JpYmVkT3BlcmF0aW9ucyI6W10sInR5cGUiOiJHZW5lcmljT2JqZWN0IiwicmVsYXRpb25zaGlwcyI6W3sidGFyZ2V0VHlwZSI6IkdlbmVyaWNPYmplY3QiLCJuYW1lIjoiYWxlNjNfb3duaW5nT3JnYW5pemF0aW9uIiwicHJpbWFyeVR5cGUiOiJodHRwOlwvXC93d3cuaWJtLmNvbVwveG1sbnNcL3Byb2RcL3NlcnZpY2VyZWdpc3RyeVwvdjZyM1wvQUxFTW9kZWwjT3JnYW5pemF0aW9uIiwidGFyZ2V0QnNyVVJJIjoiOTc3MmQzOTctYThmZC00ZDJmLmFkYjQuNDRmMzQwNDRiNDEwIn0seyJuYW1lIjoiZ2VwNjNfY29uc3VtZXMifSx7Im5hbWUiOiJhbGU2M19hcnRpZmFjdHMifSx7Im5hbWUiOiJnZXA2M19pbnRlcmZhY2VTcGVjaWZpY2F0aW9ucyJ9LHsibmFtZSI6ImdlcDYzX3Byb3ZpZGVkU0NBTW9kdWxlcyJ9LHsidGFyZ2V0VHlwZSI6IkdlbmVyaWNPYmplY3QiLCJuYW1lIjoiZ2VwNjNfcHJvdmlkZWRXZWJTZXJ2aWNlcyIsInByaW1hcnlUeXBlIjoiaHR0cDpcL1wvd3d3LmlibS5jb21cL3htbG5zXC9wcm9kXC9zZXJ2aWNlcmVnaXN0cnlcL3Y2cjNcL1NlcnZpY2VNb2RlbCNTZXJ2aWNlIiwidGFyZ2V0QnNyVVJJIjoiYmI0ZDE5YmItZTBjMC00MDEwLmI1ODIuMzA3ODdjMzA4MjY3In0seyJuYW1lIjoiYWxlNjNfZGVwZW5kZW5jeSJ9LHsidGFyZ2V0VHlwZSI6IkdlbmVyaWNPYmplY3QiLCJuYW1lIjoiZ2VwNjNfcHJvdmlkZXMiLCJwcmltYXJ5VHlwZSI6Imh0dHA6XC9cL3d3dy5pYm0uY29tXC94bWxuc1wvcHJvZFwvc2VydmljZXJlZ2lzdHJ5XC9wcm9maWxlXC92NnIzXC9Hb3Zlcm5hbmNlUHJvZmlsZUV4dGVuc2lvbnMjU2VydmljZUxldmVsRGVmaW5pdGlvbiIsInRhcmdldEJzclVSSSI6IjlhMjdlMDlhLTViYzYtNDY5My5iNmEwLjY3NDdiMDY3YTBhZiJ9LHsibmFtZSI6ImdlcDYzX3Byb3ZpZGVkUkVTVFNlcnZpY2VzIn1dLCJic3JVUkkiOiIyOTE5ZmQyOS1mYzE3LTQ3MjkuYmFlNC4wYjk1NjkwYmU0ZjkiLCJ0YXJnZXRDbGFzc2lmaWNhdGlvbnMiOltdLCJjbGFzc2lmaWNhdGlvbnMiOlt7InVyaSI6Imh0dHA6XC9cL3d3dy5pYm0uY29tXC94bWxuc1wvcHJvZFwvc2VydmljZXJlZ2lzdHJ5XC9saWZlY3ljbGVcL3Y2cjNcL0xpZmVjeWNsZURlZmluaXRpb24jT3BlcmF0aW9uYWwiLCJnb3Zlcm5hbmNlU3RhdGUiOiJ0cnVlIn0seyJ1cmkiOiJodHRwOlwvXC93d3cuaWJtLmNvbVwveG1sbnNcL3Byb2RcL3NlcnZpY2VyZWdpc3RyeVwvcHJvZmlsZVwvdjZyM1wvR292ZXJuYW5jZUVuYWJsZW1lbnRNb2RlbCNTZXJ2aWNlVmVyc2lvbiJ9XSwiZ292ZXJuYW5jZVJvb3RCc3JVUkkiOiIyOTE5ZmQyOS1mYzE3LTQ3MjkuYmFlNC4wYjk1NjkwYmU0ZjkifV0=", "base64"));
  res.end();

  return __filename;
};
