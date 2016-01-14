/*global define */
/*jslint white:true */
define(["thrift"], function (Thrift) {
"use strict";
//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


var assembly = {};

assembly.ServiceException = function(args) {
  this.message = null;
  this.stacktrace = null;
  this.inputs = null;
  if (args) {
    if (args.message !== undefined) {
      this.message = args.message;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field message is unset!');
    }
    if (args.stacktrace !== undefined) {
      this.stacktrace = args.stacktrace;
    }
    if (args.inputs !== undefined) {
      this.inputs = args.inputs;
    }
  }
};
Thrift.inherits(assembly.ServiceException, Thrift.TException);
assembly.ServiceException.prototype.name = 'ServiceException';
assembly.ServiceException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype === Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype === Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype === Thrift.Type.STRING) {
        this.stacktrace = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype === Thrift.Type.MAP) {
        var _size0 = 0;
        var _rtmp34;
        this.inputs = {};
        var _ktype1 = 0;
        var _vtype2 = 0;
        _rtmp34 = input.readMapBegin();
        _ktype1 = _rtmp34.ktype;
        _vtype2 = _rtmp34.vtype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          if (_i5 > 0 ) {
            if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
              input.rstack.pop();
            }
          }
          var key6 = null;
          var val7 = null;
          key6 = input.readString().value;
          val7 = input.readString().value;
          this.inputs[key6] = val7;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

assembly.ServiceException.prototype.write = function(output) {
  output.writeStructBegin('ServiceException');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  if (this.stacktrace !== null && this.stacktrace !== undefined) {
    output.writeFieldBegin('stacktrace', Thrift.Type.STRING, 2);
    output.writeString(this.stacktrace);
    output.writeFieldEnd();
  }
  if (this.inputs !== null && this.inputs !== undefined) {
    output.writeFieldBegin('inputs', Thrift.Type.MAP, 3);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.inputs));
    for (var kiter8 in this.inputs)
    {
      if (this.inputs.hasOwnProperty(kiter8))
      {
        var viter9 = this.inputs[kiter8];
        output.writeString(kiter8);
        output.writeString(viter9);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

assembly.AuthorizationException = function(args) {
  this.message = null;
  this.stacktrace = null;
  if (args) {
    if (args.message !== undefined) {
      this.message = args.message;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field message is unset!');
    }
    if (args.stacktrace !== undefined) {
      this.stacktrace = args.stacktrace;
    }
  }
};
Thrift.inherits(assembly.AuthorizationException, Thrift.TException);
assembly.AuthorizationException.prototype.name = 'AuthorizationException';
assembly.AuthorizationException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype === Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype === Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype === Thrift.Type.STRING) {
        this.stacktrace = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

assembly.AuthorizationException.prototype.write = function(output) {
  output.writeStructBegin('AuthorizationException');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  if (this.stacktrace !== null && this.stacktrace !== undefined) {
    output.writeFieldBegin('stacktrace', Thrift.Type.STRING, 2);
    output.writeString(this.stacktrace);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

assembly.AuthenticationException = function(args) {
  this.message = null;
  this.stacktrace = null;
  if (args) {
    if (args.message !== undefined) {
      this.message = args.message;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field message is unset!');
    }
    if (args.stacktrace !== undefined) {
      this.stacktrace = args.stacktrace;
    }
  }
};
Thrift.inherits(assembly.AuthenticationException, Thrift.TException);
assembly.AuthenticationException.prototype.name = 'AuthenticationException';
assembly.AuthenticationException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype === Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype === Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype === Thrift.Type.STRING) {
        this.stacktrace = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

assembly.AuthenticationException.prototype.write = function(output) {
  output.writeStructBegin('AuthenticationException');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  if (this.stacktrace !== null && this.stacktrace !== undefined) {
    output.writeFieldBegin('stacktrace', Thrift.Type.STRING, 2);
    output.writeString(this.stacktrace);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

assembly.ObjectReferenceException = function(args) {
  this.message = null;
  this.stacktrace = null;
  if (args) {
    if (args.message !== undefined) {
      this.message = args.message;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field message is unset!');
    }
    if (args.stacktrace !== undefined) {
      this.stacktrace = args.stacktrace;
    }
  }
};
Thrift.inherits(assembly.ObjectReferenceException, Thrift.TException);
assembly.ObjectReferenceException.prototype.name = 'ObjectReferenceException';
assembly.ObjectReferenceException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype === Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype === Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype === Thrift.Type.STRING) {
        this.stacktrace = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

assembly.ObjectReferenceException.prototype.write = function(output) {
  output.writeStructBegin('ObjectReferenceException');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  if (this.stacktrace !== null && this.stacktrace !== undefined) {
    output.writeFieldBegin('stacktrace', Thrift.Type.STRING, 2);
    output.writeString(this.stacktrace);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

assembly.AttributeException = function(args) {
  this.message = null;
  this.stacktrace = null;
  if (args) {
    if (args.message !== undefined) {
      this.message = args.message;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field message is unset!');
    }
    if (args.stacktrace !== undefined) {
      this.stacktrace = args.stacktrace;
    }
  }
};
Thrift.inherits(assembly.AttributeException, Thrift.TException);
assembly.AttributeException.prototype.name = 'AttributeException';
assembly.AttributeException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype === Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype === Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype === Thrift.Type.STRING) {
        this.stacktrace = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

assembly.AttributeException.prototype.write = function(output) {
  output.writeStructBegin('AttributeException');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  if (this.stacktrace !== null && this.stacktrace !== undefined) {
    output.writeFieldBegin('stacktrace', Thrift.Type.STRING, 2);
    output.writeString(this.stacktrace);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

assembly.TypeException = function(args) {
  this.message = null;
  this.stacktrace = null;
  this.valid_types = null;
  if (args) {
    if (args.message !== undefined) {
      this.message = args.message;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field message is unset!');
    }
    if (args.stacktrace !== undefined) {
      this.stacktrace = args.stacktrace;
    }
    if (args.valid_types !== undefined) {
      this.valid_types = args.valid_types;
    }
  }
};
Thrift.inherits(assembly.TypeException, Thrift.TException);
assembly.TypeException.prototype.name = 'TypeException';
assembly.TypeException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype === Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype === Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype === Thrift.Type.STRING) {
        this.stacktrace = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype === Thrift.Type.LIST) {
        var _size10 = 0;
        var _rtmp314;
        this.valid_types = [];
        var _etype13 = 0;
        _rtmp314 = input.readListBegin();
        _etype13 = _rtmp314.etype;
        _size10 = _rtmp314.size;
        for (var _i15 = 0; _i15 < _size10; ++_i15)
        {
          var elem16 = null;
          elem16 = input.readString().value;
          this.valid_types.push(elem16);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

assembly.TypeException.prototype.write = function(output) {
  output.writeStructBegin('TypeException');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  if (this.stacktrace !== null && this.stacktrace !== undefined) {
    output.writeFieldBegin('stacktrace', Thrift.Type.STRING, 2);
    output.writeString(this.stacktrace);
    output.writeFieldEnd();
  }
  if (this.valid_types !== null && this.valid_types !== undefined) {
    output.writeFieldBegin('valid_types', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRING, this.valid_types.length);
    for (var iter17 in this.valid_types)
    {
      if (this.valid_types.hasOwnProperty(iter17))
      {
        iter17 = this.valid_types[iter17];
        output.writeString(iter17);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

assembly.AssemblyStats = function(args) {
  this.num_contigs = null;
  this.dna_size = null;
  this.gc_content = null;
  if (args) {
    if (args.num_contigs !== undefined) {
      this.num_contigs = args.num_contigs;
    }
    if (args.dna_size !== undefined) {
      this.dna_size = args.dna_size;
    }
    if (args.gc_content !== undefined) {
      this.gc_content = args.gc_content;
    }
  }
};
assembly.AssemblyStats.prototype = {};
assembly.AssemblyStats.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype === Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype === Thrift.Type.I64) {
        this.num_contigs = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype === Thrift.Type.I64) {
        this.dna_size = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype === Thrift.Type.DOUBLE) {
        this.gc_content = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

assembly.AssemblyStats.prototype.write = function(output) {
  output.writeStructBegin('AssemblyStats');
  if (this.num_contigs !== null && this.num_contigs !== undefined) {
    output.writeFieldBegin('num_contigs', Thrift.Type.I64, 1);
    output.writeI64(this.num_contigs);
    output.writeFieldEnd();
  }
  if (this.dna_size !== null && this.dna_size !== undefined) {
    output.writeFieldBegin('dna_size', Thrift.Type.I64, 2);
    output.writeI64(this.dna_size);
    output.writeFieldEnd();
  }
  if (this.gc_content !== null && this.gc_content !== undefined) {
    output.writeFieldBegin('gc_content', Thrift.Type.DOUBLE, 3);
    output.writeDouble(this.gc_content);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

assembly.AssemblyExternalSourceInfo = function(args) {
  this.external_source = null;
  this.external_source_id = null;
  this.external_source_origination_date = null;
  if (args) {
    if (args.external_source !== undefined) {
      this.external_source = args.external_source;
    }
    if (args.external_source_id !== undefined) {
      this.external_source_id = args.external_source_id;
    }
    if (args.external_source_origination_date !== undefined) {
      this.external_source_origination_date = args.external_source_origination_date;
    }
  }
};
assembly.AssemblyExternalSourceInfo.prototype = {};
assembly.AssemblyExternalSourceInfo.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype === Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype === Thrift.Type.STRING) {
        this.external_source = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype === Thrift.Type.STRING) {
        this.external_source_id = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype === Thrift.Type.STRING) {
        this.external_source_origination_date = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

assembly.AssemblyExternalSourceInfo.prototype.write = function(output) {
  output.writeStructBegin('AssemblyExternalSourceInfo');
  if (this.external_source !== null && this.external_source !== undefined) {
    output.writeFieldBegin('external_source', Thrift.Type.STRING, 1);
    output.writeString(this.external_source);
    output.writeFieldEnd();
  }
  if (this.external_source_id !== null && this.external_source_id !== undefined) {
    output.writeFieldBegin('external_source_id', Thrift.Type.STRING, 2);
    output.writeString(this.external_source_id);
    output.writeFieldEnd();
  }
  if (this.external_source_origination_date !== null && this.external_source_origination_date !== undefined) {
    output.writeFieldBegin('external_source_origination_date', Thrift.Type.STRING, 3);
    output.writeString(this.external_source_origination_date);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

assembly.AssemblyContig = function(args) {
  this.contig_id = null;
  this.sequence = null;
  this.length = null;
  this.gc_content = null;
  this.md5 = null;
  this.name = null;
  this.description = null;
  this.is_complete = null;
  this.is_circular = null;
  if (args) {
    if (args.contig_id !== undefined) {
      this.contig_id = args.contig_id;
    }
    if (args.sequence !== undefined) {
      this.sequence = args.sequence;
    }
    if (args.length !== undefined) {
      this.length = args.length;
    }
    if (args.gc_content !== undefined) {
      this.gc_content = args.gc_content;
    }
    if (args.md5 !== undefined) {
      this.md5 = args.md5;
    }
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.description !== undefined) {
      this.description = args.description;
    }
    if (args.is_complete !== undefined) {
      this.is_complete = args.is_complete;
    }
    if (args.is_circular !== undefined) {
      this.is_circular = args.is_circular;
    }
  }
};
assembly.AssemblyContig.prototype = {};
assembly.AssemblyContig.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype === Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype === Thrift.Type.STRING) {
        this.contig_id = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype === Thrift.Type.STRING) {
        this.sequence = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype === Thrift.Type.I64) {
        this.length = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype === Thrift.Type.DOUBLE) {
        this.gc_content = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype === Thrift.Type.STRING) {
        this.md5 = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype === Thrift.Type.STRING) {
        this.name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype === Thrift.Type.STRING) {
        this.description = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype === Thrift.Type.BOOL) {
        this.is_complete = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype === Thrift.Type.BOOL) {
        this.is_circular = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

assembly.AssemblyContig.prototype.write = function(output) {
  output.writeStructBegin('AssemblyContig');
  if (this.contig_id !== null && this.contig_id !== undefined) {
    output.writeFieldBegin('contig_id', Thrift.Type.STRING, 1);
    output.writeString(this.contig_id);
    output.writeFieldEnd();
  }
  if (this.sequence !== null && this.sequence !== undefined) {
    output.writeFieldBegin('sequence', Thrift.Type.STRING, 2);
    output.writeString(this.sequence);
    output.writeFieldEnd();
  }
  if (this.length !== null && this.length !== undefined) {
    output.writeFieldBegin('length', Thrift.Type.I64, 3);
    output.writeI64(this.length);
    output.writeFieldEnd();
  }
  if (this.gc_content !== null && this.gc_content !== undefined) {
    output.writeFieldBegin('gc_content', Thrift.Type.DOUBLE, 4);
    output.writeDouble(this.gc_content);
    output.writeFieldEnd();
  }
  if (this.md5 !== null && this.md5 !== undefined) {
    output.writeFieldBegin('md5', Thrift.Type.STRING, 5);
    output.writeString(this.md5);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 6);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin('description', Thrift.Type.STRING, 7);
    output.writeString(this.description);
    output.writeFieldEnd();
  }
  if (this.is_complete !== null && this.is_complete !== undefined) {
    output.writeFieldBegin('is_complete', Thrift.Type.BOOL, 8);
    output.writeBool(this.is_complete);
    output.writeFieldEnd();
  }
  if (this.is_circular !== null && this.is_circular !== undefined) {
    output.writeFieldBegin('is_circular', Thrift.Type.BOOL, 9);
    output.writeBool(this.is_circular);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

assembly.VERSION = '0.1.0';

return assembly;
});