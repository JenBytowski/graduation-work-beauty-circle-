﻿namespace BC.API.Infrastructure
{
  public class AuthenticationCodeRequest
  {
    public string Code { get; set; }
    
    public string RedirectUrl { get; set; }
  }
}