﻿using Blades.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blades.Auth
{
    public class PermissionRequirement
    {
        public ResourceInfo Recource { get; set; }

        public PermissionType Requirement { get; set; }
    }
}
