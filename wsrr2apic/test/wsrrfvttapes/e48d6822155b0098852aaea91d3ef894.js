var path = require("path");

/**
 * GET /WSRR/7.5/Content/4db5094d-560b-4bb7.9010.537325531086?type=relative
 *
 * accept: application/json
 * host: srb84a.hursley.ibm.com:9443
 * authorization: Basic dXNlcjp1c2Vy
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("x-powered-by", "Servlet/3.0");
  res.setHeader("expires", "-1");
  res.setHeader("content-type", "text/xml");
  res.setHeader("content-length", "3003");
  res.setHeader("content-language", "en-US");
  res.setHeader("set-cookie", ["LtpaToken2=vdDkMdUsIX8PjzX2oSOa2cJYoAFvaUMK/h27vVkUZpt/twinTytIbwbyJvHs7+oqEmn2zX8goDF0p4g1vLqHULSUGmkkqVB0hJyr3L8d/fojP1sEycZRHc7X15BzIhsn6GG7h/xjFKvgf/1Q9IjIc6lb9V87cu+Bres05XXVqx2bdhyCA6oYbc7AhzPA2Qs6GbsMoiSlIz7RqE7X8gApdnEvsVUJf4yaG4l0xGC5Dbe5w7f1Kpf81IMsmRjA+y5cW2G8VWsBNvtFpMELEciryPw0R3L5j83K3B3g9YcdKT4pNHdQXKlVkr26aMdigp4ZYmmZovwFuo0VvODyB1QLpfQNfMWgUhXP6BUOYV+Z+EH280fFaj27EFpC9r78gbR2YpBT8TGAw2UWPBaGVuGGhO6oxE9rkbKA5cIBI7vH1YBkEoDriMD3qDqpCU9gfBD/s0hthxgLDsAdSgsxlCQ+0TOGHgtMbI7Vyp6mvd4kEy6TpcY7Qt8GYaptrB93N1ZQzWjk00cd8lnyLlM0Pjuq7sPcYYgcTQ/s7yuRn1t4VcxFVgeINU30FmVYj8Eknt8KRuvmMU2hOI2kPRPy14rXz5HzwAQ4wjroPlpd8A8ER3DkpjlACTc88nuRHuVjlor/bv26rWuGtWjVpqT50oZyzBd1lUpSyidBu1Z+tVclY/mPPdNNGvCy/7N4R9uRglLP; Path=/; Secure; HttpOnly"]);
  res.setHeader("connection", "Close");
  res.setHeader("date", "Tue, 23 Aug 2016 13:09:58 GMT");
  res.setHeader("cache-control", "no-cache=\"set-cookie, set-cookie2\"");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c2NoZW1hIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYSIgdGFyZ2V0TmFtZXNwYWNlPSJodHRwOi8vbWF0aC5wb3QuaWJtLmNvbSIgeG1sbnM6aWJtU2NoRXh0bj0iaHR0cDovL3d3dy5pYm0uY29tL3NjaGVtYS9leHRlbnNpb25zIiB4bWxuczppbnRmPSJodHRwOi8vbWF0aC5wb3QuaWJtLmNvbSIgeG1sbnM6dG5zPSJodHRwOi8vbWF0aC5wb3QuaWJtLmNvbSIgeG1sbnM6d3NkbHNvYXA9Imh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzZGwvc29hcC8iIHhtbG5zOndzaT0iaHR0cDovL3dzLWkub3JnL3Byb2ZpbGVzL2Jhc2ljLzEuMS94c2QiIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbGVtZW50IGlibVNjaEV4dG46ZG9jUm9vdD0idHJ1ZSIgbmFtZT0iYWRkUmVzcG9uc2UiPgogICAgICAgICAgICAgICAgPGNvbXBsZXhUeXBlPgogICAgICAgICAgICAgICAgICAgIDxzZXF1ZW5jZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbmFtZT0iYWRkUmV0dXJuIiB0eXBlPSJpbnQiLz4KICAgICAgICAgICAgICAgICAgICA8L3NlcXVlbmNlPgogICAgICAgICAgICAgICAgPC9jb21wbGV4VHlwZT4KICAgICAgICAgICAgPC9lbGVtZW50PgogICAgICAgICAgICA8ZWxlbWVudCBpYm1TY2hFeHRuOmRvY1Jvb3Q9InRydWUiIG5hbWU9Im11bHRpcGx5Ij4KICAgICAgICAgICAgICAgIDxjb21wbGV4VHlwZT4KICAgICAgICAgICAgICAgICAgICA8c2VxdWVuY2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDxlbGVtZW50IG5hbWU9Im11bHRpcGxpY2FuZCIgdHlwZT0iaW50Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxlbGVtZW50IG5hbWU9Im11bHRpcGxpZXIiIHR5cGU9ImludCIvPgogICAgICAgICAgICAgICAgICAgIDwvc2VxdWVuY2U+CiAgICAgICAgICAgICAgICA8L2NvbXBsZXhUeXBlPgogICAgICAgICAgICA8L2VsZW1lbnQ+CiAgICAgICAgICAgIDxlbGVtZW50IGlibVNjaEV4dG46ZG9jUm9vdD0idHJ1ZSIgbmFtZT0ibXVsdGlwbHlSZXNwb25zZSI+CiAgICAgICAgICAgICAgICA8Y29tcGxleFR5cGU+CiAgICAgICAgICAgICAgICAgICAgPHNlcXVlbmNlPgogICAgICAgICAgICAgICAgICAgICAgICA8ZWxlbWVudCBuYW1lPSJtdWx0aXBseVJldHVybiIgdHlwZT0ibG9uZyIvPgogICAgICAgICAgICAgICAgICAgIDwvc2VxdWVuY2U+CiAgICAgICAgICAgICAgICA8L2NvbXBsZXhUeXBlPgogICAgICAgICAgICA8L2VsZW1lbnQ+CiAgICAgICAgICAgIDxlbGVtZW50IGlibVNjaEV4dG46ZG9jUm9vdD0idHJ1ZSIgbmFtZT0ic3VidHJhY3QiPgogICAgICAgICAgICAgICAgPGNvbXBsZXhUeXBlPgogICAgICAgICAgICAgICAgICAgIDxzZXF1ZW5jZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbmFtZT0ibWludWVuZCIgdHlwZT0iaW50Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxlbGVtZW50IG5hbWU9InN1YnRyYWhlbmQiIHR5cGU9ImludCIvPgogICAgICAgICAgICAgICAgICAgIDwvc2VxdWVuY2U+CiAgICAgICAgICAgICAgICA8L2NvbXBsZXhUeXBlPgogICAgICAgICAgICA8L2VsZW1lbnQ+CiAgICAgICAgICAgIDxlbGVtZW50IGlibVNjaEV4dG46ZG9jUm9vdD0idHJ1ZSIgbmFtZT0ic3VidHJhY3RSZXNwb25zZSI+CiAgICAgICAgICAgICAgICA8Y29tcGxleFR5cGU+CiAgICAgICAgICAgICAgICAgICAgPHNlcXVlbmNlPgogICAgICAgICAgICAgICAgICAgICAgICA8ZWxlbWVudCBuYW1lPSJzdWJ0cmFjdFJldHVybiIgdHlwZT0iaW50Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9zZXF1ZW5jZT4KICAgICAgICAgICAgICAgIDwvY29tcGxleFR5cGU+CiAgICAgICAgICAgIDwvZWxlbWVudD4KICAgICAgICAgICAgPGVsZW1lbnQgaWJtU2NoRXh0bjpkb2NSb290PSJ0cnVlIiBuYW1lPSJkaXZpZGUiPgogICAgICAgICAgICAgICAgPGNvbXBsZXhUeXBlPgogICAgICAgICAgICAgICAgICAgIDxzZXF1ZW5jZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbmFtZT0iZGl2aWRlbmQiIHR5cGU9ImludCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8ZWxlbWVudCBuYW1lPSJkaXZpc29yIiB0eXBlPSJpbnQiLz4KICAgICAgICAgICAgICAgICAgICA8L3NlcXVlbmNlPgogICAgICAgICAgICAgICAgPC9jb21wbGV4VHlwZT4KICAgICAgICAgICAgPC9lbGVtZW50PgogICAgICAgICAgICA8ZWxlbWVudCBpYm1TY2hFeHRuOmRvY1Jvb3Q9InRydWUiIG5hbWU9ImRpdmlkZVJlc3BvbnNlIj4KICAgICAgICAgICAgICAgIDxjb21wbGV4VHlwZT4KICAgICAgICAgICAgICAgICAgICA8c2VxdWVuY2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDxlbGVtZW50IG5hbWU9ImRpdmlkZVJldHVybiIgdHlwZT0iZmxvYXQiLz4KICAgICAgICAgICAgICAgICAgICA8L3NlcXVlbmNlPgogICAgICAgICAgICAgICAgPC9jb21wbGV4VHlwZT4KICAgICAgICAgICAgPC9lbGVtZW50PgogICAgICAgICAgICA8ZWxlbWVudCBpYm1TY2hFeHRuOmRvY1Jvb3Q9InRydWUiIG5hbWU9ImFkZCI+CiAgICAgICAgICAgICAgICA8Y29tcGxleFR5cGU+CiAgICAgICAgICAgICAgICAgICAgPHNlcXVlbmNlPgogICAgICAgICAgICAgICAgICAgICAgICA8ZWxlbWVudCBuYW1lPSJhdWdlbmQiIHR5cGU9ImludCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8ZWxlbWVudCBuYW1lPSJhZGRlbmQiIHR5cGU9ImludCIvPgogICAgICAgICAgICAgICAgICAgIDwvc2VxdWVuY2U+CiAgICAgICAgICAgICAgICA8L2NvbXBsZXhUeXBlPgogICAgICAgICAgICA8L2VsZW1lbnQ+CiAgICAgICAgPC9zY2hlbWE+", "base64"));
  res.end();

  return __filename;
};