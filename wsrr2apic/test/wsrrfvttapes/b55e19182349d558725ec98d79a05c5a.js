var path = require("path");

/**
 * GET /WSRR/7.5/Metadata/JSON/Query/aaabadxpath
 *
 * accept: application/json
 * host: srb84a.hursley.ibm.com:9443
 * authorization: Basic dXNlcjp1c2Vy
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 500;

  res.setHeader("x-powered-by", "Servlet/3.0");
  res.setHeader("content-length", "4943");
  res.setHeader("content-type", "text/plain");
  res.setHeader("content-language", "en-US");
  res.setHeader("set-cookie", ["LtpaToken2=YJgN01vg0Z7FvobvrvyG4rgXC82aXvqL1yY/XI42lfOLlR8y7RByechOEo9zRuWiQk5l020PRqxkO69mGopSfV5vhrayL8tyDspwONM95vnfohnMq/px2TuHNYTi6n1K8/2donG0SyRLyPcXRuxT8YVApL0AuJjxzLtzSrlR8VDLXMYCyfea/m6Q9+4g5SV9qWALhiwRY8xx8jKlkcIBvRaIn9RvOJGBki4RSww2ImqqgyElOYOhvjkE1KVoKkv+v/oZIxyjs+p91YYIeWM2MqTiWHrp3Qn2xsn/aiPCi0/rCiivbnOPABFQsvJ/mWn5FZtRLicQmgyGDCskvVkOmYrc50HHichlbMsV/J6D36MCgtXxMFMNjOuWzPnL82Cv3TOaMVveZ0rJZb0NAZPEXsx6ZgK9lQGxuMYWxMLGBE6By4P7hcPZN8892sxP4X8melQYOqjhCGi/P5paQFf4Ml87/D/V07e5BlG4z6N3kqbcck/A/UAxgKuL/Pk8lTN7YA/hjWbSRseCuoh/AfDz3kz5V9AUpHYMXPWzAIARZiv7t+J5ucTLxa8xKA5eSLX4WtQMhMmojLcq17xNuikV2gVHhmVW/I4Asexm0ySlDslLOCoK68Z7SMncU1tqVNjkz4iNguRfXcf/1h9nyyqEy5gxT8pbC1MbFOaYTiV172T/YbMZQ8K7G+7T86MKw4Zg; Path=/; Secure; HttpOnly"]);
  res.setHeader("connection", "Close");
  res.setHeader("date", "Fri, 23 Dec 2016 21:01:38 GMT");
  res.setHeader("expires", "Thu, 01 Dec 1994 16:00:00 GMT");
  res.setHeader("cache-control", "no-cache=\"set-cookie, set-cookie2\"");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJlcnJvciI6eyJtZXNzYWdlIjoiR1NSMDA4OUU6IEFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlYWxpbmcgd2l0aCB0aGUgZm9sbG93aW5nIHF1ZXJ5OiBcImFhYWJhZHhwYXRoXCIiLCJzdGFja3RyYWNlIjoiY29tLmlibS5zZXJ2aWNlcmVnaXN0cnkuU2VydmljZVJlZ2lzdHJ5UXVlcnlFeGNlcHRpb246IEdTUjAwODlFOiBBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBkZWFsaW5nIHdpdGggdGhlIGZvbGxvd2luZyBxdWVyeTogXCJhYWFiYWR4cGF0aFwiXG5cdGF0IGNvbS5pYm0uc3IuYXBpLlNlcnZpY2VSZWdpc3RyeUltcGwuZXhlY3V0ZU5hbWVkUXVlcnkoU2VydmljZVJlZ2lzdHJ5SW1wbC5qYXZhOjIwMDMpXG5cdGF0IGNvbS5pYm0uc2VydmljZXJlZ2lzdHJ5LlNlcnZpY2VSZWdpc3RyeVNlc3Npb25CZWFuLmV4ZWN1dGVOYW1lZFF1ZXJ5KFNlcnZpY2VSZWdpc3RyeVNlc3Npb25CZWFuLmphdmE6NjYyKVxuXHRhdCBjb20uaWJtLnNlcnZpY2VyZWdpc3RyeS5FSlNMb2NhbFN0YXRlbGVzc1NlcnZpY2VSZWdpc3RyeVNlc3Npb25fMTcyOGZmMjUuZXhlY3V0ZU5hbWVkUXVlcnkoRUpTTG9jYWxTdGF0ZWxlc3NTZXJ2aWNlUmVnaXN0cnlTZXNzaW9uXzE3MjhmZjI1LmphdmE6NDIwKVxuXHRhdCBjb20uaWJtLnNyLmRhdGEuc2VydmxldC5NZXRhZGF0YUhhbmRsZXIuZG9HZXQoTWV0YWRhdGFIYW5kbGVyLmphdmE6Nzc4KVxuXHRhdCBjb20uaWJtLnNyLmRhdGEuc2VydmxldC5Db250ZW50LmRvR2V0KENvbnRlbnQuamF2YToxMTkpXG5cdGF0IGphdmF4LnNlcnZsZXQuaHR0cC5IdHRwU2VydmxldC5zZXJ2aWNlKEh0dHBTZXJ2bGV0LmphdmE6NTc1KVxuXHRhdCBqYXZheC5zZXJ2bGV0Lmh0dHAuSHR0cFNlcnZsZXQuc2VydmljZShIdHRwU2VydmxldC5qYXZhOjY2OClcblx0YXQgY29tLmlibS53cy53ZWJjb250YWluZXIuc2VydmxldC5TZXJ2bGV0V3JhcHBlci5zZXJ2aWNlKFNlcnZsZXRXcmFwcGVyLmphdmE6MTIzMilcblx0YXQgY29tLmlibS53cy53ZWJjb250YWluZXIuc2VydmxldC5TZXJ2bGV0V3JhcHBlci5oYW5kbGVSZXF1ZXN0KFNlcnZsZXRXcmFwcGVyLmphdmE6NzgxKVxuXHRhdCBjb20uaWJtLndzLndlYmNvbnRhaW5lci5zZXJ2bGV0LlNlcnZsZXRXcmFwcGVyLmhhbmRsZVJlcXVlc3QoU2VydmxldFdyYXBwZXIuamF2YTo0ODApXG5cdGF0IGNvbS5pYm0ud3Mud2ViY29udGFpbmVyLnNlcnZsZXQuU2VydmxldFdyYXBwZXJJbXBsLmhhbmRsZVJlcXVlc3QoU2VydmxldFdyYXBwZXJJbXBsLmphdmE6MTc4KVxuXHRhdCBjb20uaWJtLndzLndlYmNvbnRhaW5lci5maWx0ZXIuV2ViQXBwRmlsdGVyQ2hhaW4uaW52b2tlVGFyZ2V0KFdlYkFwcEZpbHRlckNoYWluLmphdmE6MTM2KVxuXHRhdCBjb20uaWJtLndzLndlYmNvbnRhaW5lci5maWx0ZXIuV2ViQXBwRmlsdGVyQ2hhaW4uZG9GaWx0ZXIoV2ViQXBwRmlsdGVyQ2hhaW4uamF2YTo5Nylcblx0YXQgY29tLmlibS5zci5hcGkuU3RyZWFtaW5nQ29tcHJlc3NlZFJlc3BvbnNlU2VydmxldEZpbHRlci5kb0ZpbHRlcihTdHJlYW1pbmdDb21wcmVzc2VkUmVzcG9uc2VTZXJ2bGV0RmlsdGVyLmphdmE6MTY2KVxuXHRhdCBjb20uaWJtLndzLndlYmNvbnRhaW5lci5maWx0ZXIuRmlsdGVySW5zdGFuY2VXcmFwcGVyLmRvRmlsdGVyKEZpbHRlckluc3RhbmNlV3JhcHBlci5qYXZhOjE5NSlcblx0YXQgY29tLmlibS53cy53ZWJjb250YWluZXIuZmlsdGVyLldlYkFwcEZpbHRlckNoYWluLmRvRmlsdGVyKFdlYkFwcEZpbHRlckNoYWluLmphdmE6OTEpXG5cdGF0IGNvbS5pYm0ud3Mud2ViY29udGFpbmVyLmZpbHRlci5XZWJBcHBGaWx0ZXJNYW5hZ2VyLmRvRmlsdGVyKFdlYkFwcEZpbHRlck1hbmFnZXIuamF2YTo5NjcpXG5cdGF0IGNvbS5pYm0ud3Mud2ViY29udGFpbmVyLmZpbHRlci5XZWJBcHBGaWx0ZXJNYW5hZ2VyLmludm9rZUZpbHRlcnMoV2ViQXBwRmlsdGVyTWFuYWdlci5qYXZhOjExMDcpXG5cdGF0IGNvbS5pYm0ud3Mud2ViY29udGFpbmVyLndlYmFwcC5XZWJBcHAuaGFuZGxlUmVxdWVzdChXZWJBcHAuamF2YTozOTI4KVxuXHRhdCBjb20uaWJtLndzLndlYmNvbnRhaW5lci53ZWJhcHAuV2ViR3JvdXAuaGFuZGxlUmVxdWVzdChXZWJHcm91cC5qYXZhOjMwNClcblx0YXQgY29tLmlibS53cy53ZWJjb250YWluZXIuV2ViQ29udGFpbmVyLmhhbmRsZVJlcXVlc3QoV2ViQ29udGFpbmVyLmphdmE6MTAwNylcblx0YXQgY29tLmlibS53cy53ZWJjb250YWluZXIuV1NXZWJDb250YWluZXIuaGFuZGxlUmVxdWVzdChXU1dlYkNvbnRhaW5lci5qYXZhOjE4MTcpXG5cdGF0IGNvbS5pYm0ud3Mud2ViY29udGFpbmVyLmNoYW5uZWwuV0NDaGFubmVsTGluay5yZWFkeShXQ0NoYW5uZWxMaW5rLmphdmE6MjAwKVxuXHRhdCBjb20uaWJtLndzLmh0dHAuY2hhbm5lbC5pbmJvdW5kLmltcGwuSHR0cEluYm91bmRMaW5rLmhhbmRsZURpc2NyaW1pbmF0aW9uKEh0dHBJbmJvdW5kTGluay5qYXZhOjQ2Mylcblx0YXQgY29tLmlibS53cy5odHRwLmNoYW5uZWwuaW5ib3VuZC5pbXBsLkh0dHBJbmJvdW5kTGluay5oYW5kbGVOZXdSZXF1ZXN0KEh0dHBJbmJvdW5kTGluay5qYXZhOjUzMClcblx0YXQgY29tLmlibS53cy5odHRwLmNoYW5uZWwuaW5ib3VuZC5pbXBsLkh0dHBJbmJvdW5kTGluay5wcm9jZXNzUmVxdWVzdChIdHRwSW5ib3VuZExpbmsuamF2YTozMTYpXG5cdGF0IGNvbS5pYm0ud3MuaHR0cC5jaGFubmVsLmluYm91bmQuaW1wbC5IdHRwSW5ib3VuZExpbmsucmVhZHkoSHR0cEluYm91bmRMaW5rLmphdmE6Mjg3KVxuXHRhdCBjb20uaWJtLndzLnNzbC5jaGFubmVsLmltcGwuU1NMQ29ubmVjdGlvbkxpbmsuZGV0ZXJtaW5lTmV4dENoYW5uZWwoU1NMQ29ubmVjdGlvbkxpbmsuamF2YToxMDcwKVxuXHRhdCBjb20uaWJtLndzLnNzbC5jaGFubmVsLmltcGwuU1NMQ29ubmVjdGlvbkxpbmsucmVhZHlJbmJvdW5kUG9zdEhhbmRzaGFrZShTU0xDb25uZWN0aW9uTGluay5qYXZhOjcxOClcblx0YXQgY29tLmlibS53cy5zc2wuY2hhbm5lbC5pbXBsLlNTTENvbm5lY3Rpb25MaW5rJE15SGFuZHNoYWtlQ29tcGxldGVkQ2FsbGJhY2suY29tcGxldGUoU1NMQ29ubmVjdGlvbkxpbmsuamF2YTo0MTQpXG5cdGF0IGNvbS5pYm0ud3Muc3NsLmNoYW5uZWwuaW1wbC5TU0xVdGlscy5oYW5kbGVIYW5kc2hha2UoU1NMVXRpbHMuamF2YToxMDc0KVxuXHRhdCBjb20uaWJtLndzLnNzbC5jaGFubmVsLmltcGwuU1NMSGFuZHNoYWtlSU9DYWxsYmFjay5jb21wbGV0ZShTU0xIYW5kc2hha2VJT0NhbGxiYWNrLmphdmE6ODcpXG5cdGF0IGNvbS5pYm0ud3MudGNwLmNoYW5uZWwuaW1wbC5BaW9SZWFkQ29tcGxldGlvbkxpc3RlbmVyLmZ1dHVyZUNvbXBsZXRlZChBaW9SZWFkQ29tcGxldGlvbkxpc3RlbmVyLmphdmE6MTc1KVxuXHRhdCBjb20uaWJtLmlvLmFzeW5jLkFic3RyYWN0QXN5bmNGdXR1cmUuaW52b2tlQ2FsbGJhY2soQWJzdHJhY3RBc3luY0Z1dHVyZS5qYXZhOjIxNylcblx0YXQgY29tLmlibS5pby5hc3luYy5Bc3luY0NoYW5uZWxGdXR1cmUuZmlyZUNvbXBsZXRpb25BY3Rpb25zKEFzeW5jQ2hhbm5lbEZ1dHVyZS5qYXZhOjE2MSlcblx0YXQgY29tLmlibS5pby5hc3luYy5Bc3luY0Z1dHVyZS5jb21wbGV0ZWQoQXN5bmNGdXR1cmUuamF2YToxMzgpXG5cdGF0IGNvbS5pYm0uaW8uYXN5bmMuUmVzdWx0SGFuZGxlci5jb21wbGV0ZShSZXN1bHRIYW5kbGVyLmphdmE6MjA0KVxuXHRhdCBjb20uaWJtLmlvLmFzeW5jLlJlc3VsdEhhbmRsZXIucnVuRXZlbnRQcm9jZXNzaW5nTG9vcChSZXN1bHRIYW5kbGVyLmphdmE6Nzc1KVxuXHRhdCBjb20uaWJtLmlvLmFzeW5jLlJlc3VsdEhhbmRsZXIkMi5ydW4oUmVzdWx0SGFuZGxlci5qYXZhOjkwNSlcblx0YXQgY29tLmlibS53cy51dGlsLlRocmVhZFBvb2wkV29ya2VyLnJ1bihUaHJlYWRQb29sLmphdmE6MTg4MSlcbkNhdXNlZCBieTogY29tLmlibS5zZXJ2aWNlcmVnaXN0cnkucGVyc2lzdGVuY2UuUGVyc2lzdGVuY2VQYXJhbWV0ZXJzRXhjZXB0aW9uOiBHU1IwNTEzRTogQW4gRXhjZXB0aW9uIGhhcyBiZWVuIHJlY2VpdmVkIGZyb20gdGhlIFNlcnZpY2VSZWdpc3RyeSBwZXJzaXN0ZW5jZSBpbnRlcmZhY2UuIFF1ZXJ5IG5hbWUgYWFhYmFkeHBhdGggaXMgdW5rbm93biBvciBpcyBub3QgdmFsaWQuXG5cdGF0IGNvbS5pYm0uc3IuYXRoZW5lLnBlcnNpc3RlbmNlLmltcGwuUGVyc2lzdGVkUXVlcnlNYW5hZ2VyLmdldFBlcnNpc3RlZFF1ZXJ5KFBlcnNpc3RlZFF1ZXJ5TWFuYWdlci5qYXZhOjg0Nylcblx0YXQgY29tLmlibS5zci5hdGhlbmUucGVyc2lzdGVuY2UuaW1wbC5QZXJzaXN0ZWRRdWVyeU1hbmFnZXIuZXhlY3V0ZShQZXJzaXN0ZWRRdWVyeU1hbmFnZXIuamF2YTo1MjQpXG5cdGF0IGNvbS5pYm0uc3IuYXRoZW5lLnBlcnNpc3RlbmNlLmltcGwuUGVyc2lzdGVkUXVlcnlNYW5hZ2VyLmV4ZWN1dGUoUGVyc2lzdGVkUXVlcnlNYW5hZ2VyLmphdmE6NDY4KVxuXHRhdCBjb20uaWJtLnNyLmF0aGVuZS5wZXJzaXN0ZW5jZS5pbXBsLlBlcnNpc3RlZFF1ZXJ5TWFuYWdlci5leGVjdXRlKFBlcnNpc3RlZFF1ZXJ5TWFuYWdlci5qYXZhOjQ2Mylcblx0YXQgY29tLmlibS5zci5hdGhlbmUucGVyc2lzdGVuY2UuaW1wbC5QZXJzaXN0ZW5jZU1hbmFnZXJJbXBsLmV4ZWN1dGUoUGVyc2lzdGVuY2VNYW5hZ2VySW1wbC5qYXZhOjM5Milcblx0YXQgY29tLmlibS5zci5hcGkuU2VydmljZVJlZ2lzdHJ5SW1wbC5leGVjdXRlTmFtZWRRdWVyeShTZXJ2aWNlUmVnaXN0cnlJbXBsLmphdmE6MTk5NClcblx0Li4uIDM5IG1vcmVcbiIsImNvZGUiOiJHU1IxMzUwRSIsImNhdXNlbWVzc2FnZSI6IkdTUjA1MTNFOiBBbiBFeGNlcHRpb24gaGFzIGJlZW4gcmVjZWl2ZWQgZnJvbSB0aGUgU2VydmljZVJlZ2lzdHJ5IHBlcnNpc3RlbmNlIGludGVyZmFjZS4gUXVlcnkgbmFtZSBhYWFiYWR4cGF0aCBpcyB1bmtub3duIG9yIGlzIG5vdCB2YWxpZC4ifX0=", "base64"));
  res.end();

  return __filename;
};
