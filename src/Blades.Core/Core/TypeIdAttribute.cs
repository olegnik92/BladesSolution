﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blades.Core
{
    [AttributeUsage(AttributeTargets.Class, Inherited = false, AllowMultiple = false)]
    public class TypeIdAttribute : Attribute
    {
        public Guid TypeId { get; private set; }
        public TypeIdAttribute(string typeId)
        {
            TypeId = Guid.Parse(typeId);
        }
    }
}
