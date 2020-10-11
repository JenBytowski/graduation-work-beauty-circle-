﻿using System.IO;
using System.Threading.Tasks;

namespace BC.API.Infrastructure.Interfaces
{
  public interface IFilesServiceClient
  {
     Task<string> PostFile(Stream fileStream);
  }
}