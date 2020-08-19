﻿using System;

namespace BC.API.Services.AuthenticationService.Exceptions
{
  public class AuthenticationException : ApplicationException
  {
    public AuthenticationException(string message) : base(message)
    {
    }

    public AuthenticationException(string message, Exception innerException) : base(message, innerException)
    {
    }
  }
}
